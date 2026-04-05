// src/app/alquiler/[id]/page.tsx — SERVER COMPONENT
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EQUIPMENT, getEquipmentBySlug } from "../../lib/equipment-data";
import EquipmentDetailPage from "./EquipmentDetailPage";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lmlagencype.vercel.app";

export function generateStaticParams() {
  return EQUIPMENT.map((e) => ({ id: e.slug }));
}

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = getEquipmentBySlug(id);

  if (!item) {
    return { title: "Equipo no encontrado" };
  }

  const title = `Alquiler ${item.name} en Lima — ${item.priceDay}/día`;
  const description = `Alquila el ${item.name} (${item.brand}) en Lima desde ${item.priceDay} al día o ${item.priceEvent} por evento. ${item.tagline} Reserva por WhatsApp.`;
  const url = `${siteUrl}/alquiler/${item.slug}`;
  const image = item.images[0];

  return {
    title,
    description,
    keywords: [
      `alquiler ${item.name} Lima`,
      `alquiler ${item.brand} Lima`,
      `alquiler ${item.name} Perú`,
      `${item.name} precio alquiler`,
      "alquiler equipos audiovisuales Lima",
      "LML Agency",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | LML Agency`,
      description,
      url,
      siteName: "LML Agency",
      locale: "es_PE",
      type: "website",
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: item.name }]
        : [{ url: "/lmlagency1.png", width: 1200, height: 630, alt: item.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | LML Agency`,
      description,
      images: image ? [image] : ["/lmlagency1.png"],
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const item = getEquipmentBySlug(id);

  if (!item) notFound();

  const priceNum = item.priceDay !== "Consultar"
    ? parseFloat(item.priceDay.replace(/[^\d.]/g, ""))
    : null;

  const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: item.name,
        brand: { "@type": "Brand", name: item.brand },
        description: item.description,
        image: item.images,
        url: `${siteUrl}/alquiler/${item.slug}`,
        offers: {
          "@type": "Offer",
          priceCurrency: "PEN",
          price: priceNum,
          priceSpecification: [
            {
              "@type": "UnitPriceSpecification",
              price: priceNum,
              priceCurrency: "PEN",
              unitText: "DAY",
            },
          ],
          availability: item.available
            ? "https://schema.org/InStock"
            : "https://schema.org/PreOrder",
          seller: {
            "@type": "Organization",
            name: "LML Agency",
            url: siteUrl,
          },
        },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EquipmentDetailPage />
    </>
  );
}
