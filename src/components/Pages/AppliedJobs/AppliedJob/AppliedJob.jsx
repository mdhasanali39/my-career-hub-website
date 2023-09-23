import PropTypes from 'prop-types';
const AppliedJob = ({ job }) => {
  const {job_title, company_name,remote_or_onsite,job_type,location, salary} = job;
  return (
    <div className="border rounded-lg p-4 mb-4">
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
    </div>
  );
};
AppliedJob.propTypes ={
    job: PropTypes.object.isRequired,
}
export default AppliedJob;
