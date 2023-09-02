import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import "./components/style/DragStyle.css";

const fileTypes = ["JPEG", "PNG", "XML"];

export default function FilesDragAndDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="FilesDragAndDrop" >
      <h1>Drag & Drop Files</h1>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
    </div>
  );
}
