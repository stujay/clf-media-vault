import { S3Client, CopyObjectCommand, DeleteObjectCommand, PutObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { CloudFrontClient, CreateInvalidationCommand } from "@aws-sdk/client-cloudfront";
import { fail } from "@sveltejs/kit";
import { p as private_env } from "../../chunks/shared-server.js";
const BUCKET_NAME = "cracking-language-media";
const CLOUDFRONT_DOMAIN = "media.crackinglanguage.com";
const s3Client = new S3Client({ region: "ap-southeast-1" });
const cfClient = new CloudFrontClient({ region: "us-east-1" });
const load = async () => {
  try {
    const command = new ListObjectsV2Command({ Bucket: BUCKET_NAME });
    const response = await s3Client.send(command);
    const assets = (response.Contents || []).map((item) => {
      const key = item.Key || "";
      return {
        key,
        url: `https://${CLOUDFRONT_DOMAIN}/${key}`,
        lastModified: item.LastModified,
        size: item.Size,
        type: key.split(".").pop()?.toLowerCase() || "unknown"
      };
    });
    return { assets, distId: private_env.CLOUDFRONT_DIST_ID || null };
  } catch (error) {
    console.error("Error loading S3 assets:", error);
    return { assets: [], error: "Failed to load assets from S3." };
  }
};
const actions = {
  upload: async ({ request }) => {
    const formData = await request.formData();
    const files = formData.getAll("file");
    const prefix = formData.get("prefix") || "";
    if (!files || files.length === 0) {
      return fail(400, { message: "No file provided" });
    }
    const uploadedKeys = [];
    try {
      await Promise.all(files.map(async (file) => {
        if (!file.name || file.size === 0) return;
        const key = prefix ? `${prefix.replace(/\/$/, "")}/${file.name}` : file.name;
        const arrayBuffer = await file.arrayBuffer();
        await s3Client.send(new PutObjectCommand({
          Bucket: BUCKET_NAME,
          Key: key,
          Body: Buffer.from(arrayBuffer),
          ContentType: file.type
        }));
        uploadedKeys.push(key);
      }));
      if (uploadedKeys.length > 0 && private_env.CLOUDFRONT_DIST_ID) {
        await cfClient.send(new CreateInvalidationCommand({
          DistributionId: private_env.CLOUDFRONT_DIST_ID,
          InvalidationBatch: {
            CallerReference: Date.now().toString(),
            Paths: {
              Quantity: uploadedKeys.length,
              Items: uploadedKeys.map((k) => `/${k}`)
            }
          }
        }));
      }
      return { success: true, count: uploadedKeys.length };
    } catch (error) {
      console.error("Upload failed:", error);
      return fail(500, { message: "Upload failed" });
    }
  },
  rename: async ({ request }) => {
    const formData = await request.formData();
    const oldKey = formData.get("oldKey");
    let newKey = formData.get("newKey");
    if (!oldKey || !newKey) return fail(400, { message: "Missing keys" });
    newKey = newKey.replace(/^\/+/, "");
    if (oldKey === newKey) return { success: true };
    try {
      await s3Client.send(new CopyObjectCommand({
        Bucket: BUCKET_NAME,
        CopySource: encodeURI(`${BUCKET_NAME}/${oldKey}`),
        Key: newKey
      }));
      await s3Client.send(new DeleteObjectCommand({
        Bucket: BUCKET_NAME,
        Key: oldKey
      }));
      if (private_env.CLOUDFRONT_DIST_ID) {
        await cfClient.send(new CreateInvalidationCommand({
          DistributionId: private_env.CLOUDFRONT_DIST_ID,
          InvalidationBatch: {
            CallerReference: Date.now().toString(),
            Paths: {
              Quantity: 2,
              Items: [`/${oldKey}`, `/${newKey}`]
            }
          }
        }));
      }
      return { success: true, oldKey, newKey };
    } catch (error) {
      console.error("Rename failed:", error);
      return fail(500, { message: "Rename failed" });
    }
  }
};
export {
  actions,
  load
};
