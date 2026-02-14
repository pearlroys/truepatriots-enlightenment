import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, country, reason } = body;

    await resend.emails.send({
      from: "True Patriots <onboarding@resend.dev>",
      to: ["pearl_chisom@yahoo.com"],
      subject: "New Join Us Registration",
      html: `
        <h2>New Registration</h2>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Reason for Joining:</strong></p>
        <p>${reason}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }
}
