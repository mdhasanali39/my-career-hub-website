import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  // ei id tar type kintu string
  // kintu amar jobs gular prottektar id type number .. jar karone amra
  // jodi three equal diye check korte jai tahole undefind asbe..
  // console.log(typeof id);
  const data = useLoaderData();
  // console.log(data);

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

  // handle apply button clicked 
  const handleApplyBtnClicked = (id) =>{
    let storedData = JSON.parse(localStorage.getItem('job')) || [];
   
    // console.log(storedData);
    storedData.push(id)

    localStorage.setItem('job', JSON.stringify(storedData));

  }


  return (
    <div className="flex gap-3 my-16">
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
    <div className="w-1/4 bg-violet-50 p-3 rounded-lg">
        <h2 className="pb-2 border-b">Job Details</h2>
        <p className="text-xl font-semibold text-[#757575]">{salary}</p>
        <h2 className="text-2xl font-extrabold text-gray-600">{job_title}</h2>
        <h2 className="pb-2 border-b">Contact Information</h2>
        <button onClick={()=>handleApplyBtnClicked(id)} className="w-full text-xl font-extrabold text-white bg-[#9873FF] px-4 py-3 rounded-md">
          Apply Now
        </button>
    </div>
    </div>
  );
};

export default JobDetails;
