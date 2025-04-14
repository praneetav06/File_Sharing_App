import express from "express";

const router = express.Router();

router.post("/upload", uploadController);

export default router;
