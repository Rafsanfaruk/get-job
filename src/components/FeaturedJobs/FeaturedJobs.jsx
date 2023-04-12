import React, { useEffect, useState } from 'react';
import FeatureJobList from '../FreaturedJobList/FeatureJobList';

const FeaturedJobs = () => {

    const [features,setFeature] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(()=>{
        fetch("/data.json")
        .then(res => res.json())
        .then(data =>setFeature(data))

    },[])

    const handleSeeMore = () => {
        setShowAll(true)
    }

    const featuresToDisplay = showAll ? features : features.slice(0, 4);

    return (
     
        <div className='my-container'>
             <div className='text-center items-center '>
                <h1 className='text-3xl font-bold pb-3 font-sans' >Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
             </div>
             <div className='grid gap-6 lg:grid-cols-2 sm:grid-cols-1'>
                {
                    featuresToDisplay.map((feature) =><FeatureJobList
                    feature={feature}
                    key={feature.id}
                    ></FeatureJobList>)
                }
             </div>
             {!showAll && features.length > 4 && (
                <div className='content-center  ms-96 '>
                    <button className='btn' onClick={handleSeeMore}>See More</button>
                </div>
             )}
        </div>
    );
};

export default FeaturedJobs;
