export const categories = [
  {
    title: "Project Management",
    color: "bg-purple-50 border-purple-100",
    titleColor: "text-purple-700",
    tools: ["Notion", "Airtable"],
  },
  {
    title: "Industry Specific",
    color: "bg-green-50 border-green-100",
    titleColor: "text-green-700",
    tools: [
      "Garment factory",
      "Knit Vendor",
      "Logistics",
      "Real estate",
    ],
  },
  {
    title: "Custom Scripting",
    color: "bg-yellow-50 border-yellow-100",
    titleColor: "text-yellow-700",
    tools: ["Javascript", "RAG", "N8N", "API"],
  },
  {
    title: "Artificial Intelligence",
    color: "bg-red-50 border-red-100",
    titleColor: "text-red-700",
    tools: ["ChatGPT", "Claude", "Gemini", "n8n"],
  },
  {
    title: "Automation",
    color: "bg-white border-gray-200",
    titleColor: "text-axe-dark",
    tools: ["n8n"],
  },
  {
    title: "Web scraping",
    color: "bg-blue-50 border-blue-200",
    titleColor: "text-axe-dark",
    tools: ["Custom API", "Facebook group", "SNS"],
  },
];

export default function Technology() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-axe-dark">
            Technology we specialize in
          </h2>
          <p className="mt-4 text-lg text-axe-dark/60 max-w-xl mx-auto">
            We&apos;re tool-agnostic. We pick the right technology for your
            specific business context.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`border rounded-2xl p-6 ${cat.color}`}
            >
              <h3
                className={`text-xs font-bold uppercase tracking-widest mb-4 ${cat.titleColor}`}
              >
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center px-3 py-1.5 bg-white border border-white/60 rounded-lg text-xs font-semibold text-axe-dark shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
