import Team from "@/components/Team";
import Values from "@/components/Values";

export const metadata = {
  title: "About Us | Anhmake",
  description: "Meet the Anhmake team — senior AI automation engineers and business process consultants.",
};

export default function AboutPage() {
  return (
    <main>
      <Values />
      <Team />
    </main>
  );
}
