import HeadingText from "@/Components/HeadindText";
import CategoryForm from "@/Components/adminComponents/CategoryForm";
import CategoryList from "@/Components/adminComponents/CategoryList";

function page() {
  return (
    <div className="max-w-7xl flex items-center p-6 mt-30 justify-between bg-[#eaeff0] mx-auto w-full rounded">
      <div className="w-full">
        <HeadingText headingfast="Add" headinglast="Catagory" marginTop="0" />

        <CategoryForm />
        <CategoryList />
      </div>
    </div>
  );
}

export default page;
