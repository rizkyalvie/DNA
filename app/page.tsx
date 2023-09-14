import Nav from "../components/navbar/Navbar";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { Slideshow } from "@/components/Slideshow";

export default function Home() {
  return (
    <html lang="en">
      <body>
        <div className="w-screen h-screen">
          <Nav />
          <FeaturedProduct />
          <div className="w-screen flex my-2 px-12">
            <p className="w-screen text-2xl">Our Collections</p>
          </div>
          <Slideshow />
        </div>
      </body>
    </html>
  );
}
