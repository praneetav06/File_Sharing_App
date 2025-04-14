export const uploadFile = async (fileData) => {
  try {
    const response = await fetch("http://localhost:9000/upload", {
      method: "POST",
      body: fileData,
    });
    return response.json();
  } catch (error) {
    console.log("Error while uploading the file");
  }
};
