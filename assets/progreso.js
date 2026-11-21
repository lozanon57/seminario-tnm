/**
 * Progreso del alumno, solo en este dispositivo.
 *
 * La copia en memoria manda; localStorage solo la conserva entre recargas. Así,
 * en navegación privada o en un navegador integrado que bloquee el
 * almacenamiento, el seminario funciona igual durante la sesión.
 *
 * Cada respuesta guarda la opción y si el alumno estaba seguro: la combinación
 * «seguro y fallada» es la que más conviene repasar.
 */
const CLAVE = 'seminario-tnm.v2'
const vacio = () => ({ respuestas: {}, construcciones: {}, posiciones: {}, preferencias: {} })

function cargar() {
  try {
    return { ...vacio(), ...JSON.parse(localStorage.getItem(CLAVE) ?? '{}') }
  } catch {
    return vacio()
  }
}

let estado = cargar()

function escribir(nuevo) {
  estado = nuevo
  try {
    localStorage.setItem(CLAVE, JSON.stringify(nuevo))
  } catch {
    // Sin almacenamiento: se queda en memoria hasta que se cierre la pestaña.
  }
}

export const leer = () => estado

/** @param {string} id @param {number} opcion @param {boolean} seguro */
export function guardarRespuesta(id, opcion, seguro) {
  if (estado.respuestas[id]) return
  escribir({ ...estado, respuestas: { ...estado.respuestas, [id]: { opcion, seguro } } })
}

export function guardarConstruccion(casoId, eleccion) {
  if (estado.construcciones[casoId]) return
  escribir({ ...estado, construcciones: { ...estado.construcciones, [casoId]: eleccion } })
}

export function guardarPosicion(modulo, indice) {
  if (estado.posiciones[modulo] === indice) return
  escribir({ ...estado, posiciones: { ...estado.posiciones, [modulo]: indice } })
}

/** Borra las respuestas de un módulo para repetirlo. */
export function borrarModulo(modulo, idsPreguntas, casoId) {
  const respuestas = Object.fromEntries(Object.entries(estado.respuestas).filter(([id]) => !idsPreguntas.includes(id)))
  const construcciones = Object.fromEntries(Object.entries(estado.construcciones).filter(([id]) => id !== casoId))
  const posiciones = { ...estado.posiciones, [modulo]: 0 }
  escribir({ ...estado, respuestas, construcciones, posiciones })
}

/** Quita respuestas concretas (las que se vuelven a repasar). */
export function olvidarRespuestas(ids) {
  const respuestas = Object.fromEntries(Object.entries(estado.respuestas).filter(([id]) => !ids.includes(id)))
  escribir({ ...estado, respuestas })
}

export function borrarTodo() {
  escribir({ ...vacio(), preferencias: estado.preferencias })
}

export function preferencia(nombre, valor) {
  if (valor === undefined) return estado.preferencias[nombre]
  escribir({ ...estado, preferencias: { ...estado.preferencias, [nombre]: valor } })
}
