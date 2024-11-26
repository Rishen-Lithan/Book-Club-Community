import React, { useState } from 'react';

function DefaultSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative md:w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-center h-16 border-b border-gray-700">
          <h1 className="text-lg font-semibold">Book Club Community</h1>
        </div>
        <nav className="px-4 py-2">
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-gray-300 rounded hover:bg-gray-700 hover:text-white"
          >
            Authors
          </a>
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-gray-300 rounded hover:bg-gray-700 hover:text-white"
          >
            Books
          </a>
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-gray-300 rounded hover:bg-gray-700 hover:text-white"
          >
            Categories
          </a>
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-gray-300 rounded hover:bg-gray-700 hover:text-white"
          >
            Orders
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="flex items-center justify-between h-16 px-4 bg-white shadow-md">
          <button
            onClick={toggleSidebar}
            className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            {/* Menu Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <h1 className="text-xl font-semibold">Responsive Sidebar</h1>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 p-4 overflow-y-auto bg-gray-100">
          <h2 className="text-2xl font-bold">Main Content</h2>
          <p className="mt-4">
            This is the main content area. Resize the window to see the sidebar's
            responsiveness.
          </p>
        </main>
      </div>
    </div>
  );
}

export default DefaultSidebar;
