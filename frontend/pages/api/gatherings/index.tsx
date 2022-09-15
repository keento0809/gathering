import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import { MONGODB_DB } from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db(MONGODB_DB);
  switch (req.method) {
    case "POST": {
      let bodyObj = JSON.parse(req.body);
      let gathering = await db.collection("gatherings").insertOne(bodyObj);
      res.json(gathering);
      break;
    }
    case "GET": {
      const allGatherings = await db
        .collection("gatherings")
        .find({})
        .toArray();
      console.log(typeof allGatherings);

      res.status(200).json(allGatherings);
    }
    default:
      break;
  }
}
