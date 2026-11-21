// Pestaña «Tumores» · grupo esófago y estómago.
// Esquema: docs/ESQUEMA-TUMORES.md. Referencia: clases del tema 2 (tumores de
// esófago) y del tema 4 (patología gástrica maligna), con las erratas de
// 20_plataforma/docs/ERRATAS-MATERIAL-DOCENTE.md corregidas y señaladas.

const CLASE_ESOFAGO = 'Clase: Tema 2pdf_Tumores de esófago.pdf (tema 2, curso 2025-2026)'
const CLASE_GASTRICA = 'Clase: 04.- Pat Gástrica M.pdf (tema 4, incluye extractos de las guías NCCN de cáncer gástrico)'
const AJCC = 'AJCC Cancer Staging Manual, 8.ª ed. (2017)'

export const TUMORES_ESOFAGO_ESTOMAGO = [
  /* ================================================================== */
  /* 1 · Cáncer de esófago                                               */
  /* ================================================================== */
  {
    id: 'ca-esofago',
    bloque: 'esofago',
    titulo: 'Cáncer de esófago',
    subtitulo: 'Carcinoma epidermoide, adenocarcinoma y tumores de la unión esofagogástrica',
    tnm: 'esofago',
    mapa: ['esofago', 'estomago'],
    esencial: [
      'Son dos cánceres distintos: el epidermoide (tabaco y alcohol, tercios superior y medio) y el adenocarcinoma (reflujo, obesidad y esófago de Barrett, tercio distal), que es el que aumenta.',
      'La disfagia progresiva con pérdida de peso es el síntoma guía y casi siempre llega tarde; se diagnostica con endoscopia y biopsia y se estadifica con TC, PET-TC y ecoendoscopia.',
      'El tumor localizado se opera (esofaguectomía con linfadenectomía), el localmente avanzado recibe antes tratamiento neoadyuvante y el diseminado se palia, sobre todo con endoprótesis.',
    ],
    secciones: [
      {
        titulo: 'Epidemiología y factores de riesgo',
        puntos: [
          'La clase lo sitúa como la <b>6.ª neoplasia</b> del mundo, con enormes diferencias geográficas: riesgo alto en China, Irán o Sudáfrica y bajo en la mayor parte de Europa.',
          'El <b>carcinoma epidermoide</b> nace de la mucosa escamosa original y se asocia a <b>tabaco y alcohol</b>, bebidas muy calientes, nitrosaminas, mala nutrición y bajo nivel socioeconómico. Su incidencia está bajando.',
          'El <b>adenocarcinoma</b> nace sobre mucosa metaplásica (<b>esófago de Barrett</b>) y se asocia a <b>reflujo gastroesofágico y obesidad</b>. Es casi siempre distal y su incidencia está subiendo en Occidente.',
          'Lesiones que predisponen al epidermoide: <b>acalasia</b>, estenosis por <b>cáusticos</b>, cáncer de cabeza y cuello previo, radioterapia, <b>síndrome de Plummer-Vinson</b> (ferropenia) y <b>tilosis</b> (genodermatosis autosómica dominante).',
        ],
        dibujo: {
          tipo: 'comparar',
          columnas: ['', 'Epidermoide', 'Adenocarcinoma'],
          filas: [
            ['Origen', 'Mucosa escamosa', 'Metaplasia (Barrett)'],
            ['Factores', 'Tabaco y alcohol', 'Reflujo y obesidad'],
            ['Localización', 'Tercios superior y medio', 'Tercio distal'],
            ['Perfil', 'Mal estado nutricional', 'Buen estado nutricional'],
            ['Tendencia', 'En descenso', 'En aumento'],
          ],
          pie: 'Los dos tipos histológicos: perfiles de paciente opuestos.',
        },
      },
      {
        titulo: 'Anatomía patológica',
        puntos: [
          'El <b>esófago de Barrett</b> es la sustitución del epitelio escamoso distal por epitelio columnar con <b>metaplasia intestinal</b>, como respuesta al reflujo ácido crónico. Es la lesión precursora del adenocarcinoma.',
          'La progresión es escalonada: metaplasia, displasia de bajo grado, displasia de alto grado y carcinoma. Por eso el Barrett se vigila con endoscopias y biopsias periódicas.',
          '<b>Siewert</b> clasifica los tumores de la unión según su centro: <b>tipo I</b> de 1 a 5 cm por encima; <b>tipo II</b> de 1 cm por encima a 2 cm por debajo; <b>tipo III</b> de 2 a 5 cm por debajo.',
          'El tipo I es un adenocarcinoma del esófago distal sobre Barrett; el II, un cardias verdadero; el III, un tumor subcardial que invade la unión desde abajo y se trata como <b>cáncer gástrico</b>.',
          'Otros tumores malignos del esófago son raros: GIST, leiomiosarcoma, linfoma y melanoma.',
        ],
        dibujo: [
          {
            tipo: 'cascada',
            pasos: ['Reflujo crónico', 'Metaplasia (Barrett)', 'Displasia de bajo grado', 'Displasia de alto grado', 'Adenocarcinoma'],
            pie: 'Secuencia de Barrett: cada escalón es una ocasión para vigilar y tratar por endoscopia.',
          },
          {
            tipo: 'siewert',
            pie: 'Siewert: posición del centro del tumor respecto a la unión esofagogástrica.',
          },
        ],
      },
      {
        titulo: 'Clínica',
        puntos: [
          'En fases iniciales suele ser <b>asintomático</b> o da solo síntomas de reflujo. Cuando aparece la clínica, el tumor suele estar avanzado.',
          'El síntoma guía es la <b>disfagia progresiva</b>, primero a sólidos y luego a líquidos (85-95 % según la clase), con <b>pérdida de peso</b>. También regurgitación, sialorrea y dolor.',
          '<b>Tos al tragar</b> y neumonías de repetición sugieren <b>fístula traqueoesofágica</b>; la <b>ronquera</b> indica afectación del nervio recurrente. Ambos son signos de enfermedad localmente avanzada.',
          'Se extiende pronto porque el esófago <b>no tiene serosa</b>: invade por contigüidad tráquea, bronquios, aorta, pericardio y pleura. A distancia, sobre todo <b>hígado, pulmón y hueso</b>.',
          'Drenaje linfático: los <b>dos tercios superiores drenan hacia arriba</b> (mediastino y cuello) y el <b>tercio inferior hacia abajo</b>, a los ganglios gástricos y celíacos.',
        ],
      },
      {
        titulo: 'Diagnóstico y estadificación',
        puntos: [
          'La prueba clave es la <b>endoscopia con biopsia</b>: localiza el tumor, mide su extensión y su relación con la unión esofagogástrica y da el diagnóstico histológico.',
          'El <b>esofagograma</b> orienta (estenosis irregular) pero no diagnostica. La <b>TC</b> y el <b>PET-TC</b> buscan invasión de estructuras vecinas y metástasis.',
          'La <b>ecoendoscopia</b> es la mejor prueba para la <b>T y la N</b>: capa que alcanza el tumor y ganglios, con punción si hace falta. Broncoscopia si el tumor está junto a la vía aérea.',
          'T (AJCC 8.ª): <b>T1a</b> lámina propia o muscularis mucosae; <b>T1b</b> submucosa; <b>T2</b> muscular propia; <b>T3</b> adventicia; <b>T4a</b> pleura, pericardio, ácigos, diafragma o peritoneo; <b>T4b</b> aorta, vértebra o tráquea.',
          'N (AJCC 8.ª) por número de ganglios regionales: <b>N1</b> 1-2, <b>N2</b> 3-6, <b>N3</b> 7 o más. En la 8.ª edición los <b>ganglios celíacos son regionales</b>, no metástasis.',
        ],
        dibujo: [
          {
            tipo: 'algoritmo',
            pasos: [
              { texto: 'Disfagia progresiva', detalle: 'Con pérdida de peso: sospecha de cáncer' },
              { texto: 'Endoscopia y biopsia', detalle: 'Diagnóstico histológico y localización' },
              { texto: 'TC y PET-TC', detalle: '¿Metástasis o invasión de vecinos?' },
              { texto: 'Ecoendoscopia', detalle: 'Profundidad (T) y ganglios (N)' },
            ],
            ramas: [
              { si: 'T1a', texto: 'Resección endoscópica' },
              { si: 'T1b-T2 N0', texto: 'Esofaguectomía' },
              { si: 'T3-T4a o N+', texto: 'Neoadyuvancia y cirugía' },
            ],
            pie: 'Si hay metástasis a distancia (M1), el tratamiento es paliativo.',
          },
          {
            tipo: 'pared',
            organo: 'esofago',
            resaltar: 'T3',
            pie: 'Sin serosa: el T3 llega a la adventicia y el T4 ya invade órganos vecinos.',
          },
        ],
      },
      {
        titulo: 'Tratamiento',
        puntos: [
          'Antes de decidir se valoran histología, localización, extensión y <b>estado general y nutricional</b>. Según la clase, menos de la mitad de los pacientes son candidatos a resección.',
          'Tumor <b>muy precoz</b> (Tis, T1a): resección endoscópica. La clase dice «estadio 0-I: cirugía»; hoy el T1a se trata por endoscopia y el T1b va a esofaguectomía.',
          'Tumor <b>localmente avanzado</b> (T3-T4a o con ganglios): <b>neoadyuvancia</b> (quimiorradioterapia, o quimioterapia perioperatoria en el adenocarcinoma) y después cirugía. El epidermoide cervical se trata con quimiorradioterapia definitiva.',
          '<b>Ivor Lewis</b>: laparotomía y toracotomía derecha, anastomosis intratorácica. <b>McKeown</b>: añade cervicotomía, anastomosis cervical. <b>Transhiatal</b> (Orringer): sin toracotomía, menos morbilidad respiratoria, linfadenectomía limitada.',
          'El esófago se sustituye casi siempre por un <b>tubo gástrico</b> subido por el mediastino posterior; si no es posible, por colon o yeyuno. Hoy se opera a menudo por toracoscopia y laparoscopia.',
          'Paliación: <b>endoprótesis autoexpandible</b> para la disfagia y, recubierta, para la fístula traqueoesofágica; además radioterapia paliativa, láser o terapia fotodinámica.',
        ],
        dibujo: [
          {
            tipo: 'escala',
            titulo: 'Tratamiento según la extensión',
            niveles: [
              { codigo: 'Tis-T1a', texto: 'Resección endoscópica', detalle: 'Limitado a la mucosa' },
              { codigo: 'T1b-T2 N0', texto: 'Esofaguectomía', detalle: 'En T2 se puede valorar la neoadyuvancia' },
              { codigo: 'T3-T4a o N+', texto: 'Neoadyuvancia y esofaguectomía' },
              { codigo: 'T4b', texto: 'Quimiorradioterapia', detalle: 'Irresecable de entrada' },
              { codigo: 'M1', texto: 'Tratamiento paliativo', detalle: 'Quimioterapia, endoprótesis, radioterapia' },
            ],
          },
          {
            tipo: 'comparar',
            columnas: ['', 'Ivor Lewis', 'McKeown', 'Transhiatal'],
            filas: [
              ['Incisiones', 'Abdomen y tórax derecho', 'Abdomen, tórax y cuello', 'Abdomen y cuello'],
              ['Anastomosis', 'Intratorácica', 'Cervical', 'Cervical'],
              ['Linfadenectomía', 'Amplia', 'Amplia', 'Limitada'],
              ['A favor', 'Buena exposición', 'Margen proximal amplio', 'Sin toracotomía'],
            ],
            pie: 'Vías abiertas clásicas; las tres se hacen hoy también por cirugía mínimamente invasiva.',
          },
        ],
      },
      {
        titulo: 'Pronóstico y seguimiento',
        puntos: [
          'El pronóstico depende sobre todo del <b>estadio</b>: el tumor limitado a la mucosa se cura casi siempre, mientras que con metástasis la supervivencia a 5 años es excepcional.',
          'Solo la resección <b>R0</b> (márgenes libres) con linfadenectomía adecuada ofrece curación; por eso se opera en centros con experiencia.',
          'La esofaguectomía es de las operaciones digestivas con más complicaciones: respiratorias, fuga de la anastomosis y <b>quilotórax</b> por lesión del conducto torácico.',
        ],
      },
      {
        titulo: 'Para el examen',
        puntos: [
          'Varón fumador y bebedor, mal nutrido, con tumor del tercio medio: <b>epidermoide</b>. Varón obeso con reflujo de años y tumor distal sobre Barrett: <b>adenocarcinoma</b>.',
          'Trampa del TNM: la clase considera <b>M1 los ganglios del tronco celíaco</b> y usa una N sin subdividir. En la AJCC 8.ª son <b>regionales</b> y la N se divide por número de ganglios.',
          'Tos al beber en un cáncer de esófago es una fístula traqueoesofágica; se palia con <b>endoprótesis recubierta</b>, no con cirugía.',
          'EPOC grave y tumor distal resecable: la vía <b>transhiatal</b> evita la toracotomía.',
          'Siewert III se estadifica y trata como <b>cáncer gástrico</b>. En la AJCC 8.ª, un tumor cuyo centro está a 2 cm o menos del cardias se estadifica como esófago.',
        ],
      },
    ],
    tarjetas: [
      { a: '¿Qué cáncer de esófago se asocia a tabaco y alcohol?', r: 'El carcinoma epidermoide, sobre todo de los tercios superior y medio.' },
      { a: '¿Cuál es la lesión precursora del adenocarcinoma de esófago?', r: 'El esófago de Barrett: metaplasia intestinal del esófago distal por reflujo crónico.' },
      { a: '¿Qué tipo histológico de cáncer de esófago aumenta en Occidente?', r: 'El adenocarcinoma, ligado al reflujo y la obesidad.' },
      { a: 'Siewert tipo II: ¿dónde está el centro del tumor?', r: 'Entre 1 cm por encima y 2 cm por debajo de la unión: cardias verdadero.' },
      { a: '¿Cómo se trata un tumor Siewert III?', r: 'Como un cáncer gástrico.' },
      { a: '¿Cuál es el síntoma más frecuente del cáncer de esófago?', r: 'La disfagia progresiva, acompañada de pérdida de peso.' },
      { a: '¿Qué sugiere la tos al deglutir líquidos en un cáncer de esófago?', r: 'Una fístula traqueoesofágica.' },
      { a: '¿Mejor prueba para la T y la N del esófago?', r: 'La ecoendoscopia, con punción de ganglios si hace falta.' },
      { a: '¿Qué incisiones combina la esofaguectomía de Ivor Lewis?', r: 'Laparotomía y toracotomía derecha, con anastomosis intratorácica.' },
      { a: '¿Qué ventaja tiene la esofaguectomía transhiatal?', r: 'Evita la toracotomía: menos morbilidad respiratoria, a costa de una linfadenectomía limitada.' },
      { a: 'Dos trastornos premalignos con nombre propio del epidermoide esofágico', r: 'Síndrome de Plummer-Vinson (ferropenia) y tilosis (genodermatosis autosómica dominante).' },
      { a: 'Ganglios del tronco celíaco en la AJCC 8.ª: ¿N o M?', r: 'Son regionales: cuentan para la N. La clase, con un criterio anterior, los llama M1.' },
    ],
    preguntas: [
      {
        id: 'ca-esofago-1',
        enunciado: 'Varón de 66 años, fumador y bebedor importante, delgado, con disfagia progresiva a sólidos y pérdida de 10 kg. La endoscopia muestra una lesión ulcerada y estenosante en el tercio medio del esófago. ¿Cuál es el diagnóstico más probable?',
        opciones: [
          'Adenocarcinoma sobre esófago de Barrett',
          'Carcinoma epidermoide de esófago',
          'Leiomioma esofágico sintomático',
          'Acalasia con megaesófago',
        ],
        correcta: 1,
        explicacion: 'Tabaco, alcohol, mal estado nutricional y un tumor ulcerado del tercio medio dibujan el perfil del carcinoma epidermoide. El adenocarcinoma asienta en el esófago distal sobre Barrett y se asocia a reflujo y obesidad, no a este perfil. El leiomioma es una lesión submucosa con mucosa intacta: no ulcera ni adelgaza así. La acalasia da disfagia, pero sin lesión ulcerada; además es un factor de riesgo del epidermoide, no una alternativa a él.',
      },
      {
        id: 'ca-esofago-2',
        enunciado: 'Un adenocarcinoma tiene su centro 3 cm por debajo de la unión esofagogástrica y la infiltra desde abajo. ¿Cómo se clasifica y cómo se trata?',
        opciones: [
          'Siewert I, tratado como cáncer de esófago',
          'Siewert II, cardias verdadero, tratado como esófago',
          'Siewert III, tratado como cáncer gástrico',
          'Tumor de cuerpo gástrico, fuera de Siewert',
        ],
        correcta: 2,
        explicacion: 'El tipo III de Siewert tiene el centro entre 2 y 5 cm por debajo de la unión y la invade desde abajo; se estadifica y trata como cáncer gástrico. El tipo I está de 1 a 5 cm por encima, sobre Barrett. El tipo II ocupa la franja de 1 cm por encima a 2 cm por debajo, así que 3 cm ya no encaja. Y no es un tumor de cuerpo: a 3 cm de la unión sigue dentro de la clasificación, que llega hasta 5 cm.',
      },
      {
        id: 'ca-esofago-3',
        enunciado: 'Paciente de 71 años con carcinoma epidermoide de esófago irresecable. Desde hace dos semanas tose cada vez que bebe y ha tenido dos neumonías. La TC confirma una comunicación entre el esófago y el bronquio principal. ¿Qué tratamiento indicas?',
        opciones: [
          'Endoprótesis esofágica autoexpandible recubierta',
          'Esofaguectomía urgente con cierre de la fístula',
          'Gastrostomía y dieta absoluta de forma indefinida',
          'Radioterapia exclusiva sobre el tumor',
        ],
        correcta: 0,
        explicacion: 'La fístula traqueoesofágica maligna se palia con una endoprótesis recubierta que sella la comunicación y permite comer. La esofaguectomía no tiene sentido en un tumor irresecable, con un paciente infectado. La gastrostomía alimenta, pero no evita que la saliva pase al bronquio, así que las neumonías siguen. La radioterapia sola no cierra la fístula y, al reducir el tumor, puede incluso agrandarla.',
      },
      {
        id: 'ca-esofago-4',
        enunciado: 'Adenocarcinoma del esófago distal. Tras la esofaguectomía, el patólogo encuentra metástasis en dos ganglios paraesofágicos y en un ganglio del tronco celíaco. No hay metástasis viscerales. Según la AJCC 8.ª, ¿qué N y M le corresponden?',
        opciones: ['N1, M0', 'N2, M0', 'N1, M1 por el ganglio celíaco', 'N3, M0'],
        correcta: 1,
        explicacion: 'En la AJCC 8.ª el ganglio celíaco es regional, así que hay tres ganglios regionales positivos: N2 (3-6), M0. N1 sería contar solo los paraesofágicos y olvidar el celíaco. N1 M1 es el criterio que da la clase, tomado de una edición anterior: en la 8.ª los celíacos ya no son metástasis. N3 exige siete o más ganglios. Si el examen pregunta por la clase, recuerda que allí el celíaco es M1.',
      },
      {
        id: 'ca-esofago-5',
        enunciado: 'Varón de 74 años con EPOC grave e ingresos repetidos por reagudización. Tiene un adenocarcinoma del tercio inferior del esófago T2N0M0 y buen estado nutricional. ¿Qué vía de abordaje es la más adecuada?',
        opciones: [
          'Ivor Lewis: laparotomía y toracotomía derecha',
          'McKeown: cervicotomía, laparotomía y toracotomía',
          'Transhiatal: laparotomía y cervicotomía',
          'Sweet: toracotomía izquierda y frenotomía',
        ],
        correcta: 2,
        explicacion: 'La esofaguectomía transhiatal evita abrir el tórax y por eso tiene menos repercusión respiratoria; encaja en tumores T1-T2 del tercio inferior, a costa de una linfadenectomía limitada. Ivor Lewis y McKeown exigen toracotomía derecha, mal tolerada con una EPOC grave. Sweet también abre el tórax, por el lado izquierdo, y su linfadenectomía es limitada: suma el inconveniente de la toracotomía sin aportar una ventaja oncológica.',
      },
      {
        id: 'ca-esofago-6',
        enunciado: 'Varón de 59 años en vigilancia por esófago de Barrett. Se detecta un adenocarcinoma de 1,5 cm, bien diferenciado, limitado a la mucosa (T1a), sin invasión linfovascular ni ganglios en la ecoendoscopia. ¿Qué tratamiento indicas?',
        opciones: [
          'Resección endoscópica de la lesión',
          'Esofaguectomía de Ivor Lewis',
          'Quimiorradioterapia definitiva',
          'Vigilancia endoscópica anual',
        ],
        correcta: 0,
        explicacion: 'Un T1a sin factores de riesgo tiene un riesgo ganglionar muy bajo y se trata con resección endoscópica, que además da el estadio definitivo. La clase dice «estadio 0-I: cirugía»; hoy la esofaguectomía se reserva para el T1b o el T1a con factores de riesgo. La quimiorradioterapia definitiva es para tumores avanzados o pacientes inoperables. Vigilar un cáncer ya diagnosticado no es aceptable: la vigilancia es para el Barrett sin displasia.',
      },
    ],
    fuentes: [
      CLASE_ESOFAGO,
      'Clase: 04.- Pat Gástrica M.pdf (clasificación de Siewert según NCCN)',
      AJCC,
    ],
  },

  /* ================================================================== */
  /* 2 · Tumores benignos de esófago                                     */
  /* ================================================================== */
  {
    id: 'tumores-benignos-esofago',
    bloque: 'esofago',
    titulo: 'Tumores benignos de esófago',
    subtitulo: 'Leiomioma, quistes y pólipo fibrovascular',
    tnm: null,
    mapa: ['esofago'],
    esencial: [
      'Son raros (menos del 1 % de las neoplasias esofágicas) y el más frecuente, con diferencia, es el leiomioma, alrededor del 60 %, seguido de los quistes, alrededor del 20 %.',
      'El leiomioma es un tumor de músculo liso de la pared, cubierto por mucosa normal y casi siempre asintomático; si crece o da síntomas se enuclea sin abrir la mucosa.',
      'No lo confundas con el GIST: la clase atribuye el leiomioma a las células de Cajal y a KIT, pero esa es la biología del GIST; el leiomioma es desmina positivo y KIT negativo.',
    ],
    secciones: [
      {
        titulo: 'Epidemiología y clasificación',
        puntos: [
          'Los tumores benignos suponen <b>menos del 1 %</b> de las neoplasias del esófago. A diferencia del cáncer, crecen despacio, no infiltran y a menudo se descubren por casualidad.',
          'Se clasifican por la capa de origen: <b>mucosos o intraluminales</b> (papiloma, pólipo fibrovascular, quistes de retención), <b>submucosos</b> (lipoma, fibroma, hemangioma, tumor de células granulares) y de la <b>pared muscular</b> (leiomioma).',
          'Frecuencias de la clase: <b>leiomiomas 60 %</b>, <b>quistes 20 %</b>, <b>pólipos 5 %</b> y el resto (fibroma, lipoma, neuroma, adenoma, hemangioma) en torno al 5 %.',
        ],
        dibujo: {
          tipo: 'escala',
          titulo: 'Frecuencia relativa (clase)',
          niveles: [
            { codigo: '1.º', texto: 'Leiomioma', detalle: 'Alrededor del 60 %; dos tercios distales' },
            { codigo: '2.º', texto: 'Quistes', detalle: 'Alrededor del 20 %; congénitos o adquiridos' },
            { codigo: '3.º', texto: 'Pólipo fibrovascular', detalle: 'Alrededor del 5 %; esófago cervical' },
          ],
          resaltar: '1.º',
        },
      },
      {
        titulo: 'Anatomía patológica',
        puntos: [
          'El <b>leiomioma</b> procede del <b>músculo liso</b> de la muscular propia: es <b>desmina y actina positivo</b> y <b>KIT (CD117) y DOG1 negativo</b>. Suele ser único, bien delimitado y estar en los dos tercios distales.',
          'Errata de la clase: atribuye el leiomioma a las <b>células intersticiales de Cajal</b> y a mutaciones de <b>c-KIT</b>. Eso define al <b>GIST</b>, que en el esófago es raro. Lo correcto es músculo liso.',
          'Los <b>quistes</b> son la segunda lesión benigna: congénitos (duplicación esofágica, tercio superior, primer año de vida) o adquiridos por obstrucción de glándulas (esófago inferior, adultos).',
          'El <b>pólipo fibrovascular</b> aparece en varones de 60-70 años, en el 85 % en el <b>esófago cervical</b>; nace en la submucosa, se pediculiza, puede crecer mucho y albergar carcinoma.',
        ],
        dibujo: [
          {
            tipo: 'comparar',
            columnas: ['', 'Leiomioma', 'GIST'],
            filas: [
              ['Origen', 'Músculo liso', 'Células de Cajal'],
              ['Inmunohistoquímica', 'Desmina +, KIT −', 'CD117 (KIT) +, DOG1 +'],
              ['Dónde predomina', 'Esófago', 'Estómago'],
              ['Comportamiento', 'Benigno', 'Potencial maligno variable'],
              ['Cirugía', 'Enucleación', 'Resección con márgenes'],
            ],
            pie: 'La clase mezcla ambos: el leiomioma no tiene mutaciones de KIT.',
          },
          {
            tipo: 'comparar',
            columnas: ['', 'Quiste congénito', 'Quiste adquirido'],
            filas: [
              ['Origen', 'Duplicación esofágica', 'Glándulas obstruidas'],
              ['Localización', 'Tercio superior', 'Esófago inferior'],
              ['Edad', 'Primer año de vida', 'Adultos'],
            ],
          },
        ],
      },
      {
        titulo: 'Clínica',
        puntos: [
          'La mayoría de los leiomiomas son <b>asintomáticos</b> y se encuentran por casualidad, sobre todo entre los 40 y 50 años. Cuando crecen dan <b>disfagia</b> y <b>presión retroesternal</b>.',
          'Como la mucosa está intacta, casi nunca <b>sangran ni ulceran</b> y no producen la pérdida de peso marcada del cáncer.',
          'El pólipo fibrovascular suele ser asintomático, pero puede dar disfagia por obstrucción, sangrar al ulcerarse y, de forma muy llamativa, <b>regurgitarse a la boca</b> e incluso comprometer la vía aérea.',
        ],
      },
      {
        titulo: 'Diagnóstico',
        puntos: [
          'El <b>esofagograma</b> muestra un defecto de repleción liso, de bordes nítidos, típico de una lesión dentro de la pared.',
          'En la <b>endoscopia</b> se ve una protrusión cubierta por <b>mucosa normal</b>. La biopsia superficial rara vez llega a la lesión, que está debajo de la mucosa.',
          'La <b>ecoendoscopia</b> es la prueba clave: lesión hipoecoica, homogénea y bien delimitada que depende de la <b>muscular propia</b>. TC y PET-TC ayudan si es grande o se sospecha malignidad.',
        ],
        dibujo: {
          tipo: 'algoritmo',
          pasos: [
            { texto: 'Hallazgo o disfagia', detalle: 'Esofagograma: defecto liso intramural' },
            { texto: 'Endoscopia', detalle: 'Protrusión con mucosa normal' },
            { texto: 'Ecoendoscopia', detalle: 'Hipoecoica, depende de muscular propia' },
          ],
          ramas: [
            { si: 'Pequeño, asintomático', texto: 'Observación' },
            { si: 'Grande o con síntomas', texto: 'Enucleación', detalle: 'Sin abrir la mucosa' },
            { si: 'Muy grande o dudoso', texto: 'Esofaguectomía', detalle: 'Si se sospecha malignidad' },
          ],
          pie: 'Manejo del leiomioma esofágico según la clase.',
        },
      },
      {
        titulo: 'Tratamiento',
        puntos: [
          'Leiomioma <b>pequeño y asintomático</b>: observación. <b>Grande o sintomático</b>: <b>enucleación</b>, sacándolo de la pared sin abrir la mucosa. <b>Muy grande o con sospecha de malignidad</b>: esofaguectomía.',
          'La vía depende de la altura: el esófago <b>proximal y medio</b> se aborda por el <b>hemitórax derecho</b> y el <b>distal</b> por el <b>izquierdo</b>, por toracotomía o toracoscopia.',
          'Los <b>pólipos fibrovasculares</b> deben extirparse todos: por endoscopia con electrocauterio los pequeños (menos de 2 cm) y por cirugía los muy grandes (más de 8 cm, según la clase).',
        ],
        dibujo: {
          tipo: 'mapa',
          resaltar: ['esofago'],
          pie: 'Leiomioma en los dos tercios distales; pólipo fibrovascular en el esófago cervical.',
        },
      },
      {
        titulo: 'Para el examen',
        puntos: [
          'Lesión submucosa con mucosa íntegra en el esófago de un adulto de mediana edad: piensa primero en <b>leiomioma</b>, el tumor benigno más frecuente.',
          'Leiomioma: músculo liso, desmina positivo, KIT negativo. GIST: células de Cajal, CD117 y DOG1 positivos. La clase los mezcla; aprende la versión correcta.',
          'El objetivo técnico de la enucleación es <b>no abrir la mucosa</b>; si se perfora, se sutura en el acto.',
          'Pólipo largo y pediculado que nace en el esófago cervical y sube a la boca: <b>pólipo fibrovascular</b>.',
        ],
      },
    ],
    tarjetas: [
      { a: '¿Cuál es el tumor benigno más frecuente del esófago?', r: 'El leiomioma, alrededor del 60 % de los benignos.' },
      { a: '¿De qué tejido procede el leiomioma esofágico?', r: 'Del músculo liso de la muscular propia: desmina positivo y KIT negativo.' },
      { a: '¿Qué tumor deriva de las células de Cajal y expresa KIT?', r: 'El GIST. La clase se lo atribuye al leiomioma: es una errata.' },
      { a: '¿Cuál es la segunda lesión benigna más frecuente del esófago?', r: 'Los quistes, alrededor del 20 %, congénitos o adquiridos.' },
      { a: '¿Dónde asienta típicamente el pólipo fibrovascular?', r: 'En el esófago cervical (85 %), en varones de 60 a 70 años.' },
      { a: '¿Prueba clave para caracterizar un leiomioma?', r: 'La ecoendoscopia: lesión hipoecoica que depende de la muscular propia.' },
      { a: '¿Tratamiento del leiomioma grande o sintomático?', r: 'La enucleación, sin abrir la mucosa.' },
      { a: '¿Por qué lado se aborda un leiomioma del esófago distal?', r: 'Por el hemitórax izquierdo, con toracotomía o toracoscopia.' },
      { a: '¿Se extirpa un pólipo fibrovascular asintomático?', r: 'Sí: deben extirparse todos, porque crecen, ulceran y pueden albergar carcinoma.' },
    ],
    preguntas: [
      {
        id: 'tumores-benignos-esofago-1',
        enunciado: 'Mujer de 45 años a la que, en una endoscopia por dispepsia, se le encuentra una protrusión de 2,5 cm en el esófago distal con mucosa íntegra. La ecoendoscopia muestra una lesión hipoecoica, homogénea, que depende de la muscular propia. ¿Cuál es el diagnóstico más probable?',
        opciones: ['Leiomioma esofágico', 'Carcinoma epidermoide incipiente', 'Pólipo fibrovascular', 'Quiste de duplicación esofágica'],
        correcta: 0,
        explicacion: 'Lesión submucosa con mucosa íntegra, dependiente de la muscular propia, en los dos tercios distales de un adulto de mediana edad: leiomioma, el tumor benigno más frecuente. El carcinoma nace de la mucosa, que estaría alterada. El pólipo fibrovascular es intraluminal, pediculado y cervical. El quiste de duplicación es congénito, del tercio superior y se ve en el primer año de vida; además sería anecoico, no hipoecoico sólido.',
      },
      {
        id: 'tumores-benignos-esofago-2',
        enunciado: 'Se enuclea una lesión del esófago medio formada por células fusiformes. ¿Qué perfil inmunohistoquímico confirma que es un leiomioma?',
        opciones: [
          'Desmina positiva y CD117 negativo',
          'CD117 y DOG1 positivos',
          'Citoqueratinas y p63 positivas',
          'Proteína S-100 positiva y desmina negativa',
        ],
        correcta: 0,
        explicacion: 'El leiomioma es músculo liso: desmina positiva y KIT (CD117) negativo. CD117 y DOG1 positivos definen el GIST; la clase atribuye KIT al leiomioma, pero es una errata. Citoqueratinas y p63 marcan un epitelio escamoso, es decir, un carcinoma epidermoide, no un tumor de células fusiformes de la pared. La S-100 sin desmina orienta a un tumor de origen neural, como el schwannoma o el tumor de células granulares.',
      },
      {
        id: 'tumores-benignos-esofago-3',
        enunciado: 'Varón de 48 años con disfagia progresiva desde hace meses. Se diagnostica un leiomioma de 5 cm en el tercio medio del esófago, sin datos de malignidad. ¿Qué tratamiento indicas?',
        opciones: [
          'Enucleación por el hemitórax derecho',
          'Esofaguectomía de Ivor Lewis',
          'Observación con ecoendoscopia anual',
          'Resección endoscópica con asa',
        ],
        correcta: 0,
        explicacion: 'Un leiomioma grande y sintomático se enuclea, y el tercio medio se aborda por el hemitórax derecho (el distal, por el izquierdo). La esofaguectomía se reserva para tumores muy grandes o con sospecha de malignidad: aquí sería excesiva. La observación vale para los pequeños y asintomáticos, no para uno que da disfagia. El asa endoscópica sirve para lesiones mucosas; el leiomioma está en la muscular propia y resecarlo así perforaría el esófago.',
      },
      {
        id: 'tumores-benignos-esofago-4',
        enunciado: 'Varón de 68 años que, al vomitar, nota que «algo carnoso» le sube hasta la boca y luego vuelve a bajar. Tiene disfagia intermitente. La endoscopia muestra una lesión larga y pediculada que nace en el esófago cervical. ¿Qué es?',
        opciones: ['Pólipo fibrovascular', 'Leiomioma esofágico', 'Divertículo de Zenker', 'Quiste esofágico de retención'],
        correcta: 0,
        explicacion: 'Lesión pediculada del esófago cervical, en un varón de 60-70 años, capaz de regurgitarse a la boca: pólipo fibrovascular. El leiomioma es intramural, distal y no tiene pedículo. El divertículo de Zenker también da regurgitación, pero es una evaginación de la pared y en la endoscopia se ve un saco, no una masa pediculada. El quiste de retención es pequeño, del esófago inferior y no se moviliza así.',
      },
      {
        id: 'tumores-benignos-esofago-5',
        enunciado: 'Se programa la enucleación de un leiomioma sintomático del tercio distal del esófago. ¿Por qué vía se aborda según la clase?',
        opciones: ['Hemitórax izquierdo', 'Hemitórax derecho', 'Cervicotomía izquierda', 'Esternotomía media'],
        correcta: 0,
        explicacion: 'La clase indica el hemitórax izquierdo para el esófago distal, por toracotomía o toracoscopia, porque ahí el esófago se aparta hacia la izquierda y queda accesible. El hemitórax derecho es la vía del esófago proximal y medio, donde el esófago está detrás de la ácigos. La cervicotomía solo llega al esófago cervical. La esternotomía expone el corazón, no el mediastino posterior donde está el esófago.',
      },
    ],
    fuentes: [CLASE_ESOFAGO, 'Clasificación OMS de los tumores digestivos, 5.ª ed. (2019): leiomioma frente a GIST'],
  },

  /* ================================================================== */
  /* 3 · Cáncer gástrico                                                 */
  /* ================================================================== */
  {
    id: 'ca-gastrico',
    bloque: 'estomago',
    titulo: 'Cáncer gástrico',
    subtitulo: 'Adenocarcinoma de estómago y de cardias',
    tnm: 'estomago',
    mapa: ['estomago'],
    esencial: [
      'Casi todos son adenocarcinomas: el intestinal nace al final de la cascada de Correa (H. pylori, atrofia, metaplasia, displasia) y el difuso, de células en anillo de sello, se debe a la pérdida de E-cadherina.',
      'Da síntomas vagos y tardíos; se diagnostica con endoscopia y biopsia y se estadifica con ecoendoscopia, TC y, si va a operarse un tumor avanzado, laparoscopia para buscar implantes peritoneales.',
      'El precoz pequeño se reseca por endoscopia; el resto, con gastrectomía de márgenes libres y linfadenectomía D2 (al menos 16 ganglios), con quimioterapia perioperatoria desde T2 o con ganglios.',
    ],
    secciones: [
      {
        titulo: 'Epidemiología y factores de riesgo',
        puntos: [
          'Es la <b>5.ª neoplasia</b> del mundo en incidencia y en mortalidad, y la <b>7.ª en España</b> (datos SEOM citados en clase).',
          '<b>Helicobacter pylori</b> fue declarado carcinógeno en 1994 y multiplica el riesgo por cuatro (clase): inicia la <b>cascada de Correa</b>, que lleva de la gastritis al carcinoma de tipo intestinal.',
          'Otros factores: <b>anemia perniciosa</b> (atrofia autoinmune), salazones y ahumados (nitritos que forman compuestos N-nitrosos), tabaco, alcohol y <b>reflujo biliar</b> tras una cirugía gástrica previa.',
          'Pólipos: los <b>adenomatosos</b> pueden malignizar, más cuanto mayores son, y se extirpan (la clase pide resección por encima de 2 cm). Los <b>fúndicos por IBP</b> son benignos y no se extirpan.',
          'Hereditario: el <b>cáncer gástrico difuso hereditario</b> se debe a mutaciones germinales de <b>CDH1</b> (E-cadherina); también aumentan el riesgo el síndrome de Li-Fraumeni y la poliposis adenomatosa familiar.',
        ],
        dibujo: {
          tipo: 'cascada',
          pasos: ['Gastritis por H. pylori', 'Gastritis atrófica', 'Metaplasia intestinal', 'Displasia', 'Carcinoma intestinal'],
          pie: 'Cascada de Pelayo Correa. La anemia perniciosa entra por el escalón de la atrofia.',
        },
      },
      {
        titulo: 'Anatomía patológica',
        puntos: [
          'Casi todos son <b>adenocarcinomas</b>; el resto son sobre todo linfomas, GIST y tumores neuroendocrinos, que tienen ficha propia.',
          '<b>Lauren</b> distingue el tipo <b>intestinal</b> (forma glándulas, ambiental, sobre atrofia y metaplasia, varones mayores, diseminación hematógena) y el <b>difuso</b> (células en <b>anillo de sello</b>, jóvenes, diseminación transmural y linfática; casi siempre esporádico, hereditario por CDH1 solo en una minoría).',
          'El tipo difuso pierde la <b>E-cadherina</b>, la proteína que mantiene unidas las células: infiltra la pared sin formar masa y puede producir la <b>linitis plástica</b>, un estómago rígido y sin distensión.',
          '<b>Borrmann</b> clasifica el tumor avanzado por su aspecto: I polipoide, II ulcerado de bordes netos, III ulcerado e infiltrante y IV infiltrante difuso (linitis plástica).',
          'En la mucosa gástrica normal no hay <b>células caliciformes</b> (su presencia indica metaplasia intestinal) ni <b>células en anillo de sello</b> (indican transformación maligna, típica del tipo difuso).',
        ],
        dibujo: [
          {
            tipo: 'comparar',
            columnas: ['', 'Intestinal', 'Difuso'],
            filas: [
              ['Histología', 'Forma glándulas', 'Células en anillo de sello'],
              ['Origen', 'Ambiental (H. pylori)', 'Casi siempre esporádico; minoría hereditaria (CDH1)'],
              ['Lesión previa', 'Atrofia y metaplasia', 'No hay secuencia de Correa'],
              ['Paciente', 'Varón de edad avanzada', 'Más joven, más en mujeres'],
              ['Diseminación', 'Hematógena (hígado)', 'Transmural y linfática'],
              ['Molecular', 'A veces inestabilidad de microsatélites', 'Pérdida de E-cadherina'],
            ],
            pie: 'Clasificación de Lauren (1965), tal como aparece en clase.',
          },
          {
            tipo: 'escala',
            titulo: 'Borrmann (cáncer avanzado)',
            niveles: [
              { codigo: 'I', texto: 'Polipoide, protruye hacia la luz' },
              { codigo: 'II', texto: 'Ulcerado de bordes netos' },
              { codigo: 'III', texto: 'Ulcerado e infiltrante' },
              { codigo: 'IV', texto: 'Infiltrante difuso', detalle: 'Linitis plástica' },
            ],
          },
        ],
      },
      {
        titulo: 'Clínica',
        puntos: [
          'Al principio no da síntomas o da molestias <b>inespecíficas</b>: dispepsia, saciedad precoz, dolor epigástrico, vómitos y <b>pérdida de peso</b>. Una anemia ferropénica sin causa obliga a explorar el estómago.',
          'Signos de enfermedad avanzada: ganglio de <b>Virchow</b> (supraclavicular izquierdo), nódulo de la <b>hermana María José</b> (umbilical), <b>repisa de Blumer</b> (implante en el fondo de saco rectal), tumor de <b>Krukenberg</b> (ovario) y <b>ascitis</b>.',
          'Según dónde esté, un tumor del antro puede obstruir la salida del estómago (vómitos) y uno del cardias puede dar disfagia.',
        ],
        dibujo: {
          tipo: 'mapa',
          resaltar: ['estomago', 'peritoneo', 'higado'],
          pie: 'Diseminación: peritoneo (Krukenberg, Blumer, ascitis), ganglios e hígado.',
        },
      },
      {
        titulo: 'Diagnóstico y estadificación',
        puntos: [
          '<b>Endoscopia con biopsia</b> para el diagnóstico. La <b>ecoendoscopia</b> mide la T y valora la N; la <b>TC toracoabdominopélvica</b>, la N y las metástasis hematógenas; RM y PET-TC, en casos seleccionados.',
          'La <b>laparoscopia de estadificación</b> busca metástasis peritoneales que la TC no ve. Se indica en tumores <b>cT3 o cN+</b> candidatos a cirugía, con <b>citología del lavado</b>: si es positiva, es M1.',
          'T (AJCC 8.ª): <b>T1a</b> lámina propia o muscularis mucosae; <b>T1b</b> submucosa; <b>T2</b> muscular propia; <b>T3</b> subserosa; <b>T4a</b> serosa; <b>T4b</b> órganos vecinos.',
          'N (AJCC 8.ª): <b>N1</b> 1-2 ganglios, <b>N2</b> 3-6, <b>N3a</b> 7-15 y <b>N3b</b> 16 o más. Para clasificar bien hay que examinar al menos 16 ganglios.',
          '<b>Cáncer gástrico precoz</b> es el limitado a mucosa o submucosa (T1), tenga o no ganglios afectados.',
        ],
        dibujo: [
          {
            tipo: 'algoritmo',
            pasos: [
              { texto: 'Endoscopia y biopsia', detalle: 'Adenocarcinoma' },
              { texto: 'TC toracoabdominopélvica', detalle: '¿Metástasis a distancia?' },
              { texto: 'Ecoendoscopia', detalle: 'Profundidad (T) y ganglios (N)' },
              { texto: 'Laparoscopia con citología', detalle: 'Si cT3 o N+: descarta implantes' },
            ],
            ramas: [
              { si: 'Tis o T1a favorable', texto: 'Resección endoscópica', detalle: '<2 cm, diferenciado, sin úlcera' },
              { si: 'T1b N0', texto: 'Gastrectomía + D2' },
              { si: 'T2 o más, o N+', texto: 'QT perioperatoria + D2' },
            ],
            pie: 'Con metástasis (incluida la citología positiva): tratamiento sistémico y paliación.',
          },
          {
            tipo: 'pared',
            organo: 'estomago',
            resaltar: 'T1b',
            pie: 'El cáncer precoz es T1 (T1a mucosa, T1b submucosa), con o sin ganglios.',
          },
          {
            tipo: 'escala',
            titulo: 'N del estómago (AJCC 8.ª)',
            niveles: [
              { codigo: 'N0', texto: 'Sin ganglios afectados' },
              { codigo: 'N1', texto: '1-2 ganglios' },
              { codigo: 'N2', texto: '3-6 ganglios' },
              { codigo: 'N3a', texto: '7-15 ganglios' },
              { codigo: 'N3b', texto: '16 o más ganglios' },
            ],
            pie: 'Por eso la linfadenectomía debe aportar 16 ganglios o más.',
          },
        ],
      },
      {
        titulo: 'Tratamiento',
        puntos: [
          '<b>Resección endoscópica</b> (mucosectomía o disección submucosa) en el cáncer precoz con bajo riesgo ganglionar: <b>Tis o T1a</b>, bien diferenciado, <b>menor de 2 cm</b> y <b>no ulcerado</b>.',
          'El tratamiento curativo estándar es la <b>gastrectomía con márgenes libres</b>: subtotal en los tumores distales y total en los proximales. Abierta o mínimamente invasiva, con iguales resultados oncológicos.',
          '<b>D1</b>: ganglios perigástricos. <b>D2</b>: además, los de la gástrica izquierda, hepática común, tronco celíaco y esplénica. Se busca examinar <b>16 o más ganglios</b>; la esplenectomía sistemática no está indicada.',
          'Desde <b>T2 o con ganglios</b>: <b>quimioterapia perioperatoria</b>, antes y después de operar. La clase muestra el ensayo MAGIC (ECF frente a cirugía sola); hoy el esquema más usado en Europa es <b>FLOT</b>.',
          'La clase muestra también la <b>quimiorradioterapia postoperatoria</b> (Macdonald, 2001), una opción si el paciente se operó sin tratamiento previo y tiene alto riesgo de recaída.',
          '<b>Irresecable o metastásico</b>: quimioterapia, mejor que el tratamiento de soporte. Obstrucción o hemorragia: endoscopia, radioterapia hemostática o cirugía paliativa. Si tras la neoadyuvancia es posible un R0, se opera.',
        ],
        dibujo: {
          tipo: 'comparar',
          columnas: ['', 'D1', 'D2'],
          filas: [
            ['Qué incluye', 'Ganglios perigástricos', 'D1 y ganglios del tronco celíaco'],
            ['Arterias', 'Ninguna adicional', 'Gástrica izquierda, hepática común, esplénica'],
            ['Bazo', 'Se conserva', 'Se conserva salvo invasión'],
          ],
          pie: 'Objetivo de ambas: examinar al menos 16 ganglios.',
        },
      },
      {
        titulo: 'Pronóstico y seguimiento',
        puntos: [
          'Lo que más pesa en el pronóstico es el <b>estadio</b>, sobre todo los ganglios y el peritoneo. Con metástasis (estadio IV) la supervivencia a 5 años ronda el 5 % según la tabla de la clase.',
          'Tras la resección se valora el residuo tumoral (<b>Hermanek</b>): <b>R0</b> sin tumor y márgenes microscópicos negativos; <b>R1</b> márgenes microscópicos positivos; <b>R2</b> tumor macroscópico. Solo el R0 permite supervivencia larga.',
          'El patólogo revisa los extremos <b>proximal y distal</b>, el <b>borde radial</b> y los ganglios.',
        ],
        dibujo: {
          tipo: 'escala',
          titulo: 'Residuo tumoral (Hermanek)',
          niveles: [
            { codigo: 'R0', texto: 'Sin tumor residual', detalle: 'Márgenes microscópicos negativos' },
            { codigo: 'R1', texto: 'Residuo microscópico', detalle: 'Margen positivo al microscopio' },
            { codigo: 'R2', texto: 'Residuo macroscópico', detalle: 'Queda tumor visible' },
          ],
          resaltar: 'R0',
          pie: 'Solo el R0 ofrece supervivencia a largo plazo.',
        },
      },
      {
        titulo: 'Para el examen',
        puntos: [
          'Paciente joven con estómago rígido y células en anillo de sello: tipo <b>difuso</b>. Si hay varios familiares jóvenes afectados, piensa en <b>CDH1</b> y consejo genético.',
          'Laparoscopia antes de operar un cT3 o N+: los implantes peritoneales no se ven en la TC. La <b>citología peritoneal positiva es M1</b>.',
          'Linfadenectomía con menos de 16 ganglios: insuficiente. Margen microscópico positivo sin tumor visible: <b>R1</b>.',
          'La tabla de estadios de la clase rotula igual (T1/2 N0) el estadio I y el IIA: es una errata. Estadifica con la AJCC 8.ª (pestaña TNM).',
          'Cardias: el tumor con centro entre 2 y 5 cm bajo la unión (<b>Siewert III</b>) se estadifica y trata como gástrico.',
        ],
        dibujo: {
          tipo: 'siewert',
          resaltar: 'III',
          pie: 'Siewert III: centro 2-5 cm bajo la unión; se trata como cáncer gástrico.',
        },
      },
    ],
    tarjetas: [
      { a: '¿Qué pasos tiene la cascada de Correa?', r: 'Gastritis por H. pylori, gastritis atrófica, metaplasia intestinal, displasia y carcinoma de tipo intestinal.' },
      { a: '¿Cuánto multiplica H. pylori el riesgo de cáncer gástrico, según la clase?', r: 'Por cuatro. Fue declarado carcinógeno en 1994.' },
      { a: '¿Qué gen causa el cáncer gástrico difuso hereditario?', r: 'CDH1, que codifica la E-cadherina, proteína de adhesión celular.' },
      { a: 'Lauren: ¿qué tipo tiene células en anillo de sello?', r: 'El difuso: más joven, con diseminación transmural y linfática; casi siempre esporádico.' },
      { a: '¿Qué es la linitis plástica?', r: 'Borrmann IV: infiltración difusa que deja el estómago rígido; típica del tipo difuso.' },
      { a: '¿Qué es el nódulo de la hermana María José?', r: 'Una metástasis umbilical: signo de enfermedad avanzada.' },
      { a: '¿Qué es un tumor de Krukenberg?', r: 'Una metástasis ovárica, clásicamente de un adenocarcinoma gástrico.' },
      { a: '¿Cuándo se indica la laparoscopia de estadificación?', r: 'En tumores cT3 o cN+ candidatos a cirugía, con citología del lavado peritoneal.' },
      { a: 'Criterios clásicos de resección endoscópica del cáncer gástrico', r: 'Tis o T1a, bien diferenciado, menor de 2 cm y no ulcerado.' },
      { a: '¿Qué añade la linfadenectomía D2 a la D1?', r: 'Los ganglios de la gástrica izquierda, hepática común, tronco celíaco y esplénica.' },
      { a: '¿Cuántos ganglios hay que examinar, como mínimo, en una gastrectomía?', r: 'Dieciséis.' },
      { a: '¿Se extirpan los pólipos fúndicos asociados a IBP?', r: 'No: son una hiperplasia benigna secundaria a los IBP.' },
    ],
    preguntas: [
      {
        id: 'ca-gastrico-1',
        enunciado: 'Varón de 58 años con dispepsia. Las biopsias del antro muestran gastritis crónica atrófica con metaplasia intestinal y presencia de Helicobacter pylori, sin displasia. ¿Qué afirmación es correcta?',
        opciones: [
          'Está en un escalón de la cascada de Correa: erradicar y vigilar',
          'La metaplasia intestinal es un hallazgo normal del antro adulto',
          'Es la vía del carcinoma difuso por pérdida de E-cadherina',
          'Indica una gastrectomía profiláctica por riesgo elevado',
        ],
        correcta: 0,
        explicacion: 'Atrofia y metaplasia son escalones de la cascada de Correa hacia el carcinoma intestinal: se erradica H. pylori y se vigila con endoscopia. La metaplasia no es normal: las células caliciformes no existen en la mucosa gástrica sana. La pérdida de E-cadherina es la vía del difuso, que no pasa por la cascada de Correa. La gastrectomía profiláctica se plantea en portadores de CDH1, no ante una metaplasia sin displasia.',
      },
      {
        id: 'ca-gastrico-2',
        enunciado: 'Mujer de 34 años con epigastralgia. La endoscopia muestra un estómago rígido, poco distensible, y la biopsia, células en anillo de sello. Su madre y un tío murieron de cáncer gástrico antes de los 45 años. ¿Qué gen sospechas?',
        opciones: ['CDH1 (E-cadherina)', 'APC', 'KIT', 'Genes reparadores del ADN (Lynch)'],
        correcta: 0,
        explicacion: 'Mujer joven, tipo difuso con linitis plástica y agregación familiar precoz: cáncer gástrico difuso hereditario por mutación de CDH1, que codifica la E-cadherina. APC causa la poliposis adenomatosa familiar, que aumenta el riesgo gástrico pero se asocia a pólipos y a cáncer colorrectal. KIT es el gen del GIST, un tumor mesenquimal sin anillos de sello. El síndrome de Lynch se asocia más al tipo intestinal, con inestabilidad de microsatélites.',
      },
      {
        id: 'ca-gastrico-3',
        enunciado: 'Varón de 63 años con adenocarcinoma de cuerpo gástrico. La ecoendoscopia lo clasifica como uT3 con adenopatías perigástricas y la TC no muestra metástasis. Se plantea tratamiento con intención curativa. ¿Qué prueba indicas antes de empezar?',
        opciones: [
          'Laparoscopia de estadificación con citología peritoneal',
          'Gastrectomía total con D2 sin más pruebas',
          'PET-TC como única prueba adicional',
          'Resección endoscópica para estadificar la T',
        ],
        correcta: 0,
        explicacion: 'En un cT3 o cN+ candidato a cirugía, la laparoscopia busca implantes peritoneales que la TC no ve, y una citología positiva ya es M1. Operar sin ella expone a una gastrectomía inútil si hay carcinomatosis. El PET-TC es selectivo y detecta mal la enfermedad peritoneal de bajo volumen. La resección endoscópica solo es diagnóstica y terapéutica en lesiones precoces (Tis, T1a), no en un T3.',
      },
      {
        id: 'ca-gastrico-4',
        enunciado: 'Varón de 70 años con un adenocarcinoma de antro de 1,5 cm, bien diferenciado, no ulcerado, limitado a la mucosa (T1a) en la ecoendoscopia y sin adenopatías. ¿Qué tratamiento indicas?',
        opciones: [
          'Resección endoscópica de la lesión',
          'Gastrectomía subtotal con linfadenectomía D2',
          'Quimioterapia perioperatoria y gastrectomía',
          'Erradicación de H. pylori y control endoscópico',
        ],
        correcta: 0,
        explicacion: 'Cumple los criterios de la clase para resección endoscópica: T1a, bien diferenciado, menor de 2 cm y no ulcerado; el riesgo ganglionar es mínimo. La gastrectomía con D2 sería el tratamiento si fuera T1b o no cumpliera algún criterio. La quimioterapia perioperatoria empieza en T2 o con ganglios. Erradicar H. pylori está indicado, pero no trata un cáncer ya formado.',
      },
      {
        id: 'ca-gastrico-5',
        enunciado: 'Tras una gastrectomía con D2 por adenocarcinoma, el patólogo informa 3 ganglios con metástasis de 22 examinados. ¿Qué categoría N corresponde según la AJCC 8.ª?',
        opciones: ['N1', 'N2', 'N3a', 'N3b'],
        correcta: 1,
        explicacion: 'En el estómago la N cuenta ganglios positivos: N1 es 1-2, N2 es 3-6, N3a es 7-15 y N3b es 16 o más. Con 3 positivos corresponde N2. N1 se queda corto por un ganglio. N3a y N3b exigen siete o dieciséis ganglios positivos. El total examinado, 22, no cambia la N, pero confirma que la linfadenectomía es suficiente (16 o más).',
      },
      {
        id: 'ca-gastrico-6',
        enunciado: 'Mujer de 60 años, en buen estado, con adenocarcinoma de antro cT3N1M0. La laparoscopia de estadificación y la citología peritoneal son negativas. ¿Cuál es la mejor estrategia?',
        opciones: [
          'Quimioterapia perioperatoria y gastrectomía subtotal con D2',
          'Gastrectomía subtotal con D1, sin tratamiento sistémico',
          'Quimiorradioterapia definitiva, sin cirugía',
          'Resección endoscópica seguida de quimioterapia',
        ],
        correcta: 0,
        explicacion: 'Un tumor localmente avanzado (T2 o más, o con ganglios) y resecable se trata con quimioterapia perioperatoria (el ensayo MAGIC de la clase; hoy, FLOT) y gastrectomía con D2. La cirugía sola con D1 deja ganglios sin resecar y renuncia al beneficio del tratamiento sistémico. La quimiorradioterapia definitiva no es un tratamiento curativo estándar del estómago. La resección endoscópica solo vale para lesiones precoces.',
      },
      {
        id: 'ca-gastrico-7',
        enunciado: 'El informe de una gastrectomía subtotal describe bordes proximal y distal libres y células tumorales en el borde radial al microscopio. El cirujano no dejó tumor visible. ¿Cómo se clasifica la resección?',
        opciones: [
          'R0, porque no quedó tumor visible',
          'R1, por margen microscópico positivo',
          'R2, porque el borde radial cuenta como macroscópico',
          'No se clasifica hasta conocer los ganglios',
        ],
        correcta: 1,
        explicacion: 'En la clasificación de Hermanek, R1 es un margen positivo al microscopio sin tumor macroscópico residual. No es R0, que exige que todos los márgenes, también el radial, sean negativos al microscopio. No es R2, que se reserva para el tumor que se ve o se palpa. El estado de los ganglios define la N, no la R, así que no impide clasificar el residuo.',
      },
    ],
    fuentes: [
      CLASE_GASTRICA,
      'Clase: 03. Pat Gástrica B.pdf (histología: células caliciformes y en anillo de sello)',
      AJCC,
      'Al-Batran SE et al. Lancet 2019;393:1948-57 (quimioterapia perioperatoria FLOT)',
    ],
  },

  /* ================================================================== */
  /* 4 · GIST                                                            */
  /* ================================================================== */
  {
    id: 'gist',
    bloque: 'estomago',
    titulo: 'GIST',
    subtitulo: 'Tumor del estroma gastrointestinal',
    tnm: 'gist',
    mapa: ['estomago', 'delgado'],
    esencial: [
      'Es el tumor mesenquimal más frecuente del tubo digestivo: nace de las células intersticiales de Cajal por una mutación activadora de KIT o, con menos frecuencia, de PDGFRA.',
      'Se confirma con inmunohistoquímica (CD117 y DOG1 positivos) y su riesgo de recaída se calcula con tamaño, mitosis y localización; a igualdad de datos, el gástrico es el de mejor pronóstico.',
      'Se trata con resección completa con márgenes libres, sin linfadenectomía y sin romperlo; el imatinib se usa como adyuvante en riesgo alto, como neoadyuvante en tumores difíciles y en la enfermedad metastásica.',
    ],
    secciones: [
      {
        titulo: 'Epidemiología y localización',
        puntos: [
          'Supone en torno al <b>3 % de los tumores gástricos</b> (clase). Aparece sobre todo por encima de los 50 años y afecta por igual a hombres y mujeres.',
          'Puede nacer en cualquier punto del tubo digestivo: el <b>estómago</b> es la localización más frecuente (40-60 %), seguido del <b>intestino delgado</b> (30 %). Colon, recto y esófago son mucho menos frecuentes.',
          'También puede aparecer fuera del tubo digestivo: epiplón, mesenterio o retroperitoneo.',
        ],
        dibujo: {
          tipo: 'mapa',
          resaltar: ['estomago', 'delgado'],
          pie: 'Localizaciones más frecuentes: estómago y, después, intestino delgado.',
        },
      },
      {
        titulo: 'Anatomía patológica',
        puntos: [
          'Deriva de las <b>células intersticiales de Cajal</b>, las células marcapasos que coordinan la motilidad del tubo digestivo.',
          'Tiene una <b>mutación activadora de un receptor tirosina cinasa</b>: <b>KIT</b> en la mayoría (75 % según la clase) y <b>PDGFRA</b> en una minoría (10 %). El resto no tiene ninguna de las dos.',
          'Al microscopio: <b>células fusiformes</b> (70 %), <b>epitelioides</b> (20 %) o mixtas (10 %).',
          'Diagnóstico por inmunohistoquímica: <b>CD117</b> (la propia proteína KIT) y <b>DOG1</b> positivos. El leiomioma, en cambio, es desmina positivo y KIT negativo.',
        ],
        dibujo: [
          {
            tipo: 'cascada',
            pasos: ['Mutación de KIT o PDGFRA', 'Receptor siempre activado', 'Proliferación sin control', 'GIST', 'Diana del imatinib'],
            pie: 'El receptor mutado funciona sin necesidad de su ligando; el imatinib lo bloquea.',
          },
          {
            tipo: 'comparar',
            columnas: ['', 'GIST', 'Leiomioma'],
            filas: [
              ['Origen', 'Células de Cajal', 'Músculo liso'],
              ['Marcadores', 'CD117 +, DOG1 +', 'Desmina +, KIT −'],
              ['Dónde predomina', 'Estómago', 'Esófago'],
              ['Comportamiento', 'Potencial maligno variable', 'Benigno'],
            ],
            pie: 'Dos tumores de células fusiformes con biología distinta.',
          },
        ],
      },
      {
        titulo: 'Clínica',
        puntos: [
          'Un <b>30 %</b> son <b>asintomáticos</b> y se descubren por casualidad en una endoscopia o una TC (clase).',
          'Cuando dan síntomas: <b>hemorragia digestiva</b> (anemia, melenas), dolor abdominal, dispepsia o masa palpable. Suelen crecer hacia fuera de la pared y alcanzar gran tamaño sin obstruir.',
          'Metastatizan en <b>hígado y peritoneo</b>. Los <b>ganglios linfáticos casi nunca</b> se afectan; por eso no se hace linfadenectomía.',
        ],
        dibujo: {
          tipo: 'mapa',
          resaltar: ['higado', 'peritoneo'],
          pie: 'Metástasis del GIST: hígado y peritoneo; casi nunca ganglios.',
        },
      },
      {
        titulo: 'Diagnóstico y estadificación',
        puntos: [
          'En la endoscopia se ve una <b>lesión submucosa</b> cubierta por mucosa normal, a veces con una úlcera central (umbilicación) que sangra.',
          'La <b>ecoendoscopia</b> muestra su dependencia de la muscular propia y permite la <b>punción guiada</b> para el diagnóstico. La <b>TC</b> mide el tumor y busca metástasis hepáticas y peritoneales.',
          'Evita la biopsia percutánea de un tumor resecable: puede romperlo y sembrar el peritoneo.',
          'T del GIST (AJCC 8.ª) por tamaño: <b>T1</b> hasta 2 cm, <b>T2</b> más de 2 a 5 cm, <b>T3</b> más de 5 a 10 cm y <b>T4</b> más de 10 cm. El estadio combina la T con el índice mitótico.',
        ],
        dibujo: {
          tipo: 'regla',
          titulo: 'T del GIST (AJCC 8.ª)',
          unidad: 'cm',
          cortes: [2, 5, 10],
          etiquetas: ['T1', 'T2', 'T3', 'T4'],
          pie: 'Los mismos cortes de tamaño que la tabla de riesgo.',
        },
      },
      {
        titulo: 'Riesgo de recaída',
        puntos: [
          'El riesgo se estima con <b>tres datos</b>: <b>tamaño</b>, <b>mitosis por 50 campos de gran aumento</b> (CGA) y <b>localización</b>. Con igual tamaño y mitosis, el gástrico tiene mejor pronóstico que el de intestino delgado.',
          'Tabla de la clase para el <b>GIST gástrico</b> (Miettinen y Lasota, 2006), con 5 mitosis o menos: hasta 2 cm sin riesgo; 2-5 cm muy bajo; 5-10 cm bajo; más de 10 cm moderado.',
          'Con más de 5 mitosis: 2-5 cm riesgo moderado; más de 5 cm, alto. La <b>rotura tumoral</b>, espontánea o en la cirugía, convierte el caso en alto riesgo.',
        ],
        dibujo: [
          {
            tipo: 'escala',
            titulo: 'GIST gástrico, 5 mitosis o menos por 50 CGA',
            niveles: [
              { codigo: '≤2 cm', texto: 'Sin riesgo' },
              { codigo: '2-5 cm', texto: 'Muy bajo' },
              { codigo: '5-10 cm', texto: 'Bajo' },
              { codigo: '>10 cm', texto: 'Moderado' },
            ],
            pie: 'Miettinen y Lasota (2006), tabla de la clase.',
          },
          {
            tipo: 'escala',
            titulo: 'GIST gástrico, más de 5 mitosis por 50 CGA',
            niveles: [
              { codigo: '2-5 cm', texto: 'Moderado' },
              { codigo: '5-10 cm', texto: 'Alto' },
              { codigo: '>10 cm', texto: 'Alto' },
            ],
            resaltar: '5-10 cm',
            pie: 'Las mitosis pesan tanto como el tamaño.',
          },
        ],
      },
      {
        titulo: 'Tratamiento',
        puntos: [
          'Tratamiento curativo: <b>resección completa con márgenes libres</b> (en el estómago, a menudo una resección en cuña), <b>sin linfadenectomía</b> reglada y con cuidado de <b>no romper</b> el tumor.',
          '<b>Imatinib</b> (Glivec®) inhibe de forma competitiva KIT y PDGFRA. Se usa como <b>adyuvante</b>, como <b>neoadyuvante</b> (reducir un tumor cuya resección sería mutilante o hacer resecable uno irresecable) y de forma mantenida en la <b>enfermedad metastásica</b>.',
          'Adyuvancia: en <b>riesgo alto</b>, imatinib durante <b>3 años</b>. La clase propone 1 año en riesgo intermedio; las guías europeas actuales lo consideran una zona gris que se decide caso a caso.',
          'La respuesta al imatinib depende de la mutación: la mutación <b>D842V de PDGFRA</b> es resistente.',
        ],
        dibujo: [
          {
            tipo: 'algoritmo',
            pasos: [
              { texto: 'Lesión submucosa', detalle: 'Endoscopia, ecoendoscopia y TC' },
              { texto: 'Punción por ecoendoscopia', detalle: 'CD117 y DOG1 positivos' },
              { texto: '¿Resecable sin mutilar?' },
            ],
            ramas: [
              { si: 'Sí', texto: 'Resección R0', detalle: 'Sin linfadenectomía; luego, riesgo' },
              { si: 'Resección mutilante', texto: 'Imatinib neoadyuvante', detalle: 'Reducir y después operar' },
              { si: 'Metastásico', texto: 'Imatinib mantenido' },
            ],
          },
          {
            tipo: 'escala',
            titulo: 'Imatinib adyuvante según el riesgo',
            niveles: [
              { codigo: 'Bajo', texto: 'No se indica' },
              { codigo: 'Intermedio', texto: 'Individualizar', detalle: 'La clase propone 1 año' },
              { codigo: 'Alto', texto: '3 años' },
            ],
            resaltar: 'Alto',
          },
        ],
      },
      {
        titulo: 'Para el examen',
        puntos: [
          'Lesión submucosa gástrica de células fusiformes con <b>CD117 positivo</b>: GIST. Se reseca con márgenes libres y <b>sin linfadenectomía</b>.',
          'Riesgo = tamaño + mitosis + localización. A igualdad de los dos primeros, el <b>gástrico</b> es el más favorable.',
          'No memorices el 14 % de mutaciones de SDH de la clase: según la literatura, el grupo deficiente en SDH es bastante menor.',
          'El imatinib es un inhibidor de tirosina cinasa oral dirigido a <b>KIT y PDGFRA</b>, no una quimioterapia clásica.',
        ],
      },
    ],
    tarjetas: [
      { a: '¿De qué células deriva el GIST?', r: 'De las células intersticiales de Cajal, marcapasos de la motilidad intestinal.' },
      { a: '¿Qué mutación define al GIST?', r: 'Activadora de KIT o, con menos frecuencia, de PDGFRA.' },
      { a: '¿Qué marcadores inmunohistoquímicos confirman un GIST?', r: 'CD117 (KIT) y DOG1 positivos.' },
      { a: '¿Cuál es la localización más frecuente del GIST?', r: 'El estómago; después, el intestino delgado.' },
      { a: '¿Dónde metastatiza el GIST?', r: 'En hígado y peritoneo; casi nunca en ganglios.' },
      { a: '¿Se hace linfadenectomía en el GIST?', r: 'No: basta la resección completa con márgenes libres.' },
      { a: '¿Qué tres datos definen el riesgo del GIST?', r: 'Tamaño, mitosis por 50 campos de gran aumento y localización.' },
      { a: 'GIST gástrico de 7 cm con más de 5 mitosis por 50 CGA', r: 'Riesgo alto.' },
      { a: '¿Cómo actúa el imatinib?', r: 'Inhibe de forma competitiva los receptores tirosina cinasa KIT y PDGFRA.' },
      { a: '¿Cuánto dura el imatinib adyuvante en el GIST de alto riesgo?', r: 'Tres años.' },
      { a: '¿Qué suceso quirúrgico eleva el riesgo del GIST a alto?', r: 'La rotura del tumor.' },
    ],
    preguntas: [
      {
        id: 'gist-1',
        enunciado: 'Varón de 61 años estudiado por anemia. La gastroscopia muestra una lesión submucosa de 4 cm en el cuerpo gástrico con una úlcera central; la punción por ecoendoscopia obtiene células fusiformes. ¿Qué perfil inmunohistoquímico confirma el diagnóstico más probable?',
        opciones: [
          'CD117 y DOG1 positivos',
          'Desmina positiva y CD117 negativo',
          'CD20 positivo en células linfoides',
          'Cromogranina y sinaptofisina positivas',
        ],
        correcta: 0,
        explicacion: 'Lesión submucosa gástrica de células fusiformes que sangra: GIST, confirmado por CD117 (KIT) y DOG1. Desmina positiva con KIT negativo es el perfil del leiomioma, más propio del esófago. CD20 marca linfocitos B, es decir, un linfoma, que no está formado por células fusiformes. Cromogranina y sinaptofisina definen un tumor neuroendocrino (carcinoide), de células redondas y pequeñas, no fusiformes.',
      },
      {
        id: 'gist-2',
        enunciado: 'GIST gástrico de 4 cm en la curvatura mayor, sin metástasis en la TC. ¿Qué cirugía indicas?',
        opciones: [
          'Resección con márgenes libres sin linfadenectomía',
          'Gastrectomía total con linfadenectomía D2',
          'Enucleación del tumor sin margen de pared',
          'Gastrectomía subtotal con D1 y omentectomía',
        ],
        correcta: 0,
        explicacion: 'El GIST casi nunca da metástasis ganglionares, así que basta una resección completa con márgenes libres (a menudo en cuña), sin romperlo. La gastrectomía total con D2 es el tratamiento del adenocarcinoma: aquí añade morbilidad sin beneficio. La enucleación sirve para el leiomioma, pero en un GIST deja margen insuficiente y arriesga la rotura. La D1 con omentectomía vuelve a tratarlo como un adenocarcinoma.',
      },
      {
        id: 'gist-3',
        enunciado: 'Se reseca sin rotura un GIST gástrico de 8 cm con 10 mitosis por 50 campos de gran aumento. Márgenes libres. ¿Qué riesgo tiene y qué haces después?',
        opciones: [
          'Riesgo alto: imatinib adyuvante durante 3 años',
          'Riesgo bajo: solo seguimiento con TC',
          'Riesgo moderado: imatinib durante 1 año',
          'Riesgo muy bajo: alta sin seguimiento',
        ],
        correcta: 0,
        explicacion: 'En la tabla gástrica de la clase, más de 5 cm con más de 5 mitosis es riesgo alto, y la adyuvancia estándar es imatinib 3 años. Riesgo bajo sería un tumor de 5-10 cm con 5 mitosis o menos. Moderado corresponde a 2-5 cm con muchas mitosis o a más de 10 cm con pocas; además, 1 año es la pauta que la clase propone para el intermedio. Muy bajo es 2-5 cm con pocas mitosis.',
      },
      {
        id: 'gist-4',
        enunciado: 'Dos pacientes tienen un GIST de 6 cm con 3 mitosis por 50 campos de gran aumento. En uno asienta en el estómago y en el otro en el yeyuno. ¿Qué afirmación es correcta?',
        opciones: [
          'El de yeyuno tiene más riesgo de recaída',
          'Ambos tienen el mismo riesgo de recaída',
          'El gástrico tiene más riesgo por su tamaño',
          'El riesgo depende solo de las mitosis',
        ],
        correcta: 0,
        explicacion: 'La localización es el tercer factor de riesgo: a igualdad de tamaño y mitosis, el GIST de intestino delgado recae más que el gástrico, que es el de mejor pronóstico. Por eso no tienen el mismo riesgo. El tamaño es idéntico en los dos, así que no puede explicar una diferencia a favor del estómago. Las mitosis importan mucho, pero el riesgo combina tres datos: tamaño, mitosis y localización.',
      },
      {
        id: 'gist-5',
        enunciado: 'GIST de 12 cm confirmado por punción, en la unión esofagogástrica. Extirparlo de entrada exigiría una gastrectomía total con resección del esófago distal. No hay metástasis. ¿Cuál es la mejor estrategia?',
        opciones: [
          'Imatinib neoadyuvante y cirugía tras la respuesta',
          'Esofagogastrectomía inmediata',
          'Radioterapia preoperatoria',
          'Quimioterapia con cisplatino y 5-fluorouracilo',
        ],
        correcta: 0,
        explicacion: 'La clase indica imatinib neoadyuvante cuando la resección conllevaría alta morbilidad: reduce el tumor y permite una cirugía menor después. Operar de entrada supone una cirugía mutilante que el tratamiento previo puede evitar. La radioterapia no tiene papel en el tratamiento estándar del GIST. La quimioterapia clásica, como cisplatino y 5-fluorouracilo, apenas es eficaz en el GIST, que depende de la vía de KIT y PDGFRA.',
      },
      {
        id: 'gist-6',
        enunciado: '¿Cuál es el mecanismo de acción del imatinib en el GIST?',
        opciones: [
          'Inhibe de forma competitiva KIT y PDGFRA',
          'Bloquea la síntesis de ADN como un antimetabolito',
          'Es un anticuerpo monoclonal frente a CD117',
          'Inhibe la angiogénesis bloqueando el VEGF',
        ],
        correcta: 0,
        explicacion: 'El imatinib es una molécula pequeña que compite en el receptor tirosina cinasa de KIT y PDGFRA y lo inactiva, cortando la señal de proliferación. No es un antimetabolito: no actúa sobre la síntesis de ADN como el 5-fluorouracilo. Tampoco es un anticuerpo; CD117 es un marcador diagnóstico, no la diana de un anticuerpo terapéutico. El bloqueo del VEGF es el mecanismo de fármacos como el bevacizumab.',
      },
    ],
    fuentes: [
      CLASE_GASTRICA,
      'Miettinen M, Lasota J. Semin Diagn Pathol 2006;23:70-83 (tabla de riesgo del GIST gástrico, en la clase)',
      AJCC,
      'Casali PG et al. Ann Oncol 2022;33:20-33 (guía ESMO-EURACAN-GENTURIS de GIST)',
    ],
  },

  /* ================================================================== */
  /* 5 · Linfoma gástrico                                                */
  /* ================================================================== */
  {
    id: 'linfoma-gastrico',
    bloque: 'estomago',
    titulo: 'Linfoma gástrico',
    subtitulo: 'Linfoma MALT y linfoma B difuso de células grandes',
    tnm: null,
    mapa: ['estomago'],
    esencial: [
      'El estómago es la localización más frecuente del linfoma digestivo; los dos tipos principales son el linfoma B difuso de células grandes y el linfoma MALT de bajo grado.',
      'El linfoma MALT nace del tejido linfoide que el estómago adquiere por la inflamación crónica de H. pylori, y en fases precoces suele responder solo con el tratamiento erradicador.',
      'Es un tumor de tratamiento médico (erradicación, quimioterapia o radioterapia); la cirugía se reserva sobre todo para las complicaciones: hemorragia, perforación u obstrucción.',
    ],
    secciones: [
      {
        titulo: 'Epidemiología',
        puntos: [
          'Supone en torno al <b>3 % de los tumores malignos del estómago</b> y el estómago es la localización más frecuente de linfoma en el tubo digestivo (clase).',
          'Pico de incidencia entre los <b>60 y 70 años</b>, con predominio masculino (2:1).',
          'Se habla de linfoma gástrico primario cuando el estómago es el lugar <b>exclusivo o predominante</b> de la enfermedad.',
          'Tipos según la clase: <b>linfoma B difuso de células grandes</b> (55 %) y <b>linfoma MALT</b> (40 %).',
        ],
        dibujo: {
          tipo: 'mapa',
          resaltar: ['estomago'],
          pie: 'La localización más frecuente de linfoma en el tubo digestivo.',
        },
      },
      {
        titulo: 'Anatomía patológica',
        puntos: [
          'El estómago normal apenas tiene tejido linfoide. La infección crónica por <b>H. pylori</b> lo hace aparecer: es el tejido linfoide asociado a mucosas, o <b>MALT</b>.',
          '<b>Isaacson y Wright</b> (1983) vieron que el linfoma B gástrico de bajo grado se parecía a ese tejido. La inflamación prolongada puede hacer progresar el MALT a un <b>linfoma de bajo grado</b>.',
          'El linfoma MALT se asocia a H. pylori en <b>prácticamente todos los casos</b> (clase). Erradicar la bacteria retira el estímulo que lo mantiene.',
          'El linfoma MALT puede transformarse en un linfoma <b>de alto grado</b>, de células grandes.',
        ],
        dibujo: [
          {
            tipo: 'cascada',
            pasos: ['Infección por H. pylori', 'Gastritis crónica', 'Tejido MALT adquirido', 'Linfoma MALT bajo grado', 'Linfoma de alto grado'],
            pie: 'En las fases iniciales, eliminar H. pylori puede frenar la secuencia.',
          },
          {
            tipo: 'comparar',
            columnas: ['', 'MALT', 'B difuso de células grandes'],
            filas: [
              ['Grado', 'Bajo (indolente)', 'Alto (agresivo)'],
              ['Frecuencia (clase)', '40 %', '55 %'],
              ['H. pylori', 'Casi siempre presente', 'Menos ligado'],
              ['Tratamiento inicial', 'Erradicar H. pylori', 'Quimioterapia (R-CHOP)'],
            ],
          },
        ],
      },
      {
        titulo: 'Clínica',
        puntos: [
          'Síntomas <b>inespecíficos</b>: dolor epigástrico y dispepsia, como una gastritis o una úlcera. Los <b>síntomas B</b> (fiebre, sudoración nocturna, pérdida de peso) son raros.',
          'Puede debutar con una complicación: <b>hemorragia</b>, <b>perforación</b> u <b>obstrucción</b>.',
        ],
      },
      {
        titulo: 'Diagnóstico y estadificación',
        puntos: [
          '<b>Endoscopia</b> con biopsias múltiples: a menudo parece una gastritis. La <b>ecoendoscopia</b> mide el engrosamiento de la pared y los ganglios perigástricos.',
          'Hay que buscar <b>H. pylori</b> en las biopsias y en la serología.',
          'Extensión: <b>TC toracoabdominopélvica</b> (adenopatías), <b>biopsia de médula ósea</b> y exploración de la <b>vía aérea alta</b>.',
          'Se estadifica con sistemas propios del linfoma digestivo (la clase cita varios, entre ellos el TNM); lo esencial es si está <b>confinado al estómago</b> o diseminado.',
        ],
        dibujo: {
          tipo: 'algoritmo',
          pasos: [
            { texto: 'Dispepsia o epigastralgia', detalle: 'Endoscopia: aspecto de gastritis' },
            { texto: 'Biopsias múltiples', detalle: 'Tipo de linfoma y H. pylori' },
            { texto: 'Estudio de extensión', detalle: 'Ecoendoscopia, TC, médula, vía aérea alta' },
          ],
          ramas: [
            { si: 'MALT localizado', texto: 'Erradicar H. pylori', detalle: 'Control endoscópico posterior' },
            { si: 'Alto grado', texto: 'Quimioterapia (R-CHOP)' },
            { si: 'Complicación', texto: 'Cirugía', detalle: 'Sangrado, perforación, obstrucción' },
          ],
          pie: 'MALT avanzado o sin respuesta: radioterapia o quimioterapia.',
        },
      },
      {
        titulo: 'Tratamiento',
        puntos: [
          '<b>MALT en estadio precoz</b>: tratamiento <b>erradicador de H. pylori</b>, con respuesta en más del 75 % de los casos (clase) y control endoscópico posterior.',
          '<b>MALT avanzado</b> o que no responde: radioterapia o quimioterapia; la cirugía solo en casos seleccionados.',
          '<b>Linfoma B difuso de células grandes</b>: quimioterapia. La clase cita <b>CHOP</b> (ciclofosfamida, doxorrubicina, vincristina y prednisona); hoy se le añade rituximab (<b>R-CHOP</b>).',
          '<b>Cirugía</b>: complicaciones (obstrucción, hemorragia, perforación). La clase la menciona también en la enfermedad localizada y en el fallo de la quimioterapia; hoy esas indicaciones son excepcionales.',
        ],
        dibujo: {
          tipo: 'escala',
          titulo: 'Qué tratamiento, en qué situación',
          niveles: [
            { codigo: '1', texto: 'Erradicar H. pylori', detalle: 'MALT precoz' },
            { codigo: '2', texto: 'Radioterapia o quimioterapia', detalle: 'MALT avanzado o sin respuesta' },
            { codigo: '3', texto: 'R-CHOP', detalle: 'Linfoma B difuso de células grandes' },
            { codigo: '4', texto: 'Cirugía', detalle: 'Complicaciones' },
          ],
        },
      },
      {
        titulo: 'Pronóstico y seguimiento',
        puntos: [
          'El MALT precoz tiene muy buen pronóstico: supervivencia a 5 años del 95 % en el estadio IE y del 75 % en el IIE (clase).',
          'Tras erradicar se repite la endoscopia con biopsias para comprobar que la bacteria ha desaparecido y valorar la respuesta del linfoma.',
        ],
      },
      {
        titulo: 'Para el examen',
        puntos: [
          'Linfoma MALT gástrico con H. pylori: <b>erradicar primero</b>, no operar.',
          'No confundas: el <b>linfoma</b> gástrico se trata con medicina; el <b>adenocarcinoma</b>, con cirugía. La cirugía del linfoma es para las complicaciones.',
          'En el estudio de extensión del linfoma gástrico no olvides la <b>médula ósea</b> y la <b>vía aérea alta</b>.',
        ],
      },
    ],
    tarjetas: [
      { a: '¿Cuál es la localización más frecuente del linfoma digestivo?', r: 'El estómago.' },
      { a: '¿Tipo más frecuente de linfoma gástrico según la clase?', r: 'Linfoma B difuso de células grandes (55 %), seguido del MALT (40 %).' },
      { a: '¿Con qué infección se asocia el linfoma MALT gástrico?', r: 'Con Helicobacter pylori, prácticamente en todos los casos.' },
      { a: '¿Primer tratamiento del linfoma MALT gástrico precoz?', r: 'La erradicación de H. pylori, con control endoscópico posterior.' },
      { a: '¿Qué proporción de MALT precoces responde a la erradicación, según la clase?', r: 'Más del 75 %.' },
      { a: '¿Quimioterapia del linfoma B difuso de células grandes gástrico?', r: 'R-CHOP. La clase cita CHOP: ciclofosfamida, doxorrubicina, vincristina y prednisona.' },
      { a: '¿Cuándo se opera un linfoma gástrico?', r: 'Ante complicaciones: obstrucción, hemorragia o perforación.' },
      { a: '¿Qué pruebas de extensión son propias del linfoma gástrico?', r: 'TC, biopsia de médula ósea y exploración de la vía aérea alta.' },
      { a: '¿Son frecuentes los síntomas B en el linfoma gástrico?', r: 'No; predominan el dolor epigástrico y la dispepsia.' },
    ],
    preguntas: [
      {
        id: 'linfoma-gastrico-1',
        enunciado: 'Mujer de 65 años con epigastralgia. Las biopsias gástricas muestran un linfoma MALT de bajo grado con Helicobacter pylori. El estudio de extensión confirma enfermedad limitada al estómago. ¿Qué tratamiento indicas primero?',
        opciones: [
          'Erradicación de H. pylori y control endoscópico',
          'Gastrectomía total con linfadenectomía D2',
          'Quimioterapia con R-CHOP',
          'Radioterapia sobre el estómago',
        ],
        correcta: 0,
        explicacion: 'En el MALT precoz con H. pylori, erradicar la bacteria retira el estímulo del tumor y logra respuesta en más del 75 % de los casos según la clase. La gastrectomía con D2 es el tratamiento del adenocarcinoma y aquí sería una mutilación innecesaria. R-CHOP es para el linfoma de alto grado. La radioterapia se reserva para el MALT avanzado o el que no responde a la erradicación.',
      },
      {
        id: 'linfoma-gastrico-2',
        enunciado: 'En un linfoma gástrico recién diagnosticado, ¿qué exploración forma parte específica de su estudio de extensión?',
        opciones: [
          'Biopsia de médula ósea',
          'Laparoscopia con citología peritoneal',
          'Colonoscopia con cromoendoscopia',
          'Determinación de CEA y CA 19-9',
        ],
        correcta: 0,
        explicacion: 'El linfoma es una enfermedad del sistema linfoide, así que su extensión incluye médula ósea, adenopatías por TC y vía aérea alta. La laparoscopia con citología es propia del adenocarcinoma gástrico, para buscar implantes peritoneales. La colonoscopia no forma parte del estudio de extensión estándar del linfoma gástrico. CEA y CA 19-9 son marcadores de adenocarcinomas digestivos, no de linfomas.',
      },
      {
        id: 'linfoma-gastrico-3',
        enunciado: 'Varón de 68 años con un linfoma B difuso de células grandes limitado al estómago, sin hemorragia, perforación ni obstrucción. ¿Qué tratamiento es el indicado?',
        opciones: [
          'Quimioterapia tipo R-CHOP',
          'Gastrectomía total con linfadenectomía D2',
          'Solo erradicación de H. pylori',
          'Imatinib por vía oral',
        ],
        correcta: 0,
        explicacion: 'El linfoma de alto grado se trata con quimioterapia: la clase cita CHOP y hoy se añade rituximab. La gastrectomía se reserva para las complicaciones; la clase la menciona en la enfermedad localizada, pero hoy esa indicación es excepcional. La erradicación sola es el tratamiento del MALT precoz, no de un linfoma agresivo. El imatinib actúa sobre KIT y PDGFRA: es el fármaco del GIST.',
      },
      {
        id: 'linfoma-gastrico-4',
        enunciado: 'Paciente en quimioterapia por un linfoma gástrico que presenta dolor abdominal brusco, abdomen en tabla y neumoperitoneo en la radiografía. ¿Qué haces?',
        opciones: [
          'Cirugía urgente',
          'Continuar la quimioterapia y observar',
          'Tratamiento conservador con sonda y antibióticos',
          'Tratamiento erradicador de H. pylori',
        ],
        correcta: 0,
        explicacion: 'La perforación es una complicación del linfoma gástrico, a veces precipitada por la respuesta a la quimioterapia, y es indicación de cirugía urgente. Seguir con la quimioterapia ignora una peritonitis. El tratamiento conservador puede valorarse en úlceras pépticas perforadas y selladas, no ante un abdomen en tabla en un paciente inmunodeprimido. La erradicación no tiene nada que hacer en una urgencia quirúrgica.',
      },
      {
        id: 'linfoma-gastrico-5',
        enunciado: '¿Por qué la erradicación de Helicobacter pylori puede hacer desaparecer un linfoma MALT gástrico precoz?',
        opciones: [
          'Porque el linfoma depende del estímulo crónico de la bacteria',
          'Porque los antibióticos son tóxicos para los linfocitos B',
          'Porque H. pylori produce mutaciones de KIT',
          'Porque reduce la secreción ácida que nutre al tumor',
        ],
        correcta: 0,
        explicacion: 'H. pylori induce el tejido MALT y su estímulo antigénico mantiene la proliferación de los linfocitos B; al quitarlo, el linfoma precoz retrocede. Los antibióticos de la pauta erradicadora no son citotóxicos para los linfocitos. Las mutaciones de KIT son propias del GIST, no del linfoma. El inhibidor de la bomba de protones forma parte de la pauta, pero el ácido no alimenta al linfoma: lo que cuenta es eliminar la bacteria.',
      },
    ],
    fuentes: [CLASE_GASTRICA],
  },

  /* ================================================================== */
  /* 6 · Tumor carcinoide gástrico                                       */
  /* ================================================================== */
  {
    id: 'carcinoide-gastrico',
    bloque: 'estomago',
    titulo: 'Tumor carcinoide gástrico',
    subtitulo: 'Tumor neuroendocrino de células ECL: tipos I, II y III',
    tnm: null,
    mapa: ['estomago'],
    esencial: [
      'Son tumores neuroendocrinos raros (menos del 1 % de los tumores gástricos) que nacen de las células enterocromafines, sobre todo las ECL, y casi siempre se descubren por casualidad en una endoscopia.',
      'Hay tres tipos: el I (gastritis atrófica, el más benigno), el II (Zollinger-Ellison y MEN 1) y el III (esporádico, único, con gastrina normal y metástasis en la mitad de los casos).',
      'Los tipos I y II nacen de la hipergastrinemia, que estimula a las células ECL; el III no depende de la gastrina, es el más agresivo y se trata como un cáncer.',
    ],
    secciones: [
      {
        titulo: 'Epidemiología y tipos',
        puntos: [
          'Suponen <b>menos del 1 %</b> de los tumores gástricos (clase). Tienen diferenciación neuroendocrina y nacen de las células enterocromafines (CEC) y <b>enterocromafín-like</b> (ECL), que producen histamina.',
          '<b>Tipo I</b>: asociado a <b>gastritis crónica atrófica</b> con hipoclorhidria; tumores pequeños y a menudo múltiples; curso benigno, supervivencia a 5 años de más del 90 %.',
          '<b>Tipo II</b>: asociado a <b>síndrome de Zollinger-Ellison y MEN 1</b>; hiperclorhidria e hipergastrinemia; tumores multifocales; supervivencia a 5 años del 70-90 %.',
          '<b>Tipo III</b>: <b>esporádico</b>, único, con pH y gastrina normales; la mitad son metastásicos y la supervivencia a 5 años cae al 35 % (clase).',
        ],
        dibujo: {
          tipo: 'comparar',
          columnas: ['', 'Tipo I', 'Tipo II', 'Tipo III'],
          filas: [
            ['Asociación', 'Gastritis atrófica', 'Zollinger-Ellison, MEN 1', 'Ninguna (esporádico)'],
            ['Ácido', 'Hipoclorhidria', 'Hiperclorhidria', 'Normal'],
            ['Gastrina', 'Alta', 'Alta', 'Normal'],
            ['Número', 'Pequeños, múltiples', 'Multifocales', 'Único'],
            ['Supervivencia a 5 años', 'Más del 90 %', '70-90 %', '35 %'],
          ],
          pie: 'Los tres tipos de la clase: cuanto menos depende de la gastrina, peor pronóstico.',
        },
      },
      {
        titulo: 'Anatomía patológica',
        puntos: [
          'La <b>gastrina</b> estimula el crecimiento de las células ECL. En la gastritis atrófica la falta de ácido dispara la gastrina (tipo I); en el Zollinger-Ellison la fabrica un gastrinoma (tipo II).',
          'Primero aparece una <b>hiperplasia de células enteroendocrinas</b>, frecuente en la hipergastrinemia, y sobre ella el tumor.',
          'El tipo III no depende de la gastrina: es un tumor autónomo y más agresivo.',
          'El grado se mide con el índice de proliferación <b>Ki-67</b> (clasificación de la OMS): G1, G2 y G3, de menor a mayor agresividad.',
        ],
        dibujo: [
          {
            tipo: 'cascada',
            pasos: ['Gastritis atrófica', 'Hipoclorhidria', 'Hipergastrinemia', 'Hiperplasia de células ECL', 'Carcinoide tipo I'],
            pie: 'Tipo I: sin el freno del ácido, la gastrina estimula sin parar a las células ECL.',
          },
          {
            tipo: 'escala',
            titulo: 'Grado OMS (Ki-67)',
            niveles: [
              { codigo: 'G1', texto: 'Ki-67 menor del 3 %' },
              { codigo: 'G2', texto: 'Ki-67 del 3 al 20 %' },
              { codigo: 'G3', texto: 'Ki-67 mayor del 20 %' },
            ],
            pie: 'A más proliferación, peor pronóstico.',
          },
        ],
      },
      {
        titulo: 'Clínica',
        puntos: [
          'La mayoría son <b>asintomáticos</b> y se descubren en una endoscopia. A veces dan dolor, sangrado, vómitos o diarrea.',
          'El <b>síndrome carcinoide</b> (rubor, diarrea, broncoespasmo) es <b>raro</b> en los carcinoides gástricos.',
        ],
      },
      {
        titulo: 'Diagnóstico',
        puntos: [
          'Endoscopia con biopsias del tumor y de la mucosa de alrededor, para ver si hay gastritis atrófica.',
          'La <b>gastrina sérica</b> y el <b>pH gástrico</b> separan los tipos: gastrina alta con poco ácido (I), gastrina alta con mucho ácido (II), ambos normales (III).',
          'En el tipo II hay que buscar el <b>gastrinoma</b> y una MEN 1; en el III, metástasis ganglionares y hepáticas con TC.',
        ],
        dibujo: {
          tipo: 'algoritmo',
          pasos: [
            { texto: 'Pólipo o nódulo en endoscopia', detalle: 'Biopsia: tumor neuroendocrino' },
            { texto: 'Gastrina sérica y pH gástrico', detalle: 'Y biopsia de la mucosa vecina' },
          ],
          ramas: [
            { si: 'Gastrina ↑, ácido ↓', texto: 'Tipo I: gastritis atrófica' },
            { si: 'Gastrina ↑, ácido ↑', texto: 'Tipo II: Zollinger-Ellison' },
            { si: 'Gastrina y pH normales', texto: 'Tipo III: esporádico' },
          ],
        },
      },
      {
        titulo: 'Tratamiento',
        puntos: [
          'Principio general de la clase: <b>resección completa</b> del tumor.',
          'En los tipos I y II, pequeños y de curso favorable, suele bastar la <b>resección endoscópica</b> con vigilancia; en el II hay que tratar además el gastrinoma.',
          'El tipo III se trata como un adenocarcinoma: <b>gastrectomía con linfadenectomía</b>.',
          'Recurrentes o metastásicos: <b>análogos de la somatostatina</b>, que frenan el crecimiento tumoral y controlan el síndrome carcinoide; valorar resección o citorreducción.',
        ],
        dibujo: {
          tipo: 'escala',
          titulo: 'Agresividad y tratamiento por tipo',
          niveles: [
            { codigo: 'I', texto: 'Curso benigno', detalle: 'Resección endoscópica y vigilancia' },
            { codigo: 'II', texto: 'Intermedio', detalle: 'Resecar y tratar el gastrinoma' },
            { codigo: 'III', texto: 'Agresivo', detalle: 'Gastrectomía con linfadenectomía' },
          ],
          resaltar: 'III',
        },
      },
      {
        titulo: 'Para el examen',
        puntos: [
          'Tumor único con gastrina y pH normales: <b>tipo III</b>, el de peor pronóstico.',
          'Anemia perniciosa o gastritis atrófica con pequeños nódulos neuroendocrinos: <b>tipo I</b>, el más benigno.',
          'Zollinger-Ellison o MEN 1 con tumores múltiples e hiperclorhidria: <b>tipo II</b>.',
        ],
      },
    ],
    tarjetas: [
      { a: '¿De qué células nacen los carcinoides gástricos?', r: 'De las células enterocromafines, sobre todo las ECL, que producen histamina.' },
      { a: 'Carcinoide gástrico tipo I: ¿con qué se asocia?', r: 'Con gastritis crónica atrófica, hipoclorhidria e hipergastrinemia.' },
      { a: 'Carcinoide gástrico tipo II: ¿con qué se asocia?', r: 'Con síndrome de Zollinger-Ellison y MEN 1, con hiperclorhidria.' },
      { a: 'Carcinoide gástrico tipo III: rasgos clave', r: 'Esporádico, único, gastrina y pH normales; metastásico en la mitad de los casos.' },
      { a: '¿Qué tipo de carcinoide gástrico tiene peor pronóstico?', r: 'El tipo III: supervivencia a 5 años en torno al 35 % según la clase.' },
      { a: '¿Es frecuente el síndrome carcinoide en los carcinoides gástricos?', r: 'No, es raro.' },
      { a: '¿Tratamiento del carcinoide gástrico recurrente o metastásico?', r: 'Análogos de la somatostatina; valorar resección o citorreducción.' },
      { a: '¿Qué hormona estimula el crecimiento de las células ECL?', r: 'La gastrina.' },
    ],
    preguntas: [
      {
        id: 'carcinoide-gastrico-1',
        enunciado: 'Varón de 60 años con un tumor neuroendocrino gástrico único de 2,5 cm. La gastrina sérica y el pH gástrico son normales y la mucosa vecina no tiene atrofia. ¿De qué tipo se trata y cómo lo tratas?',
        opciones: [
          'Tipo III; gastrectomía con linfadenectomía',
          'Tipo I; resección endoscópica y vigilancia',
          'Tipo II; buscar y tratar el gastrinoma',
          'Tipo I; análogos de la somatostatina sin cirugía',
        ],
        correcta: 0,
        explicacion: 'Tumor único, esporádico, con gastrina y pH normales: tipo III, metastásico en la mitad de los casos, que se trata como un adenocarcinoma. El tipo I exige gastritis atrófica, poco ácido y gastrina alta, y suele dar tumores pequeños y múltiples. El tipo II se asocia a Zollinger-Ellison, con gastrina alta e hiperclorhidria. Los análogos de la somatostatina se reservan para la enfermedad recurrente o metastásica.',
      },
      {
        id: 'carcinoide-gastrico-2',
        enunciado: 'Mujer de 66 años con anemia perniciosa. En la endoscopia se ven varios nódulos de 4-6 mm en el cuerpo gástrico; la biopsia muestra un tumor neuroendocrino bien diferenciado y la gastrina está muy elevada. ¿Qué tipo es?',
        opciones: ['Tipo I', 'Tipo II', 'Tipo III', 'Adenocarcinoma difuso'],
        correcta: 0,
        explicacion: 'La anemia perniciosa produce gastritis atrófica y aclorhidria; sin ácido, la gastrina sube y estimula a las células ECL: carcinoide tipo I, pequeño, múltiple y de curso benigno. El tipo II también tiene gastrina alta, pero con hiperclorhidria por Zollinger-Ellison. El tipo III es único y con gastrina normal. Un adenocarcinoma difuso tendría células en anillo de sello, no un tumor neuroendocrino bien diferenciado.',
      },
      {
        id: 'carcinoide-gastrico-3',
        enunciado: 'Varón de 42 años con hiperparatiroidismo y úlceras duodenales múltiples resistentes al tratamiento. Tiene la gastrina muy elevada con hipersecreción ácida, y la endoscopia muestra varios nódulos neuroendocrinos gástricos. ¿Qué tipo de carcinoide gástrico es?',
        opciones: [
          'Tipo II, asociado a MEN 1',
          'Tipo I, por gastritis atrófica',
          'Tipo III, esporádico',
          'Linfoma MALT gástrico',
        ],
        correcta: 0,
        explicacion: 'Hiperparatiroidismo, úlceras múltiples resistentes e hipergastrinemia con mucho ácido apuntan a un gastrinoma en el contexto de una MEN 1: carcinoide tipo II, multifocal. El tipo I también tiene gastrina alta, pero con poco ácido por la atrofia, y no daría úlceras por hipersecreción. El tipo III es único y con gastrina normal. El linfoma MALT no es un tumor neuroendocrino ni explica la hipergastrinemia.',
      },
      {
        id: 'carcinoide-gastrico-4',
        enunciado: '¿Por qué aparecen tumores carcinoides en la gastritis crónica atrófica?',
        opciones: [
          'La hipoclorhidria eleva la gastrina, que estimula a las células ECL',
          'El exceso de ácido lesiona las células ECL y estas se regeneran',
          'H. pylori provoca mutaciones de KIT en las células ECL',
          'La atrofia libera somatostatina, que estimula a las células ECL',
        ],
        correcta: 0,
        explicacion: 'El ácido frena la liberación de gastrina; en la atrofia falta ese freno, la gastrina sube y estimula sin pausa a las células ECL, que pasan por hiperplasia antes del tumor. En la atrofia no hay exceso de ácido, sino déficit. Las mutaciones de KIT son el mecanismo del GIST. La somatostatina inhibe, no estimula, a las células neuroendocrinas: por eso sus análogos se usan como tratamiento.',
      },
      {
        id: 'carcinoide-gastrico-5',
        enunciado: 'Paciente con un carcinoide gástrico con metástasis hepáticas múltiples, irresecables, que presenta episodios de rubor facial y diarrea. ¿Qué tratamiento indicas?',
        opciones: [
          'Análogos de la somatostatina',
          'Erradicación de H. pylori',
          'Imatinib por vía oral',
          'Gastrectomía total urgente',
        ],
        correcta: 0,
        explicacion: 'En el carcinoide recurrente o metastásico, la clase indica análogos de la somatostatina: frenan el crecimiento tumoral y controlan el síndrome carcinoide. La erradicación de H. pylori es el tratamiento del linfoma MALT precoz. El imatinib actúa sobre KIT y PDGFRA: es el fármaco del GIST. Una gastrectomía urgente no trata metástasis hepáticas irresecables ni los síntomas hormonales; la citorreducción se valora de forma programada.',
      },
    ],
    fuentes: [
      CLASE_GASTRICA,
      'Clase: 03. Pat Gástrica B.pdf (hiperplasia de células enteroendocrinas en la hipergastrinemia)',
      'Clasificación OMS de los tumores digestivos, 5.ª ed. (2019): grado por Ki-67',
    ],
  },
]
