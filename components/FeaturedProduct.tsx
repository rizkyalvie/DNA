import Image from "next/image";
import BraceletImage from "../images/Bracelet.jpeg"
import { Button } from "./ui/button";

export const FeaturedProduct = () => {
  return (
    <div className="w-screen h-[310px] flex pt-4 pb-4 bg-[#283618]">
      <div className="w-[400px] flex justify-center py-2">
      <Image
        src={BraceletImage}
        width={300}
        height={300}
        alt="Featured product"
      />
      </div>
      <div className="w-[600px] p-2 flex flex-col">
        <h1 className="font-bold text-5xl my-1 text-white">Hahihuhe</h1>
        <h3 className="mt-7 mb-6 w-96 text-lg text-white">Ini adalah gelang hahihuhe yang merupakan gelang yang dibuat dengan tangan dan bahan berkualitas dari hongkong</h3>
        <div className="flex gap-5">
        <Button className="text-white hover:bg-[#606c38] hover:text-white" variant="outline">Product Details</Button>
        <Button className="text-white hover:bg-[#606c38] hover:text-white" variant="outline">Add to cart</Button>
        </div>
      </div>
    </div>

  );
};
