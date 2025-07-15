import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../assets/task1.jpg';
import img2 from '../assets/task2.jpg';
import img3 from '../assets/task3.jpg';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative">
      
      {/* Top-right Login button */}
      <div className="absolute top-4 right-4 flex gap-3">
        <Link 
          to="/dashboard" 
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

      {/* Title & description */}
      <div className="text-center mt-20 px-4">
        <h1 className="text-4xl font-bold mb-4">Smart Task Management</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Welcome to Smart Task Management – the ultimate platform to organize your tasks, boost productivity, and reach your goals effortlessly.
        </p>
      </div>

      {/* Carousel */}
      <div className="max-w-4xl mx-auto mt-12 px-4">
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
            <img src={img3} alt="Collaborate Easily" />
            <p className="legend">Collaborate with your team</p>
          </div>
        </Carousel>
      </div>

      {/* About Section */}
      <div className="mt-16 px-4 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Why Smart Task Management?</h2>
        <p className="text-md text-gray-600">
          Whether you're managing a project, working with a team, or organizing your daily schedule — our platform provides the tools and flexibility you need.
          Gain clarity, boost focus, and achieve more with less effort.
        </p>
      </div>
    </div>
  );
}
