import { getTranslations } from "next-intl/server";
import AIAutomationContent from "@/components/AIAutomationContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AIMetadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function AIAutomationPage() {
  return <AIAutomationContent />;
}
