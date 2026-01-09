import { NextResponse } from "next/server";

const menuItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/#products" },
    { name: "Impact", href: "/impact" },
    { name: "Careers", href: "/careers" },
    { name: "News", href: "/blogs" },
];

const features = [
    {
        id: 1,
        imgSrc: "/images/features/rating.svg",
        title: "Trustworthy Guidance",
        description: "We provide expert financial advice to ensure you make the best decisions for your business growth."
    },
    {
        id: 2,
        imgSrc: "/images/features/Give-Women's-Rights.svg",
        title: "Inclusive Finance",
        description: "Our products are designed to reach underserved markets, especially women-led enterprises in Tanzania."
    },
    {
        id: 3,
        imgSrc: "/images/features/live-chat.svg",
        title: "Rapid Response",
        description: "Get your loan approved and disbursed quickly via mobile money or bank transfer."
    }
];

const searchOptions = {
    keywords: [
        { value: '', label: 'Loan Type', placeholder: 'Loan Type' },
        { value: 'micro', label: 'Micro-Lending' },
        { value: 'asset', label: 'Asset Financing' },
        { value: 'sme', label: 'SME Financing' },
    ],
    locations: [
        { value: '', label: 'Branch' },
        { value: 'Tegeta', label: 'Tegeta (Main)' },
        { value: 'Kariakoo', label: 'Kariakoo' },
        { value: 'Posta', label: 'Posta' },
        { value: 'Sinza', label: 'Sinza' },
        { value: 'Masaki', label: 'Masaki' },
        { value: 'Mikocheni', label: 'Mikocheni' },
    ],
    category: [
        { value: '', label: 'Solution' },
        { value: 'micro', label: 'Micro-Lending' },
        { value: 'asset', label: 'Asset Financing' },
        { value: 'sme', label: 'SME Financing' },
        { value: 'agri', label: 'Agri-Business' },
        { value: 'youth', label: 'Youth Credit' },
    ],
    beds: [
        { value: '', label: 'Tenure' },
        { value: '1', label: '1 Month' },
        { value: '3', label: '3 Months' },
        { value: '6', label: '6 Months' },
        { value: '12', label: '12 Months' },
        { value: '24', label: '24 Months' },
    ],
    garages: [
        { value: '', label: 'Requirements' },
        { value: '0', label: 'Unsecured' },
        { value: '1', label: 'Guarantor' },
        { value: '2', label: 'Collateral' },
    ],
};

const data = [
    {
        src: "https://svgshare.com/i/187L.svg",
        src1: "https://svgshare.com/i/183P.svg",
        alt: "Micro-Lending",
        name: "Micro-Lending",
        count: 1250,
    },
    {
        src: "https://svgshare.com/i/188i.svg",
        src1: "https://svgshare.com/i/185B.svg",
        alt: "Asset Financing",
        name: "Asset Financing",
        count: 450,
    },
    {
        src: "https://svgshare.com/i/186r.svg",
        src1: "https://svgshare.com/i/185n.svg",
        alt: "SME",
        name: "SME Loans",
        count: 320,
    }
];

export const GET = async () => {
    return NextResponse.json({
        menuItems,
        features,
        searchOptions,
        data
    });
};