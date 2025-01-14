import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2 text-white">
                <Rocket className="h-8 w-8" />
                <span className="font-bold text-xl">FutureSphere</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#exhibits" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Exhibits</a>
              <a href="#events" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Events</a>
              <a href="#virtual-tour" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Virtual Tour</a>
              <a href="#tickets" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tickets</a>
              <a href="#startup" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Startup Zone</a>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700">Sign In</button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#exhibits" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Exhibits</a>
            <a href="#events" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Events</a>
            <a href="#virtual-tour" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Virtual Tour</a>
            <a href="#tickets" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Tickets</a>
            <a href="#startup" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Startup Zone</a>
            <button className="w-full bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700">Sign In</button>
          </div>
        </div>
      )}
    </nav>
  );
}