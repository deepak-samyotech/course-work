"use client"; 

import React, { useRef } from "react";
import { cn } from "../../lib/utils"; // Ensure this utility function is correctly set up

const FileUpload = ({ className, onFileChange, ...props }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={cn("relative inline-block", className)}>
      <button
        type="button"
        onClick={handleClick}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Upload File
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileChange}
        className="absolute inset-0 opacity-0 cursor-pointer"
        {...props}
      />
    </div>
  );
};

export default FileUpload;
