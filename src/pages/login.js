import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    // Assuming authentication is successful
    router.push('/internalCommunication'); // Navigate to internal communication page
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="bg-white shadow-md rounded p-8">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
        >
          Login
        </button>
        <p className="text-gray-500 mt-4">
          Don't have an account?{' '}
          <Link href="/signup">
            <span className="text-blue-500 hover:underline">Sign up</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

