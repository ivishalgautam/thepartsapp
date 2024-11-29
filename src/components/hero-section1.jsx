"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import FadeUp from "./fade-up";
import BrowseCategory from "./browse-category";
import SearchModal from "./search-modal";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Home", path: "javascript:void(0)" },
    { title: "Bookings", path: "javascript:void(0)" },
    { title: "About", path: "javascript:void(0)" },
    { title: "Support", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const Brand = () => (
    <FadeUp x={-100} y={0} delay={0.8}>
      <div className="flex items-center justify-between py-5 md:block">
        <Link href={"/"} className="inline-block rounded-lg bg-white p-4">
          <Image width={100} height={100} src={"/logo.png"} alt="logo" />
        </Link>
        <div className="md:hidden">
          <button
            className="menu-btn text-gray-400 hover:text-gray-300"
            onClick={() => setState(!state)}
          >
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </FadeUp>
  );

  return (
    <div className="bg-gray-900">
      <header>
        <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
          <Brand />
        </div>
        <nav
          className={`pb-5 md:text-sm ${
            state
              ? "absolute inset-x-0 top-0 z-20 mx-2 mt-2 rounded-xl bg-gray-800 md:relative md:mx-0 md:mt-0 md:bg-transparent"
              : ""
          }`}
        >
          <div className="mx-auto max-w-screen-xl items-center gap-x-14 px-4 md:flex md:px-8">
            <Brand />
            <div
              className={`mt-8 flex-1 items-center md:mt-0 md:flex ${
                state ? "block" : "hidden"
              } `}
            >
              <ul className="flex-1 items-center justify-end space-y-6 md:flex md:space-x-6 md:space-y-0">
                {navigation.map((item, idx) => {
                  return (
                    <FadeUp key={idx} y={-20} delay={idx * 0.2}>
                      <li className="text-gray-300 hover:text-gray-400">
                        <Link href={item.path} className="block">
                          {item.title}
                        </Link>
                      </li>
                    </FadeUp>
                  );
                })}
                <FadeUp x={100} y={0} delay={0.8}>
                  <BrowseCategory />
                </FadeUp>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section className="relative">
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-28 md:px-8">
          <div className="mx-auto max-w-4xl space-y-5 text-center">
            <FadeUp>
              <h2 className="mx-auto text-4xl font-extrabold text-white md:text-5xl">
                Elevate Your Crane&apos;s Performance
              </h2>
            </FadeUp>

            <FadeUp delay={0.7}>
              <p className="mx-auto max-w-2xl text-gray-400">
                Find the perfect spare parts to keep your cranes operating at
                peak efficiency. Quality components, fast delivery.
              </p>
            </FadeUp>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="items-center justify-center gap-x-3 sm:flex"
            >
              <FadeUp delay={0.9}>
                <Link
                  href={"/products"}
                  className="mt-3 flex w-full items-center justify-center gap-x-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white duration-150 hover:bg-primary/90 sm:mt-0 sm:w-auto"
                >
                  Explore Parts Catalog
                  <MoveRight />
                </Link>
              </FadeUp>
            </form>
            <div className="flex items-center justify-center">
              <FadeUp delay={1.1}>
                <SearchModal />
              </FadeUp>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto h-[357px] max-w-xs blur-[108px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
      </section>
    </div>
  );
}
