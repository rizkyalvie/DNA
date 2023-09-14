import Image from "next/image";
import BraceletsImage from "../images/Bracelet.jpeg";

export const Slideshow = () => {
  let product1;
  let product2;
  let product3;
  let product4;
  let product5;
  let product6;

  let productData = [
    (product1 = {
      id: 1,
      image: BraceletsImage,
      title: "Bracelet",
      Description: "Bracelet good good handmade",
      Price: "Rp. 60.000,-",
      Stock: "8",
    }),
    (product2 = {
      id: 1,
      image: BraceletsImage,
      title: "Bracelet",
      Description: "Bracelet good good handmade",
      Price: "Rp. 60.000,-",
      Stock: "8",
    }),
    (product3 = {
      id: 1,
      image: BraceletsImage,
      title: "Bracelet",
      Description: "Bracelet good good handmade",
      Price: "Rp. 60.000,-",
      Stock: "8",
    }),
    (product4 = {
      id: 1,
      image: BraceletsImage,
      title: "Bracelet",
      Description: "Bracelet good good handmade",
      Price: "Rp. 60.000,-",
      Stock: "8",
    }),
    (product5 = {
      id: 1,
      image: BraceletsImage,
      title: "Bracelet",
      Description: "Bracelet good good handmade",
      Price: "Rp. 60.000,-",
      Stock: "8",
    }),
    (product6 = {
      id: 1,
      image: BraceletsImage,
      title: "Bracelet",
      Description: "Bracelet good good handmade",
      Price: "Rp. 60.000,-",
      Stock: "8",
    }),
  ];

  return (
    <div className="w-screen flex gap-5 flex-column px-12 mt-5">
      {productData.map((item) => (
        <div key={item.id} className="w-[250px] h-[210px] border-solid border-2 border-[#283618]">
          <div className="w-full flex h-[150px] overflow-hidden object-cover border-solid border-b-2 border-[#283618]">
            <Image
              src={item.image}
              width={250}
              height={100}
              alt="Featured product"
            />
          </div>
          <div className="w-full h-12 mx-1 flex flex-row flex-wrap gap-y-[5px] gap-x-[10px]">
            <p>{item.title}</p>
            <p>Price: {item.Price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
