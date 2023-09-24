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
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">{remote_or_onsite}</div>
            <div className="badge badge-outline">{job_type}</div>
          </div>
          <div className="flex gap-3">
            <p className="flex items-center">
              <CiLocationOn></CiLocationOn> {location}
            </p>
            <p className="flex items-center">
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
