import React, { useState } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar"; // Import the AdminNavbar component
import "./UploadForm.css"; // Import the CSS for the UploadForm

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:8080/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(response.data); // Set the success message from backend response
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data); // Set the error message from backend response
      } else {
        setMessage("An error occurred while uploading the file.");
      }
    }
  };

  return (
    <div>
      <AdminNavbar /> {/* Include the AdminNavbar component */}
      <div className="upload-form-container">
        <h2>Upload CSV File for Customer Registration</h2>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Upload</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default UploadForm;
