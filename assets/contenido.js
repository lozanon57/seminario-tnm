/**
 * Contenido del seminario. Fuente de las definiciones: AJCC Cancer Staging
 * Manual, 8.ª ed. (2017), igual a la UICC 8.ª y, para estómago y colon, a la
 * UICC 9.ª (2025). Lo que cambia en colon en 2027 se menciona, no se usa.
 *
 * Cada pregunta: { id, enunciado, opciones[], correcta (índice), explicacion }.
 * Las explicaciones desmontan las opciones incorrectas, no solo dan la buena.
 */

export const BLOQUES = [
  {
    id: 'historia',
    clave: 'El TNM es un acuerdo internacional que se revisa con datos de supervivencia. Usa siempre la edición vigente: hoy, AJCC 8.ª / UICC 9.ª.',
    numero: 1,
    titulo: 'De dónde sale el TNM',
    minutos: 8,
    lamina: [
      { dibujo: { tipo: 'tiempo' } },
      '<b>1932.</b> Cuthbert Dukes, patólogo en Londres, clasifica el cáncer de recto en A, B y C según lo profundo que llega y si hay ganglios. Es la idea de fondo de todo lo que viene después: el pronóstico depende de cuánto se ha extendido el tumor.',
      '<b>1943–1952.</b> Pierre Denoix, cirujano del Institut Gustave-Roussy de París, propone describir cualquier tumor con tres letras: <b>T</b> (tumor primario), <b>N</b> (ganglios, <i>nodes</i>) y <b>M</b> (metástasis).',
      '<b>Años 50 y 60.</b> La Unión Internacional Contra el Cáncer (UICC, Ginebra) adopta el sistema y en 1968 publica el primer librito de bolsillo. En 1959 nace en Estados Unidos el comité que hoy se llama AJCC, que publica su primer manual en 1977.',
      '<b>1987.</b> UICC y AJCC unifican las definiciones. Desde entonces hay un solo TNM con dos editores.',
      '<b>Hoy.</b> AJCC 8.ª edición (2017, en vigor desde 2018) y UICC 9.ª (2025, en vigor desde enero de 2026). Para estómago y colon las dos dicen lo mismo, y es lo que usaremos.',
      '<b>Lo que viene.</b> El 16 de noviembre de 2026 se publicó la revisión de colon y recto (UICC-9.1, para 2027): los depósitos tumorales pasan a ser un descriptor propio y la metástasis peritoneal se divide en M1c1 y M1c2. Todavía no está en vigor.',
    ],
    preguntas: [
      {
        id: 'h1',
        enunciado: '¿Quién propuso describir los tumores con las letras T, N y M?',
        opciones: ['Cuthbert Dukes', 'Pierre Denoix', 'William Halsted', 'Rudolf Virchow'],
        correcta: 1,
        explicacion:
          'Denoix, en París, entre 1943 y 1952. Dukes es anterior (1932) y clasificó el cáncer de recto en A, B y C: la misma idea, pero solo para un órgano. Halsted es el padre de la mastectomía radical y Virchow describió el ganglio supraclavicular izquierdo que lleva su nombre, pero ninguno de los dos inventó un sistema de estadificación.',
      },
      {
        id: 'h2',
        enunciado: 'Existen la UICC y la AJCC. ¿Significa eso que hay dos TNM distintos?',
        opciones: [
          'Sí: la AJCC se usa en EE. UU. y la UICC en Europa, y no coinciden',
          'No: desde 1987 comparten las mismas definiciones',
          'Sí: la UICC es para el clínico y la AJCC para el patólogo',
          'No: la AJCC sustituyó a la UICC en 2017',
        ],
        correcta: 1,
        explicacion:
          'Son dos editores del mismo sistema y revisan juntos cada edición. Las ediciones salen con números distintos (AJCC 8.ª, UICC 9.ª), pero para estómago y colon las categorías son idénticas. Ninguno de los dos se reparte el trabajo entre clínicos y patólogos, y ninguno ha sustituido al otro.',
      },
      {
        id: 'h3',
        enunciado: '¿Por qué el TNM cambia de edición cada pocos años?',
        opciones: [
          'Para incorporar datos nuevos sobre pronóstico y tratamiento',
          'Porque cada país lo adapta a su sistema sanitario',
          'Por cambios en la nomenclatura anatómica',
          'Para vender manuales nuevos',
        ],
        correcta: 0,
        explicacion:
          'Cada edición se revisa con grandes bases de datos de supervivencia: si dos categorías tienen el mismo pronóstico se juntan, y si una agrupa pacientes muy distintos se divide. Ejemplo reciente: en colon, la 8.ª edición deja al estadio IIIA con mejor supervivencia que el estadio II, y eso es lo que intenta corregir la revisión de 2027.',
      },
      {
        id: 'h4',
        enunciado: 'Hoy, para estadificar un cáncer gástrico o de colon, ¿qué edición usamos?',
        opciones: [
          'AJCC 7.ª, porque es la que viene en los libros',
          'AJCC 8.ª / UICC 9.ª, que para estos órganos dicen lo mismo',
          'La revisión de colon de 2027, porque ya está publicada',
          'Cada hospital elige la suya',
        ],
        correcta: 1,
        explicacion:
          'La revisión de colon de 2027 está publicada, pero no ha entrado en vigor: hasta entonces se sigue usando la actual. La 7.ª es de 2010 y está superada. Y si cada hospital usara una edición distinta, el TNM perdería su razón de ser, que es que un estadio III signifique lo mismo en Madrid que en Tokio.',
      },
    ],
  },
  {
    id: 'logica',
    clave: 'T es profundidad, N son ganglios regionales contados y M es lo que está a distancia. El prefijo dice cuándo: c antes de tratar, p o yp con la pieza, r en la recidiva.',
    numero: 2,
    titulo: 'La lógica del TNM',
    minutos: 12,
    lamina: [
      '<b>T: el tumor primario.</b> En el estómago y el colon, que son tubos, la T no es el tamaño sino <b>hasta qué capa de la pared llega</b>. Un tumor de 6 cm puede ser T1 y uno de 2 cm puede ser T4.',
      { dibujo: { tipo: 'pared', organo: 'estomago', pie: 'Cada columna es un tumor distinto. La T dice hasta qué capa llega, no cuánto mide.' } },
      '<b>N: los ganglios regionales.</b> En estos dos órganos se cuenta <b>cuántos ganglios tienen tumor</b>. Un ganglio metastásico fuera del territorio regional no es N, es M.',
      '<b>M: metástasis a distancia.</b> M0 o M1. Incluye hígado, pulmón, peritoneo y ganglios no regionales.',
      '<b>X</b> significa «no se puede valorar» (NX). <b>En caso de duda entre dos categorías, se elige la menos avanzada.</b>',
      '<b>Del TNM al estadio.</b> Las combinaciones de T, N y M con pronóstico parecido se agrupan en estadios 0, I, II, III y IV. El TNM describe; el estadio resume.',
      '<b>Prefijos.</b> <b>c</b> = clínico, antes de tratar (exploración, endoscopia, imagen, laparoscopia). <b>p</b> = patológico, con la pieza quirúrgica. <b>yp</b> = patológico después de un tratamiento previo (quimio o radioterapia). <b>r</b> = recidiva. El estadio clínico <b>no se corrige</b> después: se añade el patológico.',
      { dibujo: { tipo: 'recorrido' } },
      '<b>Clasificación R</b> (lo que queda tras la cirugía): R0 sin tumor residual, R1 tumor microscópico en el margen, R2 tumor residual visible.',
      { dibujo: { tipo: 'residuo' } },
    ],
    preguntas: [
      {
        id: 'l1',
        enunciado: 'En el estómago o el colon, ¿qué define la categoría T?',
        opciones: [
          'El tamaño del tumor en centímetros',
          'La capa de la pared hasta la que llega el tumor',
          'El número de tumores',
          'El grado de diferenciación',
        ],
        correcta: 1,
        explicacion:
          'En las vísceras huecas manda la profundidad, porque cuanto más hondo llega el tumor más vasos linfáticos y sanguíneos encuentra. El tamaño en centímetros define la T en órganos macizos, como la mama o el pulmón. El grado es un factor pronóstico, pero no forma parte del TNM de estos dos órganos.',
      },
      {
        id: 'l2',
        enunciado:
          'Un paciente se opera sin tratamiento previo y el patólogo estudia la pieza. ¿Cómo se escribe ese TNM?',
        opciones: ['cTNM', 'pTNM', 'ypTNM', 'rTNM'],
        correcta: 1,
        explicacion:
          'p de patológico. Sería cTNM si se basara en la exploración y la imagen antes de operar, ypTNM si el paciente hubiera recibido quimio o radioterapia antes de la cirugía, y rTNM si se tratara de una recidiva.',
      },
      {
        id: 'l3',
        enunciado:
          'En el TAC no está claro si el tumor llega a la subserosa (T3) o se queda en la muscular propia (T2). ¿Qué T se asigna?',
        opciones: ['T3, por precaución', 'T2', 'TX', 'Se espera a la cirugía para asignar la T'],
        correcta: 1,
        explicacion:
          'Regla general del TNM: en caso de duda, la categoría menos avanzada. Así se evita inflar los estadios y que los resultados parezcan mejores de lo que son. TX es para cuando no se puede valorar en absoluto, no para la duda entre dos categorías. Y esperar a la cirugía no sirve, porque el estadio clínico es precisamente el que decide si hay que dar tratamiento antes de operar.',
      },
      {
        id: 'l4',
        enunciado: 'Tras la cirugía, el informe dice «margen afecto al microscopio». ¿Qué clasificación R es?',
        opciones: ['R0', 'R1', 'R2', 'RX'],
        correcta: 1,
        explicacion:
          'R1: queda tumor microscópico. R0 es sin tumor residual, R2 cuando el cirujano deja tumor visible y RX cuando no se puede valorar. La R no forma parte del estadio, pero pesa mucho en el pronóstico.',
      },
      {
        id: 'l5',
        enunciado:
          'Un cáncer gástrico tiene una adenopatía metastásica junto a la aorta (para-aórtica), fuera del territorio regional. ¿Cómo se clasifica?',
        opciones: ['N3b', 'N1', 'M1', 'No se tiene en cuenta'],
        correcta: 2,
        explicacion:
          'Un ganglio fuera del territorio regional se considera metástasis a distancia. Las categorías N1 a N3b solo cuentan ganglios regionales, y nunca se ignora un ganglio metastásico.',
      },
    ],
  },
  {
    id: 'estomago',
    clave: 'Estómago: N1 1–2, N2 3–6, N3a 7–15, N3b 16 o más. Hacen falta al menos 16 ganglios, y la citología peritoneal positiva ya es M1.',
    numero: 3,
    titulo: 'Cáncer gástrico: las reglas',
    minutos: 8,
    lamina: [
      '<b>La pared, de dentro a fuera:</b> mucosa (epitelio, lámina propia, <i>muscularis mucosae</i>), submucosa, muscular propia, subserosa y serosa (peritoneo visceral).',
      '<b>T.</b> Tis: displasia de alto grado, sin invadir la lámina propia. T1a: lámina propia o <i>muscularis mucosae</i>. T1b: submucosa. T2: muscular propia. T3: subserosa. T4a: atraviesa la serosa. T4b: invade órganos vecinos (páncreas, colon, bazo…).',
      '<b>N</b>, por número de ganglios positivos: N1 = 1–2, N2 = 3–6, N3a = 7–15, N3b = 16 o más. El patólogo debe examinar <b>al menos 16 ganglios</b>.',
      { dibujo: { tipo: 'ganglios', organo: 'estomago' } },
      '<b>M1:</b> metástasis a distancia, incluida la <b>citología peritoneal positiva</b> y los ganglios no regionales (para-aórticos, por ejemplo).',
      { dibujo: { tipo: 'metastasis', organo: 'estomago', sitios: ['citologia', 'paraaortico'], pie: 'En el estómago, tanto la citología positiva como los ganglios para-aórticos son M1.' } },
      '<b>Unión esofagogástrica.</b> Si el tumor afecta a la unión y su centro está a 2 cm o menos de ella, se estadifica como esófago. Si el centro está a más de 2 cm, como estómago.',
      { dibujo: { tipo: 'union' } },
      '<b>Cómo se estadifica antes de operar:</b> endoscopia con biopsia, ecoendoscopia (T y N en tumores precoces), TAC de tórax, abdomen y pelvis (N y M) y laparoscopia de estadificación con lavado peritoneal (M peritoneal).',
      '<b>Dos tablas de estadios.</b> Desde la 8.ª edición, el estadio clínico (cTNM) y el patológico (pTNM) tienen tablas distintas: antes de operar no se pueden contar los ganglios, solo decir si parecen afectados o no.',
    ],
    preguntas: [
      {
        id: 'e1',
        enunciado: 'Un adenocarcinoma gástrico llega a la subserosa, sin perforar la serosa. ¿Qué T es?',
        opciones: ['T2', 'T3', 'T4a', 'T4b'],
        correcta: 1,
        explicacion:
          'T3 = subserosa. Sería T2 si se quedara en la muscular propia, T4a si atravesara la serosa y T4b si invadiera un órgano vecino.',
      },
      {
        id: 'e2',
        enunciado: 'En la pieza de gastrectomía hay 8 ganglios con metástasis. ¿Qué N es?',
        opciones: ['N1', 'N2', 'N3a', 'N3b'],
        correcta: 2,
        explicacion: 'N3a va de 7 a 15 ganglios. N1 es 1–2, N2 es 3–6 y N3b es 16 o más.',
      },
      {
        id: 'e3',
        enunciado: '¿Cuántos ganglios debe examinar como mínimo el patólogo en una gastrectomía?',
        opciones: ['10', '12', '16', '30'],
        correcta: 2,
        explicacion:
          'Al menos 16, que es justo el umbral de N3b: con menos ganglios estudiados no se puede asignar bien la N. Con una linfadenectomía D2 lo habitual es obtener más de 30. Doce es el mínimo del colon, no del estómago.',
      },
      {
        id: 'e4',
        enunciado: '¿Qué prueba detecta mejor la diseminación peritoneal pequeña en el cáncer gástrico?',
        opciones: ['TAC', 'Ecoendoscopia', 'PET-TAC', 'Laparoscopia con lavado peritoneal'],
        correcta: 3,
        explicacion:
          'Los implantes de pocos milímetros y las células libres en el lavado no se ven en el TAC ni en el PET. La ecoendoscopia valora la T y los ganglios cercanos, pero no el peritoneo. Por eso se hace laparoscopia antes de operar los tumores avanzados.',
      },
    ],
  },
  {
    id: 'colon',
    clave: 'Colon: lo intramucoso es Tis, N1c son depósitos sin ganglios positivos, hacen falta al menos 12 ganglios y el peritoneo es M1c.',
    numero: 4,
    titulo: 'Cáncer de colon: las reglas',
    minutos: 8,
    lamina: [
      '<b>T.</b> Tis: carcinoma intramucoso (lámina propia o <i>muscularis mucosae</i>). T1: submucosa. T2: muscular propia. T3: atraviesa la muscular propia hasta la grasa pericólica. T4a: perfora el peritoneo visceral. T4b: invade o está adherido a otros órganos.',
      '<b>Una trampa.</b> Un carcinoma que invade la lámina propia es <b>Tis en el colon</b> pero <b>T1a en el estómago</b>. En la mucosa del colon casi no hay linfáticos, así que ese tumor prácticamente no da metástasis.',
      { dibujo: { tipo: 'pared', organo: 'colon', resaltar: 'Tis', pie: 'En el colon, lo que no sale de la mucosa es Tis. En el estómago, eso mismo sería T1a.' } },
      '<b>N.</b> N1a: 1 ganglio. N1b: 2–3. N1c: <b>ningún ganglio positivo, pero sí depósitos tumorales</b> (nódulos de tumor en la grasa, sin estructura de ganglio). N2a: 4–6. N2b: 7 o más. Hay que examinar <b>al menos 12 ganglios</b>.',
      { dibujo: { tipo: 'ganglios', organo: 'colon' } },
      '<b>M.</b> M1a: un órgano, sin peritoneo. M1b: dos o más órganos, sin peritoneo. M1c: peritoneo, con o sin otros órganos.',
      { dibujo: { tipo: 'metastasis', organo: 'colon', sitios: ['higado', 'pulmon'], pie: 'Hígado y pulmón, sin peritoneo: dos órganos, M1b.' } },
      '<b>Cómo se estadifica:</b> colonoscopia completa con biopsia (y estudio de MMR/MSI), CEA, analítica y TAC de tórax, abdomen y pelvis.',
      '<b>En 2027</b> (todavía no): los depósitos tumorales serán un descriptor propio, M1c se dividirá en M1c1 (solo peritoneo) y M1c2 (peritoneo y otros órganos), y cambiarán los grupos de estadio.',
    ],
    preguntas: [
      {
        id: 'k1',
        enunciado: 'Un carcinoma invade la lámina propia sin llegar a la submucosa. ¿Cómo se clasifica?',
        opciones: [
          'T1 en el colon y T1 en el estómago',
          'Tis en el colon y T1a en el estómago',
          'Tis en los dos',
          'T1a en el colon y Tis en el estómago',
        ],
        correcta: 1,
        explicacion:
          'Es la diferencia más traicionera entre los dos órganos. En el colon, todo lo que no pasa de la mucosa es Tis (intramucoso), porque casi no da metástasis ganglionares. En el estómago, la invasión de la lámina propia ya es T1a, y un T1a gástrico tiene un riesgo pequeño pero real de afectar a los ganglios.',
      },
      {
        id: 'k2',
        enunciado: 'En una hemicolectomía hay 5 ganglios positivos de 20 examinados. ¿Qué N es?',
        opciones: ['N1b', 'N2a', 'N2b', 'N3'],
        correcta: 1,
        explicacion: 'N2a va de 4 a 6. N1b es 2–3 y N2b es 7 o más. En el colon no existe N3.',
      },
      {
        id: 'k3',
        enunciado: 'Un cáncer de colon tiene metástasis en el hígado y en el pulmón, sin afectar al peritoneo. ¿Qué M es?',
        opciones: ['M1', 'M1a', 'M1b', 'M1c'],
        correcta: 2,
        explicacion:
          'Dos órganos sin peritoneo = M1b. M1a es un solo órgano y M1c es cuando hay peritoneo, que es la forma de peor pronóstico. En el colon la M siempre se subdivide, así que «M1» sin letra está incompleto.',
      },
      {
        id: 'k4',
        enunciado: '¿Cuántos ganglios hay que examinar como mínimo en una colectomía?',
        opciones: ['8', '10', '12', '16'],
        correcta: 2,
        explicacion:
          'Doce. Con menos, el N0 no es fiable, y en un estadio II se considera un factor de alto riesgo. Dieciséis es el mínimo del estómago.',
      },
    ],
  },
]

