import React from 'react';
import { Link, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const FeatureJobList = ({feature}) => {
  
    const navigation = useNavigation()
    
    if (navigation.state === 'loading') {
      return <LoadingSpinner />
    }

    // console.log(feature);
    return (
        
        <div className='my-container '>
            <div className='border-neutral-300'>
            <img className='mb-5' src={feature.companyLogo} alt="" />
            <h1 className='text-2xl font-semibold'>{feature.jobTitle}</h1>
            <p>{feature.companyName}</p>
            <div className='flex gap-4 mt-3 text-sky-600'>
                <button className='border-2 border-indigo-600 m-2  px-5 py-2 rounded-md'>Remote</button>
                <button className='border-2 border-indigo-600 m-2  px-5 py-2 rounded-md'>Full Time</button>
            </div>
            <div className='flex mt-4 gap-2'>
                <div className='flex'>
                <img src={feature.locationLogo} alt="" />
                <p>{feature.location}</p>
                </div>
                <div className='flex '>
                    <img src={feature.salaryLogo} alt="" />
                    <p>{feature.salary}</p>
                </div>
            </div>
            
           <Link to={`../feature/${feature.id}`} className='btn mt-4'>View details</Link>
        
            </div>
            
            
        </div>
    );
};

export default FeatureJobList;