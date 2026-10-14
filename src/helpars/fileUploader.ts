import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import multer from "multer";
import path from "path";
import { ICloudinaryResponse, IFile } from "../app/interfaces/file";

// this config is from Cloudinary
cloudinary.config({
  cloud_name: "dmuosc3lg",
  api_key: "746329368856669",
  api_secret: "G5pX3BIpQHJPApRYC85CKxvRiFk",
});

// create a uploads folder on root.
// if folder does not exists then create it when server is start to avoid *ENOENT* error
// diskStorage এর বদলে memoryStorage ব্যবহার করা হয়েছে।
// এটি ফাইলকে হার্ডড্রাইভে সেভ না করে RAM (Buffer) এ রাখবে।
// ফলে 'uploads' ফোল্ডার না থাকলেও কোনো সমস্যা নেই।

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

const uploadToCloudinary = async (
  file: any, // এখানে IFile এর বদলে any বা Express.Multer.File দিতে পারো
): Promise<any> => {
  return new Promise((resolve, reject) => {
    /**
     * CHANGE 2:
     * cloudinary.uploader.upload এর বদলে upload_stream ব্যবহার করা হয়েছে।
     * যেহেতু ফাইল এখন 'path'-এ নেই বরং মেমোরি 'buffer'-এ আছে,
     * তাই স্ট্রিম ব্যবহার করে সরাসরি ক্লাউডিনারিতে পাঠাতে হবে।
     */
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "hospital-system", // তুমি চাইলে ফোল্ডার নাম দিতে পারো
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      },
    );

    /**
     * CHANGE 3:
     * মেমোরিতে থাকা ফাইলের বাফারটিকে (file.buffer) স্ট্রিমে পাঠিয়ে দেওয়া হয়েছে।
     * এখানে আর fs.unlinkSync করার প্রয়োজন নেই কারণ ডিস্কে কোনো ফাইল তৈরিই হয়নি।
     */
    uploadStream.end(file.buffer);
  });
};

export const fileUploader = {
  upload,
  uploadToCloudinary,
};
