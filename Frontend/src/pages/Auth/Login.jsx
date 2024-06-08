import React from 'react';
import { Link } from 'react-router-dom';
import { FaLock, FaWindowClose, FaEnvelope } from 'react-icons/fa';

function Login() {
  return (
    <div>
      <div className='flex flex-col justify-center items-center h-screen w-screen text-slate-800'>
        <div className='relative w-96 p-6 bg-white border-2 border-gray-300 rounded-md shadow-md'>
          <div className='absolute top-2 right-2'>
            <Link to='/'>
              <FaWindowClose size={25} />
            </Link>
          </div>
          <form className='flex flex-col'>
            <h1 className='text-2xl font-bold mb-4'>Login</h1>
            <div className='space-y-4'>
              <div className='flex flex-row items-center border border-gray-300 rounded-md px-3 py-2'>
                <input
                  type='email'
                  placeholder='Email'
                  required
                  className='flex-grow outline-none'
                />
                <FaEnvelope className='ml-2' />
              </div>
              <div className='flex flex-row items-center border border-gray-300 rounded-md px-3 py-2'>
                <input
                  type='password'
                  placeholder='Password'
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
