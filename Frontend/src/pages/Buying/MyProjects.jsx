import React, { useEffect, useState } from 'react';
import LoggedNav from '../../components/LoggedNavH';

function MyProjects() {
  const [projects, setProjects] = useState([]);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = () => {
    api
      .get('/api/my-projects')
      .then((res) => res.data)
      .then((data) => setProjects(data))
      .catch((err) => alert(err));
  };

  return (
    <div>
      <LoggedNav />
      <div className='m-11'>
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

export default MyProjects;
