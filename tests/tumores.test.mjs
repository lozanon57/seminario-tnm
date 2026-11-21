import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const carpeta = fileURLToPath(new URL('../assets/tumores/', import.meta.url))
const ficheros = readdirSync(carpeta).filter((f) => f.endsWith('.js') && f !== 'index.js')

const BLOQUES = ['esofago', 'estomago', 'delgado', 'colorrectal', 'higado', 'biliar', 'pancreas', 'peritoneo']
const TNM = ['esofago', 'estomago', 'gist', 'delgado', 'colon', 'ano', 'higado', 'intrahepatico', 'perihiliar', 'distal', 'vesicula', 'ampolla', 'pancreas', 'tne-pancreas', 'sarcoma', null]
const ORGANOS = ['esofago', 'estomago', 'duodeno', 'delgado', 'apendice', 'colon', 'recto', 'ano', 'higado', 'vesicula', 'via-biliar', 'pancreas', 'bazo', 'peritoneo', 'retroperitoneo']
const PAREDES = ['esofago', 'estomago', 'delgado', 'colon', 'vesicula']
const MAX_CAJA = 32
const MAX_DETALLE = 44

const palabras = (t) => t.trim().split(/\s+/).length
const sinHtmlProhibido = (t) => !/<(?!\/?(b|i)>)/.test(t)

async function cargar() {
  const todas = []
  for (const f of ficheros) {
    const modulo = await import(new URL(`../assets/tumores/${f}`, import.meta.url))
    const exportadas = Object.entries(modulo).filter(([nombre]) => nombre.startsWith('TUMORES_'))
    assert.equal(exportadas.length, 1, `${f}: debe exportar un único TUMORES_<GRUPO>`)
    for (const ficha of exportadas[0][1]) todas.push({ f, ficha })
  }
  return todas
}

function validarDibujo(d, donde) {
  const cortos = (t, max, que) => assert.ok(!t || t.length <= max, `${donde}: ${que} demasiado largo (${t?.length} > ${max}): «${t}»`)
  switch (d.tipo) {
    case 'mapa':
      assert.ok(d.resaltar?.length && d.resaltar.every((o) => ORGANOS.includes(o)), `${donde}: órganos del mapa`)
      break
    case 'algoritmo':
      assert.ok(d.pasos?.length >= 1 && d.pasos.length <= 5, `${donde}: 1–5 pasos`)
      for (const p of d.pasos) cortos(p.texto, MAX_CAJA, 'texto'), cortos(p.detalle, MAX_DETALLE, 'detalle')
      if (d.ramas) {
        assert.ok(d.ramas.length >= 2 && d.ramas.length <= 3, `${donde}: 2–3 ramas`)
        for (const r of d.ramas) {
          assert.ok(r.si && r.texto, `${donde}: rama sin si/texto`)
          cortos(r.si, 22, 'condición de rama'), cortos(r.texto, 26, 'texto de rama'), cortos(r.detalle, 34, 'detalle de rama')
        }
      }
      break
    case 'escala':
      assert.ok(d.niveles?.length >= 2 && d.niveles.length <= 6, `${donde}: 2–6 niveles`)
      for (const n of d.niveles) assert.ok(n.codigo && n.texto, `${donde}: nivel sin código o texto`), cortos(n.texto, 40, 'texto de nivel'), cortos(n.detalle, 48, 'detalle de nivel')
      break
    case 'regla':
      assert.equal(d.etiquetas?.length, d.cortes?.length + 1, `${donde}: etiquetas = cortes + 1`)
      assert.ok(d.cortes.every((c, i) => i === 0 || c > d.cortes[i - 1]), `${donde}: cortes crecientes`)
      break
    case 'pared':
      assert.ok(PAREDES.includes(d.organo), `${donde}: órgano de pared`)
      break
    case 'comparar':
      assert.ok(d.columnas?.length >= 3 && d.columnas.length <= 4, `${donde}: 2–3 columnas de datos más la de rótulos`)
      assert.ok(d.filas?.length >= 2 && d.filas.length <= 6, `${donde}: 2–6 filas`)
      for (const f of d.filas) assert.equal(f.length, d.columnas.length, `${donde}: fila con nº de celdas distinto`)
      break
    case 'cascada':
      assert.ok(d.pasos?.length >= 3 && d.pasos.length <= 6, `${donde}: 3–6 pasos`)
      for (const p of d.pasos) cortos(p, 26, 'paso de cascada')
      break
    case 'siewert':
    case 'bismuth':
    case 'couinaud':
    case 'pci':
      break
    default:
      assert.fail(`${donde}: tipo de dibujo desconocido «${d.tipo}»`)
  }
}

