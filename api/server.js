import express from "express";
import mongoose, { set } from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import reviewRoute from "./routes/review.route.js";
import messageRoute from "./routes/message.route.js";
import conversationRoute from "./routes/conversation.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";

const app = express();
dotenv.config();


mongoose.set('strictQuery',true);

try{
    await mongoose.connect(process.env.MONGODB);
    console.log("connected to mongoDB")
}catch(error){
    console.log(error);
}

app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/gigs",gigRoute);
app.use("/api/orders",orderRoute);
app.use("/api/conversations",conversationRoute);
app.use("/api/messages",messageRoute);
app.use("/api/reviews",reviewRoute);

app.listen(8800,()=>{
    console.log("Backend server is running");
})

