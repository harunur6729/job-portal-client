import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data =>{
            setJobs(data)
        })
    },[])
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center p-6'>Hot Jobs</h1>

            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-inner '> 
                {
                    jobs.map(job =><HotJobsCard key={jobs._id} job={job}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;