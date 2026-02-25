const rowOne = [
  "위그리드",
  "UBND Tỉnh Tây Ninh",
  "Hoa Binh",
  "YS Corp",
  "Bespin Global",
  "Kamhing",
];

function MarqueeRow({
  items,
  direction,
}: {
  items: string[];
  direction: "left" | "right";
}) {
  // Duplicate items to create seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className={`flex gap-4 w-max ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
        aria-hidden="true"
      >
        {doubled.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-axe-dark shrink-0 shadow-sm whitespace-nowrap"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-axe-blue" />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientMarquee() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-semibold text-axe-dark/50 uppercase tracking-widest mb-2">
          Trusted by
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-axe-dark">
          30+ Clients Trust Anhmake
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {/* Accessible version (screen reader) */}
        <ul className="sr-only">
          {rowOne.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <MarqueeRow items={rowOne} direction="left" />
      </div>
    </section>
  );
}
