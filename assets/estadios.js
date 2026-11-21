/**
 * Agrupación por estadios, AJCC 8.ª edición (2017), idéntica a la UICC 8.ª y,
 * para estómago y colon, a la UICC 9.ª vigente desde enero de 2026.
 *
 * Solo se implementa lo que el seminario usa: estadio patológico (pTNM) de
 * estómago y colon, y estadio clínico (cTNM) de estómago, que en la 8.ª edición
 * tiene su propia tabla. El ypTNM gástrico tiene otra tabla y aquí no se agrupa.
 */

export const CATEGORIAS = {
  estomago: {
    T: ['Tis', 'T1a', 'T1b', 'T2', 'T3', 'T4a', 'T4b'],
    N: ['N0', 'N1', 'N2', 'N3a', 'N3b'],
    M: ['M0', 'M1'],
  },
  colon: {
    T: ['Tis', 'T1', 'T2', 'T3', 'T4a', 'T4b'],
    N: ['N0', 'N1a', 'N1b', 'N1c', 'N2a', 'N2b'],
    M: ['M0', 'M1a', 'M1b', 'M1c'],
  },
}

const t1 = (t) => (t === 'T1a' || t === 'T1b' ? 'T1' : t)

/** Estómago, estadio patológico. Devuelve null si la combinación no existe. */
function estomagoPatologico(T, N, M) {
  if (M === 'M1') return 'IV'
  const t = t1(T)
  if (t === 'Tis') return N === 'N0' ? '0' : null
  const tabla = {
    T1: { N0: 'IA', N1: 'IB', N2: 'IIA', N3a: 'IIB', N3b: 'IIIB' },
    T2: { N0: 'IB', N1: 'IIA', N2: 'IIB', N3a: 'IIIA', N3b: 'IIIB' },
    T3: { N0: 'IIA', N1: 'IIB', N2: 'IIIA', N3a: 'IIIB', N3b: 'IIIC' },
    T4a: { N0: 'IIB', N1: 'IIIA', N2: 'IIIA', N3a: 'IIIB', N3b: 'IIIC' },
    T4b: { N0: 'IIIA', N1: 'IIIB', N2: 'IIIB', N3a: 'IIIC', N3b: 'IIIC' },
  }
  return tabla[t]?.[N] ?? null
}

/** Estómago, estadio clínico: los ganglios cuentan solo como «sí o no». */
function estomagoClinico(T, N, M) {
  if (M === 'M1') return 'IVB'
  const t = t1(T)
  if (t === 'Tis') return N === 'N0' ? '0' : null
  if (t === 'T4b') return 'IVA'
  const positivo = N !== 'N0'
  if (t === 'T1' || t === 'T2') return positivo ? 'IIA' : 'I'
  if (t === 'T3' || t === 'T4a') return positivo ? 'III' : 'IIB'
  return null
}

/** Colon y recto, estadio clínico y patológico (comparten tabla). */
function colon(T, N, M) {
  if (M === 'M1a') return 'IVA'
  if (M === 'M1b') return 'IVB'
  if (M === 'M1c') return 'IVC'
  if (T === 'Tis') return N === 'N0' ? '0' : null
  if (N === 'N0') return { T1: 'I', T2: 'I', T3: 'IIA', T4a: 'IIB', T4b: 'IIC' }[T] ?? null
  const n1 = N === 'N1a' || N === 'N1b' || N === 'N1c'
  if (n1) return { T1: 'IIIA', T2: 'IIIA', T3: 'IIIB', T4a: 'IIIB', T4b: 'IIIC' }[T] ?? null
  if (N === 'N2a') return { T1: 'IIIA', T2: 'IIIB', T3: 'IIIB', T4a: 'IIIC', T4b: 'IIIC' }[T] ?? null
  if (N === 'N2b') return { T1: 'IIIB', T2: 'IIIB', T3: 'IIIC', T4a: 'IIIC', T4b: 'IIIC' }[T] ?? null
  return null
}

/**
 * @param {'estomago'|'colon'} organo
 * @param {'c'|'p'} prefijo
 */
export function estadio(organo, prefijo, T, N, M) {
  if (organo === 'colon') return colon(T, N, M)
  if (organo === 'estomago') return prefijo === 'c' ? estomagoClinico(T, N, M) : estomagoPatologico(T, N, M)
  return null
}

/** N gástrica a partir del número de ganglios positivos. */
export function nEstomago(positivos) {
  if (positivos === 0) return 'N0'
  if (positivos <= 2) return 'N1'
  if (positivos <= 6) return 'N2'
  if (positivos <= 15) return 'N3a'
  return 'N3b'
}

/** N colónica a partir de ganglios positivos y depósitos tumorales. */
export function nColon(positivos, depositos = 0) {
  if (positivos === 0) return depositos > 0 ? 'N1c' : 'N0'
  if (positivos === 1) return 'N1a'
  if (positivos <= 3) return 'N1b'
  if (positivos <= 6) return 'N2a'
  return 'N2b'
}
