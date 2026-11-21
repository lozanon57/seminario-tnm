/**
 * Ilustraciones del seminario, en SVG dentro de la página: se ven nítidas en el
 * proyector y siguen el tema claro u oscuro, porque los colores salen de las
 * clases de estilo.css y no van escritos aquí. Todas tienen viewBox de unos 420
 * de ancho para que la letra se lea en un móvil.
 */
import { nEstomago, nColon } from './estadios.js'
import { esc, figura, texto } from './dibujos-base.js'
import { dibujoEsquema } from './dibujos-esquemas.js'
import { dibujoSeminario } from './dibujos-seminario.js'

/* ------------------------------------------------------------------ */
/* La pared del tubo digestivo y hasta dónde llega cada T              */
/* ------------------------------------------------------------------ */

const MUCOSA = [
  { id: 'epi', nombre: 'Epitelio', alto: 10, clase: 'c-mucosa' },
  { id: 'lp', nombre: 'Lámina propia', alto: 22, clase: 'c-mucosa' },
]
const HUECO = { id: 'hueco', nombre: '', alto: 12, clase: '' }

function capas(organo) {
  if (organo === 'vesicula') {
    return [
      ...MUCOSA,
      { id: 'mus', nombre: 'Capa muscular', alto: 36, clase: 'c-mp' },
      { id: 'pm', nombre: 'Tejido perimuscular', alto: 34, clase: 'c-ss' },
      { id: 'serosa', nombre: 'Serosa o lecho', alto: 7, clase: 'c-serosa' },
      HUECO,
      { id: 'vecino', nombre: 'Hígado u órgano', alto: 30, clase: 'c-vecino' },
    ]
  }
  const pared = [
    ...MUCOSA,
    { id: 'mm', nombre: 'Muscularis mucosae', alto: 9, clase: 'c-mm' },
    { id: 'sm', nombre: 'Submucosa', alto: 36, clase: 'c-sm' },
    { id: 'mp', nombre: 'Muscular propia', alto: 44, clase: 'c-mp' },
  ]
  if (organo === 'esofago') {
    return [
      ...pared,
      { id: 'ss', nombre: 'Adventicia', alto: 34, clase: 'c-ss' },
      HUECO,
      { id: 'vecino', nombre: 'Pleura, pericardio', alto: 24, clase: 'c-vecino' },
      { id: 'vecino2', nombre: 'Aorta, tráquea', alto: 24, clase: 'c-vecino-2' },
    ]
  }
  const externa = { colon: 'Grasa pericólica', delgado: 'Subserosa' }[organo] ?? 'Subserosa'
  return [
    ...pared,
    { id: 'ss', nombre: externa, alto: 30, clase: 'c-ss' },
    { id: 'serosa', nombre: 'Serosa', alto: 7, clase: 'c-serosa' },
    HUECO,
    { id: 'vecino', nombre: 'Órgano vecino', alto: 30, clase: 'c-vecino' },
  ]
}

/** Profundidad de cada T: [capa, fracción de esa capa que alcanza]. */
const PROFUNDIDAD = {
  estomago: { Tis: ['epi', 1], T1a: ['mm', 0.8], T1b: ['sm', 0.55], T2: ['mp', 0.55], T3: ['ss', 0.6], T4a: ['hueco', 0.6], T4b: ['vecino', 0.55] },
  colon: { Tis: ['lp', 0.8], T1: ['sm', 0.55], T2: ['mp', 0.55], T3: ['ss', 0.6], T4a: ['hueco', 0.6], T4b: ['vecino', 0.55] },
  delgado: { Tis: ['epi', 1], T1a: ['lp', 0.8], T1b: ['sm', 0.55], T2: ['mp', 0.55], T3: ['ss', 0.6], T4: ['vecino', 0.45] },
  esofago: { Tis: ['epi', 1], T1a: ['mm', 0.8], T1b: ['sm', 0.55], T2: ['mp', 0.55], T3: ['ss', 0.6], T4a: ['vecino', 0.6], T4b: ['vecino2', 0.6] },
  vesicula: { Tis: ['epi', 1], T1a: ['lp', 0.8], T1b: ['mus', 0.55], T2: ['pm', 0.6], T3: ['vecino', 0.5] },
}

