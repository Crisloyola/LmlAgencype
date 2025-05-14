"use client";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Mensaje enviado ✅");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Error al enviar ❌");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="relative w-full max-w-lg bg-black/70 p-6 rounded-xl text-white">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl hover:text-[#B2FA03]"
        >
          ✕
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Contáctanos</h2>

          <input
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#1e1e1e] border border-[#333]"
          />
          <input
            name="email"
            type="email"
            placeholder="Tu correo"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#1e1e1e] border border-[#333]"
          />
          <textarea
            name="message"
            placeholder="Escribe tu mensaje..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#1e1e1e] border border-[#333] min-h-[120px]"
          />
          <button
            type="submit"
            className="bg-[#B2FA03] text-black px-6 py-3 rounded hover:bg-lime-400 transition w-full font-semibold"
          >
            Enviar
          </button>
          <p className="text-sm text-center mt-2">{status}</p>
        </form>
      </div>
    </div>
  );
}
