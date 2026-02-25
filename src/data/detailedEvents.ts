export interface DetailedEvent {
  year: number;
  date: string;
  time?: string;
  title: string;
  description: string;
  documentUrl?: string;
  documentTitle?: string;
}

export const detailedEvents: DetailedEvent[] = [
  // Pre-Golpe
  {
    year: 1975,
    date: "1975",
    title: "Oficio sobre Tejero en el País Vasco",
    description: "Oficio de la zona del País Vasco que expresa una comunicación del teniente coronel Tejero sobre la posible situación de tensión por la presencia de ETA.",
    documentUrl: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_9._Oficio_dimanante_Zona_del_Pais_Vasco_disposiciones_sobre_Tejero.pdf",
    documentTitle: "Oficio dimanante Zona del País Vasco"
  },
  {
    year: 1978,
    date: "1978",
    title: "Reunión en la cafetería Galaxia",
    description: "Nota sobre la comparecencia del teniente coronel Tejero informando sobre una reunión en la cafetería Galaxia, precursora de la conspiración.",
    documentUrl: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_10._Nota_comparecencia_Tejero_Galaxia.pdf",
    documentTitle: "Nota comparecencia Tejero Galaxia"
  },
  {
    year: 1978,
    date: "1978",
    title: "Arresto de Tejero",
    description: "Nota Informativa sobre la repercusión en prensa del arresto de Tejero en 1978 cuando era Jefe de la Comandancia de Málaga.",
    documentUrl: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_11._Nota_Informativa_repercusion_prensa_arresto_Tejero_antes_1981.pdf",
    documentTitle: "Nota Informativa repercusión prensa arresto Tejero"
  },
  {
    year: 1980,
    date: "1980",
    title: "Planificación del Golpe (Manuscrito)",
    description: "Documentación con una presunta planificación del golpe, manuscrita.",
    documentUrl: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_4._Documento_planificacion_del_golpe.pdf",
    documentTitle: "Documento planificación del golpe"
  },
  {
    year: 1980,
    date: "1980",
    title: "Documento manuscrito de planificación",
    description: "Otro documento manuscrito de posible planificación del golpe.",
    documentUrl: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_5._Documento_manuscrito_planificacion_del_golpe.pdf",
    documentTitle: "Documento manuscrito planificación del golpe"
  },

  // 23 de Febrero 1981
  {
    year: 1981,
    date: "23 de Febrero",
    time: "18:23",
    title: "Asalto al Congreso de los Diputados",
    description: "El Teniente Coronel Antonio Tejero irrumpe en el Congreso durante la votación de investidura de Leopoldo Calvo-Sotelo. Se producen disparos al techo.",
    documentUrl: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_7._Notas_Informativas_2_Seccion_EM_desarrollo_hechos.pdf",
    documentTitle: "Nota del EM de la Guardia Civil con secuencia parcial de los hechos"
  },
  {
    year: 1981,
    date: "23 de Febrero",
    time: "Tarde/Noche",
    title: "Conversación García Carres y Tejero",
    description: "Transcripción de conversación telefónica de (presuntamente) García Carres y Tejero mientras el segundo se encontraba dentro del Congreso.",
    documentUrl: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_1._Conversacion_telefonica_GARCIA_CARRES_y_Tcol._TEJERO.pdf",
    documentTitle: "Conversación telefónica García Carres y Tejero"
  },
  {
    year: 1981,
    date: "23 de Febrero",
    time: "Tarde/Noche",
    title: "Seguimiento de la situación",
    description: "Télex interiores y de agencias recibidos en 2ª sección EM el día 23-F informando del estado de situación.",
    documentUrl: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_8._Telex_interiores_y_de_Agencias_recibidos_en_2_Seccion_EM.pdf",
    documentTitle: "Télex interiores y de Agencias recibidos"
  },
  {
    year: 1981,
    date: "23 de Febrero",
    time: "Noche",
    title: "Relato de los sucesos (CNI)",
    description: "Informe detallado del CNI (entonces CESID) con el relato de los sucesos de los días 23 y 24 de febrero.",
    documentUrl: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_20_R.pdf",
    documentTitle: "Relato de los sucesos de los días 23 y 24 de febrero"
  },

  // 24 de Febrero 1981
  {
    year: 1981,
    date: "24 de Febrero",
    title: "Conversaciones Unidad Militar El Pardo",
    description: "Conversaciones telefónicas de (presuntamente) la unidad militar El Pardo el día después del golpe.",
    documentUrl: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_3._Conversaciones_telefonicas_unidad_militar_El_Pardo.pdf",
    documentTitle: "Conversaciones telefónicas unidad militar El Pardo"
  },

  // Post-Golpe 1981
  {
    year: 1981,
    date: "9 de Abril",
    title: "Investigación AOME",
    description: "Investigación y declaraciones del personal de la AOME (CESID) por la Junta de Defensa Interna.",
    documentUrl: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_7_R.pdf",
    documentTitle: "Investigación y declaraciones personal AOME"
  },
  {
    year: 1981,
    date: "3 de Octubre",
    title: "Carta de Cortina a Manglano",
    description: "Carta de José Cortina Prieto para Emilio Manglano.",
    documentUrl: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_8_R.pdf",
    documentTitle: "Carta de José Cortina Prieto"
  },
  {
    year: 1981,
    date: "14 de Diciembre",
    title: "Reunión del Rey con el Gobierno",
    description: "Guión que sirvió de base para la reunión de S.M. el Rey con el Presidente del Gobierno, el ministro de Defensa y la Junta de Jefes de Estado Mayor.",
    documentUrl: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_1_R.pdf",
    documentTitle: "Guión reunión S.M. el Rey"
  },

  // 1982 y Juicios
  {
    year: 1982,
    date: "25 de Febrero",
    title: "Ambiente en los cuarteles",
    description: "Informe sobre el ambiente en los cuarteles un año después del golpe.",
    documentUrl: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_11_R.pdf",
    documentTitle: "Ambiente en los cuarteles"
  },
  {
    year: 1982,
    date: "4 de Junio",
    title: "Reacciones ante la sentencia",
    description: "Reacciones ante la sentencia del juicio del 23-F. Declaraciones del gobierno.",
    documentUrl: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_18_R.pdf",
    documentTitle: "Reacciones ante la sentencia 23-F"
  }
];
