/**
 * Cada bloque o caso se convierte en un mazo de cartas: una idea, un dibujo o
 * una pregunta por pantalla, y se pasa a la siguiente. Microaprendizaje con
 * recuperación activa: primero se lee una idea corta, luego se responde, y la
 * corrección llega en el momento.
 */
import { BLOQUES, CASOS, CHULETA } from './contenido.js'
import { TODAS, ORDEN } from './orden.js'
import { CATEGORIAS, estadio } from './estadios.js'
import { dibujo } from './dibujos.js'

export const NOMBRE_ORGANO = { estomago: 'Estómago', colon: 'Colon' }

const GRUPOS = {
  'estomago-p': ['0', 'IA', 'IB', 'IIA', 'IIB', 'IIIA', 'IIIB', 'IIIC', 'IV'],
  'estomago-c': ['0', 'I', 'IIA', 'IIB', 'III', 'IVA', 'IVB'],
  colon: ['0', 'I', 'IIA', 'IIB', 'IIC', 'IIIA', 'IIIB', 'IIIC', 'IVA', 'IVB', 'IVC'],
}

export const esc = (t) =>
  String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

const definicion = (organo, eje, valor) => CHULETA[organo][eje].find(([v]) => v === valor)?.[1] ?? ''

/* ------------------------------------------------------------------ */
/* Módulos                                                              */
/* ------------------------------------------------------------------ */

/** Todos los módulos en el orden del seminario. */
export const MODULOS = [
  ...BLOQUES.map((b) => ({ id: `b-${b.id}`, tipo: 'bloque', fuente: b, numero: b.numero, titulo: b.titulo })),
  ...CASOS.map((c) => ({ id: c.id, tipo: 'caso', fuente: c, numero: c.numero, titulo: c.titulo })),
]

export function preguntasDe(modulo) {
  if (modulo.tipo === 'bloque') return modulo.fuente.preguntas
  return modulo.fuente.pasos.filter((p) => p.pregunta).map((p) => p.pregunta)
}

/* ------------------------------------------------------------------ */
/* Construcción de los mazos                                            */
/* ------------------------------------------------------------------ */

export function mazoDe(modulo) {
  const f = modulo.fuente
  const cartas = [{ tipo: 'portada' }]
  if (modulo.tipo === 'bloque') {
    for (const p of f.lamina) {
      const ultima = cartas.at(-1)
      if (typeof p === 'string') cartas.push({ tipo: 'idea', html: p, dibujos: [] })
      else if (ultima.tipo === 'idea') ultima.dibujos.push(p.dibujo)
      else cartas.push({ tipo: 'idea', html: '', dibujos: [p.dibujo] })
    }
    for (const pregunta of f.preguntas) cartas.push({ tipo: 'pregunta', pregunta })
  } else {
    let relato = ''
    for (const paso of f.pasos) {
      const ultima = cartas.at(-1)
      if (paso.texto) {
        relato = paso.texto
        cartas.push({ tipo: 'relato', texto: paso.texto, dibujos: [] })
      } else if (paso.dibujo) {
        ultima.dibujos.push(paso.dibujo)
      } else if (paso.pregunta) {
        // Una pregunta que sigue al relato va en la misma carta: el alumno
        // necesita el dato delante para contestar.
        if (ultima.tipo === 'relato' && !ultima.pregunta) ultima.pregunta = paso.pregunta
        else cartas.push({ tipo: 'pregunta', pregunta: paso.pregunta })
      } else if (paso.construir) {
        cartas.push({ tipo: 'construir', datos: paso.construir, contexto: relato })
      }
    }
  }
  cartas.push({ tipo: 'resumen' })
  return cartas
}

/** Preguntas para repasar: falladas o acertadas sin estar seguro. */
export function pendientesDeRepaso(progreso) {
  return TODAS.filter((p) => {
    const r = progreso.respuestas[p.id]
    if (!r) return false
    const flojo = r.opcion !== p.correcta || !r.seguro
    if (!flojo) return false
    const repaso = progreso.respuestas[`r:${p.id}`]
    return !(repaso && repaso.opcion === p.correcta && repaso.seguro)
  })
}

export function mazoRepaso(preguntas) {
  return [{ tipo: 'portada' }, ...preguntas.map((p) => ({ tipo: 'pregunta', pregunta: p, repaso: true })), { tipo: 'resumen' }]
}

/* ------------------------------------------------------------------ */
/* Estado de una carta                                                  */
/* ------------------------------------------------------------------ */

export const idRespuesta = (carta) => (carta.repaso ? `r:${carta.pregunta.id}` : carta.pregunta.id)

