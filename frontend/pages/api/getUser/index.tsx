import { NextApiRequest, NextApiResponse } from "next";
import clientPromise, { MONGODB_TEST_COLLECTION } from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const client = await clientPromise;
    const db = client.db(MONGODB_TEST_COLLECTION);

    const currentUser = await db.collection("users").findOne({});

    res.status(200).json(currentUser);
  }
}
