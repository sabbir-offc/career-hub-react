import { AiOutlineDollar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

import PropTypes from "prop-types";

const AppliedJobDetails = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="w-full p-7 bg-slate-50 rounded-lg">
      <div className="grid grid-cols-6 gap-6 items-center">
        <div className="col-span-2">
          <img src={logo} alt="" className="rounded" />
        </div>
        <div className="col-span-4">
          <h3 className="text-2xl font-extrabold">{job_title}</h3>
          <h3 className="text-2xl font-extrabold my-2 text-[#757575]">
            {company_name}
          </h3>
          <div className="flex gap-4 mt-4">
            <p className="text-base text-[#7E90FE] px-5 py-2  border-2 border-[#7E90FE] rounded-md font-extrabold ">
              {remote_or_onsite}
            </p>
            <p className="text-base text-[#7E90FE] px-5 py-2  border-2 border-[#7E90FE] rounded-md font-extrabold ">
              {job_type}
            </p>
          </div>
          <div className="flex gap-6 items-center mt-6">
            <p className="flex items-center font-semibold text-xl text-[#757575] gap-2">
              <CiLocationOn></CiLocationOn> {location}
            </p>
            <p className="flex items-center font-semibold text-xl text-[#757575] gap-2">
              <AiOutlineDollar></AiOutlineDollar>Salary: {salary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
AppliedJobDetails.propTypes = {
  job: PropTypes.object,
};
export default AppliedJobDetails;
