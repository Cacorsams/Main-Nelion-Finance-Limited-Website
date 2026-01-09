import { NextResponse } from "next/server";

export const loanData = [
  {
    id: '1',
    property_img: "https://placehold.co/600x400?text=Nelion+Finance",
    property_title: "Endeleza Growth Fund",
    property_price: "Tsh 100,000 - 5,000,000",
    category: "micro",
    category_img: "/images/property_option/apartment.svg",
    rooms: 1, // 1 month
    bathrooms: 3.5, // 3.5%
    location: "Nationwide",
    livingArea: "24 Hours",
    tag: "Instant",
    check: true,
    status: "Short-term",
    type: "Working Capital",
    beds: 30, // days
    garages: 0,
    region: "All",
    name: "Endeleza",
    slug: "endeleza-growth-fund"
  },
  {
    id: '2',
    property_img: "https://placehold.co/600x400?text=Nelion+Finance",
    property_title: "Asset Drive",
    property_price: "Tsh 2,000,000+",
    category: "asset",
    category_img: "/images/property_option/villa.svg",
    rooms: 24, // 24 months
    bathrooms: 12, // 12%
    location: "Main Office",
    livingArea: "3-5 Days",
    tag: "Secured",
    check: true,
    status: "Long-term",
    type: "Vehicle Financing",
    beds: 720, // days
    garages: 1,
    region: "Coast",
    name: "AssetDrive",
    slug: "asset-drive-vehicle-financing"
  },
  {
    id: '3',
    property_img: "https://placehold.co/600x400?text=Nelion+Finance",
    property_title: "Enterprise Shield",
    property_price: "Tsh 10,000,000+",
    category: "sme",
    category_img: "/images/property_option/office.svg",
    rooms: 12,
    bathrooms: 15,
    location: "Commercial Hubs",
    livingArea: "7 Days",
    tag: "Priority",
    check: true,
    status: "Business",
    type: "SME Loan",
    beds: 365,
    garages: 2,
    region: "Central",
    name: "Enterprise",
    slug: "enterprise-shield-sme"
  },
  {
    id: '4',
    property_img: "https://placehold.co/600x400?text=Nelion+Finance",
    property_title: "Vendor Choice",
    property_price: "Tsh 50,000 - 500,000",
    category: "micro",
    category_img: "/images/property_option/shop.svg",
    rooms: 1,
    bathrooms: 5,
    location: "Markets",
    livingArea: "Instant",
    tag: "No Collateral",
    check: true,
    status: "Daily/Weekly",
    type: "Trader Loan",
    beds: 7,
    garages: 0,
    region: "Local",
    name: "VendorChoice",
    slug: "vendor-choice-trader-loan"
  },
  {
    id: '5',
    property_img: "https://placehold.co/600x400?text=Nelion+Finance",
    property_title: "Agri-Boost seasonal",
    property_price: "Tsh 500,000 - 10M",
    category: "agri",
    category_img: "/images/property_option/house.svg",
    rooms: 6,
    bathrooms: 8,
    location: "Rural TZ",
    livingArea: "1 Week",
    tag: "Seasonal",
    check: true,
    status: "Harvest Pay",
    type: "Agricultural loan",
    beds: 180,
    garages: 0,
    region: "Upcountry",
    name: "AgriBoost",
    slug: "agri-boost-seasonal-loan"
  }
];

export async function GET() {
  return NextResponse.json(loanData);
}
