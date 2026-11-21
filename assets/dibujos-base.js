/**
 * Piezas comunes de todas las ilustraciones: el marco <figure>, los textos y
 * el partido de líneas. Los colores salen de las clases d-* de estilo.css.
 */

export const esc = (t) => String(t ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

/** Texto escapado en el que solo sobreviven <b> e <i>. */
export const htmlSeguro = (t) => esc(t).replace(/&lt;(\/?)(b|i)&gt;/g, '<$1$2>')

export function figura(ancho, alto, cuerpo, descripcion, pie, clase = '') {
  return `<figure class="dibujo ${clase}"><svg viewBox="0 0 ${ancho} ${alto}" role="img" aria-label="${esc(descripcion)}">${cuerpo}</svg>${
    pie ? `<figcaption>${esc(pie)}</figcaption>` : ''
  }</figure>`
}

export const texto = (x, y, t, clase = 'd-texto', ancla = 'start') =>
  `<text x="${x}" y="${y}" class="${clase}" text-anchor="${ancla}">${esc(t)}</text>`

/** Parte un texto en líneas de como mucho `max` caracteres, sin cortar palabras. */
export function envolver(t, max) {
  const lineas = []
  let actual = ''
  for (const palabra of String(t ?? '').split(/\s+/).filter(Boolean)) {
    if (actual && (actual + ' ' + palabra).length > max) {
      lineas.push(actual)
      actual = palabra
    } else {
      actual = actual ? `${actual} ${palabra}` : palabra
    }
  }
  if (actual) lineas.push(actual)
  return lineas
}

/** Varias líneas de texto, una debajo de otra. */
export const lineas = (x, y, lista, clase, ancla = 'start', interlinea = 15) =>
  lista.map((l, i) => texto(x, y + i * interlinea, l, clase, ancla)).join('')

/** Flecha vertical hacia abajo. */
export const flechaAbajo = (x, y1, y2) => `<path d="M${x},${y1} V${y2} m-5,-6 l5,6 l5,-6" class="d-flecha"/>`
