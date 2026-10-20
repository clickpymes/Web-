import { BarChart3, Coffee, Gamepad2, Globe, Instagram, SearchCheck, type LucideIcon } from 'lucide-react';

export interface EnlaceHerramienta {
  texto: string;
  href: string;
  principal: boolean;
}

export interface Herramienta {
  id: string;
  titulo: string;
  descripcion: string;
  icono: LucideIcon;
  /** Botones de la tarjeta. */
  enlaces: EnlaceHerramienta[];
  /** Entradas del submenú "Herramientas" de la barra superior. */
  menu: { texto: string; href: string }[];
}

// Única lista de herramientas: la usan la sección Herramientas y el menú de la barra superior.
// Para sumar una herramienta nueva, agregala acá y aparece en los dos lugares.
export const HERRAMIENTAS: Herramienta[] = [
  {
    id: 'auditoria-seo',
    titulo: 'Auditoría SEO gratis',
    descripcion:
      'Pegá la dirección de tu sitio y en un par de minutos recibís un informe en español con SEO, enlaces rotos, velocidad y accesibilidad, listo para descargar en PDF.',
    icono: SearchCheck,
    enlaces: [{ texto: 'Auditar mi sitio', href: 'https://auditoria.clickpymes.com.ar/', principal: true }],
    menu: [{ texto: 'Auditoría SEO', href: 'https://auditoria.clickpymes.com.ar/' }],
  },
  {
    id: 'es-wordpress',
    titulo: '¿Es WordPress?',
    descripcion:
      'Pegá la dirección de cualquier sitio y descubrí si usa WordPress, con qué plantilla y qué plugins está hecho, y datos de su hosting.',
    icono: Globe,
    enlaces: [{ texto: 'Detectar WordPress', href: 'https://auditoria.clickpymes.com.ar/wordpress/', principal: true }],
    menu: [{ texto: '¿Es WordPress?', href: 'https://auditoria.clickpymes.com.ar/wordpress/' }],
  },
  {
    id: 'instagram',
    titulo: 'Diagnóstico de Instagram',
    descripcion:
      'Escribí el usuario de un perfil público y mirá cómo está: ritmo de publicación, interacción, biografía y qué mejorar, con informe en español descargable en PDF.',
    icono: Instagram,
    enlaces: [{ texto: 'Diagnosticar Instagram', href: 'https://auditoria.clickpymes.com.ar/instagram/', principal: true }],
    menu: [{ texto: 'Diagnóstico de Instagram', href: 'https://auditoria.clickpymes.com.ar/instagram/' }],
  },
  {
    id: 'competencia',
    titulo: 'Comparador de competencia',
    descripcion:
      'Poné tu sitio y hasta 3 competidores y mirá lado a lado quién está mejor en SEO, velocidad en celular, contacto y presencia online, con los puntos para corregir primero y PDF descargable.',
    icono: BarChart3,
    enlaces: [{ texto: 'Comparar con mi competencia', href: 'https://auditoria.clickpymes.com.ar/comparar/', principal: true }],
    menu: [{ texto: 'Comparador de competencia', href: 'https://auditoria.clickpymes.com.ar/comparar/' }],
  },
  {
    id: 'cafestock',
    titulo: 'CaféStock',
    descripcion:
      'Control de stock de cápsulas de café: registrá las compras, mirá cuánto te queda, recibí alertas de stock crítico y revisá el consumo mensual. Un ejemplo de sistema de inventario a medida.',
    icono: Coffee,
    enlaces: [{ texto: 'Probar CaféStock', href: 'https://cafestock.clickpymes.com.ar/', principal: true }],
    menu: [{ texto: 'CaféStock (stock de cápsulas)', href: 'https://cafestock.clickpymes.com.ar/' }],
  },
  {
    id: 'anotadores',
    titulo: 'Anotadores para jugar a las cartas',
    descripcion:
      'Punto x Punto: anotadores online y gratuitos para Fichitas (La Podrida) y Truco. Sin registro, sin instalar nada y se guardan en tu celular.',
    icono: Gamepad2,
    enlaces: [
      { texto: 'Probar Fichitas', href: 'https://puntoxpunto.app/', principal: true },
      { texto: 'Probar Truco', href: 'https://puntoxpunto.app/truco', principal: false },
    ],
    menu: [
      { texto: 'Fichitas (anotador)', href: 'https://puntoxpunto.app/' },
      { texto: 'Truco (anotador)', href: 'https://puntoxpunto.app/truco' },
    ],
  },
];
