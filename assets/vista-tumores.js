/**
 * Pestaña «Tumores»: apoyo al estudio de todos los tumores de la asignatura,
 * independiente del seminario. Cada tumor tiene una ficha para leer, un mazo
 * de cartas con preguntas tipo examen y tarjetas para memorizar.
 */
import { TUMORES, BLOQUES_TUMOR, PREGUNTAS_TUMORES } from './tumores/index.js'
import { ORGANOS_TNM } from './tnm-datos.js'
import { pendientesDeRepaso } from './mazo.js'
import { dibujo } from './dibujos.js'
import { esc, htmlSeguro } from './dibujos-base.js'
import { sabidas } from './tarjetas.js'
import { leer } from './progreso.js'

const QUAERO = 'https://lozanon57.github.io/quaero/'

function baldosaTumor(t, progreso) {
  const hechas = t.preguntas.filter((p) => progreso.respuestas[p.id]).length
  const cuenta = sabidas('tumor', t.id, progreso)
  const completo = hechas === t.preguntas.length && cuenta.sabidas === cuenta.total
  return `<a class="baldosa tumor ${completo ? 'hecha' : ''}" href="#/tumor/${t.id}">
    <span class="tit">${esc(t.titulo)}</span>
    <span class="eti">${esc(t.subtitulo)}</span>
    <span class="eti">${hechas}/${t.preguntas.length} preguntas · ${cuenta.sabidas}/${cuenta.total} tarjetas</span>
    <span class="barrita"><i style="width:${((hechas + cuenta.sabidas) / (t.preguntas.length + cuenta.total)) * 100}%"></i></span></a>`
}

export function vistaTumores(app) {
  const progreso = leer()
  const respondidas = PREGUNTAS_TUMORES.filter((p) => progreso.respuestas[p.id]).length
  const totalTarjetas = TUMORES.reduce((s, t) => s + t.tarjetas.length, 0)
  const tarjetasSabidas = TUMORES.reduce((s, t) => s + sabidas('tumor', t.id, progreso).sabidas, 0)
  const repaso = pendientesDeRepaso(progreso, PREGUNTAS_TUMORES).length
  const bloques = BLOQUES_TUMOR.map((b) => ({ ...b, fichas: TUMORES.filter((t) => t.bloque === b.id) })).filter((b) => b.fichas.length)
  app.innerHTML = `
    <section class="heroe heroe-corto">
      <p class="sobre">Patología Quirúrgica I · apoyo al estudio</p>
      <h1>Tumores <span>del abdomen</span></h1>
      <p class="sub">Todos los tumores de la asignatura: una ficha con lo esencial y sus esquemas, tarjetas para memorizar y preguntas tipo examen con la explicación de cada opción.</p>
      <div class="progreso-global" role="img" aria-label="${respondidas} de ${PREGUNTAS_TUMORES.length} preguntas respondidas">
        <span><i style="width:${((respondidas + tarjetasSabidas) / (PREGUNTAS_TUMORES.length + totalTarjetas || 1)) * 100}%"></i></span>
        <p>${TUMORES.length} fichas · ${respondidas}/${PREGUNTAS_TUMORES.length} preguntas · ${tarjetasSabidas}/${totalTarjetas} tarjetas</p>
      </div>
    </section>
    ${repaso ? `<a class="aviso-repaso" href="#/m/repaso-tumores"><b>${repaso}</b> pregunta${repaso === 1 ? '' : 's'} para repasar: las falladas y las que acertaste sin estar seguro →</a>` : ''}
    <nav class="saltos" aria-label="Ir a un bloque">${bloques.map((b) => `<a href="#/tumores/${b.id}" data-salto="${b.id}">${esc(b.titulo)}</a>`).join('')}</nav>
    ${bloques.map((b) => `<h2 id="bloque-${b.id}">${esc(b.titulo)}</h2><div class="rejilla dos">${b.fichas.map((t) => baldosaTumor(t, progreso)).join('')}</div>`).join('')}
    <a class="baldosa herramienta externa" href="${QUAERO}" target="_blank" rel="noopener">
      <span class="tit">Más preguntas en QUAERO</span><span class="eti">El banco de preguntas de examen de toda la asignatura →</span></a>
    <p class="pie">Basado en las clases de la asignatura. Donde la clase tiene una errata o ha quedado desfasada, la ficha lo dice. TNM: AJCC 8.ª edición.</p>`
}

/** Ir a un bloque dentro de la lista. */
export function saltarABloque(id) {
  document.getElementById(`bloque-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/* ------------------------------------------------------------------ */

const dibujos = (d) => (d ? [d].flat().map(dibujo).join('') : '')

/** @returns {boolean} si existía */
export function vistaFicha(app, id) {
  const t = TUMORES.find((x) => x.id === id)
  if (!t) return false
  const progreso = leer()
  const hechas = t.preguntas.filter((p) => progreso.respuestas[p.id]).length
  const cuenta = sabidas('tumor', t.id, progreso)
  const tnm = t.tnm && ORGANOS_TNM.find((o) => o.id === t.tnm)
  const bloque = BLOQUES_TUMOR.find((b) => b.id === t.bloque)
  const i = TUMORES.indexOf(t)
  const vecinos = [TUMORES[i - 1], TUMORES[i + 1]]
  app.innerHTML = `
    <a class="volver" href="#/tumores">← Tumores</a>
    <article class="ficha">
      <p class="sobre">${esc(bloque?.titulo ?? '')}</p>
      <h1>${esc(t.titulo)}</h1>
      <p class="sub">${esc(t.subtitulo)}</p>
      <div class="acciones-fila no-imprimir">
        <a class="boton primario" href="#/m/t-${t.id}">Estudiar en cartas · ${hechas}/${t.preguntas.length}</a>
        <a class="boton" href="#/tarjetas/tumor/${t.id}">Tarjetas · ${cuenta.sabidas}/${cuenta.total}</a>
        ${tnm ? `<a class="boton" href="#/tnm/${tnm.id}">TNM de ${esc(tnm.nombre.toLowerCase())}</a>` : ''}
        <button type="button" class="boton" data-imprimir>Imprimir ficha</button>
      </div>
      <div class="ficha-cabeza">
        ${dibujo({ tipo: 'mapa', resaltar: t.mapa })}
        <div class="clave"><p class="rotulo">Lo esencial</p><ol>${t.esencial.map((e) => `<li>${htmlSeguro(e)}</li>`).join('')}</ol></div>
      </div>
      ${t.secciones.map((s) => `<section class="seccion-ficha"><h2>${esc(s.titulo)}</h2><ul class="puntos">${s.puntos.map((p) => `<li>${htmlSeguro(p)}</li>`).join('')}</ul>${dibujos(s.dibujo)}</section>`).join('')}
      <section class="seccion-ficha solo-imprimir"><h2>Tarjetas</h2><dl class="definiciones">${t.tarjetas.map((c) => `<div><dt>${esc(c.a)}</dt><dd>${esc(c.r)}</dd></div>`).join('')}</dl></section>
      <p class="nota">Fuentes: ${t.fuentes.map(esc).join(' · ')}</p>
    </article>
    <nav class="vecinos no-imprimir">
      ${vecinos[0] ? `<a href="#/tumor/${vecinos[0].id}">← ${esc(vecinos[0].titulo)}</a>` : '<span></span>'}
      ${vecinos[1] ? `<a href="#/tumor/${vecinos[1].id}">${esc(vecinos[1].titulo)} →</a>` : '<span></span>'}
    </nav>`
  return true
}
