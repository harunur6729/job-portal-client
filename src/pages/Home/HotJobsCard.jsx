import React from "react";
import {  FaArrowRight, FaLocationPin } from "react-icons/fa6";
import { Link } from "react-router-dom";


const HotJobsCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job;
  return (
    <div className="bg-amber-50 px-2 pt-3">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex">
            <img className="w-8" src={company_logo} alt="" />
            <p1 className="text-xl font-semibold">{company}</p1>
          </div>
          <div className="flex items-center">
            <FaLocationPin></FaLocationPin>
            <p>{location}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{jobType}</p>
            <p>{category}</p>
            
        </div>

        
      </div>
      <div>
        <p> <span className="font-bold"> Deadline: </span>{applicationDeadline}</p>
        <p><span className="font-bold">Salary:</span> {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
        <p><span className="font-bold">Descriptions:</span> {description}</p>
        <p className="flex flex-wrap  gap-1 "><span className="font-bold">Requirements:</span>{
          requirements.map((requirement, idx) =><li key={idx} className=" font-semibold border px-2 border-red-400 rounded-lg ">{requirement}</li>)
        }</p>
        <p>
          <span className="font-bold">Responsibilities: </span>
          {
            responsibilities.map((responsibilitie, index) =><li key={index} className=" ml-9 font-semibold ">{responsibilitie}</li>)
          }
        </p>
      </div>
      <div className="flex ">
        <Link to={`/jobs/${_id}`}><button className="btn w-full btn-success ">Apply</button></Link>
      </div>
    </div>
  );
};

export default HotJobsCard;
