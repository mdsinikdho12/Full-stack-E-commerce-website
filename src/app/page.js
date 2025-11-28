import Herosection from "@/Components/Herosection";
import Navber from "@/Components/Navber";
import AllCatagory from "@/Components/AllCatagory";
import AllProducts from "@/Components/AllProducts";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="">
      <Herosection />
      <AllCatagory />
      <AllProducts />
      <Footer />
    </div>
  );
}
