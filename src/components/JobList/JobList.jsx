import React from 'react';

const JobList = ({job}) => {
    const {CategoryLogo,CategoryName,JobsAvailable} = job;
    return (
        <div className='my-container   transition duration-200 transform   hover:shadow-2xl'>
             <img className='mb-4' src={job.CategoryLogo} alt="" />
             <div className='gap-4'>
             <h3 className='font-bold'>{job.CategoryName}</h3>
             <p>{job.JobsAvailable}</p>
             </div>
            
        </div>
    );
};

export default JobList;