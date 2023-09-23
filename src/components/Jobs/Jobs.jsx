import { useEffect, useState } from "react";
import Job from "./JobCard/JobCard";

const Jobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('/public/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div>
            <h1 className="text-center text-3xl font-extrabold my-5">Jobs List</h1>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                {
                    jobs?.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="w-full text-center my-8">
            <button className="text-xl font-extrabold text-white bg-[#9873FF] px-4 py-3 rounded-md">See All Jobs</button>
            </div>
        </div>
    );
};

export default Jobs;