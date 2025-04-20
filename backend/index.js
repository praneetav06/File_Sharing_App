import express from "express"; // change type to module in package.json for import or require it
import Connection from "./database/db.js";
import dotenv from "dotenv";
import router from "./routes/api.js";
import cors from "cors";
import path from "path";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(cors());

app.use("/", router);

const __dirname = path.resolve();
//to serve static files like html, css and js
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
Connection();
