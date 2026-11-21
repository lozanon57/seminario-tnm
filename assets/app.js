import { BLOQUES, CASOS, CHULETA } from './contenido.js'
import { TODAS, ORDEN } from './orden.js'
import { dibujo } from './dibujos.js'
import { CATEGORIAS, estadio } from './estadios.js'
import { leer, guardarRespuesta, guardarConstruccion, borrarTodo, preferencia } from './progreso.js'

const app = document.querySelector('#app')

const GRUPOS = {
  'estomago-p': ['0', 'IA', 'IB', 'IIA', 'IIB', 'IIIA', 'IIIB', 'IIIC', 'IV'],
  'estomago-c': ['0', 'I', 'IIA', 'IIB', 'III', 'IVA', 'IVB'],
  colon: ['0', 'I', 'IIA', 'IIB', 'IIC', 'IIIA', 'IIIB', 'IIIC', 'IVA', 'IVB', 'IVC'],
}
const NOMBRE_ORGANO = { estomago: 'Estómago', colon: 'Colon' }

const esc = (t) =>
  String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

const gruposDe = (organo, prefijo) => GRUPOS[organo === 'colon' ? 'colon' : `estomago-${prefijo}`]
const definicion = (organo, eje, valor) => CHULETA[organo][eje].find(([v]) => v === valor)?.[1] ?? ''

/* ---------- preguntas ---------- */


function htmlPregunta(p, respuestas) {
  const elegida = respuestas[p.id]
  const respondida = elegida !== undefined
  const orden = ORDEN.get(p.id)
  const opciones = orden
    .map((i, posicion) => {
      const estado = !respondida ? '' : i === p.correcta ? 'bien' : i === elegida ? 'mal' : 'apagada'
      return `<li><button type="button" class="opcion ${estado}" data-pregunta="${p.id}" data-opcion="${i}"
        ${respondida ? 'disabled' : ''}><span class="letra">${'ABCD'[posicion]}</span><span>${esc(p.opciones[i])}</span></button></li>`
    })
    .join('')
  const veredicto = respondida
    ? `<div class="explicacion ${elegida === p.correcta ? 'bien' : 'mal'}" role="status">
         <strong>${elegida === p.correcta ? 'Correcto.' : `No: es la ${'ABCD'[orden.indexOf(p.correcta)]}.`}</strong> ${esc(p.explicacion)}
       </div>`
    : ''
  return `<div class="pregunta" id="p-${p.id}"><p class="enunciado">${esc(p.enunciado)}</p><ol class="opciones">${opciones}</ol>${veredicto}</div>`
}

/* ---------- construir el TNM ---------- */

function htmlConstruir(caso, c, hecho) {
  const cats = CATEGORIAS[c.organo]
  const grupos = gruposDe(c.organo, c.prefijo)
  const clave = { T: c.T, N: c.N, M: c.M, estadio: estadio(c.organo, c.prefijo, c.T, c.N, c.M) }
  const fila = (eje, valores) => `
    <div class="eje"><span class="rotulo">${eje === 'estadio' ? 'Estadio' : eje}</span>
      <div class="chips" data-eje="${eje}">${valores
        .map((v) => {
          const elegido = hecho?.[eje] === v
          const estado = !hecho ? '' : v === clave[eje] ? 'bien' : elegido ? 'mal' : ''
          return `<button type="button" class="chip ${estado} ${elegido ? 'elegido' : ''}" data-valor="${v}" ${hecho ? 'disabled' : ''}>${eje === 'T' || eje === 'N' ? c.prefijo + v : v}</button>`
        })
        .join('')}</div></div>`
  const resultado = hecho
    ? `<div class="explicacion ${['T', 'N', 'M', 'estadio'].every((e) => hecho[e] === clave[e]) ? 'bien' : 'mal'}" role="status">
        <strong>${c.prefijo}${clave.T} ${c.prefijo}${clave.N} ${clave.M} → estadio ${clave.estadio}.</strong>
        ${['T', 'N', 'M']
          .filter((e) => hecho[e] !== clave[e])
          .map((e) => ` ${clave[e]}: ${esc(definicion(c.organo, e, clave[e]))}.`)
          .join('')}
        ${hecho.estadio !== clave.estadio && ['T', 'N', 'M'].every((e) => hecho[e] === clave[e]) ? ' El TNM estaba bien: revisa la tabla de estadios en la calculadora.' : ''}
        ${c.prefijo === 'c' && c.organo === 'estomago' ? ' Ojo: es la tabla clínica del estómago, que no subdivide el estadio I.' : ''}
      </div>`
    : `<button type="button" class="primario" data-comprobar="${caso.id}" disabled>Comprobar</button>`
  return `<div class="construir" data-caso="${caso.id}">
    <p class="enunciado">Construye el TNM y el estadio (${c.prefijo === 'c' ? 'clínico' : 'patológico'}).</p>
    ${fila('T', cats.T)}${fila('N', cats.N)}${fila('M', cats.M)}${fila('estadio', grupos)}
    ${resultado}</div>`
}

