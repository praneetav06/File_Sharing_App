import express from "express";
import uploadController from "../controllers/uploadController";
import storage from "../middlewares/upload";

const router = express.Router();

router.post("/upload", storage.single("file"), uploadController);

export default router;
