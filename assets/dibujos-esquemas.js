/**
 * Esquemas que se rellenan con datos: el mapa del abdomen, algoritmos,
 * escalas, reglas de tamaño, cuadros comparativos y cascadas; y cuatro
 * dibujos fijos que se estudian tal cual: Siewert, Bismuth–Corlette, los
 * segmentos de Couinaud y el PCI.
 */
import { esc, figura, texto, envolver, lineas, flechaAbajo } from './dibujos-base.js'

/* ------------------------------------------------------------------ */
/* Mapa del abdomen                                                     */
/* ------------------------------------------------------------------ */

const ORGANOS_MAPA = {
  retroperitoneo: {
    forma: '<ellipse cx="146" cy="214" rx="15" ry="27"/><ellipse cx="282" cy="208" rx="15" ry="27"/><path d="M212,118 V336" class="d-map-aorta"/>',
    punto: [290, 228], etiqueta: [366, 236, 'Retroperitoneo'],
  },
  peritoneo: { forma: '<rect x="76" y="62" width="268" height="306" rx="44" class="d-map-peritoneo"/>', punto: [340, 320], etiqueta: [366, 322, 'Peritoneo'] },
  higado: {
    forma: '<path d="M78,78 C124,54 230,52 262,72 C250,96 226,112 190,118 C150,124 106,128 82,118 C72,105 72,90 78,78Z"/>',
    punto: [112, 96], etiqueta: [62, 92, 'Hígado'],
  },
  vesicula: { forma: '<ellipse cx="150" cy="134" rx="10" ry="17" transform="rotate(-20 150 134)"/>', punto: [146, 142], etiqueta: [62, 140, 'Vesícula'] },
  'via-biliar': { forma: '<path d="M176,112 C178,138 180,156 184,178" class="d-map-conducto"/>', punto: [180, 150], etiqueta: [62, 162, 'Vía biliar'] },
  estomago: {
    forma: '<path d="M206,74 C214,64 236,62 254,70 C294,82 318,114 312,152 C306,188 270,202 240,198 C214,195 200,178 196,162 C208,168 226,172 240,166 C262,156 262,122 240,106 C228,98 214,92 206,74Z"/>',
    punto: [300, 130], etiqueta: [366, 136, 'Estómago'],
  },
  bazo: { forma: '<ellipse cx="334" cy="100" rx="12" ry="24" transform="rotate(25 334 100)"/>', punto: [340, 90], etiqueta: [366, 88, 'Bazo'] },
  pancreas: {
    forma: '<path d="M192,188 C222,178 282,174 318,154 C326,160 324,168 318,172 C282,192 232,200 198,204Z"/>',
    punto: [300, 172], etiqueta: [366, 184, 'Páncreas'],
  },
  duodeno: { forma: '<path d="M198,166 C172,168 166,184 168,200 C170,216 186,222 206,216" class="d-map-tubo"/>', punto: [170, 196], etiqueta: [62, 196, 'Duodeno'] },
  delgado: {
    forma: '<path d="M164,252 C204,240 248,262 282,250 M158,274 C200,262 258,288 292,274 M164,298 C208,284 250,312 292,298 M176,320 C214,308 246,330 280,320" class="d-map-tubo"/>',
    punto: [288, 274], etiqueta: [366, 280, 'Intestino delgado'],
  },
  colon: {
    forma: '<path d="M102,346 L100,240 C100,232 106,228 114,228 L312,228 C320,228 326,234 326,242 L328,328 C328,348 300,352 272,348 C248,344 228,348 216,356" class="d-map-tubo d-map-colon"/>',
    punto: [101, 290], etiqueta: [62, 288, 'Colon'],
  },
  apendice: { forma: '<path d="M102,350 C104,362 110,370 118,376" class="d-map-conducto"/>', punto: [112, 370], etiqueta: [62, 368, 'Apéndice'] },
  recto: { forma: '<path d="M216,356 V386" class="d-map-tubo d-map-colon"/>', punto: [220, 372], etiqueta: [366, 368, 'Recto'] },
  ano: { forma: '<path d="M216,388 V402" class="d-map-tubo"/>', punto: [220, 398], etiqueta: [366, 400, 'Ano'] },
  esofago: { forma: '<path d="M196,0 H210 L216,74 H202Z"/>', punto: [212, 30], etiqueta: [366, 34, 'Esófago'] },
}
const ORDEN_MAPA = ['retroperitoneo', 'peritoneo', 'higado', 'colon', 'delgado', 'pancreas', 'duodeno', 'estomago', 'bazo', 'vesicula', 'via-biliar', 'apendice', 'recto', 'ano', 'esofago']

