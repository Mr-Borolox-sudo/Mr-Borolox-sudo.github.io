import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={`mb-16 ${isCenter ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <span className="eyebrow mb-4 inline-flex">{eyebrow}</span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-gray-500 text-base md:text-lg leading-relaxed ${
            isCenter ? "mx-auto" : ""
          }`}
          style={{ maxWidth: "50ch" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
