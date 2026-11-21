/**
 * Pestaña «Tumores» · Hígado y vía biliar.
 * Fuente principal: las clases de Patología Quirúrgica I (temas 13, 15, 16, 18 y 19).
 * Donde la diapositiva contiene una errata o ha quedado superada, se enseña lo
 * estándar y se dice en el propio texto (ver docs/ERRATAS-MATERIAL-DOCENTE.md).
 */

const tumoresHepaticosBenignos = {
  id: 'tumores-hepaticos-benignos',
  bloque: 'higado',
  titulo: 'Tumores hepáticos benignos',
  subtitulo: 'Hemangioma, hiperplasia nodular focal, adenoma hepatocelular y quistes hepáticos',
  tnm: null,
  mapa: ['higado'],
  esencial: [
    'El hemangioma es el tumor hepático benigno más frecuente y la hiperplasia nodular focal el segundo: los dos se diagnostican por imagen y casi nunca se operan.',
    'El adenoma hepatocelular es el que importa: mujer joven con anticonceptivos, riesgo de sangrado y de malignización; se opera si da síntomas, mide más de 5 cm, crece, es un varón o no se pueden dejar los anticonceptivos.',
    'La resonancia magnética es la prueba que mejor los distingue; la biopsia casi nunca hace falta y en la hiperplasia nodular focal no se aconseja.',
  ],
  secciones: [
    {
      titulo: 'Visión general',
      puntos: [
        'Ante una lesión hepática sólida hallada por casualidad, piensa primero en lo benigno frecuente: <b>hemangioma</b> (el más frecuente) e <b>hiperplasia nodular focal</b> (el segundo).',
        'Lo práctico es separar lo que se deja tranquilo (hemangioma, HNF, quiste simple) de lo que tiene <b>potencial de sangrar o de malignizar</b> (adenoma, tumores quísticos biliares).',
        'La ecografía suele descubrirlas, la TC con contraste en varias fases orienta y la <b>resonancia magnética</b> es la prueba más precisa para caracterizarlas.',
        'Los tres tumores sólidos son más frecuentes en <b>mujeres</b>, pero solo en el adenoma la relación con los <b>anticonceptivos orales</b> es firme.',
      ],
      dibujo: {
        tipo: 'comparar',
        columnas: ['', 'Hemangioma', 'HNF', 'Adenoma'],
        filas: [
          ['Frecuencia', '1.º', '2.º', 'Raro'],
          ['Hormonas', 'Posible', 'Sin relación clara', 'ACO, anabolizantes'],
          ['Sangrado', 'Raro', 'Excepcional', 'Sí'],
          ['Malignización', 'No', 'No', 'Sí (3–7 %)'],
          ['Conducta', 'Observar', 'Observar', 'Resecar si criterios'],
        ],
        pie: 'Las tres lesiones sólidas benignas que tienes que saber distinguir.',
      },
    },
    {
      titulo: 'Hemangioma cavernoso',
      puntos: [
        'Tumor <b>mesenquimal</b> benigno más frecuente del hígado: lagunas vasculares tapizadas de endotelio con septos fibrosos. Más en mujeres (5:1), entre la tercera y la quinta década.',
        'Casi siempre es un <b>hallazgo casual</b>. Por encima de <b>7 cm</b> se llama gigante (criterio de la clase) y entonces puede dar dolor, compresión de vecinos o fiebre por necrosis; la rotura es rara.',
        '<b>Síndrome de Kasabach-Merritt</b>: hemangioma gigante con coagulopatía de consumo (trombopenia, fibrinógeno bajo, hemólisis) que puede acabar en coagulación intravascular diseminada.',
        'TC con contraste: captación <b>periférica, nodular y centrípeta</b> que acaba rellenando la lesión. RM: muy <b>hiperintenso en T2</b>; es la prueba de elección.',
        'Tratamiento: <b>observación</b>. Cirugía (enucleación o resección) solo si hay síntomas, duda diagnóstica o complicaciones. El diagnóstico es por imagen, sin biopsia, y el pronóstico es excelente.',
      ],
      dibujo: {
        tipo: 'algoritmo',
        pasos: [
          { texto: 'Lesión hiperecoica en ECO', detalle: 'Hallazgo casual, analítica normal' },
          { texto: 'TC trifásica o RM', detalle: 'Relleno periférico, nodular y centrípeto' },
        ],
        ramas: [
          { si: 'Asintomático', texto: 'Seguimiento', detalle: 'No hace falta biopsia' },
          { si: 'Síntomas o dudas', texto: 'Enucleación o resección', detalle: 'También si se complica' },
        ],
        pie: 'El hemangioma se diagnostica por su patrón de captación.',
      },
    },
    {
      titulo: 'Hiperplasia nodular focal',
      puntos: [
        'Segunda lesión benigna más frecuente; mujeres de 40–50 años, sin relación clara con las hormonas. No es una neoplasia: es una respuesta hiperplásica a una <b>malformación vascular</b>.',
        'Mecanismo: shunts en la circulación portal → <b>hiperperfusión arterial</b> → estrés oxidativo que activa las células estrelladas → <b>cicatriz central</b> alrededor de la arteria. Puede aparecer tras oxaliplatino.',
        'Anatomía patológica: lesión bien delimitada, <b>sin cápsula</b>, con nódulos de hepatocitos, cicatriz central y tabiques fibrosos radiales con arterias distróficas.',
        'TC: <b>hiperdensa y homogénea en fase arterial</b>, isodensa en fase portal (sin lavado), con cicatriz central. RM (la más precisa): cicatriz hiperintensa en T2.',
        'No se aconseja la <b>biopsia</b>: no distingue bien la HNF de un hepatocarcinoma bien diferenciado o fibrolamelar.',
        'Tratamiento <b>conservador</b>: crecer, complicarse o malignizar es excepcional. Cirugía solo si da síntomas o si hay duda con una lesión de potencial maligno.',
      ],
      dibujo: {
        tipo: 'cascada',
        pasos: ['Shunts portales', 'Hiperperfusión arterial', 'Estrés oxidativo', 'Activa células estrelladas', 'Cicatriz central fibrosa'],
        pie: 'Por qué la HNF tiene una cicatriz central con una arteria dentro.',
      },
    },
    {
      titulo: 'Adenoma hepatocelular',
      puntos: [
        'Proliferación de células parecidas a hepatocitos pero <b>desorganizadas</b>, sin conductos biliares ni tejido conjuntivo. El 80 % son únicos, sobre todo en el lóbulo derecho.',
        'Típico de <b>mujer joven que toma anticonceptivos orales</b>. En varones se asocia a anabolizantes, obesidad y alcohol; también a diabetes y glucogenosis.',
        'Complicaciones: <b>hemorragia</b> intratumoral o peritoneal (dolor agudo) y <b>transformación maligna</b> (3–7 %), ligada a β-catenina mutada, glucogenosis, tamaño >5 cm, sexo masculino y hormonas mantenidas.',
        'Subtipos moleculares: HNF1α inactivado (esteatosis, bajo riesgo), <b>β-catenina activada</b> (alto riesgo de malignizar), inflamatorio (obesidad, riesgo de sangrado) y no clasificado.',
        'Diagnóstico: alfafetoproteína normal; hipervascular en fase arterial con realce de la cápsula en fases tardías. La RM lo caracteriza y orienta el subtipo; la biopsia puede ayudar a tipificarlo.',
        'Cirugía si hay <b>síntomas, más de 5 cm, crecimiento de más de 1 cm, varón, glucogenosis o anticonceptivos que no se dejan</b>. Si sangra, primero <b>embolización</b>.',
      ],
      dibujo: {
        tipo: 'algoritmo',
        pasos: [
          { texto: 'Adenoma hepatocelular', detalle: 'Mujer joven con ACO, AFP normal' },
          { texto: 'Retirar anticonceptivos', detalle: 'Valorar tamaño, sexo, subtipo y síntomas' },
        ],
        ramas: [
          { si: 'Sangrado activo', texto: 'Embolización', detalle: 'Después, valorar cirugía' },
          { si: '>5 cm, varón, crece', texto: 'Resección', detalle: 'También β-catenina o glucogenosis' },
          { si: '<5 cm, mujer, estable', texto: 'Seguimiento con imagen', detalle: 'Sin anticonceptivos' },
        ],
        pie: 'Indicaciones de cirugía según la clase.',
      },
    },
    {
      titulo: 'Quistes hepáticos',
      puntos: [
        '<b>Quiste simple</b>: epitelio de tipo biliar que segrega líquido seroso, <b>sin comunicación con la vía biliar</b>. Unilocular, más en mujeres, casi siempre asintomático.',
        'Su complicación más frecuente es la <b>hemorragia intraquística</b>: dolor brusco y aumento de tamaño. Si es pequeño, asintomático y no cambia, no necesita seguimiento.',
        'Si da síntomas o crece rápido: <b>aspiración y esclerosis percutánea</b> o <b>fenestración</b> quirúrgica (quitar el techo del quiste).',
        '<b>Poliquistosis hepatorrenal</b>: quistes bilaterales, gran hepatomegalia, dolor y compresión, sin insuficiencia hepática. En formas invalidantes, trasplante hepático, o hepatorrenal si el filtrado renal es bajo.',
        '<b>Síndrome de Caroli</b>: dilatación quística congénita de los conductos biliares intrahepáticos con fibrosis hepática congénita (autosómico recesivo). Colangitis, litiasis intrahepática, abscesos y riesgo de colangiocarcinoma.',
        'Diagnóstico diferencial con los <b>tumores quísticos</b> (cistoadenoma y cistoadenocarcinoma biliar), que se resecan, y con el quiste hidatídico.',
      ],
      dibujo: [
        {
          tipo: 'algoritmo',
          pasos: [{ texto: 'Quiste simple en ECO', detalle: 'Anecoico, unilocular, sin septos' }],
          ramas: [
            { si: 'Asintomático', texto: 'Nada', detalle: 'No necesita seguimiento' },
            { si: 'Síntomas o crece', texto: 'Esclerosis o fenestración', detalle: 'Percutánea o quirúrgica' },
          ],
        },
        {
          tipo: 'escala',
          titulo: 'Síndrome de Caroli: extensión',
          niveles: [
            { codigo: 'Focal', texto: 'Un segmento o un lóbulo', detalle: 'Resección hepática' },
            { codigo: 'Difuso', texto: 'Todo el hígado', detalle: 'Tratar complicaciones y trasplante' },
          ],
        },
      ],
    },
    {
      titulo: 'Para el examen',
      puntos: [
        'Relleno <b>centrípeto</b> = hemangioma; <b>cicatriz central</b> sin cápsula = HNF; <b>mujer con anticonceptivos y sangrado</b> = adenoma.',
        'Hemangioma <b>gigante</b>: más de <b>7 cm</b> según la clase. Kasabach-Merritt = hemangioma gigante + trombopenia + fibrinógeno bajo.',
        'El hemangioma y la HNF <b>no se operan</b> salvo síntomas o duda; el adenoma sí cuando cumple criterios, porque sangra y maligniza.',
        'Adenoma con más riesgo de malignizar: <b>β-catenina activada</b>. El inflamatorio es el que más sangra.',
        'El quiste simple <b>no comunica</b> con la vía biliar; el Caroli <b>es</b> vía biliar dilatada, y por eso da colangitis.',
      ],
      dibujo: {
        tipo: 'comparar',
        columnas: ['', 'HNF', 'Adenoma'],
        filas: [
          ['Cápsula', 'No', 'Sí, con realce tardío'],
          ['Cicatriz central', 'Sí', 'No'],
          ['Anticonceptivos', 'Relación no clara', 'Relación fuerte'],
          ['Sangrado y cáncer', 'Excepcional', 'Sí'],
          ['Biopsia', 'No se aconseja', 'Puede tipificarlo'],
          ['Conducta', 'Observar', 'Resecar si criterios'],
        ],
        pie: 'HNF frente a adenoma: el diagnóstico diferencial que más se pregunta.',
      },
    },
  ],
  tarjetas: [
    { a: '¿Cuál es el tumor hepático benigno más frecuente?', r: 'El hemangioma cavernoso, de origen mesenquimal; casi siempre asintomático y hallado por casualidad.' },
    { a: '¿Desde qué tamaño es gigante un hemangioma, según la clase?', r: 'Por encima de 7 cm.' },
    { a: '¿Qué es el síndrome de Kasabach-Merritt?', r: 'Hemangioma gigante con coagulopatía de consumo: trombopenia, fibrinógeno bajo y hemólisis; puede evolucionar a coagulación intravascular diseminada.' },
    { a: '¿Cómo capta el hemangioma en la TC con contraste?', r: 'De forma periférica y nodular, progresando hacia el centro (centrípeta) hasta rellenar la lesión.' },
    { a: '¿Cuál es el hallazgo típico de la hiperplasia nodular focal?', r: 'Cicatriz central con tabiques fibrosos radiales y arterias distróficas, en una lesión sin cápsula.' },
    { a: '¿Por qué no se aconseja biopsiar la hiperplasia nodular focal?', r: 'Porque la biopsia no la distingue bien del hepatocarcinoma bien diferenciado o fibrolamelar.' },
    { a: '¿Perfil típico del adenoma hepatocelular?', r: 'Mujer joven que toma anticonceptivos orales. En varones: anabolizantes, obesidad, alcohol o glucogenosis.' },
    { a: '¿Qué subtipo de adenoma tiene más riesgo de malignizar?', r: 'El de β-catenina activada.' },
    { a: '¿Cuándo se opera un adenoma hepatocelular?', r: 'Síntomas, más de 5 cm, crecimiento de más de 1 cm, varón, glucogenosis o anticonceptivos mantenidos.' },
    { a: '¿Qué se hace primero ante un adenoma que sangra?', r: 'Embolización arterial; la cirugía se plantea después.' },
    { a: '¿Complicación más frecuente del quiste hepático simple?', r: 'La hemorragia intraquística: dolor brusco y aumento de tamaño del quiste.' },
    { a: '¿Qué es el síndrome de Caroli?', r: 'Dilatación quística congénita de los conductos biliares intrahepáticos con fibrosis hepática congénita; da colangitis, litiasis y riesgo de colangiocarcinoma.' },
  ],
  preguntas: [
    {
      id: 'tumores-hepaticos-benignos-1',
      enunciado: 'Mujer de 38 años, asintomática y con analítica normal, en la que una ecografía descubre una lesión hepática de 4 cm. En la TC la lesión capta contraste de forma periférica y nodular, y en fases tardías se rellena hacia el centro. ¿Qué haces?',
      opciones: [
        'Seguimiento, sin pruebas invasivas',
        'Biopsia percutánea para confirmar el diagnóstico',
        'Resección hepática por el riesgo de rotura',
        'Retirar anticonceptivos y repetir la TC',
      ],
      correcta: 0,
      explicacion: 'El relleno periférico, nodular y centrípeto es el patrón del hemangioma, y uno pequeño y asintomático solo se vigila. La biopsia no aporta nada a un diagnóstico que ya da la imagen y, en una lesión vascular, añade riesgo de sangrado. La resección se reserva a síntomas, duda diagnóstica o complicaciones; la rotura es rara. Retirar los anticonceptivos es la conducta del adenoma, cuyo patrón es hipervascular arterial con cápsula, no un relleno centrípeto.',
    },
    {
      id: 'tumores-hepaticos-benignos-2',
      enunciado: 'Paciente con un hemangioma hepático de 12 cm que ingresa por dolor. La analítica muestra plaquetas muy bajas, fibrinógeno bajo y datos de hemólisis. ¿Qué complicación presenta?',
      opciones: [
        'Rotura espontánea con hemoperitoneo',
        'Síndrome de Kasabach-Merritt',
        'Hiperesplenismo por hipertensión portal',
        'Transformación maligna a angiosarcoma',
      ],
      correcta: 1,
      explicacion: 'Hemangioma gigante más coagulopatía de consumo (trombopenia, hipofibrinogenemia, hemólisis) es el síndrome de Kasabach-Merritt, que puede progresar a coagulación intravascular diseminada. La rotura daría dolor brusco con anemia e inestabilidad, no este perfil de consumo de factores. El hiperesplenismo da trombopenia, pero no hemólisis ni fibrinógeno bajo, y exige una hipertensión portal que aquí no existe. El hemangioma no se considera una lesión premaligna: la clase no recoge su malignización.',
    },
    {
      id: 'tumores-hepaticos-benignos-3',
      enunciado: 'Mujer de 44 años que no toma anticonceptivos, con una lesión hepática incidental de 5 cm. En la TC es homogénea e hiperdensa en fase arterial, isodensa en fase portal y tiene una cicatriz central; en la RM la cicatriz es hiperintensa en T2. ¿Qué haces?',
      opciones: [
        'Biopsia para descartar un hepatocarcinoma',
        'Resección, porque mide 5 cm',
        'Tratamiento conservador, sin biopsia',
        'Embolización arterial preventiva',
      ],
      correcta: 2,
      explicacion: 'Es una hiperplasia nodular focal típica, y su tratamiento es conservador: crecer, complicarse o malignizar es excepcional. La biopsia no se aconseja precisamente porque no la separa bien de un hepatocarcinoma bien diferenciado o fibrolamelar. El corte de 5 cm es un criterio quirúrgico del adenoma, no de la HNF, que solo se opera si da síntomas o deja dudas. La embolización se reserva a lesiones sintomáticas; no tiene sentido «preventivo» en una lesión que no sangra.',
    },
    {
      id: 'tumores-hepaticos-benignos-4',
      enunciado: 'Mujer de 29 años que toma anticonceptivos orales desde hace 8 años. Tiene una lesión hepática única de 6 cm, hipervascular en fase arterial y con realce capsular tardío. La alfafetoproteína es normal. ¿Qué conducta corresponde?',
      opciones: [
        'Ecografía anual sin más medidas',
        'Retirar anticonceptivos y plantear la resección',
        'Trasplante hepático',
        'Radiofrecuencia percutánea como primera opción',
      ],
      correcta: 1,
      explicacion: 'Mujer joven con anticonceptivos y lesión hipervascular con cápsula: adenoma hepatocelular. Mide más de 5 cm, que es criterio de cirugía por riesgo de sangrado y de malignización, y además hay que suspender las hormonas. La ecografía anual sería válida para una lesión pequeña y estable, no para una de 6 cm. El trasplante se reserva a adenomatosis masiva o sospecha de degeneración difusa. La radiofrecuencia es una alternativa para lesiones pequeñas o múltiples, no el primer tratamiento de un adenoma único de 6 cm resecable.',
    },
    {
      id: 'tumores-hepaticos-benignos-5',
      enunciado: 'En la clasificación molecular del adenoma hepatocelular, ¿qué subtipo condiciona más la indicación quirúrgica por su riesgo de transformación maligna?',
      opciones: [
        'HNF1α inactivado',
        'Inflamatorio',
        'β-catenina activada',
        'No clasificado',
      ],
      correcta: 2,
      explicacion: 'La mutación activadora de β-catenina es el subtipo con alto riesgo de malignizar, y su presencia empuja a resecar aunque el tamaño sea menor. El HNF1α inactivado se asocia a esteatosis y tiene bajo riesgo de malignización. El inflamatorio, ligado a obesidad y esteatosis, destaca por el riesgo de hemorragia más que por el de cáncer (aunque puede llevar también la mutación de β-catenina). En el no clasificado la clase no reconoce riesgos definidos de malignización ni de hemorragia.',
    },
    {
      id: 'tumores-hepaticos-benignos-6',
      enunciado: 'Mujer de 58 años con un quiste hepático simple de 8 cm conocido y estable. Acude por dolor brusco en el hipocondrio derecho; la ecografía muestra que el quiste ha crecido y su contenido ya no es anecoico. ¿Qué es lo más probable?',
      opciones: [
        'Rotura del quiste hacia la vía biliar',
        'Infección por comunicación con el colédoco',
        'Transformación en cistoadenocarcinoma',
        'Hemorragia intraquística',
      ],
      correcta: 3,
      explicacion: 'La hemorragia intraquística es la complicación más frecuente del quiste simple y da justo esto: dolor brusco, aumento de tamaño y contenido ecogénico. La rotura a la vía biliar y la infección por comunicación con el colédoco son poco probables porque el quiste simple, por definición, no comunica con el árbol biliar. El cistoadenocarcinoma es un tumor distinto desde el principio, no la evolución habitual de un quiste simple estable, y no explica un cuadro brusco.',
    },
  ],
  fuentes: [
    'Clase: clase tumore hepaticos benignos.pdf (tema 15)',
    'Clase: Tumores Hepáticos2023-2024.pdf (clasificación de los tumores hepáticos)',
    'EASL Clinical Practice Guidelines on the management of benign liver tumours. J Hepatol 2016;65:386-398',
  ],
}

