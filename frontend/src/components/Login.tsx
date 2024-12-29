// Login Component
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic (authentication)
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-gray-800 p-8 rounded-lg">
      <h2 className="text-3xl text-white mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-gray-300 block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-300 block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
