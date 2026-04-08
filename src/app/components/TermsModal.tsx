'use client';

import { useEffect } from 'react';

interface TermsModalProps {
  onClose: () => void;
}

export default function TermsModal({ onClose }: TermsModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-[#0a0a0a] border border-[#33363F] rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#33363F] shrink-0">
          <div>
            <p className="text-[#B2FA03] text-xs font-semibold tracking-widest uppercase mb-1">
              Latam Masters Agency
            </p>
            <h2 className="text-white text-xl font-bold">
              Términos y Condiciones de Alquiler
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="text-[#33363F] hover:text-white transition-colors ml-4 shrink-0"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-6 py-5 text-gray-300 text-sm leading-relaxed space-y-5">
          <Section number="1" title="Identificación del cliente">
            <p>El cliente deberá proporcionar información verídica, completa y actualizada según corresponda:</p>
            <div className="mt-3 space-y-3">
              <div>
                <p className="text-white font-semibold mb-1">Persona natural:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>DNI (foto por ambas caras, legible)</li>
                  <li>Recibo de servicio (agua, luz o teléfono)</li>
                  <li>Número de contacto (celular y/o fijo)</li>
                  <li>Dirección exacta de domicilio</li>
                  <li>Redes sociales o referencias laborales (opcional)</li>
                  <li>Descripción del uso de los equipos</li>
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Empresa:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>Orden de servicio dirigida a Latam Masters Agency</li>
                  <li>RUC, razón social y teléfono</li>
                  <li>Datos de la persona responsable de recepción (nombre completo, DNI, teléfono)</li>
                  <li>Dirección donde se utilizarán los equipos</li>
                  <li>Descripción del trabajo o proyecto</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section number="2" title="Evaluación y aprobación">
            <p>Latam Masters Agency se reserva el derecho de:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-400">
              <li>Verificar y validar la información proporcionada</li>
              <li>Solicitar documentación adicional si lo considera necesario</li>
              <li>Aprobar o rechazar cualquier solicitud de alquiler sin necesidad de justificación</li>
            </ul>
          </Section>

          <Section number="3" title="Uso de los equipos">
            <p>El cliente se compromete a:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-400">
              <li>Utilizar los equipos únicamente para el fin declarado</li>
              <li>No subarrendar, transferir, prestar ni comercializar los equipos</li>
              <li>Manipular y operar los equipos de forma adecuada, segura y responsable</li>
            </ul>
          </Section>

          <Section number="4" title="Entrega y devolución">
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>Los equipos se entregan en óptimas condiciones de funcionamiento</li>
              <li>El cliente debe verificar el estado al momento de la entrega</li>
              <li>La devolución debe realizarse en la fecha y hora acordadas</li>
              <li>Cualquier retraso generará cargos adicionales según tarifa vigente</li>
            </ul>
          </Section>

          <Section number="5" title="Responsabilidad por daños, pérdida o robo">
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>El cliente asume total responsabilidad por los equipos durante el periodo de alquiler</li>
              <li>En caso de daño parcial, deberá cubrir el costo de reparación</li>
              <li>En caso de daño total, pérdida o robo, deberá pagar el valor comercial del equipo</li>
              <li>No se aceptarán excusas por uso indebido o negligencia</li>
            </ul>
          </Section>

          <Section number="6" title="Garantía o depósito">
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>Latam Masters Agency podrá solicitar un depósito en garantía</li>
              <li>Este será devuelto al finalizar el servicio, previa verificación del estado del equipo</li>
              <li>En caso de daños o incumplimientos, se descontará el monto correspondiente</li>
            </ul>
          </Section>

          <Section number="7" title="Reservas, cancelaciones y cambios">
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>Las reservas pueden requerir un pago adelantado</li>
              <li>En caso de cancelación, el adelanto no es reembolsable</li>
              <li>Los cambios de fecha están sujetos a disponibilidad</li>
              <li>No se garantiza disponibilidad sin confirmación previa</li>
            </ul>
          </Section>

          <Section number="8" title="Transporte y uso en locación">
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>El cliente debe indicar la dirección exacta donde se utilizarán los equipos</li>
              <li>Cualquier cambio de ubicación debe ser comunicado previamente</li>
              <li>El servicio de transporte puede tener un costo adicional</li>
              <li>El cliente es responsable del equipo desde la entrega hasta la devolución</li>
            </ul>
          </Section>

          <Section number="9" title="Términos de pago">
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>El pago debe realizarse antes de la entrega de los equipos</li>
              <li>Los métodos de pago serán previamente indicados por la empresa</li>
              <li>No se entregarán equipos sin confirmación del pago total o parcial acordado</li>
            </ul>
          </Section>

          <Section number="10" title="Soporte técnico">
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>Se brinda soporte técnico básico remoto durante el periodo de alquiler</li>
              <li>No incluye operación presencial, salvo acuerdo adicional</li>
            </ul>
          </Section>

          <Section number="11" title="Penalidades">
            <p>Se aplicarán penalidades en los siguientes casos:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-400">
              <li>Uso indebido o negligente de los equipos</li>
              <li>Incumplimiento de fechas de devolución</li>
              <li>Manipulación no autorizada del equipo</li>
              <li>Incumplimiento de cualquiera de las condiciones establecidas</li>
            </ul>
          </Section>

          <Section number="12" title="Aceptación de términos">
            <p>Al contratar el servicio de alquiler, el cliente declara que:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-400">
              <li>Ha leído, comprendido y acepta todos los términos y condiciones</li>
              <li>La información brindada es verídica</li>
              <li>Asume total responsabilidad por los equipos durante el periodo de alquiler</li>
            </ul>
          </Section>

          <p className="text-[#33363F] text-xs border-t border-[#33363F] pt-4">
            Latam Masters Agency se reserva el derecho de actualizar estos términos y condiciones en cualquier momento sin previo aviso.
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#33363F] shrink-0">
          <button
            onClick={onClose}
            className="w-full bg-[#B2FA03] text-black font-semibold py-2.5 rounded-lg hover:bg-[#c9ff1a] transition-colors text-sm"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#B2FA03] text-black text-xs font-bold shrink-0">
          {number}
        </span>
        {title}
      </h3>
      <div className="pl-8">{children}</div>
    </div>
  );
}
