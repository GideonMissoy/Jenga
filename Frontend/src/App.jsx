import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import About from './pages/About';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Hiring from './pages/Hiring';
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
    <div>
      <Router>
        <Routes>
          <Route
            path='/hiring'
            element={
              <ProtectedRoute>
                <Hiring />
              </ProtectedRoute>
            }
          />
          <Route index element={<Home />} />
          <Route exact path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<RegisterAndLogout />} />
          <Route path='/careers' element={<Careers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
