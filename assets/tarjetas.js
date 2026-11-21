/**
 * Tarjetas de memoria y reto rápido.
 *
 * Tarjetas: se lee el anverso, se intenta recordar, se le da la vuelta y uno
 * mismo dice si se la sabía. «Otra vez» la manda al final del montón; «La sé»
 * la quita. Es recuperación activa con autoevaluación, el formato que más se
 * usa hoy para memorizar (Anki, Quizlet), sin algoritmo de intervalos: aquí el
 * repaso es dentro de la sesión.
 *
 * Reto: diez preguntas generadas de las tablas, con respuesta inmediata.
 */
import { ORGANOS_TNM, ESCALAS } from './tnm-datos.js'
import { rejilla, estadioDe, columnas } from './tnm-estadios.js'
import { TUMORES } from './tumores/index.js'
import { esc } from './dibujos-base.js'
import { leer, guardarTarjeta } from './progreso.js'

/* ------------------------------------------------------------------ */
/* De los datos a las tarjetas                                          */
/* ------------------------------------------------------------------ */

const NOMBRE_EJE = { T: 'Tumor', N: 'Ganglios', M: 'Metástasis' }

/** Combinaciones que dan cada estadio, para la tarjeta «¿qué es el IIA?». */
function combinacionesPorEstadio(organo) {
  const r = rejilla(organo)
  const porEstadio = new Map()
  for (const fila of r.filas) {
    fila.celdas.forEach((e, k) => {
      if (!e || e === '0') return
      porEstadio.set(e, [...(porEstadio.get(e) ?? []), `${fila.T} ${r.valores[k]}`])
    })
  }
  return porEstadio
}

function tarjetasOrgano(o) {
  const definiciones = ['T', 'N', 'M'].flatMap((eje) =>
    o[eje]
      .filter(([c]) => !/^(N0|M0)$/.test(c))
      .map(([c, d]) => ({ id: `tnm:${o.id}:${c}`, sobre: `${o.nombre} · ${NOMBRE_EJE[eje]}`, anverso: c, reverso: d })),
  )
  const estadios = o.estadios
    ? [...combinacionesPorEstadio(o).entries()].map(([e, combos]) => ({
        id: `tnm:${o.id}:estadio-${e}`,
        sobre: `${o.nombre} · Estadio`,
        anverso: `Estadio ${e}`,
        reverso: `${combos.join(' · ')}${columnas(o).eje === 'N' ? ', M0' : ''}`,
      }))
    : []
  return [...definiciones, ...estadios]
}

const tarjetasEscala = (e) =>
  e.niveles.map(([codigo, t, detalle]) => ({
    id: `escala:${e.id}:${codigo}`,
    sobre: e.nombre,
    anverso: codigo,
    reverso: `${t}${detalle ? `. ${detalle.charAt(0).toUpperCase()}${detalle.slice(1)}` : ''}`,
  }))

const tarjetasTumor = (t) => t.tarjetas.map((c, i) => ({ id: `tumor:${t.id}:${i}`, sobre: t.titulo, anverso: c.a, reverso: c.r }))

/**
 * @param {'tnm'|'escala'|'tumor'} fuente
 * @returns {{ titulo: string, volver: string, cartas: object[] } | null}
 */
export function baraja(fuente, id) {
  if (fuente === 'tnm') {
    const o = ORGANOS_TNM.find((x) => x.id === id)
    return o && { titulo: o.nombre, volver: `#/tnm/${o.id}`, cartas: tarjetasOrgano(o) }
  }
  if (fuente === 'escala') {
    const e = ESCALAS.find((x) => x.id === id)
    return e && { titulo: e.nombre, volver: `#/tnm/${e.id}`, cartas: tarjetasEscala(e) }
  }
  if (fuente === 'tumor') {
    const t = TUMORES.find((x) => x.id === id)
    return t && { titulo: t.titulo, volver: `#/tumor/${t.id}`, cartas: tarjetasTumor(t) }
  }
  return null
}

