import type { NextApiRequest, NextApiResponse } from "next";

export default function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ status: "Done!!" });
}
