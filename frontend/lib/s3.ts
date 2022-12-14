import {
  S3Client,
  PutObjectAclCommand,
  DeleteObjectCommand,
  GetObjectAclCommand,
} from "@aws-sdk/client-s3";

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
