import { NextResponse } from "next/server";

const headerData = [
  { label: "Home", href: "/" },
  {
    label: "Our Products",
    href: "#",
    submenu: [
      { label: "Micro-Lending", href: "/#micro-lending" },
      { label: "Asset Financing", href: "/#asset-financing" },
      { label: "SME Financing", href: "/#sme" },
    ],
  },
  { label: "Impact", href: "/impact" },
  { label: "Careers", href: "/careers" },
  { label: "News", href: "/blogs" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const GET = async () => {
  return NextResponse.json({
    headerData
  });
};

