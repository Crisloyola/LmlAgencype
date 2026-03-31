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
  { id: "all",         label: "Todo",              emoji: "📦" },
  { id: "camaras",     label: "Cámaras & Video",   emoji: "🎥" },
  { id: "iluminacion", label: "Iluminación",        emoji: "💡" },
  { id: "audio",       label: "Audio",              emoji: "🎙️" },
  { id: "streaming",   label: "Streaming & Switcher", emoji: "🖥️" },
  { id: "accesorios",  label: "Accesorios",         emoji: "🎛️" },
];

// ── Equipment list ────────────────────────────────────────────────────────────

export const EQUIPMENT: Equipment[] = [
  // ── CÁMARAS ──────────────────────────────────────────────────────────────
  {
    id: 1,
    slug: "sony-zv-e10",
    name: "Sony ZV-E10",
    brand: "Sony",
    category: "camaras",
    images: [
      "/equipo/sony-zve10.webp",
      "/equipo/sony-zve10-2.webp",
    ],
    tagline: "La favorita de los creadores",
    description:
      "La Sony ZV-E10 es la cámara mirrorless APS-C perfecta para streamers y creadores de contenido. Con montura E compatible con cientos de lentes, grabación 4K y micrófono direccional integrado, es ideal para lives, vlogs y entrevistas en estudio o locación.",
    specs: [
      { label: "Sensor", value: "APS-C CMOS 24.2MP" },
      { label: "Video", value: "4K 30fps / 1080p 120fps" },
      { label: "Montura", value: "Sony E-Mount" },
      { label: "Estabilización", value: "Digital + OSS (con lente)" },
      { label: "Micrófono", value: "Direccional integrado + jack 3.5mm" },
      { label: "Pantalla", value: "3″ articulada táctil" },
      { label: "Batería", value: "NP-FZ100 ~70min 4K" },
      { label: "Conectividad", value: "USB-C, Wi-Fi, Bluetooth" },
    ],
    includes: [
      "Cámara Sony ZV-E10",
      "Lente kit 16-50mm f/3.5-5.6",
      "Batería + cargador",
      "Tarjeta SD 64GB",
      "Cable USB-C",
    ],
    idealFor: ["Streaming", "Vlogs", "Entrevistas", "YouTube", "Lives en redes"],
    priceDay: "S/ 120",
    priceEvent: "S/ 300",
    priceWeek: "S/ 600",
    available: true,
    isNew: false,
    badge: "Más Alquilada",
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-08-01",
  },
  {
    id: 2,
    slug: "sony-a7-iii",
    name: "Sony A7 III",
    brand: "Sony",
    category: "camaras",
    images: ["/equipo/sony-a7iii.webp"],
    tagline: "Full Frame para producciones de alto nivel",
    description:
      "El cuerpo de referencia Full Frame de Sony con autofoco de detección de fase, video 4K HDR y 120fps en 1080p. Ideal para producciones donde la calidad de imagen no es negociable: entrevistas con CEO, eventos corporativos y streams de torneo.",
    specs: [
      { label: "Sensor", value: "Full Frame BSI CMOS 24.2MP" },
      { label: "Video", value: "4K 30fps / 1080p 120fps" },
      { label: "Montura", value: "Sony E-Mount" },
      { label: "Estabilización", value: "IBIS 5 ejes" },
      { label: "Autofoco", value: "693 puntos PDAF + 425 contraluz" },
      { label: "ISO", value: "100 – 51200 (exp. 204800)" },
      { label: "Batería", value: "NP-FZ100 ~200 fotos" },
      { label: "Conectividad", value: "USB 3.1, Wi-Fi, Bluetooth, HDMI" },
    ],
    includes: [
      "Cámara Sony A7 III",
      "Lente 28-70mm f/3.5-5.6 OSS",
      "2× baterías NP-FZ100",
      "Cargador dual",
      "Tarjeta SD 128GB V60",
    ],
    idealFor: ["Eventos corporativos", "Torneos", "Spots publicitarios", "Fotografía + Video"],
    priceDay: "S/ 250",
    priceEvent: "S/ 600",
    priceWeek: "S/ 1200",
    available: true,
    isNew: false,
    badge: "Pro",
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-08-15",
  },
  {
    id: 3,
    slug: "blackmagic-pocket-6k",
    name: "Blackmagic Pocket 6K G2",
    brand: "Blackmagic Design",
    category: "camaras",
    images: ["/equipo/bmpcc6k.webp"],
    tagline: "Cinema RAW para proyectos que exigen el máximo",
    description:
      "La BMPCC 6K G2 graba en Blackmagic RAW con rango dinámico de 13 paradas para posproducción de alto nivel. Compatible con lentes EF. Perfecta para documentales de esports, reels cinematográficos y producciones que requieren color grading profesional.",
    specs: [
      { label: "Sensor", value: "Super 35 CMOS 6K" },
      { label: "Video", value: "6K RAW / 4K / 2.8K" },
      { label: "Montura", value: "Canon EF" },
      { label: "Dynamic Range", value: "13 paradas" },
      { label: "Codec", value: "BRAW / ProRes HQ" },
      { label: "Pantalla", value: "5″ táctil HDR 1000 nits" },
      { label: "Almacenamiento", value: "CFast 2.0 + SD UHS-II" },
      { label: "Conectividad", value: "USB-C 3.1, Mini HDMI, 3.5mm" },
    ],
    includes: [
      "Cámara BMPCC 6K G2",
      "Batería LP-E6 + cargador",
      "Tarjeta CFast 2.0 256GB",
      "HDMI Mini → HDMI",
    ],
    idealFor: ["Cine", "Documentales", "Spots", "Color grading", "Producciones de esports"],
    priceDay: "S/ 320",
    priceEvent: "S/ 800",
    priceWeek: "S/ 1600",
    available: true,
    isNew: true,
    badge: "Nuevo",
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2025-03-10",
  },
  {
    id: 4,
    slug: "gopro-hero-12",
    name: "GoPro HERO 12 Black",
    brand: "GoPro",
    category: "camaras",
    images: ["/equipo/gopro-hero12.webp"],
    tagline: "Acción sin límites para contenido en el campo",
    description:
      "La GoPro HERO 12 Black graba 5.3K60 y tiene estabilización HyperSmooth 6.0 para contenido de acción ultra fluido. Resistente al agua hasta 10m. Ideal para IRL streams, recorridos en evento y contenido detrás de cámaras.",
    specs: [
      { label: "Video", value: "5.3K60 / 4K120 / 2.7K240" },
      { label: "Estabilización", value: "HyperSmooth 6.0" },
      { label: "Resistencia", value: "10m sin carcasa" },
      { label: "Batería", value: "Enduro ~70min 5.3K" },
      { label: "Pantalla", value: "Frontal 1.4″ + Trasera 2.27″" },
      { label: "Conectividad", value: "USB-C, Wi-Fi 5GHz, Bluetooth" },
      { label: "Audio", value: "3 micrófonos + reducción viento" },
      { label: "Extras", value: "Time-lapse, Night Lapse, RAW" },
    ],
    includes: [
      "GoPro HERO 12 Black",
      "2× Baterías Enduro",
      "Cargador dual",
      "Tarjeta microSD 64GB",
      "Kit de montajes básicos",
    ],
    idealFor: ["IRL Streaming", "Detrás de cámaras", "Acción", "Deportes", "Vlogs dinámicos"],
    priceDay: "S/ 80",
    priceEvent: "S/ 200",
    priceWeek: "S/ 400",
    available: true,
    isNew: true,
    badge: "Nuevo",
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2025-04-01",
  },

  // ── ILUMINACIÓN ───────────────────────────────────────────────────────────
  {
    id: 5,
    slug: "godox-sl60w",
    name: "Godox SL-60W LED",
    brand: "Godox",
    category: "iluminacion",
    images: ["/equipo/godox-sl60.webp"],
    tagline: "Luz continua confiable para cualquier setup",
    description:
      "El Godox SL-60W es la luz continua más usada en nuestro estudio. Con 60W de potencia, temperatura ajustable y compatible con montura Bowens, acepta softboxes, octoboxes y grids. Control remoto incluido. Ideal para setups de una o dos luces.",
    specs: [
      { label: "Potencia", value: "60W LED COB" },
      { label: "Temperatura", value: "5600K ±200K" },
      { label: "CRI", value: "≥ 96" },
      { label: "Montura", value: "Bowens S" },
      { label: "Control", value: "Manual 10-100% + RC A16 incluido" },
      { label: "Ventilador", value: "Sí, silencioso" },
      { label: "Alimentación", value: "AC 100-240V" },
      { label: "Peso", value: "2.6 kg" },
    ],
    includes: [
      "Godox SL-60W",
      "Control remoto RC A16",
      "Cable de alimentación",
      "Bolsa de transporte",
      "Trípode de luz (extra)",
    ],
    idealFor: ["Streaming", "YouTube", "Fotografía de producto", "Podcast", "Entrevistas"],
    priceDay: "S/ 80",
    priceEvent: "S/ 180",
    priceWeek: "S/ 360",
    available: true,
    isNew: false,
    badge: "Más Alquilada",
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-07-01",
  },
  {
    id: 6,
    slug: "aputure-300d-ii",
    name: "Aputure 300d Mark II",
    brand: "Aputure",
    category: "iluminacion",
    images: ["/equipo/aputure-300d.webp"],
    tagline: "Potencia de cine para sets exigentes",
    description:
      "300W de luz daylight con CRI/TLCI 96+. Compatible con modificadores Bowens y controlable por la app Sidus Link desde el teléfono. Cuando necesitas igualar el sol o iluminar un set grande, esta es la herramienta.",
    specs: [
      { label: "Potencia", value: "300W LED COB" },
      { label: "Temperatura", value: "5500K" },
      { label: "CRI / TLCI", value: "96+ / 97+" },
      { label: "Montura", value: "Bowens S" },
      { label: "Control", value: "App Sidus Link + Controlador físico" },
      { label: "Zona de trabajo", value: "hasta 50m²" },
      { label: "Rango de dimming", value: "0–100%" },
      { label: "Peso", value: "4.3 kg (cabeza)" },
    ],
    includes: [
      "Aputure 300d Mark II (cabeza + controlador)",
      "App Sidus Link compatible",
      "Cable de alimentación",
      "Maleta de transporte",
    ],
    idealFor: ["Producción de cine", "Sets grandes", "Publicidad", "Eventos de esports"],
    priceDay: "S/ 150",
    priceEvent: "S/ 380",
    priceWeek: "S/ 760",
    available: true,
    isNew: false,
    badge: "Pro",
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-09-01",
  },
  {
    id: 7,
    slug: "panel-led-rgb-60",
    name: "Panel LED RGB 60×60cm",
    brand: "Neewer",
    category: "iluminacion",
    images: ["/equipo/panel-rgb.webp"],
    tagline: "Color infinito para streams con identidad",
    description:
      "Panel LED bicolor + RGB de 60×60cm controlable por app. Cambia de luz neutra profesional a colores de acento para tu marca o stream. Opción de batería para iluminación portable en eventos y locaciones.",
    specs: [
      { label: "Tamaño", value: "60 × 60 cm" },
      { label: "Temperatura", value: "2500K – 8500K + RGB Full" },
      { label: "CRI", value: "≥ 95" },
      { label: "Control", value: "App Bluetooth + panel físico" },
      { label: "Efectos", value: "Flash, Relámpago, TV, Fuego, etc." },
      { label: "Alimentación", value: "AC o batería NP-F opcional" },
      { label: "Montaje", value: "Spigot 5/8″ estándar" },
      { label: "Peso", value: "1.8 kg" },
    ],
    includes: [
      "Panel LED RGB 60×60",
      "Control app Bluetooth",
      "Adaptador corriente",
      "Bolsa de transporte",
    ],
    idealFor: ["Streaming temático", "Backlight", "Eventos", "Photography", "Podcasts"],
    priceDay: "S/ 60",
    priceEvent: "S/ 140",
    priceWeek: "S/ 280",
    available: true,
    isNew: true,
    badge: "Nuevo",
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2025-03-25",
  },

  // ── AUDIO ─────────────────────────────────────────────────────────────────
  {
    id: 8,
    slug: "shure-sm7b",
    name: "Shure SM7B",
    brand: "Shure",
    category: "audio",
    images: ["/equipo/shure-sm7b.webp"],
    tagline: "El micrófono de los grandes streamers",
    description:
      "El SM7B es el estándar de la industria para podcast, streaming y voz en off. Patrón cardioide, respuesta plana con presencia boost opcional y filtro pop integrado. Requiere interfaz con buen previo (Cloudlifter recomendado). Sonido limpio, profesional y sin coloraciones artificiales.",
    specs: [
      { label: "Tipo", value: "Dinámico XLR" },
      { label: "Patrón", value: "Cardioide" },
      { label: "Respuesta", value: "50Hz – 20kHz" },
      { label: "SPL máximo", value: "180 dB" },
      { label: "Sensibilidad", value: "-59 dBV/Pa" },
      { label: "Filtros", value: "High-pass + Presencia boost switch" },
      { label: "Reducción EMI", value: "Blindaje interno" },
      { label: "Peso", value: "598 g" },
    ],
    includes: [
      "Shure SM7B",
      "Parabrisas grande y pequeño",
      "Cable XLR 3m",
      "Interfaz Focusrite Scarlett Solo (incluida en pack)",
    ],
    idealFor: ["Podcast", "Streaming", "Voz en off", "Radios", "Estudios"],
    priceDay: "S/ 90",
    priceEvent: "S/ 220",
    priceWeek: "S/ 440",
    available: true,
    isNew: false,
    badge: "Favorito",
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-07-15",
  },
  {
    id: 9,
    slug: "rode-wireless-go-ii",
    name: "Rode Wireless GO II",
    brand: "Rode",
    category: "audio",
    images: ["/equipo/rode-wireless.webp"],
    tagline: "Audio inalámbrico de 2 canales para entrevistas y eventos",
    description:
      "Sistema de micrófono inalámbrico de doble canal con 200m de alcance. Cada transmisor graba internamente 24h como respaldo. Compatible con cámaras, smartphones y mixers. Perfecto para entrevistas dinámicas, eventos presenciales y IRL streaming.",
    specs: [
      { label: "Canales", value: "2 transmisores simultáneos" },
      { label: "Alcance", value: "200m (línea de vista)" },
      { label: "Frecuencia", value: "2.4 GHz encriptada" },
      { label: "Grabación interna", value: "Hasta 24 horas por TX" },
      { label: "Latencia", value: "< 4ms" },
      { label: "Batería TX/RX", value: "~7h / ~7h" },
      { label: "Conexión salida", value: "TRS 3.5mm + USB-C" },
      { label: "App", value: "Rode Central para ajustes" },
    ],
    includes: [
      "Receptor Rode Wireless GO II",
      "2× Transmisores",
      "2× Micrófonos clip-on",
      "Cables de conexión TRS + USB-C",
      "Estuche magnético de carga",
    ],
    idealFor: ["Entrevistas", "Eventos", "IRL Streaming", "Conferencias", "Documental"],
    priceDay: "S/ 100",
    priceEvent: "S/ 240",
    priceWeek: "S/ 480",
    available: true,
    isNew: false,
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-10-01",
  },
  {
    id: 10,
    slug: "focusrite-scarlett-2i2",
    name: "Focusrite Scarlett 2i2 (4ta Gen)",
    brand: "Focusrite",
    category: "audio",
    images: ["/equipo/scarlett-2i2.webp"],
    tagline: "La interfaz de audio más usada en el mundo",
    description:
      "La Scarlett 2i2 de 4ta generación ofrece los mejores previos de la línea con modo AIR que emula transformadores vintage. 2 entradas XLR/TRS combo, salida monitor y headphones. Plug-and-play con cualquier OS. El eslabón imprescindible entre tu micrófono y tu stream.",
    specs: [
      { label: "Entradas", value: "2× XLR/TRS combo" },
      { label: "Salidas", value: "2× TRS + Headphones 6.3mm" },
      { label: "Resolución", value: "24-bit / 192kHz" },
      { label: "Latencia", value: "< 1.7ms" },
      { label: "Previos", value: "Scarlett Studio con modo AIR" },
      { label: "Phantom power", value: "+48V por canal" },
      { label: "Alimentación", value: "Bus USB-C" },
      { label: "Software", value: "Hitmaker Expansion incluido" },
    ],
    includes: [
      "Focusrite Scarlett 2i2 4ta Gen",
      "Cable USB-C",
      "Software Hitmaker Expansion",
    ],
    idealFor: ["Podcast", "Streaming", "Grabación musical", "Home studio"],
    priceDay: "S/ 60",
    priceEvent: "S/ 140",
    priceWeek: "S/ 280",
    available: true,
    isNew: true,
    badge: "Nuevo",
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2025-04-10",
  },

  // ── STREAMING ─────────────────────────────────────────────────────────────
  {
    id: 11,
    slug: "blackmagic-atem-mini-pro",
    name: "Blackmagic ATEM Mini Pro",
    brand: "Blackmagic Design",
    category: "streaming",
    images: ["/equipo/atem-mini.webp"],
    tagline: "Switcher profesional para producciones multicámara",
    description:
      "El ATEM Mini Pro permite gestionar hasta 4 fuentes HDMI, hacer streaming directo por USB-C, grabar en USB y ver un multiview de 4 pantallas simultáneas. Transiciones, PIP, keyer de chroma integrado. La solución todo-en-uno para coberturas de torneos y eventos en vivo.",
    specs: [
      { label: "Entradas HDMI", value: "4 × HDMI 1.4" },
      { label: "Streaming", value: "USB-C directo (YouTube, Twitch, etc.)" },
      { label: "Grabación", value: "USB externo H.264" },
      { label: "Multiview", value: "4 fuentes simultáneas" },
      { label: "Keyer", value: "Upstream luma/linear, downstream" },
      { label: "Transiciones", value: "Cut, Mix, Dip, DVE, Stinger" },
      { label: "Control remoto", value: "ATEM Software Control (incluido)" },
      { label: "Alimentación", value: "DC 12V" },
    ],
    includes: [
      "Blackmagic ATEM Mini Pro",
      "Cable de alimentación",
      "ATEM Software Control (PC/Mac)",
      "Cable USB-C 3m",
    ],
    idealFor: ["Torneos de esports", "Eventos en vivo", "Streams multicámara", "Conferencias"],
    priceDay: "S/ 130",
    priceEvent: "S/ 320",
    priceWeek: "S/ 640",
    available: true,
    isNew: false,
    badge: "Pro",
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-08-20",
  },
  {
    id: 12,
    slug: "elgato-stream-deck-xl",
    name: "Elgato Stream Deck XL",
    brand: "Elgato",
    category: "streaming",
    images: ["/equipo/streamdeck-xl.webp"],
    tagline: "Control total de tu producción desde una sola superficie",
    description:
      "32 teclas LCD personalizables para controlar escenas de OBS, transiciones, alertas, clips y cualquier acción de teclado. Con plugins para Twitch, YouTube, Spotify, Discord y más. El cerebro de cualquier setup de streaming serio.",
    specs: [
      { label: "Teclas", value: "32 teclas LCD táctiles" },
      { label: "Resolución LCD", value: "72 × 72 px por tecla" },
      { label: "Conectividad", value: "USB-A" },
      { label: "Compatibilidad", value: "PC, Mac" },
      { label: "Software", value: "Stream Deck App + plugin hub" },
      { label: "Integración", value: "OBS, Twitch, YouTube, Discord, Spotify..." },
      { label: "Macros", value: "Ilimitados" },
      { label: "Perfiles", value: "Múltiples por juego/escena" },
    ],
    includes: [
      "Elgato Stream Deck XL",
      "Cable USB-A 1.5m",
      "Soporte inclinado ajustable",
    ],
    idealFor: ["Streamers", "Producción de torneos", "Broadcast", "Live shows"],
    priceDay: "S/ 60",
    priceEvent: "S/ 140",
    priceWeek: "S/ 280",
    available: true,
    isNew: false,
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-09-15",
  },

  // ── ACCESORIOS ────────────────────────────────────────────────────────────
  {
    id: 13,
    slug: "teleprompter-17",
    name: "Teleprompter 17\"",
    brand: "LML Gear",
    category: "accesorios",
    images: ["/equipo/teleprompter.webp"],
    tagline: "Lee tu guión mirando directo a cámara",
    description:
      "Teleprompter profesional de 17 pulgadas con marco de aluminio anodizado, cristal beam splitter 60/40 y compatibilidad con tabletas de hasta 12.9\". App gratuita con control Bluetooth. Tripié incluido. Indispensable para presentadores, youtubers y voceros corporativos.",
    specs: [
      { label: "Pantalla compatible", value: "Hasta iPad 12.9\" / tablet" },
      { label: "Vidrio", value: "Beam splitter 60/40" },
      { label: "Marco", value: "Aluminio anodizado negro" },
      { label: "Control", value: "Mando Bluetooth incluido" },
      { label: "App", value: "PromptSmart / Teleprompter Premium" },
      { label: "Velocidad scroll", value: "Ajustable en tiempo real" },
      { label: "Tripié", value: "Incluido (max 180cm)" },
      { label: "Peso", value: "3.2 kg (con trípode)" },
    ],
    includes: [
      "Teleprompter 17\"",
      "Trípode profesional",
      "Control Bluetooth",
      "Bolsa de transporte",
    ],
    idealFor: ["Presentadores", "Youtubers", "Voceros corporativos", "Videos institucionales"],
    priceDay: "S/ 75",
    priceEvent: "S/ 180",
    priceWeek: "S/ 360",
    available: true,
    isNew: false,
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-10-10",
  },
  {
    id: 14,
    slug: "green-screen-3x4",
    name: "Green Screen Muslin 3×4m",
    brand: "LML Gear",
    category: "accesorios",
    images: ["/equipo/greenscreen.webp"],
    tagline: "Chroma key de calidad cine para tu producción",
    description:
      "Tela muslin chromakey verde de 3×4 metros, tratada anti-arrugas y con acabado mate uniforme. Incluye soportes telescópicos y pinzas. Perfecta para remover el fondo en post, transmisiones con fondo virtual y publicidad de producto.",
    specs: [
      { label: "Dimensiones", value: "3 × 4 metros" },
      { label: "Material", value: "Muslin 100% algodón" },
      { label: "Acabado", value: "Mate anti-brillo" },
      { label: "Soporte", value: "2× telescópicos 2.8m incluidos" },
      { label: "Fijación", value: "Pinzas de mariposa incluidas" },
      { label: "Color", value: "Verde chroma (#00B140 aprox.)" },
      { label: "Lavable", value: "Sí, temperatura baja" },
      { label: "Peso", value: "2.1 kg" },
    ],
    includes: [
      "Tela Green Screen 3×4m",
      "2× soportes telescópicos",
      "4× pinzas de mariposa",
      "Bolsa de transporte",
    ],
    idealFor: ["Chroma key", "Fondo virtual", "Publicidad", "Streaming temático"],
    priceDay: "S/ 50",
    priceEvent: "S/ 120",
    priceWeek: "S/ 240",
    available: true,
    isNew: false,
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2024-07-20",
  },
  {
    id: 15,
    slug: "estabilizador-dji-rs3",
    name: "DJI RS 3 Pro",
    brand: "DJI",
    category: "accesorios",
    images: ["/equipo/dji-rs3.webp"],
    tagline: "Gimbal de 3 ejes para video cinematográfico en movimiento",
    description:
      "El DJI RS 3 Pro es el gimbal de referencia para cámaras mirrorless de hasta 3kg. Estabilización de 3 ejes con motores sin escobillas para tomas de travelling, seguimiento de sujeto y movimientos creativos. Compatible con Sony, Canon, Nikon y Blackmagic.",
    specs: [
      { label: "Carga máxima", value: "3 kg" },
      { label: "Ejes", value: "3 ejes sin escobillas" },
      { label: "Autonomía", value: "12 horas" },
      { label: "Seguimiento", value: "ActiveTrack Pro 3.0" },
      { label: "Pantalla", value: "OLED 1.8\" integrada" },
      { label: "Bluetooth", value: "Control de cámara vía app" },
      { label: "Modos", value: "Pan, Tilt, Follow, Sport, FPV" },
      { label: "Peso", value: "1.26 kg" },
    ],
    includes: [
      "DJI RS 3 Pro",
      "Mango extensor Briefcase",
      "Cable de control (Sony/Canon)",
      "Cargador USB-C",
      "Maletín de transporte",
    ],
    idealFor: ["Travelling", "Eventos dinámicos", "IRL", "Spots publicitarios", "Bodas"],
    priceDay: "S/ 110",
    priceEvent: "S/ 260",
    priceWeek: "S/ 520",
    available: true,
    isNew: true,
    badge: "Nuevo",
    whatsappBase: "https://wa.link/7cmlp3",
    addedAt: "2025-04-15",
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
