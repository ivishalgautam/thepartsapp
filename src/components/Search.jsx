"use client";
import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Input } from "./ui/input";
import { searchProducts } from "@/hooks/useSearchProducts";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { H6 } from "./ui/typography";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

export default function Search() {
  const params = useSearchParams();
  const query = params.get("q") ?? "";
  const [searchResults, setSearchResults] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const throttleTimeoutRef = useRef(null);
  const containerRef = useRef(null);
  const pathname = usePathname();

  const handleSearch = async (value) => {
    if (!value.trim()) return setSearchResults([]);
    const searchQuery = value.replace(/\s+/g, "-");
    const results = await searchProducts(searchQuery);
    setSearchResults(results);
  };

  useEffect(() => {
    const throttledInputChange = (value) => {
      if (throttleTimeoutRef.current !== null) {
        clearTimeout(throttleTimeoutRef.current);
      }
      throttleTimeoutRef.current = setTimeout(() => {
        throttleTimeoutRef.current = null;
        handleSearch(value);
      }, 300);
    };

    throttledInputChange(inputVal);

    return () => {
      if (throttleTimeoutRef.current !== null) {
        clearTimeout(throttleTimeoutRef.current);
      }
    };
  }, [inputVal]);

  useEffect(() => {
    return () => {
      if (throttleTimeoutRef.current !== null) {
        clearTimeout(throttleTimeoutRef.current);
      }
      setSearchResults([]);
      setInputVal("");
    };
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsResultsVisible(false);
      } else {
        setIsResultsVisible(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  useEffect(() => {
    if (query) {
      setInputVal(query);
    }
  }, [query]);

  return (
    <div className="w-full max-w-md">
      <div className="relative">
        <Input
          type="search"
          placeholder="Search for parts..."
          className={cn(
            "h-full w-full rounded-full bg-white/10 !p-4 px-4 py-2 pr-10 text-white backdrop-blur-lg",
            {
              "relative z-50": inputVal,
            },
          )}
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
        />
        <Link
          href={`/products/search?q=${inputVal}`}
          className={cn(
            "absolute right-0.5 top-0.5 z-50 inline-block !h-12 !w-12 cursor-pointer !rounded-full",
            buttonVariants({ size: "icon" }),
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </Link>
      </div>
      {inputVal && searchResults.length > 0 && (
        <div className="relative z-50" ref={containerRef}>
          {inputVal && isResultsVisible && searchResults.length > 0 ? (
            <ScrollArea className="absolute mt-4 h-80 w-full rounded-md">
              <ul className="absolute left-1/2 w-full -translate-x-1/2 divide-y divide-gray-200 rounded-md bg-white">
                {searchResults.map((result) => (
                  <li
                    key={result.id}
                    className="flex items-center justify-between gap-2 p-3"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/${result.pictures[0]}`}
                      width={50}
                      height={50}
                      alt={result.title}
                      className="rounded-lg"
                    />
                    <H6 className="mr-auto text-sm capitalize">
                      <Link
                        href={`/products/${result.slug}`}
                        className="text-black hover:text-primary"
                      >
                        {result.title}
                      </Link>
                    </H6>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}