const NOMBRE_PARED = { estomago: 'estómago', colon: 'colon', delgado: 'intestino delgado', esofago: 'esófago', vesicula: 'vesícula' }

/**
* @param {'estomago'|'colon'|'delgado'|'esofago'|'vesicula'} organo
 * @param {{ resaltar?: string, pie?: string }} [opciones]
 */
export function pared(organo, { resaltar: pedido, pie } = {}) {
  const lista = capas(organo)
  const claves = Object.keys(PROFUNDIDAD[organo])
  const resaltar = claves.includes(pedido) ? pedido : claves.find((k) => pedido?.startsWith(k))
  const y0 = 46
  let y = y0
  const pos = {}
  for (const c of lista) {
    pos[c.id] = { y, alto: c.alto }
    y += c.alto
  }
  const izquierda = 122
  const derecha = 416
  const bandas = lista
    .filter((c) => c.clase)
    .map(
      (c) => `<rect x="${izquierda}" y="${pos[c.id].y}" width="${derecha - izquierda}" height="${c.alto}" class="${c.clase}"/>
        ${texto(izquierda - 6, pos[c.id].y + c.alto / 2 + 4, c.nombre, 'd-texto d-peq', 'end')}`,
    )
    .join('')
  const ts = Object.keys(PROFUNDIDAD[organo])
  const anchoCol = (derecha - izquierda) / ts.length
  const tumores = ts
    .map((t, i) => {
      const [capa, fraccion] = PROFUNDIDAD[organo][t]
      const fondo = pos[capa].y + pos[capa].alto * fraccion
      const cx = izquierda + anchoCol * (i + 0.5)
      const ancho = anchoCol * 0.52
      const tenue = resaltar && resaltar !== t ? ' tenue' : ''
      const etiqueta = resaltar === t ? 'd-rotulo d-minio' : 'd-rotulo'
      return `<g class="columna${tenue}">
        <rect x="${cx - ancho / 2}" y="${y0 - 9}" width="${ancho}" height="${fondo - y0 + 9}" rx="${ancho / 2.6}" class="d-tumor"/>
        ${texto(cx, 24, t, etiqueta, 'middle')}</g>`
    })
    .join('')
  const alto = y + 8
  const descripcion = `Corte de la pared de ${NOMBRE_PARED[organo]} con la profundidad que alcanza cada categoría T`
  return figura(
    420,
    alto,
    `${texto(izquierda - 6, 40, 'Luz', 'd-texto d-peq d-tenue', 'end')}
     <line x1="${izquierda}" y1="${y0}" x2="${derecha}" y2="${y0}" class="d-filete"/>
     ${bandas}${tumores}`,
    descripcion,
    pie,
  )
}

/* ------------------------------------------------------------------ */
/* Ganglios: los que hay, los positivos y en qué N cae la cuenta        */
/* ------------------------------------------------------------------ */

const ESCALAS = {
  estomago: [
    ['N0', '0', 46],
    ['N1', '1–2', 62],
    ['N2', '3–6', 76],
    ['N3a', '7–15', 104],
    ['N3b', '16 o más', 96],
  ],
  colon: [
    ['N0', '0', 46],
    ['N1a', '1', 56],
    ['N1b', '2–3', 70],
    ['N2a', '4–6', 92],
    ['N2b', '7 o más', 120],
  ],
}

/**
 * @param {'estomago'|'colon'} organo
 * @param {{ positivos?: number, total?: number, depositos?: number, pie?: string }} [caso]
 */
