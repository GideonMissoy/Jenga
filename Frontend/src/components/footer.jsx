import React from 'react';

function Footer() {
  return (
    <div className='flex items-end'>
      <h1>&copy; Jenga {new Date().getFullYear()}. ALL RIGHTS RESERVED.</h1>
    </div>
  );
}

export default Footer;
