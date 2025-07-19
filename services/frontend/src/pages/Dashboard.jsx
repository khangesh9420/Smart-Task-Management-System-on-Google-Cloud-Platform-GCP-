import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProjects, fetchTasks, createProject } from '../api/projectService';

export default function Dashboard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newProjectTitle, setNewProjectTitle] = useState('');

  const username = localStorage.getItem('user');
  const defaultImages = [
    "/images/project1.png",
    "/images/project2.png",
    "/images/project3.png",
  ];

  // Redirect to login if not logged in
  useEffect(() => {
    if (!username) {
      console.warn("User not found in localStorage. Redirecting...");
      navigate('/login');
    }
  }, [username, navigate]);

  // Fetch projects and their tasks
  useEffect(() => {
    const fetchProjectsAndTasks = async () => {
      try {
        console.log("Fetching projects for:", username);
        const projectRes = await fetchProjects(username); // Pass username!
        const projectsData = projectRes.data;

        if (!Array.isArray(projectsData)) {
          console.error("Expected array but got:", projectsData);
          setProjects([]);
          return;
        }

        const enrichedProjects = await Promise.all(
          projectsData.map(async (proj, i) => {
            try {
              const taskRes = await fetchTasks(proj.id);
              return {
                ...proj,
                tasks: taskRes.data.length,
                img: defaultImages[i % defaultImages.length],
              };
            } catch (err) {
              console.error(`Failed to load tasks for project ${proj.id}`, err);
              return {
                ...proj,
                tasks: 0,
                img: defaultImages[i % defaultImages.length],
              };
            }
          })
        );

        setProjects(enrichedProjects);
      } catch (err) {
        console.error("Error loading projects:", err.response?.data || err.message);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchProjectsAndTasks();
    }
  }, [username]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleAddProject = async () => {
    if (!newProjectTitle) return;

    try {
      const res = await createProject({
        name: newProjectTitle,
        owner: username,
      });

      const newProj = res.data;

      setProjects([
        {
          ...newProj,
          tasks: 0,
          img: defaultImages[projects.length % defaultImages.length],
        },
        ...projects,
      ]);
      setNewProjectTitle('');
    } catch (err) {
      console.error("Failed to create project:", err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-blue-700">
          Welcome back, {username || 'User'}!
        </h1>
        <button
          onClick={handleLogout}
          className="text-red-600 font-medium hover:underline"
        >
          Logout
        </button>
      </div>

      {/* Add Project */}
      <div className="flex items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="New project name"
          value={newProjectTitle}
          onChange={(e) => setNewProjectTitle(e.target.value)}
          className="border p-2 rounded w-full max-w-md"
        />
        <button
          onClick={handleAddProject}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Create Project
        </button>
      </div>

      {/* Project cards */}
      {loading ? (
        <p>Loading projects...</p>
      ) : projects.length === 0 ? (
        <p className="text-gray-500 text-center">No projects found. Start by creating one!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
              <img
                src={project.img}
                alt={project.name}
                className="rounded mb-4 h-40 w-full object-cover"
              />
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="mb-4 text-gray-600">
                {project.tasks} task{project.tasks !== 1 ? 's' : ''} pending
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700">
                + Add Task
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
