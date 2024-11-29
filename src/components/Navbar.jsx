"use client";
import Link from "next/link";
import Image from "next/image";
import { redirect, usePathname } from "next/navigation";
import MobileNavSheet from "./mobile-nav-sheet";
import { Box, Home, Info, SquarePen, SquareUserRound } from "lucide-react";
import { cn } from "@/lib/utils";

export const navList = [
  { title: "Home", href: "/", icon: Home },
  { title: "About", href: "#", icon: Info },
  { title: "Products", href: "/products", icon: Box },
  { title: "Blogs", href: "/blogs", icon: SquarePen },
  { title: "Contact", href: "/contact", icon: SquareUserRound },
];

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.clear();
    window.location.href = "/login";
  }
  redirect("/login");
}

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-center bg-transparent">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="p-4 pt-0">
            <Link href={"/"} className="inline-block rounded-b-lg bg-white p-2">
              <Image width={150} height={150} src={"/logo.png"} alt="logo" />
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-2">
              {navList.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2.5 text-sm font-semibold text-white",
                      {
                        "rounded-lg bg-white px-4 py-2.5 text-primary":
                          pathname === item.href,
                      },
                    )}
                  >
                    <item.icon size={20} />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-2 md:hidden">
            <div className="flex items-center justify-center">
              <MobileNavSheet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
