import connectDB from "@/lib/config/db";
import ProductModel from "@/lib/models/ProductModel";

export async function POST(req) {
  await connectDB();

  const body = await req.json();
  const newProduct = await ProductModel.create(body);

  return Response.json({ success: true, newProduct });
}
