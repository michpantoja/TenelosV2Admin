"use client";

import { ChangeEvent, DragEvent, useState } from "react";
import { LuUpload } from "react-icons/lu";
import { BsX } from "react-icons/bs";

export default function Import() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    processFile(files);
  };

  const processFile = (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      if (
        file.type === "text/csv" ||
        file.name.endsWith(".csv") ||
        file.name.endsWith(".CSV")
      ) {
        setUploadedFile(file);
      } else {
        alert("Please upload a CSV file.");
        setUploadedFile(null);
      }
    }
  };

  const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault(); // Prevent default behavior
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault(); // Prevent the browser from opening the file
    const files = event.dataTransfer.files;
    processFile(files);
  };
  
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-semibold text-xl">Import Tennis Records CSV</h1>
      <input
        id="fileInput"
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="hidden"
      />
      <label
        htmlFor="fileInput"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="h-[250px] flex flex-col justify-center items-center gap-2 border-2 border-dashed border-green hover:bg-green/10 cursor-pointer rounded-lg"
      >
        <LuUpload size={32} className="text-darkerGray" />
        <p className="font-semibold text-darkerGray text-lg">
          Upload or drag and drop CSV file here
        </p>
      </label>
      {uploadedFile && (
        <div className="w-fit flex items-center justify-between p-2">
          <p className="text-darkerGray text-sm font-semibold">
            Uploaded file:{" "}
            <span className="font-normal">{uploadedFile.name}</span>
          </p>
          <BsX
            onClick={() => setUploadedFile(null)}
            className="text-red-600 hover:text-red-700 cursor-pointer"
            title="Remove file"
            size={20}
          />
        </div>
      )}
    </div>
  );
}
