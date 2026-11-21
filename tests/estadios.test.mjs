// Comprueba la agrupación contra las tablas AJCC 8.ª transcritas por filas
// (estómago patológico) y por columnas (colon), para no copiar la misma tabla
// que el código.
import test from 'node:test'
import assert from 'node:assert/strict'
import { estadio, nEstomago, nColon } from '../assets/estadios.js'

const estomagoP = {
  IA: [['T1', 'N0']],
  IB: [['T1', 'N1'], ['T2', 'N0']],
  IIA: [['T1', 'N2'], ['T2', 'N1'], ['T3', 'N0']],
  IIB: [['T1', 'N3a'], ['T2', 'N2'], ['T3', 'N1'], ['T4a', 'N0']],
  IIIA: [['T2', 'N3a'], ['T3', 'N2'], ['T4a', 'N1'], ['T4a', 'N2'], ['T4b', 'N0']],
  IIIB: [['T1', 'N3b'], ['T2', 'N3b'], ['T3', 'N3a'], ['T4a', 'N3a'], ['T4b', 'N1'], ['T4b', 'N2']],
  IIIC: [['T3', 'N3b'], ['T4a', 'N3b'], ['T4b', 'N3a'], ['T4b', 'N3b']],
}
test('estómago patológico: las 25 combinaciones T×N', () => {
  let n = 0
  for (const [grupo, pares] of Object.entries(estomagoP))
    for (const [T, N] of pares) {
      for (const t of T === 'T1' ? ['T1a', 'T1b'] : [T]) assert.equal(estadio('estomago', 'p', t, N, 'M0'), grupo, `${t}${N}`)
      n++
    }
  assert.equal(n, 25)
  assert.equal(estadio('estomago', 'p', 'Tis', 'N0', 'M0'), '0')
  assert.equal(estadio('estomago', 'p', 'T2', 'N0', 'M1'), 'IV')
})

test('estómago clínico', () => {
  assert.equal(estadio('estomago', 'c', 'T1a', 'N0', 'M0'), 'I')
  assert.equal(estadio('estomago', 'c', 'T2', 'N0', 'M0'), 'I')
  assert.equal(estadio('estomago', 'c', 'T2', 'N3a', 'M0'), 'IIA')
  assert.equal(estadio('estomago', 'c', 'T4a', 'N0', 'M0'), 'IIB')
  assert.equal(estadio('estomago', 'c', 'T3', 'N1', 'M0'), 'III')
  assert.equal(estadio('estomago', 'c', 'T4b', 'N0', 'M0'), 'IVA')
  assert.equal(estadio('estomago', 'c', 'T1a', 'N0', 'M1'), 'IVB')
})

// Colon por columnas de N
const colonPorN = {
  N0: { T1: 'I', T2: 'I', T3: 'IIA', T4a: 'IIB', T4b: 'IIC' },
  N1a: { T1: 'IIIA', T2: 'IIIA', T3: 'IIIB', T4a: 'IIIB', T4b: 'IIIC' },
  N2a: { T1: 'IIIA', T2: 'IIIB', T3: 'IIIB', T4a: 'IIIC', T4b: 'IIIC' },
  N2b: { T1: 'IIIB', T2: 'IIIB', T3: 'IIIC', T4a: 'IIIC', T4b: 'IIIC' },
}
test('colon: tabla completa', () => {
  for (const [N, fila] of Object.entries(colonPorN))
    for (const [T, g] of Object.entries(fila)) {
      const ns = N === 'N1a' ? ['N1a', 'N1b', 'N1c'] : [N]
      for (const n of ns) assert.equal(estadio('colon', 'p', T, n, 'M0'), g, `${T}${n}`)
    }
  assert.equal(estadio('colon', 'p', 'Tis', 'N0', 'M0'), '0')
  assert.equal(estadio('colon', 'p', 'T3', 'N0', 'M1a'), 'IVA')
  assert.equal(estadio('colon', 'p', 'T3', 'N0', 'M1b'), 'IVB')
  assert.equal(estadio('colon', 'p', 'T3', 'N0', 'M1c'), 'IVC')
})

test('N a partir del recuento', () => {
  assert.deepEqual([0, 1, 2, 3, 6, 7, 15, 16].map(nEstomago), ['N0', 'N1', 'N1', 'N2', 'N2', 'N3a', 'N3a', 'N3b'])
  assert.deepEqual([0, 1, 2, 3, 4, 6, 7].map((n) => nColon(n)), ['N0', 'N1a', 'N1b', 'N1b', 'N2a', 'N2a', 'N2b'])
  assert.equal(nColon(0, 2), 'N1c')
  assert.equal(nColon(3, 2), 'N1b', 'con ganglios positivos los depósitos no suman')
})
