// Escribe la clave de respuestas tal como la ven los alumnos (letras ya
// reordenadas), en Markdown, para el anexo del guion.
import { BLOQUES, CASOS } from '../assets/contenido.js'
import { ORDEN } from '../assets/orden.js'
import { estadio } from '../assets/estadios.js'

const fila = (p) => `| ${p.enunciado.replace(/\|/g, '/')} | ${'ABCD'[ORDEN.get(p.id).indexOf(p.correcta)]} | ${p.opciones[p.correcta]} |`
const cab = '| Pregunta | Letra | Respuesta |\n|---|---|---|'
const partes = []
for (const b of BLOQUES) partes.push(`**Bloque ${b.numero}. ${b.titulo}**\n\n${cab}\n${b.preguntas.map(fila).join('\n')}`)
for (const c of CASOS) {
  const filas = c.pasos.flatMap((s) => {
    if (s.pregunta) return [fila(s.pregunta)]
    if (s.construir) {
      const k = s.construir
      return [`| Construir el TNM | — | ${k.prefijo}${k.T} ${k.prefijo}${k.N} ${k.M}, estadio ${estadio(k.organo, k.prefijo, k.T, k.N, k.M)} |`]
    }
    return []
  })
  partes.push(`**Caso ${c.numero}. ${c.titulo}**\n\n${cab}\n${filas.join('\n')}`)
}
process.stdout.write(partes.join('\n\n') + '\n')
