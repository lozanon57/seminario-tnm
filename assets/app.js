import { CHULETA } from './contenido.js'
import { TODAS } from './orden.js'
import { CATEGORIAS, estadio } from './estadios.js'
import {
  MODULOS, NOMBRE_ORGANO, esc, mazoDe, mazoRepaso, pendientesDeRepaso, pendiente, preguntasDe, idRespuesta, htmlCarta,
} from './mazo.js'
import {
  leer, guardarRespuesta, guardarConstruccion, guardarPosicion, borrarModulo, olvidarRespuestas, borrarTodo, preferencia,
} from './progreso.js'

const app = document.querySelector('#app')
const MODULO_REPASO = { id: 'repaso', tipo: 'repaso', fuente: null, titulo: 'Repaso' }
const DESLIZ_MINIMO = 60

/* ================================================================== */
/* Portada                                                             */
/* ================================================================== */

function completado(modulo, progreso) {
  return mazoDe(modulo).every((c) => !pendiente(c, progreso, modulo))
}

function baldosa(modulo, progreso) {
  const preguntas = preguntasDe(modulo)
  const hechas = preguntas.filter((p) => progreso.respuestas[p.id]).length
  const hecho = completado(modulo, progreso)
  const f = modulo.fuente
  const etiqueta = modulo.tipo === 'caso' ? NOMBRE_ORGANO[f.organo] : `${f.minutos} min`
  return `<a class="baldosa ${hecho ? 'hecha' : ''} ${modulo.tipo === 'caso' ? `org-${f.organo}` : ''}" href="#/m/${modulo.id}">
    <span class="num">${modulo.numero}</span>
    <span class="tit">${esc(f.titulo)}</span>
    <span class="eti">${etiqueta}${hecho ? ' · hecho' : hechas ? ` · ${hechas}/${preguntas.length}` : ''}</span>
    <span class="barrita"><i style="width:${(hechas / preguntas.length) * 100}%"></i></span></a>`
}

function vistaInicio() {
  document.body.classList.remove('en-mazo')
  const progreso = leer()
  const respondidas = TODAS.filter((p) => progreso.respuestas[p.id]).length
  const aciertos = TODAS.filter((p) => progreso.respuestas[p.id]?.opcion === p.correcta).length
  const siguiente = MODULOS.find((m) => !completado(m, progreso))
  const repaso = pendientesDeRepaso(progreso).length
  const bloques = MODULOS.filter((m) => m.tipo === 'bloque')
  const casos = MODULOS.filter((m) => m.tipo === 'caso')
  app.innerHTML = `
    <section class="heroe">
      <p class="sobre">Seminario · Patología Quirúrgica I</p>
      <h1>TNM <span>paso a paso</span></h1>
      <p class="sub">Cómo se mide la extensión de un cáncer, una idea cada vez, y ocho casos de estómago y colon para practicarlo.</p>
      <div class="progreso-global" role="img" aria-label="${respondidas} de ${TODAS.length} preguntas respondidas">
        <span><i style="width:${(respondidas / TODAS.length) * 100}%"></i></span>
        <p>${respondidas} de ${TODAS.length} respondidas${respondidas ? ` · ${aciertos} acertadas` : ''}</p>
      </div>
      ${siguiente ? `<a class="boton primario grande" href="#/m/${siguiente.id}">${respondidas ? 'Continuar' : 'Empezar'}: ${esc(siguiente.titulo)} →</a>` : '<p class="sub">Has terminado todo el seminario.</p>'}
    </section>
    ${repaso ? `<a class="aviso-repaso" href="#/m/repaso"><b>${repaso}</b> pregunta${repaso === 1 ? '' : 's'} para repasar: las falladas y las que acertaste sin estar seguro →</a>` : ''}
    <h2>Las reglas</h2>
    <div class="rejilla">${bloques.map((m) => baldosa(m, progreso)).join('')}</div>
    <h2>Los casos</h2>
    <div class="rejilla">${casos.map((m) => baldosa(m, progreso)).join('')}</div>
    <h2>Para consultar</h2>
    <div class="rejilla dos">
      <a class="baldosa herramienta" href="#/chuleta"><span class="tit">Chuleta</span><span class="eti">Todas las T, N y M</span></a>
      <a class="baldosa herramienta" href="#/calculadora"><span class="tit">Calculadora</span><span class="eti">Del TNM al estadio</span></a>
    </div>
    <p class="pie">Clasificación AJCC 8.ª edición / UICC 9.ª. Tus respuestas se guardan solo en este móvil: nadie más las ve.
      ${respondidas ? '<button type="button" class="enlace" id="reiniciar">Borrar mis respuestas</button>' : ''}</p>`
}

