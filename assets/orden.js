import { BLOQUES, CASOS, ORDENADAS } from './contenido.js'
import { PREGUNTAS_TUMORES } from './tumores/index.js'

/** Todas las preguntas, en el orden en que aparecen en el seminario. */
export const TODAS = [...BLOQUES.flatMap((b) => b.preguntas), ...CASOS.flatMap((c) => c.pasos.filter((p) => p.pregunta).map((p) => p.pregunta))]

/** Hash pequeño y estable del id: decide entre posiciones igual de usadas. */
const SEMILLA = 16 // elegida: reparto 11/11/11/10 y nunca más de dos letras iguales seguidas
const hash = (texto) => {
  let h = SEMILLA ^ 0x9e3779b9
  for (const c of texto) h = Math.imul(h ^ c.charCodeAt(0), 0x5bd1e995) >>> 0
  return (h ^ (h >>> 15)) >>> 0
}

/**
 * Orden de presentación de las opciones (índices originales). Las ordenadas se
 * dejan como están. En las demás, la correcta va a una de las posiciones menos
 * usadas hasta ese momento, elegida por el hash del id: así el reparto queda
 * equilibrado en conjunto y además mezclado dentro de cada bloque. Es
 * determinista, de modo que todos los móviles ven lo mismo que el proyector.
 */
function ordenar(preguntas, fijas = new Set()) {
  const uso = [0, 0, 0, 0]
  const orden = new Map()
  for (const p of preguntas) {
    const indices = p.opciones.map((_, i) => i)
    if (fijas.has(p.id)) {
      uso[p.correcta]++
      orden.set(p.id, indices)
      continue
    }
    const minimo = Math.min(...uso)
    const candidatas = indices.filter((i) => uso[i] <= minimo + 1 && i !== indices.at(-1) + 1)
    const destino = candidatas[hash(p.id) % candidatas.length]
    uso[destino]++
    const resto = indices.filter((i) => i !== p.correcta)
    orden.set(p.id, [...resto.slice(0, destino), p.correcta, ...resto.slice(destino)])
  }
  return orden
}

/**
 * Las del seminario se ordenan aparte y primero, para que su clave (la del
 * anexo A del guion) no cambie al añadir preguntas de la pestaña «Tumores».
 */
export const ORDEN = new Map([...ordenar(TODAS, ORDENADAS), ...ordenar(PREGUNTAS_TUMORES)])
