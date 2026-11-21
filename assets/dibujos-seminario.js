/**
 * Ilustraciones propias del seminario: una por idea, para que ninguna carta
 * se quede en solo texto.
 */
import { figura, texto, lineas, flechaAbajo, envolver } from './dibujos-base.js'

/* Una pared en miniatura: mucosa, submucosa, muscular y grasa. */
const MINI = [
  ['c-mucosa', 18],
  ['c-sm', 18],
  ['c-mp', 30],
  ['c-ss', 22],
]
function paredMini(x, y, ancho) {
  let yy = y
  return MINI.map(([clase, alto]) => {
    const r = `<rect x="${x}" y="${yy}" width="${ancho}" height="${alto}" class="${clase}"/>`
    yy += alto
    return r
  }).join('')
}
const ALTO_MINI = MINI.reduce((s, [, a]) => s + a, 0)

/* ------------------------------------------------------------------ */

export function dukes() {
  const paneles = [
    ['A', 'En la pared', 58, false],
    ['B', 'Atraviesa la pared', 100, false],
    ['C', 'Llega a los ganglios', 100, true],
  ]
  const cuerpo = paneles
    .map(([letra, rotulo, fondo, ganglios], i) => {
      const x = i * 140 + 10
      return `${texto(x + 60, 22, letra, 'd-titular', 'middle')}
        ${paredMini(x, 34, 120)}
        <rect x="${x + 42}" y="28" width="36" height="${fondo}" rx="14" class="d-tumor"/>
        ${ganglios ? `<circle cx="${x + 30}" cy="${34 + ALTO_MINI + 22}" r="8" class="d-ganglio-pos"/><circle cx="${x + 60}" cy="${34 + ALTO_MINI + 26}" r="8" class="d-ganglio"/><circle cx="${x + 90}" cy="${34 + ALTO_MINI + 22}" r="8" class="d-ganglio-pos"/>` : ''}
        ${texto(x + 60, 34 + ALTO_MINI + 58, rotulo, 'd-texto d-negrita', 'middle')}`
    })
    .join('')
  return figura(420, 34 + ALTO_MINI + 66, cuerpo, 'Clasificación de Dukes: A en la pared, B atraviesa la pared, C llega a los ganglios', 'La misma idea que el TNM, cuarenta años antes: primero la profundidad, después los ganglios.')
}

export function triada() {
  const iconos = [
    ['T', 'Tumor primario', 'hasta dónde llega', `${paredMini(22, 92, 96)}<rect x="56" y="86" width="28" height="56" rx="12" class="d-tumor"/>`],
    ['N', 'Ganglios', 'cuántos tienen tumor', '<path d="M162,110 Q210,90 258,110" class="d-filete"/><circle cx="170" cy="108" r="9" class="d-ganglio-pos"/><circle cx="210" cy="98" r="9" class="d-ganglio"/><circle cx="250" cy="108" r="9" class="d-ganglio-pos"/><circle cx="190" cy="134" r="9" class="d-ganglio"/><circle cx="232" cy="134" r="9" class="d-ganglio"/>'],
    ['M', 'Metástasis', 'si ha llegado lejos', '<circle cx="350" cy="84" r="10" class="d-cuerpo"/><rect x="330" y="98" width="40" height="66" rx="16" class="d-cuerpo"/><circle cx="342" cy="118" r="6" class="d-tumor"/><circle cx="358" cy="146" r="4" class="d-tumor"/>'],
  ]
  const cuerpo = iconos
    .map(([letra, nombre, detalle, dibujo], i) => {
      const cx = 70 + i * 140
      return `${texto(cx, 50, letra, 'd-letra', 'middle')}${dibujo}
        ${texto(cx, 190, nombre, 'd-texto d-negrita', 'middle')}${texto(cx, 207, detalle, 'd-texto d-peq d-tenue', 'middle')}`
    })
    .join('')
  return figura(420, 216, cuerpo, 'Las tres letras: T tumor primario, N ganglios, M metástasis a distancia')
}

