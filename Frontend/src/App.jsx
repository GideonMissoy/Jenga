import react from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import About from './pages/Home/About';
import Buying from './pages/Hiring/Buying';
import Contact from './pages/Home/Contact';
import Contractors from './pages/Hiring/Contractors';
import Index from './pages/Home/Index';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

function Logout() {
  localStorage.clear();
  return <Navigate to='/login' />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/contractors'
          element={
            <ProtectedRoute>
              <Contractors />
            </ProtectedRoute>
          }
        />
        <Route
          path='/buying'
          element={
            <ProtectedRoute>
              <Buying />
            </ProtectedRoute>
          }
        />
        <Route
          path='/selling'
          element={
            <ProtectedRoute>
              <Selling />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path='/projects'
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />
        <Route
          path='/project/<int:pk>'
          element={
            <ProtectedRoute>
              <Project />
            </ProtectedRoute>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/index' element={<Index />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/register' element={<RegisterAndLogout />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Index />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
