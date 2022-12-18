import {
  S3Client,
  PutObjectAclCommand,
  DeleteObjectCommand,
  GetObjectAclCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const bucketName = process.env.NEXT_PUBLIC_BUCKET_NAME;
const bucketRegion = process.env.NEXT_PUBLIC_BUCKET_REGION;
const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
const secretAccessKey = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY;

export const s3Client = new S3Client({
  credentials: {
    accessKeyId: accessKey!,
    secretAccessKey: secretAccessKey!,
  },
  region: bucketRegion!,
});

export function uploadImage(fileBuffer: any, fileName: string, mimetype: any) {
  const params = {
    Bucket: bucketName,
    Body: fileBuffer,
    Key: fileName,
    ContentType: mimetype,
  };
  return s3Client.send(new PutObjectAclCommand(params));
}

export function deleteImage(fileName: any) {
  const deleteParams = {
    Bucket: bucketName,
    Key: fileName,
  };
  return s3Client.send(new DeleteObjectCommand(deleteParams));
}

export async function getSingleImageUrl(Key: any) {
  const getParams = {
    Bucket: bucketName,
    Key,
  };
  const command = new GetObjectAclCommand(getParams);
  const seconds = 60;
  const url = await getSignedUrl(s3Client, command, {
    expiresIn: seconds,
  });
  return url;
}