export function editores() {
  const cuerpo = `
    <rect x="10" y="10" width="180" height="66" rx="12" class="d-caja"/>
    ${texto(100, 36, 'UICC · Ginebra', 'd-texto d-negrita', 'middle')}${texto(100, 56, '1968: el librito de bolsillo', 'd-texto d-peq d-tenue', 'middle')}
    <rect x="230" y="10" width="180" height="66" rx="12" class="d-caja"/>
    ${texto(320, 36, 'AJCC · Estados Unidos', 'd-texto d-negrita', 'middle')}${texto(320, 56, '1977: el primer manual', 'd-texto d-peq d-tenue', 'middle')}
    <path d="M100,78 C100,110 200,104 206,128" class="d-flecha"/><path d="M320,78 C320,110 220,104 214,128" class="d-flecha"/>
    <path d="M204,122 l6,8 l6,-8" class="d-flecha"/>
    <rect x="110" y="134" width="200" height="58" rx="29" class="d-sello"/>
    ${texto(210, 160, 'Un solo TNM', 'd-titular d-sobre-minio', 'middle')}${texto(210, 179, 'desde 1987', 'd-texto d-peq d-sobre-minio', 'middle')}`
  return figura(420, 200, cuerpo, 'UICC y AJCC publican cada una su libro y en 1987 unifican las definiciones: un solo TNM con dos editores')
}

export function ediciones() {
  const cuerpo = `
    <rect x="10" y="10" width="170" height="70" rx="14" class="d-caja d-caja-inicio"/>
    ${texto(95, 40, 'AJCC 8.ª', 'd-titular', 'middle')}${texto(95, 62, '2017, en vigor 2018', 'd-texto d-peq d-tenue', 'middle')}
    ${texto(210, 54, '=', 'd-letra', 'middle')}
    <rect x="240" y="10" width="170" height="70" rx="14" class="d-caja d-caja-inicio"/>
    ${texto(325, 40, 'UICC 9.ª', 'd-titular', 'middle')}${texto(325, 62, '2025, en vigor 2026', 'd-texto d-peq d-tenue', 'middle')}
    ${texto(210, 104, 'Para estómago y colon dicen exactamente lo mismo', 'd-texto d-negrita', 'middle')}
    <rect x="70" y="122" width="280" height="54" rx="14" class="d-caja-opcional"/>
    ${texto(210, 145, 'UICC-9.1 · colon y recto · 2027', 'd-texto', 'middle')}${texto(210, 163, 'publicada, pero todavía no se usa', 'd-texto d-peq d-minio', 'middle')}`
  return figura(420, 184, cuerpo, 'Hoy: AJCC 8.ª igual a UICC 9.ª para estómago y colon. La revisión de colon de 2027 está publicada pero no en vigor')
}

export function tamano() {
  const capas = (x) => paredMini(x, 40, 180)
  const cuerpo = `
    ${capas(10)}<rect x="22" y="32" width="156" height="30" rx="12" class="d-tumor"/>
    ${texto(100, 22, '6 cm, pero superficial', 'd-texto d-negrita', 'middle')}
    ${texto(100, 40 + ALTO_MINI + 26, 'T1', 'd-titular d-minio', 'middle')}
    ${capas(230)}<rect x="304" y="32" width="32" height="${ALTO_MINI + 8}" rx="12" class="d-tumor"/>
    ${texto(320, 22, '2 cm, pero profundo', 'd-texto d-negrita', 'middle')}
    ${texto(320, 40 + ALTO_MINI + 26, 'T4', 'd-titular d-minio', 'middle')}`
  return figura(420, 40 + ALTO_MINI + 36, cuerpo, 'Un tumor de 6 cm superficial es T1 y uno de 2 cm que atraviesa la pared es T4: en estómago y colon la T es profundidad, no tamaño')
}

