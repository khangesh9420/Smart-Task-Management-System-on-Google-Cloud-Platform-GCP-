import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Login Button at Top-Right */}
      <div className="w-full flex justify-end p-4">
        <Link
          to="/login"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 shadow-md"
        >
          Login
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-32 py-10 gap-10">
        {/* Left Text Section */}
        <div className="max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Welcome to Smart Task Management
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Organize your tasks efficiently, manage your team effortlessly, and
            accomplish your goals faster. Whether you're working solo or leading a team,
            Smart Task Management helps you stay on top of everything.
          </p>
          <p className="text-gray-600">
            Track your progress, set deadlines, collaborate in real-time, and never miss a beat.
          </p>

          {/* About Button */}
          <div className="mt-6">
            <Link
              to="/about"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Learn more about us →
            </Link>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="max-w-md">
          <img
            src="https://cdn.dribbble.com/users/14268/screenshots/3819292/media/2e4a87c5e7b7e29e1284ea531af85b36.gif"
            alt="Task Management Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
