import React from 'react';

function Nav() {
  return (
    <div>
      <div class='nav-landing'>
        <div class='nav-logo'>
          <a href="{% url 'index' %}">Jenga</a>
        </div>
        <div class='nav-pages'>
          <ul>
            <li>
              <a href="{% url 'about' %}">About Us</a>
            </li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
        </div>
        <div class='get-started'>
          <a href="{% url 'login' %}" class='loginBtn'>
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
