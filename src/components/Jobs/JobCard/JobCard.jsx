import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div className="border p-5 rounded-lg">
      <img className="h-10" src={logo} alt={job_title} />
      <h2 className="text-2xl font-extrabold text-gray-600">{job_title}</h2>
      <p className="text-xl font-semibold text-[#757575]">{company_name}</p>
      <div className="flex gap-3 my-4">
        <p className="font-extrabold px-4 py-2 border border-[#7e90fe] rounded-md text-[#9873FF]">
          {remote_or_onsite}
        </p>
        <p className="font-extrabold px-4 py-2 border border-[#7e90fe] rounded-md text-[#9873FF]">
          {job_type}
        </p>
      </div>
      <div className="flex gap-3 my-4">
        <p className="text-xl font-semibold text-[#757575]">{location}</p>
        <p className="text-xl font-semibold text-[#757575]">{salary}</p>
      </div>
      <Link to={`/${id}`}>
        <button className="text-xl font-extrabold text-white bg-[#9873FF] px-4 py-3 rounded-md">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
