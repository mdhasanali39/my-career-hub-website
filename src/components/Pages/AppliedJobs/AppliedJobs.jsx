import { useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const data = useLoaderData();
  // console.log(data);

  let storedData = JSON.parse(localStorage.getItem("job")) || [];
  // console.log(storedData);

  const allAppliedJobs = data.filter((job) => storedData.includes(job.id + ""));
  console.log(allAppliedJobs);

  return (
    <div className="grid grid-cols-1">
      {allAppliedJobs?.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)}
    </div>
  );
};

export default AppliedJobs;
