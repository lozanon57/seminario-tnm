/**
 * Pestaña «TNM puro»: las definiciones de cada órgano, sus tablas de estadios
 * como mapa de color y las escalas que se estudian al lado del TNM. Desde cada
 * órgano se entra a sus tarjetas y a un reto rápido.
 */
import { ORGANOS_TNM, ESCALAS, GRUPOS_TNM } from './tnm-datos.js'
import { rejilla, columnas, familia } from './tnm-estadios.js'
import { dibujo } from './dibujos.js'
import { esc, htmlSeguro } from './dibujos-base.js'
import { sabidas } from './tarjetas.js'
import { TUMORES } from './tumores/index.js'

function baldosaTnm(href, nombre, detalle, cuenta) {
  const fraccion = cuenta.total ? cuenta.sabidas / cuenta.total : 0
  return `<a class="baldosa ${cuenta.total && cuenta.sabidas === cuenta.total ? 'hecha' : ''}" href="${href}">
    <span class="tit">${esc(nombre)}</span><span class="eti">${esc(detalle)}</span>
    <span class="eti">${cuenta.sabidas}/${cuenta.total} tarjetas</span>
    <span class="barrita"><i style="width:${fraccion * 100}%"></i></span></a>`
}

export function vistaTnm(app) {
  const grupos = GRUPOS_TNM.map((g) => {
    const organos = ORGANOS_TNM.filter((o) => o.grupo === g.id)
    return `<h2>${esc(g.titulo)}</h2><div class="rejilla">${organos.map((o) => baldosaTnm(`#/tnm/${o.id}`, o.nombre, o.detalle, sabidas('tnm', o.id))).join('')}</div>`
  }).join('')
  app.innerHTML = `
    <section class="heroe heroe-corto">
      <p class="sobre">Para memorizar</p>
      <h1>TNM <span>puro</span></h1>
      <p class="sub">Las T, las N y las M de cada tumor de la asignatura, sus estadios y las escalas que van con ellas. Tarjetas para aprenderlas y un reto de diez preguntas para comprobarlo.</p>
    </section>
    <div class="aviso-suave">Cómo memorizar: <b>tarjetas</b> hasta que todas digan «la sé», luego el <b>reto</b>. Mañana, otra vuelta corta: lo que se repasa espaciado se olvida mucho menos.</div>
    ${grupos}
    <h2>Otras escalas</h2>
    <div class="rejilla">${ESCALAS.map((e) => baldosaTnm(`#/tnm/${e.id}`, e.nombre, e.detalle, sabidas('escala', e.id))).join('')}</div>
    <p class="pie">AJCC Cancer Staging Manual, 8.ª edición (2017). Para estómago y colon, idéntica a la UICC 9.ª vigente.</p>`
}

/* ------------------------------------------------------------------ */

const lista = (filas) =>
  `<dl class="definiciones">${filas.map(([c, d]) => `<div><dt>${esc(c)}</dt><dd>${esc(d)}</dd></div>`).join('')}</dl>`

function tablaEstadios(o) {
  const r = rejilla(o)
  const { etiquetas } = columnas(o)
  const titulo = r.eje === 'N' ? '' : `<p class="nota">Columnas: ${esc(o.columnasExtra.titulo.toLowerCase())}. Todo con N0 y M0.</p>`
  const cabecera = `<tr><th scope="col"></th>${etiquetas.map(([v, k]) => `<th scope="col">${esc(v)}<small>${esc(k)}</small></th>`).join('')}</tr>`
  const filas = r.filas
    .map((f) => `<tr><th scope="row">${esc(f.T)}</th>${f.celdas.map((e) => `<td class="est est-${familia(e) || 'nada'}">${e ?? '—'}</td>`).join('')}</tr>`)
    .join('')
  const extras = r.extras.map((x) => `<li><span class="est est-${familia(x.estadio)}">${x.estadio}</span> ${esc(x.rotulo)}</li>`).join('')
  return `<h2>Estadios</h2><p class="sub">${esc(o.estadios.titulo)}${r.eje === 'N' ? ', con M0' : ''}. Mismo color, mismo estadio romano.</p>${titulo}
    <div class="tabla-scroll"><table class="mapa-estadios"><thead>${cabecera}</thead><tbody>${filas}</tbody></table></div>
    <ul class="extras">${extras}</ul>`
}

function vistaOrgano(app, o) {
  const cuenta = sabidas('tnm', o.id)
  const figuraT = o.pared ? dibujo({ tipo: 'pared', organo: o.pared }) : o.regla ? dibujo({ tipo: 'regla', ...o.regla }) : ''
  const fichas = TUMORES.filter((t) => t.tnm === o.id)
  app.innerHTML = `
    <a class="volver" href="#/tnm">← TNM puro</a>
    <p class="sobre">${esc(GRUPOS_TNM.find((g) => g.id === o.grupo).titulo)}</p>
    <h1>${esc(o.nombre)}</h1><p class="sub">${esc(o.detalle)} · AJCC 8.ª</p>
    <div class="acciones-fila">
      <a class="boton primario" href="#/tarjetas/tnm/${o.id}">Tarjetas · ${cuenta.sabidas}/${cuenta.total}</a>
      <a class="boton" href="#/reto/${o.id}">Reto rápido</a>
      <a class="boton" href="#/tarjetas/tnm/${o.id}/todas-reves">Al revés</a>
    </div>
    <div class="clave trucos"><p class="rotulo">Trucos para recordarlo</p><ul>${o.trucos.map((t) => `<li>${htmlSeguro(t)}</li>`).join('')}</ul></div>
    <h2>T · tumor primario</h2>${figuraT}${lista(o.T)}
    <h2>N · ganglios regionales</h2>${dibujo({ tipo: 'escalaN', categorias: o.N })}${lista(o.N)}
    <h2>M · metástasis</h2>${lista(o.M)}
    ${o.estadios ? tablaEstadios(o) : ''}
    ${o.notaEstadios ? `<p class="nota">${esc(o.notaEstadios)}</p>` : ''}
    ${fichas.length ? `<h2>Para estudiarlo entero</h2><div class="rejilla dos">${fichas.map((t) => `<a class="baldosa herramienta" href="#/tumor/${t.id}"><span class="tit">${esc(t.titulo)}</span><span class="eti">Ficha, esquemas y preguntas</span></a>`).join('')}</div>` : ''}`
}

function vistaEscala(app, e) {
  const cuenta = sabidas('escala', e.id)
  const niveles = e.niveles.map(([codigo, texto, detalle]) => ({ codigo, texto, detalle }))
  app.innerHTML = `
    <a class="volver" href="#/tnm">← TNM puro</a>
    <p class="sobre">Otras escalas</p><h1>${esc(e.nombre)}</h1><p class="sub">${esc(e.detalle)}</p>
    <div class="acciones-fila"><a class="boton primario" href="#/tarjetas/escala/${e.id}">Tarjetas · ${cuenta.sabidas}/${cuenta.total}</a></div>
    ${e.dibujo ? dibujo(e.dibujo) : ''}
    ${dibujo({ tipo: 'escala', niveles })}
    <div class="clave"><p class="rotulo">Para recordarlo</p><p>${esc(e.truco)}</p></div>`
}

/** @returns {boolean} si existía */
export function vistaTnmDetalle(app, id) {
  const o = ORGANOS_TNM.find((x) => x.id === id)
  if (o) {
    vistaOrgano(app, o)
    return true
  }
  const e = ESCALAS.find((x) => x.id === id)
  if (e) {
    vistaEscala(app, e)
    return true
  }
  return false
}
