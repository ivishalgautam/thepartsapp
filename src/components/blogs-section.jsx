"use client";

import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "./cards/blog";
import Spinner from "./Spinner";
import FadeUp from "./fade-up";
import SectionHeading from "./section-heading";

async function fetchBlogs() {
  return await http().get(`${endpoints.blogs.getAll}?featured=true`);
}

export default function BlogsSection() {
  return (
    <div className="bg-gradient-to-b from-primary/20 to-white">
      <div className="container space-y-12 py-16 pb-16">
        <SectionHeading
          title="Our Blogs"
          description="Explore our recent blogs"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((blog, idx) => (
            <FadeUp key={idx} delay={idx * 0.2}>
              <BlogCard />
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}
