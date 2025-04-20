import mongoose from "mongoose";
import dotenv from "dotenv";

const Connection = () => {
  dotenv.config();
  const URL = process.env.ATLAS_DB;
  mongoose
    .connect(URL)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Error while connecting to the database", err);
    });
};

export default Connection;
