import { NextApiRequest, NextApiResponse } from "next";
import { MONGODB_DB } from "../../../../lib/mongodb";
import clientPromise from "../../../../lib/mongodb";
import { DUMMY_GATHERING_DATA } from "../../../../data/data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db(MONGODB_DB);
  const gatheringId = req.query.id as string;
  console.log(gatheringId);

  switch (req.method) {
    case "GET": {
      // temporary
      const gathering = DUMMY_GATHERING_DATA.find(
        (data) => data._id.toString() == gatheringId
      );
      if (!gathering) throw new Error("Gathering not found.");
      // const gathering = await db.collection("gathering").findOne({ id: id });
      // if (!gathering) throw new Error("Gathering not found.");
      // res.status(200).json(gathering);
      res.json(gathering);
    }
    default:
      break;
  }
}
