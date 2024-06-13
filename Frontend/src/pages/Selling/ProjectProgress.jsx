import React from 'react';
import LoggedNavW from '../../components/LoggedNavW';

function ProjectProgress() {
  return (
    <div>
      <LoggedNavW />
      <div className='m-11'>
        <h1>Project Progress.</h1>
        <p>
          Once you've been awarded a project to work on, you'll be required to
          log you progress here.
        </p>
        <p>
          Since payment will be made on milestones completed, this will be a
          crucial step to ensure you get paid on time.
        </p>
      </div>
    </div>
  );
}

export default ProjectProgress;