export function ganglios(organo, { positivos, total, depositos = 0, pie } = {}) {
  const hayCaso = Number.isInteger(total)
  const categoria =
    positivos === undefined ? null : organo === 'colon' ? nColon(positivos, depositos) : nEstomago(positivos)
  let y = 12
  let cuerpo = ''

  if (hayCaso) {
    const porFila = 16
    const paso = 23
    for (let i = 0; i < total; i++) {
      const cx = 22 + (i % porFila) * paso
      const cy = y + 10 + Math.floor(i / porFila) * paso
      cuerpo += `<circle cx="${cx}" cy="${cy}" r="8" class="${i < positivos ? 'd-ganglio-pos' : 'd-ganglio'}"/>`
    }
    y += 10 + Math.ceil(total / porFila) * paso
    if (depositos) {
      for (let i = 0; i < depositos; i++) {
        const cx = 22 + i * 30
        cuerpo += `<path d="M${cx - 9},${y + 6} q5,-9 11,-4 q8,-2 7,6 q4,7 -4,9 q-6,6 -11,0 q-8,-3 -3,-11z" class="d-deposito"/>`
      }
      cuerpo += texto(22 + depositos * 30, y + 11, `${depositos} depósitos tumorales (no son ganglios)`, 'd-texto d-peq')
      y += 28
    }
    cuerpo += texto(12, y + 12, `${positivos} positivo${positivos === 1 ? '' : 's'} de ${total} ganglios examinados`, 'd-texto')
    y += 26
  }

  let x = 12
  const altoBarra = 30
  for (const [n, rango, ancho] of ESCALAS[organo]) {
    const activo = n === categoria || (categoria === 'N1c' && n === 'N0')
    const clase = n === categoria ? 'd-escala activa' : 'd-escala'
    cuerpo += `<rect x="${x}" y="${y}" width="${ancho - 3}" height="${altoBarra}" rx="3" class="${clase}"/>
      ${texto(x + (ancho - 3) / 2, y + 20, n, n === categoria ? 'd-rotulo d-sobre-minio' : 'd-rotulo', 'middle')}
      ${texto(x + (ancho - 3) / 2, y + altoBarra + 16, rango, activo && categoria !== 'N1c' ? 'd-texto d-peq d-minio' : 'd-texto d-peq d-tenue', 'middle')}`
    x += ancho
  }
  y += altoBarra + 24
  const notaMinimo = organo === 'colon' ? 'Mínimo: 12 ganglios examinados.' : 'Mínimo: 16 ganglios examinados.'
  cuerpo += texto(12, y + 10, notaMinimo, 'd-texto d-peq d-tenue')
  if (organo === 'colon') {
    cuerpo += texto(12, y + 28, categoria === 'N1c' ? 'Ningún ganglio positivo, pero hay depósitos → N1c' : 'Sin ganglios positivos y con depósitos tumorales → N1c', categoria === 'N1c' ? 'd-texto d-peq d-minio' : 'd-texto d-peq d-tenue')
    y += 18
  }
  const descripcion = hayCaso
    ? `${positivos} ganglios positivos de ${total}${depositos ? ` y ${depositos} depósitos` : ''}: categoría ${categoria}`
    : `Escala de la categoría N en ${organo === 'colon' ? 'colon' : 'estómago'} según el número de ganglios positivos`
  return figura(420, y + 18, cuerpo, descripcion, pie)
}

/* ------------------------------------------------------------------ */
/* Metástasis: dónde                                                    */
/* ------------------------------------------------------------------ */

/** Categoría M a partir de los sitios afectados. */
export function categoriaM(organo, sitios) {
  if (!sitios.length) return 'M0'
  if (organo !== 'colon') return 'M1'
  if (sitios.includes('peritoneo')) return 'M1c'
  return sitios.filter((s) => s !== 'citologia').length >= 2 ? 'M1b' : 'M1a'
}

/**
 * @param {'estomago'|'colon'} organo
 * @param {{ sitios?: string[], pie?: string }} [opciones] sitios: higado, pulmon, peritoneo, paraaortico, citologia
 */
