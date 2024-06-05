import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaPhoneFlip } from 'react-icons/fa6';

export default function Careers() {
  return (
    <div>
      <Nav />
      <div className='mx-2 my-y lg:mx-11 lg:my-11 lg:px-11 '>
        <div>
          <h1 className='text-2xl lg:text-6xl font-bold text-green-600'>
            Join us as we
          </h1>
          <h2 className='text-1xl lg:text-3xl font-bold text-green-700'>
            revolutionize the Construction space
          </h2>
        </div>
        <div className='flex flex-col lg:flex-row my-5 lg:my-11'>
          <div className='w-full lg:w-1/2'>
            <img
              src='https://plus.unsplash.com/premium_photo-1661301167646-d28bbf327e65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDB8fDB8fHww'
              alt='Sample Photo'
              className='rounded-3xl'
            />
          </div>
          <div className='w-full lg:w-1/2 px-3 flex flex-col my-3 lg:mr-5 lg:my-0 lg:justify-center'>
            <h1 className='lg:text-5xl text-2xl font-bold'>
              Become a part of Jenga
            </h1>
            <p className='lg:my-3 lg:text-2xl font-bold text-grey-800'>
              Be part of the team that brings this vision to life
            </p>
            <div className='w-full flex justify-center'>
              <button className='bg-green-500 hover:bg-green-700 text-slate-900 font-bold p-2 lg:px-5 lg:py-3 rounded-full'>
                See open Positions
              </button>
            </div>
          </div>
        </div>
        <div className='mx-3 lg:mx-11 '>
          <h1 className='text-2xl lg:text-6xl text-pink-800'>
            <span>Get in Touch</span>
            <hr className='border-pink-800' />{' '}
          </h1>
          <div className='flex flex-col lg:flex-row p-3 bg-slate-200'>
            <div className='w-full lg:w-1/2 lg:p-7'>
              <p>
                Contact our HR team to find out more on the open positions at
                Jenga right now. You will be provided with our contract roles
                and the terms of service
              </p>
              <p>
                Jenga Aims to foster a great conducive working environment for
                its staff at all times.
              </p>
            </div>
            <div className='w-full lg:w-1/2 my-3 lg:p-5 bg-slate-900 text-white'>
              <div className='flex align-center text-center justify-between py-2'>
                <div className='flex'>
                  <FaLocationDot size={25} className='text-pink-600' />
                  <span className='ml-2 lg:ml-4 text-1xl lg:text-2xl'>
                    Address
                  </span>
                </div>
                <div>
                  <span className='justify-end text-green-500 pr-3 text-1xl lg:text-2xl'>
                    Nairobi, Kenya
                  </span>
                </div>
              </div>
              <div className='flex align-center text-center justify-between py-2'>
                <div className='flex'>
                  <MdEmail size={25} className='text-pink-600' />
                  <span className='ml-2 lg:ml-4 text-1xl lg:text-2xl'>
                    Email
                  </span>
                </div>
                <div>
                  <span className='justify-end text-green-500 pr-3 text-1xl lg:text-2xl'>
                    careers@jenga.com
                  </span>
                </div>
              </div>
              <div className='flex align-center text-center  justify-between py-2'>
                <div className='flex'>
                  <FaPhoneFlip size={25} className='text-pink-600' />
                  <span className='ml-2 lg:ml-4 text-1xl lg:text-2xl'>
                    Phone Number
                  </span>
                </div>
                <div>
                  <span className='justify-end text-green-500 pr-3 text-1xl lg:text-2xl'>
                    +254704158777
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
