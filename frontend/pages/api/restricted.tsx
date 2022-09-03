import React from "react";
import { unstable_getServerSession } from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "./auth/[...nextauth]";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    res.send({
      content: "This is protected content.",
    });
  } else {
    res.send({
      error: "You must be signed in.",
    });
  }
};
