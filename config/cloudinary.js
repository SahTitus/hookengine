import { v2 as cloudinary } from "cloudinary";
import {CloudinaryStorage }from 'multer-storage-cloudinary'
import multer from "multer";

 export const cloudConfig = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_KEY_SECRET,
    secure: true,
  });
}
    console.log("res");

 const storage =multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },

  filename: function (req, file, cb) {

    // let filename = 'filenametogive';
    const filename = req.body.image 
  

    cb(null, filename)
    console.log(filename)
  }
}) 


   export const upload = multer({ storage: storage });
   console.log(upload)


// import { v2 as cloudinary } from "cloudinary";

// export const cloudUpload = async () => {
// //   cloudinary.config(process.env.CLOUDINARY_URL);
// // };

// try {
//     await cloudinary.config(process.env.CLOUDINARY_URL);
//   } catch (err) {
//     console.error(err);
//   }}
// export default cloudinary
