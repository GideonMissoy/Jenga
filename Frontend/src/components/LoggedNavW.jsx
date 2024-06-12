import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaBell, FaSearch } from 'react-icons/fa';
import Logo from '../assets/logo.png';

function LoggedNavW() {
  return (
    <div>
      <div className='flex flex-row justify-between items-center px-2 py-2 lg:px-11 lg:py-2 bg-white'>
        <div className='lg:w-1/6'>
          <Link to='/'>
            <img src={Logo} alt='Logo' className='h-11 w-auto' />
          </Link>
        </div>
        <div className='lg:w-3/6'>
          <div className='flex items-center pl-3 border rounded-full'>
            <input
              type='text'
              placeholder='Search'
              className='w-full outline-none focus:ring-2 pl-3 focus:ring-blue-500'
            />
            <button className='text-grey-950 p-2 hover:bg-slate-200 rounded-full transition duration-300'>
              <FaSearch size={25} />
            </button>
          </div>
        </div>
        <div className='lg:w-2/6'>
          <ul className='flex flex-row justify-end space-x-6'>
            <li>
              <Link
                to='/find-work'
                className='text-gray-800 bg-green-500 px-5 py-2 rounded-full mr-11'
              >
                Find Talent
              </Link>
            </li>
            <li>
              <Link
                to='/messages'
                className='text-gray-800 hover:text-blue-500'
              >
                <FaEnvelope size={22} />
              </Link>
            </li>
            <li>
              <Link
                to='/notifications'
                className='text-gray-800 hover:text-blue-500'
              >
                <FaBell size={22} />
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

export default LoggedNavW;
