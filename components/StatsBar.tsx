import Image from "next/image";

const badges = [
  { logo: "/logo-n8n.png", alt: "n8n", label: "n8n Expert Agency" },
  { logo: "/logo.png", alt: "Anhmake", label: "Anhmake" },
];

export const stats = [
  { value: "350+", label: "Workflows automated" },
  { value: "30+", label: "Clients served" },
  { value: "10k+", label: "Manual hours saved" },
];

export default function StatsBar() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-2xl px-6 py-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">
          {/* Badges */}
          <div className="flex items-center gap-10 justify-center md:justify-start">
            {badges.map((badge) => (
              <div key={badge.label} className="flex items-center justify-center px-3 py-2">
                <Image
                  src={badge.logo}
                  alt={badge.alt}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-gray-200 shrink-0" />
          <div className="block md:hidden w-full h-px bg-gray-200" />

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 flex-1 ml-auto">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-axe-dark">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden sm:block w-px h-8 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
