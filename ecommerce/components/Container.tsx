import React from "react";
import { cn } from "../lib/utils"; // nhớ import có ngoặc nhọn nha!

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
