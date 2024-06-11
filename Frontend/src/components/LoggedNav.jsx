import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaBell, FaSearch } from 'react-icons/fa';
import Logo from '../assets/logo.png';

function LoggedNav() {
  return (
    <div>
      <div className='flex flex-row justify-between items-center px-2 py-2 lg:px-11 lg:py-2 bg-white'>
        <div className='lg:w-1/6'>
          <Link to='/'>
            <img src={Logo} alt='Logo' className='h-11 w-auto' />
          </Link>
        </div>
        <div className='lg:w-3/6'>
          <div className='flex items-center'>
            <input
              type='text'
              placeholder='Search'
              className='w-full py-2 px-4 border rounded-l-md outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button className='bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-700 transition duration-300'>
              <FaSearch />
            </button>
          </div>
        </div>
        <div className='lg:w-2/6'>
          <ul className='flex flex-row justify-end space-x-4'>
            <li>
              <Link
                to='/find-work'
                className='text-gray-800 hover:text-blue-500'
              >
                Find Work
              </Link>
            </li>
            <li>
              <Link
                to='/messages'
                className='text-gray-800 hover:text-blue-500'
              >
                <FaEnvelope />
              </Link>
            </li>
            <li>
              <Link
                to='/notifications'
                className='text-gray-800 hover:text-blue-500'
              >
                <FaBell />
              </Link>
            </li>
            <li>
              <Link to='/profile' className='text-gray-800 hover:text-blue-500'>
                Profile Photo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LoggedNav;
