import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, businessName, email, phone, helpType, message } = body;

    // Validate required fields
    if (!name || !businessName || !email || !helpType || !message) {
      return NextResponse.json(
        { error: "All required fields must be completed." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL;

    if (!recipientEmail) {
      console.error("CONTACT_FORM_RECIPIENT_EMAIL is not configured");
      return NextResponse.json(
        { error: "Contact form is not configured. Please try again later." },
        { status: 500 }
      );
    }

    // TODO: Replace with Resend integration when account is configured
    // For now, log the submission and return success
    // In production, this will send via Resend to the recipient email
    console.log("Contact form submission:", {
      to: recipientEmail,
      from: email,
      name,
      businessName,
      phone: phone || "Not provided",
      helpType,
      message,
      timestamp: new Date().toISOString(),
    });

    // Placeholder: When Resend is configured, replace the above with:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Leadhaus <noreply@theleadhaus.io>',
    //   to: recipientEmail,
    //   subject: `New enquiry from ${name} at ${businessName}`,
    //   text: `Name: ${name}\nBusiness: ${businessName}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nEnquiry type: ${helpType}\n\nMessage:\n${message}`,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
