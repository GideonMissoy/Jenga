import React from 'react';

function Footer() {
  return (
    <div className='w-full flex justify-center bg-black text-white items-end'>
      <h1>&copy; Jenga {new Date().getFullYear()}. ALL RIGHTS RESERVED.</h1>
    </div>
  );
}

export default Footer;
