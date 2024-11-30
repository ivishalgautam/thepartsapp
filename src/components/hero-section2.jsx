import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import SearchModal from "./search-modal";
import { appDownloadLinks } from "@/data/static";
import Balancer from "react-wrap-balancer";

import { Raleway } from "next/font/google";
import { cn } from "@/lib/utils";

const raleway = Raleway({ weight: ["400", "500", "600"], subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary to-white">
      <Navbar />
      <div className="relative">
        <div className="container relative mx-auto flex pt-10">
          <div className="mx-auto grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="order-last flex justify-center">
              <div className="w-[250px] sm:w-[300px]">
                <video
                  src="/videos/banner-mobile.mp4"
                  className="rounded-t-3xl"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
              <h1
                className={cn(
                  "text-4xl font-bold !leading-[60px] tracking-wide text-gray-900 sm:text-4xl md:text-5xl",
                  raleway.className,
                )}
              >
                <Balancer>
                  <span className=" ">
                    Your Trusted Partner for High-Quality
                  </span>{" "}
                  <span className="text-white">JCB Parts</span>
                </Balancer>
              </h1>
              <Balancer>
                <p className="mx-auto mt-1 max-w-md text-lg text-gray-500 sm:text-xl md:mt-2 md:max-w-3xl">
                  Delivering Genuine, Durable, and Reliable JCB Components to
                  Global Markets
                </p>
              </Balancer>
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
        <div className="absolute left-0 top-full flex h-24 w-full flex-col items-center justify-center gap-1 bg-primary px-2 text-white sm:h-16 sm:flex-row sm:gap-2">
          <div className="text-center text-xs sm:text-base">
            Download Now the trusted APP for Earthmoving Spare Parts Worldwide
          </div>
          <div className="flex items-center justify-center gap-1">
            <a
              href={appDownloadLinks.googlePlayStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-shrink-0 items-center justify-center"
            >
              <figure className="">
                <Image
                  src={"/icons/google-play-store.svg"}
                  width={100}
                  height={100}
                  alt="Google Play Store"
                />
              </figure>
            </a>
            <a
              href={appDownloadLinks.googlePlayStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-shrink-0 items-center justify-center"
            >
              <figure className="">
                <Image
                  src={"/icons/app-store.svg"}
                  width={100}
                  height={100}
                  alt="App Store"
                />
              </figure>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