/** ¿Hay que hacer algo en esta carta antes de pasar? */
export function pendiente(carta, progreso, modulo) {
  if (carta.pregunta) return !progreso.respuestas[idRespuesta(carta)]
  if (carta.tipo === 'construir') return !progreso.construcciones[modulo.id]
  return false
}

/* ------------------------------------------------------------------ */
/* Pintado de cada carta                                                */
/* ------------------------------------------------------------------ */

function htmlOpciones(carta, progreso, seleccion) {
  const p = carta.pregunta
  const r = progreso.respuestas[idRespuesta(carta)]
  const orden = ORDEN.get(p.id)
  const opciones = orden
    .map((i, posicion) => {
      let estado = ''
      if (r) estado = i === p.correcta ? 'bien' : i === r.opcion ? 'mal' : 'apagada'
      else if (seleccion === i) estado = 'elegida'
      return `<li><button type="button" class="opcion ${estado}" data-opcion="${i}" ${r ? 'disabled' : ''}
        aria-pressed="${seleccion === i}"><span class="letra">${'ABCD'[posicion]}</span><span class="txt">${esc(p.opciones[i])}</span></button></li>`
    })
    .join('')
  let veredicto = ''
  if (r) {
    const acierto = r.opcion === p.correcta
    const matiz =
      !acierto && r.seguro
        ? '<p class="matiz">Estabas seguro y no era: es de las que más conviene repasar.</p>'
        : acierto && !r.seguro
          ? '<p class="matiz">La has acertado intuyéndola. Repásala hasta que la sepas seguro.</p>'
          : ''
    veredicto = `<div class="veredicto ${acierto ? 'bien' : 'mal'}" role="status">
      <p class="titular">${acierto ? 'Correcto' : `Era la ${'ABCD'[orden.indexOf(p.correcta)]}`}</p>
      <p>${esc(p.explicacion)}</p>${matiz}</div>`
  }
  return `<p class="enunciado">${esc(p.enunciado)}</p><ol class="opciones">${opciones}</ol>${veredicto}`
}

function htmlConstruir(carta, progreso, modulo, borrador) {
  const c = carta.datos
  const hecho = progreso.construcciones[modulo.id]
  const elegido = hecho ?? borrador
  const clave = { T: c.T, N: c.N, M: c.M, estadio: estadio(c.organo, c.prefijo, c.T, c.N, c.M) }
  const grupos = GRUPOS[c.organo === 'colon' ? 'colon' : `estomago-${c.prefijo}`]
  const fila = (eje, valores) => `
    <div class="eje"><span class="rotulo">${eje === 'estadio' ? 'Estadio' : eje}</span>
      <div class="chips" data-eje="${eje}">${valores
        .map((v) => {
          const marcado = elegido?.[eje] === v
          const estado = !hecho ? (marcado ? 'elegido' : '') : v === clave[eje] ? 'bien' : marcado ? 'mal' : ''
          const etiqueta = eje === 'T' || eje === 'N' ? c.prefijo + v : v
          return `<button type="button" class="chip ${estado}" data-valor="${v}" ${hecho ? 'disabled' : ''}>${etiqueta}</button>`
        })
        .join('')}</div></div>`
  let veredicto = ''
  if (hecho) {
    const todo = ['T', 'N', 'M', 'estadio'].every((e) => hecho[e] === clave[e])
    const fallos = ['T', 'N', 'M']
      .filter((e) => hecho[e] !== clave[e])
      .map((e) => `<li><b>${clave[e]}</b>: ${esc(definicion(c.organo, e, clave[e]))}</li>`)
      .join('')
    const soloEstadio = hecho.estadio !== clave.estadio && !fallos
    veredicto = `<div class="veredicto ${todo ? 'bien' : 'mal'}" role="status">
      <p class="titular">${c.prefijo}${clave.T} ${c.prefijo}${clave.N} ${clave.M} → estadio ${clave.estadio}</p>
      ${fallos ? `<ul>${fallos}</ul>` : ''}
      ${soloEstadio ? '<p>El TNM estaba bien: el fallo está en la tabla de estadios. Mírala en la calculadora.</p>' : ''}
      ${c.prefijo === 'c' && c.organo === 'estomago' ? '<p>Es la tabla clínica del estómago, que no subdivide el estadio I.</p>' : ''}
    </div>`
  }
  return `<p class="enunciado">Construye el TNM y el estadio ${c.prefijo === 'c' ? 'clínico' : 'patológico'}</p>
    ${carta.contexto ? `<p class="contexto">${esc(carta.contexto)}</p>` : ''}
    ${fila('T', CATEGORIAS[c.organo].T)}${fila('N', CATEGORIAS[c.organo].N)}${fila('M', CATEGORIAS[c.organo].M)}${fila('estadio', grupos)}
    ${veredicto}`
}