test('hay fichas de tumores', async () => {
  assert.ok(ficheros.length > 0, 'no hay ningún fichero en assets/tumores/')
})

test('cada ficha cumple el esquema', async () => {
  const todas = await cargar()
  const ids = new Set()
  for (const { f, ficha } of todas) {
    const donde = `${f} › ${ficha.id}`
    assert.match(ficha.id, /^[a-z0-9]+(-[a-z0-9]+)*$/, `${donde}: id en kebab-case`)
    assert.ok(!ids.has(ficha.id), `${donde}: id repetido`)
    ids.add(ficha.id)
    assert.ok(BLOQUES.includes(ficha.bloque), `${donde}: bloque «${ficha.bloque}»`)
    assert.ok(ficha.titulo && ficha.subtitulo, `${donde}: título y subtítulo`)
    assert.ok(TNM.includes(ficha.tnm), `${donde}: tnm «${ficha.tnm}»`)
    assert.ok(ficha.mapa?.length && ficha.mapa.every((o) => ORGANOS.includes(o)), `${donde}: mapa`)
    assert.equal(ficha.esencial?.length, 3, `${donde}: 3 frases esenciales`)
    assert.ok(ficha.secciones?.length >= 5 && ficha.secciones.length <= 8, `${donde}: 5–8 secciones`)
    assert.ok(ficha.tarjetas?.length >= 8 && ficha.tarjetas.length <= 12, `${donde}: 8–12 tarjetas`)
    assert.ok(ficha.preguntas?.length >= 5 && ficha.preguntas.length <= 7, `${donde}: 5–7 preguntas`)
    assert.ok(ficha.fuentes?.length >= 1, `${donde}: fuentes`)

    let dibujos = 0
    for (const s of ficha.secciones) {
      const ds = `${donde} › ${s.titulo}`
      assert.ok(s.titulo, `${ds}: sin título`)
      assert.ok(s.puntos?.length >= 2 && s.puntos.length <= 6, `${ds}: 2–6 puntos`)
      for (const p of s.puntos) {
        assert.ok(palabras(p.replace(/<[^>]+>/g, '')) <= 40, `${ds}: punto de más de 40 palabras: «${p.slice(0, 60)}…»`)
        assert.ok(sinHtmlProhibido(p), `${ds}: HTML no permitido`)
        assert.ok(!/\*\*|`|^\s*[-•]/.test(p), `${ds}: markdown en un punto`)
      }
      const lista = s.dibujo ? [s.dibujo].flat() : []
      lista.forEach((d, k) => validarDibujo(d, `${ds} › dibujo ${k + 1}`))
      dibujos += lista.length
    }
    assert.ok(dibujos >= 4, `${donde}: solo ${dibujos} dibujos (mínimo 4)`)

    for (const t of ficha.tarjetas) {
      assert.ok(t.a && t.r, `${donde}: tarjeta incompleta`)
      assert.ok(palabras(t.a) <= 15, `${donde}: anverso largo «${t.a}»`)
      assert.ok(palabras(t.r) <= 30, `${donde}: reverso largo «${t.r}»`)
    }

    ficha.preguntas.forEach((p, k) => {
      const dp = `${donde} › ${p.id}`
      assert.equal(p.id, `${ficha.id}-${k + 1}`, `${dp}: id debe ser ${ficha.id}-${k + 1}`)
      assert.equal(p.opciones?.length, 4, `${dp}: 4 opciones`)
      assert.equal(new Set(p.opciones).size, 4, `${dp}: opciones repetidas`)
      assert.ok(Number.isInteger(p.correcta) && p.correcta >= 0 && p.correcta <= 3, `${dp}: correcta`)
      assert.ok(palabras(p.enunciado) <= 60, `${dp}: enunciado de más de 60 palabras`)
      const n = palabras(p.explicacion)
      assert.ok(n >= 30 && n <= 120, `${dp}: explicación de ${n} palabras (30–120)`)
      assert.ok(!p.opciones.some((o) => /(todas|ninguna) de las anteriores/i.test(o)), `${dp}: «todas/ninguna de las anteriores»`)
    })
  }
})
