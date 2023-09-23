const CategoryList = () => {
  return (
    <div>
      <h2 className="text-5xl font-extrabold text-center mt-32">
        Job Category List
      </h2>
      <p className="text-center mt-4 text-[#757575]">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="bg-gray-300 rounded-md w-fit p-5 text-center">
        <img src="assets/icons/accounts.png" alt="" />
        <h3 className="text-xl">Account & Finance</h3>
        <p>300 Jobs Available</p>
      </div>
    </div>
  );
};

export default CategoryList;
