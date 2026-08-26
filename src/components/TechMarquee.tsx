"use client";

const techItems = [
  "React", "Next.js", "TypeScript", "Python", "Django", "PostgreSQL",
  "Node.js", "Express", "MongoDB", "AWS", "Docker", "GraphQL",
  "Tailwind CSS", "Framer Motion", "Redis", "Supabase", "Vercel",
  "TensorFlow", "PyTorch", "LangChain", "FastAPI", "Git",
];

const techItemsSecondRow = [
  "OpenAI API", "Hugging Face", "Cloudflare Workers", "Azure",
  "WebSockets", "REST APIs", "CI/CD", "Figma", "Jest",
  "React Hook Form", "Zod", "Prisma", "Redux", "Sharp",
  "LlamaIndex", "Razorpay", "Grafana", "Loki",
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  // Duplicate items for seamless loop
  const duplicated = [...items, ...items];

  return (
    <div className="overflow-hidden relative">
      {/* Gradient masks for seamless fade on edges */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-24 z-10 bg-gradient-to-r from-[var(--background)] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-24 z-10 bg-gradient-to-l from-[var(--background)] to-transparent pointer-events-none" />

      <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
        {duplicated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center shrink-0 px-4 md:px-6 py-2 text-sm md:text-base font-mono tracking-wider text-muted-foreground/40 hover:text-accent-pop transition-colors duration-300 select-none whitespace-nowrap"
          >
            {item}
            <span className="ml-4 md:ml-6 text-muted-foreground/20">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="marquee-container w-full py-6 md:py-8 space-y-2">
      <MarqueeRow items={techItems} />
      <MarqueeRow items={techItemsSecondRow} reverse />
    </div>
  );
}
