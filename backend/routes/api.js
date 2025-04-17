import express from "express";
import { uploadController } from "../controllers/uploadController.js";
import { DownloadController } from "../controllers/uploadController.js";
import storage from "../middlewares/upload.js";

const router = express.Router();

router.post("/upload", storage.single("file"), uploadController);
router.get("/files/:fileId", DownloadController);

export default router;