export function metastasis(organo, { sitios = [], pie } = {}) {
  const on = (s) => (sitios.includes(s) ? ' activo' : '')
  const m = categoriaM(organo, sitios)
  const cuerpo = `
    <path d="M150,30 q60,-22 120,0 l18,40 q10,110 -6,220 l-144,0 q-16,-110 -6,-220z" class="d-cuerpo"/>
    <ellipse cx="183" cy="78" rx="24" ry="34" class="d-sitio${on('pulmon')}"/>
    <ellipse cx="237" cy="78" rx="24" ry="34" class="d-sitio${on('pulmon')}"/>
    <path d="M152,124 q58,-18 116,0" class="d-filete"/>
    <path d="M156,134 q34,-8 62,4 q-6,30 -40,34 q-20,0 -22,-38z" class="d-sitio${on('higado')}"/>
    ${sitios.includes('higado') ? '<circle cx="176" cy="148" r="5" class="d-tumor"/><circle cx="198" cy="156" r="4" class="d-tumor"/>' : ''}
    <rect x="160" y="132" width="100" height="148" rx="30" class="d-peritoneo${on('peritoneo')}"/>
    ${sitios.includes('peritoneo') ? '<circle cx="178" cy="262" r="3.5" class="d-tumor"/><circle cx="196" cy="268" r="3" class="d-tumor"/><circle cx="231" cy="265" r="3.5" class="d-tumor"/><circle cx="247" cy="252" r="3" class="d-tumor"/>' : ''}
    <line x1="210" y1="140" x2="210" y2="250" class="d-aorta"/>
    <circle cx="219" cy="196" r="5" class="d-sitio${on('paraaortico')}"/><circle cx="201" cy="212" r="5" class="d-sitio${on('paraaortico')}"/>
    ${sitios.includes('citologia') ? '<g class="d-gotas"><circle cx="190" cy="240" r="2.5"/><circle cx="214" cy="246" r="2.5"/><circle cx="232" cy="236" r="2.5"/><circle cx="200" cy="228" r="2.5"/></g>' : ''}
    <line x1="140" y1="66" x2="159" y2="74" class="d-guia"/>${texto(136, 64, 'Pulmón', `d-texto${sitios.includes('pulmon') ? ' d-minio' : ''}`, 'end')}
    <line x1="140" y1="150" x2="164" y2="150" class="d-guia"/>${texto(136, 154, 'Hígado', `d-texto${sitios.includes('higado') ? ' d-minio' : ''}`, 'end')}
    <line x1="268" y1="250" x2="290" y2="236" class="d-guia"/>${texto(294, 234, 'Peritoneo', `d-texto${sitios.includes('peritoneo') || sitios.includes('citologia') ? ' d-minio' : ''}`)}
    ${sitios.includes('citologia') ? texto(294, 250, 'citología positiva', 'd-texto d-peq d-minio') : ''}
    <line x1="226" y1="196" x2="290" y2="176" class="d-guia"/>${texto(294, 174, 'Ganglios', `d-texto${sitios.includes('paraaortico') ? ' d-minio' : ''}`)}
    ${texto(294, 190, 'para-aórticos', 'd-texto d-peq d-tenue')}
    ${texto(210, 312, m === 'M0' ? 'Sin metástasis: M0' : `→ ${m}`, 'd-titular', 'middle')}`
  return figura(420, 326, cuerpo, `Esquema del cuerpo con los sitios de metástasis${sitios.length ? ` afectados: ${sitios.join(', ')}` : ''}. Categoría ${m}`, pie)
}

/* ------------------------------------------------------------------ */
/* Historia                                                             */
/* ------------------------------------------------------------------ */

const HITOS = [
  ['1932', 'Dukes: A, B, C', 'solo para el cáncer de recto'],
  ['1943–52', 'Denoix propone T, N y M', 'Institut Gustave-Roussy, París'],
  ['1959', 'Nace el comité americano', 'hoy, la AJCC'],
  ['1968', 'Primer librito de la UICC', 'TNM de bolsillo'],
  ['1977', 'Primer manual de la AJCC', ''],
  ['1987', 'UICC y AJCC unifican', 'un solo TNM, dos editores'],
  ['2017', 'AJCC 8.ª edición', 'la que usamos hoy'],
  ['2026', 'UICC 9.ª en vigor', 'estómago y colon, sin cambios'],
  ['2027', 'Colon y recto revisados', 'depósitos tumorales, M1c1/M1c2'],
]

export function lineaTiempo() {
  const paso = 50
  const cuerpo = HITOS.map(([anyo, titulo, detalle], i) => {
    const y = 26 + i * paso
    const futuro = anyo === '2027'
    return `${texto(84, y + 5, anyo, 'd-rotulo d-minio', 'end')}
      <circle cx="102" cy="${y}" r="6" class="${futuro ? 'd-hito-futuro' : 'd-hito'}"/>
      ${texto(118, y + 1, titulo, 'd-texto d-negrita')}
      ${detalle ? texto(118, y + 18, detalle, 'd-texto d-peq d-tenue') : ''}`
  }).join('')
  const alto = 26 + (HITOS.length - 1) * paso + 30
  return figura(
    420,
    alto,
    `<line x1="102" y1="20" x2="102" y2="${alto - 30}" class="d-filete"/>${cuerpo}`,
    'Línea del tiempo del TNM, de Dukes en 1932 a la revisión de colon de 2027',
  )
}

