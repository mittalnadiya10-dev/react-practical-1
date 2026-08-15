import React from "react";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6">
      <div className="w-full max-w-2xl rounded-3xl bg-white/95 p-10 text-center shadow-2xl backdrop-blur-md transition duration-300 hover:-translate-y-2">

        {/* React Icon */}
        <div className="mb-6 text-6xl">
          ⚛️
        </div>

        {/* Main Heading */}
        <h1 className="mb-3 text-4xl font-extrabold text-gray-800 md:text-5xl">
          Welcome to React
        </h1>

        {/* Sub Heading */}
        <h2 className="mb-6 text-xl font-semibold text-blue-500 md:text-2xl">
          My First React Application
        </h2>

        {/* Description */}
        <p className="mb-4 text-lg leading-8 text-gray-600">
          This is a simple React application created using JSX and functional
          components.
        </p>

        <p className="mb-8 text-lg leading-8 text-gray-600">
          React makes it easy to build beautiful and interactive user
          interfaces.
        </p>
        {/* Button */}
        <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
          Get Started 🚀
        </button>
      </div>
    </div>
  );
}

export default App;