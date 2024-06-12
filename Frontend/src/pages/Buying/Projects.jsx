import React from 'react';
import LoggedNav from '../../components/LoggedNavH';
import Sidebar from '../../components/Sidebar';

function Projects() {
  return (
    <div>
      <LoggedNav />
      <div>
        <Sidebar />
        <h1>This page will contain all the proejcts created by the user.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          explicabo pariatur repudiandae blanditiis enim libero itaque
          quibusdam? Minus, et. Vero placeat iure aliquid numquam nisi.
        </p>
      </div>
    </div>
  );
}

export default Projects;
