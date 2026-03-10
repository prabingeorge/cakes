import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


// app config
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();


// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res)=>{
    res.send("API Working");
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// mongodb+srv://prabingeorge:Prabin13@cluster0.xjh1jpc.mongodb.net/?appName=Cluster0on
// mongodb+srv://prabingeorge:s6XnhzRlEEGqVofa@cluster0.7a5ls.mongodb.net/