/**
 * Respuestas del alumno, solo en este dispositivo.
 *
 * La copia en memoria manda; localStorage solo la conserva entre recargas. Así,
 * en navegación privada o en un navegador integrado que bloquee el
 * almacenamiento, el seminario funciona igual durante la sesión.
 */
const CLAVE = 'seminario-tnm.v1'
const vacio = () => ({ respuestas: {}, construcciones: {}, preferencias: {} })

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

export function guardarRespuesta(id, opcion) {
  if (estado.respuestas[id] !== undefined) return
  escribir({ ...estado, respuestas: { ...estado.respuestas, [id]: opcion } })
}

export function guardarConstruccion(casoId, eleccion) {
  if (estado.construcciones[casoId]) return
  escribir({ ...estado, construcciones: { ...estado.construcciones, [casoId]: eleccion } })
}

export function borrarTodo() {
  escribir({ ...vacio(), preferencias: estado.preferencias })
}

export function preferencia(nombre, valor) {
  if (valor === undefined) return estado.preferencias[nombre]
  escribir({ ...estado, preferencias: { ...estado.preferencias, [nombre]: valor } })
}
