import { authMiddleware } from "@kinde-oss/kinde-auth-nextjs/server";

export const config = {
  matchar: ["/dashboard/:path*", "/auth-callback"],
};

export default authMiddleware;
