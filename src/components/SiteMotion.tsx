"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";
const FADE_SELECTOR = "img[data-fade]";

/**
 * Motor de movimiento del sitio. Se monta una sola vez en el layout y
 * gobierna dos cosas por atributo, sin obligar a los componentes a ser
 * client components:
 *
 *   data-reveal="up|left|right|zoom"  aparece al entrar en pantalla
 *   data-fade (en un <img>)           funde cuando la foto terminó de cargar
 *
 * El estado oculto lo pone el CSS detrás de html[data-motion="on"], que el
 * script inline del layout resuelve antes del primer pintado. Si el usuario
 * pidió menos movimiento, este efecto no hace nada y todo se ve directo.
 */
export default function SiteMotion() {
  useEffect(() => {
    if (document.documentElement.dataset.motion !== "on") return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          // Una sola vez: reaparecer al volver a subir se siente inquieto.
          revealObserver.unobserve(entry.target);
        }
      },
      // El elemento entra cuando su borde superior pasa el 88% de la pantalla,
      // así termina de aparecer justo cuando el ojo llega.
      { rootMargin: "0px 0px -12% 0px", threshold: 0 }
    );

    const registerReveal = (node: Element) => {
      const el = node as HTMLElement;
      if (el.dataset.revealReady) return;
      el.dataset.revealReady = "1";
      revealObserver.observe(el);
    };

    const registerImage = (node: Element) => {
      const img = node as HTMLImageElement;
      if (img.dataset.fadeReady) return;
      img.dataset.fadeReady = "1";
      // Las que vienen del cache ya están completas: se muestran sin esperar.
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add("is-loaded");
        return;
      }
      const show = () => img.classList.add("is-loaded");
      img.addEventListener("load", show, { once: true });
      // Si falla, igual la revelamos: nunca dejamos un hueco invisible.
      img.addEventListener("error", show, { once: true });
    };

    const scan = (scope: ParentNode) => {
      scope.querySelectorAll(REVEAL_SELECTOR).forEach(registerReveal);
      scope.querySelectorAll(FADE_SELECTOR).forEach(registerImage);
    };

    scan(document);

    // Navegación entre páginas y el modal de quartos montan DOM nuevo.
    const domObserver = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (!(node instanceof Element)) continue;
          if (node.matches(REVEAL_SELECTOR)) registerReveal(node);
          if (node.matches(FADE_SELECTOR)) registerImage(node);
          scan(node);
        }
      }
    });
    domObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      revealObserver.disconnect();
      domObserver.disconnect();
    };
  }, []);

  return null;
}
