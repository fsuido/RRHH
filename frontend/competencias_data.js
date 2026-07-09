/**
 * Datos reales de evaluacion de competencias individuales.
 * Fuente: competenciascomestibles.xlsx (ID_EVALUATED = CC del empleado).
 * Escala: 1 a 4.
 */
const COMPETENCIAS_DATA = {
  "10009572": [
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.84
    },
    {
      "nombre": "TRABAJO EN EQUIPO",
      "puntaje": 2.27
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.41
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.41
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.29
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 3.05
    }
  ],
  "10018333": [
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 1.15
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 1.28
    },
    {
      "nombre": "ANÁLISIS Y RESOLUCIÓN DE PROBLEMAS",
      "puntaje": 1.09
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 1.21
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 1.0
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 1.1
    }
  ],
  "1022364885": [
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.75
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.58
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.11
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.69
    },
    {
      "nombre": "TRABAJO EN EQUIPO",
      "puntaje": 2.79
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.63
    }
  ],
  "1053844705": [
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.33
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.53
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.47
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.67
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.73
    },
    {
      "nombre": "ANÁLISIS Y RESOLUCIÓN DE PROBLEMAS",
      "puntaje": 3.15
    }
  ],
  "1054994231": [
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.97
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.93
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.47
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.43
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 3.0
    },
    {
      "nombre": "TRABAJO EN EQUIPO",
      "puntaje": 2.33
    }
  ],
  "1087992783": [
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.0
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 3.4
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.83
    },
    {
      "nombre": "LIDERAZGO",
      "puntaje": 2.37
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 3.2
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.77
    }
  ],
  "1087996602": [
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.33
    },
    {
      "nombre": "TRABAJO EN EQUIPO",
      "puntaje": 3.13
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.9
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 3.4
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 3.27
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.13
    }
  ],
  "1088017293": [
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.2
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.13
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 3.4
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 3.3
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.97
    },
    {
      "nombre": "LIDERAZGO",
      "puntaje": 2.87
    }
  ],
  "1088017664": [
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 3.07
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.73
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 3.27
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 3.17
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.27
    },
    {
      "nombre": "LIDERAZGO",
      "puntaje": 3.07
    }
  ],
  "1088018746": [
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.67
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.63
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.43
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 3.03
    },
    {
      "nombre": "TRABAJO EN EQUIPO",
      "puntaje": 2.0
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.47
    }
  ],
  "1088025460": [
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.1
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.17
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 3.37
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.0
    },
    {
      "nombre": "LIDERAZGO",
      "puntaje": 2.0
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.0
    }
  ],
  "1088026517": [
    {
      "nombre": "DESARROLLO DE OPORTUNIDADES DE NEGOCIO",
      "puntaje": 3.03
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.67
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.4
    },
    {
      "nombre": "ADAPTACIÓN AL CAMBIO",
      "puntaje": 2.9
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.07
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 1.8
    }
  ],
  "1088029471": [
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.33
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.0
    },
    {
      "nombre": "LIDERAZGO",
      "puntaje": 2.0
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.33
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.83
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.0
    }
  ],
  "1088030537": [
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.33
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.3
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.2
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.2
    },
    {
      "nombre": "ANÁLISIS Y RESOLUCIÓN DE PROBLEMAS",
      "puntaje": 2.1
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.43
    }
  ],
  "1088034142": [
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.63
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 3.12
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.38
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 3.2
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.78
    },
    {
      "nombre": "LIDERAZGO",
      "puntaje": 3.05
    }
  ],
  "1088243613": [
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.87
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.13
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.67
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.33
    },
    {
      "nombre": "DESARROLLO DE OPORTUNIDADES DE NEGOCIO",
      "puntaje": 2.9
    },
    {
      "nombre": "ADAPTACIÓN AL CAMBIO",
      "puntaje": 2.8
    }
  ],
  "1088252723": [
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.9
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.53
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.22
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.27
    },
    {
      "nombre": "TRABAJO EN EQUIPO",
      "puntaje": 2.5
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.42
    }
  ],
  "1088282715": [
    {
      "nombre": "TRABAJO EN EQUIPO",
      "puntaje": 2.37
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.27
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.77
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.73
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.47
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.5
    }
  ],
  "1088289084": [
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 3.06
    },
    {
      "nombre": "LIDERAZGO",
      "puntaje": 2.71
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.03
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.5
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.63
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.89
    }
  ],
  "1088296909": [
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.8
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.2
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 3.53
    },
    {
      "nombre": "TRABAJO EN EQUIPO",
      "puntaje": 2.0
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.0
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 3.2
    }
  ],
  "1088298623": [
    {
      "nombre": "ANÁLISIS Y RESOLUCIÓN DE PROBLEMAS",
      "puntaje": 2.15
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.36
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.5
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.55
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.28
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.15
    }
  ],
  "1088305746": [
    {
      "nombre": "TRABAJO EN EQUIPO",
      "puntaje": 2.63
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.6
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.23
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.17
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.67
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.97
    }
  ],
  "1088322544": [
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 3.47
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 3.53
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 3.43
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.3
    },
    {
      "nombre": "LIDERAZGO",
      "puntaje": 2.9
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 3.2
    }
  ],
  "1088329563": [
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.0
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.53
    },
    {
      "nombre": "TRABAJO EN EQUIPO",
      "puntaje": 2.3
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.47
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.37
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.27
    }
  ],
  "1088339487": [
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.0
    },
    {
      "nombre": "LIDERAZGO",
      "puntaje": 2.1
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.0
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.0
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.43
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.33
    }
  ],
  "1093213628": [
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.93
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.6
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.93
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.2
    },
    {
      "nombre": "LIDERAZGO",
      "puntaje": 2.6
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.33
    }
  ],
  "1093215502": [
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.67
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.83
    },
    {
      "nombre": "ANÁLISIS Y RESOLUCIÓN DE PROBLEMAS",
      "puntaje": 2.53
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.7
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.7
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.6
    }
  ],
  "1093220786": [
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.77
    },
    {
      "nombre": "TRABAJO EN EQUIPO",
      "puntaje": 2.37
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.8
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.73
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.17
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.3
    }
  ],
  "1093226801": [
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 3.53
    },
    {
      "nombre": "LIDERAZGO",
      "puntaje": 2.97
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.13
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 3.3
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 3.13
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 3.1
    }
  ],
  "1112768345": [
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.92
    },
    {
      "nombre": "TRABAJO EN EQUIPO",
      "puntaje": 2.28
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.32
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.08
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.65
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.72
    }
  ],
  "1116250554": [
    {
      "nombre": "LIDERAZGO",
      "puntaje": 2.77
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 3.07
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.9
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 3.38
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.0
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.77
    }
  ],
  "1116435674": [
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 3.13
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 3.4
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 3.4
    },
    {
      "nombre": "DESARROLLO DE OPORTUNIDADES DE NEGOCIO",
      "puntaje": 3.23
    },
    {
      "nombre": "ADAPTACIÓN AL CAMBIO",
      "puntaje": 3.17
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.1
    }
  ],
  "1142514381": [
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.47
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.5
    },
    {
      "nombre": "LIDERAZGO",
      "puntaje": 2.4
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.73
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.4
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.0
    }
  ],
  "1225090423": [
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.3
    },
    {
      "nombre": "ANÁLISIS Y RESOLUCIÓN DE PROBLEMAS",
      "puntaje": 3.4
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.3
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 3.13
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.33
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.07
    }
  ],
  "1225090447": [
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.0
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.33
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.23
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.23
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.4
    },
    {
      "nombre": "LIDERAZGO",
      "puntaje": 2.0
    }
  ],
  "42138053": [
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.57
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.07
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.33
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.17
    },
    {
      "nombre": "ANÁLISIS Y RESOLUCIÓN DE PROBLEMAS",
      "puntaje": 1.97
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 3.17
    }
  ],
  "42158995": [
    {
      "nombre": "ANÁLISIS Y RESOLUCIÓN DE PROBLEMAS",
      "puntaje": 2.45
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.45
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.8
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.15
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.58
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.28
    }
  ],
  "52324735": [
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.14
    },
    {
      "nombre": "LIDERAZGO",
      "puntaje": 3.06
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 2.75
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 2.82
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.68
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 2.47
    }
  ],
  "52521380": [
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 1.16
    },
    {
      "nombre": "ADAPTACIÓN AL CAMBIO",
      "puntaje": 1.39
    },
    {
      "nombre": "DESARROLLO DE OPORTUNIDADES DE NEGOCIO",
      "puntaje": 1.28
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 1.25
    },
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 1.12
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 1.29
    }
  ],
  "9861482": [
    {
      "nombre": "IDENTIFICACIÓN CULTURAL",
      "puntaje": 2.5
    },
    {
      "nombre": "ORIENTACIÓN A RESULTADOS",
      "puntaje": 3.1
    },
    {
      "nombre": "PLANEACIÓN Y ORGANIZACIÓN",
      "puntaje": 3.23
    },
    {
      "nombre": "ANÁLISIS Y RESOLUCIÓN DE PROBLEMAS",
      "puntaje": 3.57
    },
    {
      "nombre": "COMUNICACIÓN",
      "puntaje": 3.07
    },
    {
      "nombre": "ORIENTACIÓN AL CLIENTE",
      "puntaje": 2.77
    }
  ]
};

