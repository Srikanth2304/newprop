import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import "./style/FilesDragAndDrop.css";

const fileTypes = ["XML"]; // Allow only XML files

export default function FilesDragAndDrop() {
  const [file, setFile] = useState(null);

  const handleChange = (newFile) => {
    setFile(newFile);
  };

  const handleSave = () => {
    // Implement your save logic here for XML files
    if (file && file[0] && file[0].name) {
      alert(`XML File "${file[0].name}" is saved.`);
    }
  };

  return (
    <div className="FilesDragAndDrop">
      <h1>Drag & Drop XML Files</h1>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `File name: ${file[0].name}` : "No XML files uploaded yet"}</p>

      {/* Save button visible only when an XML file is uploaded */}
      {file && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSave}
        >
          Save
        </button>
      )}
    </div>
  );
}
