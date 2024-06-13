import React from 'react';
import LoggedNavW from '../../components/LoggedNavW';

function Projects() {
  return (
    <div>
      <LoggedNavW />
      <div className='m-11'>
        <h2>This page will be the landing page for the contractors.</h2>
        <p>
          This page will contain all the projects created by the clients, and
          will let the contractors bid on projects. <br />
          They will also add new items/materials for sale.
        </p>
      </div>
    </div>
  );
}

export default Projects;
