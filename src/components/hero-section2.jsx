import Image from "next/image";
import Link from "next/link";
import IPhone15MockUp from "./ui/iphone-15-mockup";
import Navbar from "./Navbar";
import SearchModal from "./search-modal";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary to-white">
      <Navbar />
      <div className="relative">
        <div className="container relative mx-auto min-h-[calc(100vh-82.53px)] px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="order-last flex justify-center">
              <div className="w-[250px] translate-y-[15px] sm:w-[300px]">
                <video
                  src="/videos/banner-mobile.mp4"
                  className="rounded-t-3xl"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
            </div>

            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Elevate Your</span>{" "}
                <span className="block text-primary xl:inline">
                  Cranes Performance
                </span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Find the perfect spare parts to keep your cranes operating at
                peak efficiency. Quality components, fast delivery.
              </p>
              <div className="flex items-center justify-center lg:justify-start">
                <SearchModal />
              </div>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="#download"
                    className="hover:bg-primary-700 flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white md:px-10 md:py-4 md:text-lg"
                  >
                    Get Started
                  </Link>
                </div>
                <div className="mt-3 sm:ml-3 sm:mt-0">
                  <Link
                    href="#learn-more"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-primary hover:bg-white/80 md:px-10 md:py-4 md:text-lg"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-full h-16 w-full bg-primary"></div>
      </div>
    </section>
  );
}