const hepatocarcinoma = {
  id: 'hepatocarcinoma',
  bloque: 'higado',
  titulo: 'Hepatocarcinoma',
  subtitulo: 'Carcinoma hepatocelular, casi siempre sobre un hígado cirrótico',
  tnm: 'higado',
  mapa: ['higado'],
  esencial: [
    'Es el tumor maligno primario del hígado más frecuente y en el 80–95 % de los casos asienta sobre cirrosis: por eso a los cirróticos se les vigila con ecografía cada 6 meses.',
    'En un cirrótico se diagnostica por imagen, sin biopsia: captación intensa en fase arterial y lavado en las fases portal y de equilibrio.',
    'El tratamiento lo deciden a la vez el tumor y el hígado (BCLC): resección, trasplante (criterios de Milán) o ablación si es precoz; quimioembolización si es intermedio; tratamiento sistémico si es avanzado.',
  ],
  secciones: [
    {
      titulo: 'Epidemiología y factores de riesgo',
      puntos: [
        'Tumor maligno <b>primario</b> más frecuente del hígado y principal causa de muerte en el cirrótico. Su incidencia mundial está aumentando.',
        'Entre el <b>80 y el 95 %</b> asienta sobre <b>cirrosis</b>. Causas: virus B (poder oncogénico propio), virus C (por la inflamación crónica), alcohol y toxinas como las aflatoxinas.',
        'Es más frecuente en Asia oriental y África subsahariana, donde domina el virus B.',
        'Se vigila a los cirróticos de cualquier causa, a portadores de virus B de alto riesgo (asiáticos, africanos, historia familiar) y a quienes están en lista de trasplante: <b>ecografía cada 6 meses</b>.',
      ],
      dibujo: {
        tipo: 'cascada',
        pasos: ['Hepatitis crónica', 'Fibrosis', 'Cirrosis', 'Nódulo displásico', 'Hepatocarcinoma'],
        pie: 'El tumor aparece al final de años de daño hepático: por eso se vigila al cirrótico.',
      },
    },
    {
      titulo: 'Clínica',
      puntos: [
        'Suele ser <b>asintomático</b>: se encuentra en la ecografía de vigilancia de un hepatópata.',
        'Cuando da síntomas, a menudo es <b>descompensación de la cirrosis</b> (ascitis, ictericia, encefalopatía) o algo inespecífico: dolor en hipocondrio derecho, pérdida de peso.',
        'Urgencia: <b>rotura espontánea</b> con hemoperitoneo (dolor brusco e hipotensión en un cirrótico). La hemorragia se controla primero con <b>embolización arterial</b>.',
      ],
    },
    {
      titulo: 'Diagnóstico y estadificación',
      puntos: [
        'Patrón típico en TC o RM dinámica: <b>hipercaptación en fase arterial</b> y <b>lavado</b> en fases portal y de equilibrio. En un cirrótico, ese patrón basta para diagnosticar <b>sin biopsia</b>.',
        'Algoritmo de la clase (AASLD): nódulo de menos de 1 cm, ecografía cada 3–6 meses; de 1 a 2 cm, dos pruebas de imagen y biopsia si no son típicas; de más de 2 cm, basta una prueba típica.',
        'Las guías actuales (EASL 2018; AASLD 2018 con <b>LI-RADS</b>) lo simplifican: desde <b>1 cm</b>, un patrón típico en <b>una</b> TC o RM multifásica es diagnóstico. LR-5 significa hepatocarcinoma seguro.',
        'La <b>alfafetoproteína</b> es poco sensible. La clase da cifras altas (más de 200–500) como diagnósticas, pero las guías actuales ya no la usan para diagnosticar, sino como dato pronóstico.',
        'La <b>biopsia</b> queda para la imagen atípica o el hígado no cirrótico; tiene falsos negativos y riesgo de sangrado y de siembra tumoral.',
        'Diagnóstico diferencial: nódulo displásico, hemangioma (captación más homogénea y duradera) y colangiocarcinoma (<b>hipovascular y muy fibroso</b>).',
      ],
      dibujo: [
        {
          tipo: 'algoritmo',
          pasos: [
            { texto: 'Cirrótico en vigilancia', detalle: 'Ecografía cada 6 meses' },
            { texto: 'Nódulo nuevo en la ecografía' },
          ],
          ramas: [
            { si: 'Menor de 1 cm', texto: 'Ecografía en 3–6 meses', detalle: 'Si crece, estudiarlo' },
            { si: 'De 1 a 2 cm', texto: 'Dos pruebas de imagen', detalle: 'Si no es típico: biopsia' },
            { si: 'Mayor de 2 cm', texto: 'Una prueba típica basta', detalle: 'Arterial + lavado = HCC' },
          ],
          pie: 'Algoritmo por tamaños de la clase. Hoy, desde 1 cm basta una TC o RM típica (LI-RADS 5).',
        },
        {
          tipo: 'escala',
          titulo: 'Child-Pugh',
          niveles: [
            { codigo: 'A', texto: '5–6 puntos: función conservada', detalle: 'Puede tolerar una resección' },
            { codigo: 'B', texto: '7–9 puntos: disfunción moderada', detalle: 'Resección muy arriesgada' },
            { codigo: 'C', texto: '10–15 puntos: disfunción grave', detalle: 'Fuera del tratamiento tumoral salvo trasplante' },
          ],
          pie: 'Suma bilirrubina, albúmina, tiempo de protrombina, ascitis y encefalopatía.',
        },
      ],
    },
    {
      titulo: 'Tratamiento: resección y trasplante',
      puntos: [
        'La elección depende de tres cosas: <b>extensión del tumor</b>, <b>función hepática</b> (Child-Pugh, bilirrubina, hipertensión portal) y <b>estado general</b>. Es la lógica del sistema BCLC.',
        '<b>Resección</b>: tumor único, bien delimitado, periférico, idealmente menor de 5 cm, en hígado Child A con bilirrubina normal y sin hipertensión portal significativa (gradiente menor de 10 mmHg).',
        'Contraindican la resección: comorbilidad grave, enfermedad avanzada, <b>invasión vascular mayor</b> y la previsión de una disfunción hepática grave tras operar.',
        'El problema de resecar es que el <b>hígado cirrótico que queda sigue siendo oncogénico</b> y aparecen tumores nuevos. El trasplante quita a la vez el tumor y la cirrosis.',
        '<b>Criterios de Milán</b> para el trasplante: tumor único de hasta 5 cm, o hasta 3 nódulos de hasta 3 cm cada uno, sin invasión vascular ni metástasis.',
        'Abordaje <b>laparoscópico o robótico</b> si el tumor es subcapsular o exofítico, está en los segmentos II, III, IVb, V o VI, mide hasta 4–5 cm y el hígado es Child A.',
      ],
      dibujo: [
        {
          tipo: 'algoritmo',
          pasos: [
            { texto: 'HCC precoz (BCLC 0–A)', detalle: 'Único, o hasta 3 nódulos de ≤3 cm' },
            { texto: '¿Hígado bueno y sin HTP?', detalle: 'Child A, bilirrubina normal, GPVH <10' },
          ],
          ramas: [
            { si: 'Sí, tumor único', texto: 'Resección', detalle: 'Ablación si es muy pequeño' },
            { si: 'No, dentro de Milán', texto: 'Trasplante', detalle: 'Ablación o TACE como puente' },
            { si: 'No operable', texto: 'Ablación percutánea', detalle: 'Tumores de menos de 3–4 cm' },
          ],
          pie: 'HTP: hipertensión portal. GPVH: gradiente de presión venosa hepática.',
        },
        {
          tipo: 'regla',
          titulo: 'Criterios de Milán: tamaño de cada nódulo',
          unidad: 'cm',
          cortes: [3, 5],
          etiquetas: ['Hasta 3 nódulos', 'Solo si es único', 'Fuera de Milán'],
          pie: 'Además: sin invasión vascular ni metástasis a distancia.',
        },
        {
          tipo: 'couinaud',
          resaltar: [2, 3, 4, 5, 6],
          pie: 'Segmentos II, III, IVb, V y VI: los más accesibles por laparoscopia.',
        },
      ],
    },
    {
      titulo: 'Tratamiento locorregional y sistémico',
      puntos: [
        '<b>Ablación</b> percutánea (radiofrecuencia, microondas): destruye el tumor con calor (más de 60 °C). Indicada en tumores de menos de 3–4 cm no operables, Child A–B, recidivas o como puente al trasplante.',
        'Contraindicaciones de la radiofrecuencia (clase): tumor subcapsular, <b>trombosis portal</b>, enfermedad extrahepática, coagulopatía y <b>plaquetas por debajo de 40.000</b>.',
        '<b>Quimioembolización (TACE)</b>: quimioterapia y partículas por la arteria hepática. Funciona porque el tumor vive de la arteria y el hígado sano de la porta. Es el tratamiento del estadio intermedio.',
        '<b>Radioembolización (TARE)</b> con microesferas de <b>itrio-90 (Y-90)</b> por vía arterial. La diapositiva escribe «I90»: es una errata, el isótopo es el itrio-90.',
        '<b>Tratamiento sistémico</b> en el estadio avanzado: hoy inmunoterapia combinada (por ejemplo, atezolizumab con bevacizumab) o inhibidores de tirosina cinasa como sorafenib. En el terminal, solo tratamiento de soporte.',
      ],
      dibujo: {
        tipo: 'escala',
        titulo: 'Estadificación BCLC',
        niveles: [
          { codigo: '0', texto: 'Muy precoz: único de ≤2 cm', detalle: 'PS 0, Child A → ablación o resección' },
          { codigo: 'A', texto: 'Precoz: único o hasta 3 de ≤3 cm', detalle: 'Resección, trasplante o ablación' },
          { codigo: 'B', texto: 'Intermedio: multinodular', detalle: 'PS 0, sin invasión vascular → TACE' },
          { codigo: 'C', texto: 'Avanzado: invasión vascular o M1', detalle: 'PS 0–2 → tratamiento sistémico' },
          { codigo: 'D', texto: 'Terminal: PS 3–4 o hígado muy malo', detalle: 'Tratamiento de soporte' },
        ],
        pie: 'BCLC: estadio tumoral + función hepática + estado general (PS).',
      },
    },
    {
      titulo: 'Pronóstico y seguimiento',
      puntos: [
        'Factores pronósticos tras el trasplante (clase): <b>grado histológico</b>, <b>satelitosis</b> e <b>invasión vascular</b>.',
        'Dentro de los criterios de Milán, la clase cifra la supervivencia tras el trasplante en un 75–85 % a los 4 años.',
        'La clase estima que solo un 10–50 % de los pacientes son candidatos a tratamiento: por eso importa tanto vigilar al cirrótico y encontrar tumores pequeños.',
        'Tras resecar o ablacionar, el hígado cirrótico sigue generando tumores: el seguimiento con imagen continúa de forma indefinida.',
      ],
    },
    {
      titulo: 'Para el examen',
      puntos: [
        'HCC = <b>capta en arterial y lava</b>; colangiocarcinoma = hipovascular y fibroso; hemangioma = relleno centrípeto.',
        'En un cirrótico, un patrón típico <b>no necesita biopsia</b>. La biopsia se guarda para la imagen atípica.',
        'Milán: <b>uno de hasta 5 cm o hasta tres de hasta 3 cm</b>, sin invasión vascular ni metástasis. Con dos nódulos, cada uno debe medir 3 cm o menos.',
        'La clase divide el estadio A en A1–A4 por bilirrubina y gradiente portal (A1 resección; A2 resección o trasplante; A3 y A4 trasplante). Es la versión antigua del BCLC; las guías actuales ya no la usan.',
        'La clase lo resume así: es el tumor sólido por excelencia que se trata con trasplante, porque quita a la vez el tumor y el hígado enfermo que lo origina.',
        'Radioembolización = <b>itrio-90 (Y-90)</b>, no «I90».',
      ],
    },
  ],
  tarjetas: [
    { a: '¿Sobre qué hígado asienta el hepatocarcinoma?', r: 'En el 80–95 % de los casos, sobre un hígado cirrótico.' },
    { a: '¿Cómo se vigila al cirrótico para detectar un hepatocarcinoma?', r: 'Con ecografía abdominal cada 6 meses.' },
    { a: '¿Patrón de imagen típico del hepatocarcinoma?', r: 'Captación intensa en fase arterial y lavado en las fases portal y de equilibrio.' },
    { a: '¿Hace falta biopsia en un cirrótico con patrón típico?', r: 'No: la imagen típica es diagnóstica. La biopsia se reserva para lesiones atípicas.' },
    { a: '¿Qué significa LI-RADS 5?', r: 'Hepatocarcinoma seguro por imagen en un paciente de riesgo, sin necesidad de biopsia.' },
    { a: '¿Cuáles son los criterios de Milán?', r: 'Tumor único de hasta 5 cm, o hasta 3 nódulos de hasta 3 cm, sin invasión vascular ni metástasis.' },
    { a: '¿Candidato ideal a resección de un hepatocarcinoma?', r: 'Tumor único en hígado Child A, con bilirrubina normal y sin hipertensión portal significativa.' },
    { a: '¿Tratamiento del estadio BCLC B (intermedio)?', r: 'Quimioembolización transarterial (TACE).' },
    { a: '¿Tratamiento del estadio BCLC C (avanzado)?', r: 'Sistémico: inmunoterapia combinada, como atezolizumab-bevacizumab, o inhibidores de tirosina cinasa como sorafenib.' },
    { a: '¿Qué isótopo usa la radioembolización (TARE)?', r: 'Itrio-90 (Y-90). La diapositiva dice «I90»: es una errata.' },
    { a: '¿Qué datos contraindican la radiofrecuencia, según la clase?', r: 'Tumor subcapsular, trombosis portal, enfermedad extrahepática, coagulopatía y plaquetas por debajo de 40.000.' },
    { a: '¿Primer paso ante un hepatocarcinoma roto con hemoperitoneo?', r: 'Estabilizar y controlar la hemorragia con embolización arterial; la resección, si procede, después.' },
  ],
  preguntas: [
    {
      id: 'hepatocarcinoma-1',
      enunciado: 'Varón de 62 años con cirrosis por virus C, Child-Pugh A, en vigilancia semestral. La ecografía muestra un nódulo nuevo de 3 cm; la TC dinámica, captación intensa en fase arterial y lavado en fases portal y de equilibrio. ¿Qué haces ahora?',
      opciones: [
        'Biopsia percutánea antes de tratar',
        'Estudio de extensión: el diagnóstico está hecho',
        'Repetir la ecografía en 3 meses',
        'Pedir alfafetoproteína y biopsiar si es normal',
      ],
      correcta: 1,
      explicacion: 'En un cirrótico, un nódulo de más de 1 cm con hipercaptación arterial y lavado es hepatocarcinoma por imagen: toca estadificar. La biopsia se reserva a lesiones con imagen atípica y añade riesgo de sangrado y de siembra. Repetir la ecografía es la conducta de los nódulos menores de 1 cm, no de uno de 3 cm ya caracterizado. La alfafetoproteína es poco sensible y una cifra normal no descarta el tumor, así que no puede decidir la biopsia.',
    },
    {
      id: 'hepatocarcinoma-2',
      enunciado: 'Paciente cirrótico con tres nódulos de hepatocarcinoma de 2,5, 2 y 1,5 cm, sin invasión vascular ni enfermedad extrahepática, valorado para trasplante. ¿Cumple los criterios de Milán?',
      opciones: [
        'Sí: hasta 3 nódulos, ninguno de más de 3 cm',
        'No: tener más de un nódulo lo excluye',
        'No: la suma de diámetros pasa de 5 cm',
        'Solo si la alfafetoproteína es normal',
      ],
      correcta: 0,
      explicacion: 'Milán admite un tumor único de hasta 5 cm o hasta tres nódulos de hasta 3 cm cada uno, sin invasión vascular ni metástasis: este paciente está dentro. La multinodularidad no excluye por sí misma; solo obliga a aplicar el límite de 3 cm a cada nódulo. Los criterios no suman diámetros: valoran el número de nódulos y el tamaño de cada uno por separado. La alfafetoproteína no forma parte de los criterios de Milán tal como los da la clase.',
    },
    {
      id: 'hepatocarcinoma-3',
      enunciado: 'Varón de 58 años con cirrosis Child A, bilirrubina normal, sin varices ni hipertensión portal significativa y buen estado general. Tiene un hepatocarcinoma único de 3,5 cm, periférico, en el segmento VI, sin invasión vascular. ¿Tratamiento de elección?',
      opciones: [
        'Quimioembolización transarterial',
        'Trasplante hepático como primera opción',
        'Tratamiento sistémico con inmunoterapia',
        'Resección hepática',
      ],
      correcta: 3,
      explicacion: 'Tumor único, periférico, en un hígado Child A con bilirrubina normal y sin hipertensión portal: es el candidato ideal a resección, que además puede hacerse por laparoscopia en el segmento VI. La quimioembolización es el tratamiento del estadio intermedio multinodular, no de un tumor único resecable. El trasplante es una opción dentro de Milán, pero se reserva para cuando el hígado no permite resecar con seguridad. La inmunoterapia es para el estadio avanzado.',
    },
    {
      id: 'hepatocarcinoma-4',
      enunciado: 'Mujer de 66 años con cirrosis Child A y buen estado general. La TC muestra cinco nódulos de hepatocarcinoma repartidos por ambos lóbulos, sin invasión vascular ni enfermedad extrahepática. ¿Qué tratamiento corresponde?',
      opciones: [
        'Quimioembolización transarterial (TACE)',
        'Resección de todos los nódulos',
        'Trasplante hepático',
        'Tratamiento sistémico de primera línea',
      ],
      correcta: 0,
      explicacion: 'Multinodular, sin invasión vascular ni metástasis, con buena función y buen estado: estadio intermedio (BCLC B), cuyo tratamiento es la TACE. Resecar cinco nódulos bilobares en un cirrótico dejaría poco hígado y no evita los tumores nuevos. El trasplante queda fuera porque cinco nódulos superan los criterios de Milán (máximo tres). El tratamiento sistémico se reserva al estadio avanzado, con invasión vascular o enfermedad extrahepática, o a la progresión tras TACE.',
    },
    {
      id: 'hepatocarcinoma-5',
      enunciado: 'Varón cirrótico Child B con un hepatocarcinoma de 2,5 cm en el segmento VIII, no candidato a resección. Se plantea radiofrecuencia percutánea. La analítica muestra 30.000 plaquetas. ¿Qué dato contraindica la técnica?',
      opciones: [
        'La función hepática Child-Pugh B',
        'El tamaño tumoral de 2,5 cm',
        'La cifra de 30.000 plaquetas',
        'No ser candidato a resección',
      ],
      correcta: 2,
      explicacion: 'La clase pone como contraindicación una plaquetopenia por debajo de 40.000, por el riesgo de sangrado al puncionar. El Child B está expresamente aceptado para la radiofrecuencia, y es justo la mala función la que aleja de la resección. Un tumor de 2,5 cm está dentro del rango indicado, que llega a 3–4 cm. No ser candidato a cirugía no la contraindica: es precisamente una de sus indicaciones.',
    },
    {
      id: 'hepatocarcinoma-6',
      enunciado: 'Varón de 65 años con cirrosis que llega a urgencias con dolor abdominal brusco, palidez e hipotensión. La TC muestra hemoperitoneo y una lesión subcapsular de 6 cm en el segmento VI. Tras reanimarlo, ¿cuál es el primer paso para controlar la hemorragia?',
      opciones: [
        'Hepatectomía derecha urgente',
        'Embolización arterial urgente',
        'Radiofrecuencia urgente de la lesión',
        'Paracentesis evacuadora y observación',
      ],
      correcta: 1,
      explicacion: 'Es una rotura espontánea de hepatocarcinoma; la hemorragia se controla primero con embolización arterial, menos agresiva que operar a un cirrótico en shock. Una hepatectomía urgente en un hígado enfermo e inestable tiene una mortalidad muy alta; la resección, si procede, se plantea en frío. La radiofrecuencia no es una técnica de hemostasia urgente y la lesión subcapsular figura entre sus contraindicaciones. Evacuar el hemoperitoneo y observar no detiene el sangrado.',
    },
    {
      id: 'hepatocarcinoma-7',
      enunciado: 'En la radioembolización transarterial (TARE) del hepatocarcinoma, ¿qué isótopo llevan las microesferas que se inyectan por la arteria hepática?',
      opciones: [
        'Yodo-131',
        'Iridio-192',
        'Itrio-90',
        'Tecnecio-99m',
      ],
      correcta: 2,
      explicacion: 'Las microesferas de la radioembolización llevan itrio-90 (Y-90), un emisor beta de corto alcance; la diapositiva escribe «I90», que es una errata. El yodo-131 se usa en patología tiroidea, no en la radioembolización hepática. El iridio-192 es la fuente de la braquiterapia que la clase menciona en el colangiocarcinoma, una técnica distinta. El tecnecio-99m es un trazador diagnóstico de gammagrafía, no un tratamiento.',
    },
  ],
  fuentes: [
    'Clase: Tumores Hepáticos2023-2024.pdf (tema 16)',
    'Clase: 13.- Anatomia hepática.pdf (segmentos de Couinaud)',
    'Reig M et al. BCLC strategy for prognosis prediction and treatment recommendation: the 2022 update. J Hepatol 2022',
    'EASL Clinical Practice Guidelines: management of hepatocellular carcinoma. J Hepatol 2018',
    'Mazzaferro V et al. N Engl J Med 1996 (criterios de Milán)',
    'AJCC Cancer Staging Manual, 8.ª ed. (2017)',
  ],
}

