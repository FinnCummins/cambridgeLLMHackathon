'use client';

import { useState } from 'react';
import Link from 'next/link';

const UploadPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [response, setResponse] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setResponse(data.message);
      } else {
        setResponse('Failed to upload file.');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setResponse('Error: ' + error.message);
      } else {
        setResponse('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Upload Your Contract</h1>
      <form className="space-y-4" onSubmit={handleFormSubmit}>
        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
        />
        {selectedFile && (
          <div className="text-gray-700 mt-2">
            Selected File: {selectedFile.name}
          </div>
        )}
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none"
        >
          Upload
        </button>
        <Link href="/chat" className='mx-8'>
            <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none"
            >
            Generate Report
            </button>
        </Link>
      </form>
      {response && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md text-gray-800">
          {response}
        </div>
      )}
    </div>
  );
};

export default UploadPage;