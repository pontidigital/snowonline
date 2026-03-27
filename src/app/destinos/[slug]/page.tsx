import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getDestinationBySlug,
  getAllSlugs,
} from "@/data/destinations";
import DestinationHero from "@/components/destinations/DestinationHero";
import DestinationInfo from "@/components/destinations/DestinationInfo";
import DestinationCTA from "@/components/destinations/DestinationCTA";
import ChatWidget from "@/components/chat/ChatWidget";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) {
    return { title: "Destino nao encontrado | Snowonline" };
  }
  return {
    title: `${destination.name} | Snowonline`,
    description: destination.shortDescription,
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return (
    <>
      <DestinationHero destination={destination} />
      <DestinationInfo destination={destination} />
      <DestinationCTA destination={destination} />
      <ChatWidget />
    </>
  );
}