const metastasisHepaticas = {
  id: 'metastasis-hepaticas',
  bloque: 'higado',
  titulo: 'Metástasis hepáticas',
  subtitulo: 'Sobre todo de cáncer colorrectal: quitarlas todas y dejar hígado suficiente',
  tnm: null,
  mapa: ['higado', 'colon', 'recto'],
  esencial: [
    'Las metástasis colorrectales son las que más se benefician de la cirugía: resecarlas todas es el único tratamiento con posibilidad de curación.',
    'Son resecables si se pueden quitar todas con margen libre dejando un remanente viable: según la clase, más del 20 % del volumen hepático, con dos segmentos contiguos bien irrigados y drenados.',
    'Si el remanente no basta, se hace crecer (embolización portal, cirugía en dos tiempos o ALPPS), y la quimioterapia puede volver resecables metástasis que no lo eran.',
  ],
  secciones: [
    {
      titulo: 'Epidemiología',
      puntos: [
        'El hígado recibe toda la sangre <b>portal</b> del intestino, así que es el primer filtro para las células tumorales del tubo digestivo.',
        'Origen más habitual: <b>colorrectal</b> (la clase le atribuye un 30 % de las metástasis hepáticas); también tumores <b>neuroendocrinos</b>, mama y estómago.',
        'Pueden ser <b>sincrónicas</b> (presentes al diagnosticar el tumor primario) o <b>metacrónicas</b> (aparecen después).',
        'De las metástasis colorrectales sincrónicas, solo un <b>10–20 %</b> son resecables de entrada; el 80–90 % no lo son al diagnóstico (clase).',
      ],
      dibujo: {
        tipo: 'mapa',
        resaltar: ['colon', 'recto', 'higado'],
        pie: 'La sangre venosa del colon llega al hígado por la vena porta.',
      },
    },
    {
      titulo: 'Biología y clínica',
      puntos: [
        'Las <b>células tumorales circulantes</b> llegan al hígado por la porta y anidan en un hígado «preparado» para recibirlas (nicho tumoral), como explica la clase.',
        'Suelen ser <b>asintomáticas</b>: se descubren en la estadificación o en el seguimiento del cáncer colorrectal (TC, CEA).',
        'Solo cuando son muy extensas dan dolor, hepatomegalia, ictericia o insuficiencia hepática.',
      ],
      dibujo: {
        tipo: 'cascada',
        pasos: ['Tumor primario', 'Células circulantes', 'Vena porta', 'Nicho en el hígado', 'Metástasis'],
        pie: 'Cómo llega al hígado un cáncer colorrectal.',
      },
    },
    {
      titulo: 'Diagnóstico y resecabilidad',
      puntos: [
        'Antes de operar hay que <b>controlar el tumor primario</b> y <b>descartar enfermedad fuera del hígado</b> (TC toracoabdominal; PET en casos dudosos).',
        'Hay que <b>contar el número real</b> de metástasis (la RM hepática es la mejor), sobre todo tras la quimioterapia, cuando algunas se ven peor.',
        'Requisitos para resecar: quitar <b>todas</b> las lesiones con <b>margen libre (R0)</b> y dejar un <b>remanente viable</b>.',
        'Remanente viable (clase): <b>más del 20 % del volumen</b> hepático inicial, con <b>dos segmentos contiguos</b>, buen flujo portal y arterial, drenaje venoso y drenaje biliar. Si la quimioterapia o la cirrosis han dañado el hígado, hace falta más.',
        'La <b>volumetría</b> por TC y la <b>hepatectomía virtual</b> en 3D calculan cuánto hígado quedará antes de entrar en quirófano.',
      ],
      dibujo: [
        {
          tipo: 'algoritmo',
          pasos: [
            { texto: 'Metástasis colorrectales', detalle: 'Primario controlado, nada fuera del hígado' },
            { texto: '¿Se pueden quitar todas R0?' },
            { texto: '¿Remanente de más del 20 %?', detalle: 'Dos segmentos contiguos bien irrigados' },
          ],
          ramas: [
            { si: 'Sí', texto: 'Hepatectomía', detalle: 'Valorar quimioterapia asociada' },
            { si: 'Remanente escaso', texto: 'Hacer crecer el remanente', detalle: 'Embolización portal, 2 tiempos' },
            { si: 'No resecables', texto: 'Quimioterapia', detalle: 'Reevaluar: puede convertir' },
          ],
        },
        {
          tipo: 'escala',
          titulo: 'Volumen del remanente (hígado sano)',
          niveles: [
            { codigo: '<20 %', texto: 'Remanente insuficiente', detalle: 'Riesgo de insuficiencia hepática' },
            { codigo: '>20 %', texto: 'Remanente suficiente', detalle: 'Más margen si hay daño por quimio o cirrosis' },
          ],
          pie: 'Cifra de la clase para un hígado sano.',
        },
      ],
    },
    {
      titulo: 'Tratamiento',
      puntos: [
        'La <b>hepatectomía</b> es el único tratamiento potencialmente curativo. Puede ser anatómica (por segmentos de Couinaud) o no anatómica (resección con margen alrededor de la lesión).',
        'El tipo de hepatectomía depende de la <b>topografía</b> (número, distribución, relación con los vasos), del <b>volumen residual</b> y de la <b>función hepática</b>.',
        '<b>Embolización portal</b>: se ocluye la rama portal del lado que se va a quitar; el lado contrario crece en unas semanas y el remanente aumenta.',
        '<b>Cirugía en dos tiempos</b>: primero se limpian las metástasis del lado que quedará; cuando ese lado ha crecido, se quita el resto.',
        '<b>ALPPS</b>: ligadura portal y partición del hígado en una primera cirugía, que provoca una hipertrofia muy rápida; la resección se completa en una segunda cirugía poco después.',
        'La <b>quimioterapia neoadyuvante</b> puede convertir en resecables metástasis inicialmente irresecables.',
      ],
      dibujo: [
        {
          tipo: 'couinaud',
          resaltar: [5, 6, 7, 8],
          pie: 'Hepatectomía derecha (V–VIII): queda el hígado izquierdo (II–IV), que a veces se queda corto.',
        },
        {
          tipo: 'cascada',
          pasos: ['Limpiar hígado izquierdo', 'Embolizar porta derecha', 'Hipertrofia del remanente', 'Hepatectomía derecha'],
          pie: 'Cirugía en dos tiempos para metástasis bilobares.',
        },
      ],
    },
    {
      titulo: 'Pronóstico y seguimiento',
      puntos: [
        'La resección completa ofrece una posibilidad real de curación y una supervivencia claramente mejor que la de los pacientes que no se pueden operar.',
        'Las recidivas hepáticas son frecuentes; si vuelven a ser resecables, se pueden operar de nuevo.',
        'La quimioterapia prolongada daña el hígado (esteatohepatitis con irinotecán, lesión sinusoidal con oxaliplatino) y reduce su reserva: hay que tenerlo en cuenta al calcular el remanente.',
        'Las metástasis de tumores <b>neuroendocrinos</b> también se resecan cuando es posible; en las de otros orígenes la cirugía es excepcional y se decide caso a caso.',
      ],
    },
    {
      titulo: 'Para el examen',
      puntos: [
        'Resecable = <b>todo R0 + remanente suficiente</b>. Si falla el volumen no se renuncia: se hace crecer el remanente.',
        'Remanente mínimo en hígado sano según la clase: <b>más del 20 %</b> del volumen inicial, con dos segmentos contiguos bien irrigados y drenados.',
        'Tres técnicas para aumentar la resecabilidad: <b>embolización portal</b>, <b>cirugía en dos tiempos</b> y <b>ALPPS</b>.',
        'El número de metástasis o que sean bilobares no contraindica por sí solo: lo que manda es poder quitarlas todas y dejar hígado.',
      ],
      dibujo: {
        tipo: 'comparar',
        columnas: ['', 'Embolización portal', 'Dos tiempos', 'ALPPS'],
        filas: [
          ['Qué se hace', 'Ocluir la porta del lado a quitar', 'Limpiar el remanente, luego resecar', 'Ligar la porta y partir el hígado'],
          ['Hipertrofia', 'En semanas', 'Entre las dos cirugías', 'Muy rápida'],
          ['Cirugías', 'Una, tras embolizar', 'Dos', 'Dos, muy seguidas'],
        ],
        pie: 'Técnicas para operar metástasis con remanente escaso.',
      },
    },
  ],
  tarjetas: [
    { a: '¿Por qué el cáncer colorrectal metastatiza en el hígado?', r: 'Porque la sangre venosa del colon drena por la vena porta al hígado, que actúa como primer filtro.' },
    { a: '¿Qué proporción de metástasis colorrectales sincrónicas es resecable al diagnóstico?', r: 'Un 10–20 %, según la clase.' },
    { a: '¿Dos condiciones para que unas metástasis sean resecables?', r: 'Quitar todas las lesiones con margen libre (R0) y dejar un remanente hepático viable.' },
    { a: '¿Remanente mínimo en un hígado sano, según la clase?', r: 'Más del 20 % del volumen inicial, con dos segmentos contiguos con flujo portal, arterial y drenaje adecuados.' },
    { a: '¿Qué hace la embolización portal?', r: 'Ocluye la porta del lado que se va a resecar para que el lado remanente crezca antes de operar.' },
    { a: '¿Qué es la ALPPS?', r: 'Ligadura portal más partición hepática en una primera cirugía; hipertrofia muy rápida y resección en una segunda cirugía cercana.' },
    { a: '¿En qué consiste la cirugía en dos tiempos?', r: 'Se limpian primero las metástasis del futuro remanente; cuando este crece, se reseca el hígado enfermo restante.' },
    { a: '¿Qué aporta la quimioterapia en metástasis irresecables?', r: 'Puede reducirlas y convertirlas en resecables; hay que reevaluar tras el tratamiento.' },
    { a: '¿Qué se comprueba antes de operar unas metástasis colorrectales?', r: 'Primario controlado, ausencia de enfermedad extrahepática, número real de lesiones, volumetría y función hepática.' },
    { a: '¿Contraindica operar tener metástasis en ambos lóbulos?', r: 'No por sí mismo: lo decisivo es poder quitarlas todas y dejar un remanente suficiente.' },
  ],
  preguntas: [
    {
      id: 'metastasis-hepaticas-1',
      enunciado: 'Mujer de 60 años operada de un adenocarcinoma de sigma. Tiene cuatro metástasis confinadas al lóbulo derecho, sin enfermedad extrahepática, y se plantea una hepatectomía derecha ampliada. La volumetría estima un remanente del 18 %. ¿Qué haces?',
      opciones: [
        'Hepatectomía derecha ampliada inmediata',
        'Embolización portal derecha y operar después',
        'Desestimar la cirugía y dar quimioterapia paliativa',
        'Trasplante hepático',
      ],
      correcta: 1,
      explicacion: 'Las lesiones son técnicamente resecables, pero un remanente del 18 % no llega al 20 % que pide la clase: hay que hacerlo crecer embolizando la porta del lado que se va a quitar y operar cuando la volumetría lo permita. Operar ya expone a una insuficiencia hepática postoperatoria. Desestimar la cirugía renuncia a la única opción curativa cuando el problema es solo de volumen. El trasplante no es el tratamiento estándar de las metástasis colorrectales.',
    },
    {
      id: 'metastasis-hepaticas-2',
      enunciado: 'Según la clase, ¿qué debe cumplir el hígado que queda tras resecar unas metástasis colorrectales en un hígado sano?',
      opciones: [
        'Más del 50 % del volumen hepático inicial',
        'Un solo segmento, si conserva flujo portal',
        'Más del 20 %, con dos segmentos contiguos bien irrigados y drenados',
        'Cualquier volumen, si la bilirrubina es normal',
      ],
      correcta: 2,
      explicacion: 'La clase pide preservar más del 20 % del volumen inicial, en dos segmentos contiguos con flujo portal y arterial y con drenaje biliar adecuados. Exigir el 50 % dejaría sin cirugía a muchos pacientes resecables; en hígado sano no hace falta tanto. Un único segmento no basta aunque tenga buena porta. La bilirrubina previa no garantiza nada: lo que falla tras una resección excesiva es el volumen del hígado que queda.',
    },
    {
      id: 'metastasis-hepaticas-3',
      enunciado: 'Varón de 55 años con seis metástasis colorrectales en ambos lóbulos, sin enfermedad extrahepática. Todas se pueden quitar con margen libre dejando un remanente del 40 % bien vascularizado. ¿Cómo valoras el caso?',
      opciones: [
        'Resecable: lo que cuenta es quitar todo y dejar hígado',
        'Irresecable por tener más de cuatro metástasis',
        'Irresecable por afectar a los dos lóbulos',
        'Solo admite quimioterapia paliativa',
      ],
      correcta: 0,
      explicacion: 'La resecabilidad la definen dos condiciones: quitar todas las lesiones con margen libre y dejar un remanente viable, y este caso cumple las dos. Un número máximo de metástasis no forma parte de los criterios que da la clase. Que sean bilobares obliga a planificar mejor, a veces con cirugía en dos tiempos, pero no las vuelve irresecables. Limitarse a la quimioterapia paliativa privaría al paciente de la única opción curativa.',
    },
    {
      id: 'metastasis-hepaticas-4',
      enunciado: 'Paciente con cáncer de colon y tres metástasis hepáticas técnicamente resecables. ¿Cuál de estos hallazgos contraindica la hepatectomía?',
      opciones: [
        'Que el tumor de colon aún no esté operado',
        'Metástasis pulmonares múltiples irresecables',
        'Haber recibido quimioterapia previa',
        'Que las metástasis sean sincrónicas',
      ],
      correcta: 1,
      explicacion: 'Antes de resecar hay que descartar enfermedad fuera del hígado; unas metástasis pulmonares múltiples e irresecables quitan el sentido curativo a la hepatectomía. Un primario aún en su sitio no contraindica: se puede operar antes, a la vez o después, siempre que esté controlado. La quimioterapia previa obliga a vigilar el daño hepático y a contar bien las lesiones, pero no prohíbe operar. Ser sincrónicas es frecuente y tampoco excluye la cirugía.',
    },
    {
      id: 'metastasis-hepaticas-5',
      enunciado: 'Paciente con una metástasis grande en el lóbulo derecho y dos pequeñas en el izquierdo. Si se hiciera una hepatectomía derecha, el remanente izquierdo sería insuficiente. ¿Qué estrategia es la adecuada?',
      opciones: [
        'Trasplante hepático',
        'Quimioterapia exclusiva por ser bilobares',
        'Hepatectomía derecha directa y vigilar las izquierdas',
        'Limpiar el izquierdo, embolizar la porta derecha y resecar después',
      ],
      correcta: 3,
      explicacion: 'Es la cirugía en dos tiempos: primero se limpian las metástasis del lóbulo que quedará, luego se embolizan o ligan las ramas portales derechas para que el izquierdo crezca y, por último, se hace la hepatectomía derecha. El trasplante no es el tratamiento estándar de las metástasis colorrectales. Que sean bilobares no obliga a renunciar a la cirugía. Resecar solo el lado derecho dejaría enfermedad conocida y, además, un remanente insuficiente.',
    },
    {
      id: 'metastasis-hepaticas-6',
      enunciado: '¿En qué consiste la ALPPS como técnica para aumentar la resecabilidad de las metástasis hepáticas?',
      opciones: [
        'Embolizar la porta por vía percutánea y operar semanas después',
        'Ligar la porta y partir el hígado, y completar la resección poco después',
        'Resecar las metástasis y añadir radiofrecuencia en el mismo acto',
        'Dar quimioterapia intraarterial hasta reducir las lesiones',
      ],
      correcta: 1,
      explicacion: 'La ALPPS combina, en una primera cirugía, la ligadura portal del lado enfermo con la partición del parénquima, lo que provoca una hipertrofia muy rápida del remanente; la resección se completa en una segunda cirugía poco después. Embolizar la porta y esperar semanas es la embolización portal clásica. Resecar con radiofrecuencia asociada es otra estrategia, que no busca aumentar el volumen. La quimioterapia intraarterial puede reducir lesiones, pero no hace crecer el hígado que queda.',
    },
  ],
  fuentes: [
    'Clase: Tumores Hepáticos2023-2024.pdf (tema 16, tumores metastásicos)',
    'Clase: 13.- Anatomia hepática.pdf (volumetría y embolización portal)',
  ],
}

