import react from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from './pages/About';
import Buying from './pages/Buying';
import Contact from './pages/Contact';
import Contractors from './pages/Contractors';
import Index from "./pages/Index";
import Profile from './pages/Profile';
import Project from './pages/Project';
import Projects from './pages/Projects';
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
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
          path="/contractors"
          element={
            <ProtectedRoute>
              <Contractors />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buying"
          element={
            <ProtectedRoute>
              <Buying />
            </ProtectedRoute>
          }
        />
        <Route
          path="/selling"
          element={
            <ProtectedRoute>
              <Selling />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />
        <Route
          path="/project/<int:pk>"
          element={
            <ProtectedRoute>
              <Project />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
