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

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedFile) {
      setResponse(`${selectedFile.name} has been uploaded to the server.`);
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
            type="button"
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