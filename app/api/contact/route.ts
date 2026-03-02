import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, phone, company, serviceType, message, page } = body;

    console.log("=== CONTACT FORM SUBMISSION ===");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Company:", company);
    console.log("Service Type:", serviceType);
    console.log("Page:", page);
    console.log("Message:", message);
    console.log("================================");

    return NextResponse.json(
      { success: true, message: "Thank you for your inquiry. We will be in touch shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}