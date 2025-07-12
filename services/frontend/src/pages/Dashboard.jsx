import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const username = localStorage.getItem('user') || 'User';
  const navigate = useNavigate();

  const projects = [
    { title: "Team Website", tasks: 5, img: "/images/project1.png" },
    { title: "Mobile App", tasks: 2, img: "/images/project2.png" },
    { title: "Marketing Plan", tasks: 0, img: "/images/project3.png" },
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-blue-700">Welcome back, {username}!</h1>
        <button
          onClick={handleLogout}
          className="text-red-600 font-medium hover:underline"
        >
          Logout
        </button>
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
            <img
              src={project.img}
              alt={project.title}
              className="rounded mb-4 h-40 w-full object-cover"
            />
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-4 text-gray-600">
              {project.tasks} task{project.tasks !== 1 ? 's' : ''} pending
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700">
              + Add Task
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
