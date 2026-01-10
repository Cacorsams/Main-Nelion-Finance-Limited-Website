import { NextResponse } from "next/server";

const headerData = [
  { label: "home", href: "/" },
  { label: "letsGrow", href: "/#lets-grow" },
  {
    label: "business",
    href: "#",
    submenu: [
      { label: "microLending", href: "/#micro-lending" },
      { label: "assetFinancing", href: "/#asset-financing" },
      { label: "smeFinancing", href: "/#sme" },
    ],
  },
  { label: "impact", href: "/impact" },
  { label: "careers", href: "/careers" },
  { label: "news", href: "/blogs" },
  { label: "faq", href: "/faq" },
  { label: "contact", href: "/contact" },
];

export const GET = async () => {
  return NextResponse.json({
    headerData
  });
};

