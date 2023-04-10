import React, { useEffect, useState } from 'react';
import FeatureJobList from '../FreaturedJobList/FeatureJobList';

const FeaturedJobs = () => {

    const [features,setFeature] =useState([])

    useEffect(()=>{
        fetch("/public/data.json")
        .then(res => res.json())
        .then(data =>setFeature(data.slice(0,4)))

    },[])
    //  console.log(features);

    return (
     
        <div className='my-container'>
             <div className='text-center items-center '>
                <h1 className='text-3xl font-bold pb-3 font-sans' >Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
             </div>
             <div className='grid gap-6 lg:grid-cols-2 sm:grid-cols-1'>
                {
                    features.map((feature) =><FeatureJobList
                    feature={feature}
                    key={feature.id}
                    ></FeatureJobList>)
                }
             </div>
        </div>
    );
};

export default FeaturedJobs;