/* ------------------------------------------------------------------ */
/* Prefijos: c, yp, p, r a lo largo del recorrido del paciente           */
/* ------------------------------------------------------------------ */

export function recorrido() {
  const pasos = [
    ['Diagnóstico y estudio de extensión', 'exploración, endoscopia, TAC, laparoscopia', 'c', false],
    ['Quimio o radioterapia antes de operar', 'solo en algunos pacientes', '', true],
    ['Cirugía: el patólogo estudia la pieza', 'p si no hubo tratamiento previo; yp si lo hubo', 'p / yp', false],
    ['Recidiva', 'el cáncer vuelve tras el tratamiento', 'r', false],
  ]
  const cuerpo = pasos
    .map(([titulo, detalle, prefijo, opcional], i) => {
      const y = 10 + i * 74
      return `<rect x="10" y="${y}" width="300" height="52" rx="4" class="${opcional ? 'd-caja-opcional' : 'd-caja'}"/>
        ${texto(22, y + 22, titulo, 'd-texto d-negrita')}
        ${texto(22, y + 40, detalle, 'd-texto d-peq d-tenue')}
        ${prefijo ? `<rect x="324" y="${y + 8}" width="86" height="36" rx="18" class="d-sello"/>${texto(367, y + 32, prefijo, 'd-rotulo d-sobre-minio', 'middle')}` : ''}
        ${i < pasos.length - 1 ? `<path d="M160,${y + 54} v16 m-5,-6 l5,6 l5,-6" class="d-flecha"/>` : ''}`
    })
    .join('')
  return figura(420, 10 + pasos.length * 74 - 12, cuerpo, 'Recorrido del paciente con el prefijo de cada momento: c, p o yp, y r')
}

/* ------------------------------------------------------------------ */
/* Clasificación R                                                      */
/* ------------------------------------------------------------------ */

export function residuo() {
  const panel = (x, r, detalle, tumor) => `
    <path d="M${x + 12},40 h104 v76 h-104z" class="d-pieza"/>
    <path d="M${x + 12},40 h104 v76 h-104z" class="d-tinta-margen"/>
    ${tumor}
    ${texto(x + 64, 22, r, 'd-titular', 'middle')}
    ${texto(x + 64, 140, detalle[0], 'd-texto d-peq', 'middle')}
    ${texto(x + 64, 156, detalle[1], 'd-texto d-peq d-tenue', 'middle')}`
  const cuerpo =
    panel(0, 'R0', ['Margen libre', 'no queda tumor'], '<ellipse cx="64" cy="78" rx="22" ry="18" class="d-tumor"/>') +
    panel(140, 'R1', ['Tumor en el margen', 'al microscopio'], '<ellipse cx="238" cy="78" rx="22" ry="18" class="d-tumor"/>') +
    panel(280, 'R2', ['Queda tumor visible', 'en el paciente'], '<ellipse cx="384" cy="78" rx="26" ry="20" class="d-tumor"/><ellipse cx="410" cy="80" rx="9" ry="14" class="d-tumor d-residuo"/>')
  return figura(420, 168, cuerpo, 'Clasificación R: R0 margen libre, R1 tumor microscópico en el margen, R2 tumor residual visible', 'La línea gruesa es el margen de resección, la tinta que pone el patólogo.')
}

/* ------------------------------------------------------------------ */
/* Unión esofagogástrica: la regla de los 2 cm                          */
/* ------------------------------------------------------------------ */

/** Contorno del estómago visto de frente: fundus a la derecha, píloro a la izquierda. */
export const ESTOMAGO =
  'M150,120 C146,150 136,175 120,195 C104,215 86,232 70,240 L56,246 L60,282 C110,300 180,326 240,312 C300,298 330,240 326,180 C322,120 290,82 246,80 C214,79 196,96 190,120 Z'
/** El esófago, un tubo estrecho que acaba en la unión. */
export const ESOFAGO = 'M150,0 H190 V120 H150 Z'
const ESTRIAS = [158, 166, 174, 182].map((x) => `<line x1="${x}" y1="6" x2="${x}" y2="114" class="d-estria"/>`).join('')

