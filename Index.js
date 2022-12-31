import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/blog-routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/blogs", router);

mongoose
  .connect(
    "mongodb+srv://temidayo:x5dPc2tY1MCu3N5W@blogs-cluster.3vjq7.mongodb.net/blogish-proj?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(process.env.PORT || 5800);
  })
  .then(() => {
    console.log("Connected To Database.....");
  })
  .catch((err) => {
    console.log(err);
  });