const colangiocarcinomaIntrahepatico = {
  id: 'colangiocarcinoma-intrahepatico',
  bloque: 'biliar',
  titulo: 'Colangiocarcinoma intrahepático',
  subtitulo: 'Tumor de los conductos biliares dentro del hígado: se comporta como una masa hepática',
  tnm: 'intrahepatico',
  mapa: ['higado', 'via-biliar'],
  esencial: [
    'Nace de los conductos biliares dentro del hígado y se presenta como una masa hepática, a menudo sin ictericia; en imagen es hipovascular y fibroso, al revés que el hepatocarcinoma.',
    'Factores de riesgo: colangitis esclerosante primaria (ligada a la colitis ulcerosa), quistes de colédoco y Caroli, hepatolitiasis, parásitos hepáticos y virus B y C.',
    'El único tratamiento curativo es la hepatectomía con margen libre más linfadenectomía del hilio; si no se puede operar, quimioterapia con gemcitabina y cisplatino.',
  ],
  secciones: [
    {
      titulo: 'Epidemiología y factores de riesgo',
      puntos: [
        'El colangiocarcinoma se divide por su sitio en <b>intrahepático</b>, <b>perihiliar</b> (Klatskin) y <b>distal</b>, y el sitio decide la cirugía. El intrahepático es el segundo tumor maligno primario del hígado, tras el hepatocarcinoma.',
        'Edad típica entre 50 y 70 años, algo más en varones. Es un tumor de mal pronóstico.',
        'Anomalías congénitas: <b>enfermedad de Caroli</b> y <b>quistes de colédoco</b>.',
        'Enfermedades autoinmunes: <b>colangitis esclerosante primaria</b> (muy ligada a la colitis ulcerosa) y colangitis biliar primaria; la diapositiva usa el nombre antiguo, «cirrosis biliar primaria».',
        'Infecciones y litiasis: colangitis de repetición, <b>hepatolitiasis</b>, parásitos hepáticos (trematodos, endémicos en Asia y Sudamérica) y virus B y C. Otros: diabetes, alcohol y tabaco.',
      ],
      dibujo: {
        tipo: 'comparar',
        columnas: ['', 'Intrahepático', 'Perihiliar', 'Distal'],
        filas: [
          ['Dónde', 'Dentro del hígado', 'Confluencia biliar', 'Colédoco distal'],
          ['Debut típico', 'Masa hepática', 'Ictericia', 'Ictericia'],
          ['Cirugía', 'Hepatectomía', 'Hepatectomía + vía biliar', 'Duodenopancreatectomía'],
        ],
        pie: 'Los tres colangiocarcinomas: el sitio decide la operación.',
      },
    },
    {
      titulo: 'Clínica',
      puntos: [
        'Como crece en el parénquima sin obstruir los conductos principales, a menudo <b>no da ictericia</b> hasta fases avanzadas: puede ser un hallazgo casual o dar dolor, pérdida de peso y malestar.',
        'Si aparece ictericia, suele indicar que el tumor ya alcanza el hilio.',
        'Un paciente con colitis ulcerosa y colangitis esclerosante cuya colestasis empeora debe hacerte pensar en colangiocarcinoma.',
      ],
      dibujo: {
        tipo: 'mapa',
        resaltar: ['higado', 'via-biliar'],
        pie: 'Nace en los conductos biliares que recorren el parénquima hepático.',
      },
    },
    {
      titulo: 'Diagnóstico y estadificación',
      puntos: [
        'Pruebas (clase): ecografía, <b>TC dinámica</b>, colangio-RM, ecoendoscopia, PET-TC, ecografía intraoperatoria y los marcadores <b>CA 19-9</b> y CEA.',
        'En imagen es una masa <b>hipovascular y muy fibrosa</b>, con captación lenta y tardía; no tiene la captación arterial con lavado del hepatocarcinoma.',
        'Hay que descartar que sea una <b>metástasis de un adenocarcinoma</b> digestivo, porque la histología se parece; la biopsia ayuda cuando no se va a operar de entrada o hay dudas.',
        'TNM AJCC 8.ª: <b>T1a</b> único ≤5 cm sin invasión vascular; <b>T1b</b> único >5 cm sin invasión vascular; <b>T2</b> invasión vascular intrahepática o tumores múltiples; <b>T3</b> perfora el peritoneo visceral; <b>T4</b> invade estructuras extrahepáticas.',
        'N1 si hay ganglios regionales afectados; por eso la linfadenectomía forma parte de la cirugía.',
      ],
      dibujo: [
        {
          tipo: 'regla',
          titulo: 'Tumor único sin invasión vascular',
          unidad: 'cm',
          cortes: [5],
          etiquetas: ['T1a', 'T1b'],
          pie: 'El corte entre T1a y T1b son 5 cm (AJCC 8.ª).',
        },
        {
          tipo: 'escala',
          titulo: 'T del colangiocarcinoma intrahepático',
          niveles: [
            { codigo: 'T1', texto: 'Único, sin invasión vascular', detalle: 'T1a ≤5 cm; T1b >5 cm' },
            { codigo: 'T2', texto: 'Invasión vascular o tumores múltiples' },
            { codigo: 'T3', texto: 'Perfora el peritoneo visceral' },
            { codigo: 'T4', texto: 'Invade estructuras extrahepáticas' },
          ],
        },
      ],
    },
    {
      titulo: 'Tratamiento',
      puntos: [
        'La <b>cirugía es el único tratamiento con intención curativa</b>: hepatectomía con margen libre (R0) más <b>linfadenectomía del ligamento hepatoduodenal</b>, que tiene valor pronóstico.',
        'Se planifica como cualquier tumor hepático: volumetría, reserva funcional y carga tumoral. Si el remanente previsto es menor del <b>30–40 %</b> (cifra de la clase), embolización portal previa.',
        'Contraindican la cirugía: enfermedad <b>bilobar difusa</b>, carcinomatosis, metástasis a distancia, hepatopatía de base, remanente insuficiente que no responde a la embolización y comorbilidad grave.',
        '<b>Ablación</b> (radiofrecuencia, microondas) en lesiones de menos de 3 cm o pacientes no operables; <b>TACE y TARE (Y-90)</b> controlan el tumor y a veces lo rescatan para cirugía.',
        'Enfermedad avanzada: <b>gemcitabina + cisplatino</b> (ensayo ABC-02), hoy con inmunoterapia añadida (durvalumab, ensayo TOPAZ-1). Radioterapia (SBRT, braquiterapia con iridio-192) en casos seleccionados.',
        '<b>Trasplante</b>: indicación marginal o contraindicación; solo tumores muy pequeños (2–3 cm) en cirróticos y dentro de ensayos clínicos.',
      ],
      dibujo: [
        {
          tipo: 'algoritmo',
          pasos: [
            { texto: 'Masa hepática hipovascular', detalle: 'CA 19-9 alto; descartar metástasis' },
            { texto: 'TC/RM + PET: extensión', detalle: 'Volumetría del remanente' },
          ],
          ramas: [
            { si: 'Resecable', texto: 'Hepatectomía y ganglios', detalle: 'Linfadenectomía hepatoduodenal' },
            { si: 'Remanente escaso', texto: 'Embolización portal', detalle: 'Si <30–40 %; luego cirugía' },
            { si: 'Irresecable', texto: 'QT ± tratamiento local', detalle: 'Gem-cis + inmunoterapia; TACE' },
          ],
        },
        {
          tipo: 'couinaud',
          resaltar: [2, 3, 4],
          pie: 'Hepatectomía izquierda (II–IV) para un tumor del lóbulo izquierdo, con linfadenectomía del hilio.',
        },
      ],
    },
    {
      titulo: 'Pronóstico y seguimiento',
      puntos: [
        'Es un tumor de <b>mal pronóstico</b>: la clase da un 5 % de supervivencia a 5 años en el colangiocarcinoma sin tratamiento.',
        'Lo que más pesa en el pronóstico es lo que mide el TNM y la cirugía: margen <b>R0</b>, <b>ganglios</b>, invasión vascular y número de tumores.',
        'Tras resecarlo, hoy se suele ofrecer quimioterapia adyuvante con <b>capecitabina</b> (ensayo BILCAP).',
        'Las recidivas son frecuentes, sobre todo en el hígado: seguimiento con imagen y CA 19-9.',
      ],
    },
    {
      titulo: 'Para el examen',
      puntos: [
        'Hipovascular y fibroso = colangiocarcinoma; capta en arterial y lava = hepatocarcinoma.',
        'Linfadenectomía del ligamento hepatoduodenal <b>sí</b>: forma parte de la cirugía curativa.',
        'Remanente previsto menor del <b>30–40 %</b> → embolización portal antes de la hepatectomía (cifra de la clase para este tumor).',
        'El trasplante <b>no</b> es tratamiento estándar del intrahepático, a diferencia del hepatocarcinoma dentro de Milán.',
        'Quimioterapia de referencia en la enfermedad avanzada: <b>gemcitabina + cisplatino</b>.',
      ],
    },
  ],
  tarjetas: [
    { a: '¿Cómo se clasifica el colangiocarcinoma según su localización?', r: 'Intrahepático, perihiliar (Klatskin) y distal; cada uno con una cirugía distinta.' },
    { a: '¿Qué factor de riesgo liga la colitis ulcerosa al colangiocarcinoma?', r: 'La colangitis esclerosante primaria.' },
    { a: '¿Cómo se ve en la TC un colangiocarcinoma intrahepático?', r: 'Masa hipovascular y fibrosa con captación tardía, sin el lavado del hepatocarcinoma.' },
    { a: '¿Por qué el intrahepático suele debutar sin ictericia?', r: 'Porque crece en el parénquima sin obstruir los conductos principales hasta fases avanzadas.' },
    { a: 'T1a frente a T1b (AJCC 8.ª)', r: 'Los dos son únicos sin invasión vascular: T1a mide 5 cm o menos y T1b más de 5 cm.' },
    { a: '¿Qué es T2 en el colangiocarcinoma intrahepático?', r: 'Invasión vascular intrahepática o tumores múltiples.' },
    { a: '¿Cirugía curativa del colangiocarcinoma intrahepático?', r: 'Hepatectomía R0 más linfadenectomía del ligamento hepatoduodenal.' },
    { a: '¿Con qué remanente se emboliza la porta, según la clase?', r: 'Con un remanente previsto menor del 30–40 %.' },
    { a: '¿Quimioterapia de la enfermedad avanzada?', r: 'Gemcitabina más cisplatino; hoy se añade inmunoterapia (durvalumab).' },
    { a: '¿Es el trasplante un tratamiento estándar del intrahepático?', r: 'No: indicación marginal, solo tumores muy pequeños en cirróticos y dentro de ensayos.' },
    { a: '¿Nombre actual de la «cirrosis biliar primaria»?', r: 'Colangitis biliar primaria.' },
  ],
  preguntas: [
    {
      id: 'colangiocarcinoma-intrahepatico-1',
      enunciado: 'Paciente de 63 años sin hepatopatía, con una masa única de 6 cm en el lóbulo izquierdo biopsiada como colangiocarcinoma intrahepático. No hay enfermedad extrahepática y la función hepática y el remanente son buenos. ¿Qué tratamiento indicas?',
      opciones: [
        'Hepatectomía izquierda con linfadenectomía del hilio',
        'Hepatectomía izquierda sin linfadenectomía',
        'Trasplante hepático',
        'Radiofrecuencia percutánea',
      ],
      correcta: 0,
      explicacion: 'La cirugía es el único tratamiento curativo: hepatectomía con margen libre y linfadenectomía del ligamento hepatoduodenal, que tiene valor pronóstico. Omitir la linfadenectomía deja sin estadificar los ganglios y es una cirugía incompleta para este tumor. El trasplante es una indicación marginal, solo en tumores muy pequeños en cirróticos y dentro de ensayos. La radiofrecuencia se reserva a lesiones de menos de 3 cm o a pacientes no operables, y este no es el caso.',
    },
    {
      id: 'colangiocarcinoma-intrahepatico-2',
      enunciado: 'Colangiocarcinoma intrahepático único de 7 cm, sin invasión vascular, sin perforación del peritoneo visceral y sin invasión de estructuras vecinas. ¿Qué T le corresponde según la AJCC 8.ª?',
      opciones: [
        'T1a',
        'T2',
        'T1b',
        'T3',
      ],
      correcta: 2,
      explicacion: 'Un tumor único sin invasión vascular es T1, y el tamaño lo divide: hasta 5 cm T1a y más de 5 cm T1b; con 7 cm es T1b. T1a exigiría 5 cm o menos. T2 requiere invasión vascular intrahepática o tumores múltiples, y aquí no hay ninguna de las dos. T3 se reserva al tumor que perfora el peritoneo visceral. El tamaño solo cuenta dentro de T1: por encima, mandan la invasión vascular, la multiplicidad y las estructuras invadidas.',
    },
    {
      id: 'colangiocarcinoma-intrahepatico-3',
      enunciado: 'En el estudio de un nódulo hepático de 4 cm, la TC describe una lesión hipovascular, muy fibrosa, con captación lenta y tardía, sin la captación arterial con lavado. El CA 19-9 está elevado. ¿Qué diagnóstico es más probable?',
      opciones: [
        'Hepatocarcinoma',
        'Colangiocarcinoma intrahepático',
        'Hemangioma cavernoso',
        'Hiperplasia nodular focal',
      ],
      correcta: 1,
      explicacion: 'Hipovascular, fibroso, con captación tardía y CA 19-9 alto: es el perfil del colangiocarcinoma intrahepático. El hepatocarcinoma hace lo contrario, capta en fase arterial y lava en las fases portal y de equilibrio. El hemangioma también capta tarde, pero de forma periférica, nodular y centrípeta hasta rellenarse, sin fibrosis ni marcador elevado. La hiperplasia nodular focal es hipervascular y homogénea en fase arterial, con cicatriz central.',
    },
    {
      id: 'colangiocarcinoma-intrahepatico-4',
      enunciado: 'Varón de 60 años con un colangiocarcinoma intrahepático en el lóbulo derecho, resecable mediante hepatectomía derecha ampliada. La volumetría estima un remanente del 25 %. ¿Qué haces?',
      opciones: [
        'Hepatectomía ya, porque supera el 20 %',
        'Quimioterapia paliativa: es irresecable',
        'Trasplante hepático',
        'Embolización portal y hepatectomía después',
      ],
      correcta: 3,
      explicacion: 'Para este tumor la clase pide embolización portal si el remanente es menor del 30–40 %, porque el hígado suele estar más castigado; con un 25 %, primero se emboliza y luego se opera. El umbral del 20 % es el de las metástasis en un hígado sano y aquí no da seguridad. No es irresecable: el problema es solo de volumen y tiene solución. El trasplante no es tratamiento estándar del colangiocarcinoma intrahepático.',
    },
    {
      id: 'colangiocarcinoma-intrahepatico-5',
      enunciado: 'Paciente con colangiocarcinoma intrahepático bilobar difuso y metástasis peritoneales, con buen estado general. ¿Qué tratamiento corresponde?',
      opciones: [
        'Sorafenib',
        'Gemcitabina con cisplatino, más inmunoterapia',
        'Quimioembolización como único tratamiento',
        'Trasplante hepático',
      ],
      correcta: 1,
      explicacion: 'Enfermedad bilobar y peritoneal: no hay opción quirúrgica y el estándar es gemcitabina con cisplatino, hoy con inmunoterapia añadida. El sorafenib es un fármaco del hepatocarcinoma avanzado, no del colangiocarcinoma. La quimioembolización es un tratamiento local que no controla una carcinomatosis peritoneal. El trasplante está contraindicado con metástasis y, además, no es tratamiento estándar de este tumor.',
    },
    {
      id: 'colangiocarcinoma-intrahepatico-6',
      enunciado: 'Varón de 45 años con colitis ulcerosa de larga evolución que consulta por ictericia y prurito progresivos. ¿Qué enfermedad asociada explica su mayor riesgo de colangiocarcinoma?',
      opciones: [
        'Colangitis esclerosante primaria',
        'Hemocromatosis',
        'Infección crónica por virus D',
        'Esteatosis hepática por obesidad',
      ],
      correcta: 0,
      explicacion: 'La colangitis esclerosante primaria es el gran nexo entre la colitis ulcerosa y el colangiocarcinoma, y en ella un empeoramiento de la colestasis obliga a descartarlo. La hemocromatosis lleva a cirrosis y figura como factor de riesgo del hepatocarcinoma, no como la causa ligada a la colitis ulcerosa. El virus D no aparece entre los factores que da la clase. La esteatosis por obesidad no tiene relación con la colitis ulcerosa.',
    },
  ],
  fuentes: [
    'Clase: Tumores malignos biliares UCM alumnos.pptx (colangiocarcinoma intrahepático)',
    'Clase: Tumores Hepáticos2023-2024.pdf (colangiocarcinoma intrahepático)',
    'AJCC Cancer Staging Manual, 8.ª ed. (2017)',
    'Valle J et al. N Engl J Med 2010 (ensayo ABC-02, gemcitabina con cisplatino)',
    'Oh DY et al. NEJM Evidence 2022 (ensayo TOPAZ-1, durvalumab)',
    'Primrose JN et al. Lancet Oncol 2019 (ensayo BILCAP, capecitabina adyuvante)',
  ],
}