const TUMORES_UNION = [
  { n: 1, cx: 170, cy: 133, rx: 15, ry: 22, cond: 'Afecta a la unión y su centro está a 2 cm o menos', res: 'Se estadifica como esófago', clase: 'd-minio' },
  { n: 2, cx: 220, cy: 142, rx: 14, ry: 13, cond: 'Centro a 2 cm o menos, pero no toca la unión', res: 'Se estadifica como estómago', clase: 'd-primario' },
  { n: 3, cx: 232, cy: 236, rx: 16, ry: 15, cond: 'Centro a más de 2 cm, toque o no la unión', res: 'Se estadifica como estómago', clase: 'd-primario' },
]

/**
 * @param {{ resaltar?: number, pie?: string }} [opciones] resaltar: 1, 2 o 3
 */
export function union({ resaltar, pie } = {}) {
  const tumores = TUMORES_UNION.map((t) => {
    const tenue = resaltar && resaltar !== t.n ? ' tenue' : ''
    return `<g class="columna${tenue}"><ellipse cx="${t.cx}" cy="${t.cy}" rx="${t.rx}" ry="${t.ry}" class="d-tumor"/>
      ${texto(t.cx, t.cy + 5, String(t.n), 'd-rotulo d-sobre-minio', 'middle')}</g>`
  }).join('')
  const leyenda = TUMORES_UNION.map((t, i) => {
    const y = 352 + i * 44
    const tenue = resaltar && resaltar !== t.n ? ' tenue' : ''
    return `<g class="columna${tenue}"><circle cx="22" cy="${y - 4}" r="11" class="d-tumor"/>${texto(22, y + 1, String(t.n), 'd-rotulo d-sobre-minio', 'middle')}
      ${texto(42, y - 2, t.cond, 'd-texto')}${texto(42, y + 16, '→ ' + t.res, `d-texto d-negrita ${t.clase}`)}</g>`
  }).join('')
  const cuerpo = `
    <defs><clipPath id="recorte-estomago"><path d="${ESTOMAGO}"/></clipPath></defs>
    <path d="${ESTOMAGO}" class="d-estomago"/>
    <circle cx="170" cy="120" r="56" class="d-franja" clip-path="url(#recorte-estomago)"/>
    <circle cx="170" cy="120" r="56" class="d-radio" clip-path="url(#recorte-estomago)"/>
    <path d="${ESOFAGO}" class="d-esofago"/>${ESTRIAS}
    <line x1="140" y1="120" x2="200" y2="120" class="d-corte"/>
    <path d="M126,120 h-8 v56 h8" class="d-flecha"/>
    ${texto(112, 153, '2 cm', 'd-rotulo', 'end')}
    ${texto(138, 112, 'Unión esofagogástrica', 'd-texto d-peq', 'end')}
    ${texto(200, 40, 'Esófago', 'd-texto d-negrita')}${texto(200, 56, 'tubo estrecho, sin serosa', 'd-texto d-peq d-tenue')}
    ${texto(150, 288, 'Estómago', 'd-texto d-negrita', 'middle')}
    <line x1="330" y1="124" x2="226" y2="112" class="d-guia"/>
    ${texto(334, 120, 'Zona de 2 cm', 'd-texto d-peq d-minio')}${texto(334, 135, 'alrededor', 'd-texto d-peq d-minio')}${texto(334, 150, 'de la unión', 'd-texto d-peq d-minio')}
    ${tumores}${leyenda}`
  return figura(
    420,
    450,
    cuerpo,
    'Regla de los 2 cm de la unión esofagogástrica con tres tumores: el que afecta a la unión con el centro a 2 cm o menos se estadifica como esófago; el que no toca la unión o tiene el centro a más de 2 cm, como estómago',
    pie,
  )
}

/** Despacha un paso { dibujo: { tipo, ...opciones } } del contenido. */
export function dibujo({ tipo, organo, ...opciones }) {
  if (tipo === 'pared') return pared(organo, opciones)
  if (tipo === 'ganglios') return ganglios(organo, opciones)
  if (tipo === 'metastasis') return metastasis(organo, opciones)
  if (tipo === 'tiempo') return lineaTiempo()
  if (tipo === 'recorrido') return recorrido()
  if (tipo === 'residuo') return residuo()
  if (tipo === 'union') return union(opciones)
  return dibujoEsquema({ tipo, organo, ...opciones }) || dibujoSeminario({ tipo, organo, ...opciones })
}
