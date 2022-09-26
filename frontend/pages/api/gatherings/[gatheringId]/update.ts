import { NextApiRequest, NextApiResponse } from "next";
import clientPromise, { MONGODB_DB } from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db(MONGODB_DB);
  const gatheringId = req.query.gatheringId as any;

  if (req.method !== "POST") {
    return res.status(400).json({ error: "Invalid request" });
  }
  const o_id = new ObjectId(gatheringId);
  const updatingGathering = db
    .collection("gatherings")
    .updateOne({ _id: o_id }, { $set: { participants: req.body } });
  if (!updatingGathering) throw new Error("Failed to update gathering.");
  res.status(200).json(updatingGathering);
}
