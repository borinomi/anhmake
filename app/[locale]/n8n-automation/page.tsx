import { getTranslations } from "next-intl/server";
import N8nAutomationContent from "@/components/N8nAutomationContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "N8nMetadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function N8nAutomationPage() {
  return <N8nAutomationContent />;
}
