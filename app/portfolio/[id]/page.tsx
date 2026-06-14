import { notFound } from "next/navigation";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { getPortfolioById } from "@/lib/portfolios";

type PortfolioPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PortfolioPage({
  params,
}: PortfolioPageProps) {
  const { id } = await params;
  const portfolio = await getPortfolioById(id);

  if (!portfolio) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <h1>Portfolio Item {id}</h1>
      <PortfolioCard property={portfolio} />
    </div>
  );
}
