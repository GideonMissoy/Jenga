import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoggedNav from '../../components/LoggedNavH';
import api from '../../api';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = () => {
      api
        .get('/my-projects/')
        .then((res) => res.data)
        .then((data) => {
          setProjects(data);
          console.log(data);
        })
        .catch((err) => alert(err));
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <LoggedNav />
      <div className='container mx-auto'>
        <div className='flex justify-between items-center bg-gray-200 p-4 rounded-lg mb-4'>
          <div className='text-4xl font-bold items-center'>My Projects</div>
          <div className='flex justify-end'>
            <Link to='/create-project' className='bg-slate-400 p-3 rounded-lg'>
              Create new Project
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='bg-gray-100 p-6 rounded-lg shadow-md'
            >
              <a href={`/project/${project.id}`} className='block'>
                <div className='flex items-start'>
                  {project.image && (
                    <img
                      src={project.image}
                      alt='Project'
                      className='w-24 h-24 rounded-lg mr-4'
                    />
                  )}
                  <div>
                    <small className='text-gray-500'>
                      {new Date(project.created_at).toLocaleDateString()} |{' '}
                      {project.location}
                    </small>
                    <h3 className='text-xl font-semibold'>{project.title}</h3>
                    <p className='text-gray-700'>{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
