const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-10">
      <section>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold md:max-w-lg mx-3 md:mx-0">
          One Step Closer To Your <span id="special-txt">Dream Job</span>
        </h2>
        <p className="text-lg font-medium text-[#757575] max-w-lg mx-5 md:mx-auto mt-6 ">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button
          className="px-5 md:px-7 py-3 md:py-5 rounded-lg text-white font-bold ml-4 md:ml-0 text-xl mt-8"
          id="special-btn"
        >
          Get Start
        </button>
      </section>
      <section>
        <img src="assets/images/user.png" alt="" />
      </section>
    </div>
  );
};

export default Banner;
