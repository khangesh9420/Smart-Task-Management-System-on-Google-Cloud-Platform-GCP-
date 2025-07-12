import axios from 'axios';

const BASE_URL = 'http://localhost:5001/projects';  // or your docker host if needed

export const createProject = (projectData) =>
  axios.post(`${BASE_URL}/`, projectData);

export const fetchProjects = () =>
  axios.get(`${BASE_URL}/`);

export const createTask = (projectId, taskData) =>
  axios.post(`${BASE_URL}/${projectId}/tasks`, taskData);

export const fetchTasks = (projectId) =>
  axios.get(`${BASE_URL}/${projectId}/tasks`);
