import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_BASE = 'http://localhost:5000/users';

export default function Login() {
  const [mode, setMode] = useState('login'); // 'login' or 'register'
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError('');

    if (!username || !password || (mode === 'register' && !email)) {
      setError('All fields are required');
      return;
    }

    try {
      if (mode === 'login') {
        const res = await axios.post(`${API_BASE}/login`, { username, password });
        localStorage.setItem('user', res.data.username);
        navigate('/dashboard');
      } else {
        await axios.post(`${API_BASE}/`, { username, email, password });
        localStorage.setItem('user', username);
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Smart Task Manager</h2>

        <div className="mb-4 flex justify-center gap-4">
          <button
            className={`px-4 py-2 rounded ${mode === 'login' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setMode('login')}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 rounded ${mode === 'register' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setMode('register')}
          >
            Register
          </button>
        </div>

        <div className="space-y-4">
          <input
            className="w-full border p-3 rounded"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {mode === 'register' && (
            <input
              className="w-full border p-3 rounded"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}

          <input
            className="w-full border p-3 rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {mode === 'login' ? 'Login' : 'Register'}
          </button>
        </div>
      </div>
    </div>
  );
}
