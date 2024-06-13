import React from 'react';
import LoggedNavW from '../../components/LoggedNavW';

function MyProducts() {
  return (
    <div>
      <LoggedNavW />
      <div className='m-11'>
        <h1>My Products for sale.</h1>
        <p>
          This page will contain all the products for sale added by the user.
          <br />
          The page will also let a user add new products for sale. <br />
          The page will also show all the stats related to each product, the
          impressions on the user, the number of clicks and quantity sold.
        </p>
      </div>
    </div>
  );
}

export default MyProducts;