/** Cuántas tarjetas de una baraja se sabe ya el alumno. */
export function sabidas(fuente, id, progreso = leer()) {
  const b = baraja(fuente, id)
  if (!b) return { sabidas: 0, total: 0 }
  return { sabidas: b.cartas.filter((c) => progreso.tarjetas[c.id]?.sabida).length, total: b.cartas.length }
}

/* ------------------------------------------------------------------ */
/* Sesión de tarjetas                                                   */
/* ------------------------------------------------------------------ */

let sesion = null // { fuente, id, b, cola: [], vuelta, reves, hechas }

export function abrirTarjetas(app, fuente, id, opciones = '') {
  const b = baraja(fuente, id)
  if (!b) return false
  const progreso = leer()
  const todas = opciones.includes('todas')
  const pendientes = b.cartas.filter((c) => todas || !progreso.tarjetas[c.id]?.sabida)
  sesion = { fuente, id, b, cola: pendientes, vuelta: false, reves: opciones.includes('reves'), hechas: 0, total: pendientes.length }
  pintarTarjetas(app)
  return true
}

export const cerrarTarjetas = () => {
  sesion = null
}
export const enTarjetas = () => sesion !== null

function pintarTarjetas(app, animacion = 'entra') {
  document.body.classList.add('en-mazo')
  const { b, cola, vuelta, reves } = sesion
  const carta = cola[0]
  const cabecera = `<header class="mazo-cabeza">
      <a href="${b.volver}" class="cerrar" aria-label="Salir de las tarjetas">✕</a>
      <div class="contador-tarjetas"><b>${esc(b.titulo)}</b><span>${cola.length ? `quedan ${cola.length}` : 'hecho'}</span></div>
      <span></span></header>`
  if (!carta) {
    app.innerHTML = `<div class="mazo">${cabecera}
      <section class="carta tipo-resumen entra"><div class="resumen">
        <p class="festejo" aria-hidden="true">✓</p>
        <h1>${sesion.total ? 'Te las sabes todas' : 'Ya te las sabías todas'}</h1>
        <p class="cifras">${sesion.total ? `${sesion.total} tarjetas en ${sesion.hechas} vueltas` : 'Puedes repasarlas otra vez desde el principio.'}</p>
        <div class="acciones">
          <a class="boton primario" href="#/tarjetas/${sesion.fuente}/${sesion.id}/todas${reves ? '-reves' : ''}">Repasar todas otra vez</a>
          <a class="boton" href="${b.volver}">Volver</a>
        </div></div></section></div>`
    return
  }
  const frente = reves ? carta.reverso : carta.anverso
  const dorso = reves ? carta.anverso : carta.reverso
  const corto = frente.length <= 8
  app.innerHTML = `<div class="mazo">${cabecera}
    <section class="zona-tarjeta ${animacion}">
      <button type="button" class="tarjeta-memoria ${vuelta ? 'girada' : ''}" data-girar aria-label="${vuelta ? 'Respuesta' : 'Pulsa para ver la respuesta'}">
        <span class="cara anverso"><span class="sobre">${esc(carta.sobre)}</span><span class="frente ${corto ? 'codigo' : ''}">${esc(frente)}</span><span class="pista">Toca para darle la vuelta</span></span>
        <span class="cara reverso"><span class="sobre">${esc(carta.sobre)} · ${esc(frente)}</span><span class="dorso ${dorso.length <= 8 ? 'codigo' : ''}">${esc(dorso)}</span></span>
      </button>
    </section>
    <footer class="mazo-pie">${
      vuelta
        ? '<button type="button" class="boton" data-tarjeta="otra">Otra vez</button><button type="button" class="boton primario" data-tarjeta="se">La sé</button>'
        : '<button type="button" class="boton primario" data-girar>Ver la respuesta</button>'
    }</footer></div>`
}

