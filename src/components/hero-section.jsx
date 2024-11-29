import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SearchModal from "./search-modal";
import banner1 from "../../public/banners/banner-1.jpg";
import banner2 from "../../public/banners/banner-2.jpg";
import FadeUp from "./fade-up";
import Navbar from "./Navbar";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="h-[calc(100vh-82.53px)] bg-primary">
      <div className="container grid min-h-[600px] w-full overflow-hidden text-white">
        {/* Content Container */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          {/* Main Content */}
          <FadeUp>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Elevate Your Crane&apos;s{" "}
              <span className="rounded bg-primary px-2">Performance</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.7}>
            <p className="mb-8 max-w-2xl text-balance text-lg text-gray-300">
              Find the perfect spare parts to keep your cranes operating at peak
              efficiency. Quality components, fast delivery.
            </p>
          </FadeUp>

          {/* CTA Button */}
          <FadeUp delay={0.9}>
            <Link
              href={"/products"}
              className={cn("mb-8", buttonVariants({ size: "lg" }))}
            >
              Explore Parts Catalog
            </Link>
          </FadeUp>
          <FadeUp delay={1.1}>
            <SearchModal />
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
