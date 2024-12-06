import NextAuth from "next-auth/next";

import GitLab from "next-auth/providers/gitlab";
import Google from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GitLab({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
});

export { handler as GET, handler as POST };