function responderTarjeta(app, sabe) {
  const [carta, ...resto] = sesion.cola
  guardarTarjeta(carta.id, sabe)
  sesion = { ...sesion, cola: sabe ? resto : [...resto, carta], vuelta: false, hechas: sesion.hechas + 1 }
  pintarTarjetas(app, sabe ? 'sale-der' : 'sale-izq')
}

/** @returns {boolean} si el clic era de las tarjetas */
export function clicTarjetas(app, t) {
  if (!sesion) return false
  if (t.closest('[data-girar]')) {
    sesion = { ...sesion, vuelta: !sesion.vuelta }
    pintarTarjetas(app, '')
    return true
  }
  const boton = t.closest('[data-tarjeta]')
  if (boton) {
    responderTarjeta(app, boton.dataset.tarjeta === 'se')
    return true
  }
  return false
}

export function teclaTarjetas(app, tecla) {
  if (!sesion?.cola.length) return false
  if (tecla === ' ' || tecla === 'Enter') {
    sesion = { ...sesion, vuelta: !sesion.vuelta }
    pintarTarjetas(app, '')
    return true
  }
  if (sesion.vuelta && (tecla === 'ArrowRight' || tecla === 'ArrowLeft')) {
    responderTarjeta(app, tecla === 'ArrowRight')
    return true
  }
  return false
}

/** Deslizar con la tarjeta girada: derecha «la sé», izquierda «otra vez». */
export function deslizarTarjetas(app, dx) {
  if (!sesion?.cola.length || !sesion.vuelta) return false
  responderTarjeta(app, dx > 0)
  return true
}

/* ------------------------------------------------------------------ */
/* Reto rápido                                                          */
/* ------------------------------------------------------------------ */

const PREGUNTAS_RETO = 10
const barajar = (lista) => lista.map((x) => [Math.random(), x]).sort((a, b) => a[0] - b[0]).map(([, x]) => x)

function preguntaDefinicion(o) {
  const ejes = ['T', 'N'].filter((e) => o[e].length >= 3)
  const eje = barajar(ejes)[0]
  const [codigo, definicion] = barajar(o[eje].filter(([c]) => !/^(N0)$/.test(c)))[0]
  const otras = barajar(o[eje].filter(([c]) => c !== codigo)).slice(0, 3)
  if (Math.random() < 0.5) {
    return { enunciado: `${o.nombre}: «${definicion}». ¿Qué categoría es?`, opciones: barajar([codigo, ...otras.map(([c]) => c)]), correcta: codigo, explicacion: `${codigo}: ${definicion}.` }
  }
  return { enunciado: `${o.nombre}: ¿qué es ${codigo}?`, opciones: barajar([definicion, ...otras.map(([, d]) => d)]), correcta: definicion, explicacion: `${codigo}: ${definicion}.` }
}

function preguntaEstadio(o) {
  const r = rejilla(o)
  const celdas = r.filas.flatMap((f) => f.celdas.map((e, k) => ({ T: f.T, col: r.valores[k], e }))).filter((c) => c.e && c.e !== '0')
  const c = barajar(celdas)[0]
  const todos = [...new Set(celdas.map((x) => x.e))]
  const otros = barajar(todos.filter((e) => e !== c.e)).slice(0, 3)
  const valores = r.eje === 'N' ? `${c.T} ${c.col} M0` : `${c.T} N0 M0, ${o.columnasExtra.titulo.toLowerCase()} ${c.col}`
  const correcta = `Estadio ${c.e}`
  return {
    enunciado: `${o.nombre}: ${valores}. ¿Qué estadio es?`,
    opciones: barajar([correcta, ...otros.map((e) => `Estadio ${e}`)]),
    correcta,
    explicacion: `${valores} → estadio ${estadioDe(o, { T: c.T, N: r.eje === 'N' ? c.col : 'N0', M: 'M0', [r.eje]: c.col })}.`,
  }
}

let reto = null // { o, preguntas, i, elegida, aciertos }

