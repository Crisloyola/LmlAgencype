// src/app/alquiler/[id]/page.tsx — SERVER COMPONENT
// Exports generateStaticParams so Next.js can pre-render all equipment detail
// pages at build time when output: 'export' is configured.
import { EQUIPMENT } from "../../lib/equipment-data";
import EquipmentDetailPage from "./EquipmentDetailPage";

export function generateStaticParams() {
  return EQUIPMENT.map((e) => ({ id: e.slug }));
}

export default function Page() {
  return <EquipmentDetailPage />;
}
