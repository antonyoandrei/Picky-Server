import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';
import config from '../config/config';

cloudinary.config(config.cloudinary);

export const uploadImage = async (req: any) => {
  try {
    const data = await req.formData();
    const image = await data.get('image');
    const fileBuffer = await image.arrayBuffer();

    const mime = image.type;
    const encoding = 'base64';
    const base64Data = Buffer.from(fileBuffer).toString(encoding);
    const fileUri = `data:${mime};${encoding},${base64Data}`;

    const uploadToCloudinary = () => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload(fileUri, {
            invalidate: true,
          })
          .then((result) => {
            console.log(result);
            resolve(result);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
    };

    const result = await uploadToCloudinary();
    const imageUrl = result.secure_url;

    return NextResponse.json({ success: true, imageUrl }, { status: 200 });
  } catch (error) {
    console.log('server err', error);
    return NextResponse.json({ err: 'Internal Server Error' }, { status: 500 });
  }
};
