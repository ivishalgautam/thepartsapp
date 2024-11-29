"use client";
import Image from "next/image";
import { H2 } from "./ui/typography";
import FadeUp from "./fade-up";
import { appDownloadLinks } from "@/data/static";
import Balancer from "react-wrap-balancer";

export function AppDownloadLinks() {
  return (
    <section className="relative bg-primary pb-10 before:absolute before:top-44 before:w-full before:-translate-y-1/2 before:bg-primary md:bg-transparent md:py-10 md:before:top-1/2 md:before:h-56">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900"></h2>
          <div className="relative">
            <div className="grid md:grid-cols-2">
              {/* mockup */}
              <div className="-mt-10 flex items-center justify-center">
                <div className="relative w-[250px] sm:w-[300px]">
                  <FadeUp x={-100} y={0} duration={1}>
                    <video
                      src="/videos/banner-mobile.mp4"
                      className="rounded-3xl border-[14px] border-gray-700"
                      autoPlay
                      loop
                      muted
                    ></video>
                  </FadeUp>
                </div>
              </div>

              {/* links */}
              <div className="relative mt-10 flex flex-col justify-center rounded-lg bg-primary px-4 py-10 md:m-0 md:bg-transparent md:p-0">
                <div className="text-center text-white md:text-start">
                  <Balancer>
                    <H2 className={"border-none"}>Download Our App</H2>
                  </Balancer>
                  {/*  */}
                  <p className="text-sm">
                    <Balancer>
                      Are you tired of spending hours searching for the perfect
                      spare parts? Look no further! With our app, finding,
                      comparing, and purchasing spare parts has never been
                      easier.
                    </Balancer>
                  </p>
                  <div className="mt-2 flex items-center justify-center gap-2 md:justify-start">
                    <a
                      href={appDownloadLinks.googlePlayStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center"
                    >
                      <figure className="md:aspect-video">
                        <Image
                          src={"/icons/google-play-store.svg"}
                          width={150}
                          height={150}
                          alt="Google Play Store"
                        />
                      </figure>
                    </a>
                    <a
                      href={appDownloadLinks.googlePlayStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center"
                    >
                      <figure className="md:aspect-video">
                        <Image
                          src={"/icons/app-store.svg"}
                          width={150}
                          height={150}
                          alt="App Store"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