function anillo(fraccion) {
  const r = 46
  const largo = 2 * Math.PI * r
  return `<svg class="anillo" viewBox="0 0 110 110" aria-hidden="true">
    <circle cx="55" cy="55" r="${r}" class="anillo-fondo"/>
    <circle cx="55" cy="55" r="${r}" class="anillo-valor" stroke-dasharray="${largo * fraccion} ${largo}" transform="rotate(-90 55 55)"/>
    <text x="55" y="62" text-anchor="middle" class="anillo-texto">${Math.round(fraccion * 100)}%</text></svg>`
}

function htmlResumen(cartas, progreso, modulo, siguiente) {
  const preguntas = cartas.filter((c) => c.pregunta)
  const respuestas = preguntas.map((c) => ({ c, r: progreso.respuestas[idRespuesta(c)] })).filter((x) => x.r)
  const bien = respuestas.filter((x) => x.r.opcion === x.c.pregunta.correcta).length
  const seguroMal = respuestas.filter((x) => x.r.opcion !== x.c.pregunta.correcta && x.r.seguro).length
  const total = preguntas.length || 1
  const clave = modulo.fuente?.clave
  return `<div class="resumen">
    ${anillo(bien / total)}
    <p class="cifras"><b>${bien}</b> de ${preguntas.length} acertadas${seguroMal ? ` · <b>${seguroMal}</b> fallada${seguroMal === 1 ? '' : 's'} estando seguro` : ''}</p>
    ${clave ? `<div class="clave"><p class="rotulo">Para llevarte</p><p>${esc(clave)}</p></div>` : ''}
    <div class="acciones">
      ${siguiente ? `<a class="boton primario" href="#/m/${siguiente.id}">${siguiente.tipo === 'caso' ? `Caso ${siguiente.numero}` : `Bloque ${siguiente.numero}`}: ${esc(siguiente.titulo)} →</a>` : ''}
      ${modulo.id !== 'repaso' ? '<button type="button" class="boton" data-repetir>Repetir este módulo</button>' : ''}
      <a class="boton" href="#/">Volver al inicio</a>
    </div></div>`
}

function htmlPortada(modulo, cartas) {
  const f = modulo.fuente
  const n = cartas.filter((c) => c.pregunta || c.tipo === 'construir').length
  if (modulo.id === 'repaso') {
    return `<div class="portada-carta"><p class="sobre">Repaso</p><h1>Lo que aún no tienes seguro</h1>
      <p class="sub">${n} pregunta${n === 1 ? '' : 's'} que fallaste o acertaste intuyendo. Cuando las aciertes estando seguro, salen del repaso.</p></div>`
  }
  const sobre = modulo.tipo === 'caso' ? `Caso ${modulo.numero} · ${NOMBRE_ORGANO[f.organo]}` : `Bloque ${modulo.numero}`
  return `<div class="portada-carta"><p class="sobre">${sobre}</p><h1>${esc(f.titulo)}</h1>
    ${f.concepto ? `<p class="sub">${esc(f.concepto)}</p>` : ''}
    <p class="meta">${n} pregunta${n === 1 ? '' : 's'}${f.minutos ? ` · ${f.minutos} min` : ''}</p></div>`
}

/**
 * @param {object} carta
 * @param {{ progreso, modulo, cartas, seleccion?: number, borrador?: object, siguiente?: object }} ctx
 */
export function htmlCarta(carta, ctx) {
  const { progreso, modulo, cartas } = ctx
  const dibujos = (lista) => lista.map((d) => dibujo(d)).join('')
  switch (carta.tipo) {
    case 'portada':
      return htmlPortada(modulo, cartas)
    case 'idea':
      return `${carta.html ? `<p class="idea">${carta.html}</p>` : ''}${dibujos(carta.dibujos)}`
    case 'relato':
      return `<p class="relato">${esc(carta.texto)}</p>${dibujos(carta.dibujos)}${
        carta.pregunta ? `<div class="bloque-pregunta">${htmlOpciones(carta, progreso, ctx.seleccion)}</div>` : ''
      }`
    case 'pregunta':
      return htmlOpciones(carta, progreso, ctx.seleccion)
    case 'construir':
      return htmlConstruir(carta, progreso, modulo, ctx.borrador)
    case 'resumen':
      return htmlResumen(cartas, progreso, modulo, ctx.siguiente)
    default:
      return ''
  }
}
