import React from 'react';
import LoggedNav from '../../components/LoggedNavH';

function Progress() {
  return (
    <div>
      <LoggedNav />
      <div className='m-11'>
        <h1>Track Progress.</h1>
        <p>This page will let a user track the progress of a project.</p>
      </div>
    </div>
  );
}

export default Progress;
