import { singleProduct } from "@/action/products.action";
import Image from "next/image";
import Reating from "@/Components/Reating";
import ProductShow from "@/Components/ProductShow";
import DiscriptionAndReviws from "@/Components/DiscriptionAndReviws";

export default async function productDeteils(props) {
  const { params } = props;
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const res = await singleProduct(id);
  if (!res.success) {
    console.log(res.message);

    return;
  }

  const product = res.data;

  return (
    <div className="max-w-7xl   p-6 mt-30  bg-[#eaeff0] mx-auto w-full rounded">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
        <div className="">
          <ProductShow product={product} />

          <DiscriptionAndReviws product={product} />
        </div>

        <div className=" flex flex-col gap-3 ">
          <h2 className="font-medium text-2xl text-[#242424]">
            {product.title}
          </h2>

          <Reating value={product.rating} count={product.reviews.length} />
          <p className="mt-10 text-2xl text-[#47434e] font-bold">
            ${product.price}
          </p>

          <button className="bg-[#494651] w-30 p-3 mt-6 hover:scale-110 transition-transform cursor-pointer text-white rounded">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
