// src/app/lib/equipment-data.ts
// ── Shared data layer for all equipment pages ─────────────────────────────────

export type Category = {
  id: string;
  label: string;
  emoji: string;
};

export type Equipment = {
  id: number;
  slug: string;
  name: string;
  brand: string;
  category: string;
  images: string[];           // primera = thumbnail
  tagline: string;            // frase corta para el banner
  description: string;        // párrafo largo para la ficha
  specs: { label: string; value: string }[];  // tabla de especificaciones
  includes: string[];         // qué viene en el paquete
  idealFor: string[];         // casos de uso
  priceDay: string;
  priceEvent: string;
  priceWeek?: string;
  available: boolean;
  isNew: boolean;             // aparece en el banner "Lo último"
  badge?: string;
  whatsappBase: string;       // link base de WA
  addedAt: string;            // ISO date — ordena "lo último"
};

// ── Categories ────────────────────────────────────────────────────────────────

export const CATEGORIES: Category[] = [
  { id: "all",         label: "Todo",                    emoji: "📦" },
  { id: "inalambrico", label: "Eventos",                 emoji: "🎤" },
  { id: "audio",       label: "Podcast & Conferencias",  emoji: "🎙️" },
  { id: "video",       label: "Streaming & Video",       emoji: "🎥" },
];

// ── Equipment list ────────────────────────────────────────────────────────────

