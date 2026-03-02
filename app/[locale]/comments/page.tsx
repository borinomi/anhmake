import Reviews from "@/components/Reviews";

export const metadata = {
  title: "Client Comments | Anhmake",
  description: "What our clients say about working with Anhmake.",
};

export default function ClientReviewsPage() {
  return (
    <main className="pt-16">
      <Reviews />
    </main>
  );
}