/* ══════════════════════════════════════════════════════════
   ESCALA Y CLASIFICACIÓN
   Escala de calificación: 1 a 4
   ══════════════════════════════════════════════════════════ */
const COMP_ESCALA_MAX = 4;

function nivelCompetencia(puntaje) {
  const pct = puntaje / COMP_ESCALA_MAX;
  if (pct >= 0.75) return "Fortaleza";
  if (pct >= 0.5)  return "En desarrollo";
  return "Prioritario";
}

/* ══════════════════════════════════════════════════════════
   TIPS DE MEJORA POR COMPETENCIA
   Cada competencia tiene un mensaje según el nivel obtenido:
   Prioritario (<50%), En desarrollo (50-74%), Fortaleza (>=75%)
   ══════════════════════════════════════════════════════════ */
const TIPS_COMPETENCIAS = {
  "LIDERAZGO": {
    Prioritario:   "Requiere fortalecer la capacidad de guiar equipos: practicar delegación, dar retroalimentación frecuente y tomar decisiones con mayor autonomia. Se recomienda mentoria de un lider senior.",
    "En desarrollo": "Reforzar habilidades de influencia y toma de decisiones. Buscar oportunidades de liderar proyectos pequeños o iniciativas transversales para ganar experiencia.",
    Fortaleza:     "Perfil con capacidad de liderazgo consolidada. Es candidato para liderar equipos o mentorear a otros colaboradores."
  },
  "ANÁLISIS Y RESOLUCIÓN DE PROBLEMAS": {
    Prioritario:   "Necesita desarrollar pensamiento analitico: practicar la identificacion de causas raiz antes de proponer soluciones y usar herramientas simples como 5 porques o diagramas de Ishikawa.",
    "En desarrollo": "Fortalecer el analisis de datos antes de decidir. Participar en sesiones de resolucion de problemas en equipo para ganar metodo y velocidad.",
    Fortaleza:     "Buen manejo de analisis y solucion de problemas complejos. Puede apoyar a otros equipos en la resolucion de casos dificiles."
  },
  "IDENTIFICACIÓN CULTURAL": {
    Prioritario:   "Baja conexion con los valores y cultura de la organizacion. Se recomienda participar activamente en actividades institucionales y sesiones de induccion o refuerzo cultural.",
    "En desarrollo": "Buena base de identificacion cultural, se sugiere mayor participacion en iniciativas y comunicacion interna de la empresa.",
    Fortaleza:     "Fuerte sentido de pertenencia y alineacion con la cultura organizacional. Puede ser embajador cultural dentro de su equipo."
  },
  "ADAPTACIÓN AL CAMBIO": {
    Prioritario:   "Presenta resistencia ante los cambios. Se recomienda trabajar la flexibilidad mental y participar en procesos de gestion del cambio con acompañamiento cercano.",
    "En desarrollo": "Maneja el cambio de forma aceptable, puede mejorar anticipandose a nuevos escenarios y proponiendo ideas frente a la incertidumbre.",
    Fortaleza:     "Excelente capacidad de adaptacion. Puede liderar procesos de cambio o transformacion dentro de su area."
  },
  "COMUNICACIÓN": {
    Prioritario:   "Debe fortalecer la claridad y asertividad al comunicar ideas. Se recomienda entrenamiento en comunicacion efectiva y practica de retroalimentacion estructurada.",
    "En desarrollo": "Comunica de forma adecuada, puede mejorar la escucha activa y la adaptacion del mensaje segun la audiencia.",
    Fortaleza:     "Excelente comunicador. Puede apoyar la vocería de su equipo y facilitar espacios de comunicacion interna."
  },
  "DESARROLLO DE OPORTUNIDADES DE NEGOCIO": {
    Prioritario:   "Debe fortalecer la vision comercial y la busqueda proactiva de oportunidades. Se recomienda formacion basica en analisis de mercado y seguimiento a indicadores comerciales.",
    "En desarrollo": "Identifica oportunidades de negocio de forma ocasional, se sugiere mayor proactividad en el analisis de clientes y mercado.",
    Fortaleza:     "Fuerte orientacion comercial. Puede liderar iniciativas de crecimiento o nuevas lineas de negocio."
  },
  "TRABAJO EN EQUIPO": {
    Prioritario:   "Presenta dificultad para colaborar de forma efectiva. Se recomienda participar en dinamicas de equipo y recibir retroalimentacion de pares de forma constante.",
    "En desarrollo": "Colabora adecuadamente, puede mejorar la proactividad al apoyar a otros y compartir informacion relevante con el equipo.",
    Fortaleza:     "Excelente colaborador. Fomenta la cohesion del equipo y puede ser referente en dinamicas colaborativas."
  },
  "PLANEACIÓN Y ORGANIZACIÓN": {
    Prioritario:   "Requiere mejorar la gestion del tiempo y la priorizacion de tareas. Se recomienda el uso de herramientas de planificacion y seguimiento de indicadores personales.",
    "En desarrollo": "Organiza su trabajo de forma aceptable, puede mejorar la anticipacion de riesgos y la planificacion a mediano plazo.",
    Fortaleza:     "Excelente capacidad de planeacion y organizacion. Puede apoyar la estructuracion de procesos en su area."
  },
  "ORIENTACIÓN AL CLIENTE": {
    Prioritario:   "Debe fortalecer la escucha y comprension de las necesidades del cliente. Se recomienda entrenamiento en servicio al cliente y seguimiento cercano a casos reales.",
    "En desarrollo": "Atiende adecuadamente al cliente, puede mejorar la anticipacion de necesidades y el seguimiento postventa.",
    Fortaleza:     "Excelente orientacion al cliente. Puede ser referente en experiencia y satisfaccion del cliente para su equipo."
  },
  "ORIENTACIÓN A RESULTADOS": {
    Prioritario:   "Necesita fortalecer el foco en metas y el cumplimiento de indicadores. Se recomienda establecer metas claras de corto plazo con seguimiento periodico.",
    "En desarrollo": "Cumple con los resultados esperados, puede mejorar la constancia y la busqueda de eficiencia en sus tareas.",
    Fortaleza:     "Fuerte orientacion a resultados. Consistentemente supera las metas propuestas y puede motivar a su equipo hacia el logro."
  }
};

function tipCompetencia(nombre, puntaje) {
  const key = (nombre || "").toUpperCase().trim();
  const nivel = nivelCompetencia(puntaje);
  const dict = TIPS_COMPETENCIAS[key];
  if (!dict) return "Continuar reforzando esta competencia con retroalimentacion periodica.";
  return dict[nivel] || dict["En desarrollo"];
}

/**
 * Retorna las competencias reales de un empleado por CC.
 * Si no existen datos reales, retorna null (el llamador debe usar un fallback).
 */
function getCompetenciasReales(cc) {
  const raw = COMPETENCIAS_DATA[String(cc)];
  if (!raw || !raw.length) return null;
  return raw.map(c => ({
    nombre:  c.nombre,
    puntaje: c.puntaje,
    nivel:   nivelCompetencia(c.puntaje),
    tip:     tipCompetencia(c.nombre, c.puntaje)
  }));
}
