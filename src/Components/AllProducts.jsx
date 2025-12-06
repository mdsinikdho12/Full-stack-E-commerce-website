import Product from "./Product";
import HeadindText from "./HeadindText";

function AllProducts() {
  const products = [
    {
      id: 1,
      ProductName: "Apple Smart Watch",
      price: 199,
      productImage: "/images/smart.png",
    },
    {
      id: 2,
      ProductName: "Apple Smart Watch",
      price: 199,
      productImage: "/images/smart.png",
    },
    {
      id: 3,
      ProductName: "Apple Smart Watch",
      price: 199,
      productImage: "/images/smart.png",
    },
    {
      id: 3,
      ProductName: "Apple Smart Watch",
      price: 199,
      productImage: "/images/smart.png",
    },
  ];
  return (
    <div className="">
      <HeadindText headingfast="Latest" headinglast="Products" />
      <div className="max-w-7xl mt-4 items-center mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product
            key={product.id}
            ProductName={product.ProductName}
            price={product.price}
            image={product.productImage}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
