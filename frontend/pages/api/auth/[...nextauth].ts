import React from "react";
import NextAuth from "next-auth";
import GitHubProviders from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProviders({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
});
