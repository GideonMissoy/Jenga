import { useState, useEffect } from 'react';
import api from '../../api';
import Project from '../../components/Project';
import '../styles/Index.css';

function Buying() {
  const [projects, setProjects] = useState([]);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = () => {
    api
      .get('/api/projects/')
      .then((res) => res.data)
      .then((data) => {
        setProjects(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteProject = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert('Note deleted!');
        else alert('Failed to delete note.');
        getProjects();
      })
      .catch((error) => alert(error));
  };

  const createProject = (e) => {
    e.preventDefault();
    api
      .post('/api/notes/', { content, title })
      .then((res) => {
        if (res.status === 201) alert('Note created!');
        else alert('Failed to make note.');
        getProjects();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <div>
        <h2>Projects</h2>
        {projects.map((project) => (
          <Project
            project={project}
            onDelete={deleteProject}
            key={project.id}
          />
        ))}
      </div>
      <h2>Create a new Project</h2>
      <form onSubmit={createProject}>
        <label htmlFor='title'>Title:</label>
        <br />
        <input
          type='text'
          id='title'
          name='title'
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor='description'>Description:</label>
        <br />
        <textarea
          id='description'
          name='description'
          required
          value={content}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <input type='submit' value='Submit'></input>
      </form>
    </div>
  );
}

export default Buying;
