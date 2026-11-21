# Pestaña «Tumores»: esquema del contenido

Material de apoyo al estudio de los tumores de Patología Quirúrgica I
(Cirugía General y del Aparato Digestivo, 4.º de Medicina, UCM). Es
independiente del seminario de TNM y vive en la misma aplicación, en otra
pestaña.

Cada grupo de tumores es un módulo ES con este nombre y esta exportación:

```js
// assets/tumores/<grupo>.js
export const TUMORES_<GRUPO> = [ { ...ficha }, { ...ficha } ]
```

## Ficha de un tumor

```js
{
  id: 'ca-gastrico',                 // kebab-case, único en toda la app
  bloque: 'estomago',                // esofago | estomago | delgado | colorrectal | higado | biliar | pancreas | peritoneo
  titulo: 'Cáncer gástrico',
  subtitulo: 'Adenocarcinoma de estómago y de cardias',   // una línea
  tnm: 'estomago',                   // id en la pestaña TNM puro, o null (ver lista abajo)
  mapa: ['estomago'],                // órganos a resaltar en el mapa del abdomen (lista abajo)
  esencial: ['…', '…', '…'],         // exactamente 3 frases, lo que hay que saber aunque no sepas nada más
  secciones: [ { …sección } ],       // entre 5 y 8
  tarjetas: [ { a: '…', r: '…' } ],  // entre 8 y 12
  preguntas: [ { …pregunta } ],      // entre 5 y 7
  fuentes: ['Clase: 04.- Pat Gástrica M.pdf', 'AJCC Cancer Staging Manual, 8.ª ed. (2017)'],
}
```

### Sección

```js
{
  titulo: 'Diagnóstico y estadificación',
  puntos: ['Frase con <b>negrita</b> en lo clave.', '…'],   // 2 a 6 puntos
  dibujo: { tipo: 'algoritmo', … },                          // opcional; también puede ser un array de dibujos
}
```

Secciones habituales, en este orden y con estos títulos cuando apliquen:
`Epidemiología y factores de riesgo` · `Anatomía patológica` · `Clínica` ·
`Diagnóstico y estadificación` · `Tratamiento` · `Pronóstico y seguimiento` ·
`Para el examen` (perlas, trampas típicas y lo que la clase subraya).

- Cada punto: una idea, frase completa, **máximo 40 palabras**. HTML permitido: solo `<b>` e `<i>`.
- Nada de listas dentro de un punto, nada de Markdown.
- **Cada ficha lleva al menos 4 dibujos** repartidos entre las secciones (el mapa de la portada no cuenta). Más es mejor si aportan.

### Tarjeta (para memorizar, se le da la vuelta)

```js
{ a: '¿Qué mutación define al GIST?', r: 'Activadora de KIT (CD117) o, menos a menudo, de PDGFRA.' }
```
`a` ≤ 15 palabras; `r` ≤ 30 palabras. Un dato por tarjeta. Sin HTML.

### Pregunta (test de 4 opciones, como el examen)

```js
{
  id: 'ca-gastrico-1',             // `${ficha.id}-${n}`
  enunciado: '…',                  // máx. 60 palabras; caso clínico corto cuando se pueda
  opciones: ['…', '…', '…', '…'],  // exactamente 4, longitudes parecidas
  correcta: 2,                     // índice 0–3; la app baraja las opciones, no te preocupes del reparto
  explicacion: '…',                // desmonta CADA opción incorrecta, no solo justifica la buena; 40–110 palabras
}
```
Reglas del motor de preguntas de la casa: cada distractor tiene que ser
defendible para un principiante; nunca «todas/ninguna de las anteriores»; nunca
inventar una cita, una cifra o una versión de una guía.

## Dibujos disponibles

Todos se pintan en SVG con los colores de la app. Los textos que pongas dentro
deben ser **cortos** (lo que se lee en un móvil): títulos de caja ≤ 32
caracteres, detalles ≤ 44.

| tipo | parámetros | para qué |
|---|---|---|
| `mapa` | `resaltar: [órganos]`, `pie?` | dónde está el tumor |
| `algoritmo` | `pasos: [{ texto, detalle? }]`, `ramas?: [{ si, texto, detalle? }]` (2–3, cuelgan del último paso), `pie?` | manejo diagnóstico o terapéutico. Máx. 5 pasos |
| `escala` | `titulo?`, `niveles: [{ codigo, texto, detalle? }]` (2–6), `resaltar?: codigo`, `pie?` | clasificaciones ordenadas (Bismuth, BCLC, Child, riesgo del GIST…) |
| `regla` | `titulo?`, `unidad: 'cm'`, `cortes: [2, 4]`, `etiquetas: ['T1','T2','T3']` (una más que cortes), `pie?` | categorías por tamaño |
| `pared` | `organo: 'esofago'\|'estomago'\|'delgado'\|'colon'\|'vesicula'`, `resaltar?: 'T2'`, `pie?` | profundidad de la T |
| `comparar` | `columnas: ['', 'Epidermoide', 'Adenocarcinoma']`, `filas: [['Tercio', 'Medio', 'Distal'], …]` (2–6 filas, 2–3 columnas de datos), `pie?` | diferencias entre entidades |
| `cascada` | `pasos: ['Mucosa normal', 'Adenoma', …]` (3–6), `pie?` | secuencias (adenoma–carcinoma, Correa, Barrett) |
| `siewert` | `resaltar?: 'I'\|'II'\|'III'`, `pie?` | tumores de la unión esofagogástrica |
| `bismuth` | `resaltar?: 'I'\|'II'\|'IIIa'\|'IIIb'\|'IV'`, `pie?` | colangiocarcinoma perihiliar |
| `couinaud` | `resaltar?: [números 1–8]`, `pie?` | segmentos hepáticos, resecciones |
| `pci` | `pie?` | índice de carcinomatosis peritoneal |

Órganos válidos para `mapa`: `esofago`, `estomago`, `duodeno`, `delgado`,
`apendice`, `colon`, `recto`, `ano`, `higado`, `vesicula`, `via-biliar`,
`pancreas`, `bazo`, `peritoneo`, `retroperitoneo`.

Ids válidos para `tnm`: `esofago`, `estomago`, `gist`, `delgado`, `colon`,
`ano`, `higado`, `intrahepatico`, `perihiliar`, `distal`, `vesicula`,
`ampolla`, `pancreas`, `tne-pancreas`, `sarcoma`, o `null`.

## Fuentes y criterio

1. La referencia es **la clase de la asignatura** (carpeta `20_plataforma/clases/`):
   es lo que se examina. Extrae su texto con `pdftotext -layout` o
   `markitdown` y cíñete a lo que dice, con sus clasificaciones y su énfasis.
2. Lee `20_plataforma/docs/ERRATAS-MATERIAL-DOCENTE.md`. Donde la clase
   contradice lo estándar, enseña lo estándar y dilo en la explicación
   («la clase dice X; lo correcto es Y»). Nunca uses una errata como respuesta.
3. TNM: AJCC 8.ª edición. No inventes cifras de supervivencia ni porcentajes
   que no estén en la clase o en una fuente que puedas nombrar.
4. Puedes inspirarte en el banco de QUAERO (`20_plataforma/datos/banco/tema_XX.json`)
   para saber qué subraya la clase, pero escribe preguntas propias, más
   cortas, de nivel de estudiante.
5. Español de España, tuteo, frases claras. Estudiantes de 21 años que no han
   visto un quirófano.

## Validación

```bash
cd 40_seminario_TNM/app && node --test tests/tumores.test.mjs
```