/* ---------- vistas ---------- */

function resumen(progreso) {
  const hechas = TODAS.filter((p) => progreso.respuestas[p.id] !== undefined)
  return { total: TODAS.length, hechas: hechas.length, bien: hechas.filter((p) => progreso.respuestas[p.id] === p.correcta).length }
}

function interactivos(caso) {
  return caso.pasos.filter((p) => p.pregunta || p.construir)
}

function completados(caso, progreso) {
  return interactivos(caso).filter((p) => (p.pregunta ? progreso.respuestas[p.pregunta.id] !== undefined : progreso.construcciones[caso.id])).length
}

function vistaInicio() {
  const progreso = leer()
  const r = resumen(progreso)
  app.innerHTML = `
    <section class="portada">
      <p class="antetitulo">Seminario · Patología Quirúrgica I · 4.º de Medicina</p>
      <h1>TNM paso a paso</h1>
      <p class="entradilla">Cómo se describe la extensión de un cáncer, contado desde el principio, y ocho casos de cáncer gástrico y de colon para practicarlo. Sigue al profesor: cuando diga un bloque o un caso, ábrelo aquí y responde desde el móvil.</p>
      <p class="cifra">${r.hechas} de ${r.total} preguntas respondidas${r.hechas ? ` · ${r.bien} ${r.bien === 1 ? 'acertada' : 'acertadas'}` : ''}</p>
    </section>
    <section>
      <h2>Primero, las reglas</h2>
      <ol class="indice">${BLOQUES.map((b) => {
        const hechas = b.preguntas.filter((p) => progreso.respuestas[p.id] !== undefined).length
        return `<li><a href="#/bloque/${b.id}"><span class="n">${b.numero}</span><span class="titulo">${esc(b.titulo)}</span>
          <span class="estado">${hechas}/${b.preguntas.length}</span></a></li>`
      }).join('')}</ol>
    </section>
    <section>
      <h2>Ocho casos</h2>
      <ol class="indice casos">${CASOS.map((c) => {
        const total = interactivos(c).length
        const hechos = completados(c, progreso)
        return `<li><a href="#/caso/${c.id}"><span class="n">${c.numero}</span>
          <span class="titulo">${esc(c.titulo)}<small>${NOMBRE_ORGANO[c.organo]} · ${esc(c.concepto)}</small></span>
          <span class="estado ${hechos === total ? 'hecho' : ''}">${hechos === total ? '✓' : `${hechos}/${total}`}</span></a></li>`
      }).join('')}</ol>
    </section>
    <p class="pie">Clasificación AJCC 8.ª edición / UICC 9.ª. Tus respuestas se guardan solo en este dispositivo.
      ${r.hechas ? '<button type="button" class="sutil" id="reiniciar">Borrar mis respuestas</button>' : ''}</p>`
}

function vistaBloque(id) {
  const b = BLOQUES.find((x) => x.id === id)
  if (!b) return vistaInicio()
  const progreso = leer()
  const i = BLOQUES.indexOf(b)
  const siguiente = BLOQUES[i + 1] ? `#/bloque/${BLOQUES[i + 1].id}` : `#/caso/${CASOS[0].id}`
  app.innerHTML = `
    <article class="lamina">
      <p class="antetitulo">Bloque ${b.numero} de ${BLOQUES.length}</p>
      <h1>${esc(b.titulo)}</h1>
      ${b.lamina.map((p) => (typeof p === 'string' ? `<p>${p}</p>` : dibujo(p.dibujo))).join('')}
    </article>
    <section class="preguntas"><h2>Comprueba</h2>${b.preguntas.map((p) => htmlPregunta(p, progreso.respuestas)).join('')}</section>
    <nav class="pasar"><a href="#/">Índice</a><a class="boton" href="${siguiente}">${BLOQUES[i + 1] ? 'Siguiente bloque' : 'Ir a los casos'} →</a></nav>`
}

