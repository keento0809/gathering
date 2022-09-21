import { NextApiRequest, NextApiResponse } from "next";
import { MONGODB_DB } from "../../../../lib/mongodb";
import clientPromise from "../../../../lib/mongodb";
import { DUMMY_GATHERING_DATA } from "../../../../data/data";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db(MONGODB_DB);
  const gatheringId = req.query.gatheringId as any;

  switch (req.method) {
    case "GET": {
      const o_id = new ObjectId(gatheringId);
      const gathering = await db
        .collection("gatherings")
        .findOne({ _id: o_id });
      if (!gathering) throw new Error("Gathering not found.");
      res.status(200).json(gathering);
      console.log(gathering);
      // res.json(gathering);
    }
    default:
      break;
  }
}
