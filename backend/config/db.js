import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async() => {
    await mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB Connected."))
    // await mongoose.connect('mongodb+srv://prabingeorge:s6XnhzRlEEGqVofa@cluster0.7a5ls.mongodb.net/food-del2').then(()=>console.log("DB Connected."))
};