import prisma from "@/prisma/prisma";
import jwt, { Jwt } from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import { NextResponse } from "next/server";

// The Kinde issuer URL should already be in your `.env` file
// from when you initially set up Kinde. This will fetch your
// public JSON web keys file
const client = jwksClient({
  jwksUri: `${process.env.KINDE_ISSUER_URL}/.well-known/jwks.json`,
});

export async function POST(req: Request) {
  try {
    console.log("Webhook received"); // Debug log 1

    // Get the token from the request
    const token = await req.text();
    console.log("Token received:", token.substring(0, 50) + "..."); // Debug log 2

    // Decode the token
    const decodedToken = jwt.decode(token, { complete: true }) as Jwt;
    console.log("Decoded token header:", decodedToken.header); // Debug log 3

    const { header } = decodedToken;
    const { kid } = header;

    // Verify the token
    const key = await client.getSigningKey(kid);
    console.log("Signing key retrieved"); // Debug log 4

    const signingKey = key.getPublicKey();
    const event: any = await jwt.verify(token, signingKey);
    console.log("Event type:", event.type); // Debug log 5

    // Handle various events
    if (event.type === "user.created") {
      console.log("Creating user:", event.data.user); // Debug log 6
      const userDetails = event.data.user;
      // add user to database
      await prisma.user.create({
        data: {
          email: userDetails.email,
          firstName: userDetails.first_name,
          lastName: userDetails.last_name,
          id: userDetails.id,
        },
      });
      console.log("User created in database"); // Debug log 7
    }

    return NextResponse.json({ status: 200, data: event.data });
  } catch (err) {
    console.error("Webhook error:", err); // Better error logging
    if (err instanceof Error) {
      console.error(err.message);
      return NextResponse.json({ message: err.message }, { status: 400 });
    }
  }
  return NextResponse.json({ status: 200, statusText: "success" });
}
