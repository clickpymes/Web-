// Visitas reales con Google Analytics 4: "visita_real" se manda solo cuando hay interacción
// humana (mouse, toque, scroll o teclado) con la pestaña visible. Los robots no lo disparan.
// "clic_saliente" cuenta los clics hacia las herramientas, apps y contacto.
type Gtag = (...args: unknown[]) => void;

function evento(nombre: string, parametros: Record<string, string> = {}): void {
  try {
    const g = (window as unknown as { gtag?: Gtag }).gtag;
    if (typeof g === 'function') g('event', nombre, parametros);
  } catch {
    /* la medición nunca debe romper la página */
  }
}

export function iniciarMedicion(): void {
  const senales = ['pointerdown', 'pointermove', 'keydown', 'scroll', 'touchstart'];
  const disparar = () => {
    if (document.visibilityState !== 'visible') return;
    senales.forEach((s) => window.removeEventListener(s, disparar));
    evento('visita_real', { pagina: location.pathname });
  };
  senales.forEach((s) => window.addEventListener(s, disparar, { passive: true }));

  document.addEventListener('click', (e) => {
    const a = (e.target as Element | null)?.closest?.('a');
    if (!a || !a.href) return;
    const url = new URL(a.href, location.href);
    if (url.hostname !== location.hostname || a.getAttribute('href')?.startsWith('#contacto')) {
      evento('clic_saliente', { destino: url.hostname + url.pathname });
    }
  });
}
