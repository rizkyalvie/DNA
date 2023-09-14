"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import { Cart, UserCircle } from "@/components/icons";

const Nav = () => {
  let dashboard;
  let product;
  let contact;
  let more;

  const navList = [
    (dashboard = {
      title: "Dashboard",
      url: "/",
    }),
    (product = {
      title: "Products",
      url: "/pages/test",
    }),
    (contact = {
      title: "Contact Us",
      url: "/contact",
    }),
    (more = {
      title: "More",
      url: "/more",
    }),
  ];

  return (
    <div className="w-screen bg-white flex justify-between items-center overflow-x-hidden">
    <div className="flex rounded-full justify-center items-center rounded-lg hover:bg-red-900 mx-5">
      INI LOGO
    </div>
      <NavigationMenu>
        {navList.map((item) => (
          <Link key={item.title} href={item.url}>
            <NavigationMenuList className="py-4 px-5 hover:bg-[#606c38] hover:text-white">
              <NavigationMenuItem>{item.title}</NavigationMenuItem>
            </NavigationMenuList>
          </Link>
        ))}
      </NavigationMenu>
      <div className="flex justify-center items-center mx-5 gap-3">
        <div className="h-10 w-10 flex rounded-full justify-center items-center hover:bg-red-900">
        <Cart />
        </div>
        <div>
        <UserCircle />
        </div>
      </div>
    </div>
  );
};

export default Nav;
