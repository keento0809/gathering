import type { NextApiRequest, NextApiResponse } from "next";

export default function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;
  // validation will be added if the user exists or not
  res.status(200).json({ email, password });
}
