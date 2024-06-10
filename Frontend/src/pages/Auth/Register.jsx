import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api';
import {
  FaUser,
  FaLock,
  FaWindowClose,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords don't match");
      return;
    }
    // Process to handle the registration logic
    try {
      let response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/register/`,
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone_no: phoneNumber,
          password: password,
        }
      );
      console.log(response);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='absolute flex flex-col justify-center items-center h-screen w-screen text-slate-800'>
        <div className='relative w-96 p-6 bg-white border-2 border-gray-300 rounded-md shadow-md'>
          <div className='absolute top-2 right-2'>
            <Link to='/'>
              <FaWindowClose size={25} />
            </Link>
          </div>
          <form onSubmit={handleRegister} className='flex flex-col'>
            <h1 className='text-2xl lg:text-4xl font-bold mb-4'>Sign Up</h1>
            <hr className='font-pink-700' />
            <div className='space-y-4'>
              <div className='flex flex-row items-center border border-gray-300 rounded-md px-3 py-2'>
                <input
                  type='text'
                  placeholder='First Name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className='flex-grow outline-none'
                />
                <FaUser className='ml-2' />
              </div>
              <div className='flex flex-row items-center border border-gray-300 rounded-md px-3 py-2'>
                <input
                  type='text'
                  placeholder='Last Name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className='flex-grow outline-none'
                />
                <FaUser className='ml-2' />
              </div>
              <div className='flex flex-row items-center border border-gray-300 rounded-md px-3 py-2'>
                <input
                  type='text'
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
                  type='text'
                  placeholder='Phone Number'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className='flex-grow outline-none'
                />
                <FaPhone className='ml-2' />
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
              <div className='flex flex-row items-center border border-gray-300 rounded-md px-3 py-2'>
                <input
                  type='password'
                  placeholder='Confirm Password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className='flex-grow outline-none'
                />
                <FaLock className='ml-2' />
              </div>
              <div className='flex justify-between items-center text-sm'>
                <label className='flex items-center'>
                  <input type='checkbox' className='mr-2' />I agree to the terms
                  and conditions.
                </label>
              </div>
              {error && <p className='text-red-500'>{error}</p>}
              <div className='flex justify-center'>
                <button
                  type='submit'
                  className='bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300'
                >
                  Register
                </button>
              </div>
              <div className='text-center'>
                <p className='text-sm'>
                  Already have an account?
                  <Link
                    to='/login'
                    className='text-red-500 hover:underline ml-1'
                  >
                    Login.
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

export default Register;
