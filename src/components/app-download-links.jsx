"use client";
import { Apple, PlayCircle, Smartphone, Zap, Globe, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { H2, Muted } from "./ui/typography";
import FadeUp from "./fade-up";
import { appDownloadLinks } from "@/data/static";
import Balancer from "react-wrap-balancer";

export function AppDownloadLinks() {
  return (
    <section className="relative py-10 before:absolute before:inset-0 before:top-1/2 before:h-56 before:w-full before:-translate-y-1/2 before:bg-primary">
      <div className="sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          {/* <SectionHeading
            title="Experience Our App on the Go"
            description="Download now and take your experience to the next level!"
          /> */}
          <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900"></h2>
          <div className="relative">
            <div className="grid grid-cols-2">
              {/* mockup */}
              <div className="flex items-center justify-center">
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
              <div className="relative flex flex-col justify-center">
                <div className="text-white">
                  <H2 className={"border-none"}>Download Our App</H2>
                  <p className="text-sm">
                    <Balancer>
                      Are you tired of spending hours searching for the perfect
                      spare parts? Look no further! With our app, finding,
                      comparing, and purchasing spare parts has never been
                      easier.
                    </Balancer>
                  </p>
                  <div className="mt-2 flex items-center justify-start gap-2">
                    <a
                      href={appDownloadLinks.googlePlayStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center"
                    >
                      <figure className="aspect-video">
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
                      <figure className="aspect-video">
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