/* ================================================================== */
/* El mazo: una carta por pantalla                                     */
/* ================================================================== */

let mazo = null // { modulo, cartas, i, seleccion, borrador, direccion }

function abrirModulo(id) {
  const progreso = leer()
  if (id === 'repaso') {
    const preguntas = pendientesDeRepaso(progreso)
    if (!preguntas.length) {
      location.hash = '#/'
      return
    }
    olvidarRespuestas(preguntas.map((p) => `r:${p.id}`))
    mazo = { modulo: MODULO_REPASO, cartas: mazoRepaso(preguntas), i: 0 }
  } else {
    const modulo = MODULOS.find((m) => m.id === id)
    if (!modulo) {
      location.hash = '#/'
      return
    }
    const cartas = mazoDe(modulo)
    mazo = { modulo, cartas, i: Math.min(progreso.posiciones[id] ?? 0, cartas.length - 1) }
  }
  mazo = { ...mazo, seleccion: null, borrador: {}, direccion: 'entra' }
  pintarMazo()
  window.scrollTo(0, 0)
}

function siguienteModulo() {
  if (mazo.modulo.id === 'repaso') return null
  const i = MODULOS.findIndex((m) => m.id === mazo.modulo.id)
  return MODULOS[i + 1] ?? null
}

/** Aciertos seguidos hasta la carta actual. */
function racha(progreso) {
  const respondidas = mazo.cartas.slice(0, mazo.i + 1).filter((c) => c.pregunta && progreso.respuestas[idRespuesta(c)])
  let n = 0
  for (let k = respondidas.length - 1; k >= 0; k--) {
    const c = respondidas[k]
    if (progreso.respuestas[idRespuesta(c)].opcion !== c.pregunta.correcta) break
    n++
  }
  return n
}

function pie(carta, progreso) {
  const atras = mazo.i > 0 ? '<button type="button" class="boton atras" data-atras aria-label="Anterior">←</button>' : ''
  if (carta.pregunta && pendiente(carta, progreso, mazo.modulo)) {
    if (mazo.seleccion === null) return `${atras}<p class="pista">Elige una respuesta</p>`
    return `${atras}<button type="button" class="boton" data-seguro="no">Lo intuyo</button>
      <button type="button" class="boton primario" data-seguro="si">Lo sé</button>`
  }
  if (carta.tipo === 'construir' && pendiente(carta, progreso, mazo.modulo)) {
    const listo = ['T', 'N', 'M', 'estadio'].every((e) => mazo.borrador[e])
    return `${atras}<button type="button" class="boton primario" data-comprobar ${listo ? '' : 'disabled'}>Comprobar</button>`
  }
  if (carta.tipo === 'resumen') return atras
  const texto = carta.tipo === 'portada' ? 'Empezar' : mazo.i === mazo.cartas.length - 2 ? 'Ver resumen' : 'Siguiente'
  return `${atras}<button type="button" class="boton primario" data-siguiente>${texto} →</button>`
}

function pintarMazo() {
  document.body.classList.add('en-mazo')
  const progreso = leer()
  const { cartas, i, modulo } = mazo
  const carta = cartas[i]
  if (modulo.id !== 'repaso') guardarPosicion(modulo.id, i)
  const r = racha(progreso)
  const segmentos = cartas
    .map((c, k) => `<span class="${k < i ? 'hecho' : k === i ? 'actual' : ''}${c.pregunta || c.tipo === 'construir' ? ' interactivo' : ''}"></span>`)
    .join('')
  app.innerHTML = `
    <div class="mazo">
      <header class="mazo-cabeza">
        <a href="#/" class="cerrar" aria-label="Volver al inicio">✕</a>
        <div class="segmentos" role="progressbar" aria-valuemin="1" aria-valuemax="${cartas.length}" aria-valuenow="${i + 1}">${segmentos}</div>
        <span class="racha ${r >= 2 ? 'visible' : ''}" aria-label="Racha de ${r} aciertos">×${r}</span>
      </header>
      <section class="carta tipo-${carta.tipo} ${mazo.direccion}" aria-live="polite">
        ${htmlCarta(carta, { progreso, modulo, cartas, seleccion: mazo.seleccion, borrador: mazo.borrador, siguiente: siguienteModulo() })}
      </section>
      <footer class="mazo-pie">${pie(carta, progreso)}</footer>
    </div>`
  mazo = { ...mazo, direccion: '' }
}

