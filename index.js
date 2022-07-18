import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import corsOptions from './config/corsOptions.js'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import {connectDB} from './config/connectDb.js';
import dotenv from "dotenv";
import credentials from './middleware/credentials.js'
import postRoutes from './routes/posts.js'
import linkRoutes from './routes/link.js'
import linkAllow from './middleware/linkAllow.js';
import cookieSession from 'cookie-session';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors(corsOptions));
// app.use(credentials);

app.set('trust proxy', 1)
app.use(
    cookieSession({
      name: "__session",
      keys: ["key1"],
        maxAge: 24 * 60 * 60 * 100,
        secure: true,
        httpOnly: true,
        sameSite: 'none'
    })
);

// app.use((req,res, next)=>{
//     res.setHeader('set-cookie', [
//        'cookie1=value1; SameSite=Lax',
//        'cookie2=value2; SameSite=None; Secure',
//      ]);
//      next();
//    }); 

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(cookieParser());


app.use(bodyParser.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb',   parameterLimit: 100000, extended: true }));

app.use('/posts', postRoutes);
app.use('/link', linkAllow, linkRoutes)


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB 😆');
    app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
});