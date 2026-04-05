import { Resend } from "resend";
import { NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let name: string, email: string, message: string;

  try {
    ({ name, email, message } = await req.json());
  } catch {
    return NextResponse.json({ success: false, error: "JSON inválido" }, { status: 400 });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: "Campos incompletos" }, { status: 400 });
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json({ success: false, error: "Email inválido" }, { status: 400 });
  }

  if (!process.env.EMAIL_TO) {
    return NextResponse.json({ success: false, error: "Configuración incompleta" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "LML Agency <contacto@lmlagencype.com>",
      to: process.env.EMAIL_TO,
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