function puedeAvanzar() {
  return mazo.i < mazo.cartas.length - 1 && !pendiente(mazo.cartas[mazo.i], leer(), mazo.modulo)
}

function ir(nuevo) {
  if (nuevo < 0 || nuevo >= mazo.cartas.length) return
  mazo = { ...mazo, direccion: nuevo > mazo.i ? 'entra-der' : 'entra-izq', i: nuevo, seleccion: null, borrador: {} }
  pintarMazo()
  window.scrollTo(0, 0)
}

function vibrar(patron) {
  try {
    navigator.vibrate?.(patron)
  } catch {
    // Sin vibración (iOS, escritorio): no pasa nada.
  }
}

function responder(seguro) {
  const carta = mazo.cartas[mazo.i]
  guardarRespuesta(idRespuesta(carta), mazo.seleccion, seguro)
  vibrar(mazo.seleccion === carta.pregunta.correcta ? 18 : [40, 60, 40])
  mazo = { ...mazo, seleccion: null }
  pintarMazo()
  app.querySelector('.veredicto')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
}

/* ================================================================== */
/* Chuleta y calculadora                                               */
/* ================================================================== */

function tablaChuleta(organo) {
  const d = CHULETA[organo]
  const filas = (eje) => d[eje].map(([v, t]) => `<tr><th>${v}</th><td>${esc(t)}</td></tr>`).join('')
  return `<section class="tarjeta chuleta"><h2>${NOMBRE_ORGANO[organo]}</h2>
    <table><tbody>${filas('T')}</tbody></table><table><tbody>${filas('N')}</tbody></table><table><tbody>${filas('M')}</tbody></table>
    <p class="nota">${esc(d.minimo)}</p></section>`
}

function vistaChuleta() {
  document.body.classList.remove('en-mazo')
  app.innerHTML = `<a class="volver" href="#/">← Inicio</a><h1>Chuleta</h1>
    <p class="sub">Prefijos: c clínico · p patológico · yp tras tratamiento previo · r recidiva. R0 sin residuo, R1 microscópico, R2 visible.</p>
    <div class="rejilla dos">${tablaChuleta('estomago')}${tablaChuleta('colon')}</div>`
}

let calc = { organo: 'estomago', prefijo: 'p', T: 'T3', N: 'N0', M: 'M0' }

function vistaCalculadora() {
  document.body.classList.remove('en-mazo')
  const cats = CATEGORIAS[calc.organo]
  if (!cats.T.includes(calc.T) || !cats.N.includes(calc.N) || !cats.M.includes(calc.M)) calc = { ...calc, T: 'T3', N: 'N0', M: 'M0' }
  const grupo = estadio(calc.organo, calc.prefijo, calc.T, calc.N, calc.M)
  const def = (eje) => CHULETA[calc.organo][eje].find(([v]) => v === calc[eje])?.[1] ?? ''
  const fila = (eje, valores, etiquetas = valores) => `<div class="eje"><span class="rotulo">${eje === 'organo' ? 'Órgano' : eje === 'prefijo' ? 'Prefijo' : eje}</span><div class="chips" data-calc="${eje}">${valores
    .map((v, k) => `<button type="button" class="chip ${calc[eje] === v ? 'elegido' : ''}" data-valor="${v}">${etiquetas[k]}</button>`)
    .join('')}</div></div>`
  app.innerHTML = `<a class="volver" href="#/">← Inicio</a><h1>Calculadora</h1>
    <div class="tarjeta">
      ${fila('organo', ['estomago', 'colon'], ['Estómago', 'Colon'])}
      ${calc.organo === 'estomago' ? fila('prefijo', ['c', 'p'], ['c · clínico', 'p · patológico']) : ''}
      ${fila('T', cats.T)}${fila('N', cats.N)}${fila('M', cats.M)}
    </div>
    <div class="resultado-calc" role="status">
      <p class="tnm">${calc.prefijo}${calc.T} ${calc.prefijo}${calc.N} ${calc.M}</p>
      <p class="grupo">${grupo ? `Estadio ${grupo}` : 'Combinación imposible'}</p>
      <p class="def">${esc(def('T'))} · ${esc(def('N'))} · ${esc(def('M'))}</p>
      ${calc.organo === 'estomago' && calc.prefijo === 'c' ? '<p class="def">Tabla clínica: antes de operar solo importa si hay ganglios o no.</p>' : ''}
    </div>`
}

/* ================================================================== */
/* Eventos                                                             */
/* ================================================================== */

