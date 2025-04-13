import express from "express"; // change type to module in package.json for import or require it
import Connection from "./database/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 9000;

app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
Connection();
