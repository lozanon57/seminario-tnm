/**
 * De las reglas de tnm-datos.js al estadio y a la rejilla que se ve en
 * pantalla. Una regla admite «T1» para T1, T1a, T1b o T1c.
 */

const admite = (lista, valor) =>
  lista.split(' ').some((v) => valor === v || (valor.startsWith(v) && /^[a-c]$/.test(valor.slice(v.length))))

/**
 * Estadios que encajan con unos valores. Si la tabla está bien hecha, uno o
 * ninguno.
 * @param {object} organo de ORGANOS_TNM
 * @param {Record<string, string>} valores { T, N, M, y Mi o G si hacen falta }
 * @returns {string[]}
 */
export function estadiosPosibles(organo, valores) {
  const reglas = organo.estadios?.reglas ?? []
  const encajan = reglas.filter(([, condicion]) =>
    Object.entries({ M: 'M0', ...condicion }).every(([eje, lista]) => admite(lista, valores[eje] ?? '')),
  )
  return [...new Set(encajan.map(([estadio]) => estadio))]
}

/** @returns {string|null} */
export const estadioDe = (organo, valores) => estadiosPosibles(organo, valores)[0] ?? null

/** 0, I, II, III o IV: para dar el mismo tono a IIA, IIB y IIC. */
export const familia = (estadio) => (estadio ? estadio.replace(/[ABC]$/, '') : '')

/** Valores de las columnas de la rejilla: las N, o las mitosis o el grado. */
export function columnas(organo) {
  const eje = organo.estadios.columnas
  if (eje === 'N') return { eje, valores: organo.N.map(([v]) => v), etiquetas: organo.N.map(([v, , corto]) => [v, corto]) }
  const extra = organo.columnasExtra
  return { eje, valores: extra.valores.map(([v]) => v), etiquetas: extra.valores }
}

/**
 * La tabla de estadios como rejilla: filas T, columnas N (o mitosis o grado),
 * con M0; debajo, una fila por cada M1 y, si las columnas no son N, por N1.
 */
export function rejilla(organo) {
  const { eje, valores } = columnas(organo)
  const base = eje === 'N' ? { M: 'M0' } : { M: 'M0', N: 'N0' }
  const filas = organo.T.map(([t]) => ({
    T: t,
    celdas: valores.map((v) => estadioDe(organo, { ...base, T: t, [eje]: v })),
  }))
  const cualquierT = organo.T.at(-1)[0]
  const extras = []
  if (eje !== 'N') {
    for (const [n] of organo.N.slice(1)) {
      extras.push({ rotulo: `${n}, cualquier T`, estadio: estadioDe(organo, { T: cualquierT, N: n, M: 'M0', [eje]: valores.at(-1) }) })
    }
  }
  for (const [m] of organo.M.slice(1)) {
    extras.push({ rotulo: `${m}, cualquier T y N`, estadio: estadioDe(organo, { T: cualquierT, N: organo.N.at(-1)[0], M: m, [eje]: valores.at(-1) }) })
  }
  return { eje, valores, filas, extras }
}
