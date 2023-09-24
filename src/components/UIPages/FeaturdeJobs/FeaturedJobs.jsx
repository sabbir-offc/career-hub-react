import { useEffect, useState } from "react";
import Job from "../../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [datalength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  //this is not the best way.
  return (
    <div>
      <h1 className="text-5xl text-center font-extrabold text-black mt-32">
        Featured Jobs
      </h1>
      <p className="text-xl text-[#757575] text-center mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-6 place-items-center">
        {jobs.slice(0, datalength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={datalength === jobs.length && "hidden"}>
        <button
          onClick={() => setDataLength(jobs.length)}
          id="special-btn"
          className="px-5 py-3 rounded-lg text-white font-bold text-xl mt-8"
        >
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
