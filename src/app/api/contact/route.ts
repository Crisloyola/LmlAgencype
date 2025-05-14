// src/app/api/contact/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY?.slice(0, 5)); // solo primeros 5 caracteres
  console.log("EMAIL_TO:", process.env.EMAIL_TO);
  try {
    await resend.emails.send({
      from: 'LML Agency <contacto@lmlagencype.com>',
      to: process.env.EMAIL_TO || '',
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al enviar con Resend:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }

  
}
// This code is a Next.js API route that handles sending emails using the Resend service.