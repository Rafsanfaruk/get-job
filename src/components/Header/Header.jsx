import React from 'react';
import { NavLink } from 'react-router-dom';
import { BeakerIcon, Bars3BottomRightIcon,
    XMarkIcon, } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className='mt-5 mx-2 flex items-center justify-evenly '>
            
            {/* Navbar section */}
                <h1 className='text-3xl font-bold'>Get Job</h1>
            <div>
            </div>
            <div>
            <ul className='items-center hidden space-x-8 lg:flex'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/statistics'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/applied-jobs'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Applied Jobs 
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/blog'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Blog
            </NavLink>
          </li>
        </ul>
            </div>
            <button className='btn'>Start Applying</button>
                
        </div>
        
        // mobile section 
        
        

    );
};

export default Header;