'use client'; // Add this directive at the top of the file to mark it as a client component.

import Link from 'next/link';
import { useState } from 'react';

const HomePage: React.FC = () => {
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
      <h1 className="text-4xl font-bold mb-8">Legal Contract Analysis</h1>
      <p className="mt-4">
        Want to analyze your contracts? Sign up for an account today!
      </p>

      {/* Add an image here */}
      <img src="https://images.prismic.io//intuzwebsite/2fa11526-bac7-4580-820f-c8fdd07470cf_Frame+16297.png?w=2400&q=80&auto=format,compress&fm=png8" alt="Contract Analysis" className="mt-8 w-full max-w-md"/>

      <Link href="/signup" className="text-blue-600 underline mt-8">Sign Up</Link>
    </div>
  );
};

export default HomePage;
