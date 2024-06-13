import React from 'react';
import LoggedNavW from '../../components/LoggedNavW';

function MyGigs() {
  return (
    <div>
      <LoggedNavW />
      <div className='m-11'>
        <h1>my Gigs</h1>
        <p>
          This page will show all the gigs a contractor has created, together
          with all the stats and impressions.
        </p>
      </div>
    </div>
  );
}

export default MyGigs;
