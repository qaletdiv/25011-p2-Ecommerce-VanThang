import React from "react";
import { cn } from "../lib/utils"; 

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("w-full mx-auto px-20", className )}>{children}</div>;
};

export default Container;
