import { useTranslations } from "next-intl";

export const members = [
  {
    nameKey: "member1Name",
    roleKey: "member1Role",
    credentialKey: "member1Credential",
    initials: "AK",
  },
  {
    nameKey: "member2Name",
    roleKey: "member2Role",
    credentialKey: "member2Credential",
    initials: "ĐH",
  },
  {
    nameKey: "member3Name",
    roleKey: "member3Role",
    credentialKey: "member3Credential",
    initials: "EP",
  },
];

export default function Team() {
  const t = useTranslations("Team");

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-axe-dark/20 rounded-full text-xs font-semibold text-axe-dark tracking-wider uppercase bg-white">
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-axe-dark leading-tight max-w-3xl mx-auto whitespace-pre-line">
  {t("heading")}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <div
              key={member.nameKey}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center gap-5 hover:shadow-sm transition-shadow duration-300"
            >
              {/* Avatar placeholder */}
              <div
                className="w-16 h-16 rounded-xl bg-axe-blue/10 border border-axe-blue/20 flex items-center justify-center shrink-0"
                aria-label={`${t(member.nameKey as never)} avatar`}
              >
                <span className="text-lg font-bold text-axe-blue">
                  {member.initials}
                </span>
              </div>

              {/* Info */}
              <div>
                <p className="font-bold text-axe-dark text-base">
                  {t(member.nameKey as never)}
                </p>
                <p className="text-sm text-axe-dark/60 mt-0.5">{t(member.roleKey as never)}</p>
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
                  {t(member.credentialKey as never)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
