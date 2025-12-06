import Product from "./Product";
import HeadindText from "./HeadindText";
import { getAllProducts } from "@/action/products.action";

async function AllProducts() {
  const products = await getAllProducts();

  return (
    <div className="">
      <HeadindText headingfast="Latest" headinglast="Products" />
      <div className="max-w-7xl mt-4 items-center mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
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

export default AllProducts;
