import { useEffect, useState } from "react";
import Category from "./Category";

const CategoryList = () => {
  const [categories, setCategoris] = useState([]);

  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => setCategoris(data));
  }, []);

  return (
    <>
        <h1 className="text-center text-3xl font-extrabold my-5">Job Category List</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        {categories?.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </>
  );
};

export default CategoryList;
