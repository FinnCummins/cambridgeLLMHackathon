'use client'; // Add this only if you're using Next.js 13 and the 'app' directory

import { useState } from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: 'user', text: `User: ${input}` };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');

    // Simulate API call to your LLM backend
    const botResponse = await getBotResponse(input);

    const botMessage: Message = { sender: 'bot', text: `LinkLater Tool: ${botResponse}` };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  const getBotResponse = async (message: string): Promise<string> => {
    // Replace this mock API call with your actual backend call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`This is a simulated response to: "${message}"`); // Mock response from LLM
      }, 1000);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-4/5 min-h-[80vh] bg-white shadow-md rounded-lg p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-4 text-center">LinkLater - Contract Analysis Tool</h1>
        <div className="flex-grow mb-4 overflow-y-auto p-4 border border-gray-300 rounded-lg">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded ${
                message.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'
              }`}
            >
              <span className={`block ${message.sender === 'user' ? 'text-blue-700' : 'text-gray-700'}`}>
                {message.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;