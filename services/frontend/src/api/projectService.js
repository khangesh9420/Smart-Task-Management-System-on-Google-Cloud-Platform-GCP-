import axios from 'axios';

const BASE_URL = 'https://user.khangesh.store/projects';

export const createProject = (projectData) =>
  axios.post(`${BASE_URL}/`, projectData);

export const fetchProjects = (username) =>
  axios.get(`${BASE_URL}/?owner=${username}`);

export const createTask = (projectId, taskData) =>
  axios.post(`${BASE_URL}/${projectId}/tasks`, taskData);

export const fetchTasks = (projectId) =>
  axios.get(`${BASE_URL}/${projectId}/tasks`);
