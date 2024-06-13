import React from 'react';
import LoggedNavW from '../../components/LoggedNavW';

function Proposals() {
  return (
    <div>
      <LoggedNavW />
      <div className='m-11'>
        <h1>This page will contain all open bids created by the user.</h1>
        <p>
          The bids will be removed from the list when: <br />
          1. 7 days elapses after the project was posted.
          <br />
          2. The project has been awarded to another contractor. <br />
          3. The project has been deleted.
        </p>
      </div>
    </div>
  );
}

export default Proposals;
