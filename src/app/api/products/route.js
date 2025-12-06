import connectDB from "@/lib/config/db";
import ProductModel from "@/lib/models/ProductModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();

  const body = await req.json();
  const newProduct = await ProductModel.create(body);

  return NextResponse.json({ success: true, newProduct });
}

export async function GET(req) {
  await connectDB();
  const products = await ProductModel.find();
  return NextResponse.json(products);
}
