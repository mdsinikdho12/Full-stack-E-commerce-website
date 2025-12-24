import React from "react";
import { getProductsByCategory } from "@/action/products.action";
import { getCategoryById } from "@/action/catagory.action";
import Product from "@/Components/Product";
import HeadingText from "@/Components/HeadindText";

async function page(props) {
  const { params } = props;
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const Category = await getCategoryById(id);
  const name = Category.data.name;
  console.log(name);

  const res = await getProductsByCategory(id);
  if (!res.success) {
    return <div>Error loading products</div>;
  }

  const Products = res.data;
  if (!Products || Products.length === 0) {
    return (
      <div className="max-w-7xl bg-[#eaeff0]  text-center text-xl p-6 mt-30   mx-auto w-full rounded">
        অনেক খুঁজেছি তুবুও এই ক্যাটাগরির কোনো প্রোডাক্ট পাইলাম না 😑
      </div>
    );
  }
  return (
    <div className="max-w-7xl   p-6 mt-30   mx-auto w-full rounded">
      <HeadingText
        headingfast={`All ${name}`}
        headinglast={"Products"}
        marginTop={0}
      />
      <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Products.map((product) => (
          <Product
            key={product._id}
            ProductName={product.title}
            price={product.price}
            image={product.images}
            id={product._id}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
