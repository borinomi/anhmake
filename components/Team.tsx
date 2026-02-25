export const members = [
  {
    name: "Anh Kim",
    role: "CEO, Anhmake",
    credential: "Process Automation Specialist",
    initials: "AK",
  },
  {
    name: "Đỗ Huệ",
    role: "Operations Manager",
    credential: "Manage 350+ workflows",
    initials: "ĐH",
  },
  {
    name: "Eden Park",
    role: "DL Manager",
    credential: "Build customized DL engines",
    initials: "EP",
  },
];

export default function Team() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-axe-dark/20 rounded-full text-xs font-semibold text-axe-dark tracking-wider uppercase bg-white">
            Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-axe-dark leading-tight max-w-3xl mx-auto">
          You get someone who thinks about your business and someone who builds the automations.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center gap-5 hover:shadow-sm transition-shadow duration-300"
            >
              {/* Avatar placeholder */}
              <div
                className="w-16 h-16 rounded-xl bg-axe-blue/10 border border-axe-blue/20 flex items-center justify-center shrink-0"
                aria-label={`${member.name} avatar`}
              >
                <span className="text-lg font-bold text-axe-blue">
                  {member.initials}
                </span>
              </div>

              {/* Info */}
              <div>
                <p className="font-bold text-axe-dark text-base">
                  {member.name}
                </p>
                <p className="text-sm text-axe-dark/60 mt-0.5">{member.role}</p>
                <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-axe-blue bg-axe-blue/10 px-2.5 py-1 rounded-full">
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6l2.5 2.5L10 3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {member.credential}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
