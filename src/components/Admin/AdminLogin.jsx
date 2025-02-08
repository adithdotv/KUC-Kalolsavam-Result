import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

function AdminLogin() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-50">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Admin Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-1">Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter username"
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm mb-1">Password</label>
          <div className="relative">
            <input 
              type={passwordVisible ? 'text' : 'password'}
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Enter password"
            />
            <button 
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <button className="w-full bg-[#874356] text-white py-2 rounded-lg hover:bg-[#723047] transition">Login</button>
      </div>
    </div>
  );
}

export default AdminLogin;