export const CASOS = [
  {
    id: 'c1',
    clave: 'Un T1a pequeño, bien diferenciado y sin úlcera se trata por endoscopia: estadificar bien le ahorra una gastrectomía.',
    numero: 1,
    organo: 'estomago',
    titulo: 'Lo que encontró una endoscopia por dispepsia',
    concepto: 'T1a frente a T1b · estadio clínico · resección endoscópica',
    pasos: [
      {
        texto:
          'Mujer de 62 años con dispepsia de meses. En la endoscopia se ve en el antro una lesión deprimida de 1,5 cm, sin úlcera. La biopsia muestra un adenocarcinoma de tipo intestinal, bien diferenciado. En la ecoendoscopia la lesión no pasa de la mucosa y no hay ganglios aumentados. El TAC no muestra nada más.',
      },
      { dibujo: { tipo: 'pared', organo: 'estomago', resaltar: 'T1a' } },
      {
        pregunta: {
          id: 'c1a',
          enunciado: 'La lesión no pasa de la mucosa (lámina propia y muscularis mucosae). ¿Qué T es?',
          opciones: ['Tis', 'T1a', 'T1b', 'T2'],
          correcta: 1,
          explicacion:
            'En el estómago, invadir la lámina propia o la muscularis mucosae es T1a. Tis sería si el tumor no saliera del epitelio, T1b si llegara a la submucosa y T2 si alcanzara la muscular propia.',
        },
      },
      {
        pregunta: {
          id: 'c1b',
          enunciado: 'Todo esto se ha sabido antes de tratar. ¿Qué prefijo lleva?',
          opciones: ['c', 'p', 'yp', 'r'],
          correcta: 0,
          explicacion:
            'c de clínico: endoscopia, ecoendoscopia y TAC, antes de cualquier tratamiento. Todavía no hay pieza que mire el patólogo, así que no puede ser p. No ha habido tratamiento previo (yp) ni se trata de una recidiva (r).',
        },
      },
      {
        construir: { organo: 'estomago', prefijo: 'c', T: 'T1a', N: 'N0', M: 'M0' },
      },
      {
        pregunta: {
          id: 'c1c',
          enunciado: '¿Qué tratamiento le corresponde?',
          opciones: [
            'Resección endoscópica',
            'Gastrectomía subtotal con linfadenectomía D2',
            'Quimioterapia y después cirugía',
            'Revisiones endoscópicas cada seis meses',
          ],
          correcta: 0,
          explicacion:
            'Tiene todos los criterios de la clase: T1a, bien diferenciado, menos de 2 cm y sin úlcera. Con esas condiciones el riesgo de ganglios es tan bajo que basta con resecar por endoscopia y estudiar la pieza. La gastrectomía sería un exceso, la quimioterapia no está indicada en un tumor precoz, y vigilar sin tratar un cáncer no es una opción.',
        },
      },
    ],
  },
  {
    id: 'c2',
    clave: 'La laparoscopia completa el estadio clínico y la y avisa de que hubo tratamiento previo: de cT3 cN+ a ypT2 N1 es ver la respuesta.',
    numero: 2,
    organo: 'estomago',
    titulo: 'Pérdida de peso y anemia',
    concepto: 'Laparoscopia de estadificación · estadio clínico III · el prefijo yp',
    pasos: [
      {
        texto:
          'Varón de 58 años que ha perdido 6 kg en dos meses y tiene una anemia ferropénica. En la endoscopia hay una masa ulcerada de 5 cm entre el antro y el cuerpo, y la biopsia es de adenocarcinoma. En el TAC, el tumor atraviesa la pared y afecta a la grasa que rodea el estómago, sin invadir órganos vecinos, y hay tres ganglios perigástricos de 12 mm. No se ven metástasis.',
      },
      {
        pregunta: {
          id: 'c2a',
          enunciado: 'Antes de decidir el tratamiento, ¿qué falta?',
          opciones: [
            'Nada: se opera ya',
            'Laparoscopia de estadificación con lavado peritoneal',
            'Colonoscopia',
            'Marcadores tumorales y esperar a ver cómo evolucionan',
          ],
          correcta: 1,
          explicacion:
            'En un tumor localmente avanzado, el TAC no basta para descartar diseminación peritoneal: los implantes pequeños no se ven. La laparoscopia con lavado cambia la decisión en una parte de los pacientes. La colonoscopia no estadifica un cáncer gástrico, y los marcadores no sirven para estadificar.',
        },
      },
      { texto: 'Laparoscopia: no hay implantes y la citología del lavado es negativa.' },
      {
        pregunta: {
          id: 'c2b',
          enunciado:
            'Estadio clínico: tumor hasta la grasa perigástrica (cT3), ganglios sospechosos (cN+), sin metástasis. ¿Qué estadio clínico es?',
          opciones: ['IIA', 'IIB', 'III', 'IVA'],
          correcta: 2,
          explicacion:
            'En la tabla clínica del estómago, cT3 o cT4a con ganglios positivos es estadio III. Sería IIB si no hubiera ganglios y IVA si el tumor invadiera un órgano vecino (cT4b). Fíjate en que antes de operar no se cuentan ganglios: solo se dice si los hay o no.',
        },
      },
      {
        pregunta: {
          id: 'c2c',
          enunciado: '¿Qué tratamiento le corresponde?',
          opciones: [
            'Gastrectomía directamente',
            'Quimioterapia antes y después de una gastrectomía con linfadenectomía D2',
            'Solo quimioterapia, porque ya no es operable',
            'Resección endoscópica',
          ],
          correcta: 1,
          explicacion:
            'A partir de cT2 o con ganglios positivos, el tratamiento estándar en Europa es la quimioterapia perioperatoria (el esquema FLOT es el más usado) y la gastrectomía D2. Operar directamente da peores resultados. El tumor sí es operable, porque no hay metástasis, y la resección endoscópica es solo para tumores precoces.',
        },
      },
      {
        texto:
          'Tras cuatro ciclos, gastrectomía subtotal D2 y cuatro ciclos más. Informe de la pieza: queda tumor que llega a la muscular propia y hay 1 ganglio positivo de 27.',
      },
      { dibujo: { tipo: 'pared', organo: 'estomago', resaltar: 'T2', pie: 'Tras la quimioterapia, el tumor residual llega a la muscular propia.' } },
      { dibujo: { tipo: 'ganglios', organo: 'estomago', positivos: 1, total: 27 } },
      {
        pregunta: {
          id: 'c2d',
          enunciado: '¿Cómo se escribe este TNM?',
          opciones: ['pT2 N1 M0', 'ypT2 N1 M0', 'cT2 N1 M0', 'rT2 N1 M0'],
          correcta: 1,
          explicacion:
            'La y avisa de que el paciente recibió tratamiento antes de la cirugía. No es un detalle de estilo: un ypT2 después de quimioterapia no tiene el mismo pronóstico que un pT2 sin tratamiento previo, y en el estómago el ypTNM tiene su propia tabla de estadios. Comparado con el cT3 cN+ inicial, el tumor ha respondido.',
        },
      },
    ],
  },
  {
    id: 'c3',
    clave: 'Citología peritoneal positiva = M1 = estadio IV, aunque el TAC esté limpio.',
    numero: 3,
    organo: 'estomago',
    titulo: 'Un TAC limpio que no lo era',
    concepto: 'Citología peritoneal positiva = M1',
    pasos: [
      {
        texto:
          'Mujer de 45 años con saciedad precoz. La endoscopia muestra un estómago rígido, que se distiende poco, y la biopsia es de un adenocarcinoma difuso con células en anillo de sello. En el TAC la pared gástrica está engrosada, sin metástasis visibles y sin ascitis.',
      },
      {
        texto:
          'Laparoscopia de estadificación: no se ve ningún implante. En la citología del lavado peritoneal hay células malignas.',
      },
      { dibujo: { tipo: 'metastasis', organo: 'estomago', sitios: ['citologia'] } },
      {
        pregunta: {
          id: 'c3a',
          enunciado: '¿Qué categoría M tiene?',
          opciones: ['M0, porque no se ve ningún implante', 'M1', 'MX', 'Hay que repetir la laparoscopia'],
          correcta: 1,
          explicacion:
            'En el cáncer gástrico, la citología peritoneal positiva es M1 aunque no haya implantes visibles: estas pacientes evolucionan como las que tienen carcinomatosis. MX sería si no se hubiera podido valorar. Repetir la prueba no cambia lo que ya sabemos.',
        },
      },
      {
        pregunta: {
          id: 'c3b',
          enunciado: '¿Qué estadio clínico es?',
          opciones: ['III', 'IVA', 'IVB', 'No se puede saber sin operar'],
          correcta: 2,
          explicacion:
            'Cualquier M1 es IVB en la tabla clínica gástrica, sean cuales sean la T y la N. IVA se reserva para el cT4b sin metástasis. Y sí se puede estadificar sin operar: para eso existe el estadio clínico.',
        },
      },
      {
        pregunta: {
          id: 'c3c',
          enunciado: 'Si no se hubiera hecho la laparoscopia, ¿qué habría pasado?',
          opciones: [
            'Nada: el resultado habría sido el mismo',
            'Se habría infraestadificado y se le habría propuesto una gastrectomía que no la iba a curar',
            'Se habría sobreestadificado',
            'La citología se habría hecho igual durante la gastrectomía, sin consecuencias',
          ],
          correcta: 1,
          explicacion:
            'Con solo el TAC parecía un tumor operable. La laparoscopia la ha pasado a estadio IV: el tratamiento principal es sistémico y la cirugía de entrada no está indicada. Saberlo durante la gastrectomía habría sido demasiado tarde.',
        },
      },
    ],
  },
  {
    id: 'c4',
    clave: 'Centro a más de 2 cm de la unión: estómago. 9 de 31 ganglios es N3a, y pT3 N3a M0 es estadio IIIB.',
    numero: 4,
    organo: 'estomago',
    titulo: 'Del informe de patología al estadio',
    concepto: '¿Estómago o esófago? · contar ganglios · pTNM',
    pasos: [
      {
        texto:
          'Varón de 70 años con un adenocarcinoma de la parte alta del estómago. Su centro está a 4 cm por debajo de la unión esofagogástrica y no la alcanza.',
      },
      { dibujo: { tipo: 'union' } },
      {
        pregunta: {
          id: 'c4a',
          enunciado: '¿Con qué clasificación se estadifica?',
          opciones: ['Esófago', 'Estómago', 'La que elija el cirujano', 'Depende del tipo histológico'],
          correcta: 1,
          explicacion:
            'El centro está a más de 2 cm de la unión, así que se estadifica como estómago. Si el tumor afectara a la unión y su centro estuviera a 2 cm o menos, se usaría la clasificación del esófago. No depende de la histología ni de quién lo trate.',
        },
      },
      {
        texto:
          'Se hace una gastrectomía total con linfadenectomía D2, sin tratamiento previo. Informe: el tumor atraviesa la muscular propia y llega a la subserosa sin alcanzar la serosa. Hay 9 ganglios positivos de 31. Márgenes libres.',
      },
      { dibujo: { tipo: 'pared', organo: 'estomago', resaltar: 'T3' } },
      { dibujo: { tipo: 'ganglios', organo: 'estomago', positivos: 9, total: 31 } },
      {
        pregunta: {
          id: 'c4b',
          enunciado: '¿Son suficientes 31 ganglios?',
          opciones: ['No, hacen falta 40', 'Sí, el mínimo es 16', 'No, el mínimo es 35', 'Da igual: solo cuentan los positivos'],
          correcta: 1,
          explicacion:
            'El mínimo en el estómago es 16. Con menos no se podría distinguir un N3b. El número total de ganglios sí importa: un N0 con 5 ganglios examinados no tranquiliza a nadie.',
        },
      },
      {
        pregunta: {
          id: 'c4c',
          enunciado: 'Márgenes libres y sin tumor residual. ¿Qué R es?',
          opciones: ['R0', 'R1', 'R2', 'pR0'],
          correcta: 0,
          explicacion:
            'R0: no queda tumor. R1 sería un margen afecto al microscopio y R2 tumor visible que no se ha podido extirpar. La R no lleva el prefijo p.',
        },
      },
      {
        construir: { organo: 'estomago', prefijo: 'p', T: 'T3', N: 'N3a', M: 'M0' },
      },
    ],
  },
  {
    id: 'c5',
    clave: 'En el colon, llegar a la submucosa ya es T1, y con factores de riesgo la polipectomía no basta.',
    numero: 5,
    organo: 'colon',
    titulo: 'Un pólipo del cribado',
    concepto: 'Tis frente a T1 en el colon · pólipo maligno',
    pasos: [
      {
        texto:
          'Varón de 61 años con sangre oculta en heces positiva en el programa de cribado. En la colonoscopia hay un pólipo sésil de 2 cm en el sigma, que se reseca entero. La anatomía patológica muestra un adenocarcinoma que invade la submucosa, con invasión linfovascular y un margen de menos de 1 mm.',
      },
      { dibujo: { tipo: 'pared', organo: 'colon', resaltar: 'T1' } },
      {
        pregunta: {
          id: 'c5a',
          enunciado: '¿Qué T es?',
          opciones: ['Tis', 'T1', 'T2', 'No se puede saber en un pólipo'],
          correcta: 1,
          explicacion:
            'Llega a la submucosa: T1. Si se quedara en la mucosa sería Tis (intramucoso) y si alcanzara la muscular propia, T2. La T sí se puede asignar en un pólipo resecado entero.',
        },
      },
      {
        pregunta: {
          id: 'c5b',
          enunciado: 'Tiene invasión linfovascular y un margen de menos de 1 mm. ¿Qué se hace?',
          opciones: [
            'Nada más: el pólipo está quitado',
            'Colectomía (sigmoidectomía) con linfadenectomía',
            'Quimioterapia',
            'Radioterapia',
          ],
          correcta: 1,
          explicacion:
            'Con esos factores de riesgo, la probabilidad de ganglios afectados o de tumor residual es demasiado alta para quedarse en la polipectomía. Hay que hacer una resección oncológica con sus ganglios. La quimioterapia no tiene sentido sin saber el estadio, y la radioterapia no se usa en el colon.',
        },
      },
      {
        texto:
          'Sigmoidectomía laparoscópica: no queda tumor en la pared y los 17 ganglios estudiados son negativos.',
      },
      { dibujo: { tipo: 'ganglios', organo: 'colon', positivos: 0, total: 17 } },
      {
        construir: { organo: 'colon', prefijo: 'p', T: 'T1', N: 'N0', M: 'M0' },
      },
    ],
  },
  {
    id: 'c6',
    clave: 'Con menos de 12 ganglios el N0 no es fiable y cuenta como factor de alto riesgo en el estadio II.',
    numero: 6,
    organo: 'colon',
    titulo: 'Un estadio II que preocupa',
    concepto: 'T4a · pocos ganglios · factores de alto riesgo',
    pasos: [
      {
        texto:
          'Mujer de 74 años con anemia. Se le hace una hemicolectomía izquierda por un adenocarcinoma de colon descendente. Informe: el tumor perfora el peritoneo visceral, pero no invade órganos vecinos. Hay 0 ganglios positivos de 8 examinados.',
      },
      { dibujo: { tipo: 'pared', organo: 'colon', resaltar: 'T4a' } },
      { dibujo: { tipo: 'ganglios', organo: 'colon', positivos: 0, total: 8, pie: 'Solo 8 ganglios: por debajo del mínimo de 12.' } },
      {
        pregunta: {
          id: 'c6a',
          enunciado: 'Perfora el peritoneo visceral. ¿Qué T es?',
          opciones: ['T3', 'T4a', 'T4b', 'M1c'],
          correcta: 1,
          explicacion:
            'T4a: atraviesa la superficie del peritoneo visceral. T3 sería si se quedara en la grasa pericólica sin perforarlo, T4b si invadiera otro órgano. M1c es una metástasis en el peritoneo a distancia del tumor, no el propio tumor asomándose a la serosa.',
        },
      },
      {
        construir: { organo: 'colon', prefijo: 'p', T: 'T4a', N: 'N0', M: 'M0' },
      },
      {
        pregunta: {
          id: 'c6b',
          enunciado: 'Solo se han examinado 8 ganglios. ¿Qué significa?',
          opciones: [
            'Nada: es N0 y punto',
            'El N0 es poco fiable: podría ser un estadio III mal clasificado',
            'Hay que llamarlo NX',
            'Hay que reoperar para sacar más ganglios',
          ],
          correcta: 1,
          explicacion:
            'Con menos de 12 ganglios, el N0 puede ser falso. Se sigue escribiendo N0, porque es lo que se ha visto (no es NX), pero se tiene en cuenta como factor de alto riesgo. No se reopera para buscar más ganglios.',
        },
      },
      {
        pregunta: {
          id: 'c6c',
          enunciado: '¿Cuál de estos NO es un factor de alto riesgo en el estadio II de colon?',
          opciones: [
            'T4',
            'Menos de 12 ganglios examinados',
            'Obstrucción o perforación en el diagnóstico',
            'Que el tumor esté en el colon derecho',
          ],
          correcta: 3,
          explicacion:
            'El lado no cuenta. Son factores de alto riesgo el T4, tener menos de 12 ganglios, la obstrucción o la perforación, la invasión linfovascular o perineural y el tumor poco diferenciado. Esta paciente tiene dos, así que se valora quimioterapia adyuvante. Antes hay que mirar la inestabilidad de microsatélites: si es MSI-H, el pronóstico es mejor y no se beneficia de fluoropirimidinas solas.',
        },
      },
    ],
  },
  {
    id: 'c7',
    clave: 'Depósitos tumorales sin ganglios positivos = N1c: el paciente pasa de estadio II a III y recibe quimioterapia.',
    numero: 7,
    organo: 'colon',
    titulo: 'Ningún ganglio y, sin embargo, estadio III',
    concepto: 'Depósitos tumorales · N1c',
    pasos: [
      {
        texto:
          'Varón de 66 años operado de un adenocarcinoma de ciego (hemicolectomía derecha). Informe: el tumor atraviesa la muscular propia y llega a la grasa pericólica. Hay 0 ganglios positivos de 23. En la grasa del mesocolon se encuentran 2 nódulos de tumor sin estructura de ganglio: depósitos tumorales.',
      },
      { dibujo: { tipo: 'ganglios', organo: 'colon', positivos: 0, total: 23, depositos: 2 } },
      {
        pregunta: {
          id: 'c7a',
          enunciado: 'Si no existieran los depósitos, ¿qué estadio tendría?',
          opciones: ['I', 'IIA', 'IIB', 'IIIA'],
          correcta: 1,
          explicacion: 'pT3 N0 M0 es estadio IIA. Sería IIB con un T4a y estadio I con un T1 o T2.',
        },
      },
      {
        pregunta: {
          id: 'c7b',
          enunciado: 'Con los dos depósitos y ningún ganglio positivo, ¿qué N es?',
          opciones: ['N0', 'N1a', 'N1c', 'N2a'],
          correcta: 2,
          explicacion:
            'N1c existe justo para esto: depósitos tumorales sin ganglios positivos. Los depósitos no se cuentan como ganglios, así que no es N1a ni N2a. Tampoco se pueden ignorar: no es N0.',
        },
      },
      {
        construir: { organo: 'colon', prefijo: 'p', T: 'T3', N: 'N1c', M: 'M0' },
      },
      {
        pregunta: {
          id: 'c7c',
          enunciado: 'Otro paciente tiene 3 ganglios positivos y además 2 depósitos. ¿Qué N es?',
          opciones: ['N1b', 'N1c', 'N2a, sumando 3 + 2', 'N2b'],
          correcta: 0,
          explicacion:
            'Con la 8.ª edición, si hay ganglios positivos manda su número (3 = N1b) y los depósitos no se suman. N1c solo se usa cuando no hay ningún ganglio positivo. Esto es justo lo que cambia en la revisión de 2027, en la que los depósitos pasan a ser un descriptor propio.',
        },
      },
      {
        pregunta: {
          id: 'c7d',
          enunciado: '¿Qué cambia para el paciente del caso con su pT3 N1c?',
          opciones: [
            'Nada, porque no tiene ganglios',
            'Es estadio III: se le propone quimioterapia adyuvante',
            'Necesita radioterapia',
            'Hay que reoperar',
          ],
          correcta: 1,
          explicacion:
            'Pasa de IIA a IIIB y eso cambia el tratamiento: en el estadio III se indica quimioterapia adyuvante con fluoropirimidina y oxaliplatino. Por eso importa tanto que el patólogo busque los depósitos.',
        },
      },
    ],
  },
  {
    id: 'c8',
    clave: 'La M cuenta órganos, no lesiones. En cuanto hay peritoneo, es M1c.',
    numero: 8,
    organo: 'colon',
    titulo: 'Metástasis: dónde importa tanto como cuántas',
    concepto: 'M1a, M1b, M1c · estudio molecular',
    pasos: [
      {
        texto:
          'Mujer de 57 años con un adenocarcinoma de sigma. En el TAC hay dos metástasis en el hígado, una en cada lóbulo. No hay nada más.',
      },
      { dibujo: { tipo: 'metastasis', organo: 'colon', sitios: ['higado'] } },
      {
        pregunta: {
          id: 'c8a',
          enunciado: 'Dos metástasis, las dos en el hígado. ¿Qué M es?',
          opciones: ['M1a', 'M1b, porque son dos', 'M1c', 'M0 hasta confirmarlo con biopsia'],
          correcta: 0,
          explicacion:
            'La M cuenta órganos, no lesiones: dos metástasis en un solo órgano son M1a. Sería M1b si hubiera dos órganos afectados (hígado y pulmón) y M1c si hubiera peritoneo. Las metástasis inequívocas en el TAC cuentan para el estadio clínico sin necesidad de biopsia.',
        },
      },
      {
        pregunta: {
          id: 'c8b',
          enunciado: '¿Qué estadio es?',
          opciones: ['III', 'IVA', 'IVB', 'IVC'],
          correcta: 1,
          explicacion:
            'En el colon, el estadio IV se subdivide como la M: M1a → IVA, M1b → IVB, M1c → IVC. La T y la N ya no cambian el grupo.',
        },
      },
      {
        pregunta: {
          id: 'c8c',
          enunciado: 'Antes de decidir el tratamiento sistémico, ¿qué hay que pedir al patólogo?',
          opciones: [
            'Solo la confirmación de adenocarcinoma',
            'RAS (KRAS y NRAS), BRAF, MMR/MSI y HER2',
            'Receptores hormonales',
            'PD-L1 y nada más',
          ],
          correcta: 1,
          explicacion:
            'Las cuatro determinaciones deciden el tratamiento: los anti-EGFR solo funcionan sin mutación de RAS, BRAF V600E y HER2 tienen sus propios tratamientos, y los tumores MSI-H responden a la inmunoterapia. Los receptores hormonales son de la mama, y el PD-L1 no se usa para decidir en el colon.',
        },
      },
      {
        texto:
          'Seis meses después, con buena respuesta, se plantea operar. En la laparoscopia aparecen implantes peritoneales en la pelvis.',
      },
      { dibujo: { tipo: 'metastasis', organo: 'colon', sitios: ['higado', 'peritoneo'] } },
      {
        pregunta: {
          id: 'c8d',
          enunciado: 'Hígado más peritoneo. ¿Qué categoría M es ahora?',
          opciones: ['M1a', 'M1b', 'M1c', 'Sigue siendo M1a, porque el estadio no se cambia'],
          correcta: 2,
          explicacion:
            'En cuanto hay peritoneo es M1c, con o sin otros órganos. El estadio clínico inicial no se reescribe, pero esto es una nueva valoración y se registra. Con la revisión de 2027 sería M1c2 (peritoneo y otro órgano), para separarlo del M1c1 (solo peritoneo), que tiene mejor pronóstico y más opciones de cirugía de citorreducción.',
        },
      },
    ],
  },
]

