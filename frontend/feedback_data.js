/**
 * Retroalimentacion 360 (feedback de lideres/pares) por empleado evaluado.
 * Fuente: fedbakpro.xlsx (CC_EVALUADO -> lista de evaluadores).
 * Cuando un empleado tiene 2 o mas evaluadores, se muestra el nombre de cada uno.
 */
const FEEDBACK_DATA = {
  "1088322544": [
    {
      "evaluador": "DIANA PATRICIA CORTES MEDINA",
      "cc_evaluador": "52324735",
      "recomendaciones": "Juliana por su mismo sentido de responsabilidad la ha llevado a asumir responsabilidades que no corresponden a sus funciones lo que la llevo a perder el foco en lo importante en calidad.  Esto también ha sido a causa de la complejidad en recursos con lo que se arrancó la planta de Cerritos, lo que trajo como consecuencia en entrar en conflicto, en el tiempo, con los entregables en calidad y la supervisión de temas de operaciones.  A Juliana le ha costado mucho salir de esto, sin embargo, se hizo consiente y está reenfocando sus esfuerzos y está haciendo un bien trabajo hoy en día!   Debemos trabajar con Juliana la comunicación verbal y no verbal para que genere el impacto que se requiere como líder QI",
      "aspectos": "Juliana es una profesional integral.  No solo se enfoca en su entorno directo al rol, sino que ella es muy comprometida con el propósito de la organización.  Es muy inteligente, organizada, metódica y analítica."
    },
    {
      "evaluador": "LUISA FERNANDA RESTREPO OSORIO",
      "cc_evaluador": "1225090447",
      "recomendaciones": "Considero que Juli puede involucrarse más con su equipo de trabajo, hay que fortalecer la competencia de liderazgo y entender que liderar no es solo dirigir al equipo sino también verse inmerso en las labores del equipo, remar junto con ellos y hacerlos sentir parte del equipo de trabajo.",
      "aspectos": "Es una persona muy presta, escucha y atiende a los demás, sé que esa disposición puede ayudarla a fortalecer las competencias que necesita."
    }
  ],
  "42158995": [
    {
      "evaluador": "JULIO CESAR TREJOS ESCOBAR",
      "cc_evaluador": "10018333",
      "recomendaciones": "- Fortalecimiento de habilidades técnicas en manejo de área de tesorería.\n-Implementación de indicadores de gestión del área en general",
      "aspectos": "- orientación a resultados\n-actitud dispuesta a los cambios y nuevas necesidades de la organización"
    }
  ],
  "1093215502": [
    {
      "evaluador": "JULIO CESAR TREJOS ESCOBAR",
      "cc_evaluador": "10018333",
      "recomendaciones": "- Definir actividades separando lo urgente de lo importante.\n- mejora en la oportunidad de respuesta a las labores encomendadas\n-cumplimiento en horarios a manera de ejemplo siendo la primer cara visible de la compañía",
      "aspectos": "-Busca dar apoyo a todas las áreas de la organización.\n-busca alternativas diversas para dar solución a las necesidades \n-Respetuosa y de trato cálido con las personas."
    }
  ],
  "1088339487": [
    {
      "evaluador": "NATALIA HERRERA ROJAS",
      "cc_evaluador": "1093213628",
      "recomendaciones": "Como oportunidad de mejora, se recomienda continuar fortaleciendo sus habilidades y conocimientos mediante el aprendizaje continuo, así como seguir potenciando la comunicación asertiva y el trabajo en equipo, aspectos que contribuirán a su crecimiento personal y profesional.",
      "aspectos": "Se resaltan aspectos como su compromiso, responsabilidad y disposición para el trabajo en equipo, así como la actitud positiva y el respeto en el relacionamiento con los demás. Asi mismo, se destaca su buena disposición frente a las labores asignadas y el interés por aportar al cumplimiento de los objetivos del área, generando un ambiente laboral adecuado y colaborativo como mi par"
    },
    {
      "evaluador": "MARIA ALEJANDRA LOPEZ YUSTY",
      "cc_evaluador": "1116250554",
      "recomendaciones": "Desarrollar carácter y seguridad dado que cuenta con las bases técnicas. Desarrollar liderazgo",
      "aspectos": "Compromiso, dedicación y disciplina."
    }
  ],
  "1093220786": [
    {
      "evaluador": "LUIS PHILLIP MEILE PEREZ",
      "cc_evaluador": "10009572",
      "recomendaciones": "Fortalecer su comunicación transversal hacia todos los niveles de la organización, promoviendo claridad y entendimiento mutuo, con el propósito de construir consensos y evitar fricciones",
      "aspectos": "Su actitud proactiva y el compromiso con el aprendizaje continuo fortalecen día a día su aporte a la compañía, potenciando su capacidad de trabajo y contribuyendo al crecimiento colectivo."
    },
    {
      "evaluador": "STTEFANIA RAMIREZ OSPINA",
      "cc_evaluador": "1088017664",
      "recomendaciones": "Tener en cuenta la opinión/conocimiento de los otros miembros del equipo, así mismo, comunicar mejor decisiones y actividades programadas",
      "aspectos": "Liderazgo, conocimiento, agilidad mental"
    }
  ],
  "1093226801": [
    {
      "evaluador": "DIANA PATRICIA CORTES MEDINA",
      "cc_evaluador": "52324735",
      "recomendaciones": "Daniela debe trabajar en la priorización y enfocarse en los resultados más que en el día a día.   Para un líder es muy importante definir estrategias y energizar los equipos para lograr los resultados esperados. Daniela es capaz, es solo que debe pausar, pensar y tomar decisiones",
      "aspectos": "Daniela tiene el carácter y coraje para alinear los equipos en una cultura enfocada en calidad.  En poco tiempo logró darle un vuelco interesante al desempeño de los analistas, tema que aún debe seguir fortaleciendo.   Tiene la habilidad de entender una situación en el contexto organizacional, lo que le ha permitido hilar fino con el propósito de aterrizar los datos y hechos para buscar soluciones coherentes frente a un problema.   Ha logrado relacionarse con su equipo de trabajo directo y tiene una capacidad de serenidad muy interesante en un líder"
    }
  ],
  "1116435674": [
    {
      "evaluador": "MARITZA OROSTEGUI FORERO",
      "cc_evaluador": "52521380",
      "recomendaciones": "Fortalecer su nivel de proactividad e iniciativa, anticipándose más a las necesidades del negocio y generando propuestas de valor sin esperar lineamientos constantes.\nDesarrollar actitud retadora y orientada al logro, asumiendo mayor responsabilidad sobre los resultados y el impacto de su gestión.\nElevar la velocidad de respuesta y seguimiento a los compromisos.\nFortalecer la influencia y visibilidad dentro del equipo de proyectos tomando un rol más protagonista.\nSu potencial de crecimiento es alto; sin embargo, será clave fortalecer consistencia, y ejecución para acelerar su desarrollo profesional.",
      "aspectos": "Tiene una buena capacidad de aprendizaje y logra incorporar nuevos conocimientos cuando recibe acompañamiento y claridad en los objetivos.\nDemuestra potencial para asumir retos de mayor complejidad, especialmente cuando trabaja en entornos estructurados y con seguimiento cercano.\nMantiene una buena disposición frente a la retroalimentación y muestra apertura para fortalecer sus habilidades.\nCuenta con fortalezas técnicas y de relacionamiento que pueden convertirse en un diferencial importante en la medida en que gane mayor seguridad y autonomía.\nSe evidencia capacidad para aportar al equipo y generar resultados cuando logra enfocarse y priorizar adecuadamente."
    }
  ],
  "1088243613": [
    {
      "evaluador": "MARITZA OROSTEGUI FORERO",
      "cc_evaluador": "52521380",
      "recomendaciones": "Desarrollar una actitud más retadora frente a los objetivos comerciales, buscando desafiarse constantemente para superar presupuestos y generar resultados de mayor impacto.\nFortalecer la capacidad de convertir iniciativas e ideas en planes de acción concretos, asegurando seguimiento, ejecución y cierre efectivo de los proyectos.\nIncrementar el enfoque estratégico en la calidad de las oportunidades de negocio, priorizando iniciativas con mayor potencial de volumen, rentabilidad e ingresos sostenibles.\nImpulsar una mayor ambición de logro, asumiendo responsabilidades adicionales y participando activamente en proyectos de mayor alcance y complejidad.\nPotenciar su nivel de influencia e impacto interpersonal, movilizando equipos y áreas de apoyo hacia objetivos comunes a través de liderazgo, comunicación y seguimiento constante.\nTrabajar en una mayor proactividad y autonomía en la toma de decisiones, anticipándose a las necesidades del negocio y proponiendo soluciones de valor.\nElevar el nivel de disciplina comercial en seguimiento y ejecución, garantizando consistencia y velocidad en el cumplimiento de compromisos y oportunidades identificadas.",
      "aspectos": "Cuenta con un buen potencial de crecimiento, evidenciando capacidad para aprender y adaptarse a nuevos retos y dinámicas del negocio.\nTransmite energía positiva y disposición para apoyar al equipo, generando un ambiente de trabajo colaborativo.\nPosee conocimientos en el manejo y desarrollo de exportaciones, entendiendo procesos, dinámicas comerciales y oportunidades de mercado.\nTiene habilidades para construir relaciones y conectar con diferentes áreas, lo que representa una base importante para fortalecer su influencia e impacto.\nMuestra interés por crecer profesionalmente y asumir nuevos aprendizajes que pueden acelerar su desarrollo. \nTiene una base sólida de conocimiento, potencial y energía que puede convertirse en un diferencial importante para la organización. El siguiente nivel de crecimiento estará en fortalecer su mentalidad de reto, sentido de urgencia y capacidad de ejecución, logrando transformar oportunidades en resultados concretos y sostenibles para el negocio."
    }
  ],
  "1022364885": [
    {
      "evaluador": "DIANA PATRICIA MENESES DUARTE",
      "cc_evaluador": "1098648938",
      "recomendaciones": "Ryan debe fortalecer su capacidad de impacto y la movilización de su equipo, aspecto que representa una oportunidad crítica en este momento. La credibilidad frente a pares y áreas clientes es limitada, por lo que resulta esencial reforzar su influencia y presencia.\nSe evidencia una brecha de comunicación tanto con su equipo como con otras áreas; la más relevante es con su propio equipo, que en múltiples ocasiones no está enterado de temas clave o no comparte información con él.\nEl nivel de cumplimiento de compromisos es bajo: no respeta fechas establecidas y algunos entregables presentan oportunidades de mejora. Es necesario que incremente el seguimiento a compromisos y la ejecución de tareas.\nFinalmente, la organización y el control de su proceso requieren mayor rigor. La revisión constante de indicadores es fundamental para asegurar disciplina y resultados sostenibles.",
      "aspectos": "Ryan demuestra una alta capacidad de adaptación a la cultura organizacional y un respeto constante por los valores BARAL. Su nivel de compromiso con la compañía es elevado y ha manifestado su interés en continuar aportando de manera significativa al logro de los objetivos corporativos.\nSe destaca por su actitud respetuosa hacia su líder, sus compañeros y todas las áreas con las que interactúa, generando un ambiente de trabajo colaborativo y constructivo.\nHa mostrado disposición para dar la “milla extra”, respondiendo con eficacia en la ejecución de proyectos relevantes, como la puesta en marcha de la nueva planta en Cerritos. En este contexto, evidenció potencial para contribuir en el área de proyectos, demostrando iniciativa, responsabilidad y capacidad de asumir retos de alto impacto.\nSu comportamiento refleja compromiso organizacional, respeto por las personas y voluntad de crecimiento dentro de la compañía."
    },
    {
      "evaluador": "DIANA PATRICIA CORTES MEDINA",
      "cc_evaluador": "52324735",
      "recomendaciones": "Ryan debe reconocer hasta donde puede comprometerse con un reto o alguna actividad asignada, dado que él tiene muy buena actitud y disposición para llevar a cabo los compromisos, sin embargo, por el reto personal que él tiene consigo mismo, no evalúa a conciencia hasta dónde puede llegar y hasta donde es capaz de cumplir con los tiempos que el mismo define.",
      "aspectos": "Ryan tiene muy buena actitud para el trabajo y técnicamente es bueno. Le gusta los retos, situaciones nuevas que lo llevan a retar su zona de confort.   Busca soluciones a pesar de que el panorama no sea muy alentador."
    }
  ],
  "1225090423": [
    {
      "evaluador": "ERIKA ALEJANDRA MAGON CORTES",
      "cc_evaluador": "1088030537",
      "recomendaciones": "mi recomendación es prestar más atención a los detalles del proceso, a aprendido a tomar decisiones de la mejor manera",
      "aspectos": "Buena actitud ante situaciones de alto estrés y dificultades"
    },
    {
      "evaluador": "STEFANIA GIRALDO BETANCUR",
      "cc_evaluador": "1088298623",
      "recomendaciones": "Falta un poco de iniciativa para mejoras del proceso",
      "aspectos": "Buena actitud, desempeño y adaptabilidad"
    }
  ],
  "1088026517": [
    {
      "evaluador": "MARITZA OROSTEGUI FORERO",
      "cc_evaluador": "52521380",
      "recomendaciones": "Continuar fortaleciendo el conocimiento del negocio y del mercado para llevar sus análisis a un nivel más estratégico y predictivo.\nBuscar constantemente la “milla extra”, proponiendo insights, recomendaciones y oportunidades de mejora más allá del análisis operativo tradicional.\nIncrementar la proactividad en la identificación de riesgos y oportunidades comerciales, anticipándose a las necesidades del equipo y del negocio.\nDesarrollar una visión más integral del impacto financiero y comercial de los análisis, conectando datos con decisiones y resultados de negocio.\nPotenciar su participación en iniciativas transversales que le permitan ampliar su exposición, influencia y entendimiento de otras áreas.\nSeguir fortaleciendo herramientas analíticas y automatización para generar mayor agilidad, eficiencia y valor agregado en la gestión.",
      "aspectos": "Demuestra una actitud altamente positiva y una excelente disposición para apoyar al equipo y aportar valor al negocio.\nCuenta con un alto potencial de crecimiento, combinando capacidad analítica, compromiso y orientación al aprendizaje.\nTiene muy buena habilidad para el análisis de información y entendimiento del comportamiento de ventas, aportando claridad y soporte a la toma de decisiones.\nSe caracteriza por su responsabilidad, calidad en la ejecución y cumplimiento oportuno de los entregables.\nGenera confianza en el equipo gracias a su energía, disposición y consistencia en el trabajo.\nTiene capacidad para adaptarse rápidamente y asumir nuevos retos, mostrando apertura al cambio y mejora continua.\nEs una persona con excelente actitud, alto potencial y una base analítica sólida. Su siguiente nivel de crecimiento estará en profundizar el conocimiento estratégico del negocio y en dar un paso adicional hacia la generación de insights y propuestas que impacten directamente la toma de decisiones y los resultados comerciales."
    }
  ],
  "10018333": [
    {
      "evaluador": "MARITZA OROSTEGUI FORERO",
      "cc_evaluador": "52521380",
      "recomendaciones": "Continuar fortaleciendo el conocimiento del negocio y del mercado para llevar sus análisis a un nivel más estratégico y predictivo.\nNo perder su influencia transversal, que le permite ampliar su exposición, enfoque de resultados globales y entendimiento de otras áreas.",
      "aspectos": "Demuestra una actitud altamente positiva y una excelente disposición para apoyar al equipo y aportar valor al negocio.\nCuenta con un alto potencial de crecimiento, combinando capacidad analítica, compromiso y orientación al aprendizaje.\nTiene muy buena habilidad para el análisis de información y entendimiento del comportamiento del negocio, aportando claridad y soporte a la toma de decisiones.\nSe caracteriza por su responsabilidad, calidad en la ejecución y cumplimiento oportuno de los entregables.\nTiene capacidad para adaptarse rápidamente y asumir nuevos retos, mostrando apertura al cambio y mejora continua."
    }
  ],
  "42138053": [
    {
      "evaluador": "JULIO CESAR TREJOS ESCOBAR",
      "cc_evaluador": "10018333",
      "recomendaciones": "-Es importante procurar una comunicación más asertiva con las áreas interrelacionadas, buscando encontrar formas de trabajo en equipo que propendan por un resultado conjunto adecuado, menores reprocesos para ambas partes.\n- Retroalimentar mediante formaciones a los lideres de áreas destacando la importancia del cumplimiento de fechas y entregables que le permitan un trabajo menos desgastante.",
      "aspectos": "-Alto sentido de compromiso con sus responsabilidades y en general con la compañía.\n-alta orientación al resultado y al cumplimiento de fechas con entregables completos"
    }
  ],
  "1088030537": [
    {
      "evaluador": "STEFANIA GIRALDO BETANCUR",
      "cc_evaluador": "1088298623",
      "recomendaciones": "Mejorar la comunicación en momentos difíciles",
      "aspectos": "viene mejorando su liderazgo"
    }
  ],
  "1088034142": [
    {
      "evaluador": "DANIELA VALENCIA CASTRILLON",
      "cc_evaluador": "1093226801",
      "recomendaciones": "Para mejorar requiere trabajar en la comunicación asertiva, como se expresa y comunica las cosas en alguno casos o momentos, su factor de comunicación falla en algunas circunstancia y no realiza unas comunicaciones asertivas y eficaces",
      "aspectos": "Resalto su manera de ser organizada, de trabajo constante y cumpliendo objetivos y metas que se propone, y cumple sus metas."
    },
    {
      "evaluador": "DIANA PATRICIA CORTES MEDINA",
      "cc_evaluador": "52324735",
      "recomendaciones": "Marcela debe buscar como potencializar su desarrollo como líder, evaluando y siendo consciente de su comunicación con el entorno y con el manejo de sus emociones, las cuales en momentos opacan el potencial que tiene como líder, desde el rol de obtener resultados a través de los demás.",
      "aspectos": "Marcela es muy competitiva y esto la ha llevado buscar mejora en los procesos y asumir retos que le han bridado la oportunidad de conocerse más a sí misma bajo el rol de líder"
    }
  ],
  "1225090447": [
    {
      "evaluador": "NATALIA CORREA RIVERA",
      "cc_evaluador": "1088289084",
      "recomendaciones": "*Tiene una gran disposición para colaborar, pero necesita desarrollar mayor criterio para decir “no” o renegociar prioridades cuando la carga de trabajo lo requiere.\n*Su alto nivel de compromiso y control sobre los resultados es valioso; sin embargo, sería beneficioso que continúe desarrollando confianza en el equipo y comparta más responsabilidades.",
      "aspectos": "*Alto nivel de compromiso \n*Orientación al resultado\n*Propositiva"
    }
  ],
  "1088017293": [
    {
      "evaluador": "NATALIA CORREA RIVERA",
      "cc_evaluador": "1088289084",
      "recomendaciones": "Necesita mejorar el cumplimiento de fechas y tiempos comprometidos en sus entregas.",
      "aspectos": "*Demuestra un manejo altamente confidencial y responsable de la información"
    }
  ],
  "9861482": [
    {
      "evaluador": "NATALIA CORREA RIVERA",
      "cc_evaluador": "1088289084",
      "recomendaciones": "Puede fortalecer su liderazgo mostrando mayor iniciativa y capacidad de transformación, impulsando mejoras continuas y resultados visibles en el proceso que lidera",
      "aspectos": "Es servicial y respetuoso en el trato hacia los demás"
    },
    {
      "evaluador": "JULIO CESAR TREJOS ESCOBAR",
      "cc_evaluador": "10018333",
      "recomendaciones": "- Desarrollar habilidades de soporte en herramientas de trabajo que faciliten a las personas la manualidad de las labores realizadas siendo un soporte en TI más allá de soporte en los técnico",
      "aspectos": "- persona dispuesta a colaborar\n- actitud tranquila y manejo de presión"
    }
  ],
  "1087996602": [
    {
      "evaluador": "LUIS PHILLIP MEILE PEREZ",
      "cc_evaluador": "10009572",
      "recomendaciones": "Su oportunidad es la comunicación efectiva y directa, que le permita realizar una mayor sinergia con sus compañeros y lograr así entregar conocimiento e información",
      "aspectos": "Persona con valores claros, gran capacidad técnica y de ideación"
    }
  ],
  "1093213628": [
    {
      "evaluador": "MARIA ALEJANDRA LOPEZ YUSTY",
      "cc_evaluador": "1116250554",
      "recomendaciones": "Disciplinada, comprometida y con bases técnicas muy sólidas",
      "aspectos": "Comunicación asertiva en situaciones de retroalimentación"
    }
  ],
  "1116250554": [
    {
      "evaluador": "DIANA PATRICIA CORTES MEDINA",
      "cc_evaluador": "52324735",
      "recomendaciones": "Alejandra debe trabajar en la comunicación verbal y no verbal a través de la inteligencia emocional para lograr que las iniciativas ganadoras y enriquecedoras, que desarrolla, lleguen a muchas más personas y logre dejar la huella que tiene como propósito personal y profesional,",
      "aspectos": "Alejandra es altamente enfocada en resultados.  Es metódica y disciplinada, lidera con el ejemplo y ha hecho un buen trabajo delegando en su equipo con estrategia y responsabilidad.  Busca la mejora continua y tiene un enfoque muy interesante e enriquecedor desde el SER para movilizar personas"
    },
    {
      "evaluador": "NATALIA CORREA RIVERA",
      "cc_evaluador": "1088289084",
      "recomendaciones": "Sería positivo que continúe desarrollando una comunicación más efectiva e inspiradora, que facilite el compromiso y la colaboración de todos los equipos frente a los objetivos y desafíos en temas de SST",
      "aspectos": ""
    }
  ],
  "1088298623": [
    {
      "evaluador": "JULIO CESAR TREJOS ESCOBAR",
      "cc_evaluador": "10018333",
      "recomendaciones": "-Implementar herramientas que permitan simplificar el trabajo operativo del área.\n-inmersión periódica en los procesos ejecutados en Planta de producción.",
      "aspectos": "- Alta orientación al cumplimiento del resultado.\n-Metódica con alto sentido de análisis crítico \n-Oportunidad en el suministro de información"
    }
  ],
  "1087992783": [
    {
      "evaluador": "LUISA FERNANDA RESTREPO OSORIO",
      "cc_evaluador": "1225090447",
      "recomendaciones": "Maryu podría fortalecer la planeación de las actividades para organizarse mejor con todas las tareas del cargo, el sentido de urgencia es algo que siempre se puede revisar.",
      "aspectos": "Es una persona muy receptiva y con buena disposición, está presta a apoyar a quién la necesite."
    },
    {
      "evaluador": "NATALIA CORREA RIVERA",
      "cc_evaluador": "1088289084",
      "recomendaciones": "*Importante trabajar en ser más propositiva y autónoma, intentando resolver temas propios del cargo de manera independiente antes de escalarlos\n*aumentar la capacidad de ejecución y seguimiento para garantizar que las cosas sucedan",
      "aspectos": "*Es receptiva\n*Adecuadas relaciones interpersonales\n*Compromiso y responsabilidad con las labores asumidas"
    }
  ],
  "1142514381": [
    {
      "evaluador": "NATALIA CORREA RIVERA",
      "cc_evaluador": "1088289084",
      "recomendaciones": "Sería positivo que continúe desarrollando habilidades de organización y priorización, estableciendo planes de trabajo más estructurados y enfocados en objetivos clave.",
      "aspectos": "*Aprendizaje rápido\n*Buena actitud y apertura hacia las responsabilidades en el trabajo\n*Orientada al logro\n*Servicial"
    },
    {
      "evaluador": "LINA KATERINE QUINTERO RODRIGUEZ",
      "cc_evaluador": "1088017293",
      "recomendaciones": "Como oportunidad de mejora se recomienda trabajar en el orden e imparcialidad con el apoyo que brinda a las compañeras.",
      "aspectos": "María Fernanda, es una persona integra y con muy buena proyección."
    }
  ],
  "1088289084": [
    {
      "evaluador": "DIANA PATRICIA CORTES MEDINA",
      "cc_evaluador": "52324735",
      "recomendaciones": "Natalia tiene la habilidad de persuadir personas y esto puede ser utilizado a su favor y al propósito del rol, en buscar alternativas para aterrizar la cultura organizacional y mejorar el clima organizacional de la compañía.   Es solo seguir tomando el impulso con el que viene y retar los procesos para la mejora continua.",
      "aspectos": "Natalia es una persona muy activa, dinámica, retadora, responsable con el cumplimiento de los compromisos, inyecta energía a los equipos de trabajo y es fuertemente enfocada a resultados."
    },
    {
      "evaluador": "JULIO CESAR TREJOS ESCOBAR",
      "cc_evaluador": "10018333",
      "recomendaciones": "-Implementación de KPI´S del área que permitan hacer un seguimiento más oportuno,  a aspectos como desviaciones de HC, impacto de trabajo adicional, costos por rotación, mediante herramientas con información en tiempo real",
      "aspectos": "-Alto compromiso y sentido de responsabilidad en las labores propias del área buscando impactar de manera positiva los resultados.\n-organizada y metódica,"
    }
  ],
  "52324735": [
    {
      "evaluador": "LUIS PHILLIP MEILE PEREZ",
      "cc_evaluador": "10009572",
      "recomendaciones": "No tomarse la crítica a modo personal",
      "aspectos": "Comunicación clara de las situaciones"
    },
    {
      "evaluador": "JULIO CESAR TREJOS ESCOBAR",
      "cc_evaluador": "10018333",
      "recomendaciones": "- Sentido más critico de análisis sobre su equipo de trabajo buscando que el desempeño y resultados del área sean mejores y de impacto mayor \n-Mayor control y seguimiento a la situaciones y acciones implementadas buscando cerrar acciones que mitiguen los problemas presentados en el área \n-mayor control de gasto (austeridad)",
      "aspectos": "-Comprometida con la organización, alto sentido de responsabilidad en cuanto a los productos de la compañía.\n-Estricto cumplimiento a al normativa y aspectos regulatorios."
    }
  ],
  "1088029471": [
    {
      "evaluador": "MARIA ALEJANDRA LOPEZ YUSTY",
      "cc_evaluador": "1116250554",
      "recomendaciones": "Mejorar pensamiento crítico ante situaciones técnicas particulares y aumentar control del tiempo en el seguimiento de actividades",
      "aspectos": "Proactiva, diligente, humana."
    }
  ],
  "1054994231": [
    {
      "evaluador": "DIANA PATRICIA MENESES DUARTE",
      "cc_evaluador": "1098648938",
      "recomendaciones": "Debe fortalecer la implementación de métodos sistemáticos para medir y comparar resultados de gestión y calidad, consolidando indicadores que permitan evaluar el impacto de sus acciones. Se recomienda avanzar en el diseño de soluciones preventivas y mecanismos de medición de satisfacción del cliente interno y externo, para transformar los datos en planes de mejora concretos.  Se recomienda dar un giro importante a su gestión, por medio de la implementación de metodologías de mejora continua, mantenimiento preventivo y predictivo, mejora de la confiabilidad, medición de indicadores de gestión, cumplimiento al presupuesto y administración del almacén de repuestos, es momento de dejar de apagar incendios y empezar a manejar el área con estrategia.",
      "aspectos": "Demuestra capacidad para comprender los cambios del entorno y responder estratégicamente ante ellos, manteniendo una visión clara de los objetivos organizacionales.  Organiza sus actividades de forma eficiente en relación con los tiempos y plazos establecidos, evidenciando disciplina y compromiso. Además, muestra disposición para mejorar su desempeño mediante nuevas estrategias técnicas y métodos de trabajo, reflejando una actitud proactiva hacia la mejora continua y el logro de metas desafiantes tanto personales como colectivas. resalto en Juan su actitud de servicio, honestidad y humildad."
    }
  ],
  "10009572": [
    {
      "evaluador": "JULIO CESAR TREJOS ESCOBAR",
      "cc_evaluador": "10018333",
      "recomendaciones": "- se debe tener un mayor actitud de escucha a los equipos de trabajo y pares teniendo en cuenta sus apreciaciones buscando puntos de entendimiento adecuados.",
      "aspectos": "Orientado a los resultados y con alto sentido de compromiso por el mejor accionar de la organización  orientada a los resultados y con alto sentido de compromiso"
    }
  ],
  "52521380": [
    {
      "evaluador": "JULIO CESAR TREJOS ESCOBAR",
      "cc_evaluador": "10018333",
      "recomendaciones": "- Mayor inmersión en el proceso de galletas y conocimiento del portafolio de la categoría que le permita adquirir mas herramientas comerciales potenciales para los procesos de negociación.\n-Acompañamiento más fuerte al equipo comercial teniendo en cuenta que el mismo tiene brechas en el desempeño del rol",
      "aspectos": "-Orientación al resultado y cuidado de los márgenes.\n-Espíritu total de servicio y satisfacción del cliente.\n-Motivadora de los equipos de trabajo."
    }
  ],
  "1088252723": [
    {
      "evaluador": "STEFANIA GIRALDO BETANCUR",
      "cc_evaluador": "1088298623",
      "recomendaciones": "Mejorar la forma en la que se refiere a sus compañeros, tener más empatía",
      "aspectos": "Buena ejecución de la labor, responsabilidad"
    }
  ],
  "1088017664": [
    {
      "evaluador": "DIANA PATRICIA CORTES MEDINA",
      "cc_evaluador": "52324735",
      "recomendaciones": "Sttefania puede tener más visibilidad, si comienza a tener roles de gestión diferentes a su cargo.  Es cuestión que reconozca sus habilidades y a través de ellas, por iniciativa, inicie la exploración de participar en actividades y solución de problemas en áreas transversales a la organización.  Salir de la zona de confort",
      "aspectos": "Sttefania es enfocada a resultados de su rol.   Dentro de círculos de trabajo, cuestiona y consulta para tener claro el contexto organizacional en que se encuentra.   Logra ver más allá del problema de una manera positiva y esto es una ventaja competitiva que la apalancara para su desarrollo profesional"
    }
  ],
  "1112768345": [
    {
      "evaluador": "JULIO CESAR TREJOS ESCOBAR",
      "cc_evaluador": "10018333",
      "recomendaciones": "- implementación de herramientas que le permitan gestionar de una manera mas simple y menos manual las labores operativas del área.\n- No cargar con actividades , acciones o roles de otras áreas que le quitan foco a las actividades propias de su área.\n-implementación de kpi´s que le permitan un mejor seguimiento a los resultados de actividades críticas del área",
      "aspectos": "-Alto sentido de compromiso por la compañía\n-Orientación a resultados buscando los mejores beneficios para la empresa.\n-Alta capacidad de gestión y búsqueda de soluciones a problemas que impactan el área o las áreas interrelacionadas"
    },
    {
      "evaluador": "STEFANIA GIRALDO BETANCUR",
      "cc_evaluador": "1088298623",
      "recomendaciones": "Mejorar la comunicación, no impactar negativamente el ambiente en su equipo de trabajo",
      "aspectos": "Compromiso y responsabilidad"
    }
  ],
  "1088025460": [
    {
      "evaluador": "JULIANA PEÑA GOMEZ",
      "cc_evaluador": "1088322544",
      "recomendaciones": "Como oportunidad de mejora, podría fortalecer una comunicación más cercana, favoreciendo así una mejor recepción de los mensajes y las relaciones interpersonales.",
      "aspectos": "Considero que es una persona proactiva, responsable y con un alto sentido de pertenencia hacia sus funciones y la organización. Se destaca por aportar ideas e iniciativas que contribuyen positivamente al desarrollo de su trabajo, al fortalecimiento de las áreas con las que interactúa y al cumplimiento de los objetivos de la empresa."
    }
  ]
};

/**
 * Retorna el feedback 360 real de un empleado por CC, o null si no existe.
 */
function getFeedbackReal(cc) {
  const raw = FEEDBACK_DATA[String(cc)];
  if (!raw || !raw.length) return null;
  return raw;
}
