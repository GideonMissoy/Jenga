import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';

function About() {
  return (
    <div>
      <Nav />
      <div>
        <h1>This is the About Page</h1>
        <p>Contains information about Jenga</p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
