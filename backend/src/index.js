import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";
// import { seedDatabase } from "./seeds/user.seed.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'https://aniket-chatapp.netlify.app/',
  methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
  credentials: true // Allow cookies or HTTP credentials
}));
app.options("*", cors());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// seedDatabase();

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
  
});
