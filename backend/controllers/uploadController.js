const uploadController = async (req, res) => {
  try {
    // functionality to upload file
    console.log(req.file);
    const fileObject = {
      path: req.file.path,
      name: req.file.originalname,
    };
    const file = await fileModel.create(fileObject);
    console.log(file);
    return res
      .status(200)
      .json({ path: `http://localhost:9000/files/${file._id}` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default uploadController;