/** @param {{ resaltar: string[], pie?: string }} opciones */
export function mapa({ resaltar = [], pie } = {}) {
  const formas = ORDEN_MAPA.map((id) => `<g class="d-map${resaltar.includes(id) ? ' activo' : ''}">${ORGANOS_MAPA[id].forma}</g>`).join('')
  const etiquetas = resaltar
    .filter((id) => ORGANOS_MAPA[id])
    .map((id) => {
      const { punto: [px, py], etiqueta: [ex, ey, nombre] } = ORGANOS_MAPA[id]
      const izquierda = ex < 200
      return `<line x1="${px}" y1="${py}" x2="${izquierda ? ex + 4 : ex - 4}" y2="${ey - 4}" class="d-guia"/>
        <circle cx="${px}" cy="${py}" r="3" class="d-tumor"/>
        ${texto(ex, ey, nombre, 'd-texto d-negrita d-minio', izquierda ? 'end' : 'start')}`
    })
    .join('')
  const nombres = resaltar.map((id) => ORGANOS_MAPA[id]?.etiqueta[2]).filter(Boolean).join(', ')
  return figura(420, 410, `${formas}${etiquetas}`, `Mapa del abdomen con ${nombres} resaltado`, pie, 'mapa')
}

/* ------------------------------------------------------------------ */
/* Algoritmo                                                            */
/* ------------------------------------------------------------------ */

const caja = (x, y, ancho, alto, clase = 'd-caja') => `<rect x="${x}" y="${y}" width="${ancho}" height="${alto}" rx="10" class="${clase}"/>`

/**
 * @param {{ pasos: {texto:string, detalle?:string}[], ramas?: {si:string, texto:string, detalle?:string}[], pie?: string }} opciones
 */
export function algoritmo({ pasos = [], ramas, pie } = {}) {
  let y = 8
  let cuerpo = ''
  pasos.forEach((p, i) => {
    const detalle = envolver(p.detalle, 50)
    const alto = 34 + detalle.length * 16
    cuerpo += caja(30, y, 360, alto, i === 0 ? 'd-caja d-caja-inicio' : 'd-caja')
    cuerpo += texto(210, y + 22, p.texto, 'd-texto d-negrita', 'middle')
    cuerpo += lineas(210, y + 39, detalle, 'd-texto d-peq d-tenue', 'middle', 16)
    y += alto
    if (i < pasos.length - 1 || ramas) {
      cuerpo += flechaAbajo(210, y + 2, y + (ramas && i === pasos.length - 1 ? 14 : 22))
      y += ramas && i === pasos.length - 1 ? 14 : 24
    }
  })
  if (ramas?.length) {
    const n = ramas.length
    const hueco = 10
    const ancho = (400 - hueco * (n - 1)) / n
    const porLinea = Math.floor(ancho / 7.1)
    const textos = ramas.map((r) => envolver(r.texto, porLinea))
    const detalles = ramas.map((r) => envolver(r.detalle, Math.floor(ancho / 6.3)))
    const alto = 18 + Math.max(...textos.map((t) => t.length)) * 16 + Math.max(...detalles.map((d) => d.length)) * 15
    const centros = ramas.map((_, k) => 10 + k * (ancho + hueco) + ancho / 2)
    cuerpo += `<path d="M${centros[0]},${y} H${centros.at(-1)}" class="d-flecha"/>`
    ramas.forEach((r, k) => {
      const x = 10 + k * (ancho + hueco)
      const cx = centros[k]
      cuerpo += flechaAbajo(cx, y, y + 34)
      cuerpo += texto(cx + 8, y + 20, r.si, 'd-texto d-peq d-minio d-negrita')
      cuerpo += caja(x, y + 36, ancho, alto, 'd-caja d-caja-final')
      cuerpo += lineas(cx, y + 56, textos[k], 'd-texto d-negrita', 'middle', 16)
      cuerpo += lineas(cx, y + 56 + textos[k].length * 16, detalles[k], 'd-texto d-peq d-tenue', 'middle', 15)
    })
    y += 36 + alto
  }
  return figura(420, y + 8, cuerpo, `Algoritmo: ${pasos.map((p) => p.texto).join(' → ')}${ramas ? ` → ${ramas.map((r) => `${r.si}: ${r.texto}`).join('; ')}` : ''}`, pie, 'algoritmo')
}

