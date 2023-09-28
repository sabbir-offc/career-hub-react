import Swal from "sweetalert2";
const getStoredJobApplication = (job) => {
  const { id } = job;
  const storedJobApplication = [];
  const Applications = JSON.parse(localStorage.getItem("job-applications"));
  if (!Applications) {
    storedJobApplication.push(job);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplication)
    );
  } else {
    const isExists = Applications.find((job) => job.id === id);
    if (!isExists) {
      storedJobApplication.push(...Applications, job);
      localStorage.setItem(
        "job-applications",
        JSON.stringify(storedJobApplication)
      );
    } else {
      alert("already added.");
    }
  }
};

export { getStoredJobApplication };
