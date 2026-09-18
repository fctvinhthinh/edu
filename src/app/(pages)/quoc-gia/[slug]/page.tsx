import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { countries } from "@/data/countries";
import CountryDetailClient from "./CountryDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) return {};
  return {
    title: `Du học ${country.name} | FCT Education`,
    description: country.description,
    openGraph: {
      title: `Du học ${country.name} | FCT Education`,
      description: country.description,
      images: [{ url: country.image, width: 1200, height: 630 }],
    },
  };
}

export default async function CountryDetailPage({ params }: Props) {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) notFound();
  return <CountryDetailClient country={country} />;
}
