import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const uploadRef = useRef();

  //opens file picker when upload button is clicked
  const handleUpload = () => {
    uploadRef.current.click();
  };
  // console.log(file);
  //api call with data
  useEffect(() => {
    const apiCall = () => {
      //call the api to upload
      const fileData = new FormData();
      fileData.append("name", file.name);
      fileData.append("file", file);
      // call the function from api.js with fileData
    };
    apiCall();
  }, [file]);

  return (
    <div className="container">
      <h1>File Sharing App</h1>
      <div>
        <button
          onClick={() => {
            handleUpload();
          }}
        >
          UPLOAD
        </button>
        <input
          type="file"
          ref={uploadRef}
          style={{ display: "none" }}
          onChange={(event) => setFile(event.target.files[0])}
        />
      </div>
    </div>
  );
}

export default App;
