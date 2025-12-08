"use client";
import { useParams } from "next/navigation";

export default function productDeteils() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1>Product Details for ID: {id}</h1>
      <p>Hi product is {id} </p>
    </div>
  );
}
