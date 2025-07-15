import { Link } from 'react-router-dom';
import { Rocket, LogIn, LayoutDashboard } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative overflow-hidden px-4">
      
      {/* Animated Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

      {/* Glass Card */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl rounded-3xl p-10 max-w-xl w-full text-center z-10 animate-fadeIn">
        <div className="flex justify-center mb-6">
          <Rocket className="w-12 h-12 text-pink-400 animate-bounce" />
        </div>
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">Smart Task Management</h1>
        <p className="text-lg text-gray-200 mb-8">
          🚀 Supercharge your productivity. Plan smart. Work fast. Achieve more.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            to="/login"
            className="flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition-all"
          >
            <LogIn className="w-5 h-5" />
            Login
          </Link>
          <Link
            to="/dashboard"
            className="flex items-center gap-2 bg-white text-pink-600 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition-all"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
        </div>
      </div>

      {/* Subtle Floating Particles (optional for advanced effect) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white rounded-full opacity-20 animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-white rounded-full opacity-20 animate-ping delay-1000"></div>
      </div>
    </div>
  );
}
// Home.jsx - Smart Task Management System
// This file contains the main landing page for the Smart Task Management System.