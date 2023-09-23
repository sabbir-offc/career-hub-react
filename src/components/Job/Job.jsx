const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_description,
    salary,
  } = job;
  return (
    <div>
      <img src={logo} alt="" />
      <h3>{job_title}</h3>
      <p>{job_description}</p>
    </div>
  );
};

export default Job;