/* ------------------------------------------------------------------ */
/* Escala                                                               */
/* ------------------------------------------------------------------ */

/**
 * @param {{ titulo?: string, niveles: {codigo:string, texto:string, detalle?:string}[], resaltar?: string, pie?: string }} opciones
 */
export function escala({ titulo, niveles = [], resaltar, pie } = {}) {
  let y = titulo ? 26 : 6
  let cuerpo = titulo ? texto(0, 16, titulo, 'd-titular') : ''
  niveles.forEach((n, i) => {
    const t = envolver(n.texto, 44)
    const d = envolver(n.detalle, 50)
    const alto = Math.max(44, 14 + t.length * 16 + d.length * 15)
    const intensidad = niveles.length === 1 ? 1 : i / (niveles.length - 1)
    const tenue = resaltar && resaltar !== n.codigo ? ' tenue' : ''
    cuerpo += `<g class="columna${tenue}">
      <rect x="0" y="${y}" width="74" height="${alto - 6}" rx="10" class="d-nivel" style="--k:${(0.18 + intensidad * 0.82).toFixed(2)}"/>
      ${texto(37, y + (alto - 6) / 2 + 6, n.codigo, intensidad > 0.45 ? 'd-rotulo d-sobre-minio' : 'd-rotulo', 'middle')}
      ${lineas(88, y + 18, t, 'd-texto d-negrita', 'start', 16)}
      ${lineas(88, y + 18 + t.length * 16, d, 'd-texto d-peq d-tenue', 'start', 15)}</g>`
    y += alto
  })
  return figura(420, y + 2, cuerpo, `${titulo ?? 'Escala'}: ${niveles.map((n) => `${n.codigo}, ${n.texto}`).join('; ')}`, pie, 'escala')
}

/* ------------------------------------------------------------------ */
/* Regla de tamaño                                                      */
/* ------------------------------------------------------------------ */

/**
 * @param {{ titulo?: string, unidad?: string, cortes: number[], etiquetas: string[], pie?: string }} opciones
 */
