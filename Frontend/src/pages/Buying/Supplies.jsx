import React from 'react';
import LoggedNav from '../../components/LoggedNavH';

function Supplies() {
  return (
    <div>
      <LoggedNav />
      <div className='m-11'>
        <h1>Buy Supplies</h1>
        <p>
          Browse through the construction supplies and pay using our escrow
          services. <br />
          Only release funds from your account after you've received the
          products.
        </p>
      </div>
    </div>
  );
}

export default Supplies;
