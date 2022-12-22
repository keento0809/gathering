import { NextApiRequest, NextApiResponse } from "next";
import sharp from "sharp";
import { uploadImage } from "../../../lib/s3";

export default async function TestHandler(
  req: NextApiRequest & { file: Express.Multer.File },
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST": {
      const file = req.file;
      console.log("ugoiteru?file, ", file);
      if (!file) throw new Error("No image attached");
      const fileCaption = file?.originalname?.split(".")[0];
      const fileBuffer = await sharp(file?.buffer)
        .resize({ height: 1920, width: 1080, fit: "contain" })
        .toBuffer();
      const result = await uploadImage(fileBuffer, fileCaption, file?.mimetype);
      console.log(result);
      if (!result) throw new Error("Failed to upload image");
      res.status(200).json({ msg: result });
      break;
    }
    default: {
      throw new Error("Invalid request");
    }
  }
}
