import { NextAuthOptions } from "next-auth";

import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { supabase } from "./supabase/supabase";

export const authOptions: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      const { data: existingUser } = await supabase
        .from("users")
        .select("*")
        .eq("email", user.email)
        .single();

      if (!existingUser) {
        // Create a new user in Supabase
        await supabase.from("users").insert({
          email: user.email,
          name: user.name,
          image: user.image,
          provider: account?.provider,
        });
      }

      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
