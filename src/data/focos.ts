/**
 * Punto focal de las fotos que quedan mal recortadas con el centro.
 *
 * Las galerías recortan con object-cover en cajas 4/3 y 3/2, así que una foto
 * vertical pierde la mitad del alto. Acá se ajusta cuál mitad se ve: el valor
 * es un object-position de CSS y lo aplica <ImagemGaleria> en todo el sitio.
 *
 * Este módulo es puro (no importa el manifest) porque lo usan componentes que
 * también corren en el browser.
 */
const focos: Record<string, string> = {
  // Vertical: centrada se come el telar y las almohadas, así que subimos el encuadre.
  "santamaria-72": "50% 15%",
};

/** object-position de una foto, o undefined si va centrada como el resto. */
export function getFoco(id: string): string | undefined {
  return focos[id];
}
