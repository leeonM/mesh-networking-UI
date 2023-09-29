import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import userRoutes from "./routes/users.js"
import eventRoutes from "./routes/events.js"
import authRoutes from "./routes/auth.js"
import messageRoutes from "./routes/messages.js"
import cookieParser from 'cookie-parser';


const app = express();
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Credentials', true);
    next()
})
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000","https://api.cloudinary.com/v1_1/mesh-leeon1000/image/upload"]
}))
app.use(cookieParser())

dotenv.config()

app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


app.listen(8800,()=>{
    console.log("Connected to server successfully")
})