export function territorio() {
  const anillo = [0, 45, 90, 135, 180, 225, 270, 315]
    .map((g, i) => {
      const r = 74
      const x = 150 + r * Math.cos((g * Math.PI) / 180)
      const y = 110 + r * Math.sin((g * Math.PI) / 180)
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="8" class="${i === 1 || i === 4 ? 'd-ganglio-pos' : 'd-ganglio'}"/>`
    })
    .join('')
  const cuerpo = `
    <circle cx="150" cy="110" r="92" class="d-peritoneo"/>
    <ellipse cx="150" cy="110" rx="46" ry="34" class="d-organo"/><ellipse cx="164" cy="104" rx="14" ry="11" class="d-tumor"/>
    ${anillo}
    <line x1="300" y1="20" x2="300" y2="210" class="d-aorta"/>
    <circle cx="316" cy="150" r="8" class="d-ganglio-pos"/>
    ${texto(150, 232, 'Territorio regional → N', 'd-texto d-negrita', 'middle')}
    ${texto(330, 154, 'Fuera del territorio', 'd-texto d-peq')}${texto(330, 170, '→ M1', 'd-texto d-negrita d-minio')}
    ${texto(306, 18, 'aorta', 'd-texto d-peq d-tenue')}`
  return figura(420, 240, cuerpo, 'Los ganglios del territorio regional cuentan como N; un ganglio afectado fuera de ese territorio, por ejemplo junto a la aorta, es M1')
}

export function duda() {
  const cuerpo = `
    <path d="M210,40 V180 M170,180 H250" class="d-balanza"/>
    <path d="M90,74 L330,46" class="d-balanza"/>
    <path d="M90,74 l-34,52 h68z" class="d-platillo"/><path d="M330,46 l-34,52 h68z" class="d-platillo"/>
    ${texto(90, 120, 'T2', 'd-titular d-minio', 'middle')}${texto(330, 92, 'T3', 'd-titular', 'middle')}
    <circle cx="210" cy="60" r="7" class="d-hito"/>
    ${texto(210, 206, 'En la duda, la categoría menor', 'd-texto d-negrita', 'middle')}`
  return figura(420, 214, cuerpo, 'Balanza entre T2 y T3 que se inclina hacia T2: en caso de duda se elige la categoría menos avanzada')
}

export function escalera() {
  const peldanos = [
    ['0', 'in situ'],
    ['I', 'en la pared'],
    ['II', 'atraviesa la pared'],
    ['III', 'ganglios'],
    ['IV', 'metástasis'],
  ]
  const cuerpo = peldanos
    .map(([e, t], i) => {
      const alto = 30 + i * 32
      const x = 8 + i * 82
      return `<rect x="${x}" y="${190 - alto}" width="78" height="${alto}" rx="8" class="d-nivel" style="--k:${(0.15 + i * 0.21).toFixed(2)}"/>
        ${texto(x + 39, 190 - alto + 26, e, i >= 2 ? 'd-titular d-sobre-minio' : 'd-titular', 'middle')}
        ${lineas(x + 39, 210, envolver(t, 11), 'd-texto d-peq', 'middle', 14)}`
    })
    .join('')
  return figura(420, 236, cuerpo, 'Escalera de estadios del 0 al IV', 'Así es en el colon. Otras tablas, como la del estómago, mezclan más la T y la N, pero la idea es la misma.')
}

const PRUEBAS = {
  estomago: [
    ['Endoscopia con biopsia', 'diagnóstico', ''],
    ['Ecoendoscopia', 'T y N en tumores precoces', 'TN'],
    ['TAC de tórax, abdomen y pelvis', 'ganglios y metástasis', 'NM'],
    ['Laparoscopia con lavado', 'peritoneo que el TAC no ve', 'M'],
  ],
  colon: [
    ['Colonoscopia completa con biopsia', 'diagnóstico y otros tumores', ''],
    ['MMR / MSI en la biopsia', 'Lynch y tratamiento', ''],
    ['TAC de tórax, abdomen y pelvis', 'ganglios y metástasis', 'NM'],
    ['CEA', 'valor de partida para el seguimiento', ''],
  ],
}

export function pruebas({ organo = 'estomago', resaltar } = {}) {
  const cuerpo = PRUEBAS[organo]
    .map(([nombre, para, letras], i) => {
      const y = 6 + i * 56
      const marcada = resaltar !== undefined && resaltar === i
      return `<rect x="6" y="${y}" width="408" height="48" rx="12" class="${marcada ? 'd-caja d-caja-final' : 'd-caja'}"/>
        ${texto(20, y + 21, nombre, 'd-texto d-negrita')}${texto(20, y + 38, para, 'd-texto d-peq d-tenue')}
        ${[...letras].map((l, k) => `<circle cx="${382 - (letras.length - 1 - k) * 30}" cy="${y + 24}" r="12" class="d-sello"/>${texto(382 - (letras.length - 1 - k) * 30, y + 29, l, 'd-rotulo d-sobre-minio', 'middle')}`).join('')}`
    })
    .join('')
  return figura(420, 6 + PRUEBAS[organo].length * 56, cuerpo, `Pruebas de estadificación del cáncer de ${organo === 'colon' ? 'colon' : 'estómago'} y qué letra del TNM valora cada una`)
}

export function dosTablas() {
  const ganglio = (x, y, pos) => `<circle cx="${x}" cy="${y}" r="9" class="${pos ? 'd-ganglio-pos' : 'd-ganglio'}"/>`
  const cuerpo = `
    <rect x="6" y="6" width="196" height="170" rx="14" class="d-caja"/>
    ${texto(104, 32, 'Antes de operar', 'd-texto d-negrita', 'middle')}${texto(104, 50, 'cTNM', 'd-rotulo d-minio', 'middle')}
    ${ganglio(60, 90, false)}${texto(60, 124, 'cN0', 'd-rotulo', 'middle')}
    ${ganglio(148, 90, true)}${texto(148, 124, 'cN+', 'd-rotulo', 'middle')}
    ${texto(104, 156, '¿hay ganglios o no?', 'd-texto d-peq d-tenue', 'middle')}
    <rect x="218" y="6" width="196" height="170" rx="14" class="d-caja"/>
    ${texto(316, 32, 'Con la pieza', 'd-texto d-negrita', 'middle')}${texto(316, 50, 'pTNM', 'd-rotulo d-minio', 'middle')}
    ${[...Array(12)].map((_, i) => ganglio(246 + (i % 6) * 28, 78 + Math.floor(i / 6) * 26, i < 5)).join('')}
    ${texto(316, 140, '5 de 12 → N2', 'd-rotulo', 'middle')}
    ${texto(316, 156, 'se cuentan uno a uno', 'd-texto d-peq d-tenue', 'middle')}`
  return figura(420, 184, cuerpo, 'Antes de operar solo se sabe si hay ganglios o no (cN0 o cN+); con la pieza se cuentan: 5 de 12 es N2 en el estómago')
}

export function diseccion() {
  const criterios = ['T1a: no pasa de la mucosa', 'Bien diferenciado (intestinal)', '2 cm o menos', 'Sin úlcera']
  const cuerpo = criterios
    .map((c, i) => {
      const y = 8 + i * 40
      return `<circle cx="22" cy="${y + 14}" r="12" class="d-check"/><path d="M16,${y + 14} l5,5 l9,-10" class="d-check-marca"/>${texto(44, y + 19, c, 'd-texto')}`
    })
    .join('')
  const y = 8 + criterios.length * 40
  return figura(420, y + 64, `${cuerpo}${flechaAbajo(22, y, y + 16)}
    <rect x="6" y="${y + 18}" width="300" height="40" rx="20" class="d-sello"/>${texto(156, y + 43, 'Resección endoscópica', 'd-texto d-negrita d-sobre-minio', 'middle')}`,
  'Criterios clásicos de resección endoscópica del cáncer gástrico precoz: T1a, bien diferenciado, 2 cm o menos y sin úlcera')
}

export function perioperatorio() {
  const tramos = [
    ['Quimioterapia', '4 ciclos (FLOT)', 'd-caja'],
    ['Gastrectomía D2', 'la pieza da el ypTNM', 'd-sello'],
    ['Quimioterapia', '4 ciclos', 'd-caja'],
  ]
  const cuerpo = tramos
    .map(([t, d, clase], i) => {
      const x = 6 + i * 140
      const fuerte = clase === 'd-sello'
      return `<rect x="${x}" y="20" width="128" height="62" rx="12" class="${clase}"/>
        ${texto(x + 64, 46, t, `d-texto d-negrita${fuerte ? ' d-sobre-minio' : ''}`, 'middle')}${texto(x + 64, 66, d, `d-texto d-peq${fuerte ? ' d-sobre-minio' : ' d-tenue'}`, 'middle')}
        ${i < 2 ? `<path d="M${x + 129},51 h10 m-5,-5 l5,5 l-5,5" class="d-flecha"/>` : ''}`
    })
    .join('')
  return figura(420, 92, `${texto(6, 12, 'Antes', 'd-texto d-peq d-tenue')}${texto(414, 12, 'Después', 'd-texto d-peq d-tenue', 'end')}${cuerpo}`, 'Tratamiento perioperatorio: quimioterapia, gastrectomía D2 y más quimioterapia')
}

/** Despacha los tipos de este módulo; devuelve '' si no es uno de ellos. */
export function dibujoSeminario({ tipo, ...o }) {
  const tipos = { dukes, triada, editores, ediciones, tamano, territorio, duda, escalera, pruebas, dosTablas, diseccion, perioperatorio }
  return tipos[tipo] ? tipos[tipo](o) : ''
}
