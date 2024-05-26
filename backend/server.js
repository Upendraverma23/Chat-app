import express from "express";
import dotenv from "dotenv";
import cookieparser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

import connectToMongoDB from "./db/connetToMongoDB.js";
import { app ,server} from "./socket/socket.js"



const PORT = process.env.PORT || 5050;


dotenv.config();

app.use(express.json());  // to parse the incoming incoming requestswith json payloads (from req.body)
app.use(cookieparser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


server.listen(PORT,() => {
  
  connectToMongoDB();
  console.log(`server running on port ${PORT}`);
});
