import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, zip, message, _gotcha } = body;

    // Honeypot check
    if (_gotcha) {
      return NextResponse.json({ status: "success" }, { status: 200 });
    }

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // In a real implementation, you would send an email here using Nodemailer, Resend, or SendGrid
    // console.log("Form Submission:", { name, email, phone, service, zip, message });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}