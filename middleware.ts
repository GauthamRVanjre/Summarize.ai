import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
export default function middleware(req: Request) {
  return withAuth(req);
}
export const config = {
  matcher: ["/admin"],
};
