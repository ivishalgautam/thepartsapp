import React from "react";
import { H3, Muted, Small } from "./ui/typography";
import { Heading } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  title = "",
  description = "",
  className,
  descClassName = "",
}) {
  return (
    <div className={cn("space-y-2 text-center", className)}>
      <H3 className={"mx-auto w-max text-center capitalize "}>{title}</H3>
      <p className={cn("text-sm text-gray-500", descClassName)}>
        {description}
      </p>
    </div>
  );
}
