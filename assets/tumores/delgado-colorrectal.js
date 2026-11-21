// Fichas de tumores: intestino delgado, colon, recto y ano.
// Fuente principal: clases de Patología Quirúrgica I (temas 25, 26, 28 y 29).
// Esquema: docs/ESQUEMA-TUMORES.md

export const TUMORES_DELGADO_COLORRECTAL = [
  /* ================================================================== */
  /* 1. Tumores del intestino delgado                                     */
  /* ================================================================== */
  {
    id: 'tumores-delgado',
    bloque: 'delgado',
    titulo: 'Tumores del intestino delgado',
    subtitulo: 'Adenocarcinoma, GIST, linfoma y lesiones benignas',
    tnm: 'delgado',
    mapa: ['duodeno', 'delgado'],
    esencial: [
      'Son raros (en torno al 2 % de los tumores digestivos) y dan clínica vaga: suboclusión, sangrado o anemia. Por eso solo la mitad se diagnostican antes de operar.',
      'Los cuatro malignos: adenocarcinoma (40 %, proximal), neuroendocrino (20 %, distal), GIST (20 %) y linfoma (20 %, íleon).',
      'Adenocarcinoma: resección con al menos 8 ganglios. GIST: resección R0 sin romper la cápsula y sin linfadenectomía. Linfoma: quimioterapia.',
    ],
    secciones: [
      {
        titulo: 'Epidemiología y factores de riesgo',
        puntos: [
          'Los tumores del intestino delgado son <b>raros</b>: en torno al 2 % de las neoplasias del tubo digestivo, con incidencia máxima a los 55-60 años y sin diferencias entre sexos.',
          'Benignos: <b>adenomas</b> (premalignos, siguen la secuencia adenoma-carcinoma), <b>lipomas</b>, <b>hamartomas</b> (Peutz-Jeghers) y <b>hemangiomas</b>.',
          'Malignos: <b>adenocarcinoma</b> 40 % (más en intestino proximal), <b>neuroendocrinos</b> 20 % (más distales), <b>GIST</b> 20 % y <b>linfomas</b> 20 % (más en íleon).',
          'Enfermedades que aumentan el riesgo de adenocarcinoma: <b>enfermedad de Crohn</b>, <b>celiaquía</b>, Peutz-Jeghers, <b>PAF</b> (duodeno y periampular), poliposis juvenil y <b>síndrome de Lynch</b>.',
          'Factores ambientales que cita la clase, aunque no están bien establecidos: tabaco, alcohol, carne roja o procesada, dieta pobre en fibra, bebidas azucaradas, úlcera péptica, fibrosis quística y derivación biliar.',
        ],
        dibujo: {
          tipo: 'comparar',
          columnas: ['', 'Frecuencia', 'Dónde predomina'],
          filas: [
            ['Adenocarcinoma', '40 %', 'Proximal (duodeno)'],
            ['Neuroendocrino', '20 %', 'Distal (íleon)'],
            ['GIST', '20 %', 'Yeyuno e íleon'],
            ['Linfoma', '20 %', 'Íleon (placas de Peyer)'],
          ],
          pie: 'Reparto de los tumores malignos del delgado según la clase',
        },
      },
      {
        titulo: 'Anatomía patológica',
        puntos: [
          'El <b>adenocarcinoma</b> nace de la mucosa, a menudo sobre un adenoma previo, y se disemina por vía linfática a los ganglios del mesenterio.',
          'El <b>GIST</b> deriva de las <b>células intersticiales de Cajal</b> (el marcapasos intestinal), nace en la muscular propia y suele crecer hacia fuera de la luz (extraluminal).',
          'El GIST se reconoce por <b>CD117</b> (KIT) en la inmunohistoquímica: la mayoría tienen mutación de <i>KIT</i>, unos pocos de <i>PDGFRA</i> y un 10-15 % ninguna (<i>wild type</i>).',
          'El GIST se extiende por invasión local, por <b>vía hematógena</b> (sobre todo al hígado) y al peritoneo; la diseminación linfática es <b>rara</b>.',
          'El <b>linfoma</b> predomina en el <b>íleon</b>, donde hay más tejido linfoide. Es más frecuente en celíacos e inmunodeprimidos, se diagnostica grande (más de 5 cm) e infiltra la pared de forma difusa.',
        ],
        dibujo: {
          tipo: 'comparar',
          columnas: ['', 'Adenocarcinoma', 'GIST', 'Linfoma'],
          filas: [
            ['Origen', 'Mucosa', 'Células de Cajal', 'Tejido linfoide'],
            ['Dónde', 'Proximal', 'Yeyuno e íleon', 'Íleon'],
            ['Ganglios', 'Linfadenectomía', 'No se vacían', '—'],
            ['Tratamiento', 'Cirugía', 'Cirugía ± imatinib', 'Quimioterapia'],
          ],
          pie: 'Tres tumores, tres orígenes y tres tratamientos distintos',
        },
      },
      {
        titulo: 'Clínica',
        puntos: [
          'Los síntomas son <b>vagos e inespecíficos</b>: dispepsia, anorexia, diarrea a veces con moco, dolor cólico, pérdida de peso o una masa abdominal.',
          'Lo típico es la <b>suboclusión intestinal</b> de repetición, por estenosis tumoral o por <b>invaginación</b> (intususcepción): un pólipo hace de cabeza y arrastra el asa dentro de la siguiente.',
          'También sangran: en general como <b>hematoquecia</b> o como anemia ferropénica sin causa en la gastroscopia ni en la colonoscopia.',
          'El linfoma intestinal puede <b>perforarse</b> (la clase lo cifra en el 25 %), a veces al iniciar la quimioterapia; la fiebre es poco habitual.',
        ],
        dibujo: {
          tipo: 'cascada',
          pasos: ['Pólipo o tumor en la luz', 'El peristaltismo tira', 'Invaginación del asa', 'Suboclusión u obstrucción'],
          pie: 'En el adulto, una invaginación casi siempre esconde una lesión que hace de cabeza',
        },
      },
      {
        titulo: 'Diagnóstico y estadificación',
        puntos: [
          'Solo se diagnostican <b>antes de la cirugía en la mitad</b> de los casos: la clínica inespecífica retrasa el diagnóstico.',
          'Endoscopia: gastroscopia para el duodeno, ileoscopia progresando desde la colonoscopia y <b>cápsula endoscópica</b> para el resto del delgado, que no alcanzan los endoscopios convencionales.',
          'Imagen: <b>TC abdominopélvica</b> (en la obstrucción, asas dilatadas antes del tumor y colapsadas después), tránsito intestinal y, las más sensibles y específicas, <b>entero-TC</b> y <b>entero-RM</b>.',
          'El adenocarcinoma tiene su propio TNM (AJCC 8.ª): la T por profundidad en la pared, y la N distinta de la del colon: <b>N1 = 1-2 ganglios, N2 = 3 o más</b>.',
        ],
        dibujo: [
          {
            tipo: 'algoritmo',
            pasos: [
              { texto: 'Anemia, sangrado o suboclusión' },
              { texto: 'Gastroscopia y colonoscopia', detalle: 'Descartan origen alto y colónico' },
              { texto: 'Entero-TC o entero-RM', detalle: 'Primero si hay clínica obstructiva' },
              { texto: 'Cápsula endoscópica', detalle: 'Explora la mucosa; no si hay estenosis' },
            ],
            pie: 'Estudio de un sangrado o una suboclusión de probable origen en el delgado',
          },
          {
            tipo: 'escala',
            titulo: 'T del adenocarcinoma de delgado',
            niveles: [
              { codigo: 'T1a', texto: 'Lámina propia' },
              { codigo: 'T1b', texto: 'Submucosa' },
              { codigo: 'T2', texto: 'Muscular propia' },
              { codigo: 'T3', texto: 'Subserosa, sin perforar la serosa' },
              { codigo: 'T4', texto: 'Perfora la serosa o invade órganos' },
            ],
            pie: 'AJCC 8.ª ed. N1: 1-2 ganglios; N2: 3 o más',
          },
        ],
      },
      {
        titulo: 'Tratamiento',
        puntos: [
          'Endoscopia: lesiones duodenales y <b>vigilancia y resección de adenomas</b> (premalignos), con especial vigilancia en la PAF.',
          'Cirugía: lesiones malignas y lesiones de yeyuno o íleon, fuera del alcance del endoscopio.',
          'Adenocarcinoma: <b>resección completa con sus ganglios locorregionales</b> (al menos 8). Duodeno: duodenopancreatectomía cefálica. Yeyuno: resección segmentaria con su área de mesenterio. Íleon terminal: <b>hemicolectomía derecha</b> ligando los vasos ileocólicos en su origen.',
          '<b>GIST</b>: resección R0 <b>sin romper la cápsula</b> y sin linfadenectomía. Después, nada si el riesgo es bajo e <b>imatinib</b> adyuvante si es intermedio o alto, según la clase.',
          'El riesgo del GIST depende del <b>tamaño</b> y del <b>índice mitótico</b> (la clase añade la invasión submucosa); las escalas actuales suman la <b>localización</b>, y a igualdad de tamaño el de delgado es peor que el gástrico.',
          '<b>Linfoma</b>: el tratamiento es la <b>quimioterapia</b>; la cirugía se reserva para las complicaciones digestivas (obstrucción, hemorragia, perforación).',
        ],
        dibujo: [
          {
            tipo: 'algoritmo',
            pasos: [
              { texto: 'Adenocarcinoma de delgado', detalle: 'TC de extensión sin metástasis' },
              { texto: 'Resección con sus ganglios', detalle: 'Al menos 8 ganglios en la pieza' },
            ],
            ramas: [
              { si: 'Duodeno', texto: 'Duodenopancreatectomía', detalle: 'DPC + linfadenectomía regional' },
              { si: 'Yeyuno', texto: 'Resección segmentaria', detalle: 'Con su área de mesenterio' },
              { si: 'Íleon terminal', texto: 'Hemicolectomía derecha', detalle: 'Vasos ileocólicos en su origen' },
            ],
          },
          {
            tipo: 'escala',
            titulo: 'Riesgo del GIST y adyuvancia',
            niveles: [
              { codigo: 'Muy bajo', texto: 'Solo seguimiento' },
              { codigo: 'Bajo', texto: 'Solo seguimiento' },
              { codigo: 'Interm.', texto: 'Imatinib (según la clase)' },
              { codigo: 'Alto', texto: 'Imatinib adyuvante' },
            ],
            pie: 'El riesgo sale del tamaño, las mitosis y la localización',
          },
        ],
      },
      {
        titulo: 'Para el examen',
        puntos: [
          'Adenocarcinoma: <b>proximal</b>. Neuroendocrino y linfoma: <b>distales</b> (íleon). El maligno más frecuente es el adenocarcinoma (40 %).',
          'GIST: nace en la <b>muscular propia</b>, crece extraluminal, se marca con <b>CD117</b> y casi nunca da ganglios, así que <b>no se hace linfadenectomía</b>.',
          'Íleon terminal = <b>hemicolectomía derecha</b>, porque comparte drenaje con el ciego a través de los vasos ileocólicos.',
          'Celíaco con suboclusión o perforación ileal: piensa en <b>linfoma</b>. Crohn de larga evolución con estenosis que no cede: piensa también en <b>adenocarcinoma</b>.',
          'Una invaginación intestinal en el adulto obliga a buscar la lesión que hace de cabeza: pólipos de Peutz-Jeghers, lipomas o tumores malignos.',
        ],
      },
    ],
    tarjetas: [
      { a: '¿Cuál es el tumor maligno más frecuente del intestino delgado?', r: 'El adenocarcinoma (40 %), sobre todo en el duodeno y el intestino proximal.' },
      { a: '¿Dónde predomina el linfoma intestinal y por qué?', r: 'En el íleon, porque es donde hay más tejido linfoide (placas de Peyer).' },
      { a: '¿De qué células deriva el GIST?', r: 'De las células intersticiales de Cajal, el marcapasos del intestino.' },
      { a: '¿Qué marcador inmunohistoquímico identifica el GIST?', r: 'CD117, el epítopo extracelular de la proteína KIT.' },
      { a: '¿Por qué no se hace linfadenectomía en el GIST?', r: 'Porque disemina por vía hematógena y peritoneal; la afectación ganglionar es rara.' },
      { a: '¿Qué cirugía requiere un adenocarcinoma de íleon terminal?', r: 'Hemicolectomía derecha, con ligadura de los vasos ileocólicos en su origen.' },
      { a: '¿Qué cirugía requiere un adenocarcinoma duodenal, según la clase?', r: 'Duodenopancreatectomía cefálica con linfadenectomía regional.' },
      { a: '¿Cuántos ganglios pide la clase en el adenocarcinoma de delgado?', r: 'Al menos 8 ganglios locorregionales en la pieza.' },
      { a: '¿Qué enfermedades aumentan el riesgo de adenocarcinoma de delgado?', r: 'Crohn, celiaquía, Peutz-Jeghers, PAF, poliposis juvenil y síndrome de Lynch.' },
      { a: '¿Cuál es el tratamiento del linfoma de intestino delgado?', r: 'La quimioterapia; cirugía solo si hay obstrucción, hemorragia o perforación.' },
      { a: '¿Qué prueba explora la mucosa del delgado que no alcanza el endoscopio?', r: 'La cápsula endoscópica; evítala si sospechas estenosis, porque puede quedarse retenida.' },
      { a: '¿Qué N tiene un adenocarcinoma de delgado con 3 ganglios afectados?', r: 'N2: en el delgado, N1 son 1-2 ganglios y N2, 3 o más (AJCC 8.ª).' },
    ],
    preguntas: [
      {
        id: 'tumores-delgado-1',
        enunciado: 'Varón de 58 años con melenas. Gastroscopia y colonoscopia normales. La TC muestra una masa yeyunal de 7 cm de crecimiento extraluminal, sin adenopatías. La biopsia muestra células fusiformes CD117 positivas. ¿Qué cirugía es la adecuada?',
        opciones: [
          'Resección segmentaria con márgenes libres, sin romper la cápsula y sin linfadenectomía',
          'Resección segmentaria con linfadenectomía mesentérica amplia de al menos 8 ganglios',
          'Enucleación del tumor para preservar la máxima longitud de intestino',
          'Ninguna cirugía: quimioterapia, porque las células fusiformes indican linfoma',
        ],
        correcta: 0,
        explicacion: 'Células fusiformes CD117 positivas y crecimiento extraluminal: es un GIST. Se trata con resección R0 manteniendo la cápsula íntegra, porque su rotura siembra el peritoneo. La linfadenectomía amplia es la del adenocarcinoma; el GIST rara vez da ganglios y disemina por vía hematógena. La enucleación arriesga márgenes afectos y rotura capsular. El linfoma no es un tumor de células fusiformes CD117 positivas, sino una infiltración linfoide difusa; en él sí manda la quimioterapia.',
      },
      {
        id: 'tumores-delgado-2',
        enunciado: 'Mujer de 70 años con un adenocarcinoma de íleon terminal a 10 cm de la válvula ileocecal, sin metástasis en la TC. ¿Qué intervención está indicada?',
        opciones: [
          'Hemicolectomía derecha con ligadura de los vasos ileocólicos en su origen',
          'Resección ileal segmentaria de 10 cm con anastomosis ileoileal',
          'Ileocequectomía sin linfadenectomía, conservando el colon ascendente',
          'Resección endoscópica por ileoscopia y colonoscopia anual',
        ],
        correcta: 0,
        explicacion: 'El íleon terminal drena por los vasos ileocólicos, igual que el ciego. Para extirpar sus ganglios hay que ligar esos vasos en su origen, y eso equivale a una hemicolectomía derecha. La resección segmentaria es la del yeyuno; aquí dejaría los ganglios ileocólicos. La ileocequectomía sin linfadenectomía no es una cirugía oncológica. La resección endoscópica se reserva para adenomas, no para un carcinoma invasivo.',
      },
      {
        id: 'tumores-delgado-3',
        enunciado: 'De los tumores malignos del intestino delgado, ¿cuál es el más frecuente y dónde predomina?',
        opciones: [
          'Adenocarcinoma, en el intestino proximal',
          'Linfoma, en el duodeno',
          'GIST, en la válvula ileocecal',
          'Neuroendocrino, en el yeyuno proximal',
        ],
        correcta: 0,
        explicacion: 'Según la clase, el adenocarcinoma supone el 40 % de los malignos y predomina en el intestino proximal. El linfoma es el 20 % y predomina en el íleon, donde abunda el tejido linfoide (placas de Peyer), no en el duodeno. El GIST es otro 20 %, más en yeyuno e íleon, sin preferencia por la válvula. Los neuroendocrinos, también 20 %, son sobre todo distales (íleon), no del yeyuno proximal.',
      },
      {
        id: 'tumores-delgado-4',
        enunciado: 'Varón celíaco de 55 años con anorexia, pérdida de peso y dolor abdominal. La TC muestra un engrosamiento difuso de 8 cm de la pared ileal y la biopsia confirma un linfoma. ¿Cuál es el tratamiento de elección?',
        opciones: [
          'Quimioterapia, reservando la cirugía para las complicaciones',
          'Resección ileal con linfadenectomía de al menos 8 ganglios',
          'Imatinib, porque infiltra la pared como un tumor estromal',
          'Dieta sin gluten estricta como único tratamiento',
        ],
        correcta: 0,
        explicacion: 'El linfoma intestinal se trata con quimioterapia; la cirugía queda para la obstrucción, la hemorragia o la perforación, que la clase cifra en el 25 %. La resección con linfadenectomía es el esquema del adenocarcinoma. El imatinib actúa sobre KIT y es el fármaco del GIST, no del linfoma. La dieta sin gluten es el tratamiento de la celiaquía, que predispone al linfoma, pero no cura un linfoma ya establecido.',
      },
      {
        id: 'tumores-delgado-5',
        enunciado: 'Mujer de 45 años con anemia ferropénica y sangre oculta en heces positiva. La gastroscopia y la colonoscopia con ileoscopia son normales. No tiene dolor ni clínica obstructiva. ¿Qué prueba es la más adecuada ahora?',
        opciones: [
          'Cápsula endoscópica',
          'Repetir la colonoscopia completa en 3 meses',
          'Enema opaco de doble contraste',
          'Laparotomía exploradora',
        ],
        correcta: 0,
        explicacion: 'Con gastroscopia y colonoscopia normales, la fuente probable está en el delgado, que los endoscopios convencionales no alcanzan. Sin clínica obstructiva, la cápsula explora toda su mucosa sin riesgo de retención. Repetir la colonoscopia retrasa el diagnóstico sin aportar nada si fue completa. El enema opaco estudia el colon, ya explorado mejor con la colonoscopia. La laparotomía exploradora es invasiva y prematura con pruebas aún pendientes.',
      },
      {
        id: 'tumores-delgado-6',
        enunciado: 'La pieza de una resección yeyunal muestra un adenocarcinoma que llega a la subserosa sin perforar la serosa, con 3 de 12 ganglios afectados y sin metástasis. ¿Cuál es su TNM (AJCC 8.ª)?',
        opciones: ['pT3 N2 M0', 'pT4 N1 M0', 'pT3 N1 M0', 'pT2 N2 M0'],
        correcta: 0,
        explicacion: 'En el delgado, T3 es el tumor que atraviesa la muscular propia hasta la subserosa sin perforar la serosa; T4 exige perforar el peritoneo visceral o invadir otro órgano. La N es distinta de la del colon: N1 son 1-2 ganglios y N2, 3 o más, así que tres ganglios ya son N2. Quien marca N1 aplica el corte del colon, donde 1-3 ganglios son N1. T2 se queda en la muscular propia.',
      },
    ],
    fuentes: ['Clase: 25.- neoplasias ID.pdf', 'AJCC Cancer Staging Manual, 8.ª ed. (2017)'],
  },

  /* ================================================================== */
  /* 2. Tumores neuroendocrinos intestinales                              */
  /* ================================================================== */
  {
    id: 'tne-intestinales',
    bloque: 'delgado',
    titulo: 'Tumores neuroendocrinos intestinales',
    subtitulo: 'Neoplasias neuroendocrinas del delgado y síndrome carcinoide',
    tnm: null,
    mapa: ['delgado', 'apendice', 'higado'],
    esencial: [
      'Son tumores raros y de crecimiento lento, nacidos de las células neuroendocrinas de las glándulas digestivas; los de intestino medio (delgado, apéndice, colon proximal) son la mitad.',
      'El síndrome carcinoide (rubefacción, diarrea, broncoespasmo, valvulopatía derecha) exige que la serotonina esquive el hígado: casi siempre hay metástasis hepáticas.',
      'La cirugía es el único tratamiento curativo; los análogos de somatostatina son el estándar médico para controlar síntomas y frenar la enfermedad.',
    ],
    secciones: [
      {
        titulo: 'Epidemiología y origen',
        puntos: [
          'Son <b>raros</b> (unos 2 casos por 100.000) y de <b>crecimiento lento</b>. Oberndorfer los llamó en 1907 <i>Karzinoide</i>, «parecido a un carcinoma»: de ahí el nombre clásico de carcinoide.',
          'Nacen de las <b>células neuroendocrinas</b> (argentafines o de Kulchitsky) del fondo de las glándulas. Expresan citoqueratinas y CDX2, lo que apunta a un origen epitelial más que de la cresta neural.',
          'Se agrupan por origen embrionario: <b>intestino anterior</b> 25 %, <b>intestino medio</b> 50 % (delgado, apéndice, colon proximal) e <b>intestino posterior</b> 15 % (colon distal y recto).',
          'En el delgado suponen el 20 % de los tumores malignos y predominan en la porción <b>distal</b> (íleon).',
        ],
        dibujo: {
          tipo: 'comparar',
          columnas: ['', 'Anterior', 'Medio', 'Posterior'],
          filas: [
            ['Proporción', '25 %', '50 %', '15 %'],
            ['Órganos', 'Pulmón, estómago, duodeno', 'Delgado, apéndice, colon D', 'Colon I y recto'],
          ],
          pie: 'Clasificación embriológica de los tumores neuroendocrinos',
        },
      },
      {
        titulo: 'Anatomía patológica',
        puntos: [
          'La OMS 2019 separa las neoplasias neuroendocrinas en <b>tumores (NET) bien diferenciados</b>, de grado G1, G2 o G3, y <b>carcinomas (NEC) pobremente diferenciados</b>.',
          'El grado se asigna por la proliferación (índice Ki-67 y mitosis). Los NEC son los más agresivos y de peor pronóstico, y responden a quimioterapia con <b>platinos</b>.',
          'Macroscópicamente son <b>nódulos submucosos blanquecinos</b>, cubiertos por mucosa íntegra o ulcerada, con masas ganglionares y una intensa <b>reacción desmoplásica</b> del mesenterio.',
          'Esa fibrosis mesentérica <b>acoda y retrae las asas</b>, y puede obstruir aunque el tumor primario sea pequeño.',
          'Las metástasis dependen del tamaño y de la localización: el NET <b>apendicular</b> casi nunca metastatiza y el <b>ileal</b> lo hace con frecuencia (hígado, ganglios, peritoneo).',
        ],
        dibujo: {
          tipo: 'escala',
          titulo: 'Clasificación OMS 2019',
          niveles: [
            { codigo: 'G1', texto: 'NET bien diferenciado, bajo grado', detalle: 'Ki-67 menor del 3 %' },
            { codigo: 'G2', texto: 'NET bien diferenciado, grado intermedio', detalle: 'Ki-67 del 3 al 20 %' },
            { codigo: 'G3', texto: 'NET bien diferenciado, alto grado', detalle: 'Ki-67 mayor del 20 %' },
            { codigo: 'NEC', texto: 'Carcinoma pobremente diferenciado', detalle: 'Muy agresivo; quimioterapia con platinos' },
          ],
          pie: 'Lo que separa un NET G3 de un NEC es la diferenciación, no solo el Ki-67',
        },
      },
      {
        titulo: 'Clínica y síndrome carcinoide',
        puntos: [
          'El <b>90 % son asintomáticos</b> o dan clínica local inespecífica: dolor por obstrucción parcial o completa, diarrea o sangrado.',
          'Segregan sustancias vasoactivas (<b>serotonina</b>, histamina, calicreína, sustancia P…). Si drenan a la porta, el hígado las inactiva y no dan síntomas.',
          'Para que aparezca el <b>síndrome carcinoide</b> tiene que haber <b>metástasis hepáticas</b> o enfermedad fuera del territorio portal (ovario, bronquio, retroperitoneo) que vierta las hormonas a la circulación general.',
          'El síndrome: <b>rubefacción</b> (cara, cuello, tórax), <b>diarrea acuosa</b>, <b>broncoespasmo</b>, hipotensión por vasodilatación y hepatomegalia.',
          'La fibrosis por serotonina daña las <b>válvulas del corazón derecho</b> (tricúspide y pulmonar). La clase habla de estenosis; lo más típico es la <b>insuficiencia tricuspídea</b>, con estenosis pulmonar.',
        ],
        dibujo: {
          tipo: 'cascada',
          pasos: ['NET de intestino medio', 'Metástasis hepáticas', 'Salida por venas hepáticas', 'Circulación sistémica', 'Síndrome carcinoide', 'Valvulopatía derecha'],
          pie: 'Sin metástasis hepáticas, el hígado inactiva la serotonina portal y no hay síndrome',
        },
      },
      {
        titulo: 'Diagnóstico',
        puntos: [
          'Si hay síntomas, estudio hormonal: <b>5-HIAA en orina de 24 h</b>, el metabolito de la serotonina, que confirma el síndrome carcinoide.',
          '<b>Cromogranina A</b> en sangre: apoya el diagnóstico de NET, no el de síndrome carcinoide; la elevan falsamente los IBP y la insuficiencia renal o hepática.',
          'TC: <b>masa mesentérico-intestinal hipervascular</b>, a menudo con retracción desmoplásica. RM hepática: metástasis hiperintensas en T2.',
          'Como sobreexpresan <b>receptores de somatostatina</b>, se localizan con Octreoscan (octreótido con indio-111) o, con más sensibilidad, con <b>PET-TC con galio-68-DOTATATE</b>.',
        ],
        dibujo: {
          tipo: 'algoritmo',
          pasos: [
            { texto: 'Rubefacción y diarrea', detalle: 'Sospecha de síndrome carcinoide' },
            { texto: '5-HIAA en orina de 24 h', detalle: 'Confirma la secreción de serotonina' },
            { texto: 'Cromogranina A', detalle: 'Apoya NET; falsos positivos con IBP' },
            { texto: 'TC y RM hepática', detalle: 'Masa mesentérica y metástasis' },
            { texto: 'PET-TC Ga-68-DOTATATE', detalle: 'Receptores de somatostatina' },
          ],
        },
      },
      {
        titulo: 'Tratamiento',
        puntos: [
          'La <b>cirugía es el único tratamiento curativo</b>: resección intestinal con su mesenterio según la afectación. En NET G1 pequeños puede bastar la resección local.',
          'En enfermedad avanzada con metástasis, la <b>citorreducción</b> es el mejor tratamiento paliativo, porque reduce la masa que segrega hormonas.',
          'Metástasis hepáticas irresecables: citorreducción máxima, <b>quimioembolización</b>, radioembolización o incluso trasplante hepático en casos seleccionados. En las recurrencias, valorar resección.',
          'Tratamiento médico: los <b>análogos de somatostatina</b> (octreótido, lanreótido) son el estándar para controlar síntomas y frenar la progresión; la quimioterapia es poco útil.',
          'Radioisótopos unidos a análogos de somatostatina (<b>lutecio-177</b>, itrio-90). Ojo: la clase rotula «radioembolización (lutecio)»; la radioembolización hepática usa itrio-90.',
        ],
        dibujo: {
          tipo: 'algoritmo',
          pasos: [{ texto: 'NET intestinal confirmado', detalle: 'Extensión con PET-Ga-68, TC y RM' }],
          ramas: [
            { si: 'Localizado', texto: 'Resección con mesenterio', detalle: 'Único tratamiento curativo' },
            { si: 'Metástasis resecables', texto: 'Cirugía o citorreducción', detalle: 'La mejor paliación posible' },
            { si: 'Irresecable', texto: 'Análogos somatostatina', detalle: '± embolización o radioisótopos' },
          ],
        },
      },
      {
        titulo: 'Pronóstico y seguimiento',
        puntos: [
          'Supervivencia a 5 años según la clase: <b>localizado y resecado, cercana al 100 %</b>; con ganglios resecados, en torno al 65 %; con metástasis a distancia, 25-35 %.',
          'Las metástasis se relacionan con el tamaño y la localización: según la clasificación OMS 2010 que cita la clase, menos del 3 % en el apéndice y más del 35 % en el íleon.',
          'Por su crecimiento lento, incluso con metástasis la supervivencia es larga; por eso compensa operar y citorreducir.',
        ],
        dibujo: {
          tipo: 'escala',
          titulo: 'Supervivencia a 5 años (clase)',
          niveles: [
            { codigo: 'Local', texto: 'Localizado y resecado', detalle: 'Cercana al 100 %' },
            { codigo: 'N+', texto: 'Ganglios afectados, resecados', detalle: 'En torno al 65 %' },
            { codigo: 'M1', texto: 'Metástasis a distancia', detalle: '25-35 %' },
          ],
        },
      },
      {
        titulo: 'Para el examen',
        puntos: [
          'Síndrome carcinoide = casi siempre <b>metástasis hepáticas</b>: un NET ileal sin metástasis no da rubefacción, porque el hígado inactiva la serotonina.',
          '<b>5-HIAA en orina</b> para el síndrome; <b>cromogranina A</b> para el tumor. No los confundas.',
          'Corazón <b>derecho</b>, no izquierdo: el pulmón degrada la serotonina antes de que llegue a las cavidades izquierdas.',
          'NET de íleon con masa mesentérica y fibrosis: se reseca el asa <b>con su mesenterio</b>, como un adenocarcinoma, no una simple enucleación.',
        ],
      },
    ],
    tarjetas: [
      { a: '¿De qué células derivan los tumores neuroendocrinos digestivos?', r: 'De las células neuroendocrinas (argentafines o de Kulchitsky) del fondo de las glándulas digestivas.' },
      { a: '¿Qué grupo embriológico de NET es el más frecuente?', r: 'El de intestino medio (delgado, apéndice, colon proximal): la mitad de los casos.' },
      { a: '¿Qué hace falta para que un NET intestinal dé síndrome carcinoide?', r: 'Que las hormonas esquiven el hígado: metástasis hepáticas o enfermedad fuera del territorio portal.' },
      { a: '¿Qué metabolito urinario confirma el síndrome carcinoide?', r: 'El ácido 5-hidroxiindolacético (5-HIAA) en orina de 24 horas.' },
      { a: '¿Qué indica una cromogranina A elevada?', r: 'Apoya el diagnóstico de NET, no del síndrome; los IBP y la insuficiencia renal o hepática la elevan falsamente.' },
      { a: '¿Qué prueba funcional localiza mejor un NET bien diferenciado?', r: 'La PET-TC con galio-68-DOTATATE, que capta los receptores de somatostatina.' },
      { a: '¿Qué válvulas afecta la cardiopatía carcinoide?', r: 'Las derechas, tricúspide y pulmonar, por fibrosis inducida por la serotonina.' },
      { a: '¿Cuál es el único tratamiento curativo de un NET intestinal?', r: 'La cirugía: resección intestinal con su mesenterio según la extensión.' },
      { a: '¿Cuál es el tratamiento médico estándar de los NET?', r: 'Los análogos de somatostatina: octreótido y lanreótido.' },
      { a: '¿Cómo divide la OMS 2019 las neoplasias neuroendocrinas?', r: 'En NET bien diferenciados (G1, G2, G3) y NEC pobremente diferenciados.' },
      { a: '¿Qué quimioterapia responde en los NEC pobremente diferenciados?', r: 'La basada en platinos.' },
    ],
    preguntas: [
      {
        id: 'tne-intestinales-1',
        enunciado: 'Varón de 64 años con episodios de rubefacción facial, diarrea acuosa y sibilancias. Tiene un soplo en foco tricuspídeo. La TC muestra una masa mesentérica ileal con retracción y múltiples lesiones hepáticas. ¿Qué explica que tenga síntomas?',
        opciones: [
          'Las metástasis hepáticas vierten las hormonas a la circulación sin pasar por el hígado',
          'El tumor ileal es de alto grado y produce más serotonina que uno bien diferenciado',
          'La masa mesentérica comprime la vena porta y desvía la sangre hacia la cava',
          'Los NET de intestino medio dan síntomas en cuanto superan el centímetro',
        ],
        correcta: 0,
        explicacion: 'La serotonina del tumor ileal llega al hígado por la porta y allí se inactiva; solo cuando hay metástasis hepáticas, o enfermedad fuera del territorio portal, las hormonas pasan directamente a la circulación sistémica y aparece el síndrome. El grado no decide los síntomas: muchos NET bien diferenciados dan síndrome, y la clave es el drenaje venoso. La compresión portal no es el mecanismo. Y el 90 % de estos tumores son asintomáticos, sea cual sea su tamaño.',
      },
      {
        id: 'tne-intestinales-2',
        enunciado: 'Mujer de 59 años con rubefacción y diarrea; la RM muestra lesiones hepáticas hiperintensas en T2. Toma omeprazol por reflujo. ¿Qué determinación confirma mejor un síndrome carcinoide?',
        opciones: [
          '5-HIAA en orina de 24 horas',
          'Cromogranina A en sangre',
          'Antígeno carcinoembrionario (CEA)',
          'Gastrina sérica en ayunas',
        ],
        correcta: 0,
        explicacion: 'El 5-HIAA urinario es el metabolito de la serotonina y documenta su hipersecreción, que es lo que define el síndrome carcinoide. La cromogranina A apoya que hay un NET, pero no confirma el síndrome, y además el omeprazol la eleva falsamente. El CEA es el marcador del adenocarcinoma colorrectal. La gastrina busca un gastrinoma, también la sube el IBP y no explica la rubefacción.',
      },
      {
        id: 'tne-intestinales-3',
        enunciado: 'Un NET ileal bien diferenciado está en estudio de extensión. ¿Qué prueba aprovecha la biología del tumor para localizar el primario y sus metástasis?',
        opciones: [
          'PET-TC con galio-68-DOTATATE',
          'PET-TC con 18F-fluorodesoxiglucosa',
          'Gammagrafía ósea con tecnecio',
          'Ecografía abdominal con contraste',
        ],
        correcta: 0,
        explicacion: 'Los NET bien diferenciados sobreexpresan receptores de somatostatina; el DOTATATE marcado con galio-68, o el octreótido con indio-111 del Octreoscan, se une a ellos y los hace visibles. La fluorodesoxiglucosa capta el metabolismo glucídico alto de los tumores agresivos; un NET bien diferenciado crece despacio y puede no verse. La gammagrafía ósea solo busca metástasis óseas. La ecografía ayuda en el hígado, pero no explota ningún receptor ni localiza bien el primario intestinal.',
      },
      {
        id: 'tne-intestinales-4',
        enunciado: 'Varón de 60 años con un NET ileal G1 de 2 cm, adenopatías mesentéricas y sin metástasis a distancia. ¿Qué tratamiento le ofreces?',
        opciones: [
          'Resección ileal con su mesenterio y los ganglios afectados',
          'Análogos de somatostatina y vigilancia, sin cirugía',
          'Quimioterapia con platinos y reevaluación',
          'Resección local del nódulo submucoso',
        ],
        correcta: 0,
        explicacion: 'La cirugía es el único tratamiento curativo de los NET, y con ganglios afectados hay que resecar el asa con su mesenterio. Los análogos de somatostatina controlan síntomas y frenan la enfermedad avanzada, pero no curan un tumor resecable. Los platinos son para el carcinoma neuroendocrino pobremente diferenciado, no para un G1, y en los NET la quimioterapia es poco útil. La resección local solo vale para lesiones pequeñas G1 sin ganglios; aquí dejaría la enfermedad mesentérica.',
      },
      {
        id: 'tne-intestinales-5',
        enunciado: 'El informe de una masa ileal describe una neoplasia neuroendocrina pobremente diferenciada, con proliferación muy alta. ¿Qué implica este diagnóstico?',
        opciones: [
          'Es un carcinoma neuroendocrino (NEC), agresivo, que responde a platinos',
          'Es un NET G1 de buen pronóstico, tributario de vigilancia',
          'Es un NET G3 bien diferenciado que se trata igual que un G1',
          'Es un GIST de alto riesgo, que requiere imatinib adyuvante',
        ],
        correcta: 0,
        explicacion: 'La OMS 2019 separa los NET bien diferenciados (G1 a G3) de los NEC pobremente diferenciados. «Pobremente diferenciado» define al NEC: el más agresivo, de peor pronóstico y con respuesta a quimioterapia con platinos. El G1 es bien diferenciado y de proliferación baja. El NET G3 es bien diferenciado aunque prolifere mucho, y tampoco se maneja como un G1. El GIST es un tumor mesenquimal CD117 positivo, no neuroendocrino.',
      },
      {
        id: 'tne-intestinales-6',
        enunciado: 'Una paciente con síndrome carcinoide y metástasis hepáticas desarrolla edemas en las piernas e ingurgitación yugular. ¿Qué lesión cardiaca es la más probable?',
        opciones: [
          'Valvulopatía tricuspídea y pulmonar por fibrosis',
          'Estenosis aórtica por calcificación',
          'Insuficiencia mitral por prolapso valvular',
          'Miocardiopatía dilatada por la diarrea crónica',
        ],
        correcta: 0,
        explicacion: 'La serotonina produce fibrosis de las válvulas del corazón derecho, que reciben primero la sangre de las venas hepáticas; el pulmón la inactiva antes de que alcance el corazón izquierdo, así que la aórtica y la mitral se respetan. La lesión más típica es la insuficiencia tricuspídea, a menudo con estenosis pulmonar (la clase habla de estenosis tricúspide y pulmonar). La diarrea causa trastornos hidroelectrolíticos, no una miocardiopatía dilatada.',
      },
    ],
    fuentes: ['Clase: 25.- neoplasias ID.pdf', 'WHO Classification of Tumours: Digestive System Tumours, 5.ª ed. (2019)'],
  },

  /* ================================================================== */
  /* 3. Pólipos y síndromes hereditarios                                  */
  /* ================================================================== */
  {
    id: 'poliposis-hereditarios',
    bloque: 'delgado',
    titulo: 'Pólipos y síndromes hereditarios',
    subtitulo: 'PAF, Lynch, Peutz-Jeghers y poliposis juvenil',
    tnm: null,
    mapa: ['colon', 'recto', 'delgado', 'duodeno'],
    esencial: [
      'El adenoma es una neoplasia epitelial benigna que puede malignizar; el hamartoma es tejido normal desordenado, que en los síndromes también puede malignizar.',
      'PAF: gen APC, más de 100 adenomas desde la adolescencia y cáncer colorrectal en todos si no se extirpa el colon; el tratamiento es la colectomía profiláctica.',
      'Lynch: genes reparadores (MMR), pocos pólipos, cáncer de colon derecho a edad joven con inestabilidad de microsatélites, y también de endometrio y otros órganos.',
    ],
    secciones: [
      {
        titulo: 'Anatomía patológica',
        puntos: [
          '<b>Pólipo</b>: masa que protruye en la luz desde la superficie del epitelio. Puede ser <b>pediculado</b> (con tallo) o <b>sésil</b> (de base ancha).',
          '<b>Adenoma</b>: tumor epitelial benigno parecido al epitelio de origen; acumula displasia progresiva y puede malignizar (secuencia adenoma-carcinoma).',
          '<b>Hamartoma</b>: células normales del órgano que crecen desorganizadas, con dilataciones quísticas. Es una malformación benigna, pero en los síndromes también puede malignizar.',
          'Los síndromes hereditarios se dividen en <b>polipósicos</b> (PAF, Peutz-Jeghers, poliposis juvenil) y <b>no polipósicos</b> (síndrome de Lynch).',
        ],
        dibujo: {
          tipo: 'comparar',
          columnas: ['', 'Adenoma', 'Hamartoma'],
          filas: [
            ['Qué es', 'Neoplasia epitelial', 'Malformación'],
            ['Estructura', 'Displasia progresiva', 'Tejido normal desordenado'],
            ['Riesgo de cáncer', 'Sí (adenoma-carcinoma)', 'Sí, en los síndromes'],
            ['Síndromes', 'PAF, MUTYH', 'Peutz-Jeghers, juvenil'],
          ],
        },
      },
      {
        titulo: 'Poliposis adenomatosa familiar (PAF)',
        puntos: [
          '<b>Autosómica dominante</b>, por mutación germinal del gen <b><i>APC</i></b> (cromosoma 5q21). Un 30 % son mutaciones de novo, sin historia familiar. Afecta a 1 de cada 10.000 nacidos.',
          '<b>Más de 100 adenomas</b> en colon y recto desde la infancia o la adolescencia. Si no se extirpa el colon, <b>todos</b> desarrollan cáncer colorrectal.',
          'Fuera del colon: <b>hipertrofia congénita del epitelio pigmentario de la retina</b>, pólipos de glándulas fúndicas, adenocarcinoma periampular, carcinoma papilar de tiroides y meduloblastoma.',
          'Variantes: <b>Gardner</b> (quistes epidérmicos, osteomas, tumores desmoides, neoplasias periampulares) y <b>Turcot</b> (tumores cerebrales). El desmoide es una fibromatosis agresiva local que no metastatiza.',
          '<b>MUTYH</b> (MYH): herencia <b>autosómica recesiva</b>, menos pólipos y más tardíos. La clase la llama «AFAP»; en rigor es la poliposis asociada a MUTYH, que se parece a la PAF atenuada.',
          'Tratamiento: <b>colectomía profiláctica</b>. Colectomía total con anastomosis ileorrectal si el recto está respetado; <b>proctocolectomía con reservorio ileoanal</b> si hay muchos pólipos rectales. Sulindaco y erlotinib reducen pólipos, pero no sustituyen a la cirugía.',
        ],
        dibujo: {
          tipo: 'algoritmo',
          pasos: [
            { texto: 'Familiar de un paciente con PAF', detalle: 'Estudio genético de APC' },
            { texto: 'Portador de la mutación', detalle: 'Endoscopias desde los 10-12 años' },
            { texto: 'Colectomía profiláctica', detalle: 'Antes de que aparezca el cáncer' },
          ],
          ramas: [
            { si: 'Recto respetado', texto: 'Colectomía total + AIR', detalle: 'Ileorrectal; vigilar el recto' },
            { si: 'Recto muy afectado', texto: 'Proctocolectomía + IPAA', detalle: 'Reservorio ileal con anastomosis' },
          ],
          pie: 'La clase añade el genotipo: entre los codones 1250 y 1464, más riesgo rectal',
        },
      },
      {
        titulo: 'Síndrome de Lynch',
        puntos: [
          'Es el síndrome hereditario de cáncer colorrectal más frecuente (la clase lo cifra en el 3 % de los cánceres colorrectales): <b>autosómico dominante</b> y <b>no polipósico</b>, con pocos adenomas que progresan deprisa.',
          'Mutación germinal de un gen reparador (<b>MMR</b>), que corrige los errores de replicación del ADN. Los principales son <b><i>MLH1</i>, <i>MSH2</i>, <i>MSH6</i> y <i>PMS2</i></b>; la clase añade <i>MSH3</i> y <i>PMS1</i>, que hoy no se consideran genes de Lynch.',
          'Consecuencia: <b>inestabilidad de microsatélites</b> (las secuencias repetitivas del ADN cambian de longitud) y tumores con <b>alta carga mutacional</b>, que responden a la inmunoterapia.',
          'Tumores: colon (sobre todo <b>derecho</b> y a edad joven), <b>endometrio</b>, ovario, estómago, <b>intestino delgado</b>, vías urinarias altas y vía biliar.',
          'Se sospecha con los <b>criterios de Amsterdam II</b> (regla 3-2-1), y hoy se estudia el estado MMR/MSI en la biopsia de todo cáncer colorrectal.',
        ],
        dibujo: [
          {
            tipo: 'escala',
            titulo: 'Amsterdam II: la regla 3-2-1',
            niveles: [
              { codigo: '3', texto: 'Tres familiares con tumor de Lynch', detalle: 'Uno, familiar de primer grado de los otros dos' },
              { codigo: '2', texto: 'Dos generaciones sucesivas' },
              { codigo: '1', texto: 'Uno diagnosticado antes de los 50 años' },
              { codigo: 'PAF', texto: 'PAF descartada' },
            ],
            pie: 'Tumores de Lynch: colorrectal, endometrio, delgado, uréter y pelvis renal',
          },
          {
            tipo: 'comparar',
            columnas: ['', 'PAF', 'Lynch'],
            filas: [
              ['Gen', 'APC', 'MMR (MLH1, MSH2…)'],
              ['Pólipos', 'Más de 100', 'Pocos'],
              ['Vía molecular', 'CIN', 'MSI'],
              ['Localización', 'Todo el colon', 'Colon derecho'],
              ['Otros tumores', 'Periampular, desmoide', 'Endometrio, delgado'],
              ['Prevención', 'Colectomía profiláctica', 'Colonoscopia periódica'],
            ],
          },
        ],
      },
      {
        titulo: 'Poliposis hamartomatosas',
        puntos: [
          '<b>Peutz-Jeghers</b>: autosómico dominante, gen supresor <b><i>STK11/LKB1</i></b> (cromosoma 19). Hamartomas, y también adenomas, en todo el tubo digestivo, sobre todo en yeyuno e íleon.',
          'Su marca son las <b>manchas pigmentadas</b> en labios, mucosa bucal, región perianal, antebrazos, palmas y plantas. Los pólipos sangran u obstruyen por <b>invaginación</b>.',
          'Peutz-Jeghers aumenta el riesgo de cáncer digestivo (sobre todo de delgado) y extradigestivo: mama, ovario y trompa, cérvix, tiroides, pulmón y testículo. Los pólipos de más de 1,5 cm se extirpan.',
          'Si hay que operar, se extirpan cuantos pólipos sea posible combinando cirugía y endoscopia, para <b>ahorrar intestino</b>.',
          '<b>Poliposis juvenil</b>: autosómica dominante, con mutación de <b><i>SMAD4</i></b> en la mitad de los casos. Hamartomas con glándulas quísticas en colon, delgado y estómago: hemorragia, invaginación e <b>hipoalbuminemia</b> por pérdida de proteínas.',
          'Juvenil: si hay pocos pólipos, extirpación endoscópica; si hay muchos, colectomía total con anastomosis ileorrectal, o proctocolectomía con reservorio ileoanal si el recto está afectado.',
        ],
        dibujo: {
          tipo: 'comparar',
          columnas: ['', 'Peutz-Jeghers', 'Poliposis juvenil'],
          filas: [
            ['Gen', 'STK11/LKB1', 'SMAD4 (la mitad)'],
            ['Herencia', 'Autosómica dominante', 'Autosómica dominante'],
            ['Pólipos', 'Hamartomas, más en delgado', 'Quísticos, más en colon'],
            ['Pista clínica', 'Manchas en labios y boca', 'Hipoalbuminemia'],
          ],
        },
      },
      {
        titulo: 'Para el examen',
        puntos: [
          '<b>Más de 100 adenomas</b> = PAF. <b>Pocos pólipos</b>, cáncer de colon joven y cáncer de endometrio en la familia = Lynch.',
          'Manchas en los labios e invaginación en un adolescente = <b>Peutz-Jeghers</b>.',
          'En la PAF el cáncer es seguro: la colectomía es <b>profiláctica</b>. Después, el foco que vigilar es el <b>duodeno periampular</b>.',
          'Lynch es <b>no polipósico</b> aunque tenga adenomas: el nombre significa que no hay poliposis masiva, no que falten pólipos.',
          'Herencia: todos dominantes <b>salvo MUTYH</b>, que es recesivo.',
        ],
      },
    ],
    tarjetas: [
      { a: '¿Qué gen muta en la PAF y en qué cromosoma?', r: 'APC, en el cromosoma 5 (5q21); herencia autosómica dominante.' },
      { a: '¿Cuántos adenomas definen la PAF clásica?', r: 'Más de 100 adenomas colorrectales, desde la infancia o la adolescencia.' },
      { a: '¿Qué signo ocular se asocia a la PAF?', r: 'La hipertrofia congénita del epitelio pigmentario de la retina.' },
      { a: '¿Qué añade el síndrome de Gardner a la PAF?', r: 'Quistes epidérmicos, osteomas, tumores desmoides y neoplasias periampulares.' },
      { a: '¿Qué añade el síndrome de Turcot a la poliposis?', r: 'Tumores cerebrales.' },
      { a: '¿Qué poliposis adenomatosa se hereda de forma recesiva?', r: 'La asociada a MUTYH (MYH): menos pólipos y de aparición más tardía.' },
      { a: '¿Qué genes mutan en el síndrome de Lynch?', r: 'Los reparadores de errores (MMR): sobre todo MLH1, MSH2, MSH6 y PMS2.' },
      { a: '¿Cuál es el tumor extracolónico más típico del Lynch?', r: 'El cáncer de endometrio.' },
      { a: '¿Qué gen causa el síndrome de Peutz-Jeghers?', r: 'STK11/LKB1, un gen supresor del cromosoma 19.' },
      { a: '¿Qué pólipos del Peutz-Jeghers deben extirparse?', r: 'Los de más de 1,5 cm.' },
      { a: '¿Qué gen muta en la mitad de las poliposis juveniles?', r: 'SMAD4, un gen supresor.' },
      { a: '¿Qué cirugía necesita una PAF con el recto lleno de pólipos?', r: 'Proctocolectomía total con reservorio ileal y anastomosis ileoanal.' },
    ],
    preguntas: [
      {
        id: 'poliposis-hereditarios-1',
        enunciado: 'Varón de 22 años cuyo padre murió de cáncer de colon a los 40. La colonoscopia muestra cientos de adenomas en todo el colon y muchos en el recto, algunos con displasia de alto grado. ¿Qué tratamiento recomiendas?',
        opciones: [
          'Proctocolectomía total con reservorio ileal y anastomosis ileoanal',
          'Colectomía total con anastomosis ileorrectal y vigilancia del recto',
          'Polipectomías endoscópicas periódicas hasta que aparezca un cáncer',
          'Sulindaco y erlotinib como tratamiento definitivo, sin cirugía',
        ],
        correcta: 0,
        explicacion: 'Es una PAF: todos los pacientes desarrollan cáncer si no se extirpa el colon, así que la cirugía es profiláctica. Con el recto cargado de pólipos hay que quitarlo también: proctocolectomía con reservorio ileoanal. La anastomosis ileorrectal es para el recto respetado; aquí dejaría el foco de mayor riesgo. Las polipectomías son inviables con cientos de adenomas, y esperar al cáncer contradice la prevención. Sulindaco y erlotinib reducen pólipos, pero no sustituyen a la cirugía.',
      },
      {
        id: 'poliposis-hereditarios-2',
        enunciado: 'Mujer de 38 años con adenocarcinoma de colon ascendente. Su madre tuvo cáncer de endometrio a los 48 años y un tío materno, cáncer de colon. La colonoscopia no muestra más pólipos. ¿Qué estudio orienta el diagnóstico?',
        opciones: [
          'Proteínas reparadoras (MMR) o inestabilidad de microsatélites en el tumor',
          'Secuenciación del gen APC en sangre periférica',
          'Estudio del gen STK11 en sangre periférica',
          'Cariotipo para buscar la pérdida del cromosoma 18',
        ],
        correcta: 0,
        explicacion: 'Cáncer de colon derecho en una mujer joven, endometrio en la madre y pocos pólipos: síndrome de Lynch, que cumple Amsterdam II (tres familiares, dos generaciones, una antes de los 50). Se orienta estudiando MMR por inmunohistoquímica o MSI en el tumor, y luego el gen germinal. APC es el gen de la PAF, que daría más de 100 adenomas. STK11 es el de Peutz-Jeghers, con hamartomas y manchas mucocutáneas. La pérdida de 18q es un paso somático de la vía CIN, no un diagnóstico hereditario.',
      },
      {
        id: 'poliposis-hereditarios-3',
        enunciado: 'Chica de 15 años con dolor cólico abdominal y una invaginación yeyunal en la ecografía. Tiene manchas pigmentadas en labios y mucosa bucal. ¿Qué pólipos esperas encontrar y qué gen está implicado?',
        opciones: ['Hamartomas; gen STK11/LKB1', 'Adenomas; gen APC', 'Hamartomas quísticos; gen SMAD4', 'Pólipos serrados; gen BRAF'],
        correcta: 0,
        explicacion: 'Manchas mucocutáneas en labios y boca con pólipos que invaginan el yeyuno son el síndrome de Peutz-Jeghers: hamartomas por mutación de STK11/LKB1. Los adenomas por APC son de la PAF, predominan en el colon y no dan pigmentación. Los hamartomas por SMAD4 son de la poliposis juvenil, que también sangra e invagina, pero sin manchas y con hipoalbuminemia. El pólipo serrado con BRAF es una lesión esporádica del colon derecho, no un síndrome con pigmentación.',
      },
      {
        id: 'poliposis-hereditarios-4',
        enunciado: 'Mujer de 50 años con unos 40 adenomas colónicos. Sus padres están sanos y nunca han tenido pólipos; su hermano tiene un cuadro parecido. ¿Qué diagnóstico es el más probable?',
        opciones: [
          'Poliposis asociada a MUTYH, autosómica recesiva',
          'PAF clásica por mutación germinal de APC',
          'Síndrome de Peutz-Jeghers',
          'Síndrome de Lynch',
        ],
        correcta: 0,
        explicacion: 'Decenas de adenomas, aparición tardía y un hermano afectado con padres sanos sugieren herencia recesiva: poliposis asociada a MUTYH. La PAF clásica es dominante, da más de 100 adenomas desde la adolescencia y lo habitual es que un progenitor esté afectado, salvo mutación de novo. Peutz-Jeghers produce hamartomas, sobre todo en el delgado, con manchas mucocutáneas. Lynch es dominante y no polipósico: pocos adenomas, cáncer joven y tumores de endometrio u otros en la familia.',
      },
      {
        id: 'poliposis-hereditarios-5',
        enunciado: '¿Qué afirmación sobre el síndrome de Lynch es correcta?',
        opciones: [
          'Sus tumores tienen inestabilidad de microsatélites por fallo de los genes reparadores',
          'Se caracteriza por más de 100 adenomas repartidos por todo el colon',
          'Es una enfermedad de herencia autosómica recesiva, como la de MUTYH',
          'Sus cánceres predominan en el colon izquierdo y el recto',
        ],
        correcta: 0,
        explicacion: 'Lynch se debe a una mutación germinal de un gen reparador (MMR); al fallar la corrección de errores, los microsatélites cambian de longitud (MSI) y el tumor acumula muchas mutaciones. Más de 100 adenomas definen la PAF; Lynch es «no polipósico». Es autosómico dominante: la herencia recesiva es la de MUTYH. Sus cánceres predominan en el colon derecho; el izquierdo es más propio de la vía de inestabilidad cromosómica.',
      },
      {
        id: 'poliposis-hereditarios-6',
        enunciado: 'Niño de 8 años con rectorragia, edemas e hipoalbuminemia. La colonoscopia muestra decenas de pólipos con glándulas quísticamente dilatadas en un estroma de la lámina propia. ¿Qué diagnóstico es el más probable?',
        opciones: ['Poliposis juvenil', 'Poliposis adenomatosa familiar', 'Síndrome de Lynch', 'Síndrome de Gardner'],
        correcta: 0,
        explicacion: 'Hamartomas con glándulas quísticas, hemorragia e hipoalbuminemia por pérdida intestinal de proteínas son la poliposis juvenil, con mutación de SMAD4 en la mitad de los casos. La PAF produce adenomas, no hamartomas quísticos, y no se acompaña de pérdida de proteínas. Lynch es no polipósico y se manifiesta como cáncer en el adulto. Gardner es una variante de la PAF, con adenomas más osteomas, quistes epidérmicos y desmoides.',
      },
    ],
    fuentes: [
      'Clase: 25.- neoplasias ID.pdf',
      'Clase: 28.- carcinogénesis.pdf',
      'Vasen HF et al. Gastroenterology 1999;116:1453-6 (criterios de Amsterdam II)',
    ],
  },

  /* ================================================================== */
  /* 4. Cáncer de colon                                                   */
  /* ================================================================== */
  {
    id: 'ca-colon',
    bloque: 'colorrectal',
    titulo: 'Cáncer de colon',
    subtitulo: 'Carcinogénesis, pólipos, cribado, estadificación y tratamiento',
    tnm: 'colon',
    mapa: ['colon'],
    esencial: [
      'Casi todos nacen de un pólipo: la secuencia adenoma-carcinoma dura unos 10 años, y por eso el cribado y la polipectomía previenen el cáncer.',
      'Dos vías moleculares: inestabilidad cromosómica (APC, KRAS, 18q, p53; colon izquierdo y PAF) e inestabilidad de microsatélites (MMR; colon derecho, Lynch y pólipos serrados).',
      'Se trata con colectomía y resección en bloque de los ganglios (mínimo 12); la quimioterapia adyuvante se da en el estadio III y en el II de alto riesgo.',
    ],
    secciones: [
      {
        titulo: 'Epidemiología y cribado',
        puntos: [
          'Sumando ambos sexos, es el <b>primer cáncer en incidencia y el segundo en mortalidad</b>; en varones va tras el de próstata y en mujeres tras el de mama (cifras SEOM 2024 de la clase).',
          'Afecta por igual a ambos sexos y la gran mayoría de los casos aparecen por encima de los 50 años, aunque crece en adultos jóvenes.',
          'La <b>mayoría son esporádicos</b>; una minoría son hereditarios (PAF, Lynch) y otros son «familiares», con agregación sin mutación conocida. Las cifras de la clase (95 % más 6 %) suman más de 100: quédate con la idea.',
          '<b>Cribado poblacional</b> en España: <b>test inmunológico de sangre oculta en heces cada 2 años, de los 50 a los 69</b>; si es positivo, colonoscopia.',
          'Los grupos de alto riesgo (PAF, Lynch, familiares de primer grado, enfermedad inflamatoria intestinal de larga evolución) no entran en el cribado poblacional, sino en vigilancia con <b>colonoscopia</b>.',
        ],
        dibujo: {
          tipo: 'algoritmo',
          pasos: [
            { texto: '50 a 69 años, riesgo medio' },
            { texto: 'Sangre oculta en heces', detalle: 'Test inmunológico cada 2 años' },
            { texto: 'Test positivo', detalle: 'Colonoscopia completa' },
          ],
          ramas: [
            { si: 'Pólipo', texto: 'Polipectomía', detalle: 'Estudio histológico' },
            { si: 'Cáncer', texto: 'Biopsia y estadificación', detalle: 'TC y CEA' },
            { si: 'Normal', texto: 'Vuelve al programa' },
          ],
          pie: 'Programa poblacional del Sistema Nacional de Salud',
        },
      },
      {
        titulo: 'Carcinogénesis',
        puntos: [
          '<b>Secuencia adenoma-carcinoma</b>: el adenoma acumula mutaciones y displasia (leve, moderada, grave) hasta invadir. El pico de pólipos a los 50 y el de cáncer a los 60 sugieren unos 10 años.',
          '<b>Inestabilidad cromosómica (CIN)</b>: la vía mayoritaria del cáncer esporádico y la de la PAF; aneuploidía y más en colon izquierdo. Orden de Fearon y Vogelstein: <b><i>APC</i>, <i>KRAS</i>, pérdida de 18q (<i>DCC</i>, <i>SMAD4</i>) y <i>TP53</i></b>.',
          'La clase da la CIN con dos órdenes distintos (y con 80 % y 85 %). Lo estándar: <b><i>APC</i> inicia</b> el adenoma y <b><i>TP53</i> cierra</b> el paso a carcinoma, después de la pérdida de 18q.',
          '<b>Inestabilidad de microsatélites (MSI)</b>: en torno al 15 % del cáncer esporádico y el síndrome de Lynch. Fallo de los genes reparadores (<b>MMR</b>), con euploidía y alta carga mutacional.',
          'En el esporádico, la MSI suele deberse a <b>hipermetilación del promotor de <i>MLH1</i></b> (fenotipo CIMP), sin cambiar la secuencia del ADN. Nace en <b>pólipos serrados sésiles</b> del colon derecho, con mutación de <i>BRAF</i>.',
          'Los tumores MSI son poco diferenciados y mucinosos, y responden a <b>inmunoterapia</b> anti-PD-1 (pembrolizumab). La clase sitúa los CIMP en menores de 50; lo típico es la mujer mayor, y el joven con MSI sugiere Lynch.',
        ],
        dibujo: [
          {
            tipo: 'cascada',
            pasos: ['Mucosa normal', 'Adenoma precoz (APC)', 'Adenoma intermedio (KRAS)', 'Adenoma tardío (18q)', 'Carcinoma (TP53)', 'Metástasis'],
            pie: 'Vía CIN (Fearon y Vogelstein, 1990): APC inicia, TP53 cierra',
          },
          {
            tipo: 'comparar',
            columnas: ['', 'CIN', 'MSI'],
            filas: [
              ['Frecuencia', 'Mayoritaria', 'En torno al 15 %'],
              ['Mecanismo', 'Aneuploidía', 'Fallo reparador (MMR)'],
              ['Genes', 'APC, KRAS, 18q, TP53', 'MLH1 metilado, BRAF'],
              ['Precursor', 'Adenoma', 'Serrado o adenoma (Lynch)'],
              ['Localización', 'Colon izquierdo', 'Colon derecho'],
              ['Hereditario', 'PAF', 'Lynch'],
            ],
          },
        ],
      },
      {
        titulo: 'Pólipos y pólipo maligno',
        puntos: [
          '<b>Hiperplásicos</b>: los más frecuentes, diminutos y planos. Algunos desarrollan cambios adenomatosos (<b>pólipo serrado</b>), que es premaligno y se asocia a MSI.',
          '<b>Adenomas</b>: tubular (65-80 %, suele ser pediculado y con poca atipia), tubulovelloso (10-25 %) y <b>velloso</b> (5-10 %, con atipia grave a menudo).',
          'El riesgo de cáncer crece con el <b>tamaño</b> y con el <b>componente velloso</b>: es bajo en el tubular de menos de 1 cm y máximo en el velloso de más de 2 cm (la clase da 50 % o más).',
          'Los pediculados se extirpan con un <b>asa que corta y coagula</b>; los sésiles se elevan antes con suero inyectado en la submucosa, con más riesgo.',
          '<b>Haggitt</b> gradúa el pólipo con carcinoma: en los niveles 1-3 basta la polipectomía, salvo carcinoma poco diferenciado o invasión linfovascular; el <b>nivel 4</b> (base del tallo, y todo pólipo sésil) es indicación de cirugía.',
        ],
        dibujo: {
          tipo: 'escala',
          titulo: 'Haggitt: pólipo con carcinoma',
          niveles: [
            { codigo: '0', texto: 'Carcinoma in situ' },
            { codigo: '1', texto: 'Cabeza del pólipo', detalle: 'Atraviesa la muscularis mucosae' },
            { codigo: '2', texto: 'Cuello del pólipo' },
            { codigo: '3', texto: 'Tallo' },
            { codigo: '4', texto: 'Submucosa de la base del tallo', detalle: 'Todo pólipo sésil es nivel 4: cirugía' },
          ],
          resaltar: '4',
          pie: 'Niveles 1-3: basta la polipectomía si es bien diferenciado y sin invasión linfovascular',
        },
      },
      {
        titulo: 'Clínica',
        puntos: [
          '<b>Colon derecho</b>: luz ancha y heces líquidas, así que rara vez obstruye. Da <b>sangrado oculto y anemia ferropénica</b>, melenas o hematoquecia, dolor y masa palpable.',
          '<b>Colon izquierdo</b>: luz estrecha y heces formadas. Da <b>cambio del ritmo intestinal</b> (estreñimiento, alternancia con diarrea), rectorragia, dolor y <b>obstrucción o suboclusión</b>.',
          'Una <b>anemia ferropénica</b> sin causa en un adulto mayor obliga a descartar un cáncer de colon derecho con colonoscopia; según la clase, un 30 % de estos tumores debutan con hemoglobina normal.',
          'Complicaciones de debut: <b>obstrucción</b> (sobre todo en el colon izquierdo), <b>perforación</b> (en el tumor o en el ciego distendido) y hemorragia.',
        ],
        dibujo: {
          tipo: 'comparar',
          columnas: ['', 'Colon derecho', 'Colon izquierdo'],
          filas: [
            ['Luz y heces', 'Ancha, heces líquidas', 'Estrecha, heces formadas'],
            ['Síntoma guía', 'Anemia ferropénica', 'Cambio del ritmo'],
            ['Sangrado', 'Oculto, melenas', 'Rectorragia'],
            ['Obstrucción', 'Rara', 'Frecuente'],
            ['Vía típica', 'MSI, serrada', 'CIN'],
          ],
          pie: 'Mismo tumor, distinta clínica según el calibre de la luz',
        },
      },
      {
        titulo: 'Diagnóstico y estadificación',
        puntos: [
          '<b>Colonoscopia completa con biopsia</b>: confirma el tumor y descarta lesiones sincrónicas; en la biopsia se estudia el estado <b>MMR/MSI</b>. Si una estenosis impide pasar, colonografía por TC.',
          'Analítica con coagulación y <b>CEA</b> (marcador para el seguimiento) y <b>TC toracoabdominopélvica</b> para la extensión.',
          'En la enfermedad metastásica se amplía el perfil molecular: <b><i>KRAS</i>, <i>NRAS</i>, <i>BRAF</i> y <i>HER2</i></b>, que deciden el tratamiento sistémico.',
          'TNM AJCC 8.ª (el mismo para el recto): <b>Tis</b> carcinoma intramucoso, invade la lámina propia sin atravesar la muscularis mucosae; <b>T1</b> submucosa, <b>T2</b> muscular propia, <b>T3</b> grasa pericólica, <b>T4a</b> perfora el peritoneo visceral, <b>T4b</b> invade órganos vecinos.',
          '<b>N1</b>: 1-3 ganglios (N1a uno, N1b dos o tres, N1c depósitos tumorales sin ganglios). <b>N2</b>: 4 o más (N2a 4-6, N2b 7 o más). M1a un órgano, M1b varios, M1c peritoneo.',
          'Estadios: <b>I</b> T1-T2 N0; <b>II</b> T3-T4 N0; <b>III</b> cualquier T con ganglios; <b>IV</b> cualquier M1.',
        ],
        dibujo: [
          { tipo: 'pared', organo: 'colon', pie: 'Hasta dónde llega cada T en la pared del colon (AJCC 8.ª)' },
          {
            tipo: 'escala',
            titulo: 'Estadios del cáncer colorrectal',
            niveles: [
              { codigo: 'I', texto: 'T1-T2 N0 M0', detalle: 'No pasa la muscular propia' },
              { codigo: 'II', texto: 'T3-T4 N0 M0', detalle: 'Atraviesa la pared, sin ganglios' },
              { codigo: 'III', texto: 'Cualquier T, N1-N2, M0', detalle: 'Ganglios afectados: adyuvancia' },
              { codigo: 'IV', texto: 'Cualquier T y N, M1', detalle: 'Metástasis a distancia' },
            ],
          },
        ],
      },
      {
        titulo: 'Tratamiento',
        puntos: [
          'Cirugía: <b>colectomía parcial con resección en bloque de los ganglios</b> del territorio, ligando el pedículo vascular en su origen; el patólogo debe aislar <b>al menos 12 ganglios</b>.',
          'Según la localización: ciego, ascendente y ángulo hepático, <b>hemicolectomía derecha</b>; transverso, hemicolectomía derecha ampliada o colectomía transversa; descendente, hemicolectomía izquierda; sigma, sigmoidectomía.',
          'La <b>laparoscopia</b> es válida, salvo en el tumor <b>localmente avanzado, obstruido o perforado</b>, donde la clase indica cirugía abierta.',
          'Tumor de colon izquierdo perforado o con peritonitis en un paciente inestable: <b>operación de Hartmann</b> (resección con colostomía terminal, sin anastomosis).',
          '<b>Quimioterapia adyuvante</b> (fluoropirimidina con oxaliplatino) en el <b>estadio III</b>; en el II, solo si hay factores de riesgo (T4, menos de 12 ganglios, obstrucción o perforación). El II con MSI no se beneficia de fluoropirimidina sola.',
          'Metástasis hepáticas o pulmonares <b>resecables</b>: se operan, porque la resección puede curar; si no, tratamiento sistémico guiado por <i>KRAS</i>, <i>NRAS</i>, <i>BRAF</i>, <i>HER2</i> y MSI.',
        ],
        dibujo: {
          tipo: 'algoritmo',
          pasos: [
            { texto: 'Cáncer de colon resecable', detalle: 'Colonoscopia, TC y CEA' },
            { texto: 'Colectomía + linfadenectomía', detalle: 'Al menos 12 ganglios en la pieza' },
            { texto: 'Estadio patológico (pTNM)' },
          ],
          ramas: [
            { si: 'Estadio I', texto: 'Seguimiento', detalle: 'Sin adyuvancia' },
            { si: 'Estadio II', texto: 'Adyuvancia si alto riesgo', detalle: 'T4, menos de 12 ganglios…' },
            { si: 'Estadio III', texto: 'Adyuvancia', detalle: 'Fluoropirimidina + oxaliplatino' },
          ],
        },
      },
      {
        titulo: 'Para el examen',
        puntos: [
          '<b>APC primero, TP53 al final</b>: es lo que se pregunta de la vía CIN.',
          'Mínimo <b>12 ganglios</b> en el colon (8 en el delgado). Con menos, la estadificación no es fiable y un estadio II pasa a ser de alto riesgo.',
          'N1 = 1-3 ganglios; N2 = 4 o más. <b>Ganglios positivos = estadio III = adyuvancia.</b>',
          'Anemia ferropénica = colon derecho; obstrucción = colon izquierdo.',
          'MMR/MSI en la biopsia de todo cáncer; <i>KRAS</i>, <i>NRAS</i>, <i>BRAF</i> y <i>HER2</i> solo cuando hay metástasis.',
        ],
      },
    ],
    tarjetas: [
      { a: '¿Qué gen inicia la vía de inestabilidad cromosómica?', r: 'APC: su pérdida de función inicia el adenoma.' },
      { a: '¿Qué gen marca el paso de adenoma a carcinoma en la vía CIN?', r: 'TP53, el último de la secuencia de Fearon y Vogelstein.' },
      { a: '¿Cuánto dura aproximadamente la secuencia adenoma-carcinoma?', r: 'Unos 10 años: pico de pólipos a los 50 y de cáncer a los 60.' },
      { a: '¿Qué causa la MSI en el cáncer colorrectal esporádico?', r: 'La hipermetilación del promotor de MLH1 (fenotipo CIMP).' },
      { a: '¿De qué pólipo nacen los tumores de la vía serrada?', r: 'De pólipos serrados sésiles, planos, del colon derecho, con mutación de BRAF.' },
      { a: '¿Qué nivel de Haggitt obliga a cirugía?', r: 'El nivel 4: invasión de la submucosa de la base del tallo. Todo pólipo sésil maligno es nivel 4.' },
      { a: '¿Cuál es el cribado poblacional de cáncer colorrectal en España?', r: 'Sangre oculta en heces (test inmunológico) cada 2 años entre los 50 y los 69 años.' },
      { a: '¿Cuántos ganglios debe tener como mínimo una pieza de colectomía?', r: '12 ganglios.' },
      { a: '¿Qué es un N1c en el cáncer colorrectal?', r: 'Depósitos tumorales en la grasa pericólica sin ganglios afectados.' },
      { a: '¿Cuándo se indica quimioterapia adyuvante en el cáncer de colon?', r: 'En el estadio III y en el estadio II con factores de alto riesgo.' },
      { a: '¿Qué genes se estudian en el cáncer colorrectal metastásico?', r: 'KRAS, NRAS, BRAF y HER2, además del estado MMR/MSI.' },
      { a: '¿Cuándo no se recomienda la laparoscopia en el cáncer de colon?', r: 'En el tumor localmente avanzado, obstruido o perforado.' },
    ],
    preguntas: [
      {
        id: 'ca-colon-1',
        enunciado: 'Mujer de 72 años con astenia y hemoglobina de 8,5 g/dL con ferropenia. No ha visto sangre en las heces ni ha cambiado su ritmo intestinal. Si tiene un cáncer de colon, ¿dónde es más probable que esté?',
        opciones: ['Ciego o colon ascendente', 'Colon sigmoide', 'Recto', 'Ángulo esplénico'],
        correcta: 0,
        explicacion: 'En el colon derecho la luz es ancha y las heces líquidas: el tumor crece sin obstruir y sangra de forma oculta, así que el debut típico es la anemia ferropénica. El sigma y el ángulo esplénico pertenecen al colon izquierdo, de luz estrecha y heces formadas: dan cambio del ritmo intestinal y obstrucción. El recto suele dar rectorragia visible, tenesmo o heces más finas, no una anemia silente.',
      },
      {
        id: 'ca-colon-2',
        enunciado: 'En la vía de inestabilidad cromosómica del cáncer colorrectal, ¿qué alteración inicia la formación del adenoma?',
        opciones: [
          'Mutación con pérdida de función de APC',
          'Mutación activadora del oncogén KRAS',
          'Pérdida de función del gen TP53',
          'Hipermetilación del promotor de MLH1',
        ],
        correcta: 0,
        explicacion: 'APC es el primer paso: su pérdida desata la proliferación y aparece el adenoma; por eso la mutación germinal de APC (PAF) llena el colon de adenomas. KRAS se activa después y hace crecer el adenoma. TP53 se pierde al final y marca el paso a carcinoma invasivo; en el orden estándar va tras la pérdida de 18q, aunque la clase da dos órdenes distintos. La metilación de MLH1 pertenece a otra vía, la de inestabilidad de microsatélites.',
      },
      {
        id: 'ca-colon-3',
        enunciado: 'Se extirpa con asa un pólipo pediculado de sigma de 15 mm. El informe describe un adenocarcinoma bien diferenciado que invade el tallo sin llegar a su base, con margen libre y sin invasión linfovascular. ¿Qué haces?',
        opciones: [
          'Seguimiento endoscópico: la polipectomía es suficiente',
          'Sigmoidectomía con linfadenectomía regional',
          'Quimioterapia adyuvante con fluoropirimidina',
          'Radioterapia sobre el lecho de la polipectomía',
        ],
        correcta: 0,
        explicacion: 'Invadir el tallo sin alcanzar su base es un nivel 3 de Haggitt. En los niveles 1 a 3 el riesgo ganglionar es bajo y basta la polipectomía si el margen está libre, el carcinoma es bien diferenciado y no hay invasión linfovascular. La sigmoidectomía se indicaría en el nivel 4 o con factores desfavorables. La adyuvancia se reserva para el estadio III o el II de alto riesgo, no para un pólipo resecado. La radioterapia no tiene papel en el colon.',
      },
      {
        id: 'ca-colon-4',
        enunciado: 'Tras una hemicolectomía derecha, el informe dice: tumor que invade la grasa pericólica sin perforar el peritoneo, 2 de 15 ganglios afectados y sin metástasis. ¿Estadio y actitud?',
        opciones: [
          'pT3 N1b M0, estadio III: quimioterapia adyuvante',
          'pT3 N1b M0, estadio II: solo seguimiento',
          'pT4a N1a M0, estadio III: radioterapia adyuvante',
          'pT3 N2a M0, estadio III: solo seguimiento',
        ],
        correcta: 0,
        explicacion: 'Invadir la grasa pericólica es T3; dos ganglios es N1b (N1a es uno; N1b, dos o tres). Cualquier ganglio positivo sin metástasis es estadio III, y tras la cirugía se da quimioterapia adyuvante con fluoropirimidina y oxaliplatino. La segunda opción yerra el estadio: el II exige N0. La tercera llama T4a a un tumor que no perfora el peritoneo y propone radioterapia, que no se usa en el colon. La cuarta aplica N2, que empieza en 4 ganglios, y omite la adyuvancia.',
      },
      {
        id: 'ca-colon-5',
        enunciado: 'Mujer de 76 años con adenocarcinoma mucinoso de colon ascendente. El tumor ha perdido la expresión de MLH1 y tiene la mutación BRAF V600E. No hay antecedentes familiares. ¿Qué es lo más probable?',
        opciones: [
          'Tumor esporádico de la vía serrada por hipermetilación de MLH1',
          'Síndrome de Lynch por mutación germinal de MLH1',
          'Tumor esporádico de la vía de inestabilidad cromosómica',
          'Poliposis adenomatosa familiar en su forma atenuada',
        ],
        correcta: 0,
        explicacion: 'Mujer mayor, colon derecho, tumor mucinoso, pérdida de MLH1 y BRAF mutado: es el perfil de la vía serrada, en la que MLH1 se silencia por hipermetilación de su promotor (CIMP), sin mutación germinal. En Lynch también se pierde MLH1, pero la mutación BRAF V600E prácticamente lo descarta, y el paciente suele ser joven y con historia familiar. La vía CIN cursa sin inestabilidad de microsatélites y predomina en el colon izquierdo. La PAF atenuada da decenas de adenomas, no un tumor aislado con MSI.',
      },
      {
        id: 'ca-colon-6',
        enunciado: 'Mujer de 78 años con 3 días sin deposición ni gases. La TC muestra un tumor estenosante de sigma con dilatación del colon, neumoperitoneo y líquido libre. Está hipotensa y tiene peritonitis. ¿Qué cirugía es la más adecuada?',
        opciones: [
          'Sigmoidectomía abierta con colostomía terminal (Hartmann)',
          'Sigmoidectomía laparoscópica con anastomosis primaria',
          'Prótesis endoscópica y cirugía programada en dos semanas',
          'Quimioterapia neoadyuvante y reevaluación posterior',
        ],
        correcta: 0,
        explicacion: 'Con perforación, peritonitis e inestabilidad, lo prudente es resecar el tumor sin anastomosar: operación de Hartmann, por vía abierta. La laparoscopia no se recomienda en el tumor obstruido o perforado, y una anastomosis en plena peritonitis con hipotensión tiene alto riesgo de dehiscencia. La prótesis es un puente para la obstrucción sin perforación, no para una peritonitis. La neoadyuvancia no tiene cabida en una urgencia quirúrgica.',
      },
      {
        id: 'ca-colon-7',
        enunciado: 'Varón de 56 años, sin antecedentes personales ni familiares, recibe la carta del programa de cribado de cáncer colorrectal. ¿Qué prueba se le ofrece?',
        opciones: [
          'Test inmunológico de sangre oculta en heces cada 2 años',
          'Colonoscopia completa cada 5 años',
          'Determinación anual de CEA en sangre',
          'Colonografía por TC cada 3 años',
        ],
        correcta: 0,
        explicacion: 'El programa poblacional del Sistema Nacional de Salud ofrece a las personas de riesgo medio de 50 a 69 años el test inmunológico de sangre oculta en heces cada 2 años; si sale positivo, colonoscopia. La colonoscopia directa se reserva para el test positivo y los grupos de alto riesgo. El CEA no sirve para cribar: es poco sensible en tumores precoces y se usa en el seguimiento. La colonografía por TC se emplea cuando la colonoscopia es incompleta, no como cribado poblacional.',
      },
    ],
    fuentes: [
      'Clase: 28.- carcinogénesis.pdf',
      'Clase: tema 26 Anatomia colon. Diverticulosis. Volvulo 2024.pptx (anatomía)',
      'AJCC Cancer Staging Manual, 8.ª ed. (2017)',
      'Fearon ER, Vogelstein B. Cell 1990;61:759-67',
      'Orden SSI/2065/2014, cartera común del SNS (cribado de cáncer colorrectal)',
      'Argilés G et al. Localised colon cancer: ESMO Clinical Practice Guidelines. Ann Oncol 2020',
    ],
  },

  /* ================================================================== */
  /* 5. Cáncer de recto                                                   */
  /* ================================================================== */
  {
    id: 'ca-recto',
    bloque: 'colorrectal',
    titulo: 'Cáncer de recto',
    subtitulo: 'Estadificación por RM, escisión del mesorrecto, neoadyuvancia y preservación de órgano',
    tnm: 'colon',
    mapa: ['recto'],
    esencial: [
      'La estadificación local (tacto rectal, ecografía endorrectal y, sobre todo, RM pélvica) decide el tratamiento: importan la T, los ganglios y la distancia a la fascia mesorrectal.',
      'La cirugía oncológica es la escisión total del mesorrecto, por el plano avascular entre la fascia mesorrectal y la presacra; según la clase, bajó la recidiva local del 40 % al 5 %.',
      'El tumor localmente avanzado (T4, ganglios o margen amenazado) recibe neoadyuvancia antes de operar; con respuesta clínica completa puede vigilarse sin operar (watch & wait).',
    ],
    secciones: [
      {
        titulo: 'Epidemiología y anatomía',
        puntos: [
          'Su frecuencia aumenta, y la <b>recidiva local</b> es muy sintomática (dolor pélvico, sangrado, fístulas): evitarla es el objetivo del tratamiento. La clase pide que sea menor del 8 %.',
          'Hay varias opciones terapéuticas y las decisiones se toman en <b>comité multidisciplinar</b>. La clase subraya la importancia del <b>cribado poblacional</b>.',
          'El <b>mesorrecto</b> es la grasa que rodea al recto, con sus vasos y ganglios, envuelta por la <b>fascia mesorrectal</b>. Detrás está la fascia presacra, y entre ambas, un plano sin vasos.',
          'El recto extraperitoneal <b>no tiene serosa</b>: el tumor que atraviesa la pared entra directamente en la grasa mesorrectal, y la fascia es la última barrera.',
          'Nervios pélvicos: simpático (L1-L3, plexos hipogástricos) y parasimpático (S2-S4). Su lesión durante la cirugía causa disfunción urinaria y sexual.',
        ],
      },
      {
        titulo: 'Diagnóstico y estadificación',
        puntos: [
          'Diagnóstico: <b>endoscopia con biopsia</b> y confirmación anatomopatológica.',
          '<b>Tacto rectal</b>: distancia al margen anal, fijación o movilidad, tamaño, cuánta luz ocupa y relación con los esfínteres. La rectoscopia confirma la distancia.',
          '<b>Ecografía endorrectal</b>: la mejor para tumores superficiales y muy útil para ver la invasión de la grasa; falla en el tercio superior y en los tumores estenosantes.',
          '<b>RM pélvica</b>: la prueba clave. Muestra la relación con la <b>fascia mesorrectal</b> y con las estructuras pélvicas, valora los ganglios como la ecografía y no la limitan las estenosis.',
          'Estadificación sistémica: <b>TC toracoabdominal</b> (con colonografía por TC si la estenosis impide completar la colonoscopia) y <b>CEA y CA 19-9</b>.',
          'La RM subdivide el T3 según lo que penetra en la grasa: <b>T3a</b> menos de 1 mm, <b>T3b</b> 1-5 mm, <b>T3c</b> 5-15 mm y <b>T3d</b> más de 15 mm. El TNM es el del colon.',
        ],
        dibujo: [
          {
            tipo: 'algoritmo',
            pasos: [
              { texto: 'Endoscopia y biopsia', detalle: 'Confirmación anatomopatológica' },
              { texto: 'Tacto rectal y rectoscopia', detalle: 'Distancia al margen, fijación, esfínteres' },
              { texto: 'RM pélvica ± eco endorrectal', detalle: 'T, N y fascia mesorrectal' },
              { texto: 'TC toracoabdominal', detalle: 'Metástasis; CEA y CA 19-9' },
              { texto: 'Comité multidisciplinar', detalle: 'Decide la secuencia de tratamiento' },
            ],
          },
          {
            tipo: 'escala',
            titulo: 'Subclases del T3 por RM',
            niveles: [
              { codigo: 'T3a', texto: 'Menos de 1 mm en la grasa' },
              { codigo: 'T3b', texto: 'De 1 a 5 mm' },
              { codigo: 'T3c', texto: 'De 5 a 15 mm' },
              { codigo: 'T3d', texto: 'Más de 15 mm' },
            ],
            pie: 'Cuanto más penetra en el mesorrecto, más cerca queda la fascia',
          },
          { tipo: 'pared', organo: 'colon', resaltar: 'T3', pie: 'Recto y colon comparten TNM; el recto bajo no tiene serosa' },
        ],
      },
      {
        titulo: 'Cáncer precoz (cT1)',
        puntos: [
          'Los <b>pólipos malignos y el cáncer precoz cT1N0</b> con factores de buen pronóstico pueden tratarse con <b>resección local transanal</b>, sin extirpar el recto.',
          'La resección local debe incluir <b>todo el espesor de la pared</b> con márgenes libres; hoy se hace con <b>cirugía transanal mínimamente invasiva</b>.',
          'En las lesiones polipoides se aplica <b>Haggitt</b>; en las sésiles, <b>Kikuchi</b>, que divide la submucosa en tercios: SM1, SM2 y SM3.',
          'Riesgo de ganglios según la clase: <b>SM1 0-3 %</b>, SM2 8 % y <b>SM3 20-23 %</b>. Un SM3 suele necesitar cirugía radical con mesorrecto.',
          'Los factores pronósticos del pólipo maligno (grado, invasión linfovascular, margen, profundidad) se discuten en un <b>comité de pólipos</b>.',
        ],
        dibujo: {
          tipo: 'escala',
          titulo: 'Kikuchi: invasión de la submucosa',
          niveles: [
            { codigo: 'SM1', texto: 'Tercio superior', detalle: 'Ganglios: 0-3 %' },
            { codigo: 'SM2', texto: 'Tercio medio', detalle: 'Ganglios: 8 %' },
            { codigo: 'SM3', texto: 'Tercio inferior', detalle: 'Ganglios: 20-23 %, cirugía radical' },
          ],
          resaltar: 'SM3',
        },
      },
      {
        titulo: 'Tratamiento según el estadio',
        puntos: [
          '<b>cT1N0</b> con factores de buen pronóstico: <b>resección local transanal</b>.',
          '<b>cT2-T3 no localmente avanzado</b>: cirugía directa, <b>resección anterior baja con escisión total del mesorrecto</b>.',
          '<b>Localmente avanzado</b> (T4, ganglios positivos o margen circunferencial amenazado en la RM): <b>neoadyuvancia</b> y después resección anterior baja.',
          'Neoadyuvancia: <b>radioterapia de ciclo corto</b> (5 × 5 Gy), <b>quimiorradioterapia</b> larga (45-50 Gy con quimioterapia) o <b>terapia neoadyuvante total (TNT)</b>, que pone toda la quimioterapia antes de operar, de inducción o de consolidación.',
          'La TNT consigue más <b>respuestas clínicas completas</b> que la quimiorradioterapia clásica (la clase da en torno al 15 % y al 30-35 %).',
        ],
        dibujo: [
          {
            tipo: 'algoritmo',
            pasos: [{ texto: 'Adenocarcinoma de recto', detalle: 'RM pélvica, eco endorrectal y TC' }],
            ramas: [
              { si: 'cT1N0 favorable', texto: 'Resección local', detalle: 'Transanal, todo el espesor' },
              { si: 'cT2-T3 no avanzado', texto: 'RAB con ETM', detalle: 'Cirugía de entrada' },
              { si: 'T4, N+ o margen +', texto: 'Neoadyuvancia y RAB', detalle: 'Ciclo corto, QRT o TNT' },
            ],
            pie: 'RAB: resección anterior baja. ETM: escisión total del mesorrecto',
          },
          {
            tipo: 'comparar',
            columnas: ['', 'Ciclo corto', 'QRT larga', 'TNT'],
            filas: [
              ['Radioterapia', '5 × 5 Gy', '45-50 Gy', 'Corta o larga'],
              ['Quimioterapia', '—', 'Concomitante', 'Toda antes de operar'],
              ['Respuesta completa', '—', 'Menor', 'Mayor'],
            ],
            pie: 'Opciones de neoadyuvancia que presenta la clase',
          },
        ],
      },
      {
        titulo: 'Cirugía: escisión total del mesorrecto',
        puntos: [
          '<b>Escisión total del mesorrecto (ETM)</b>, de Heald: disección entre la <b>fascia mesorrectal</b> y la <b>fascia pélvica o presacra</b>, por un plano avascular, con electrobisturí y bajo visión directa.',
          'La ETM extirpa el recto con todo su drenaje venoso y linfático, y redujo la <b>recidiva local del 40 % al 5 %</b> según la clase. En el recto superior basta una exéresis mesorrectal parcial.',
          '<b>Resección anterior baja o ultrabaja</b>: extirpa recto y mesorrecto y <b>restablece el tránsito con una anastomosis</b>, colorrectal o coloanal. Puede hacerse por vía transanal (TaTME).',
          '<b>Amputación abdominoperineal</b> (Miles): extirpa recto, ano y esfínteres, <b>sin anastomosis</b>. Se indica si el tumor afecta a los esfínteres, no permite margen, hay mala función esfinteriana, alto riesgo de dehiscencia o lo prefiere el paciente.',
          '<b>Hartmann</b>: resección con colostomía terminal y cierre del muñón rectal, sin anastomosis; útil en pacientes frágiles o en urgencias.',
          'Tras la resección anterior, muchos pacientes sufren el <b>síndrome de resección anterior</b> (urgencia, deposiciones fragmentadas, incontinencia): hay que informarles antes de operar.',
        ],
        dibujo: {
          tipo: 'comparar',
          columnas: ['', 'Resección anterior baja', 'Amputación abdominoperineal'],
          filas: [
            ['Qué extirpa', 'Recto y mesorrecto', 'Recto, mesorrecto y ano'],
            ['Tránsito', 'Anastomosis', 'Colostomía definitiva'],
            ['Cuándo', 'Hay margen distal', 'Tumor en los esfínteres'],
            ['Riesgo propio', 'Dehiscencia', 'Herida perineal'],
          ],
        },
      },
      {
        titulo: 'Pieza quirúrgica y complicaciones',
        puntos: [
          'El patólogo informa la <b>calidad del mesorrecto</b>: satisfactoria si la fascia está íntegra o con defectos menores de 5 mm; insatisfactoria si es irregular y se ve la muscular.',
          '<b>Margen circunferencial afecto</b>: tumor a 1 mm o menos del borde de la pieza; predice la recidiva local. Se informan además los ganglios (al menos 12), la MSI y el pTNM.',
          '<b>Estoma de protección</b> (ileostomía): no evita la dehiscencia, pero <b>disminuye su gravedad</b>. A cambio, puede perder mucha agua y causar insuficiencia renal.',
          'Riesgo de <b>dehiscencia</b>: ETM en varones, quimiorradioterapia previa, reservorios, tabaco, comorbilidad, anastomosis difícil y prueba de estanqueidad alterada.',
          'Ante una dehiscencia: antibióticos, lavado peritoneal e intentar conservar la anastomosis; si el colon está isquémico, se reseca.',
          'Perioperatorio: profilaxis antibiótica, cribado nutricional y <b>prehabilitación</b>.',
        ],
      },
      {
        titulo: 'Watch & wait: preservación de órgano',
        puntos: [
          'Tras la neoadyuvancia se reevalúa con <b>tacto rectal, rectoscopia, RM pélvica y TC o PET-TC</b>.',
          'Si hay <b>respuesta clínica completa</b> (no se palpa ni se ve tumor y la RM no muestra enfermedad), puede no operarse: <b>preservación de órgano</b> con seguimiento muy estrecho.',
          'Según la clase, en torno al <b>25 %</b> presenta <b>recrecimiento</b>, que se rescata con cirugía; por eso el seguimiento es obligatorio.',
          'Sin respuesta completa, se hace la <b>resección de recto</b> prevista.',
        ],
        dibujo: {
          tipo: 'algoritmo',
          pasos: [
            { texto: 'Neoadyuvancia', detalle: 'Ciclo corto, QRT o TNT' },
            { texto: 'Reevaluación', detalle: 'Tacto, rectoscopia, RM, TC o PET-TC' },
            { texto: '¿Respuesta clínica completa?' },
          ],
          ramas: [
            { si: 'Sí', texto: 'Watch & wait', detalle: 'Seguimiento estrecho; 25 % recrece' },
            { si: 'No', texto: 'Resección de recto', detalle: 'Con escisión del mesorrecto' },
          ],
        },
      },
      {
        titulo: 'Para el examen',
        puntos: [
          'La <b>RM pélvica</b> es la prueba que decide: fascia mesorrectal y margen circunferencial. La ecografía endorrectal gana en los tumores superficiales.',
          'Localmente avanzado = <b>T4, N+ o margen amenazado</b>: neoadyuvancia antes de operar.',
          'Margen circunferencial afecto = tumor a <b>1 mm o menos</b> del borde.',
          'El estoma de protección <b>no previene</b> la fuga anastomótica: reduce sus consecuencias.',
          'N igual que en el colon: N1 1-3 ganglios y N2 4 o más (la clase lo escribe «más de 3»).',
        ],
      },
    ],
    tarjetas: [
      { a: '¿Qué prueba valora la relación del tumor con la fascia mesorrectal?', r: 'La RM pélvica.' },
      { a: '¿En qué tumores rectales rinde más la ecografía endorrectal?', r: 'En los superficiales; falla en el tercio superior y en los estenosantes.' },
      { a: '¿Entre qué estructuras discurre la escisión total del mesorrecto?', r: 'Entre la fascia mesorrectal y la fascia pélvica o presacra, por un plano avascular.' },
      { a: '¿Qué es un T3c en la RM de recto?', r: 'Un tumor que penetra entre 5 y 15 mm en la grasa mesorrectal.' },
      { a: '¿Cuándo se considera afecto el margen circunferencial?', r: 'Cuando el tumor está a 1 mm o menos del borde de resección.' },
      { a: '¿Qué define un cáncer de recto localmente avanzado?', r: 'T4, ganglios positivos o margen circunferencial amenazado en la RM.' },
      { a: '¿Qué dosis tiene la radioterapia de ciclo corto?', r: 'Cinco sesiones de 5 Gy (5 × 5 Gy).' },
      { a: '¿Qué es la TNT en el cáncer de recto?', r: 'La terapia neoadyuvante total: radioterapia y toda la quimioterapia antes de la cirugía.' },
      { a: '¿Qué es un SM3 de Kikuchi y por qué importa?', r: 'Invasión del tercio profundo de la submucosa: 20-23 % de ganglios, suele requerir cirugía radical.' },
      { a: '¿Para qué sirve la ileostomía de protección?', r: 'Disminuye la gravedad de la dehiscencia anastomótica, no su frecuencia.' },
      { a: '¿Cuándo se indica una amputación abdominoperineal?', r: 'Tumor en los esfínteres o sin margen posible, mala función esfinteriana, alto riesgo de dehiscencia o preferencia del paciente.' },
      { a: '¿Qué recrecimiento da la clase tras watch & wait?', r: 'En torno al 25 %, rescatable con cirugía.' },
    ],
    preguntas: [
      {
        id: 'ca-recto-1',
        enunciado: 'Varón de 63 años con adenocarcinoma de recto medio. La RM muestra un tumor que penetra 12 mm en la grasa mesorrectal, adenopatías mesorrectales sospechosas y la fascia mesorrectal a 1 mm. La TC no muestra metástasis. ¿Qué indicas primero?',
        opciones: [
          'Neoadyuvancia (quimiorradioterapia o TNT) y después cirugía con ETM',
          'Resección anterior baja con escisión total del mesorrecto de entrada',
          'Resección local transanal de todo el espesor de la pared',
          'Amputación abdominoperineal inmediata con colostomía definitiva',
        ],
        correcta: 0,
        explicacion: 'Es un T3c con ganglios sospechosos y margen circunferencial amenazado: cáncer localmente avanzado, que recibe neoadyuvancia antes de operar para reducir la recidiva local. La cirugía de entrada es para el cT2-T3 sin factores de riesgo; aquí arriesgaría un margen afecto. La resección local solo vale para el cT1N0 favorable. La amputación abdominoperineal depende de la relación con los esfínteres, no del margen circunferencial, y en un recto medio no está indicada.',
      },
      {
        id: 'ca-recto-2',
        enunciado: 'Durante una escisión total del mesorrecto, ¿por qué plano debe disecar el cirujano?',
        opciones: [
          'Entre la fascia mesorrectal y la fascia presacra, un plano avascular',
          'Dentro de la grasa mesorrectal, pegado a la pared del recto',
          'Por detrás de la fascia presacra, sobre el periostio del sacro',
          'Entre la mucosa y la capa muscular de la pared rectal',
        ],
        correcta: 0,
        explicacion: 'La escisión total del mesorrecto extirpa el recto envuelto en su fascia, con todo el mesorrecto, disecando por el plano avascular entre la fascia mesorrectal y la presacra, con electrobisturí y bajo visión. Disecar dentro de la grasa deja mesorrecto y ganglios: la pieza sale insatisfactoria y aumenta la recidiva. Por detrás de la fascia presacra se lesionan las venas presacras, con hemorragias graves. El plano submucoso es el de una mucosectomía, no el de una cirugía oncológica.',
      },
      {
        id: 'ca-recto-3',
        enunciado: 'Mujer de 68 años con una lesión de recto inferior de 2 cm, móvil al tacto. La ecografía endorrectal la estadifica como cT1N0 y la biopsia muestra un adenocarcinoma bien diferenciado sin invasión linfovascular. ¿Qué tratamiento es el adecuado?',
        opciones: [
          'Resección local transanal de todo el espesor de la pared',
          'Amputación abdominoperineal con colostomía definitiva',
          'Quimiorradioterapia y estrategia de watch & wait',
          'Polipectomía endoscópica con asa y seguimiento',
        ],
        correcta: 0,
        explicacion: 'Un cT1N0 con factores de buen pronóstico (bien diferenciado, sin invasión linfovascular, pequeño y móvil) puede tratarse con resección local transanal de todo el espesor y márgenes libres, conservando el recto. La amputación es un sobretratamiento con colostomía definitiva. La neoadyuvancia con preservación de órgano se plantea en tumores más avanzados. La polipectomía con asa no da una pieza de todo el espesor, necesaria para estadificar la profundidad y asegurar los márgenes.',
      },
      {
        id: 'ca-recto-4',
        enunciado: 'Tras la resección transanal de un cT1 de recto, el informe describe invasión del tercio inferior de la submucosa (SM3 de Kikuchi) con márgenes libres. ¿Qué recomiendas?',
        opciones: [
          'Completar con cirugía radical y escisión del mesorrecto',
          'Solo seguimiento, porque los márgenes son libres',
          'Quimioterapia adyuvante sin más cirugía',
          'Repetir la resección transanal para ampliar márgenes',
        ],
        correcta: 0,
        explicacion: 'Según la clase, el SM3 de Kikuchi tiene un riesgo de metástasis ganglionares del 20-23 %; la resección local no extirpa los ganglios del mesorrecto, así que hay que completar con cirugía radical. El seguimiento sería razonable en un SM1, con un riesgo del 0-3 %. La quimioterapia no sustituye a extirpar unos ganglios que pueden estar afectados. Ampliar márgenes no resuelve el problema, que está en los ganglios y no en el margen.',
      },
      {
        id: 'ca-recto-5',
        enunciado: 'Mujer de 70 años con cáncer de recto inferior tratada con TNT. En la reevaluación, el tacto y la rectoscopia solo muestran una cicatriz plana, y la RM no identifica tumor. ¿Qué opción puedes plantearle?',
        opciones: [
          'Preservación de órgano (watch & wait) con seguimiento estrecho',
          'Alta, porque la respuesta completa equivale a curación',
          'Amputación abdominoperineal, obligatoria en todos los casos',
          'Repetir la radioterapia para consolidar la respuesta',
        ],
        correcta: 0,
        explicacion: 'Con respuesta clínica completa (tacto, rectoscopia y RM sin tumor) se puede no operar y vigilar de forma estrecha, preservando el recto. No es un alta: según la clase, en torno al 25 % recrece y necesita cirugía de rescate, por eso el seguimiento es obligatorio. Operar siempre renuncia a la preservación de órgano, que es la razón de buscar la respuesta completa. Repetir la radioterapia no tiene sentido sin tumor visible y añade toxicidad.',
      },
      {
        id: 'ca-recto-6',
        enunciado: 'Varón fumador de 59 años al que se hará una resección anterior ultrabaja tras quimiorradioterapia, con ileostomía de protección. ¿Qué afirmación sobre la ileostomía es correcta?',
        opciones: [
          'Reduce la gravedad de una dehiscencia, pero no la evita',
          'Impide que llegue a producirse la dehiscencia anastomótica',
          'Es un estoma sin complicaciones propias relevantes',
          'Es un estoma definitivo que no llega a cerrarse',
        ],
        correcta: 0,
        explicacion: 'Este paciente acumula factores de riesgo de dehiscencia: varón, quimiorradioterapia previa, tabaco y anastomosis baja. La ileostomía desvía las heces, de modo que si la anastomosis falla la fuga es menos grave, pero la dehiscencia puede ocurrir igual. Tiene complicaciones propias: grandes pérdidas de agua que pueden causar insuficiencia renal. Es temporal y se cierra cuando la anastomosis ha cicatrizado.',
      },
      {
        id: 'ca-recto-7',
        enunciado: 'El informe de una resección anterior baja describe el tumor a 0,8 mm del margen circunferencial, con 14 ganglios negativos. ¿Cómo se interpreta ese margen?',
        opciones: [
          'Afecto, con mayor riesgo de recidiva local',
          'Libre, porque el tumor no llega a tocar el borde',
          'Indicador de afectación ganglionar N2',
          'Criterio que convierte el tumor en un T4b',
        ],
        correcta: 0,
        explicacion: 'Por convenio, el margen circunferencial está afecto si el tumor queda a 1 mm o menos del borde de la pieza, y es el factor que más pesa en la recidiva local. No basta con que no lo toque. El margen no informa de los ganglios: N2 son cuatro o más ganglios afectados, y aquí son negativos. Tampoco cambia la T: T4b exige invadir un órgano vecino, no estar cerca del borde quirúrgico.',
      },
    ],
    fuentes: [
      'Clase: tema 29 Ca recto clase Medicina 2024.pptx',
      'Clase: tema 26 Anatomia colon. Diverticulosis. Volvulo 2024.pptx (anatomía del recto)',
      'AJCC Cancer Staging Manual, 8.ª ed. (2017)',
    ],
  },

  /* ================================================================== */
  /* 6. Cáncer de canal anal                                              */
  /* ================================================================== */
  {
    id: 'ca-ano',
    bloque: 'colorrectal',
    titulo: 'Cáncer de canal anal',
    subtitulo: 'Carcinoma epidermoide de ano, VPH y quimiorradioterapia',
    tnm: 'ano',
    mapa: ['ano'],
    esencial: [
      'Es un carcinoma epidermoide ligado al VPH de alto riesgo (16 y 18), poco frecuente pero en aumento; se criba en grupos de riesgo como los varones VIH positivos que tienen sexo con hombres.',
      'El tratamiento de entrada es la quimiorradioterapia (esquema de Nigro: 5-FU y mitomicina C con radioterapia), que cura sin amputar el esfínter; la amputación abdominoperineal queda para el fracaso o la recidiva.',
      'La T se mide por tamaño (2 cm o menos, más de 2 a 5, más de 5; T4 invade órganos vecinos) y los ganglios inguinales son regionales (N1a), no metástasis.',
    ],
    secciones: [
      {
        titulo: 'Epidemiología y factores de riesgo',
        puntos: [
          'Tumor <b>poco frecuente</b> y en aumento por el <b>VPH</b>; aparece sobre todo en la séptima década y con igual reparto entre sexos.',
          'Los VPH más frecuentes en la región anal son el <b>6 y el 11</b>, pero son de <b>bajo riesgo</b> (condilomas). Los <b>oncogénicos</b> son el <b>16 y el 18</b>, además del 31, 33 y 35.',
          'Progresa desde la <b>displasia de alto grado</b> (lesión intraepitelial) hasta el cáncer invasivo, lo que permite el diagnóstico precoz.',
          'Se hace <b>cribado en varones VIH positivos que tienen sexo con hombres</b>, el grupo de mayor riesgo; la inmunosupresión favorece la progresión.',
        ],
        dibujo: {
          tipo: 'comparar',
          columnas: ['', 'Bajo riesgo', 'Alto riesgo'],
          filas: [
            ['Tipos de VPH', '6 y 11', '16, 18, 31, 33, 35'],
            ['Lesión típica', 'Condiloma (verruga)', 'Displasia de alto grado'],
            ['Cáncer', 'No', 'Sí: epidermoide'],
          ],
          pie: 'Que el 6 y el 11 sean los más frecuentes no los hace oncogénicos',
        },
      },
      {
        titulo: 'Anatomía patológica y localización',
        puntos: [
          'La mayoría son <b>carcinomas epidermoides</b>. La clase distingue cuatro localizaciones según lo que se ve al separar las nalgas.',
          '<b>Canal anal</b>: no se ven, o se ven solo en parte. <b>Margen anal</b>: totalmente visibles, dentro de un radio de 5 cm alrededor del ano.',
          '<b>Cutáneos</b>: a más de 5 cm del ano; se tratan como cáncer de piel. <b>Rectales</b>: muy raros, ascienden por la ampolla rectal.',
          'El drenaje linfático depende de la altura: por encima de la línea pectínea, a los ganglios <b>mesorrectales e ilíacos internos</b>; por debajo, a los <b>inguinales</b>.',
        ],
        dibujo: {
          tipo: 'comparar',
          columnas: ['', 'Canal anal', 'Margen anal'],
          filas: [
            ['Al separar las nalgas', 'No se ve, o en parte', 'Se ve entero'],
            ['Extensión', 'Dentro del canal', 'Radio de 5 cm del ano'],
            ['T1 sin ganglios', 'Quimiorradioterapia', 'Escisión quirúrgica'],
          ],
        },
      },
      {
        titulo: 'Clínica y diagnóstico',
        puntos: [
          'El síntoma más frecuente es el <b>sangrado</b>. Los demás (prurito, dolor, diarrea, incontinencia) se confunden con patología anal benigna, como las hemorroides.',
          'Hay que <b>explorar siempre las ingles</b>: las adenopatías inguinales cambian la N.',
          'Diagnóstico: <b>rectoscopia y biopsia</b>, a menudo bajo anestesia por el dolor; extensión con <b>ecografía</b>, <b>RM</b> pélvica y <b>TC</b>.',
          'La clase insiste en el <b>diagnóstico precoz</b>: toda lesión anal que no cura con el tratamiento de una patología benigna se biopsia.',
        ],
        dibujo: {
          tipo: 'algoritmo',
          pasos: [
            { texto: 'Sangrado, dolor o prurito anal' },
            { texto: 'Exploración anal e inguinal', detalle: 'Tacto rectal y adenopatías inguinales' },
            { texto: 'Rectoscopia y biopsia', detalle: 'Con anestesia si hace falta' },
            { texto: 'Ecografía, RM pélvica y TC', detalle: 'T por tamaño, N y metástasis' },
          ],
        },
      },
      {
        titulo: 'Estadificación (AJCC 8.ª)',
        puntos: [
          'La T del ano se mide por <b>tamaño</b>, no por profundidad: <b>T1</b> 2 cm o menos, <b>T2</b> más de 2 y hasta 5 cm, <b>T3</b> más de 5 cm.',
          '<b>T4</b>: invade órganos vecinos (vagina, uretra, vejiga), sea cual sea el tamaño. Invadir el recto, la piel perianal o el esfínter <b>no</b> es T4.',
          'N: <b>N1a</b> ganglios inguinales, mesorrectales o ilíacos internos; <b>N1b</b> ilíacos externos; <b>N1c</b> ilíacos externos junto con algún N1a.',
          'Los <b>ganglios inguinales son regionales</b> (N1a), no metástasis a distancia: entran en el campo de radioterapia y el tratamiento sigue siendo curativo.',
          'Tis es la lesión intraepitelial escamosa de alto grado; M1, la metástasis a distancia.',
        ],
        dibujo: [
          {
            tipo: 'regla',
            titulo: 'T del canal anal por tamaño',
            unidad: 'cm',
            cortes: [2, 5],
            etiquetas: ['T1', 'T2', 'T3'],
            pie: 'T4: invade órganos vecinos (vagina, uretra, vejiga), sea cual sea el tamaño',
          },
          {
            tipo: 'escala',
            titulo: 'N del canal anal (AJCC 8.ª)',
            niveles: [
              { codigo: 'N0', texto: 'Sin ganglios afectados' },
              { codigo: 'N1a', texto: 'Inguinales, mesorrectales, ilíacos int.' },
              { codigo: 'N1b', texto: 'Ilíacos externos' },
              { codigo: 'N1c', texto: 'Ilíacos externos y algún N1a' },
            ],
            pie: 'Los inguinales son regionales: N1a, nunca M1',
          },
        ],
      },
      {
        titulo: 'Tratamiento',
        puntos: [
          'De elección: <b>quimiorradioterapia</b> (esquema de Nigro: radioterapia con <b>5-fluorouracilo y mitomicina C</b>). La clase le atribuye un 70-90 % de eficacia, y <b>conserva el esfínter</b>.',
          'Excepción: el <b>T1 de margen anal</b> se trata con <b>cirugía</b> (escisión local).',
          'La respuesta se valora <b>hasta los 6 meses</b> con exploración física y tacto rectal, RM y PET: el tumor sigue reduciéndose tras terminar, y no hay que operar antes de tiempo.',
          'Si fracasa o recidiva: <b>amputación abdominoperineal de rescate</b>, con colostomía definitiva.',
        ],
        dibujo: {
          tipo: 'algoritmo',
          pasos: [
            { texto: 'Epidermoide de canal anal', detalle: 'Estadificado con RM y TC' },
            { texto: 'Quimiorradioterapia', detalle: 'RT + 5-FU + mitomicina C (Nigro)' },
            { texto: 'Valorar la respuesta', detalle: 'Hasta los 6 meses: tacto, RM, PET' },
          ],
          ramas: [
            { si: 'Respuesta completa', texto: 'Seguimiento', detalle: 'Conserva el esfínter' },
            { si: 'Persistencia/recidiva', texto: 'Amputación AP de rescate', detalle: 'Colostomía definitiva' },
          ],
        },
      },
      {
        titulo: 'Otros tumores del margen anal',
        puntos: [
          '<b>Enfermedad de Paget</b> perianal: adenocarcinoma intraepitelial. <b>Enfermedad de Bowen</b>: carcinoma epidermoide in situ.',
          'Ambas dan una lesión perianal <b>pruriginosa, eritematosa y eccematosa</b>, de bordes mal definidos y a veces pigmentada, que se confunde con un eccema.',
          'Crecen despacio: menos del 10 % evolucionan a cáncer invasivo, más en inmunodeprimidos.',
          'Tratamiento: resección, fulguración, terapia fotodinámica, láser, 5-FU tópico o imiquimod.',
        ],
      },
      {
        titulo: 'Para el examen',
        puntos: [
          'Cáncer de ano = <b>quimiorradioterapia primero</b>, y la amputación abdominoperineal es de rescate. Justo al revés que en el adenocarcinoma de recto bajo que invade esfínteres.',
          'T por <b>tamaño</b> (cortes en 2 y 5 cm), no por profundidad como en el colon.',
          '<b>Inguinales = N1a</b>, no M1.',
          'VPH 6 y 11: los más frecuentes, pero de bajo riesgo. Oncogénicos: <b>16 y 18</b>. La diapositiva de la clase puede leerse al revés: no caigas.',
          'Excepción quirúrgica: el <b>T1 de margen anal</b> se trata con escisión local.',
        ],
      },
    ],
    tarjetas: [
      { a: '¿Qué tipo histológico predomina en el cáncer de ano?', r: 'El carcinoma epidermoide.' },
      { a: '¿Qué tipos de VPH son oncogénicos en el ano?', r: 'El 16 y el 18, además del 31, 33 y 35.' },
      { a: '¿Qué VPH anales son los más frecuentes y de bajo riesgo?', r: 'El 6 y el 11, causantes de condilomas.' },
      { a: '¿En quién se hace cribado de cáncer anal?', r: 'En varones VIH positivos que tienen sexo con hombres.' },
      { a: '¿Cuál es el tratamiento de elección del cáncer de canal anal?', r: 'Quimiorradioterapia: radioterapia con 5-fluorouracilo y mitomicina C (esquema de Nigro).' },
      { a: '¿Qué se hace si fracasa la quimiorradioterapia?', r: 'Una amputación abdominoperineal de rescate.' },
      { a: '¿Hasta cuándo se espera para valorar la respuesta?', r: 'Hasta los 6 meses tras la quimiorradioterapia.' },
      { a: '¿Qué tumor anal se trata con cirugía de entrada?', r: 'El T1 de margen anal.' },
      { a: '¿Qué es un T2 en el canal anal?', r: 'Un tumor de más de 2 cm y hasta 5 cm.' },
      { a: '¿Qué define el T4 del canal anal?', r: 'La invasión de órganos vecinos (vagina, uretra, vejiga), sea cual sea el tamaño.' },
      { a: '¿Qué N son los ganglios inguinales afectados?', r: 'N1a: son ganglios regionales, no metástasis.' },
      { a: '¿Qué es la enfermedad de Bowen perianal?', r: 'Un carcinoma epidermoide in situ.' },
    ],
    preguntas: [
      {
        id: 'ca-ano-1',
        enunciado: 'Varón de 61 años VIH positivo con sangrado y dolor anal. Tiene una lesión ulcerada de 4 cm en el canal anal y una adenopatía inguinal. La biopsia muestra carcinoma epidermoide y la TC no muestra metástasis a distancia. ¿Qué tratamiento indicas?',
        opciones: [
          'Quimiorradioterapia con 5-fluorouracilo y mitomicina C',
          'Amputación abdominoperineal con linfadenectomía inguinal',
          'Quimioterapia paliativa, porque el ganglio inguinal es una metástasis',
          'Escisión local transanal con un margen de 1 cm',
        ],
        correcta: 0,
        explicacion: 'El carcinoma epidermoide del canal anal se trata de entrada con quimiorradioterapia (Nigro), que cura a la mayoría y conserva el esfínter; los ganglios inguinales se incluyen en el campo de radioterapia. La amputación se reserva para el fracaso o la recidiva. La adenopatía inguinal es regional, N1a, no una metástasis, así que el tratamiento sigue siendo curativo. La escisión local solo se acepta en el T1 de margen anal, y este es un tumor de 4 cm del canal.',
      },
      {
        id: 'ca-ano-2',
        enunciado: 'Mujer con un carcinoma epidermoide de canal anal de 3 cm que infiltra el esfínter interno, sin afectar la vagina. ¿Qué T le corresponde (AJCC 8.ª)?',
        opciones: ['T2', 'T1', 'T3', 'T4'],
        correcta: 0,
        explicacion: 'En el ano la T se define por el tamaño: T1 hasta 2 cm, T2 más de 2 y hasta 5 cm, T3 más de 5 cm. Con 3 cm es T2. T1 exigiría 2 cm o menos. T3 empieza por encima de 5 cm. T4 requiere invadir un órgano vecino como la vagina, la uretra o la vejiga; la infiltración del esfínter, de la piel perianal o del recto no convierte un tumor en T4.',
      },
      {
        id: 'ca-ano-3',
        enunciado: '¿Qué afirmación sobre el VPH y el cáncer de ano es correcta?',
        opciones: [
          'El 16 y el 18 son oncogénicos; el 6 y el 11, de bajo riesgo',
          'El 6 y el 11 son oncogénicos por ser los más frecuentes',
          'El VPH causa cáncer de cérvix, pero no cáncer anal',
          'El VPH causa sobre todo adenocarcinoma del canal anal',
        ],
        correcta: 0,
        explicacion: 'La clase cita el 6 y el 11 como los más frecuentes y el 16, 18, 31, 33 y 35 como oncogénicos. Leído deprisa parece que el 6 y el 11 sean los peligrosos, pero son de bajo riesgo y causan condilomas: frecuencia no es oncogenicidad. El VPH sí causa cáncer anal, y por eso aumenta su incidencia y se criba a los grupos de riesgo. El tumor que produce es el carcinoma epidermoide, no el adenocarcinoma.',
      },
      {
        id: 'ca-ano-4',
        enunciado: 'Varón tratado con quimiorradioterapia por un carcinoma epidermoide de canal anal. A las 8 semanas de terminar persiste una pequeña induración que no ha crecido. ¿Qué haces?',
        opciones: [
          'Seguir vigilando: la respuesta se valora hasta los 6 meses',
          'Amputación abdominoperineal inmediata',
          'Repetir la quimiorradioterapia completa',
          'Dar el alta, porque la lesión no crece',
        ],
        correcta: 0,
        explicacion: 'El carcinoma epidermoide sigue regresando durante semanas o meses tras la quimiorradioterapia; la clase indica valorar la respuesta hasta los 6 meses con exploración, tacto rectal, RM y PET. Amputar a las 8 semanas haría una cirugía mutilante quizá innecesaria. Repetir el tratamiento completo no está indicado y suma toxicidad. Dar el alta es un error: hay que seguirlo, y si la lesión persiste o recidiva, el rescate es la amputación abdominoperineal.',
      },
      {
        id: 'ca-ano-5',
        enunciado: 'Varón de 70 años con una lesión de 1,5 cm totalmente visible al separar las nalgas, a 3 cm del orificio anal. La biopsia muestra carcinoma epidermoide y no hay adenopatías. ¿Qué tratamiento le ofreces?',
        opciones: [
          'Escisión local quirúrgica',
          'Quimiorradioterapia con 5-FU y mitomicina',
          'Amputación abdominoperineal',
          'Imiquimod tópico como único tratamiento',
        ],
        correcta: 0,
        explicacion: 'Una lesión completamente visible y dentro de un radio de 5 cm del ano es de margen anal; si es T1 (2 cm o menos) y sin ganglios, la clase indica cirugía. La quimiorradioterapia es el tratamiento del canal anal y de los tumores de margen más grandes. La amputación es el rescate tras el fracaso de la quimiorradioterapia. El imiquimod se usa en lesiones in situ como la enfermedad de Bowen, no en un carcinoma invasivo.',
      },
      {
        id: 'ca-ano-6',
        enunciado: 'Mujer de 74 años con prurito perianal de años. Presenta una placa eritematosa y eccematosa de bordes mal definidos. La biopsia muestra un adenocarcinoma intraepitelial. ¿Cuál es el diagnóstico?',
        opciones: [
          'Enfermedad de Paget perianal',
          'Enfermedad de Bowen perianal',
          'Carcinoma epidermoide invasivo de margen anal',
          'Condiloma acuminado perianal',
        ],
        correcta: 0,
        explicacion: 'Un adenocarcinoma limitado al epitelio en una placa eccematosa perianal es la enfermedad de Paget. La de Bowen tiene el mismo aspecto clínico, pero es un carcinoma epidermoide in situ, no un adenocarcinoma. El carcinoma invasivo atraviesa la membrana basal, y esta lesión es intraepitelial. El condiloma es una verruga exofítica por VPH 6 y 11, no una placa eccematosa con adenocarcinoma.',
      },
    ],
    fuentes: [
      'Clase: tema 29 Ca recto clase Medicina 2024.pptx',
      'AJCC Cancer Staging Manual, 8.ª ed. (2017)',
      'Nigro ND, Vaitkevicius VK, Considine B. Dis Colon Rectum 1974;17:354-6',
    ],
  },
]
