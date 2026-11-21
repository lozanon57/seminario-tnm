/**
 * Todas las fichas de la pestaña «Tumores», en el orden de la asignatura.
 * Esquema en docs/ESQUEMA-TUMORES.md; validación en tests/tumores.test.mjs.
 */
import { TUMORES_ESOFAGO_ESTOMAGO } from './esofago-estomago.js'
import { TUMORES_DELGADO_COLORRECTAL } from './delgado-colorrectal.js'
import { TUMORES_HIGADO_BILIAR } from './higado-biliar.js'
import { TUMORES_PANCREAS_PERITONEO } from './pancreas-peritoneo.js'

export const BLOQUES_TUMOR = [
  { id: 'esofago', titulo: 'Esófago' },
  { id: 'estomago', titulo: 'Estómago' },
  { id: 'delgado', titulo: 'Intestino delgado' },
  { id: 'colorrectal', titulo: 'Colon, recto y ano' },
  { id: 'higado', titulo: 'Hígado' },
  { id: 'biliar', titulo: 'Vías biliares' },
  { id: 'pancreas', titulo: 'Páncreas' },
  { id: 'peritoneo', titulo: 'Peritoneo y retroperitoneo' },
]

const todas = [...TUMORES_ESOFAGO_ESTOMAGO, ...TUMORES_DELGADO_COLORRECTAL, ...TUMORES_HIGADO_BILIAR, ...TUMORES_PANCREAS_PERITONEO]
const posicion = (f) => BLOQUES_TUMOR.findIndex((b) => b.id === f.bloque)

/** Ordenadas por bloque y, dentro de cada bloque, como las escribió cada grupo. */
export const TUMORES = todas.map((f, i) => ({ f, i })).sort((a, b) => posicion(a.f) - posicion(b.f) || a.i - b.i).map(({ f }) => f)

export const PREGUNTAS_TUMORES = TUMORES.flatMap((f) => f.preguntas)
