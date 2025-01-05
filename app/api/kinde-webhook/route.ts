import { NextResponse } from "next/server";
import jwksClient from "jwks-rsa";
import jwt, { Jwt } from "jsonwebtoken";

// The Kinde issuer URL should already be in your `.env` file
// from when you initially set up Kinde. This will fetch your
// public JSON web keys file
const client = jwksClient({
  jwksUri: `${process.env.KINDE_ISSUER_URL}/.well-known/jwks.json`,
});

export async function POST(req: Request) {
  try {
    // Get the token from the request
    const token = await req.text();

    // Decode the token
    const decodedToken = jwt.decode(token, { complete: true }) as Jwt;
    const { header } = decodedToken;
    const { kid } = header;

    // Verify the token
    const key = await client.getSigningKey(kid);
    const signingKey = key.getPublicKey();
    const event: any = await jwt.verify(token, signingKey);

    // Handle various events
    if (event.type === "user.created") {
      console.log("User ", event.data);
      // add user to database
    }

    return NextResponse.json({ status: 200, data: event.data });
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      return NextResponse.json({ message: err.message }, { status: 400 });
    }
  }
  return NextResponse.json({ status: 200, statusText: "success" });
}
