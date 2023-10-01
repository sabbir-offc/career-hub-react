import { useEffect, useState } from "react";
import Category from "../../Category/Category";

const CategoryList = () => {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch("data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);
  return (
    <div>
      <h2 className="text-5xl font-extrabold text-center mt-32">
        Job Category List
      </h2>
      <p className="text-center mt-4 text-[#757575]">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid lg:grid-cols-4 gap-3 place-items-center mt-8">
        {categorys.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
