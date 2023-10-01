const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="bg-gradient-to-r from-[rgba(126,144,254,0.08)] to-[rgba(152,115,255,0.05)] rounded-md w-fit p-10 ">
      <img src={logo} alt="" className="mb-8" />
      <h3 className="text-xl font-extrabold text-[#474747]">{category_name}</h3>
      <p className="text-base font-medium text-[#A3A3A3]">{availability}</p>
    </div>
  );
};

export default Category;
