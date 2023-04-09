import React from 'react';
import image from '../../assets/All Images/copy.png';

const Cover = () => {
    return (
        <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
        {/* Text Content */}
        <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
          <div className='max-w-xl mb-6 lg:mt-8  '>
            
            <h2 className=' space-y-4 max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
            One Step  
            <br></br>
             
             <span className='hidden md:block space-y-4'>Closer To Your{' '} </span>
            
              <span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black '>Dream Job</span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
          </div>
          <div className='flex flex-col items-center md:flex-row'>
           
           <button className='btn'>Get Start</button>
          </div>
        </div>
        {/* img */}
        <div className='relative lg:w-1/2'>
          <img className='w-full lg:w-5/6 lg:ml-auto h-56  sm:h-96' src={image } alt="" />
        </div>
        
      </div>
    );
};

export default Cover;