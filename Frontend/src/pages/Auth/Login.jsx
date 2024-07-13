import { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants';
import { Link } from 'react-router-dom';
import { FaLock, FaWindowClose, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter all credentials to continue!');
    } else {
      setIsLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/v1/users/auth/login/`,
        {
          email: email,
          password: password,
        }
      );
      const response = res.data;
      console.log(response);
      setIsLoading(false);
      const user = {
        email: response.email,
        names: response.full_name,
      };
      if (res.status === 200) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('access', JSON.stringify(response.access_token));
        localStorage.setItem('refresh', JSON.stringify(response.refresh_token));
        navigate('/my-projects');
        toast.success('Login Successful');
      }
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
            {isLoading && <p className='text-red'>Loading...</p>}
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
