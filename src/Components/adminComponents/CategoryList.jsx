import React from "react";
import { getcatagory } from "@/action/catagory.action";
import Image from "next/image";
import { Trash2 } from "lucide-react";

async function CategoryList() {
  const cetagorys = await getcatagory();

  return (
    <div className="w-full mt-20  overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead className="bg-gray-50 text-sm text-gray-700 border-b border-gray-200">
            <tr>
              <th className="py-4 px-6 text-left font-semibold">Image</th>
              <th className="py-4 px-6 text-left font-semibold">Name</th>
              <th className="py-4 px-6 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cetagorys.map((catgory) => (
              <tr
                key={catgory._id}
                className="border-b border-gray-200  transition-colors">
                <td className="py-4 px-6">
                  <Image
                    src={catgory.categoryImage}
                    width={80}
                    height={80}
                    alt={catgory.name}
                    className="object-cover border border-purple-300 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                  />
                </td>
                <td className="px-6 py-4 text-gray-800 font-medium">
                  {catgory.name}
                </td>
                <td className="px-6 py-4">
                  <button className="p-2 text-gray-600 hover:perple-500 hover:text-purple-500 hover:scale-105 transition-transform rounded-lg">
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CategoryList;
