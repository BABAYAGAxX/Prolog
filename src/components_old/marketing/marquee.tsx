import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

export default function Marquee({
  children,
  className,
  ...props
}: PropsWithChildren<ComponentProps<"div">>) {
  return (
    <div
      {...props}
      className={cn(
        "flex max-w-full relative whitespace-nowrap overflow-clip",
        className
      )}
    >
      <div className="animate-marqueeX absolute top-0">{children}</div>
      <div className="animate-marqueeXClone absolute top-0">{children}</div>
      <div className="invisible flex">{children}</div>
    </div>
  );
}