export function regla({ titulo, unidad = 'cm', cortes = [], etiquetas = [], resaltar, pie } = {}) {
  const maximo = Math.ceil((cortes.at(-1) * 1.35) / 5) * 5 || 10
  const x0 = 10
  const ancho = 400
  const px = (v) => x0 + (v / maximo) * ancho
  const y = titulo ? 44 : 26
  const limites = [0, ...cortes, maximo]
  let cuerpo = titulo ? texto(0, 16, titulo, 'd-titular') : ''
  etiquetas.forEach((et, i) => {
    const a = px(limites[i])
    const b = px(limites[i + 1])
    const intensidad = etiquetas.length === 1 ? 1 : i / (etiquetas.length - 1)
    const tenue = resaltar && resaltar !== et ? ' tenue' : ''
    cuerpo += `<g class="columna${tenue}"><rect x="${a}" y="${y}" width="${b - a - 2}" height="30" rx="4" class="d-nivel" style="--k:${(0.18 + intensidad * 0.82).toFixed(2)}"/>
      ${texto((a + b) / 2, y + 20, et, intensidad > 0.45 ? 'd-rotulo d-sobre-minio' : 'd-rotulo', 'middle')}</g>`
  })
  const paso = maximo <= 12 ? 1 : maximo <= 30 ? 5 : 10
  for (let v = 0; v <= maximo; v += paso) cuerpo += `<line x1="${px(v)}" y1="${y + 34}" x2="${px(v)}" y2="${y + 40}" class="d-filete"/>`
  for (const c of cortes) {
    cuerpo += `<line x1="${px(c) - 1}" y1="${y - 6}" x2="${px(c) - 1}" y2="${y + 46}" class="d-corte"/>`
    cuerpo += texto(px(c) - 1, y + 60, `${String(c).replace('.', ',')} ${unidad}`, 'd-rotulo', 'middle')
  }
  cuerpo += texto(px(0), y + 60, '0', 'd-texto d-peq d-tenue', 'start')
  return figura(420, y + 68, cuerpo, `Categorías por tamaño: ${etiquetas.map((e, i) => `${e} hasta ${cortes[i] ?? 'más'}`).join(', ')}`, pie, 'regla')
}

/* ------------------------------------------------------------------ */
/* Cuadro comparativo (HTML, no SVG: se lee mejor y se puede copiar)    */
/* ------------------------------------------------------------------ */

