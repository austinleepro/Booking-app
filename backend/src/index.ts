import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';

// connect the DB
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

// get test api
app.get("/api/test", async (req : Request, res : Response) => {
    res.json({message: "Hello from express endpoint!"})
});

// app listening
app.listen(7000, () => {
    console.log("App is running on localhost:7000");
});