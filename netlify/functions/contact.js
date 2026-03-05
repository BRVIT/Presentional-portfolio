import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function json(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed." });
  }

  if (!process.env.RESEND_API_KEY) {
    return json(500, { error: "Missing RESEND_API_KEY." });
  }

  let body = {};
  try {
    body = event.body ? JSON.parse(event.body) : {};
  } catch {
    return json(400, { error: "Invalid JSON body." });
  }

  const name = (body.name || "").toString().trim();
  const email = (body.email || "").toString().trim();
  const message = (body.message || "").toString().trim();

  if (!name || !email || !message) {
    return json(400, { error: "Missing required fields." });
  }

  if (!isValidEmail(email)) {
    return json(400, { error: "Invalid email address." });
  }

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "brvit95@gmail.com",
      replyTo: email,
      subject: `Novy kontakt z portfolia: ${name}`,
      text: `Meno: ${name}\nEmail: ${email}\n\nSprava:\n${message}`,
    });

    return json(200, { ok: true });
  } catch (error) {
    return json(500, {
      error: "Email sa nepodarilo odoslat.",
      detail: error?.message || "Unknown error",
    });
  }
};
