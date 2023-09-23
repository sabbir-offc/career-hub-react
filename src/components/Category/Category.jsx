const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="bg-gray-300 rounded-md w-fit p-5 text-center">
      <img src={logo} alt="" />
      <h3 className="text-xl">{category_name}</h3>
      <p>{availability}</p>
    </div>
  );
};

export default Category;