function clicEnMazo(t) {
  const opcion = t.closest('[data-opcion]')
  if (opcion && !opcion.disabled) {
    mazo = { ...mazo, seleccion: Number(opcion.dataset.opcion) }
    pintarMazo()
    return true
  }
  const seguro = t.closest('[data-seguro]')
  if (seguro && mazo.seleccion !== null) {
    responder(seguro.dataset.seguro === 'si')
    return true
  }
  const chip = t.closest('.chips[data-eje] .chip')
  if (chip && !chip.disabled) {
    mazo = { ...mazo, borrador: { ...mazo.borrador, [chip.parentElement.dataset.eje]: chip.dataset.valor } }
    pintarMazo()
    return true
  }
  if (t.closest('[data-comprobar]')) {
    guardarConstruccion(mazo.modulo.id, mazo.borrador)
    vibrar(18)
    pintarMazo()
    app.querySelector('.veredicto')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    return true
  }
  if (t.closest('[data-siguiente]')) {
    if (puedeAvanzar()) ir(mazo.i + 1)
    return true
  }
  if (t.closest('[data-atras]')) {
    ir(mazo.i - 1)
    return true
  }
  if (t.closest('[data-repetir]')) {
    borrarModulo(mazo.modulo.id, preguntasDe(mazo.modulo).map((p) => p.id), mazo.modulo.id)
    abrirModulo(mazo.modulo.id)
    return true
  }
  return false
}

app.addEventListener('click', (e) => {
  const t = e.target
  if (mazo && clicEnMazo(t)) return
  const calcChip = t.closest('[data-calc] .chip')
  if (calcChip) {
    calc = { ...calc, [calcChip.parentElement.dataset.calc]: calcChip.dataset.valor }
    if (calc.organo === 'colon') calc = { ...calc, prefijo: 'p' }
    vistaCalculadora()
    return
  }
  // Dos pulsaciones en vez de confirm(): los navegadores integrados (el que
  // abre la cámara al leer el QR) suprimen confirm() sin mostrar nada.
  const reiniciar = t.closest('#reiniciar')
  if (reiniciar && !reiniciar.dataset.armado) {
    reiniciar.dataset.armado = '1'
    reiniciar.textContent = 'Pulsa otra vez para borrarlas'
  } else if (reiniciar) {
    borrarTodo()
    vistaInicio()
  }
})

document.addEventListener('keydown', (e) => {
  if (!mazo || e.metaKey || e.ctrlKey || e.altKey) return
  const carta = mazo.cartas[mazo.i]
  if (e.key === 'ArrowRight') {
    if (puedeAvanzar()) ir(mazo.i + 1)
  } else if (e.key === 'ArrowLeft') {
    ir(mazo.i - 1)
  } else if (/^[1-4]$/.test(e.key) && carta.pregunta && pendiente(carta, leer(), mazo.modulo)) {
    app.querySelectorAll('.opcion')[Number(e.key) - 1]?.click()
  }
})

let toque = null
app.addEventListener(
  'touchstart',
  (e) => {
    toque = e.target.closest('.carta') ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : null
  },
  { passive: true },
)
app.addEventListener(
  'touchend',
  (e) => {
    if (!toque || !mazo) return
    const dx = e.changedTouches[0].clientX - toque.x
    const dy = e.changedTouches[0].clientY - toque.y
    toque = null
    if (Math.abs(dx) < DESLIZ_MINIMO || Math.abs(dy) > Math.abs(dx)) return
    if (dx < 0 && puedeAvanzar()) ir(mazo.i + 1)
    if (dx > 0) ir(mazo.i - 1)
  },
  { passive: true },
)

/* ================================================================== */
/* Rutas                                                               */
/* ================================================================== */

function enrutar() {
  const [, ruta, id] = (location.hash || '#/').split('/')
  if (ruta === 'm' && id) return abrirModulo(id)
  mazo = null
  if (ruta === 'chuleta') vistaChuleta()
  else if (ruta === 'calculadora') vistaCalculadora()
  else vistaInicio()
  window.scrollTo(0, 0)
}

const botonLetra = document.querySelector('#letra')
function aplicarLetra(grande) {
  document.documentElement.classList.toggle('grande', grande)
  botonLetra?.setAttribute('aria-pressed', String(grande))
}
aplicarLetra(preferencia('grande') === true)
botonLetra?.addEventListener('click', () => {
  const grande = !document.documentElement.classList.contains('grande')
  preferencia('grande', grande)
  aplicarLetra(grande)
})

window.addEventListener('hashchange', enrutar)
enrutar()
