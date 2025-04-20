import fileModel from "../models/fileModel.js";
import path from "path";
import dotenv from "dotenv";
export const uploadController = async (req, res) => {
  try {
    dotenv.config();
    const backendURL = process.env.BACKEND_URL;

    // functionality to upload file
    console.log(req.file);
    const fileObject = {
      path: req.file.path,
      name: req.file.originalname,
    };
    const file = await fileModel.create(fileObject);
    console.log(file);
    return res.status(200).json({ path: `${backendURL}/files/${file._id}` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const DownloadController = async (req, res) => {
  try {
    const file = await fileModel.findById(req.params.fileId);
    if (!file) {
      return res.status(404).json({ message: "File not found!" });
    }
    res.download(file.path, file.name);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