function vistaCaso(id) {
  const caso = CASOS.find((x) => x.id === id)
  if (!caso) return vistaInicio()
  const progreso = leer()
  const pasos = []
  for (const paso of caso.pasos) {
    if (paso.texto) pasos.push(`<p class="relato">${esc(paso.texto)}</p>`)
    if (paso.dibujo) pasos.push(dibujo(paso.dibujo))
    if (paso.pregunta) pasos.push(htmlPregunta(paso.pregunta, progreso.respuestas))
    if (paso.construir) pasos.push(htmlConstruir(caso, paso.construir, progreso.construcciones[caso.id]))
    const pendiente = paso.pregunta ? progreso.respuestas[paso.pregunta.id] === undefined : paso.construir && !progreso.construcciones[caso.id]
    if (pendiente) break
  }
  const terminado = completados(caso, progreso) === interactivos(caso).length
  const i = CASOS.indexOf(caso)
  app.innerHTML = `
    <article class="caso">
      <p class="antetitulo">Caso ${caso.numero} de ${CASOS.length} · ${NOMBRE_ORGANO[caso.organo]}</p>
      <h1>${esc(caso.titulo)}</h1>
      <p class="concepto">${esc(caso.concepto)}</p>
      ${pasos.join('')}
    </article>
    ${terminado ? '<p class="fin">Caso terminado.</p>' : ''}
    <nav class="pasar"><a href="#/">Índice</a>${CASOS[i + 1] ? `<a class="boton" href="#/caso/${CASOS[i + 1].id}">Caso ${i + 2} →</a>` : '<a class="boton" href="#/">Terminar</a>'}</nav>`
}

function tablaChuleta(organo) {
  const d = CHULETA[organo]
  const filas = (eje) => d[eje].map(([v, t]) => `<tr><th>${v}</th><td>${esc(t)}</td></tr>`).join('')
  return `<section class="chuleta"><h2>${NOMBRE_ORGANO[organo]}</h2>
    <table><tbody>${filas('T')}</tbody></table>
    <table><tbody>${filas('N')}</tbody></table>
    <table><tbody>${filas('M')}</tbody></table>
    <p class="nota">${esc(d.minimo)}</p></section>`
}

function vistaChuleta() {
  app.innerHTML = `<h1>Chuleta</h1>
    <p class="entradilla">Prefijos: c clínico · p patológico · yp tras tratamiento previo · r recidiva. R0 sin residuo, R1 microscópico, R2 macroscópico.</p>
    <div class="dos">${tablaChuleta('estomago')}${tablaChuleta('colon')}</div>`
}

let calc = { organo: 'estomago', prefijo: 'p', T: 'T3', N: 'N0', M: 'M0' }

function vistaCalculadora() {
  const cats = CATEGORIAS[calc.organo]
  if (!cats.T.includes(calc.T)) calc = { ...calc, T: cats.T[0], N: 'N0', M: 'M0' }
  const grupo = estadio(calc.organo, calc.prefijo, calc.T, calc.N, calc.M)
  const fila = (eje, valores) => `<div class="eje"><span class="rotulo">${eje}</span><div class="chips" data-calc="${eje}">${valores
    .map((v) => `<button type="button" class="chip ${calc[eje] === v ? 'elegido' : ''}" data-valor="${v}">${v}</button>`)
    .join('')}</div></div>`
  app.innerHTML = `<h1>Calculadora</h1>
    <div class="eje"><span class="rotulo">Órgano</span><div class="chips" data-calc="organo">
      ${['estomago', 'colon'].map((o) => `<button type="button" class="chip ${calc.organo === o ? 'elegido' : ''}" data-valor="${o}">${NOMBRE_ORGANO[o]}</button>`).join('')}</div></div>
    ${calc.organo === 'estomago' ? fila('prefijo', ['c', 'p']) : ''}
    ${fila('T', cats.T)}${fila('N', cats.N)}${fila('M', cats.M)}
    <div class="veredicto-calc" role="status">
      <span class="tnm">${calc.prefijo}${calc.T} ${calc.prefijo}${calc.N} ${calc.M}</span>
      <span class="grupo">${grupo ? `Estadio ${grupo}` : 'Combinación imposible'}</span>
      <p>${esc(definicion(calc.organo, 'T', calc.T))} · ${esc(definicion(calc.organo, 'N', calc.N))} · ${esc(definicion(calc.organo, 'M', calc.M))}</p>
      ${calc.organo === 'estomago' && calc.prefijo === 'c' ? '<p class="nota">Tabla clínica: antes de operar solo importa si hay ganglios o no.</p>' : ''}
    </div>`
}

