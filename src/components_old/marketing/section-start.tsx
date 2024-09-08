import { cn } from "@/lib/utils";

interface SectionStartProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  className?: string;
}

export default function SectionStart({
  title,
  subtitle,
  className,
}: SectionStartProps) {
  return (
    <div
      className={cn(
        "flex w-full max-w-4xl flex-col gap-3 text-center items-center mb-8",
        className
      )}
    >
      <h2 className="text-4xl max-w-sm sm:max-w-fit sm:text-5xl font-extrabold">
        {title}
      </h2>
      <span>{subtitle}</span>
    </div>
  );
}
