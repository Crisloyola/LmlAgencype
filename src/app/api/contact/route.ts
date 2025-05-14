import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  console.log("Solicitud recibida:", name, email, message);

  try {
    const data = await resend.emails.send({
      from: 'LML Agency <contacto@lmlagencype.com>', // O usa un from validado por Resend
      to: process.env.EMAIL_TO || '',
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    });

    console.log("Respuesta de Resend:", data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al enviar con Resend:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

