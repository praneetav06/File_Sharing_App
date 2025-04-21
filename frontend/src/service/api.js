export const uploadFile = async (fileData) => {
  try {
    const backendURL = import.meta.env.VITE_BACKEND_URL;
    const response = await fetch(`${backendURL}/upload`, {
      method: "POST",
      body: fileData,
    });
    return response.json();
  } catch (error) {
    console.log("Error while uploading the file");
  }
};
