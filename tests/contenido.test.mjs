import test from 'node:test'
import assert from 'node:assert/strict'
import { CASOS, ORDENADAS } from '../assets/contenido.js'
import { TODAS, ORDEN } from '../assets/orden.js'
import { CATEGORIAS, estadio } from '../assets/estadios.js'

test('cada pregunta tiene id único, 4 opciones y una correcta válida', () => {
  const ids = TODAS.map((p) => p.id)
  assert.equal(new Set(ids).size, ids.length)
  for (const p of TODAS) {
    assert.equal(p.opciones.length, 4, p.id)
    assert.ok(p.correcta >= 0 && p.correcta < 4, p.id)
    assert.ok(p.explicacion.length > 40, `${p.id}: explicación demasiado corta`)
  }
  for (const id of ORDENADAS) assert.ok(ids.includes(id), `ORDENADAS cita ${id}, que no existe`)
})

test('el orden de presentación es una permutación y reparte la clave', () => {
  const cuenta = [0, 0, 0, 0]
  for (const p of TODAS) {
    const orden = ORDEN.get(p.id)
    assert.deepEqual([...orden].sort(), [0, 1, 2, 3], p.id)
    cuenta[orden.indexOf(p.correcta)]++
  }
  assert.ok(Math.max(...cuenta) - Math.min(...cuenta) <= 2, `clave descompensada: ${cuenta}`)
})

test('cada «construir el TNM» usa categorías existentes y da un estadio', () => {
  for (const c of CASOS)
    for (const paso of c.pasos.filter((p) => p.construir)) {
      const k = paso.construir
      for (const eje of ['T', 'N', 'M']) assert.ok(CATEGORIAS[k.organo][eje].includes(k[eje]), `${c.id} ${eje}`)
      assert.ok(estadio(k.organo, k.prefijo, k.T, k.N, k.M), c.id)
    }
})
