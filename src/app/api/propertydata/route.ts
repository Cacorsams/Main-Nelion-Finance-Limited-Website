export async function GET() {
  try {
    // Sample property/loan data - replace with your actual data source
    const properties = [
      {
        id: 1,
        property_title: "Micro-Lending",
        property_price: "5,000 - 500,000",
        description: "Perfect for small traders"
      },
      {
        id: 2,
        property_title: "Asset Financing",
        property_price: "100,000 - 5,000,000",
        description: "Flexible vehicle financing"
      },
      {
        id: 3,
        property_title: "SME Financing",
        property_price: "500,000 - 50,000,000",
        description: "Growth for your business"
      }
    ];

    return Response.json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    return Response.json(
      { error: 'Failed to fetch properties' },
      { status: 500 }
    );
  }
}
