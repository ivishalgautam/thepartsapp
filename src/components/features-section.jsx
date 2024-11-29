import React from "react";
import { useId } from "react";
import SectionHeading from "./section-heading";
import { features } from "@/data/static";
import Image from "next/image";
import FadeUp from "./fade-up";

export function FeaturesSection() {
  return (
    <div className="container space-y-8 py-20">
      <SectionHeading
        title="Why Choose Our Parts?"
        description="Quality, Reliability, and Support You Can Trust"
        className={"text-white"}
        descClassName="text-gray-400"
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 overflow-hidden sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4">
        {features.map((feature, key) => (
          <FadeUp
            key={feature.title}
            delay={(key + 1) * 0.1}
            duration={0.6}
            y={40}
            x={40}
          >
            <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-100 to-white p-6 dark:from-neutral-900 dark:to-neutral-950">
              <Grid size={20} />
              <figure className="size-14">
                <Image
                  src={feature.icon}
                  width={100}
                  height={100}
                  alt={feature.title}
                />
              </figure>
              <div className="mt-4">
                <p className="relative z-20 text-base font-bold text-neutral-800 dark:text-white ">
                  {feature.title}
                </p>
                <p className="relative z-20 mt-4 text-sm font-normal text-neutral-600 dark:text-neutral-400 ">
                  {feature.description}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}

export const Grid = ({ pattern, size }) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  from-zinc-100/30 to-zinc-300/30 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  fill-black/10 stroke-black/10 mix-blend-overlay dark:fill-white/10 dark:stroke-white/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y], key) => (
            <rect
              strokeWidth="0"
              key={key}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
