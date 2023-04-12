import React, { useEffect, useState } from "react";
import { getStoredJobCart } from "../../Utilities/fakeDb";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const [jobId, setJobId] = useState([]);
  const jobsData = useLoaderData();

  useEffect(() => {
    const jobSaved = getStoredJobCart();
    for (const id in jobSaved) {
      const foundJob = jobsData.find((j) => j.id == id);
      if (foundJob) {
        setJobId([...jobId, foundJob]);
      }
    }
  }, []);

  return (
    <div className="my-container">
      <h1 className="text-3xl font-bold text-center mt-5">Applied Jobs</h1>
      <div className="my-container">
        {jobId.map((job) => (
          <div key={job.id}>
            <div className="flex justify-between items-center">
                <div className="flex gap-5">

              <img className="border-slate-300" src={job.companyLogo} alt="" />
              <div>
                <h1 className="text-2xl font-semibold">{job.jobTitle}</h1>
                <p className="font-semibold">{job.companyName}</p>
                <div className="flex gap-4 mt-3 text-sky-600">
                  <button className="border-2 border-indigo-600 m-2  px-5 py-2 rounded-md">
                    Remote
                  </button>
                  <button className="border-2 border-indigo-600 m-2  px-5 py-2 rounded-md">
                    Full Time
                  </button>
                </div>
                <div className='flex mt-4 gap-2'>
                <div className='flex'>
                <img src={job.locationLogo} alt="" />
                <p>{job.location}</p>
                </div>
                <div className='flex '>
                    <img src={job.salaryLogo} alt="" />
                    <p>{job.salary}</p>
                </div>
            </div>
              </div>
             
            </div>
            <button className="btn">view Details</button>
            </div>

         {/*    <button className="btn">view Details</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