export function comparar({ columnas = [], filas = [], pie } = {}) {
  const cabecera = columnas.map((c, i) => `<th scope="col"${i === 0 ? ' class="vacia"' : ''}>${esc(c)}</th>`).join('')
  const cuerpo = filas.map((f) => `<tr><th scope="row">${esc(f[0])}</th>${f.slice(1).map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')
  return `<figure class="dibujo comparar"><div class="tabla-scroll"><table><thead><tr>${cabecera}</tr></thead><tbody>${cuerpo}</tbody></table></div>${
    pie ? `<figcaption>${esc(pie)}</figcaption>` : ''
  }</figure>`
}

/* ------------------------------------------------------------------ */
/* Cascada: una secuencia que avanza                                    */
/* ------------------------------------------------------------------ */

export function cascada({ pasos = [], pie } = {}) {
  const n = pasos.length
  const desplazamiento = n > 1 ? Math.min(30, 140 / (n - 1)) : 0
  const ancho = 270
  let cuerpo = ''
  pasos.forEach((p, i) => {
    const x = 6 + i * desplazamiento
    const y = 6 + i * 50
    const intensidad = n === 1 ? 1 : i / (n - 1)
    cuerpo += `<rect x="${x}" y="${y}" width="${ancho}" height="38" rx="10" class="d-nivel" style="--k:${(0.14 + intensidad * 0.86).toFixed(2)}"/>
      ${texto(x + 16, y + 24, p, intensidad > 0.5 ? 'd-texto d-negrita d-sobre-minio' : 'd-texto d-negrita')}`
    if (i < n - 1) cuerpo += `<path d="M${x + 30},${y + 38} v12 h${desplazamiento}" class="d-flecha"/><path d="M${x + 30 + desplazamiento - 5},${y + 45} l5,5 l-5,5" class="d-flecha"/>`
  })
  return figura(420, 6 + n * 50, cuerpo, `Secuencia: ${pasos.join(' → ')}`, pie, 'cascada')
}

/* ------------------------------------------------------------------ */
/* Siewert                                                              */
/* ------------------------------------------------------------------ */

export function siewert({ resaltar, pie } = {}) {
  const cm = 22
  const y0 = 130
  const tubo = `M150,0 H190 V${y0} H150 Z`
  const estomago = `M150,${y0} C146,${y0 + 40} 130,${y0 + 80} 100,${y0 + 110} L84,${y0 + 128} L96,${y0 + 160} C150,${y0 + 190} 250,${y0 + 190} 290,${y0 + 140} C318,${y0 + 100} 312,${y0 + 30} 270,${y0 - 6} C236,${y0 - 30} 200,${y0 - 20} 190,${y0} Z`
  const bandas = [
    ['I', -5, -1, '1–5 cm por encima', 'esófago distal'],
    ['II', -1, 2, '1 cm encima – 2 cm debajo', 'cardias'],
    ['III', 2, 5, '2–5 cm por debajo', 'subcardial'],
  ]
  const yDe = (v) => y0 + v * cm
  const tenue = (tipo) => (resaltar && resaltar !== tipo ? ' tenue' : '')
  const medio = (a, b) => (yDe(a) + yDe(b)) / 2
  const franjas = bandas
    .map(([tipo, a, b], i) => `<rect x="60" y="${yDe(a)}" width="248" height="${(b - a) * cm}" class="d-banda d-banda-${i + 1} columna${tenue(tipo)}"/>`)
    .join('')
  const rotulos = bandas
    .map(([tipo, a, b, rango, nombre]) => `<g class="columna${tenue(tipo)}">
        <path d="M318,${yDe(a) + 2} h6 v${(b - a) * cm - 4} h-6" class="d-flecha"/>
        ${texto(332, medio(a, b) - 4, `Tipo ${tipo}`, 'd-texto d-negrita')}
        ${texto(332, medio(a, b) + 11, nombre, 'd-texto d-peq d-tenue')}
        ${texto(54, medio(a, b) + 4, rango, 'd-texto d-peq', 'end')}</g>`)
    .join('')
  const cuerpo = `
    <defs><clipPath id="recorte-siewert"><path d="${tubo}"/><path d="${estomago}"/></clipPath></defs>
    <path d="${estomago}" class="d-estomago"/><path d="${tubo}" class="d-esofago"/>
    <g clip-path="url(#recorte-siewert)">${franjas}</g>
    ${rotulos}
    <line x1="120" y1="${y0}" x2="220" y2="${y0}" class="d-corte"/>
    ${texto(200, 20, 'Esófago', 'd-texto d-tenue')}${texto(200, y0 + 150, 'Estómago', 'd-texto d-tenue')}
    ${texto(226, y0 + 4, 'unión', 'd-texto d-peq d-negrita')}`
  return figura(420, y0 + 200, cuerpo, 'Clasificación de Siewert: tipo I de 1 a 5 cm por encima de la unión, tipo II de 1 cm por encima a 2 cm por debajo, tipo III de 2 a 5 cm por debajo', pie, 'siewert')
}

/* ------------------------------------------------------------------ */
/* Bismuth–Corlette                                                     */
/* ------------------------------------------------------------------ */

const ARBOL = 'M65,118 V64 M65,64 L30,22 M65,64 L100,22 M30,22 L18,6 M30,22 L34,4 M100,22 L112,6 M100,22 L96,4'
const TRAMOS = {
  comun: 'M65,104 V74',
  confluencia: 'M65,80 V60 M65,64 L56,53 M65,64 L74,53',
  derecho: 'M65,64 L36,29',
  izquierdo: 'M65,64 L94,29',
}
const TIPOS_BISMUTH = [
  ['I', ['comun'], 'Hepático común'],
  ['II', ['confluencia'], 'Confluencia'],
  ['IIIa', ['confluencia', 'derecho'], 'Y hepático derecho'],
  ['IIIb', ['confluencia', 'izquierdo'], 'Y hepático izquierdo'],
  ['IV', ['confluencia', 'derecho', 'izquierdo'], 'Los dos hepáticos'],
]

export function bismuth({ resaltar, pie } = {}) {
  const panel = ([tipo, tramos, nombre], i) => {
    const x = (i % 3) * 140 + (i >= 3 ? 70 : 0)
    const y = Math.floor(i / 3) * 170
    const tenue = resaltar && resaltar !== tipo ? ' tenue' : ''
    return `<g class="columna${tenue}" transform="translate(${x + 5},${y})">
      <path d="${ARBOL}" class="d-conducto"/>
      ${tramos.map((t) => `<path d="${TRAMOS[t]}" class="d-conducto-tumor"/>`).join('')}
      ${texto(65, 140, tipo, 'd-titular', 'middle')}${texto(65, 157, nombre, 'd-texto d-peq d-tenue', 'middle')}
      ${i === 0 ? `${texto(4, 44, 'der.', 'd-texto d-peq d-tenue', 'start')}${texto(126, 44, 'izq.', 'd-texto d-peq d-tenue', 'end')}` : ''}</g>`
  }
  return figura(420, 336, TIPOS_BISMUTH.map(panel).join(''), 'Clasificación de Bismuth–Corlette del colangiocarcinoma perihiliar: I hepático común, II confluencia, IIIa y hepático derecho, IIIb y hepático izquierdo, IV ambos hepáticos', pie ?? 'Visto de frente: el lado derecho del paciente queda a la izquierda.', 'bismuth')
}

/* ------------------------------------------------------------------ */
/* Segmentos de Couinaud                                                */
/* ------------------------------------------------------------------ */

const HIGADO = 'M30,70 C40,30 120,18 220,22 C300,24 380,40 400,70 C404,90 380,106 340,122 C290,142 230,170 170,178 C110,184 50,168 34,130 C26,110 26,88 30,70 Z'
const SEGMENTOS = [
  [7, 'M0,0 H110 V100 H0Z', 64, 70],
  [6, 'M0,100 H110 V200 H0Z', 64, 150],
  [8, 'M110,0 H200 V100 H110Z', 156, 62],
  [5, 'M110,100 H200 V200 H110Z', 156, 145],
  [4, 'M200,0 H275 V200 H200Z', 238, 74],
  [2, 'M275,0 H420 V80 L275,112Z', 336, 62],
  [3, 'M275,112 L420,80 V200 H275Z', 312, 128],
]

export function couinaud({ resaltar = [], pie } = {}) {
  const lista = [resaltar].flat().map(Number)
  const zonas = SEGMENTOS.map(([n, d]) => `<path d="${d}" class="d-segmento${lista.includes(n) ? ' activo' : ''}"/>`).join('')
  const numeros = SEGMENTOS.map(([n, , x, y]) => texto(x, y, String(n), lista.includes(n) ? 'd-titular d-minio' : 'd-titular', 'middle')).join('')
  const uno = `<ellipse cx="220" cy="112" rx="17" ry="12" class="d-segmento d-caudado${lista.includes(1) ? ' activo' : ''}"/>${texto(220, 118, '1', lista.includes(1) ? 'd-rotulo d-minio' : 'd-rotulo', 'middle')}`
  const cuerpo = `
    <defs><clipPath id="recorte-higado"><path d="${HIGADO}"/></clipPath></defs>
    <g clip-path="url(#recorte-higado)">${zonas}</g>
    <path d="${HIGADO}" class="d-contorno"/>
    <line x1="200" y1="10" x2="200" y2="196" class="d-corte"/>
    ${numeros}${uno}
    ${texto(110, 214, 'Hígado derecho: 5, 6, 7, 8', 'd-texto d-peq', 'middle')}
    ${texto(316, 214, 'Hígado izquierdo: 2, 3, 4', 'd-texto d-peq', 'middle')}
    ${texto(200, 232, 'Línea de Cantlie (vena suprahepática media)', 'd-texto d-peq d-tenue', 'middle')}`
  return figura(420, 240, cuerpo, `Segmentos hepáticos de Couinaud${lista.length ? `, resaltados ${lista.join(', ')}` : ''}`, pie, 'couinaud')
}

/* ------------------------------------------------------------------ */
/* PCI de Sugarbaker                                                    */
/* ------------------------------------------------------------------ */

const REGIONES_PCI = [
  [1, 0, 0, 'Hipoc. dcho.'], [2, 1, 0, 'Epigastrio'], [3, 2, 0, 'Hipoc. izdo.'],
  [8, 0, 1, 'Flanco dcho.'], [0, 1, 1, 'Central'], [4, 2, 1, 'Flanco izdo.'],
  [7, 0, 2, 'Ilíaca dcha.'], [6, 1, 2, 'Pelvis'], [5, 2, 2, 'Ilíaca izda.'],
]

export function pci({ pie } = {}) {
  const lado = 82
  const regiones = REGIONES_PCI.map(([n, c, f, nombre]) => {
    const x = 6 + c * lado
    const y = 6 + f * lado
    return `<rect x="${x}" y="${y}" width="${lado - 4}" height="${lado - 4}" rx="8" class="d-caja"/>
      ${texto(x + (lado - 4) / 2, y + 40, String(n), 'd-titular', 'middle')}
      ${texto(x + (lado - 4) / 2, y + 60, nombre, 'd-texto d-mini d-tenue', 'middle')}`
  }).join('')
  const delgado = [[9, 'Yeyuno alto'], [10, 'Yeyuno bajo'], [11, 'Íleon alto'], [12, 'Íleon bajo']]
    .map(([n, nombre], i) => {
      const y = 6 + i * 61
      return `<rect x="268" y="${y}" width="146" height="55" rx="8" class="d-caja d-caja-opcional"/>
        ${texto(290, y + 34, String(n), 'd-titular', 'middle')}${texto(310, y + 32, nombre, 'd-texto d-peq')}`
    }).join('')
  const tamanos = [['LS 0', 'nada'], ['LS 1', '≤ 0,5 cm'], ['LS 2', '≤ 5 cm'], ['LS 3', '> 5 cm']]
    .map(([c, t], i) => `${texto(6 + i * 104, 280, c, 'd-rotulo d-minio')}${texto(54 + i * 104, 280, t, 'd-texto d-peq')}`)
    .join('')
  const cuerpo = `${regiones}${delgado}${tamanos}
    ${texto(210, 306, '13 regiones × 0–3 puntos = PCI de 0 a 39', 'd-texto d-negrita', 'middle')}`
  return figura(420, 316, cuerpo, 'Índice de carcinomatosis peritoneal: 13 regiones, de 0 a 12, cada una puntuada de 0 a 3 según el tamaño del implante mayor; total de 0 a 39', pie, 'pci')
}

/* ------------------------------------------------------------------ */
/* Escala de la N para «TNM puro»                                        */
/* ------------------------------------------------------------------ */

/** @param {[string, string, string][]} categorias [código, definición, corto] */
export function escalaN({ categorias = [], pie } = {}) {
  const n = categorias.length
  const ancho = 400 / n
  const cuerpo = categorias
    .map(([c, , corto], i) => {
      const x = 10 + i * ancho
      const intensidad = n === 1 ? 1 : i / (n - 1)
      const t = envolver(corto ?? '', Math.max(8, Math.floor(ancho / 6.6)))
      return `<rect x="${x}" y="6" width="${ancho - 4}" height="32" rx="6" class="d-nivel" style="--k:${(0.12 + intensidad * 0.88).toFixed(2)}"/>
        ${texto(x + (ancho - 4) / 2, 27, c, intensidad > 0.45 ? 'd-rotulo d-sobre-minio' : 'd-rotulo', 'middle')}
        ${lineas(x + (ancho - 4) / 2, 56, t, 'd-texto d-peq', 'middle', 14)}`
    })
    .join('')
  const filas = Math.max(...categorias.map(([, , corto]) => envolver(corto ?? '', Math.max(8, Math.floor(ancho / 6.6))).length))
  return figura(420, 50 + filas * 14, cuerpo, `Categorías N: ${categorias.map(([c, , k]) => `${c} ${k}`).join(', ')}`, pie, 'escala-n')
}

/** Despacha los tipos de este módulo; devuelve '' si no es uno de ellos. */
export function dibujoEsquema({ tipo, ...o }) {
  const tipos = { mapa, algoritmo, escala, regla, comparar, cascada, siewert, bismuth, couinaud, pci, escalaN }
  return tipos[tipo] ? tipos[tipo](o) : ''
}
