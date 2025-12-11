import SingleCatagory from "./SingleCatagory";
import { getcatagory } from "@/action/catagory.action";

async function AllCatagory() {
  const categorys = await getcatagory();

  return (
    <div className="mt-10 ">
      <div className="text-center flex justify-center items-center">
        <h1 className="text-[#304b4e] text-3xl font-semibold ">All</h1>
        <span className="text-purple-500 mx-1 font-semibold text-4xl relative inline-block stroke-current">
          Catagory
          <svg
            className="absolute -bottom-0.5 w-full max-h-1.5"
            viewBox="0 0 55 5"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">
            <path
              d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
              strokeWidth="2"></path>
          </svg>
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-6 mt-10">
        {categorys.map((catagory) => (
          <SingleCatagory
            key={catagory._id}
            category={catagory.name}
            image={catagory.categoryImage}
          />
        ))}
      </div>
    </div>
  );
}

export default AllCatagory;
