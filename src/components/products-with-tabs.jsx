"use client";
import ProductCard from "./cards/product";
import { useQuery } from "@tanstack/react-query";
import http from "@/utils/http";
import { endpoints } from "@/utils/endpoints";
import Spinner from "./Spinner";
import { TabsBtn, TabsContent, TabsProvider, useTabs } from "./tabs";
import FadeUp from "./fade-up";

const fetchProducts = async (type) => {
  const { data } = await http().get(
    `${endpoints.products.getAll}?type=${type}`,
  );
  return data;
};

export default function ProductsWithTabs() {
  const { data: oem, isLoading: isOemLoading } = useQuery({
    queryKey: ["products-oem"],
    queryFn: () => fetchProducts("oem"),
    enabled: false,
  });
  const { data: aftermarket, isLoading: isAftermarketLoading } = useQuery({
    queryKey: ["products-aftermarket"],
    queryFn: () => fetchProducts("aftermarket"),
    enabled: false,
  });
  const { data: genuine, isLoading: isGenuineLoading } = useQuery({
    queryKey: ["products-genuine"],
    queryFn: () => fetchProducts("genuine"),
    enabled: false,
  });

  return (
    <div className="">
      <div className="container space-y-4 py-10">
        <TabsProvider defaultValue={"genuine"} wobbly={true}>
          <div className="mt-2 flex justify-center">
            <div className="flex w-fit items-center rounded-md border bg-gray-200 p-1 text-black dark:bg-[#1a1c20] dark:text-white">
              {["oem", "genuine", "aftermarket"].map((tab) => (
                <TabsBtn value={tab} key={tab}>
                  <span className="relative z-[2] uppercase">{tab}</span>
                </TabsBtn>
              ))}
            </div>
          </div>
          <div className="min-h-[328.8px]">
            <TabsContent value="oem">
              <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                {Array.from({ length: 12 }).map((product, idx) => (
                  <ProductCard key={idx} type="oem" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="genuine">
              <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                {Array.from({ length: 12 }).map((item, idx) => (
                  <FadeUp delay={idx * 0.2} key={idx}>
                    <ProductCard key={idx} type="genuine" />
                  </FadeUp>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="aftermarket">
              <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                {Array.from({ length: 12 }).map((product, idx) => (
                  <ProductCard key={idx} type="aftermarket" />
                ))}
              </div>
            </TabsContent>
          </div>
        </TabsProvider>
      </div>
    </div>
  );
}
