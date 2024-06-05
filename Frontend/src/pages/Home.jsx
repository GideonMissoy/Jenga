import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import CityView from '../assets/cityview.jpg';
import Tickbrush from '../assets/jengatick.jpg';

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
            <a
              href='#'
              className='bg-green-600 text-white py-2 px-3 lg:px-5 font-bold rounded-full'
            >
              Get Started
            </a>
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
        <div className='lg:mx-11 lg:px-11'>
          <h2 className='text-2xl lg:text-5xl text-slate-900 font-bold py-2'>
            <span className='text-pink-900 text-small lg:text-2xl lg:pl-2'>
              Introducing
            </span>
            <br />
            Jenga, the New construction Hub
          </h2>
          <hr />
          <p className='py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            adipisci in, amet at expedita consequatur, officia blanditiis
            obcaecati esse qui voluptatibus molestiae non culpa illum odio ad
            magni id repudiandae. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            adipisci in, amet at expedita consequatur, officia blanditiis
            obcaecati esse qui voluptatibus molestiae non culpa illum odio ad
            magni id repudiandae. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ut sequi laboriosam minus voluptas itaque
            consequuntur iste, harum placeat illum? Natus nostrum ducimus
            perspiciatis. Eius, accusamus deleniti inventore at ab maiores.
          </p>
          <p className='py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            adipisci in, amet at expedita consequatur, officia blanditiis
            obcaecati esse qui voluptatibus molestiae non culpa illum odio ad
            magni id repudiandae. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ut sequi laboriosam minus voluptas itaque
            consequuntur iste, harum placeat illum? Natus nostrum ducimus
            perspiciatis. Eius, accusamus deleniti inventore at ab maiores.
          </p>
          <p className='py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            adipisci in, amet at expedita consequatur, officia blanditiis
            obcaecati esse qui voluptatibus molestiae non culpa illum odio ad
            magni id repudiandae. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ut sequi laboriosam minus voluptas itaque
            consequuntur iste, harum placeat illum? Natus nostrum ducimus
            perspiciatis. Eius, accusamus deleniti inventore at ab maiores.
          </p>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row mx-3 lg:mx-11 bg-slate-950 rounded-3xl text-white mb-5 lg:mb-11'>
        <div className='w-full lg:w-1/3 p-2 lg:p-11  '>
          <h1 className='mb-3 lg:mb-7 text-center text-green-500 text-2xl lg:text-5xl font-bold '>
            Hire the best!
          </h1>
          <img src={Tickbrush} alt='tick' className='rounded-full' />
        </div>
        <div className='w-full lg:w-2/3 flex flex-col justify-center px-2 lg:px-8'>
          <h1 className='text-2xl lg:text-4xl font-bold py-2 '>
            Why you should choose us.
          </h1>
          <div className='py-2 lg:py-3'>
            <h3 className='lg:text-2xl font-bold'>Its FREE to join!</h3>
            <p>
              Register and browse through our collection of the best contractors
              and freelancers, and book a consultation session with our experts.
            </p>
          </div>
          <div className='py-2 lg:py-3'>
            <h3 className='lg:text-2xl font-bold'>Its FREE to join!</h3>
            <p>
              Register and browse through our collection of the best contractors
              and freelancers, and book a consultation session with our experts.
            </p>
          </div>
          <div className='py-2 lg:py-3'>
            <h3 className='lg:text-2xl font-bold'>Its FREE to join!</h3>
            <p>
              Register and browse through our collection of the best contractors
              and freelancers, and book a consultation session with our experts.
            </p>
          </div>
          <div className='py-2 lg:py-3'>
            <h3 className='lg:text-2xl font-bold'>Its FREE to join!</h3>
            <p>
              Register and browse through our collection of the best contractors
              and freelancers, and book a consultation session with our experts.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
