import { Resend } from "resend";

// Resend client — initialised lazily so the app boots even without the key
let resendClient: Resend | null = null;

export function getResend(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error(
        "RESEND_API_KEY is not set. Configure it in environment variables."
      );
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

/**
 * Send a transactional email via Resend.
 * All emails sent from Leadhaus use the theleadhaus.io domain.
 */
export async function sendEmail({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}) {
  const resend = getResend();

  return resend.emails.send({
    from: "Leadhaus <noreply@theleadhaus.io>",
    to,
    subject,
    text,
    html,
  });
}
