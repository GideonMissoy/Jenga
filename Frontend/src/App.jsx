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
// function Logout() {
//   localStorage.clear();
//   return <Navigate to='/login' />;
// }

// function RegisterAndLogout() {
//   localStorage.clear();
//   return <Register />;
// }

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/careers' element={<Careers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