const colangiocarcinomaPerihiliar = {
  id: 'colangiocarcinoma-perihiliar',
  bloque: 'biliar',
  titulo: 'Colangiocarcinoma perihiliar',
  subtitulo: 'Tumor de Klatskin: la confluencia de los conductos hepáticos',
  tnm: 'perihiliar',
  mapa: ['via-biliar', 'higado'],
  esencial: [
    'Nace en la confluencia de los conductos hepáticos y debuta con ictericia obstructiva; la clasificación de Bismuth-Corlette dice hasta dónde sube por los conductos y qué lado del hígado hay que quitar.',
    'Se puede operar sin biopsia: CA 19-9 elevado que persiste tras drenar la vía biliar más una imagen compatible; la biopsia percutánea se evita por riesgo de siembra.',
    'La cirugía curativa reseca la vía biliar con una hepatectomía (casi siempre con el segmento I) y una hepaticoyeyunostomía; antes se drena el hígado que va a quedar, por vía endoscópica de entrada, y se emboliza la porta si el remanente es pequeño.',
  ],
  secciones: [
    {
      titulo: 'Epidemiología y factores de riesgo',
      puntos: [
        'Es la forma más frecuente de colangiocarcinoma. Afecta sobre todo a personas de <b>50 a 70 años</b>, algo más a varones.',
        'Factores de riesgo (clase): <b>colangitis esclerosante primaria</b> y secundaria, <b>quiste de colédoco</b>, litiasis biliar y hepatolitiasis, virus B y C, papilomatosis biliar y síndrome de Lynch.',
        'También las derivaciones biliodigestivas previas (por reflujo intestinal a la vía biliar) y carcinógenos químicos: Thorotrast (un antiguo contraste radiológico), nitrosaminas y dioxinas.',
      ],
      dibujo: {
        tipo: 'mapa',
        resaltar: ['via-biliar'],
        pie: 'Confluencia de los conductos hepáticos derecho e izquierdo, en el hilio.',
      },
    },
    {
      titulo: 'Anatomía patológica',
      puntos: [
        'Tres clasificaciones (clase): <b>Bismuth-Corlette</b> (morfológica), <b>TNM</b> (anatomopatológica) y <b>Blumgart-Jarnagin</b> (resecabilidad: extensión biliar, afectación portal y atrofia lobar).',
        'Bismuth-Corlette: <b>I</b> por debajo de la confluencia; <b>II</b> afecta a la confluencia; <b>IIIa</b> sube por el hepático derecho; <b>IIIb</b> por el izquierdo; <b>IV</b> por ambos.',
        'Tipos macroscópicos: <b>esclerosante</b> (70 %, atrapa los vasos del hilio), <b>nodular</b> (20 %) y <b>papilar</b> (10 %, el de mejor pronóstico).',
        'TNM AJCC 8.ª: T1 limitado a la pared; T2a sobrepasa la pared; T2b invade el hígado vecino; T3 ramas unilaterales de porta o arteria; T4 vasos principales o bilaterales. N1: 1–3 ganglios; N2: 4 o más.',
      ],
      dibujo: [
        {
          tipo: 'bismuth',
          pie: 'Bismuth-Corlette: hasta dónde sube el tumor por los conductos hepáticos.',
        },
        {
          tipo: 'escala',
          titulo: 'T del colangiocarcinoma perihiliar',
          niveles: [
            { codigo: 'T1', texto: 'Limitado a la pared del conducto' },
            { codigo: 'T2a', texto: 'Sobrepasa la pared hacia la grasa' },
            { codigo: 'T2b', texto: 'Invade el parénquima hepático vecino' },
            { codigo: 'T3', texto: 'Ramas unilaterales de porta o arteria' },
            { codigo: 'T4', texto: 'Porta principal o ramas bilaterales', detalle: 'O hepática común; o 2.º orden + vaso contrario' },
          ],
          pie: 'AJCC 8.ª ed.',
        },
      ],
    },
    {
      titulo: 'Clínica y diagnóstico',
      puntos: [
        '<b>Ictericia obstructiva</b> progresiva con prurito, coluria y acolia. La vesícula <b>no se palpa</b>: la obstrucción está por encima del cístico.',
        'Pruebas: ecografía (vía intrahepática dilatada con colédoco normal), <b>TC dinámica</b> (afectación vascular), <b>colangio-RM</b> (extensión biliar), ecoendoscopia y CTPH. La PET tiene valor dudoso.',
        'El diagnóstico puede hacerse <b>sin biopsia</b>: CA 19-9 elevado que <b>se mantiene tras drenar</b> la vía biliar (la colestasis lo eleva por sí sola) y una imagen dinámica compatible.',
        'La <b>biopsia percutánea o laparoscópica no se recomienda</b> por el elevado riesgo de diseminación tumoral; no hace falta histología antes de la cirugía o el trasplante.',
        'Diagnóstico diferencial: <b>síndrome de Mirizzi</b>, <b>cáncer de vesícula</b> y pseudotumor inflamatorio (benigno).',
      ],
      dibujo: {
        tipo: 'algoritmo',
        pasos: [
          { texto: 'Ictericia indolora', detalle: 'Vía intrahepática dilatada, colédoco normal' },
          { texto: 'TC dinámica + colangio-RM', detalle: 'Vasos y extensión biliar (Bismuth)' },
          { texto: 'CA 19-9 tras drenar', detalle: 'Si sigue alto + imagen típica: diagnóstico' },
          { texto: 'Sin biopsia percutánea', detalle: 'Riesgo de siembra tumoral' },
        ],
      },
    },
    {
      titulo: 'Preparación para la cirugía',
      puntos: [
        '<b>Drenaje biliar</b> del <b>hígado que va a quedar</b>, para operar sin colestasis (la clase pide bilirrubina menor de 2 mg/dl) y siempre <b>antes de la embolización portal</b>.',
        'Vía: la diapositiva prefiere la percutánea, pero el ensayo <b>DRAINAGE</b> se interrumpió antes de tiempo por <b>mayor mortalidad en el brazo percutáneo</b>. Por eso se empieza por el <b>endoscópico</b> y el percutáneo queda de rescate.',
        'Si el remanente previsto es menor del <b>30–40 %</b> en la volumetría por TC, <b>embolización portal</b> del lado que se va a resecar para que crezca el otro.',
        'Justo antes de operar se tutoriza la vía biliar del hígado remanente (clase).',
      ],
      dibujo: {
        tipo: 'cascada',
        pasos: ['Drenar el remanente', 'Bilirrubina baja', 'Embolización portal', 'Hipertrofia (volumetría)', 'Hepatectomía'],
        pie: 'El orden importa: primero se drena, después se emboliza.',
      },
    },
    {
      titulo: 'Tratamiento',
      puntos: [
        'La <b>cirugía</b> es el tratamiento de elección y el único con posibilidad de curación (la clase da hasta un 30 % de supervivencia a 5 años tras resecar).',
        'Tipos I–II: resección de la vía biliar y <b>hepaticoyeyunostomía en Y de Roux</b>, asociando hepatectomía en los esclerosantes y nodulares; en el papilar puede bastar la resección biliar.',
        'IIIa: <b>hepatectomía derecha</b> ± segmento I. IIIb: <b>hepatectomía izquierda</b> ± segmento I. IV: trisectorectomía derecha o izquierda, si es técnicamente posible, o trasplante.',
        'Se reseca el <b>segmento I (caudado)</b> porque sus conductos drenan directamente en la confluencia y el tumor se extiende por ellos. A veces hay que resecar y reconstruir la porta.',
        'Contraindicaciones (clase): extensión biliar bilateral a ramas de segundo orden, afectación unilateral con vasos contralaterales invadidos, afectación vascular bilateral, metástasis, hepatopatía de base, remanente insuficiente y comorbilidad grave.',
        '<b>Trasplante</b> (protocolo de la Clínica Mayo, con quimiorradioterapia previa) en casos irresecables muy seleccionados; la clase lo considera complejo y con resultados no reproducidos por todos los grupos.',
      ],
      dibujo: [
        {
          tipo: 'algoritmo',
          pasos: [{ texto: 'Clasificar con Bismuth', detalle: 'Colangio-RM: extensión por los conductos' }],
          ramas: [
            { si: 'Tipo I–II', texto: 'Vía biliar ± hepatectomía', detalle: 'Y hepaticoyeyunostomía' },
            { si: 'Tipo IIIa o IIIb', texto: 'Hepatectomía D o I + S1', detalle: 'El lado del conducto afectado' },
            { si: 'Tipo IV', texto: 'Trisectorectomía o THO', detalle: 'Muchos son irresecables' },
          ],
        },
        {
          tipo: 'bismuth',
          resaltar: 'IIIa',
          pie: 'IIIa: sube por el hepático derecho → hepatectomía derecha + segmento I.',
        },
        {
          tipo: 'couinaud',
          resaltar: [1, 5, 6, 7, 8],
          pie: 'Hepatectomía derecha con segmento I (caudado) para un Bismuth IIIa.',
        },
      ],
    },
    {
      titulo: 'Pronóstico y seguimiento',
      puntos: [
        'Sin tratamiento, la supervivencia a 5 años del colangiocarcinoma ronda el 5 % (clase); la resección R0 es lo que más la mejora.',
        'Tras una resección <b>R1–R2 o con ganglios positivos</b>, la clase recomienda ofrecer quimiorradioterapia. Hoy se suele dar <b>capecitabina adyuvante</b> tras la resección (ensayo BILCAP).',
        'Irresecables o con metástasis: <b>gemcitabina + cisplatino</b>, hoy con inmunoterapia, y drenaje biliar paliativo con prótesis.',
        'En la recidiva local, solo quimioterapia: la radioterapia daña el asa de la hepaticoyeyunostomía (clase).',
      ],
    },
    {
      titulo: 'Para el examen',
      puntos: [
        'Bismuth: I bajo la confluencia, II en la confluencia, <b>IIIa derecho</b>, <b>IIIb izquierdo</b>, IV ambos. IIIa → hepatectomía derecha; IIIb → izquierda, las dos con segmento I.',
        'Se puede operar <b>sin biopsia</b>: CA 19-9 alto mantenido tras drenar + imagen compatible.',
        'Se drena el remanente <b>antes</b> de embolizar, y por vía <b>endoscópica</b> primero. La diapositiva prefiere la percutánea; el ensayo DRAINAGE la asoció a más mortalidad.',
        'El <b>papilar</b> es el de mejor pronóstico; el <b>esclerosante</b>, el más frecuente.',
        'En el Klatskin la vesícula <b>no se palpa</b>; vesícula palpable con ictericia orienta a una obstrucción distal (Courvoisier).',
      ],
    },
  ],
  tarjetas: [
    { a: '¿Qué es el tumor de Klatskin?', r: 'El colangiocarcinoma perihiliar: nace en la confluencia de los conductos hepáticos derecho e izquierdo.' },
    { a: 'Bismuth-Corlette tipo I y tipo II', r: 'I: por debajo de la confluencia. II: afecta a la confluencia sin subir por los hepáticos.' },
    { a: 'Bismuth-Corlette tipos IIIa y IIIb', r: 'IIIa: se extiende por el conducto hepático derecho. IIIb: por el izquierdo.' },
    { a: 'Bismuth-Corlette tipo IV', r: 'Afecta a ambos conductos hepáticos.' },
    { a: '¿Por qué se reseca el segmento I?', r: 'Porque sus conductos drenan directamente en la confluencia y el tumor se extiende por ellos.' },
    { a: '¿Hace falta biopsia antes de operar un Klatskin?', r: 'No: basta CA 19-9 elevado tras drenar más imagen compatible. La biopsia percutánea arriesga siembra tumoral.' },
    { a: '¿Qué parte del hígado se drena antes de operar?', r: 'La que va a quedar (el remanente), y antes de la embolización portal.' },
    { a: '¿Drenaje endoscópico o percutáneo en el perihiliar?', r: 'Endoscópico primero: el ensayo DRAINAGE se detuvo por más mortalidad con el percutáneo, que queda de rescate.' },
    { a: 'Tipo macroscópico más frecuente y el de mejor pronóstico', r: 'Esclerosante, el más frecuente (70 %); papilar, el de mejor pronóstico.' },
    { a: '¿Cómo se reconstruye la vía biliar tras la resección?', r: 'Con una hepaticoyeyunostomía en Y de Roux.' },
    { a: '¿Qué valora la clasificación de Blumgart-Jarnagin?', r: 'La resecabilidad: extensión biliar, afectación de la vena porta y atrofia lobar.' },
  ],
  preguntas: [
    {
      id: 'colangiocarcinoma-perihiliar-1',
      enunciado: 'Varón de 64 años con ictericia obstructiva y CA 19-9 elevado. La colangio-RM muestra una estenosis que afecta a la confluencia y sube por el conducto hepático derecho; el izquierdo está libre. No hay metástasis y el remanente es suficiente. ¿Qué cirugía corresponde?',
      opciones: [
        'Hepatectomía izquierda con segmento I',
        'Resección aislada de la vía biliar',
        'Hepatectomía derecha con segmento I y hepaticoyeyunostomía',
        'Duodenopancreatectomía cefálica',
      ],
      correcta: 2,
      explicacion: 'Es un Bismuth IIIa: se quita el lado del conducto afectado, el derecho, con el segmento I y la vía biliar, y se reconstruye con hepaticoyeyunostomía. La hepatectomía izquierda es la del IIIb y dejaría el tumor dentro. La resección aislada de la vía biliar solo se plantea en tipos I–II, sobre todo papilares, no cuando el tumor sube por un conducto hepático. La duodenopancreatectomía es la cirugía del colangiocarcinoma distal.',
    },
    {
      id: 'colangiocarcinoma-perihiliar-2',
      enunciado: 'Un colangiocarcinoma perihiliar afecta a la confluencia biliar y se extiende solo por el conducto hepático izquierdo; el derecho está libre. ¿Qué tipo de Bismuth-Corlette es?',
      opciones: [
        'Tipo II',
        'Tipo IIIa',
        'Tipo IV',
        'Tipo IIIb',
      ],
      correcta: 3,
      explicacion: 'Afectar a la confluencia y subir solo por el hepático izquierdo es un tipo IIIb, que se trata con hepatectomía izquierda y segmento I. El tipo II se queda en la confluencia sin extenderse por los conductos hepáticos. El IIIa es la extensión por el conducto derecho, no por el izquierdo. El IV exige la afectación de ambos conductos hepáticos.',
    },
    {
      id: 'colangiocarcinoma-perihiliar-3',
      enunciado: 'Varón de 68 años con un Bismuth IIIa y bilirrubina de 14 mg/dl. Se planifica hepatectomía derecha, y la volumetría obliga a embolizar la porta antes. Está afebril y estable. ¿Qué drenaje biliar indicas y cuándo?',
      opciones: [
        'Endoscópico del lóbulo izquierdo, antes de embolizar',
        'Percutáneo del lóbulo izquierdo, antes de embolizar',
        'Embolizar primero y drenar después',
        'Drenar solo el lóbulo derecho, el que se va a quitar',
      ],
      correcta: 0,
      explicacion: 'Se drena el hígado que va a quedar, el izquierdo, y antes de embolizar, para que crezca y se opere sin colestasis. La diapositiva prefiere la vía percutánea, pero el ensayo DRAINAGE se interrumpió por mayor mortalidad en ese brazo, así que se empieza por la endoscópica y la percutánea queda de rescate. Embolizar con colestasis intensa limita la hipertrofia del remanente. Drenar el lóbulo que se va a resecar no ayuda al remanente y añade riesgo de colangitis.',
    },
    {
      id: 'colangiocarcinoma-perihiliar-4',
      enunciado: 'Varón de 65 años con una estenosis hiliar sospechosa de colangiocarcinoma en la colangio-RM. ¿Qué permite establecer el diagnóstico e indicar la cirugía sin biopsia?',
      opciones: [
        'Una biopsia percutánea guiada por TC',
        'CA 19-9 elevado tras drenar y una imagen compatible',
        'Un CEA elevado de forma aislada',
        'CA 19-9 elevado con la vía biliar aún obstruida',
      ],
      correcta: 1,
      explicacion: 'Según la clase, basta un CA 19-9 elevado que se mantiene tras drenar la vía biliar junto con una prueba de imagen dinámica compatible; no hace falta histología. La biopsia percutánea no se recomienda por el elevado riesgo de diseminación, y además el enunciado pide prescindir de ella. El CEA aislado es poco específico. Un CA 19-9 medido con la vía aún obstruida puede estar alto solo por la colestasis, y por eso hay que repetirlo después de drenar.',
    },
    {
      id: 'colangiocarcinoma-perihiliar-5',
      enunciado: 'En la resección de un colangiocarcinoma perihiliar tipo IIIa se asocia la resección del segmento I (caudado). ¿Por qué?',
      opciones: [
        'Porque sus conductos drenan en la confluencia',
        'Porque así aumenta el volumen del remanente',
        'Porque recibe la irrigación arterial del tumor',
        'Porque facilita la anastomosis biliar',
      ],
      correcta: 0,
      explicacion: 'Los conductos del caudado desembocan directamente en la confluencia, de modo que el tumor se extiende por ellos; dejarlo compromete el margen. Quitar el segmento I no aumenta el remanente, al contrario, lo reduce un poco. No se reseca por una irrigación arterial especial: el criterio es biliar. Tampoco se hace para facilitar la anastomosis, que se realiza con los conductos del hígado que queda.',
    },
    {
      id: 'colangiocarcinoma-perihiliar-6',
      enunciado: 'En la valoración de un colangiocarcinoma perihiliar, ¿cuál de estos hallazgos contraindica la resección según la clase?',
      opciones: [
        'Bilirrubina de 15 mg/dl al diagnóstico',
        'Necesidad de resecar la vena porta',
        'Extensión a ramas biliares de segundo orden en ambos lados',
        'Clasificación Bismuth IIIb',
      ],
      correcta: 2,
      explicacion: 'La extensión biliar bilateral hasta ramas de segundo orden impide dejar un hígado con su vía biliar libre de tumor, y la clase la lista como contraindicación. La bilirrubina alta no contraindica: se corrige con el drenaje del remanente antes de operar. La afectación portal puede resolverse resecando y reconstruyendo la porta. El IIIb es resecable con hepatectomía izquierda y segmento I.',
    },
    {
      id: 'colangiocarcinoma-perihiliar-7',
      enunciado: 'Entre los tipos macroscópicos del colangiocarcinoma perihiliar, ¿cuál tiene mejor pronóstico?',
      opciones: [
        'Esclerosante',
        'Nodular',
        'Formador de masa',
        'Papilar',
      ],
      correcta: 3,
      explicacion: 'El papilar (10 % según la clase) crece hacia la luz y es el de mejor pronóstico; en él puede bastar la resección de la vía biliar. El esclerosante es el más frecuente (70 %) y atrapa los vasos del hilio, lo que empeora la resecabilidad. El nodular (20 %) tampoco tiene la ventaja pronóstica del papilar. «Formador de masa» es un término que se usa sobre todo para el colangiocarcinoma intrahepático, no uno de los tres tipos hiliares de la clase.',
    },
  ],
  fuentes: [
    'Clase: Tumores malignos biliares UCM alumnos.pptx (colangiocarcinoma perihiliar)',
    'AJCC Cancer Staging Manual, 8.ª ed. (2017)',
    'Coelen RJS et al. Lancet Gastroenterol Hepatol 2018 (ensayo DRAINAGE, PMID 30122355)',
    'Primrose JN et al. Lancet Oncol 2019 (ensayo BILCAP)',
    'Valle J et al. N Engl J Med 2010 (ensayo ABC-02)',
  ],
}

