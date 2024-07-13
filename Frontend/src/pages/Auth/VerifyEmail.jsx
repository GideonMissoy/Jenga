import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function VerifyEmail() {
  const [otp, setOTP] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp) {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/v1/users/auth/verify-email/`,
        { otp: otp }
      );
      if (response.status === 200) {
        navigate('/login');
        toast.success(response.data.message);
      }
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-sm'>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor=''
              className='block text-gray-700 font-bold mb-2 text-center'
            >
              Enter your OTP code to verify:
            </label>
            <input
              type='text'
              placeholder='Enter OTP.'
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              className='w-full px-3 py-2 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='flex justify-center'>
            <button
              type='submit'
              className='bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300'
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail;
