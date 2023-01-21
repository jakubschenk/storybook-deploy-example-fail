import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      console.log(token);
      return !!token;
    },
  },
});
