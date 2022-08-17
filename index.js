import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import corsOptions from "./config/corsOptions.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { connectDB } from "./config/connectDb.js";
import dotenv from "dotenv";
import credentials from "./middleware/credentials.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import userRoutes from "./routes/users.js";
import linkRoutes from "./routes/link.js";
import linkAllow from "./middleware/linkAllow.js";
import cookieSession from "cookie-session";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors(corsOptions));
app.use(credentials);
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers, *, Access-Control-Allow-Origin",
    "Origin, X-Requested-with, Content_Type,Accept,Authorization",
    "https://hook-murex.vercel.app"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// app.set('trust proxy', 1)
// app.use(
//     cookieSession({
//       name: "__session",
//       keys: ["key1"],
//         maxAge: 24 * 60 * 60 * 100,
//         secure: true,
//         httpOnly: true,
//         sameSite: 'none'
//     })
// );

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);
app.use("/user", userRoutes);
app.use("/link", linkAllow, linkRoutes);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB 😆");
  app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
});
