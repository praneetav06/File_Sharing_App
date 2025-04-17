import express from "express"; // change type to module in package.json for import or require it
import Connection from "./database/db.js";
import dotenv from "dotenv";
import router from "./routes/api.js";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = 9000;
app.use(cors());

app.use("/", router);

app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
Connection();
