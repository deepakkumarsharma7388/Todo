import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRoute from "../backend/routes/todo.route.js";
import userRouter from "../backend/routes/user.route.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4002;
const DB_URI = process.env.MONGODB_URI;

// middleware
app.use(express.json());

app.use(cors({
  origin: process.env.FRONTEND_URL,   // ✅ fixed
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],  // better format
  allowedHeaders: ["Content-Type", "Authorization"] // ✅ fixed
}));

// database connection
try {
  await mongoose.connect(DB_URI);
  console.log("connected to mongodb");
} catch (error) {
  console.log(error);
}

// routes
app.use("/todo", todoRoute);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
