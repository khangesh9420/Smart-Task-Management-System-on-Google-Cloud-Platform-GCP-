import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      <h1 className="text-5xl font-bold mb-4">Smart Task Management</h1>
      <p className="mb-8 text-xl">Organize. Manage. Conquer your tasks.</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-200">
          Login
        </Link>
        <Link to="/dashboard" className="bg-white text-purple-600 font-semibold px-6 py-2 rounded hover:bg-gray-200">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
