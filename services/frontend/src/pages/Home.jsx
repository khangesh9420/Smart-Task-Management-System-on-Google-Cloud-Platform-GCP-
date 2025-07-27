import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../assets/task1.jpg';
import img2 from '../assets/task2.jpg';
import img3 from '../assets/task3.jpg';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative">

      {/* Top-right Login and Dashboard buttons */}
      <div className="absolute top-4 right-4 flex gap-3">
        <Link 
          to="/dashboard  " 
          className="bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700 transition duration-300"
        >
          Dashboard
        </Link>
        <Link 
          to="/login" 
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-300"
        >
          Login
        </Link>
      </div>

      {/* Hero Section */}
      <section className="text-center mt-24 px-4">
        <h1 className="text-5xl font-bold mb-4">Smart Task Management</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Organize your tasks, collaborate with teams, and stay focused — all in one powerful platform.
        </p>
        <Link 
          to="/register"
          className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Carousel */}
      <section className="max-w-4xl mx-auto mt-16 px-4">
        <Carousel 
          autoPlay 
          infiniteLoop 
          showThumbs={false} 
          showStatus={false} 
          interval={4000}
        >
          <div>
            <img src={img1} alt="Task Planning" />
            <p className="legend">Plan your tasks visually</p>
          </div>
          <div>
            <img src={img2} alt="Progress Tracking" />
            <p className="legend">Track progress in real time</p>
          </div>
          <div>
            <img src={img3} alt="Team Collaboration" />
            <p className="legend">Collaborate with your team</p>
          </div>
        </Carousel>
      </section>

      {/* Features Section */}
      <section className="mt-20 px-4 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">Task Scheduling</h3>
          <p className="text-sm text-gray-600">Easily set deadlines and reminders for everything you need to do.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
          <p className="text-sm text-gray-600">Work together in real-time with comments, sharing, and more.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
          <p className="text-sm text-gray-600">Visualize your productivity and stay ahead of your goals.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-20 px-4 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Why Smart Task Management?</h2>
        <p className="text-md text-gray-600">
          Whether you're managing a project, working with a team, or organizing your daily schedule — our platform provides the tools and flexibility you need.
          Gain clarity, boost focus, and achieve more with less effort and better management.
        </p>
      </section>

    </div>
  );
}
