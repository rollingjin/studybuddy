'use client';

import { useState } from 'react';

interface UploadPhotosProps {
  setImages: (files: File[]) => void;
}

export default function UploadPhotos({ setImages }: UploadPhotosProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const updatedFiles = [...selectedFiles, ...newFiles];
      setSelectedFiles(updatedFiles);
      setImages(updatedFiles); // 부모 컴포넌트로 전달
    }
  };

  const handleRemove = (index: number) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    setImages(updatedFiles);
  };

  return (
    <div className="p-4 border rounded">
      <input type="file" accept="image/*" multiple onChange={handleFileChange} />

      <div className="mt-4 flex flex-wrap gap-2">
        {selectedFiles.map((file, index) => (
          <div key={index} className="relative">
            <img
              src={URL.createObjectURL(file)}
              alt={`upload-${index}`}
              className="w-24 h-24 object-cover rounded"
            />
            <button
              className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded"
              onClick={() => handleRemove(index)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}