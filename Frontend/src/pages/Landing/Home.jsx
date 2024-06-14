import React from 'react';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';
import CityView from '../../assets/cityview.jpg';
import Tickbrush from '../../assets/jengatick.jpg';

function Home() {
  return (
    <div>
      <Nav />
      <div className='flex flex-col lg:flex-row bg-slate-300 rounded-3xl text-black mx-3 lg:mx-11 mt-3 lg:mt-11 '>
        <div className='w-full lg:w-1/2 bg-grey-200 my-3 lg:px-11 flex flex-col justify-center'>
          <h2 className='text-2xl lg:text-6xl text-green-700 font-bold text-center lg:pt-2 lg:py-9'>
            Jenga
          </h2>
          <p className='text-green-950 lg:text-2xl font-bold text-center py-2'>
            Where construction dreams meet reality! Whether you're a homeowner
            embarking on a renovation project or a contractor seeking exciting
            opportunities, our platform is your one-stop destination.
          </p>
        </div>
        <div className='w-full lg:w-1/2 relative'>
          <div className='absolute inset-0 bg-black opacity-50 rounded-3xl'></div>
          <img
            src='https://plus.unsplash.com/premium_photo-1683121484062-ca19568b0b79?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Image'
            className='rounded-3xl'
          />
        </div>
      </div>
      <div className='my-5 lg:my-11 mx-3 lg:mx-11'>
        <h2 className='text-2xl lg:text-5xl text-slate-800 font-bold py-5 lg:py-11'>
          Revolutionalizing the construction space.
        </h2>
        <div className='flex flex-col lg:flex-row lg:mx-11'>
          <div className='w-full lg:w-2/3 flex items-center'>
            <p className='text-green-950'>
              <span className='text-green-800 font-bold lg:text-2xl'>
                Have you ever tried to find a reputable contractor to work on
                your project?
              </span>{' '}
              <br />
              Well, this often involves word-of-mouth recommendations from
              friends, family, or neighbors who have had positive experiences
              with construction projects. These referrals might provide you with
              a level of trust and assurance in the contractor's abilities and
              reliability. Once a few potential candidates are identified, you
              then meet with them to discuss the project scope, timelines, and
              budget, till you find your perfect fit. <br />
              <span className='font-bold pt-3'>
                What if we told you there's an easier way to do it, and without
                compromising on quality
              </span>
            </p>
          </div>
          <div className='w-full lg:w-1/3'>
            <img
              src='https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='conversation'
            />
          </div>
        </div>
        <h2 className='my-4 lg:my-11'>
          <span className='text-slate-800 font-bold text-2xl lg:text-4xl'>
            At Jenga, we've come to shake things up, and for the better.
          </span>
        </h2>
      </div>
      <div
        className='flex flex-col lg:flex-row mx-3 lg:mx-11 rounded-3xl'
        style={{ backgroundColor: 'rgba(214, 214, 214, 0.979)' }}
      >
        <div className='w-full lg:w-1/2 px-2 lg:px-7 py-3 lg:py-7 flex flex-col justify-center text-center'>
          <span className='text-2xl lg:text-6xl font-bold'>
            How would you hire the Best?
          </span>
          <p className='text-slate-800 font-bold pb-3 lg:pb-7'>
            Forget the old ways, Forget getting referred. You can have the best
            contractors. Right here. Right now!
          </p>
          <div className='mb-3'>
            <Link
              to='/register'
              className='bg-green-600 text-white py-2 px-3 lg:px-5 font-bold rounded-full'
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:pl-11'>
          <img
            src={CityView}
            alt='Photo'
            className='rounded-3xl transition-transform duration-300 hover:scale-115 hover:p-0'
          />
        </div>
      </div>
      <div className='m-3 lg:m-11 '>
        <div className='lg:mx-11 lg:px-11 text-slate-900'>
          <h2 className='text-2xl lg:text-5xl text-slate-900 font-bold py-2'>
            <span className='text-pink-900 text-small lg:text-2xl lg:pl-2'>
              Introducing
            </span>
            <br />
            Jenga, the New construction Hub
          </h2>
          <hr />
          <p className='py-2'>
            Welcome to Jenga, the groundbreaking platform transforming the
            construction industry. At Jenga, we understand the challenges of
            finding reliable contractors and the frustrations of managing
            construction projects. That's why we've created a one-stop solution
            that connects homeowners and contractors with ease, efficiency, and
            trust.
          </p>
          <h2 className='text-2xl lg:text-3xl font-bold py-2'>
            Revolutionizing the Construction Experience
          </h2>
          <p className='py-2'>
            Have you ever found yourself overwhelmed by the process of finding a
            reputable contractor? Traditionally, this involves relying on
            word-of-mouth recommendations, spending countless hours researching,
            and meeting with multiple candidates to discuss project details.
            It's a lengthy, stressful, and often unreliable process. Jenga
            changes all that by bringing the best contractors directly to you,
            simplifying your construction journey from start to finish.
          </p>
          <h2 className='text-2xl lg:text-3xl font-bold py-2'>
            The Future of Construction is Here
          </h2>
          <p className='py-2'>
            Imagine starting your renovation or construction project with
            complete confidence, knowing that you have access to the best
            contractors in the industry. With Jenga, this is not just a
            possibility; it's a reality. We bring together homeowners and
            top-tier contractors, creating a community built on trust, quality,
            and innovation.
          </p>
        </div>
      </div>
      <div className='m-3 lg:m-11 '>
        <div className='lg:mx-11 lg:px-11 text-slate-900'>
          <h2 className='text-2xl lg:text-5xl text-slate-900 font-bold py-2'>
            Discover the Jenga Marketplace
          </h2>
          <hr />
          <p className='mt-2 lg:mt-5'>
            In addition to connecting you with trusted contractors, Jenga also
            offers an integrated marketplace, revolutionizing the way you source
            construction materials. Whether you're a homeowner looking for
            quality supplies or a company wanting to sell your products, the
            Jenga Marketplace is the ultimate destination for all your
            construction material needs.
          </p>
          <ul className='px-2 lg:px-11'>
            <li className='py-1 lg:py-3'>
              <span className='font-bold text-small lg:text-2xl text-green-800'>
                Wide Selection:
              </span>
              <br /> Browse a vast range of construction materials from trusted
              suppliers. From basic building materials to specialized products,
              our marketplace has everything you need to complete your project.
            </li>
            <li className='py-1 lg:py-3'>
              <span className='font-bold text-small lg:text-2xl text-green-800'>
                Competitive Pricing:
              </span>
              <br /> Enjoy competitive pricing and exclusive deals that help you
              stay within budget without compromising on quality.
            </li>
            <li className='py-1 lg:py-3'>
              <span className='font-bold text-small lg:text-2xl text-green-800'>
                Verified Sellers:
              </span>
              <br /> All sellers on our marketplace are thoroughly vetted to
              ensure they meet our standards of reliability and quality. Buy
              with confidence knowing that you’re getting the best materials
              available.
            </li>
            <li className='py-1 lg:py-3'>
              <span className='font-bold text-small lg:text-2xl text-green-800'>
                Easy Transactions:
              </span>
              <br /> Our seamless purchasing process makes it easy to find,
              compare, and buy materials, saving you time and effort. Secure
              payment options and transparent shipping details ensure a
              hassle-free experience.
            </li>
          </ul>
        </div>
      </div>
      <div className='mb-5 lg:mb-11 mx-3 lg:mx-11'>
        <h2 className='text-2xl lg:text-5xl text-slate-800 font-bold'>
          Your Ultimate Destination for Quality and Reliability
        </h2>
        <p className='py-2 lg:my-5 mx-2 lg:mx-5 text-center text-pink-900 font-bold'>
          Jenga is not just another construction platform; it's a revolution in
          how projects are initiated, managed, and completed. <br />
          Here's what sets Jenga apart:
        </p>
      </div>
      <div className='flex flex-col lg:flex-row mx-3 lg:mx-11 bg-slate-950 rounded-3xl text-white mb-5 lg:mb-11'>
        <div className='w-full lg:w-1/3 p-2 lg:p-11 flex flex-col justify-center align-items '>
          <h1 className='mb-3 lg:mb-7 text-center text-green-500 text-2xl lg:text-5xl font-bold '>
            Hire the best!
          </h1>
          <img src={Tickbrush} alt='tick' className='rounded-full' />
        </div>
        <div className='w-full lg:w-2/3 flex flex-col justify-center px-2 lg:px-8 py-2 lg:py-7'>
          <h1 className='text-2xl lg:text-4xl font-bold py-2 '>
            Why you should choose us.
          </h1>
          <div className='py-2 lg:py-3'>
            <h3 className='lg:text-2xl font-bold'>Its FREE to join!</h3>
            <p>
              Register for free, and browse through our collection of the best
              contractors and freelancers, and book a consultation session with
              our experts.
            </p>
          </div>
          <div className='py-2 lg:py-3'>
            <h3 className='lg:text-2xl font-bold'>Vetted Professionals</h3>
            <p>
              We meticulously screen all contractors to ensure they meet our
              high standards of quality, reliability, and professionalism. You
              can trust that every contractor on Jenga is fully qualified and
              highly rated.
            </p>
          </div>
          <div className='py-2 lg:py-3'>
            <h3 className='lg:text-2xl font-bold'>Seamless Experience</h3>
            <p>
              Our user-friendly interface makes it easy to browse through
              contractor profiles, read reviews, compare ratings, and view
              portfolios. This transparency allows you to make informed
              decisions quickly and confidently.
            </p>
          </div>
          <div className='py-2 lg:py-3'>
            <h3 className='lg:text-2xl font-bold'>Efficient Communication</h3>
            <p>
              With Jenga, you can easily connect with contractors, discuss
              project specifics, and receive quotes without the hassle of
              multiple in-person meetings. Our platform streamlines
              communication, saving you time and effort.
            </p>
          </div>
          <div className='py-2 lg:py-3'>
            <h3 className='lg:text-2xl font-bold'>Guaranteed Satisfaction</h3>
            <p>
              We are committed to ensuring that your construction experience is
              smooth and satisfactory. From the initial search to project
              completion, Jenga supports you every step of the way.
            </p>
          </div>
        </div>
      </div>
      <div className='my-5 lg:my-11 mx-3 lg:mx-11'>
        <h2 className='text-2xl lg:text-5xl text-slate-800 font-bold py-5 lg:py-11'>
          Join the Jenga Community Today
        </h2>
        <p className='lg:mx-11'>
          Whether you're a homeowner embarking on a new project or a contractor
          looking for exciting opportunities, Jenga is your hub for all things
          construction. Don't settle for outdated methods and unreliable
          referrals. Step into the future of construction with Jenga and turn
          your dreams into reality.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
