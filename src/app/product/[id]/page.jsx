import { singleProduct } from "@/action/products.action";
import Image from "next/image";

export default async function productDeteils(props) {
  const { params } = props;
  const resolvedParams = await params; // <- IMPORTANT
  const { id } = resolvedParams;

  const res = await singleProduct(id);
  if (!res.success) {
    console.log(res.message);

    return;
  }

  const product = res.data;

  return (
    <div className="max-w-7xl flex items-center p-6 mt-30 justify-between bg-[#eaeff0] mx-auto w-full rounded">
      <div className="">{id}</div>
      <p>{product.title}</p>
      <p>ji</p>
    </div>
  );
}
