import React, { useState } from 'react';
import axios from 'axios';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import LoggedNav from '../../components/LoggedNavH';

const CreateProject = () => {
  const [title, setTitle] = useState('');
  const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Open');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const project = {
      title,
      budget,
      location,
      description,
      status,
    };

    try {
      const response = await api.post('/create-project/', project, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      console.log(response.data);
      navigate('/my-projects');
      // Handle successful response
    } catch (error) {
      console.error('There was an error creating the project!', error);
    }
  };

  return (
    <div>
      <LoggedNav />
      <div className='container mx-auto p-4'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          Create New Project
        </h2>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        >
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='title'
            >
              Title
            </label>
            <input
              type='text'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='budget'
            >
              Budget
            </label>
            <input
              type='number'
              id='budget'
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='location'
            >
              Location
            </label>
            <input
              type='text'
              id='location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='description'
            >
              Description
            </label>
            <textarea
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='status'
            >
              Status
            </label>
            <select
              id='status'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            >
              <option value='Open'>Open</option>
              <option value='In Progress'>In Progress</option>
              <option value='Completed'>Completed</option>
            </select>
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
