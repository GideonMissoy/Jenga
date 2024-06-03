import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Index.css';

function Index() {
  return (
    <div>
      <div className='nav-landing'>
        <div className='nav-logo'>
          <a href="{% url 'index' %}">Jenga</a>
        </div>
        <div className='nav-pages'>
          <ul>
            <li>
              <a href="{% url 'about' %}">About Us</a>
            </li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className='get-started'>
          <a href="{% url 'login' %}" className='loginBtn'>
            Login
          </a>
        </div>
      </div>
      <div className='landing-content'>
        <h2>Jenga</h2>
        <p>
          Where construction dreams meet reality! Whether you're a homeowner
          embarking on a renovation project or a contractor seeking exciting
          opportunities, our platform is your one-stop destination.
        </p>
      </div>
    </div>
  );
}

export default Index;