const colangiocarcinomaDistal = {
  id: 'colangiocarcinoma-distal',
  bloque: 'biliar',
  titulo: 'Colangiocarcinoma distal',
  subtitulo: 'Tumor del colédoco distal: se trata como un tumor periampular',
  tnm: 'distal',
  mapa: ['via-biliar', 'pancreas', 'duodeno'],
  esencial: [
    'Nace en el colédoco por debajo del cístico, a menudo dentro de la cabeza del páncreas: da ictericia indolora con vesícula palpable (signo de Courvoisier).',
    'La clase lo resume así: se maneja igual que los tumores de la cabeza del páncreas y de la ampolla, con duodenopancreatectomía cefálica.',
    'Su T se mide por la profundidad de invasión en milímetros (AJCC 8.ª): menos de 5 mm T1, de 5 a 12 mm T2, más de 12 mm T3; T4 si afecta al tronco celíaco, la mesentérica superior o la hepática común.',
  ],
  secciones: [
    {
      titulo: 'Epidemiología y factores de riesgo',
      puntos: [
        'Es el colangiocarcinoma <b>extrahepático por debajo de la desembocadura del cístico</b>, hasta la ampolla. Junto con páncreas, ampolla y duodeno forma los <b>tumores periampulares</b>.',
        'Comparte factores de riesgo con el resto de colangiocarcinomas: colangitis esclerosante primaria, quiste de colédoco, litiasis y anomalías de la unión pancreatobiliar.',
        'Edad típica entre 50 y 70 años, algo más en varones (clase).',
      ],
      dibujo: {
        tipo: 'mapa',
        resaltar: ['via-biliar', 'pancreas', 'duodeno'],
        pie: 'Colédoco distal, en su trayecto por la cabeza del páncreas hasta la ampolla.',
      },
    },
    {
      titulo: 'Clínica',
      puntos: [
        '<b>Ictericia obstructiva indolora</b> y progresiva con prurito, coluria y acolia; a veces pérdida de peso.',
        '<b>Vesícula palpable</b> e indolora en un paciente ictérico (<b>signo de Courvoisier-Terrier</b>): la obstrucción está por debajo del cístico, así que la vesícula se distiende.',
        'Sin manipulación previa de la vía biliar, la colangitis es poco habitual.',
      ],
      dibujo: {
        tipo: 'comparar',
        columnas: ['', 'Perihiliar', 'Distal'],
        filas: [
          ['Altura', 'Confluencia hepática', 'Colédoco intrapancreático'],
          ['Vesícula', 'Colapsada', 'Distendida (Courvoisier)'],
          ['Colédoco', 'Normal', 'Dilatado'],
          ['Cirugía', 'Hepatectomía + vía biliar', 'Duodenopancreatectomía'],
          ['T (AJCC 8.ª)', 'Estructuras invadidas', 'Profundidad en mm'],
        ],
        pie: 'La altura de la obstrucción cambia la exploración, la imagen y la cirugía.',
      },
    },
    {
      titulo: 'Diagnóstico y estadificación',
      puntos: [
        'Ecografía: dilatación de toda la vía biliar, intra y extrahepática, hasta el punto de obstrucción.',
        '<b>TC dinámica</b> para la relación con los vasos (tronco celíaco, mesentérica superior, hepática común, porta) y las metástasis; <b>colangio-RM</b> para la extensión biliar.',
        '<b>Ecoendoscopia</b> con punción, o cepillado durante una CPRE, cuando hace falta histología; CA 19-9 como marcador.',
        'TNM AJCC 8.ª: T por <b>profundidad</b> de invasión (T1 menos de 5 mm, T2 de 5 a 12 mm, T3 más de 12 mm); <b>T4</b> afecta al tronco celíaco, la mesentérica superior o la hepática común.',
      ],
      dibujo: [
        {
          tipo: 'regla',
          titulo: 'Profundidad de invasión',
          unidad: 'mm',
          cortes: [5, 12],
          etiquetas: ['T1', 'T2', 'T3'],
          pie: 'T4 lo define la afectación arterial, no la profundidad.',
        },
        {
          tipo: 'escala',
          titulo: 'N del colangiocarcinoma distal',
          niveles: [
            { codigo: 'N0', texto: 'Sin ganglios afectados' },
            { codigo: 'N1', texto: '1–3 ganglios regionales' },
            { codigo: 'N2', texto: '4 o más ganglios regionales' },
          ],
          pie: 'AJCC 8.ª ed.',
        },
      ],
    },
    {
      titulo: 'Tratamiento',
      puntos: [
        '<b>Duodenopancreatectomía cefálica</b> (operación de Whipple): se extirpan cabeza de páncreas, duodeno, colédoco distal y vesícula con sus ganglios, y se reconstruye con yeyuno.',
        'El <b>drenaje biliar preoperatorio no es rutinario</b> en los tumores periampulares: un ensayo aleatorizado (van der Gaag, 2010) encontró más complicaciones con él. Se reserva a colangitis, ictericia muy intensa o cirugía que se va a retrasar.',
        'Tras la resección, quimioterapia adyuvante con <b>capecitabina</b> (ensayo BILCAP).',
        'Irresecable o metastásico: <b>prótesis biliar endoscópica</b> para la ictericia y <b>gemcitabina + cisplatino</b>, hoy con inmunoterapia.',
      ],
      dibujo: {
        tipo: 'algoritmo',
        pasos: [
          { texto: 'Ictericia + vesícula palpable', detalle: 'Vía biliar dilatada hasta el páncreas' },
          { texto: 'TC dinámica + colangio-RM', detalle: 'Vasos, metástasis, extensión biliar' },
          { texto: '¿Resecable?' },
        ],
        ramas: [
          { si: 'Sí', texto: 'Duodenopancreatectomía', detalle: 'Sin drenaje si no hay colangitis' },
          { si: 'No', texto: 'Prótesis + quimioterapia', detalle: 'Gemcitabina + cisplatino' },
        ],
      },
    },
    {
      titulo: 'Para el examen',
      puntos: [
        'Ictericia indolora + <b>vesícula palpable</b> = obstrucción <b>por debajo del cístico</b> (colédoco distal, páncreas, ampolla), no un Klatskin.',
        'Cirugía: <b>duodenopancreatectomía cefálica</b>, como un tumor de cabeza de páncreas.',
        'La T del distal se mide en <b>milímetros de profundidad</b>: menos de 5, de 5 a 12, más de 12. La T4 es arterial.',
        'No drenes por rutina antes de una duodenopancreatectomía: solo si hay colangitis o la cirugía se va a retrasar.',
      ],
    },
  ],
  tarjetas: [
    { a: '¿Dónde nace el colangiocarcinoma distal?', r: 'En el colédoco, entre la desembocadura del cístico y la ampolla, a menudo dentro de la cabeza del páncreas.' },
    { a: '¿Qué es el signo de Courvoisier-Terrier?', r: 'Vesícula palpable e indolora en un paciente ictérico: obstrucción por debajo del cístico, típicamente tumoral.' },
    { a: '¿Cirugía del colangiocarcinoma distal?', r: 'Duodenopancreatectomía cefálica (operación de Whipple).' },
    { a: '¿Cómo se define la T del distal (AJCC 8.ª)?', r: 'Por profundidad de invasión: T1 menos de 5 mm, T2 de 5 a 12 mm, T3 más de 12 mm.' },
    { a: '¿Qué es T4 en el colangiocarcinoma distal?', r: 'Afectación del tronco celíaco, la arteria mesentérica superior o la arteria hepática común.' },
    { a: 'N1 y N2 del colangiocarcinoma distal', r: 'N1: 1–3 ganglios regionales afectados. N2: 4 o más.' },
    { a: '¿Se drena la vía biliar antes de la duodenopancreatectomía?', r: 'No de rutina; solo si hay colangitis, ictericia muy intensa o la cirugía se va a retrasar.' },
    { a: '¿Qué son los tumores periampulares?', r: 'Los de cabeza de páncreas, ampolla de Vater, colédoco distal y duodeno periampular.' },
    { a: '¿Quimioterapia adyuvante tras resecar un colangiocarcinoma?', r: 'Capecitabina (ensayo BILCAP).' },
  ],
  preguntas: [
    {
      id: 'colangiocarcinoma-distal-1',
      enunciado: 'Mujer de 71 años con ictericia indolora progresiva y vesícula palpable. La TC y la colangio-RM muestran una estenosis del colédoco distal intrapancreático, sin contacto con los vasos ni metástasis. Bilirrubina de 8 mg/dl, sin fiebre. ¿Qué haces?',
      opciones: [
        'Resección de la vía biliar y hepaticoyeyunostomía',
        'Drenaje biliar sistemático y cirugía en 6 semanas',
        'Hepatectomía derecha con segmento I',
        'Duodenopancreatectomía cefálica sin drenaje previo',
      ],
      correcta: 3,
      explicacion: 'Colangiocarcinoma distal resecable: duodenopancreatectomía cefálica, como un tumor de cabeza de páncreas, y sin drenaje si no hay colangitis. Resecar solo la vía biliar no consigue margen ni ganglios en un tumor intrapancreático. El drenaje sistemático antes de operar se asoció a más complicaciones en un ensayo aleatorizado y no está indicado aquí. La hepatectomía con segmento I es la cirugía del perihiliar, no de un tumor del colédoco distal.',
    },
    {
      id: 'colangiocarcinoma-distal-2',
      enunciado: 'El patólogo informa de un colangiocarcinoma distal que invade la pared del colédoco con una profundidad de 8 mm, sin afectar al tronco celíaco, la mesentérica superior ni la hepática común. ¿Qué T es según la AJCC 8.ª?',
      opciones: [
        'T1',
        'T2',
        'T3',
        'T4',
      ],
      correcta: 1,
      explicacion: 'En el colangiocarcinoma distal la T se mide por profundidad de invasión: de 5 a 12 mm es T2, y 8 mm cae ahí. T1 exigiría menos de 5 mm. T3 empieza por encima de 12 mm. T4 no depende de la profundidad, sino de la afectación del tronco celíaco, la mesentérica superior o la hepática común, que aquí se descarta.',
    },
    {
      id: 'colangiocarcinoma-distal-3',
      enunciado: 'Varón de 70 años con ictericia indolora y una vesícula palpable y no dolorosa en la exploración. ¿Dónde está, con más probabilidad, la obstrucción?',
      opciones: [
        'En la confluencia de los conductos hepáticos',
        'En el conducto cístico',
        'En el colédoco distal o la cabeza del páncreas',
        'En los conductos biliares intrahepáticos',
      ],
      correcta: 2,
      explicacion: 'Vesícula distendida e indolora con ictericia es el signo de Courvoisier-Terrier: la obstrucción está por debajo del cístico, típicamente por un tumor distal o periampular. En la confluencia (Klatskin) la bilis no llega a la vesícula, que queda colapsada. Una obstrucción aislada del cístico no produce ictericia. Una obstrucción intrahepática tampoco distiende la vesícula y no suele dar ictericia salvo que sea extensa.',
    },
    {
      id: 'colangiocarcinoma-distal-4',
      enunciado: 'En la estadificación AJCC 8.ª del colangiocarcinoma distal, ¿qué hallazgo define un tumor T4?',
      opciones: [
        'Invasión de 15 mm de profundidad',
        'Afectación de la arteria mesentérica superior',
        'Invasión del parénquima pancreático',
        'Cuatro ganglios regionales afectados',
      ],
      correcta: 1,
      explicacion: 'En el distal, T4 se define por la afectación arterial: tronco celíaco, mesentérica superior o hepática común. Una profundidad de 15 mm es T3, porque supera los 12 mm sin afectación arterial. La invasión del páncreas no cambia por sí sola la T en la 8.ª edición, que se basa en la profundidad. Cuatro ganglios positivos son N2, no una categoría T.',
    },
    {
      id: 'colangiocarcinoma-distal-5',
      enunciado: 'Paciente con colangiocarcinoma distal que engloba la arteria mesentérica superior y tiene metástasis hepáticas, con ictericia y buen estado general. ¿Qué tratamiento corresponde?',
      opciones: [
        'Prótesis biliar endoscópica y gemcitabina con cisplatino',
        'Duodenopancreatectomía paliativa',
        'Trasplante hepático',
        'Sorafenib',
      ],
      correcta: 0,
      explicacion: 'Enfermedad irresecable y metastásica: se resuelve la ictericia con una prótesis endoscópica y se trata con gemcitabina y cisplatino, hoy con inmunoterapia. Una duodenopancreatectomía con metástasis no aporta beneficio y añade morbilidad. El trasplante no tiene papel en el colangiocarcinoma distal, y menos con metástasis. El sorafenib es un fármaco del hepatocarcinoma, no del colangiocarcinoma.',
    },
  ],
  fuentes: [
    'Clase: Tumores malignos biliares UCM alumnos.pptx (colangiocarcinoma distal)',
    'AJCC Cancer Staging Manual, 8.ª ed. (2017)',
    'van der Gaag NA et al. N Engl J Med 2010 (drenaje biliar preoperatorio en tumores de cabeza de páncreas)',
    'Primrose JN et al. Lancet Oncol 2019 (ensayo BILCAP)',
    'Valle J et al. N Engl J Med 2010 (ensayo ABC-02)',
  ],
}

