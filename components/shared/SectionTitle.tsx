type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-secondary ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-6 bg-secondary" />
          {eyebrow}
        </p>
      )}

      <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
