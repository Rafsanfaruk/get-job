import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import JobList from '../JobList/JobList';

const JobCategory = () => {
    
    const jobCatg =useLoaderData();
    // console.log(jobCatg);


    return (
        <div className='my-container'>
            <div className=' text-center'>
                <h1 className='text-4xl font-sans font-bold pb-3'>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
                {
                     jobCatg.slice(0,4).map(job =><JobList 
                        key={job.id}
                        job={job}


                        ></JobList>
                        )
                }
            </div>
        </div>
    );
};

export default JobCategory;