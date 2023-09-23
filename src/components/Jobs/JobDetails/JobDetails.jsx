import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  // ei id tar type kintu string
  // kintu amar jobs gular prottektar id type number .. jar karone amra
  // jodi three equal diye check korte jai tahole undefind asbe..
  console.log(typeof id);
  const data = useLoaderData();
  console.log(data);

  const selectedJob = data.find((job) => job.id == id);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = selectedJob;

  return (
    <div className="flex gap-3">
    {/* left  */}
      <div className="w-3/4">
        <p>
          <span className="font-extrabold text-[#1A1919]">Job Description</span>
          :{job_description}
        </p>
        <p>
          <span className="font-extrabold text-[#1A1919]">
            Job Responsibility
          </span>
          :{job_responsibility}
        </p>
        <p>
          <span className="font-extrabold text-[#1A1919]">
            Educational Requirements
          </span>
          :{educational_requirements}
        </p>
        <p>
          <span className="font-extrabold text-[#1A1919]">Experiences</span>:
          {experiences}
        </p>
      </div>
    {/* right  */}
    <div className="w-1/4">
        <h2 className="pb-2 border-b">Job Details</h2>
    </div>
    </div>
  );
};

export default JobDetails;
