import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white/95 p-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Login</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-blue-900 text-white font-semibold py-2 rounded hover:bg-blue-800 transition"
          >
            Log In
          </button>
          <div className="text-center">
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => navigate('/registration')}
            className="w-full bg-gray-200 text-gray-800 font-semibold py-2 rounded hover:bg-gray-300 transition"
          >
            Create New Account
          </button>
        </form>
      </div>
    </section>
  );
};