export const EQUIPMENT: Equipment[] = [

  // ── SISTEMAS INALÁMBRICOS Y TRANSMISIÓN ───────────────────────────────────
  {
    id: 1,
    slug: "shure-slxd4d-dual-channel",
    name: "Shure SLXD4D Dual Channel Digital Wireless Receiver",
    brand: "Shure",
    category: "inalambrico",
    images: ["/equipo/shure-slxd4d.png"],
    tagline: "Receptor inalámbrico profesional de doble canal (Rack con antenas)",
    description:
      "Receptor inalámbrico digital profesional de doble canal diseñado para eventos, conciertos, conferencias y producciones en vivo. Permite operar hasta dos micrófonos inalámbricos simultáneamente con audio digital de alta calidad y gran estabilidad de señal.",
    specs: [
      { label: "Audio", value: "Digital 24-bit" },
      { label: "Canales", value: "2 simultáneos" },
      { label: "Antenas", value: "Externas incluidas" },
      { label: "Escaneo", value: "Automático de frecuencias" },
      { label: "Compatibilidad", value: "Consolas, sistemas de sonido, racks" },
      { label: "Montaje", value: "Rack profesional" },
    ],
    includes: [
      "Receptor Shure SLXD4D",
      "Antenas externas",
      "Cable de poder",
    ],
    idealFor: ["Eventos en vivo", "Iglesias", "Conferencias", "Teatro", "Producciones audiovisuales"],
    priceDay: "S/ 280",
    priceEvent: "S/ 438",
    available: true,
    isNew: false,
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-08-01",
  },
  {
    id: 2,
    slug: "shure-slxd24d-wireless-system",
    name: "Shure SLXD24D Wireless Microphone System",
    brand: "Shure",
    category: "inalambrico",
    images: ["/equipo/shure-slxd24d.png"],
    tagline: "Sistema inalámbrico profesional para 1 o 2 micrófonos",
    description:
      "Sistema inalámbrico profesional diseñado para ofrecer libertad de movimiento en el escenario sin perder calidad de sonido. Permite transmitir audio de alta calidad con gran estabilidad y rango de operación. Disponible en configuración de 1 o 2 micrófonos simultáneos.",
    specs: [
      { label: "Audio", value: "Digital alta fidelidad" },
      { label: "Sincronización", value: "Automática receptor-transmisor" },
      { label: "Estabilidad", value: "Alta — ideal para eventos grandes" },
      { label: "Configuración", value: "1 o 2 micrófonos simultáneos" },
    ],
    includes: [
      "Receptor SLXD4",
      "Transmisor(es) inalámbrico(s)",
      "Micrófono(s) de mano",
      "Antenas",
      "Cable de poder",
    ],
    idealFor: ["Eventos corporativos", "Conciertos y shows", "Iglesias", "Conferencias y seminarios", "Producciones audiovisuales"],
    priceDay: "S/ 150",
    priceEvent: "S/ 235",
    priceWeek: "S/ 280/día · S/ 435 fin de semana (2 micrófonos)",
    available: true,
    isNew: false,
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-08-01",
  },
  {
    id: 3,
    slug: "shure-b58-wireless-handheld",
    name: "Shure B58 Wireless Handheld Transmitter",
    brand: "Shure",
    category: "inalambrico",
    images: ["/equipo/shure-b58.png"],
    tagline: "Transmisor inalámbrico de mano con cápsula Beta 58A",
    description:
      "Transmisor inalámbrico de mano equipado con la reconocida cápsula Beta 58A de Shure, diseñada para ofrecer excelente claridad vocal y alto rendimiento en presentaciones en vivo. Su patrón polar supercardioide permite aislar la voz principal y reducir el ruido ambiental y el feedback.",
    specs: [
      { label: "Tipo", value: "Transmisor inalámbrico de mano" },
      { label: "Cápsula", value: "Shure Beta 58A" },
      { label: "Patrón polar", value: "Supercardioide" },
      { label: "Respuesta", value: "50 Hz – 16 kHz" },
      { label: "Construcción", value: "Metálica profesional" },
      { label: "Compatibilidad", value: "Sistemas Shure SLX / ULX / QLX / Axient" },
    ],
    includes: [
      "Transmisor inalámbrico Shure B58",
      "Baterías AA",
    ],
    idealFor: ["Conciertos y shows en vivo", "Iglesias y presentaciones religiosas", "Conferencias y eventos corporativos", "Presentaciones institucionales", "Producciones audiovisuales"],
    priceDay: "S/ 160",
    priceEvent: "S/ 250",
    available: true,
    isNew: false,
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-08-01",
  },

  // ── AUDIO PROFESIONAL ─────────────────────────────────────────────────────
  {
    id: 4,
    slug: "sennheiser-e835",
    name: "Sennheiser e835",
    brand: "Sennheiser",
    category: "audio",
    images: ["/equipo/sennheiser-e835.png"],
    tagline: "Micrófono dinámico vocal profesional para escenario",
    description:
      "Micrófono dinámico diseñado para voz en presentaciones en vivo. Ofrece excelente claridad vocal y gran resistencia al ruido y retroalimentación (feedback), siendo uno de los modelos más usados en escenarios.",
    specs: [
      { label: "Tipo", value: "Dinámico" },
      { label: "Patrón polar", value: "Cardioide" },
      { label: "Uso principal", value: "Voz en vivo" },
      { label: "Resistencia", value: "Alta al feedback" },
      { label: "Construcción", value: "Robusta para escenario" },
    ],
    includes: [
      "Micrófono Sennheiser e835",
      "Estuche",
      "Adaptador de rosca",
    ],
    idealFor: ["Conciertos", "Predicación o conferencias", "Eventos corporativos", "Grabación vocal"],
    priceDay: "S/ 35",
    priceEvent: "S/ 55",
    available: true,
    isNew: false,
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-08-01",
  },
  {
    id: 5,
    slug: "shure-sm35-tqg",
    name: "Shure SM35-TQG",
    brand: "Shure",
    category: "audio",
    images: ["/equipo/shure-sm35.png"],
    tagline: "Micrófono de diadema condensador para actuaciones en vivo",
    description:
      "Micrófono de diadema condensador diseñado para presentaciones en vivo donde el artista necesita libertad de movimiento sin perder calidad de audio. Su patrón polar cardioide captura la voz con claridad y reduce el ruido del entorno y el feedback en escenarios con alto volumen. Requiere bodypack transmisor para funcionar.",
    specs: [
      { label: "Tipo", value: "Condensador electret" },
      { label: "Patrón polar", value: "Cardioide" },
      { label: "Respuesta", value: "40 Hz – 20 kHz" },
      { label: "Conector", value: "TA4F (TQG) para bodypack inalámbrico" },
      { label: "Peso", value: "72 g" },
      { label: "Cable", value: "1.1 m" },
    ],
    includes: [
      "Shure SM35-TQG",
      "Windscreen (protector antiviento)",
      "Clip de cable",
    ],
    idealFor: ["Cantantes con instrumento", "Conferencias y presentaciones", "Iglesias y predicación", "Fitness e instructores", "Shows en vivo", "Producciones audiovisuales"],
    priceDay: "S/ 100",
    priceEvent: "S/ 160",
    available: true,
    isNew: false,
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-08-01",
  },
  {
    id: 6,
    slug: "behringer-powerplay-p2",
    name: "Behringer Powerplay P2",
    brand: "Behringer",
    category: "audio",
    images: ["/equipo/behringer-p2.png"],
    tagline: "Amplificador personal para audífonos (In-ear monitor)",
    description:
      "Amplificador portátil diseñado para monitoreo personal en escenario. Permite conectar audífonos profesionales para escuchar claramente la mezcla de monitoreo durante presentaciones o grabaciones.",
    specs: [
      { label: "Tipo", value: "Amplificador personal de audífonos" },
      { label: "Conexión entrada", value: "XLR / Jack balanceado" },
      { label: "Control", value: "Volumen personal" },
      { label: "Compatibilidad", value: "Audífonos profesionales / In-ear monitors" },
      { label: "Diseño", value: "Compacto y resistente para escenario" },
    ],
    includes: [
      "Behringer Powerplay P2",
      "Cable de audio",
    ],
    idealFor: ["Monitoreo en vivo", "Iglesias y bandas", "Ensayos musicales", "Estudios de grabación"],
    priceDay: "S/ 35",
    priceEvent: "S/ 55",
    available: true,
    isNew: false,
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-08-01",
  },
  {
    id: 7,
    slug: "soundcraft-notepad-12fx",
    name: "Soundcraft Notepad 12FX",
    brand: "Soundcraft",
    category: "audio",
    images: ["/equipo/soundcraft-notepad12fx.png"],
    tagline: "Mezcladora analógica de 12 canales con efectos e interfaz USB",
    description:
      "Mezcladora analógica compacta de 12 canales diseñada para presentaciones en vivo, conferencias, ensayos musicales y producción de contenido. Integra preamplificadores de micrófono de alta calidad, efectos digitales Lexicon y una interfaz USB para grabación y reproducción directa desde computadora. Su diseño portátil la convierte en una excelente opción para eventos pequeños y medianos, así como para sistemas de sonido móviles o instalaciones sencillas.",
    specs: [
      { label: "Tipo", value: "Mezcladora analógica con interfaz USB" },
      { label: "Canales", value: "12 (4 mono + 4 estéreo)" },
      { label: "Preamplificadores", value: "4 con phantom power" },
      { label: "Ecualización", value: "EQ de 3 bandas por canal" },
      { label: "Efectos", value: "Lexicon: reverb, delay y chorus" },
      { label: "USB", value: "Interfaz de audio 4×4" },
      { label: "Salidas principales", value: "XLR balanceadas" },
      { label: "Extra", value: "Salida audífonos + envío auxiliar para monitores" },
    ],
    includes: [
      "Soundcraft Notepad 12FX",
      "Cable de poder",
      "Cable USB",
    ],
    idealFor: ["Conferencias y eventos corporativos", "Iglesias y presentaciones religiosas", "Música en vivo y ensayos de banda", "Producción de podcasts y streaming", "Sistemas de sonido portátiles"],
    priceDay: "S/ 95",
    priceEvent: "S/ 150",
    available: true,
    isNew: false,
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-08-01",
  },
  {
    id: 8,
    slug: "allen-heath-qu-24c",
    name: "Allen & Heath QU-24C",
    brand: "Allen & Heath",
    category: "audio",
    images: ["/equipo/allen-heath-qu24c.png"],
    tagline: "Consola digital profesional de 24 canales para sonido en vivo",
    description:
      "Consola digital profesional diseñada para eventos en vivo, conciertos, iglesias y producciones audiovisuales. Ofrece 24 canales de entrada, procesamiento digital avanzado y control mediante pantalla táctil. Gracias a su potente sistema DSP y sus preamplificadores AnalogiQ, proporciona sonido limpio, bajo ruido y excelente calidad profesional.",
    specs: [
      { label: "Canales", value: "24 mono + 3 estéreo" },
      { label: "Faders", value: "25 motorizados" },
      { label: "Procesamiento canal", value: "EQ, compresor, gate, delay y filtro pasa-altos" },
      { label: "Efectos integrados", value: "4 procesadores (reverb, delay y más)" },
      { label: "Grabación", value: "USB multipista 32×30 (Qu-Drive)" },
      { label: "Salidas de mezcla", value: "20 (hasta 9 mezclas de monitoreo independientes)" },
      { label: "Pantalla", value: "Táctil 5 pulgadas a color" },
      { label: "Procesamiento", value: "24-bit / 48 kHz" },
      { label: "Control remoto", value: "App Qu-Pad / Qu-You (tablet o smartphone)" },
    ],
    includes: [
      "Consola Allen & Heath QU-24C",
      "Cable de poder",
      "Configuración básica",
      "Asesoría de conexión con el sistema de sonido",
    ],
    idealFor: ["Conciertos y presentaciones musicales", "Iglesias y eventos religiosos", "Conferencias y eventos corporativos", "Producciones audiovisuales", "Grabación de eventos en vivo"],
    priceDay: "S/ 450",
    priceEvent: "S/ 800",
    available: true,
    isNew: false,
    badge: "Pro",
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-08-01",
  },
  {
    id: 9,
    slug: "audio-technica-bphs1",
    name: "Audio-Technica BPHS1",
    brand: "Audio-Technica",
    category: "audio",
    images: ["/equipo/audio-technica-bphs1.png"],
    tagline: "Headset profesional de transmisión con micrófono dinámico",
    description:
      "Headset profesional diseñado para broadcast, comentaristas, streaming y producción audiovisual. Combina audífonos cerrados de alta calidad con un micrófono dinámico montado en brazo flexible (boom), permitiendo comunicación clara y monitoreo de audio al mismo tiempo. Su diseño cerrado ayuda a aislar el ruido exterior, mientras que el micrófono cardioide captura la voz con gran claridad.",
    specs: [
      { label: "Audífono", value: "Closed-back dinámico" },
      { label: "Micrófono", value: "Dinámico cardioide" },
      { label: "Drivers", value: "40 mm con imanes de neodimio" },
      { label: "Respuesta audífono", value: "20 Hz – 20 kHz" },
      { label: "Respuesta micrófono", value: "40 Hz – 20 kHz" },
      { label: "Impedancia", value: "65 Ω" },
      { label: "Peso", value: "264 g" },
      { label: "Conexiones", value: "XLR (mic) + Jack 6.3 mm (audífono)" },
    ],
    includes: [
      "Audio-Technica BPHS1",
      "Cable XLR para micrófono",
    ],
    idealFor: ["Transmisiones deportivas", "Broadcast y radio", "Streaming profesional", "Producción audiovisual", "Cabinas de control y sonido en vivo", "Sistemas de comunicación en eventos"],
    priceDay: "S/ 80",
    priceEvent: "S/ 125",
    available: true,
    isNew: false,
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-08-01",
  },

  // ── VIDEO PROFESIONAL — SWITCHERS ─────────────────────────────────────────
  {
    id: 10,
    slug: "blackmagic-atem-mini-extreme-iso",
    name: "Blackmagic Design ATEM Mini Extreme ISO",
    brand: "Blackmagic Design",
    category: "video",
    images: ["/equipo/atem-mini-extreme-iso.png"],
    tagline: "Switcher de 8 entradas HDMI con grabación ISO por cámara",
    description:
      "Switcher de video profesional diseñado para producción en vivo y streaming multicámara de alta calidad. Permite conectar hasta 8 fuentes HDMI, cambiar entre cámaras en tiempo real, añadir gráficos y transiciones. Su función ISO permite grabar cada entrada de video de forma independiente, así como el programa final, facilitando la edición posterior con máxima flexibilidad.",
    specs: [
      { label: "Entradas de video", value: "8 HDMI" },
      { label: "Salidas", value: "HDMI (programa / multiview) + USB (webcam)" },
      { label: "Streaming", value: "Vía Ethernet (directo)" },
      { label: "Grabación ISO", value: "Cada entrada + programa final" },
      { label: "Multiview", value: "Monitoreo de todas las cámaras en una pantalla" },
      { label: "Efectos", value: "Transiciones, DVE, chroma key, picture-in-picture, overlays" },
      { label: "Audio", value: "Mezcla integrada (HDMI + entradas externas)" },
      { label: "Control", value: "Panel físico + ATEM Software Control" },
      { label: "Compatibilidad", value: "OBS, vMix y flujos de trabajo profesionales" },
    ],
    includes: [
      "Blackmagic ATEM Mini Extreme ISO",
      "Cable de alimentación",
      "ATEM Software Control (PC/Mac)",
    ],
    idealFor: ["Eventos en vivo", "Iglesias", "Streaming profesional (YouTube, Facebook)", "Conferencias y eventos corporativos", "Producción audiovisual multicámara", "Grabación de contenido digital"],
    priceDay: "Desde S/ 350",
    priceEvent: "Desde S/ 550",
    available: true,
    isNew: false,
    badge: "Pro",
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-08-01",
  },
  {
    id: 11,
    slug: "blackmagic-atem-mini-pro",
    name: "Blackmagic Design ATEM Mini Pro",
    brand: "Blackmagic Design",
    category: "video",
    images: ["/equipo/atem-mini.png"],
    tagline: "Switcher compacto para streaming y producción multicámara",
    description:
      "Switcher de video compacto diseñado para streaming y producción en vivo con múltiples cámaras. Permite conectar hasta 4 fuentes HDMI, realizar cambios en tiempo real, añadir transiciones profesionales y transmitir directamente a plataformas como YouTube o Facebook sin necesidad de software adicional. Integra multiview, control de audio y grabación directa a dispositivos USB.",
    specs: [
      { label: "Entradas de video", value: "4 HDMI" },
      { label: "Salidas", value: "HDMI (programa / multiview) + USB (webcam)" },
      { label: "Streaming", value: "Vía Ethernet (directo)" },
      { label: "Grabación", value: "Directa a disco externo (USB)" },
      { label: "Multiview", value: "Monitoreo de cámaras, audio y estado" },
      { label: "Efectos", value: "Transiciones, DVE, chroma key, overlays" },
      { label: "Audio", value: "Mezcla integrada (HDMI + entradas externas)" },
      { label: "Control", value: "Panel físico + ATEM Software Control" },
      { label: "Compatibilidad", value: "OBS, vMix y otros softwares" },
    ],
    includes: [
      "Blackmagic ATEM Mini Pro",
      "Cable de alimentación",
      "ATEM Software Control (PC/Mac)",
    ],
    idealFor: ["Streaming en vivo (YouTube, Facebook)", "Iglesias", "Conferencias y eventos corporativos", "Producción de contenido digital", "Podcasts en video", "Clases virtuales y capacitación"],
    priceDay: "Desde S/ 200",
    priceEvent: "Desde S/ 320",
    available: true,
    isNew: false,
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-08-01",
  },

  // ── VIDEO PROFESIONAL — CAPTURA ───────────────────────────────────────────
  {
    id: 12,
    slug: "magewell-pro-capture-quad-hdmi",
    name: "Magewell Pro Capture Quad HDMI",
    brand: "Magewell",
    category: "video",
    images: ["/equipo/magewell-pro-capture-quad.png"],
    tagline: "Capturadora profesional PCIe de 4 canales HDMI para producción multicámara",
    description:
      "Tarjeta capturadora profesional diseñada para sistemas de producción en vivo y streaming multicámara. Permite capturar hasta 4 señales HDMI simultáneamente en una sola tarjeta PCIe, ofreciendo alta calidad de imagen, baja latencia y gran estabilidad para entornos exigentes. Procesamiento de video de 10 bits con escalado, conversión de color y sincronización precisa. Funcionamiento continuo 24/7.",
    specs: [
      { label: "Entradas", value: "4 HDMI (con audio embebido)" },
      { label: "Interfaz", value: "PCIe Gen2 x4" },
      { label: "Resolución máx.", value: "Hasta 2048×2160" },
      { label: "Procesamiento", value: "10-bit" },
      { label: "Frame rate", value: "Hasta ~144 fps (según resolución)" },
      { label: "Funciones", value: "Escalado, deinterlacing, conversión de color, cropping" },
      { label: "Latencia", value: "Ultra baja (nivel profesional)" },
      { label: "Softwares", value: "Compatible con más de 50 (OBS, vMix, Wirecast...)" },
      { label: "SO", value: "Windows, Mac, Linux" },
    ],
    includes: [
      "Magewell Pro Capture Quad HDMI",
      "Bracket de instalación",
    ],
    idealFor: ["Producción multicámara en vivo", "Streaming profesional", "Iglesias y eventos", "Conferencias y eventos corporativos", "Estudios de grabación audiovisual", "Broadcast"],
    priceDay: "Desde S/ 150",
    priceEvent: "Desde S/ 240",
    available: true,
    isNew: false,
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-08-01",
  },
  {
    id: 13,
    slug: "elgato-cam-link-4k",
    name: "Elgato Cam Link 4K",
    brand: "Elgato",
    category: "video",
    images: ["/equipo/elgato-cam-link-4k.png"],
    tagline: "Capturadora HDMI USB para streaming con cámaras profesionales",
    description:
      "Capturadora externa diseñada para conectar cámaras profesionales (DSLR, mirrorless o videocámaras) directamente a una computadora mediante USB, convirtiéndolas en una webcam de alta calidad. Permite transmitir, grabar o realizar videollamadas con calidad hasta 4K con latencia mínima. Funcionamiento plug & play, compatible con OBS, Zoom, Teams, Discord y más.",
    specs: [
      { label: "Entrada", value: "HDMI (1 canal)" },
      { label: "Salida", value: "USB 3.0 (tipo webcam)" },
      { label: "Resolución", value: "Hasta 4K 30fps / 1080p 60fps" },
      { label: "Latencia", value: "Ultra baja" },
      { label: "Tipo", value: "Capturadora externa portátil" },
      { label: "Requisito", value: "Cámara con salida HDMI limpia" },
      { label: "Compatibilidad", value: "Windows y macOS" },
    ],
    includes: [
      "Elgato Cam Link 4K",
    ],
    idealFor: ["Streaming (YouTube, Facebook, Twitch)", "Videoconferencias profesionales", "Producción de contenido digital", "Podcasts en video", "Clases virtuales", "Grabación con cámaras DSLR / mirrorless"],
    priceDay: "Desde S/ 80",
    priceEvent: "Desde S/ 130",
    available: true,
    isNew: false,
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-08-01",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

export function getEquipmentBySlug(slug: string): Equipment | undefined {
  return EQUIPMENT.find((e) => e.slug === slug);
}

export function getLatestEquipment(count = 8): Equipment[] {
  return [...EQUIPMENT]
    .sort((a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime())
    .slice(0, count);
}

export function getRelatedEquipment(current: Equipment, count = 4): Equipment[] {
  return EQUIPMENT.filter(
    (e) => e.category === current.category && e.id !== current.id
  ).slice(0, count);
}