/** Chuleta para tener a mano durante los casos. */
export const CHULETA = {
  estomago: {
    T: [
      ['Tis', 'Displasia de alto grado, sin invadir la lámina propia'],
      ['T1a', 'Lámina propia o muscularis mucosae'],
      ['T1b', 'Submucosa'],
      ['T2', 'Muscular propia'],
      ['T3', 'Subserosa'],
      ['T4a', 'Atraviesa la serosa'],
      ['T4b', 'Invade órganos vecinos'],
    ],
    N: [
      ['N0', 'Ninguno'],
      ['N1', '1–2 ganglios'],
      ['N2', '3–6 ganglios'],
      ['N3a', '7–15 ganglios'],
      ['N3b', '16 o más'],
    ],
    M: [
      ['M0', 'Sin metástasis'],
      ['M1', 'A distancia, incluida la citología peritoneal positiva'],
    ],
    minimo: 'Al menos 16 ganglios examinados',
  },
  colon: {
    T: [
      ['Tis', 'Intramucoso: lámina propia o muscularis mucosae'],
      ['T1', 'Submucosa'],
      ['T2', 'Muscular propia'],
      ['T3', 'Grasa pericólica'],
      ['T4a', 'Perfora el peritoneo visceral'],
      ['T4b', 'Invade o se adhiere a otros órganos'],
    ],
    N: [
      ['N0', 'Ninguno'],
      ['N1a', '1 ganglio'],
      ['N1b', '2–3 ganglios'],
      ['N1c', 'Sin ganglios, con depósitos tumorales'],
      ['N2a', '4–6 ganglios'],
      ['N2b', '7 o más'],
    ],
    M: [
      ['M0', 'Sin metástasis'],
      ['M1a', 'Un órgano, sin peritoneo'],
      ['M1b', 'Dos o más órganos, sin peritoneo'],
      ['M1c', 'Peritoneo, con o sin otros órganos'],
    ],
    minimo: 'Al menos 12 ganglios examinados',
  },
}

/**
 * Preguntas cuyas opciones siguen un orden natural (T1→T4, 10→30 ganglios,
 * c→p→yp→r): se muestran tal cual. El resto se reordena al pintar para que la
 * respuesta correcta no caiga casi siempre en la B, que es hacia donde se
 * escoran al escribirlas.
 */
export const ORDENADAS = new Set([
  'l2', 'l4', 'e1', 'e2', 'e3', 'k2', 'k3', 'k4',
  'c1a', 'c1b', 'c3b', 'c4c', 'c5a', 'c6a', 'c7a', 'c7b', 'c7c', 'c8a', 'c8b', 'c8d',
])
