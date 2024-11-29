"use client";
import { H5 } from "../ui/typography";
import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

export const fetchCategories = async () => {
  const { data } = await http().get(endpoints.categories.getAll);
  return data;
};

export default function SidebarCategories() {
  const params = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  return (
    <div className="rounded-md bg-white p-4">
      <H5>Categories</H5>
      <ul
        className={cn("mt-4 h-[20rem] divide-y overflow-y-scroll", {
          "space-y-2": isLoading,
        })}
      >
        {isLoading &&
          Array.from({ length: 9 }).map((_, key) => (
            <li
              key={key}
              className="h-8 animate-pulse rounded-lg bg-gray-200 py-2"
            ></li>
          ))}
        {data?.map(({ name, slug, id }) => (
          <li
            key={id}
            className={cn(`py-2 text-sm font-medium capitalize`, {
              "text-primary": slug === params.slug,
            })}
          >
            <Link href={`/categories/${slug}?page=1`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
