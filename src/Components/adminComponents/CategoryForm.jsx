import { addCategory, getcatagory } from "@/action/catagory.action";

function CategoryForm() {
  return (
    <form action={addCategory}>
      <div className="mb-6 mt-10">
        <label className="block text-purple-400 font-medium text-sm">
          Catagory Name
        </label>
        <input
          type="text"
          placeholder="Enter Your Catagory Name.."
          required
          name="categoryName"
          className="w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
        />
      </div>
      <div className="mb-6 mt-10">
        <label className="block text-purple-400 font-medium text-sm">
          Catagory Image
        </label>
        <input
          type="url"
          placeholder="Enter Your Catagory Name.."
          name="categoryImage"
          required
          className="w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-500 text-white font-semibold py-3 rounded-lg hover:bg-purple-600 transition">
        Add Catagory
      </button>
    </form>
  );
}

export default CategoryForm;
