"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Muted } from "../ui/typography";

export default function ProductCard({ type = "genuine" }) {
  return (
    <div className="mx-auto w-full">
      <div className="rounded-md border bg-white p-2 shadow dark:bg-white">
        <figure className="mx-auto size-44">
          <Image
            src={`/product.webp`}
            alt={"title"}
            width={1000}
            height={1000}
            className="w-full rounded-md object-contain transition-all duration-300"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          />
        </figure>
        <div className="pt-2 text-black">
          <Muted className="uppercase">{type}</Muted>
          <div className="text-sm">
            Brand: <span className="text-primary">JCB</span>
          </div>
          <div className="mt-2 flex justify-between border-b-2 pb-2">
            <h1 className="text-sm font-semibold uppercase">Product name</h1>
          </div>
          {/* <p className="text-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            porro quos quae autem vel praesentium.
          </p> */}
          <Button className="mt-3 w-full">Enquire Now</Button>
        </div>
      </div>
    </div>
  );
}
