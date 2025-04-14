const uploadController = (req, res) => {
  try {
    // functionality to upload file
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default uploadController;
