import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaPhoneFlip } from 'react-icons/fa6';

function Contact() {
  return (
    <div>
      <Nav />
      <div className='m-3 lg:m-11'>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl lg:text-6xl text-green-600 font-bold'>
            Contact Us
          </h1>
          <p className='text-green-950 font-bold py-2 lg:py-5'>
            Reach out to us for enquiries and support through the provided email
            options.
            <br /> You can also reach us through the landline number provided
            during office hours.
            <br /> Additionally, you can visit our office in the address
            provided
          </p>
        </div>
        <div className='my-5 lg:my-11 flex flex-col bg-slate-200 rounded-3xl lg:flex-row'>
          <div className='w-full lg:w-1/2 flex my-5 justify-center'>
            <table>
              <tbody>
                <tr className='flex flex-row my-3'>
                  <td className='flex items-center px-3'>
                    <FaLocationDot size={37} className='text-pink-600' />
                  </td>
                  <td className='flex items-center text-2xl font-bold pr-3 lg:px-5'>
                    Address
                  </td>
                  <td>
                    <h2 className='font-bold text-green-800 flex items-center'>
                      Jenga Plaza, <br /> 2136 Haille Sellasie Avenue, <br />
                      Nairobi, Kenya.
                    </h2>
                  </td>
                </tr>
                <tr className='flex flex-row'>
                  <td className='flex items-center px-3'>
                    <MdEmail size={37} className='text-pink-600' />
                  </td>
                  <td className='flex items-center text-2xl font-bold pr-3 lg:px-5'>
                    Enquiries <br />
                    Support
                  </td>
                  <td>
                    <h2 className='font-bold text-green-800 flex items-center'>
                      enquiries@jenga.com
                      <br />
                      support@jenga.com
                    </h2>
                  </td>
                </tr>
                <tr className='flex flex-row'>
                  <td className='flex items-center px-3'>
                    <FaPhoneFlip size={37} className='text-pink-600' />
                  </td>
                  <td className='flex items-center text-2xl font-bold pr-3 lg:px-5'>
                    Landline <br />
                    Mobile
                  </td>
                  <td>
                    <h2 className='font-bold text-green-800 flex items-center'>
                      +254712136452 <br />
                      +254743611343
                    </h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='w-full lg:w-1/2 text-white bg-slate-900'>
            <h1 className='text-2xl lg:text-5xl font-bold py-3 flex justify-center'>
              Send Message
            </h1>
            <div className='px-4 lg:px-9 mt-2'>
              <input
                type='text'
                placeholder='Full name'
                className='bg-slate-900 border-none font-bold focus:outline-none focus:shadow-outline'
              />
              <hr className='text-white' />
            </div>
            <div className='px-4 lg:px-9 my-5'>
              <input
                type='text'
                placeholder='Email'
                className='bg-slate-900 border-none font-bold focus:outline-none focus:shadow-outline'
              />
              <hr className='text-white' />
            </div>
            <div className='px-4 lg:px-9 my-5'>
              <input
                type='text'
                placeholder='Type your message...'
                className='bg-slate-900 border-none font-bold focus:outline-none focus:shadow-outline'
              />
              <hr className='text-white' />
            </div>
            <div className='flex justify-center py-3'>
              <button
                type='button'
                className='bg-green-700 font-bold px-3 py-1 lg:px-5 rounded-3xl hover:bg-green-600'
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
