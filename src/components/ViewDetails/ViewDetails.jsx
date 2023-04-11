import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  const jobDetails = details.find((job) => job.id === parseInt(id));

  return (
    <div className="px-4 py-12 mx-auto ">
      <div className="">
        <h1 className="text-center text-3xl font-bold">Job Details</h1>
      </div>
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto mt-5 m-2 p-2">
        <div className="lg:w-full h-full">
          {jobDetails ? (
            <div className="gap-2 font-sans flex ">
              <div>
              <h2 className="mb-4">
                <span className="font-semibold">Job Description: </span>
                {jobDetails.jobDescription}
              </h2>
              <p className="mb-4">
                <span className="font-semibold ">Job Responsibility: </span>{" "}
                jobResponsibility:{jobDetails.jobResponsibility}
              </p>
              <p className="mb-4">
                <span className="font-semibold ">
                  Educational Requirements:{" "}
                </span>
                {jobDetails.educationalRequirements}
              </p>
              <p>
                <span className="font-semibold ">Experiences: </span>
                <br></br>
                {jobDetails.experiences}
              </p>
              </div>

              <div className=" p-8 bg-slate-200 lg:p-16 lg:pl-10 lg:w-3/4 h-full ">
                <h1 className=" mb-5 text-2xl font-bold text-start">
                  Job Details
                </h1>
                <div className=" mb-5 border border-gray-400 border-b-1"></div>
                <div className="flex">
                  <img src={jobDetails.salaryLogo} alt="" />
                  <p>Salary:</p>
                  <p>{jobDetails.salary}</p>
                </div>
              </div>
            </div>
          ) : (
            <p>Job details not found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
