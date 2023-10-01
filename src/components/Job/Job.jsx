import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import "/src/common.css";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    salary,
    job_type,
    location,
    id,
  } = job;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="jobs" className="w-fit md:w-80" />
        </figure>
        <div className="p-10">
          <h2 className="card-title">{job_title}</h2>
          <p className="text-xl font-semibold mt-2 text-[#757575]">
            {company_name}
          </p>
          <div className="flex gap-4 mt-4 justify-start">
            <p className="text-base text-[#7E90FE] px-5 py-2  border-2 border-[#7E90FE] rounded-md font-extrabold ">
              {remote_or_onsite}
            </p>
            <p className="text-base text-[#7E90FE] px-5 py-2  border-2 border-[#7E90FE] rounded-md font-extrabold ">
              {job_type}
            </p>
          </div>
          <div className="flex gap-3 mt-4">
            <p className="flex items-center gap-2 text-xl font-semibold text-[#757575] ">
              <CiLocationOn></CiLocationOn> {location}
            </p>
            <p className="flex items-center gap-2 text-xl font-semibold text-[#757575]">
              <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar>Salary:{" "}
              {salary}
            </p>
          </div>
          <Link to={`/job/${id}`}>
            <button
              id="special-btn"
              className="px-5 py-3 rounded-lg text-white font-bold text-xl mt-8"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
Job.propTypes = {
  job: PropTypes.object,
};
export default Job;
