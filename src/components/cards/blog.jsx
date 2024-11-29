import { ChevronRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { H6 } from "../ui/typography";
import moment from "moment";

export default function BlogCard() {
  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow">
      <Link href={`#`}>
        <div>
          <figure className="before:via-20 relative w-full before:absolute before:left-0 before:top-0 before:z-50 before:h-full before:w-full before:bg-gradient-to-tr before:from-primary before:from-10% before:via-30% before:to-90%">
            <Image
              src={`/banners/banner-1.jpg`}
              width={500}
              height={500}
              alt={""}
              className="aspect-video h-full w-full object-cover"
            />
          </figure>
        </div>
      </Link>

      <div className="space-y-4 p-3">
        {/* date */}
        <div className="my-1 mb-3 flex items-center justify-start gap-1 text-xs font-medium text-gray-400">
          <Clock size={18} /> 20 Aug, 2024
        </div>

        {/* categories */}
        <div className="flex flex-wrap items-center justify-start gap-1">
          <Link
            href={`#`}
            className="rounded-full bg-gray-200 p-1 px-2 text-xs font-semibold capitalize text-black/50 transition-colors hover:bg-primary hover:text-white"
          >
            Category
          </Link>
        </div>

        {/* title and short desc */}
        <div>
          <Link href={`#`}>
            <div className="space-y-1">
              <H6
                className={
                  "line-clamp-2 h-[40px] leading-5 md:line-clamp-1 md:h-auto lg:line-clamp-2 lg:h-[40px]"
                }
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt,
                ullam!
              </H6>
              <p className="line-clamp-3 h-[48px] text-ellipsis text-xs text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis labore asperiores recusandae. Quisquam neque debitis
                dolorem labore! Ipsum, itaque enim?
              </p>
            </div>
          </Link>
        </div>

        {/* read more */}
        <div className="mt-auto">
          <Link href={`#`}>
            <div className="flex items-center justify-end gap-2 pr-3 text-xs font-semibold">
              <div className="inline-block text-[11px] font-semibold uppercase text-gray-400">
                Read more
              </div>
              <span className="rounded-full bg-primary p-0.5 text-white transition-transform group-hover:translate-x-1">
                <ChevronRight size={18} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