const caVesicula = {
  id: 'ca-vesicula',
  bloque: 'biliar',
  titulo: 'Cáncer de vesícula biliar',
  subtitulo: 'Adenocarcinoma sobre inflamación crónica; la mitad se descubre tras una colecistectomía',
  tnm: 'vesicula',
  mapa: ['vesicula'],
  esencial: [
    'Es un adenocarcinoma (90 %) que nace sobre inflamación crónica: colelitiasis, pólipos, vesícula en porcelana, quistes de vía biliar y anomalías de la unión pancreatobiliar. Cuando da síntomas, el pronóstico es malo.',
    'La mitad se descubre por casualidad en la anatomía patológica de una colecistectomía: en T1a basta la colecistectomía; desde T1b hay que reoperar (colecistectomía ampliada con linfadenectomía).',
    'La T manda la cirugía: T2 del lado peritoneal, resección del lecho con margen; T2 del lado hepático, bisegmentectomía IVb–V. Los ganglios a distancia contraindican operar.',
  ],
  secciones: [
    {
      titulo: 'Epidemiología y factores de riesgo',
      puntos: [
        'El <b>90 %</b> son <b>adenocarcinomas</b> de la mucosa; todo lo que mantenga la <b>inflamación crónica</b> favorece el paso de displasia a carcinoma.',
        'Factores de riesgo: <b>colelitiasis</b>, <b>pólipos</b>, <b>vesícula en porcelana</b>, quistes de vía biliar, anomalías de la unión pancreatobiliar, síndrome de Mirizzi, <i>Salmonella typhi</i>, sexo femenino y origen (Chile, Bolivia).',
        '<b>Pólipos vesiculares</b>: casi todos son de colesterol, pero se indica colecistectomía si miden <b>más de 10 mm</b>. Más riesgo si son sésiles, vascularizados o hay colangitis esclerosante.',
        '<b>Vesícula en porcelana</b> (pared calcificada por inflamación crónica): la clase la considera indicación clara de colecistectomía.',
      ],
      dibujo: [
        {
          tipo: 'cascada',
          pasos: ['Litiasis crónica', 'Inflamación de la mucosa', 'Displasia', 'Carcinoma in situ', 'Adenocarcinoma invasivo'],
          pie: 'La inflamación crónica de la mucosa es el hilo común de los factores de riesgo.',
        },
        {
          tipo: 'regla',
          titulo: 'Pólipo vesicular',
          unidad: 'mm',
          cortes: [10],
          etiquetas: ['Seguimiento ecográfico', 'Colecistectomía'],
          pie: 'También se opera si es sésil, vascularizado, crece o hay colangitis esclerosante.',
        },
      ],
    },
    {
      titulo: 'Clínica',
      puntos: [
        'Cuando da síntomas suele estar <b>avanzado</b>: síndrome constitucional (astenia, anorexia) y dolor en hipocondrio derecho.',
        'La <b>ictericia</b> es de mal pronóstico por sí misma: indica infiltración del <b>ligamento hepatoduodenal</b>.',
        'El cáncer <b>incidental</b> se presenta como un cólico biliar más: nadie lo sospecha hasta que llega la anatomía patológica.',
      ],
      dibujo: {
        tipo: 'mapa',
        resaltar: ['vesicula', 'higado', 'via-biliar'],
        pie: 'La vesícula está pegada al hígado (segmentos IVb y V) y al ligamento hepatoduodenal.',
      },
    },
    {
      titulo: 'Diagnóstico y estadificación',
      puntos: [
        'Pruebas: ecografía, <b>TC dinámica</b> (esencial: pared engrosada que capta, invasión hepática, volumetría), <b>colangio-RM</b> (vía biliar), ecoendoscopia, PET-TC y CEA y CA 19-9.',
        'La <b>PET-TC</b> descubre enfermedad a distancia oculta en hasta un 20 % de los casos (clase) y evita laparotomías inútiles; la <b>laparoscopia exploradora</b> descarta carcinomatosis.',
        'Diagnóstico diferencial difícil con la <b>colecistitis xantogranulomatosa</b> y con el colangiocarcinoma hiliar.',
        'La vesícula <b>no tiene submucosa</b>, y en su cara hepática tampoco serosa: el tumor llega pronto al hígado.',
        'TNM AJCC 8.ª: <b>T1a</b> lámina propia; <b>T1b</b> muscular; <b>T2a</b> tejido perimuscular del lado peritoneal; <b>T2b</b> del lado hepático; <b>T3</b> perfora la serosa o invade hígado u otro órgano; <b>T4</b> porta, arteria hepática o dos órganos.',
        'N (AJCC 8.ª): N1 1–3 ganglios regionales, N2 4 o más. Para que la linfadenectomía sea óptima hacen falta <b>al menos 6 ganglios</b>.',
      ],
      dibujo: [
        {
          tipo: 'pared',
          organo: 'vesicula',
          resaltar: 'T1b',
          pie: 'T1a se queda en la lámina propia; T1b llega a la muscular. Esa frontera decide si hay que reoperar.',
        },
        {
          tipo: 'escala',
          titulo: 'La T decide la cirugía',
          niveles: [
            { codigo: 'T1a', texto: 'Lámina propia', detalle: 'Colecistectomía simple' },
            { codigo: 'T1b', texto: 'Capa muscular', detalle: 'Colecistectomía ampliada + linfadenectomía' },
            { codigo: 'T2a', texto: 'Perimuscular, lado peritoneal', detalle: 'Lecho hepático con margen de 2 cm' },
            { codigo: 'T2b', texto: 'Perimuscular, lado hepático', detalle: 'Bisegmentectomía IVb–V + linfadenectomía' },
            { codigo: 'T3', texto: 'Serosa, hígado u otro órgano', detalle: 'Cirugía radical, controvertida' },
            { codigo: 'T4', texto: 'Porta, arteria o dos órganos', detalle: 'Cirugía radical, controvertida' },
          ],
        },
      ],
    },
    {
      titulo: 'Tratamiento',
      puntos: [
        'La <b>cirugía es el único tratamiento curativo</b> y su extensión la marca la <b>T</b>. La linfadenectomía tiene valor pronóstico, y la localización (borde libre o borde hepático) también.',
        '<b>T1a</b>: colecistectomía simple, sin linfadenectomía ni resección de los orificios de los trocares; el patólogo debe informar del <b>muñón cístico</b>.',
        '<b>T1b y T2</b>: colecistectomía ampliada más linfadenectomía. Lado peritoneal (fondo y cuerpo, T2a): margen de 2 cm de hígado. Lado hepático (T2b): <b>bisegmentectomía IVb–V</b>.',
        'La <b>vía biliar</b> solo se reseca si el <b>conducto cístico</b> está afectado, micro o macroscópicamente.',
        '<b>T3–T4</b>: cirugía radical (hepatectomía mayor, duodenopancreatectomía, colectomía…) solo sin ganglios a distancia; mucha morbimortalidad y es controvertida.',
        'Contraindican operar: metástasis hepáticas, carcinomatosis, ascitis maligna, <b>ganglios a distancia</b> (celíacos, peripancreáticos, periduodenales, mesentéricos superiores) y atrapamiento de la porta o de la hepática común.',
      ],
      dibujo: {
        tipo: 'couinaud',
        resaltar: [4, 5],
        pie: 'Bisegmentectomía IVb–V: el lecho de la vesícula. Es la resección del T2b, del lado hepático.',
      },
    },
    {
      titulo: 'Cáncer incidental',
      puntos: [
        'Aparece en la <b>anatomía patológica</b> de una colecistectomía hecha por otro motivo y supone la <b>mitad</b> de los cánceres de vesícula (clase).',
        'Se maneja igual que el conocido de antemano, y operar en uno o en dos tiempos <b>no cambia la supervivencia</b>.',
        'Primero, estudio de extensión (TC, PET-TC); si no hay enfermedad a distancia, la conducta depende de la T del informe.',
        'Si el hallazgo ocurre en un centro sin experiencia, lo mejor es <b>remitir a una unidad hepatobiliopancreática</b> de referencia.',
      ],
      dibujo: {
        tipo: 'algoritmo',
        pasos: [
          { texto: 'Cáncer en la pieza quirúrgica', detalle: 'Hallazgo tras colecistectomía por litiasis' },
          { texto: 'Estudio de extensión', detalle: 'TC y PET-TC; descartar metástasis' },
        ],
        ramas: [
          { si: 'T1a, cístico libre', texto: 'Nada más', detalle: 'La colecistectomía basta' },
          { si: 'T1b o T2', texto: 'Reintervención', detalle: 'Lecho hepático + linfadenectomía' },
          { si: 'Ganglios a distancia', texto: 'No operar', detalle: 'Quimioterapia sistémica' },
        ],
      },
    },
    {
      titulo: 'Pronóstico y seguimiento',
      puntos: [
        'Pronóstico <b>malo</b>: las series que recoge la clase dan supervivencias medianas de pocos meses y en torno a un 5 % a 5 años en conjunto.',
        'Tras cirugía R0 con ≥T2 o N1, la clase recomienda considerar tratamiento adyuvante; hoy la pauta habitual es <b>capecitabina</b> (ensayo BILCAP).',
        'T3–T4 o N1 conocidos antes de operar: candidatos a <b>neoadyuvancia</b> dentro de ensayos clínicos (clase).',
        'Irresecable: quimioterapia con gemcitabina, que según la clase ofrece buena paliación; hoy se combina con cisplatino e inmunoterapia.',
      ],
    },
    {
      titulo: 'Para el examen',
      puntos: [
        'Frontera clave: <b>T1a</b> (lámina propia) → nada más; <b>T1b</b> (muscular) → reoperar.',
        'T2 del lado hepático → <b>bisegmentectomía IVb–V</b>; del lado peritoneal → lecho con margen de 2 cm.',
        'La vía biliar solo se reseca si el <b>cístico</b> está afectado. No se resecan los orificios de los trocares.',
        'Linfadenectomía óptima: <b>al menos 6 ganglios</b>.',
        'Pólipo de <b>más de 10 mm</b> o vesícula en porcelana → colecistectomía.',
      ],
    },
  ],
  tarjetas: [
    { a: '¿Tipo histológico más frecuente del cáncer de vesícula?', r: 'Adenocarcinoma (90 %), originado en la mucosa.' },
    { a: '¿Principal factor de riesgo del cáncer de vesícula?', r: 'La colelitiasis de larga evolución, por la inflamación crónica que mantiene.' },
    { a: '¿Qué pólipo vesicular se opera?', r: 'El de más de 10 mm; también si es sésil, vascularizado, crece o hay colangitis esclerosante.' },
    { a: '¿Qué indica la ictericia en el cáncer de vesícula?', r: 'Infiltración del ligamento hepatoduodenal: es de mal pronóstico por sí sola.' },
    { a: '¿Qué proporción de cánceres de vesícula es incidental?', r: 'La mitad, según la clase.' },
    { a: '¿Conducta ante un T1a incidental con cístico libre?', r: 'Nada más: la colecistectomía basta, sin linfadenectomía ni resección de los orificios de los trocares.' },
    { a: '¿Conducta ante un T1b incidental?', r: 'Reintervención: colecistectomía ampliada (lecho hepático) más linfadenectomía.' },
    { a: '¿Cirugía del T2b (lado hepático)?', r: 'Bisegmentectomía IVb–V con linfadenectomía.' },
    { a: '¿Cuándo se reseca la vía biliar en el cáncer de vesícula?', r: 'Solo si el conducto cístico está afectado.' },
    { a: '¿Cuántos ganglios necesita una linfadenectomía óptima?', r: 'Al menos 6.' },
    { a: '¿Qué lesión benigna imita un cáncer de vesícula?', r: 'La colecistitis xantogranulomatosa, con engrosamiento parietal de aspecto pseudotumoral.' },
    { a: '¿Qué capa le falta a la pared de la vesícula?', r: 'La submucosa; y en la cara hepática tampoco hay serosa.' },
  ],
  preguntas: [
    {
      id: 'ca-vesicula-1',
      enunciado: 'Mujer de 58 años operada de colecistectomía laparoscópica por colelitiasis sintomática. La anatomía patológica informa de un adenocarcinoma limitado a la lámina propia (T1a), con muñón cístico y márgenes libres. ¿Qué haces?',
      opciones: [
        'Colecistectomía ampliada con linfadenectomía',
        'Resección de los orificios de los trocares',
        'Nada más: la colecistectomía es suficiente',
        'Resección de la vía biliar principal',
      ],
      correcta: 2,
      explicacion: 'En el T1a con cístico libre la colecistectomía es suficiente y no hay que reoperar. La colecistectomía ampliada con linfadenectomía es la conducta a partir de T1b. La clase dice expresamente que no hace falta resecar los orificios de los trocares. La vía biliar solo se reseca si el conducto cístico está afectado, y aquí está libre.',
    },
    {
      id: 'ca-vesicula-2',
      enunciado: 'Varón de 66 años colecistectomizado hace 3 semanas por colecistitis crónica. La anatomía patológica informa de un adenocarcinoma que infiltra la capa muscular sin sobrepasarla (T1b). La TC y la PET-TC no muestran enfermedad a distancia. ¿Qué haces?',
      opciones: [
        'Reintervenir: lecho hepático y linfadenectomía',
        'Seguimiento con TC cada 6 meses',
        'Quimioterapia adyuvante sin cirugía',
        'Hepatectomía derecha ampliada',
      ],
      correcta: 0,
      explicacion: 'Desde T1b hay que reoperar: colecistectomía ampliada (resección del lecho hepático) más linfadenectomía, y operar en un segundo tiempo no empeora la supervivencia. El seguimiento solo es aceptable en el T1a. La quimioterapia no sustituye a una cirugía que todavía puede ser curativa. La hepatectomía derecha ampliada es excesiva para un T1b y se reservaría a tumores avanzados.',
    },
    {
      id: 'ca-vesicula-3',
      enunciado: 'Mujer de 61 años con un adenocarcinoma de vesícula que infiltra el tejido conectivo perimuscular de la cara hepática, sin sobrepasar la serosa ni invadir el hígado (T2b). No hay enfermedad a distancia. ¿Qué cirugía corresponde?',
      opciones: [
        'Colecistectomía simple',
        'Resección del lecho con margen de 2 cm',
        'Hepatectomía derecha con duodenopancreatectomía',
        'Bisegmentectomía IVb–V con linfadenectomía',
      ],
      correcta: 3,
      explicacion: 'En el T2b, del lado hepático, la clase indica bisegmentectomía IVb–V con linfadenectomía, porque el tumor está a un paso del hígado y esa cara no tiene serosa. La colecistectomía simple solo vale para el T1a. El margen de 2 cm del lecho es la opción del T2a, del lado peritoneal. Las resecciones radicales con hepatectomía mayor y duodenopancreatectomía se plantean en T3–T4 y son controvertidas.',
    },
    {
      id: 'ca-vesicula-4',
      enunciado: 'Varón de 70 años con una masa vesicular infiltrante. La TC muestra adenopatías peripancreáticas y en el origen de la arteria mesentérica superior, sin metástasis hepáticas ni ascitis. ¿Qué conducta corresponde?',
      opciones: [
        'Cirugía radical con duodenopancreatectomía',
        'Colecistectomía ampliada con linfadenectomía',
        'No operar: quimioterapia sistémica',
        'Colecistectomía simple paliativa',
      ],
      correcta: 2,
      explicacion: 'La afectación de ganglios a distancia (peripancreáticos, mesentéricos superiores, celíacos o periduodenales) contraindica la cirugía según la clase; procede quimioterapia sistémica. La cirugía radical con duodenopancreatectomía solo se plantea sin ganglios a distancia y tiene mucha morbimortalidad. La colecistectomía ampliada no resolvería una enfermedad ya fuera del territorio regional. Una colecistectomía simple paliativa no aporta beneficio.',
    },
    {
      id: 'ca-vesicula-5',
      enunciado: 'Mujer de 47 años asintomática a la que una ecografía de control descubre un pólipo vesicular sésil de 12 mm, vascularizado en el Doppler. No tiene colelitiasis. ¿Qué haces?',
      opciones: [
        'Ecografía de control en 6 meses',
        'Colecistectomía laparoscópica',
        'Colecistectomía ampliada con linfadenectomía',
        'CPRE para extraer el pólipo',
      ],
      correcta: 1,
      explicacion: 'Un pólipo de más de 10 mm, sésil y vascularizado reúne los factores de riesgo de degeneración: se indica colecistectomía, por vía laparoscópica si no hay alta sospecha de cáncer. Vigilar es razonable en pólipos pequeños, no en este. La colecistectomía ampliada con linfadenectomía es para un cáncer ya demostrado de al menos T1b. La CPRE explora la vía biliar y no permite extraer un pólipo de la pared vesicular.',
    },
    {
      id: 'ca-vesicula-6',
      enunciado: 'En la cirugía del cáncer de vesícula, ¿cuándo está indicado resecar la vía biliar principal?',
      opciones: [
        'Siempre que el tumor sea T2 o mayor',
        'Cuando el conducto cístico está afectado',
        'Siempre que se haga linfadenectomía',
        'Siempre que el cáncer sea incidental',
      ],
      correcta: 1,
      explicacion: 'La clase lo deja claro: la resección de la vía biliar solo está indicada cuando hay afectación micro o macroscópica del conducto cístico. No es obligatoria por ser T2 o mayor, porque lo que la decide es el cístico, no la profundidad. La linfadenectomía del ligamento hepatoduodenal se hace sin resecar el colédoco. Que el cáncer sea incidental no cambia la indicación: se maneja igual que el conocido.',
    },
  ],
  fuentes: [
    'Clase: Tumores malignos biliares UCM alumnos.pptx (cáncer de vesícula)',
    'Clase: Via Biliar T Benignos UCM alumnos.pptx (pólipos, vesícula en porcelana)',
    'AJCC Cancer Staging Manual, 8.ª ed. (2017)',
    'Primrose JN et al. Lancet Oncol 2019 (ensayo BILCAP)',
  ],
}

