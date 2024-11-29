"use client";
import Image from "next/image";
import Link from "next/link";

import { FaPhone } from "react-icons/fa6";
import Navbar from "./Navbar";
import Search from "./Search";

export default function Header() {
  return (
    <header className="bg-primary">
      <Navbar />
    </header>
  );
}

export const HeaderTop = ({ user }) => {
  return (
    <div className="hidden bg-secondary py-2.5 md:block">
      <div className="container flex items-center justify-between text-sm font-medium text-white">
        <div className="flex items-center justify-center gap-2">
          <FaPhone />
          <span>+91 9811632400</span>
        </div>
        <Link
          href={user ? "/customer/profile" : "/login"}
          className="capitalize"
        >
          {user ? `${user?.first_name} ${user?.last_name}` : "Log In / Sign Up"}
        </Link>
      </div>
    </div>
  );
};

export const HeaderMiddle = ({ data, user }) => {
  return (
    <div className="container hidden min-h-14 md:block">
      <div className="flex items-center justify-between">
        <div className="">
          <Link href={"/"}>
            <Image
              width={100}
              height={100}
              src={"/logo.png"}
              alt="logo"
              className="h-full w-full object-contain object-center"
            />
          </Link>
        </div>

        <div className="hidden w-1/2 md:block">
          <div className="flex h-14 rounded-full border-2">
            {/* input */}
            <div className="w-full">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
