"use client";
import ProductCard from "./cards/product";
import { H3, P } from "./ui/typography";
import http from "@/utils/http";
import { endpoints } from "@/utils/endpoints";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import SectionHeading from "./section-heading";
import FadeUp from "./fade-up";

const fetchProducts = async () => {
  const { data } = await http().get(
    `${endpoints.products.getAll}?featured=true`,
  );
  return data;
};

export default function FeaturedProducts() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["featured-products"],
    queryFn: fetchProducts,
    enabled: false,
  });

  // if (isLoading) return <Spinner />;
  // if (isError) return error?.message ?? "error";
  return (
    <div className="mt-16 py-10">
      <div className="container space-y-4">
        <SectionHeading
          title="Featured Products"
          description="Top-Rated Parts for Every Need"
        />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
          {false && !data?.length ? (
            <P>Not found!</P>
          ) : (
            Array.from({ length: 10 }).map((item, idx) => (
              <FadeUp delay={idx * 0.2} key={idx}>
                <ProductCard />
              </FadeUp>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
