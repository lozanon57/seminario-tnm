import { test } from 'node:test'
import assert from 'node:assert/strict'
import { ORGANOS_TNM, ESCALAS } from '../assets/tnm-datos.js'
import { estadiosPosibles, rejilla, columnas } from '../assets/tnm-estadios.js'
import { estadio, CATEGORIAS } from '../assets/estadios.js'

test('códigos únicos y definiciones completas', () => {
  const ids = new Set()
  for (const o of ORGANOS_TNM) {
    assert.ok(!ids.has(o.id), o.id)
    ids.add(o.id)
    for (const eje of ['T', 'N', 'M']) {
      const codigos = o[eje].map(([c]) => c)
      assert.equal(new Set(codigos).size, codigos.length, `${o.id} ${eje} repetido`)
      for (const [c, d] of o[eje]) assert.ok(c.startsWith(eje) && d, `${o.id} ${c}`)
    }
    assert.ok(o.trucos.length >= 2, `${o.id}: trucos`)
    if (o.regla) assert.equal(o.regla.etiquetas.length, o.regla.cortes.length + 1, o.id)
  }
})

test('cada combinación cae en un solo estadio', () => {
  for (const o of ORGANOS_TNM.filter((x) => x.estadios)) {
    const { eje, valores } = columnas(o)
    for (const [t] of o.T) {
      for (const v of valores) {
        const base = eje === 'N' ? { T: t, M: 'M0', [eje]: v } : { T: t, N: 'N0', M: 'M0', [eje]: v }
        const e = estadiosPosibles(o, base)
        if (t === 'Tis') {
          assert.ok(e.length <= 1, `${o.id} Tis ${v}: ${e}`)
          if (v === valores[0] || eje !== 'N') assert.deepEqual(e, ['0'], `${o.id} Tis ${v}`)
        } else {
          assert.equal(e.length, 1, `${o.id} ${t} ${v}: ${JSON.stringify(e)}`)
        }
      }
      for (const [m] of o.M.slice(1)) {
        for (const [n] of o.N) {
          const extra = eje === 'N' ? {} : { [eje]: valores[0] }
          if (t === 'Tis') continue
          const e = estadiosPosibles(o, { T: t, N: n, M: m, ...extra })
          assert.equal(e.length, 1, `${o.id} ${t} ${n} ${m}: ${e}`)
          assert.match(e[0], /^IV/, `${o.id} ${m} debe ser IV`)
        }
      }
    }
    const r = rejilla(o)
    assert.ok(r.extras.every((x) => x.estadio), `${o.id}: filas extra sin estadio`)
  }
})

test('estómago y colon coinciden con la calculadora del seminario', () => {
  for (const [id, organo] of [['estomago', 'estomago'], ['colon', 'colon']]) {
    const o = ORGANOS_TNM.find((x) => x.id === id)
    for (const T of CATEGORIAS[organo].T) {
      for (const N of CATEGORIAS[organo].N) {
        for (const M of CATEGORIAS[organo].M) {
          const calc = estadio(organo, 'p', T, N, M)
          const nuevo = estadiosPosibles(o, { T, N, M })
          if (calc === null) assert.ok(nuevo.length === 0 || T === 'Tis', `${id} ${T} ${N} ${M}`)
          else assert.deepEqual(nuevo, [calc], `${id} ${T} ${N} ${M}`)
        }
      }
    }
  }
})

test('las escalas tienen niveles y truco', () => {
  for (const e of ESCALAS) {
    assert.ok(e.niveles.length >= 3 && e.truco, e.id)
  }
})
