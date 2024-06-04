import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';

function About() {
  return (
    <div>
      <Nav />
      <div className='w-full lg:w-3/4 mt-3 mx-2 lg:mt-11 lg:mx-11 lg:px-11'>
        <div className='my-2'>
          <h1 className='text-2xl lg:text-6xl text-green-600 font-bold'>
            About Us
          </h1>
          <p className='text-1xl font-bold'>
            Connecting Builders, Empowering Growth
          </p>
        </div>
        <div className='text-green-950'>
          <p className='my-2'>
            Jenga was born out of a vision to revolutionize the construction
            industry, streamlining the way individuals, businesses, and
            companies find the right contractors for their projects. In a
            landscape often marred by complexity and disconnection, we
            recognized the need for a platform that could bridge the gap between
            those seeking construction services and the pool of skilled,
            reliable contractors eager to lend their expertise.
          </p>
          <p className='my-2'>
            At the heart of Jenga lies a deep commitment to fostering a
            symbiotic relationship between clients and contractors. We
            understand that the success of one is intrinsically linked to the
            success of the other. That's why our mission is to create economic
            opportunities that empower both parties, ensuring a win-win scenario
            for all. Through our user-friendly platform, we make it easier than
            ever for clients to access a curated network of vetted contractors,
            each with a proven track record of excellence. By showcasing their
            expertise, credentials, and customer reviews, we empower clients to
            make informed decisions, confident that they are entrusting their
            projects to the best professionals in the field.
          </p>
          <p className='my-2'>
            Simultaneously, we strive to create more opportunities for
            contractors, connecting them with a diverse array of clients in need
            of their services. Our goal is to simplify the process of reaching
            potential customers, allowing contractors to focus on what they do
            best: transforming visions into reality.
          </p>
          <p className='my-2'>
            But Jenga is more than just a matchmaking service. We have also
            integrated a robust marketplace for construction supplies, ensuring
            that our users have access to the high-quality materials they need
            to bring their projects to life. By leveraging our extensive network
            of suppliers and leveraging our bulk purchasing power, we're able to
            offer competitive prices and reliable delivery, further streamlining
            the construction process.
          </p>
          <p className='my-2'>
            As we continue to grow and evolve, our commitment to our founding
            principles remains unwavering. We believe that by empowering
            individuals, businesses, and companies to access the best
            construction resources and services, we can unlock new levels of
            growth and innovation in the industry.
            <br />
          </p>
          <p className='my-2'>
            Join us on this journey as we redefine the future of construction,
            one project at a time.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
