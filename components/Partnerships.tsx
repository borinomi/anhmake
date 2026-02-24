const partners = [
  {
    name: "Monday Channel Partner",
    tier: "Channel Partner",
    platform: "Monday.com",
    description:
      "Certified implementation partner helping businesses build and scale on the Monday.com Work OS platform.",
    color: "from-red-500 to-orange-400",
    badge: "Certified",
  },
  {
    name: "Make Gold Partner",
    tier: "Gold Partner",
    platform: "Make.com",
    description:
      "Gold tier partnership — the highest recognition from Make.com for volume of delivered automation projects and technical expertise.",
    color: "from-yellow-500 to-amber-400",
    badge: "Gold Tier",
  },
  {
    name: "HubSpot Partner",
    tier: "Solutions Partner",
    platform: "HubSpot",
    description:
      "Recognized HubSpot Solutions Partner specializing in CRM implementation, workflow automation, and RevOps architecture.",
    color: "from-orange-500 to-red-400",
    badge: "Solutions",
  },
];

export default function Partnerships() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-axe-dark/20 rounded-full text-xs font-semibold text-axe-dark tracking-wider uppercase bg-white">
            Partnerships
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-axe-dark leading-tight">
            We&apos;re the{" "}
            <span className="text-axe-blue">fastest growing</span> Make and
            Monday partners
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Gradient header */}
              <div
                className={`h-2 bg-gradient-to-r ${partner.color}`}
                aria-hidden="true"
              />
              <div className="p-7">
                {/* Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${partner.color}`}
                  >
                    {partner.badge}
                  </span>
                  <span className="text-xs text-axe-dark/40 font-medium">
                    {partner.tier}
                  </span>
                </div>

                {/* Platform name */}
                <h3 className="text-xl font-bold text-axe-dark mb-3">
                  {partner.platform}
                </h3>

                {/* Description */}
                <p className="text-sm text-axe-dark/65 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
