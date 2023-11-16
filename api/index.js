import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json())

app.use("/api", userRouter)
app.use("/api", authRouter)

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || "Internal Server Error"

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
