import React from 'react';
 import Cover from '../Cover/Cover';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';


const Home = () => {
    return (
    <div>
        <Cover />
        <JobCategory />
        <FeaturedJobs />
    </div>
    );
};

export default Home;