const tumoresBenignosBiliares = {
  id: 'tumores-benignos-biliares',
  bloque: 'biliar',
  titulo: 'Quistes de colédoco y tumores biliares benignos',
  subtitulo: 'Lesiones benignas de la vía biliar y de la vesícula, algunas con riesgo de malignizar',
  tnm: null,
  mapa: ['via-biliar', 'vesicula'],
  esencial: [
    'Los quistes de colédoco son dilataciones congénitas de la vía biliar ligadas a una unión pancreatobiliar anómala; se clasifican con Todani y el tipo I (extrahepático) es el 75 %.',
    'Se operan por el riesgo de colangiocarcinoma: se reseca la vía biliar extrahepática y se reconstruye con hepaticoyeyunostomía en Y de Roux.',
    'En la vesícula, el adenoma es premaligno (colecistectomía si mide más de 10 mm o crece) y la adenomiomatosis es benigna; los tumores benignos de la vía biliar se resecan para descartar malignidad.',
  ],
  secciones: [
    {
      titulo: 'Anomalías de la unión pancreatobiliar',
      puntos: [
        'Normalmente el colédoco y el conducto de Wirsung se unen en la <b>papila mayor</b>, en la segunda porción duodenal.',
        'Cuando la unión es <b>anómala</b> (fuera de la pared duodenal, con un canal común largo), el jugo pancreático <b>refluye</b> a la vía biliar y la inflama.',
        'Ese reflujo aumenta el riesgo de <b>colangiocarcinoma</b>, <b>cáncer de vesícula</b> y <b>ampuloma</b>, y suele estar presente en los pacientes con quiste de colédoco.',
      ],
      dibujo: {
        tipo: 'cascada',
        pasos: ['Anomalía de la unión', 'Reflujo pancreatobiliar', 'Inflamación', 'Ectasia', 'Dilatación (quiste)'],
        pie: 'Fisiopatología del quiste de colédoco según la clase.',
      },
    },
    {
      titulo: 'Quistes de colédoco',
      puntos: [
        'Suelen diagnosticarse en la <b>infancia</b> (60 % antes de los 10 años); solo un 20 % en la edad adulta.',
        'Niño: <b>ictericia, dolor y masa</b> en hipocondrio derecho. Adulto: debuta con una complicación (cálculos, colangitis, pancreatitis, hemorragia, hipertensión portal).',
        'Muchos son asintomáticos, pero aumentan el riesgo de <b>colangiocarcinoma</b> y, si obstruyen de forma crónica, producen hepatopatía secundaria.',
        '<b>Colangio-RM</b>: prueba de elección para el tipo, la localización, la planificación quirúrgica y descartar un colangiocarcinoma.',
        'Clasificación de <b>Todani</b>: por localización, tamaño y morfología. La diapositiva recoge los tipos I a IV; el tipo V (Caroli) completa la clasificación estándar.',
      ],
      dibujo: {
        tipo: 'escala',
        titulo: 'Clasificación de Todani',
        niveles: [
          { codigo: 'I', texto: 'Dilatación extrahepática del colédoco', detalle: 'El más frecuente (75 %)' },
          { codigo: 'II', texto: 'Divertículo del colédoco', detalle: 'Raro' },
          { codigo: 'III', texto: 'Coledococele (intraduodenal)', detalle: 'Raro' },
          { codigo: 'IVa', texto: 'Fusiforme intra y extrahepática', detalle: '10 %' },
          { codigo: 'IVb', texto: 'Varios quistes extrahepáticos', detalle: '5 %' },
          { codigo: 'V', texto: 'Solo intrahepáticos (Caroli)', detalle: 'No figura en la diapositiva' },
        ],
        resaltar: 'I',
      },
    },
    {
      titulo: 'Tratamiento de los quistes de colédoco',
      puntos: [
        'El tratamiento es <b>quirúrgico</b> por la elevada incidencia de tumores malignos y de complicaciones.',
        'Tipos I y IV: <b>resección de la vía biliar extrahepática</b> (con la vesícula) y <b>hepaticoyeyunostomía en Y de Roux</b>. Si la afectación intrahepática es localizada, se asocia resección hepática.',
        'No basta con <b>derivar</b> el quiste al intestino sin quitarlo: la mucosa enferma sigue ahí y puede malignizar.',
        'Tipo II: extirpación del divertículo. Tipo III (coledococele): suele bastar el tratamiento endoscópico. Tipo V difuso (Caroli): trasplante hepático.',
      ],
      dibujo: {
        tipo: 'algoritmo',
        pasos: [{ texto: 'Quiste de colédoco', detalle: 'Colangio-RM: tipo de Todani' }],
        ramas: [
          { si: 'Tipo I o IV', texto: 'Resección + Y de Roux', detalle: 'Quitar toda la vía extrahepática' },
          { si: 'Tipo III', texto: 'Esfinterotomía endoscópica', detalle: 'Coledococele intraduodenal' },
          { si: 'Tipo V difuso', texto: 'Trasplante hepático', detalle: 'Caroli con afectación difusa' },
        ],
      },
    },
    {
      titulo: 'Tumores benignos de la vesícula',
      puntos: [
        '<b>Pólipos de colesterol</b>: los más frecuentes; muchos desaparecen en el seguimiento ecográfico.',
        '<b>Adenoma vesicular</b>: <b>riesgo elevado de degeneración</b>. Colecistectomía laparoscópica si mide <b>más de 10 mm</b> o crece rápido; abordaje abierto si hay alta sospecha de cáncer.',
        '<b>Adenomiomatosis</b>: hiperplasia de la pared con divertículos intramurales, los <b>senos de Rokitansky-Aschoff</b>; benigna, a menudo en el fondo. La clase la encuentra en el 9 % de las colecistectomías.',
        'En la adenomiomatosis la diapositiva habla de adelgazamiento de la muscular; lo clásico es lo contrario, la muscular se <b>engrosa</b>. No la confundas con el adenoma.',
        '<b>Vesícula en porcelana</b> y <b>colecistitis xantogranulomatosa</b> son benignas pero obligan a pensar en cáncer: la primera se opera; la segunda simula un tumor.',
      ],
      dibujo: [
        {
          tipo: 'comparar',
          columnas: ['', 'Adenoma', 'Adenomiomatosis'],
          filas: [
            ['Qué es', 'Neoplasia epitelial', 'Hiperplasia de la pared'],
            ['Riesgo de cáncer', 'Elevado', 'Benigna'],
            ['Imagen', 'Pólipo de la mucosa', 'Pared gruesa con senos'],
            ['Conducta', 'Colecistectomía si >10 mm', 'Nada si es típica'],
          ],
        },
        {
          tipo: 'regla',
          titulo: 'Adenoma o pólipo vesicular',
          unidad: 'mm',
          cortes: [10],
          etiquetas: ['Seguimiento ecográfico', 'Colecistectomía'],
          pie: 'También se opera si crece rápido.',
        },
      ],
    },
    {
      titulo: 'Tumores benignos de la vía biliar',
      puntos: [
        'Son <b>muy poco frecuentes</b>, suelen dar <b>ictericia</b> y hay que <b>resecarlos</b> para estudio histológico, porque no se distinguen bien de un tumor maligno.',
        '<b>Cistoadenoma biliar</b>: puede tener focos de adenocarcinoma, así que se trata como un tumor maligno, con resección completa.',
        '<b>Pseudotumor inflamatorio</b>: imita un colangiocarcinoma hiliar y se trata de forma similar.',
        'Otros: papiloma y <b>papilomatosis biliar</b>, adenoma, linfangioma quístico, tumor de células granulares, leiomioma, tumores neuroendocrinos y neurales.',
      ],
    },
    {
      titulo: 'Para el examen',
      puntos: [
        'Todani más frecuente: <b>tipo I</b> (extrahepático, 75 %). IVa: fusiforme intra y extrahepático. III: coledococele. V: Caroli.',
        'Quiste de colédoco = <b>resecar</b> la vía extrahepática + hepaticoyeyunostomía en Y de Roux; nunca dejar el quiste solo derivado.',
        'Adenoma vesicular de <b>más de 10 mm</b> → colecistectomía; adenomiomatosis → benigna (senos de Rokitansky-Aschoff).',
        'Un tumor biliar «benigno» que da ictericia se reseca: el diagnóstico definitivo lo da la pieza.',
      ],
    },
  ],
  tarjetas: [
    { a: '¿Qué mecanismo explica el quiste de colédoco?', r: 'Unión pancreatobiliar anómala con reflujo de jugo pancreático, inflamación, ectasia y dilatación.' },
    { a: '¿Tipo de Todani más frecuente?', r: 'Tipo I: dilatación quística extrahepática del colédoco (75 %).' },
    { a: '¿Qué es un Todani tipo III?', r: 'Un coledococele: dilatación intraduodenal del colédoco distal.' },
    { a: '¿Qué es un Todani tipo IVa?', r: 'Dilatación fusiforme intra y extrahepática de la vía biliar.' },
    { a: '¿Qué es un Todani tipo V?', r: 'Dilataciones solo intrahepáticas: la enfermedad de Caroli.' },
    { a: '¿Presentación típica del quiste de colédoco en el niño?', r: 'Ictericia, dolor y masa en hipocondrio derecho.' },
    { a: '¿Prueba de elección para un quiste de colédoco?', r: 'La colangio-RM.' },
    { a: '¿Tratamiento del quiste de colédoco tipo I?', r: 'Resección de la vía biliar extrahepática y hepaticoyeyunostomía en Y de Roux.' },
    { a: '¿Por qué se operan los quistes de colédoco?', r: 'Por el riesgo de colangiocarcinoma y de complicaciones: colangitis, litiasis y pancreatitis.' },
    { a: '¿Qué son los senos de Rokitansky-Aschoff?', r: 'Divertículos intramurales típicos de la adenomiomatosis vesicular, una lesión benigna.' },
    { a: '¿Cómo se trata un cistoadenoma biliar?', r: 'Como un tumor maligno, con resección completa: puede contener focos de adenocarcinoma.' },
  ],
  preguntas: [
    {
      id: 'tumores-benignos-biliares-1',
      enunciado: 'Mujer de 26 años con dos episodios de colangitis. La colangio-RM muestra un colédoco con dilatación fusiforme que se continúa por los conductos hepáticos dentro del hígado. ¿Qué tipo de Todani es?',
      opciones: [
        'Tipo I',
        'Tipo IVb',
        'Tipo IVa',
        'Tipo V',
      ],
      correcta: 2,
      explicacion: 'Una dilatación fusiforme que afecta a la vía extrahepática y se prolonga dentro del hígado es un Todani IVa, el segundo en frecuencia (10 %). El tipo I se limita a la vía extrahepática, sin afectación intrahepática. El IVb son varios quistes solo extrahepáticos. El tipo V (Caroli) afecta únicamente a los conductos intrahepáticos, con el colédoco normal.',
    },
    {
      id: 'tumores-benignos-biliares-2',
      enunciado: 'Varón de 30 años con un quiste de colédoco tipo I de Todani, asintomático, hallado en una ecografía. ¿Qué tratamiento indicas?',
      opciones: [
        'Seguimiento, porque está asintomático',
        'Derivación del quiste al duodeno sin resecarlo',
        'Esfinterotomía endoscópica',
        'Resección de la vía extrahepática y hepaticoyeyunostomía',
      ],
      correcta: 3,
      explicacion: 'El quiste de colédoco se opera aunque no dé síntomas, por la elevada incidencia de colangiocarcinoma: se reseca la vía biliar extrahepática y se reconstruye con hepaticoyeyunostomía en Y de Roux. El seguimiento deja en su sitio una mucosa con riesgo de malignizar. Derivar sin resecar tampoco elimina esa mucosa y favorece el reflujo y la colangitis. La esfinterotomía es el tratamiento del coledococele (tipo III), no del tipo I.',
    },
    {
      id: 'tumores-benignos-biliares-3',
      enunciado: 'El informe de una colecistectomía por cólicos describe hiperplasia de la pared vesicular con divertículos intramurales (senos de Rokitansky-Aschoff), sobre todo en el fondo. ¿Qué diagnóstico es?',
      opciones: [
        'Adenomiomatosis vesicular',
        'Adenoma vesicular',
        'Colecistitis xantogranulomatosa',
        'Vesícula en porcelana',
      ],
      correcta: 0,
      explicacion: 'Los senos de Rokitansky-Aschoff, a menudo en el fondo, son el sello de la adenomiomatosis, una condición benigna. El adenoma es una neoplasia epitelial que forma un pólipo, sin divertículos intramurales, y tiene riesgo de degenerar. La colecistitis xantogranulomatosa es un engrosamiento inflamatorio pseudotumoral con macrófagos cargados de lípidos. La vesícula en porcelana es una calcificación de la pared por inflamación crónica.',
    },
    {
      id: 'tumores-benignos-biliares-4',
      enunciado: 'Varón de 52 años al que una ecografía muestra un pólipo vesicular de 14 mm compatible con adenoma, sin datos de invasión ni adenopatías. ¿Qué haces?',
      opciones: [
        'Ecografía de control en un año',
        'Colecistectomía laparoscópica',
        'Colecistectomía ampliada con linfadenectomía',
        'CPRE con esfinterotomía',
      ],
      correcta: 1,
      explicacion: 'El adenoma vesicular tiene un riesgo elevado de degeneración y la clase acepta la colecistectomía, laparoscópica, por encima de 10 mm. El control ecográfico es para pólipos pequeños y estables, no para uno de 14 mm. La colecistectomía ampliada con linfadenectomía es para un cáncer demostrado de al menos T1b; el abordaje abierto se reserva a la alta sospecha de cáncer. La CPRE trata la vía biliar, no la vesícula.',
    },
    {
      id: 'tumores-benignos-biliares-5',
      enunciado: 'En una TC se encuentra una lesión quística hepática multiloculada con tabiques, cuya cirugía muestra un epitelio de tipo biliar. La biopsia sugiere un cistoadenoma biliar. ¿Cómo se trata?',
      opciones: [
        'Aspiración y esclerosis, como un quiste simple',
        'Fenestración laparoscópica del techo',
        'Seguimiento con ecografía anual',
        'Resección completa, como si fuera maligno',
      ],
      correcta: 3,
      explicacion: 'El cistoadenoma biliar puede albergar focos de adenocarcinoma, así que se trata como un tumor maligno, con resección completa. La aspiración con esclerosis y la fenestración son tratamientos del quiste simple: dejarían epitelio tumoral en su sitio. El seguimiento renuncia a quitar una lesión con potencial maligno. Por eso es clave distinguir el quiste simple (unilocular, sin tabiques) del tumor quístico.',
    },
    {
      id: 'tumores-benignos-biliares-6',
      enunciado: 'Una anomalía de la unión pancreatobiliar con un canal común largo permite el reflujo de jugo pancreático a la vía biliar. ¿Qué tumores se asocian a esta anomalía según la clase?',
      opciones: [
        'Colangiocarcinoma, cáncer de vesícula y ampuloma',
        'Hepatocarcinoma y hemangioma hepático',
        'Solo el adenocarcinoma de páncreas',
        'Ninguno: es una variante anatómica sin riesgo',
      ],
      correcta: 0,
      explicacion: 'El reflujo pancreatobiliar inflama de forma crónica la mucosa biliar y aumenta el riesgo de colangiocarcinoma, cáncer de vesícula y ampuloma; además suele acompañar al quiste de colédoco. El hepatocarcinoma se asocia a cirrosis y el hemangioma no es maligno, así que ninguno depende de este reflujo. El problema no es el páncreas: es la bilis expuesta al jugo pancreático. Llamarla variante sin riesgo contradice justo lo que subraya la clase.',
    },
  ],
  fuentes: [
    'Clase: Via Biliar T Benignos UCM alumnos.pptx (tema 18)',
    'Clase: clase tumore hepaticos benignos.pdf (síndrome de Caroli)',
    'Todani T et al. Am J Surg 1977 (clasificación de los quistes de colédoco)',
  ],
}

export const TUMORES_HIGADO_BILIAR = [
  tumoresHepaticosBenignos,
  hepatocarcinoma,
  metastasisHepaticas,
  colangiocarcinomaIntrahepatico,
  colangiocarcinomaPerihiliar,
  colangiocarcinomaDistal,
  caVesicula,
  tumoresBenignosBiliares,
]
