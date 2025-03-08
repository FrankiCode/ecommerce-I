import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-lg text-gray-600">Oops! The page you are looking for does not exist.</p>
        <a href="/" className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
