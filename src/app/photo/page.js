"use client"
import { useState } from "react";

export default function Photo() {
  const [file, setFile] = useState(null); // Initialize file as null

  const onSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      console.error("No file selected.");
      return;
    }

    const data = new FormData();
    data.append("file", file); // Use append to add the file to the FormData

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        console.error("Upload failed.");
        return;
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        Upload the file here
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])} // Use [0] to get the first selected file
        />
        <button type="submit">Click to upload here</button>
      </form>
    </div>
  );
}
