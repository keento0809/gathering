import type { NextApiRequest, NextApiResponse } from "next";

export default function SignupHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userData = req.body;
  const { username, email, password } = userData;
  res.status(200).json({ username, email, password });
}