/* ---------- eventos ---------- */

app.addEventListener('click', (e) => {
  const opcion = e.target.closest('[data-opcion]')
  if (opcion) {
    guardarRespuesta(opcion.dataset.pregunta, Number(opcion.dataset.opcion))
    return repintar(`p-${opcion.dataset.pregunta}`)
  }
  const chip = e.target.closest('.construir .chip')
  if (chip) {
    const caja = chip.closest('.construir')
    chip.closest('.chips').querySelectorAll('.chip').forEach((b) => b.classList.toggle('elegido', b === chip))
    caja.querySelector('[data-comprobar]').disabled = caja.querySelectorAll('.chip.elegido').length < 4
    return
  }
  const comprobar = e.target.closest('[data-comprobar]')
  if (comprobar) {
    const caja = comprobar.closest('.construir')
    const elegido = (eje) => caja.querySelector(`[data-eje="${eje}"] .elegido`)?.dataset.valor
    guardarConstruccion(comprobar.dataset.comprobar, { T: elegido('T'), N: elegido('N'), M: elegido('M'), estadio: elegido('estadio') })
    return repintar(null, caja)
  }
  const calcChip = e.target.closest('[data-calc] .chip')
  if (calcChip) {
    calc = { ...calc, [calcChip.parentElement.dataset.calc]: calcChip.dataset.valor }
    if (calc.organo === 'colon') calc = { ...calc, prefijo: 'p' }
    return vistaCalculadora()
  }
  // Dos pulsaciones en vez de confirm(): los navegadores integrados (el que
  // abre la cámara al leer el QR) suprimen confirm() sin mostrar nada.
  const reiniciar = e.target.closest('#reiniciar')
  if (reiniciar && !reiniciar.dataset.armado) {
    reiniciar.dataset.armado = '1'
    reiniciar.textContent = 'Pulsa otra vez para borrarlas'
  } else if (reiniciar) {
    borrarTodo()
    vistaInicio()
  }
})

/** Repinta la vista sin perder el sitio: la pregunta respondida queda donde estaba. */
function repintar(idAncla, nodo) {
  const ancla = idAncla ? document.getElementById(idAncla) : nodo
  const antes = ancla?.getBoundingClientRect().top ?? 0
  enrutar(false)
  const despues = (idAncla ? document.getElementById(idAncla) : app.querySelector('.construir'))?.getBoundingClientRect().top
  if (despues !== undefined) window.scrollBy(0, despues - antes)
}

function enrutar(arriba = true) {
  const [, ruta, id] = (location.hash || '#/').split('/')
  if (ruta === 'bloque') vistaBloque(id)
  else if (ruta === 'caso') vistaCaso(id)
  else if (ruta === 'chuleta') vistaChuleta()
  else if (ruta === 'calculadora') vistaCalculadora()
  else vistaInicio()
  if (arriba) window.scrollTo(0, 0)
}

const botonLetra = document.querySelector('#letra')
function aplicarLetra(grande) {
  document.documentElement.classList.toggle('grande', grande)
  botonLetra.setAttribute('aria-pressed', String(grande))
}
aplicarLetra(preferencia('grande') === true)
botonLetra.addEventListener('click', () => {
  const grande = !document.documentElement.classList.contains('grande')
  preferencia('grande', grande)
  aplicarLetra(grande)
})

window.addEventListener('hashchange', () => enrutar())
enrutar()
