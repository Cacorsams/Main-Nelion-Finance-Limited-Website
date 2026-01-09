export async function GET() {
  try {
    const facilities = [
      {
        id: 1,
        slug: "micro-lending",
        title: "Micro-Lending",
        amount: "5,000 - 500,000",
        image: "/images/properties/property_1.jpg",
        tag: "Micro",
        location: "All Branches",
        tenure: 30,
        category: "micro",
        interestRate: 3.5,
        approvalTime: "24 Hours"
      },
      {
        id: 2,
        slug: "asset-financing",
        title: "Asset Financing",
        amount: "100,000 - 5,000,000",
        image: "/images/properties/property_2.jpg",
        tag: "Leasing",
        location: "Kariakoo",
        tenure: 12,
        category: "standard",
        interestRate: 15,
        approvalTime: "48 Hours"
      },
      {
        id: 3,
        slug: "sme-financing",
        title: "SME Financing",
        amount: "500,000 - 50,000,000",
        image: "/images/properties/property_3.jpg",
        tag: "Growth",
        location: "Posta HQ",
        tenure: 24,
        category: "standard",
        interestRate: 12,
        approvalTime: "72 Hours"
      }
    ];

    return Response.json(facilities);
  } catch (error) {
    console.error('Error fetching facilities:', error);
    return Response.json(
      { error: 'Failed to fetch facilities' },
      { status: 500 }
    );
  }
}
