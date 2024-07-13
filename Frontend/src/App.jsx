import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Landing/Home';
import Contact from './pages/Landing/Contact';
import Careers from './pages/Landing/Careers';
import About from './pages/Landing/About';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';
import VerifyEmail from './pages/Auth/VerifyEmail';
import MyProjects from './pages/Buying/MyProjects';
import Progress from './pages/Buying/Progress';
import ProtectedRoute from './components/ProtectedRoute';
import Supplies from './pages/Buying/Supplies';
import Talents from './pages/Buying/Talents';
import Proposals from './pages/Selling/Proposals';
import MyGigs from './pages/Selling/myGigs';
import MyProducts from './pages/Selling/myProducts';
import ProjectProgress from './pages/Selling/ProjectProgress';
import Projects from './pages/Selling/Projects';
import CreateProject from './pages/Buying/CreateProject';

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
        <ToastContainer />
        <Routes>
          <Route index element={<Home />} />
          <Route exact path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<RegisterAndLogout />} />
          <Route path='/reset-password' element={<ForgotPassword />} />
          <Route path='/verify-email' element={<VerifyEmail />} />
          <Route path='/careers' element={<Careers />} />

          <Route path='/projects' element={<Projects />} />
          <Route path='/my-proposals' element={<Proposals />} />
          <Route path='/my-products' element={<MyProducts />} />
          <Route path='/progress-tracking' element={<ProjectProgress />} />
          <Route path='/my-gigs' element={<MyGigs />} />

          <Route path='/my-projects' element={<MyProjects />} />
          <Route path='/create-project' element={<CreateProject />} />
          <Route path='/progress' element={<Progress />} />
          <Route path='/gigs' element={<Talents />} />
          <Route path='/supplies' element={<Supplies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
