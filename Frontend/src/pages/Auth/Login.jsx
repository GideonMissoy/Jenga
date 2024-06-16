import { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants';
import { Link } from 'react-router-dom';
import { FaLock, FaWindowClose, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await api.post(`${import.meta.env.VITE_API_URL}/token/`, {
        email: email,
        password: password,
      });

      console.log('Login successful:', res.data);
      navigate('/my-projects/');
    } catch (error) {
      console.log(
        'Login error:',
        error.response ? error.res.data : error.message
      );
      alert('Failed to login. Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <div className='flex flex-col justify-center items-center h-screen w-screen text-slate-800'>
        <div className='relative w-96 p-6 bg-white border-2 border-gray-300 rounded-md shadow-md'>
          <div className='absolute top-2 right-2'>
            <Link to='/'>
              <FaWindowClose size={25} />
            </Link>
          </div>
          <form onSubmit={handleLogin} className='flex flex-col'>
            <h1 className='text-2xl font-bold mb-4'>Login</h1>
            <div className='space-y-4'>
              <div className='flex flex-row items-center border border-gray-300 rounded-md px-3 py-2'>
                <input
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='flex-grow outline-none'
                />
                <FaEnvelope className='ml-2' />
              </div>
              <div className='flex flex-row items-center border border-gray-300 rounded-md px-3 py-2'>
                <input
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className='flex-grow outline-none'
                />
                <FaLock className='ml-2' />
              </div>
              <div className='flex justify-between items-center text-sm'>
                <label className='flex items-center'>
                  <input type='checkbox' className='mr-2' />
                  Remember me
                </label>
                <a href='#' className='text-blue-500 hover:underline'>
                  Forgot password?
                </a>
              </div>
              <div className='flex justify-center'>
                <button
                  type='submit'
                  className='bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300'
                >
                  Login
                </button>
              </div>
              {error && (
                <div className='error'>
                  {error.email ? error.email[0] : 'An error occurred'}
                </div>
              )}
              <div className='text-center'>
                <p className='text-sm'>
                  Don't have an account?
                  <Link
                    to='/register'
                    className='text-blue-500 hover:underline ml-1'
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