export function abrirReto(app, id) {
  const o = ORGANOS_TNM.find((x) => x.id === id)
  if (!o) return false
  const preguntas = Array.from({ length: PREGUNTAS_RETO }, (_, i) => (o.estadios && i % 3 === 2 ? preguntaEstadio(o) : preguntaDefinicion(o)))
  reto = { o, preguntas, i: 0, elegida: null, aciertos: 0 }
  pintarReto(app)
  return true
}
export const cerrarReto = () => {
  reto = null
}
export const enReto = () => reto !== null

function pintarReto(app) {
  document.body.classList.add('en-mazo')
  const { o, preguntas, i, elegida, aciertos } = reto
  const p = preguntas[i]
  const segmentos = preguntas.map((_, k) => `<span class="${k < i ? 'hecho' : k === i ? 'actual' : ''} interactivo"></span>`).join('')
  const cabeza = `<header class="mazo-cabeza"><a href="#/tnm/${o.id}" class="cerrar" aria-label="Salir del reto">✕</a>
    <div class="segmentos">${segmentos}</div><span class="racha ${aciertos >= 2 ? 'visible' : ''}">${aciertos}</span></header>`
  if (!p) {
    app.innerHTML = `<div class="mazo">${cabeza}<section class="carta entra"><div class="resumen">
      <p class="festejo" aria-hidden="true">${aciertos >= 8 ? '★' : '✓'}</p>
      <h1>${aciertos} de ${preguntas.length}</h1>
      <p class="cifras">${aciertos >= 8 ? 'Te lo sabes.' : aciertos >= 5 ? 'Casi: una vuelta más de tarjetas y lo tienes.' : 'Repasa las tarjetas y vuelve a intentarlo.'}</p>
      <div class="acciones"><a class="boton primario" href="#/reto/${o.id}/${Date.now()}">Otro reto</a>
      <a class="boton" href="#/tarjetas/tnm/${o.id}">Tarjetas de ${esc(o.nombre)}</a><a class="boton" href="#/tnm/${o.id}">Volver</a></div></div></section></div>`
    return
  }
  const opciones = p.opciones
    .map((op, k) => {
      let estado = ''
      if (elegida !== null) estado = op === p.correcta ? 'bien' : op === elegida ? 'mal' : 'apagada'
      return `<li><button type="button" class="opcion ${estado}" data-reto="${k}" ${elegida !== null ? 'disabled' : ''}><span class="letra">${'ABCD'[k]}</span><span class="txt">${esc(op)}</span></button></li>`
    })
    .join('')
  const veredicto =
    elegida === null
      ? ''
      : `<div class="veredicto ${elegida === p.correcta ? 'bien' : 'mal'}" role="status"><p class="titular">${elegida === p.correcta ? 'Correcto' : 'No'}</p><p>${esc(p.explicacion)}</p></div>`
  app.innerHTML = `<div class="mazo">${cabeza}
    <section class="carta entra-der"><p class="sobre">Reto · ${esc(o.nombre)}</p><p class="enunciado">${esc(p.enunciado)}</p><ol class="opciones">${opciones}</ol>${veredicto}</section>
    <footer class="mazo-pie">${elegida === null ? '<p class="pista">Elige una respuesta</p>' : `<button type="button" class="boton primario" data-reto-siguiente>${i === preguntas.length - 1 ? 'Ver resultado' : 'Siguiente'} →</button>`}</footer></div>`
}

export function clicReto(app, t) {
  if (!reto) return false
  const boton = t.closest('[data-reto]')
  if (boton && reto.elegida === null) {
    const p = reto.preguntas[reto.i]
    const elegida = p.opciones[Number(boton.dataset.reto)]
    reto = { ...reto, elegida, aciertos: reto.aciertos + (elegida === p.correcta ? 1 : 0) }
    pintarReto(app)
    return true
  }
  if (t.closest('[data-reto-siguiente]')) {
    reto = { ...reto, i: reto.i + 1, elegida: null }
    pintarReto(app)
    window.scrollTo(0, 0)
    return true
  }
  return false
}
