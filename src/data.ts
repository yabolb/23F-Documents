export interface Evento23F {
  fecha: string;
  hora: string;
  titulo: string;
  protagonista: string;
  descripcion: string;
  documento_url: string;
  categoria: "Antecedentes" | "Conspiración" | "Contexto" | "El Golpe" | "La Noche del 23-F" | "Investigación" | "Juicio" | "Sentencia" | "Epílogo";
  otros_documentos?: { titulo: string; url: string }[];
}

export const eventos: Evento23F[] = [
  // ANTECEDENTES
  {
    fecha: "1975",
    hora: "Documento Previo",
    titulo: "Tensión en País Vasco y Tejero",
    protagonista: "Antonio Tejero",
    descripcion: "Oficio de la Zona del País Vasco comunicando disposiciones sobre el Teniente Coronel Tejero ante la situación de tensión.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_9._Oficio_dimanante_Zona_del_Pais_Vasco_disposiciones_sobre_Tejero.pdf",
    categoria: "Antecedentes"
  },
  {
    fecha: "1978",
    hora: "Operación Galaxia",
    titulo: "Reunión en la Cafetería Galaxia",
    protagonista: "Antonio Tejero",
    descripcion: "Nota sobre la comparecencia de Tejero informando de la reunión conspirativa en la cafetería Galaxia.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_10._Nota_comparecencia_Tejero_Galaxia.pdf",
    categoria: "Antecedentes"
  },
  {
    fecha: "1978",
    hora: "Arresto",
    titulo: "Arresto de Tejero en Málaga",
    protagonista: "Antonio Tejero",
    descripcion: "Nota informativa sobre la repercusión en prensa del arresto de Tejero cuando era Jefe de la Comandancia de Málaga.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_11._Nota_Informativa_repercusion_prensa_arresto_Tejero_antes_1981.pdf",
    categoria: "Antecedentes"
  },

  // CONSPIRACIÓN
  {
    fecha: "1980",
    hora: "Planificación",
    titulo: "Planificación Manuscrita del Golpe",
    protagonista: "Golpistas",
    descripcion: "Documentación manuscrita incautada con una presunta planificación operativa del golpe de Estado.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_4._Documento_planificacion_del_golpe.pdf",
    categoria: "Conspiración",
    otros_documentos: [
      { titulo: "Documento manuscrito de planificación (II)", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_5._Documento_manuscrito_planificacion_del_golpe.pdf" }
    ]
  },
  {
    fecha: "1980 - Ene 1981",
    hora: "Informe",
    titulo: "Crónica de un Golpe Anunciado",
    protagonista: "Jesús M. Paricio",
    descripcion: "Nota al PREJUJEM con datos y análisis sobre el ambiente pre-golpe.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_14_R.pdf",
    categoria: "Conspiración"
  },

  // CONTEXTO
  {
    fecha: "10 Feb 1981",
    hora: "Informe Semestral",
    titulo: "Amenaza Interior",
    protagonista: "CESID",
    descripcion: "Informe semestral sobre la amenaza interior (terrorismo, involución) fechado días antes del golpe.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_72_R.pdf",
    categoria: "Contexto"
  },
  {
    fecha: "1981-1982",
    hora: "Informes",
    titulo: "Informes de Inteligencia Integrada",
    protagonista: "CESID",
    descripcion: "Serie de informes de 'Información Integrada' elaborados por el CESID en fechas clave posteriores al golpe.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_30_R.pdf",
    categoria: "Contexto",
    otros_documentos: [
      { titulo: "Información integrada (11 marzo 1982)", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_65_R.pdf" },
      { titulo: "Información integrada (16 marzo 1982)", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_64_R.pdf" },
      { titulo: "Información integrada (5 abril 1982)", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_47_R.pdf" },
      { titulo: "Información integrada (20 abril 1982)", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_45_R.pdf" }
    ]
  },

  // EL GOLPE (23-F)
  {
    fecha: "23 Feb 1981",
    hora: "Tarde",
    titulo: "Télex de Situación",
    protagonista: "Estado Mayor GC",
    descripcion: "Télex interiores y de agencias recibidos en la 2ª Sección de Estado Mayor informando del desarrollo de los hechos en tiempo real.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_8._Telex_interiores_y_de_Agencias_recibidos_en_2_Seccion_EM.pdf",
    categoria: "El Golpe"
  },
  {
    fecha: "23 Feb 1981",
    hora: "18:23",
    titulo: "Asalto al Congreso",
    protagonista: "Antonio Tejero",
    descripcion: "Nota del EM de la Guardia Civil con la secuencia de hechos del asalto y la irrupción en el Hemiciclo.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_7._Notas_Informativas_2_Seccion_EM_desarrollo_hechos.pdf",
    categoria: "El Golpe"
  },
  {
    fecha: "23 Feb 1981",
    hora: "Durante el Asalto",
    titulo: "Conversación García Carrés - Tejero",
    protagonista: "García Carrés / Tejero",
    descripcion: "Transcripción dramática de la llamada entre el dirigente ultraderechista y Tejero (posiblemente dentro del Congreso).",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_1._Conversacion_telefonica_GARCIA_CARRES_y_Tcol._TEJERO.pdf",
    categoria: "El Golpe",
    otros_documentos: [
      { titulo: "Conversación García Carrés (II)", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_2._Conversacion_telefonica_GARCIA_CARRES.pdf" }
    ]
  },
  {
    fecha: "23 Feb 1981",
    hora: "Noche",
    titulo: "Actitud del CESID",
    protagonista: "CESID",
    descripcion: "Informe sobre la actitud y reacciones del CESID ante los incidentes en el Congreso.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_5_R.pdf",
    categoria: "El Golpe"
  },
  {
    fecha: "23 Feb 1981",
    hora: "Noche",
    titulo: "Bando de Milans del Bosch",
    protagonista: "Jaime Milans del Bosch",
    descripcion: "Documentos sobre la sublevación en Valencia y la relación CESID-Capitanía.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_2_R.pdf",
    categoria: "El Golpe"
  },

  // LA NOCHE DEL 23-F / RESOLUCIÓN
  {
    fecha: "23-24 Feb 1981",
    hora: "Madrugada",
    titulo: "Relato de los Sucesos",
    protagonista: "CNI / Defensa",
    descripcion: "Informe detallado cronológico de los sucesos acontecidos durante los días 23 y 24 de febrero.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_20_R.pdf",
    categoria: "La Noche del 23-F"
  },
  {
    fecha: "24 Feb 1981",
    hora: "Mañana",
    titulo: "Unidad Militar El Pardo",
    protagonista: "Guardia Civil",
    descripcion: "Conversaciones telefónicas de la unidad militar de El Pardo el día después del golpe.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_3._Conversaciones_telefonicas_unidad_militar_El_Pardo.pdf",
    categoria: "La Noche del 23-F"
  },

  // INVESTIGACIÓN
  {
    fecha: "1981",
    hora: "Informe",
    titulo: "Papel del CESID y la JUJEM",
    protagonista: "CESID / JUJEM",
    descripcion: "Informes internos sobre la actuación de la Junta de Jefes de Estado Mayor y las relaciones del CESID.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_17_R.pdf",
    categoria: "Investigación",
    otros_documentos: [
      { titulo: "Relación CESID - PREJUJEM", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_3_R.pdf" },
      { titulo: "Resumen actuación DDI", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_4_R.pdf" }
    ]
  },
  {
    fecha: "9 Abr 1981",
    hora: "Informe",
    titulo: "Investigación Personal AOME",
    protagonista: "AOME / CESID",
    descripcion: "Investigación interna y declaraciones del personal de la AOME (Agrupación Operativa de Misiones Especiales) sobre su participación.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_7_R.pdf",
    categoria: "Investigación"
  },
  {
    fecha: "14 Abr 1981",
    hora: "Informe",
    titulo: "Militares y Paisanos Armados",
    protagonista: "CNI",
    descripcion: "Informe sobre las relaciones entre algunos militares y grupos de civiles armados.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_73_R.pdf",
    categoria: "Investigación"
  },
  {
    fecha: "2 Jun 1981",
    hora: "Fuga",
    titulo: "El Capitán Sánchez Valiente",
    protagonista: "Sánchez Valiente",
    descripcion: "Informe sobre el Capitán de la Guardia Civil Sánchez Valiente, conocido como 'el hombre del maletín', tras su fuga.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_77_R.pdf",
    categoria: "Investigación",
    otros_documentos: [
      { titulo: "Sánchez Valiente en Roma", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_76_R.pdf" }
    ]
  },
  {
    fecha: "3 Oct 1981",
    hora: "Carta",
    titulo: "Carta de Cortina a Manglano",
    protagonista: "José Luis Cortina",
    descripcion: "Misiva personal de José Luis Cortina (Jefe AOME) a Emilio Manglano (Director CESID).",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_8_R.pdf",
    categoria: "Investigación",
    otros_documentos: [
      { titulo: "Datos sobre Cte. Cortina", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_80_R.pdf" }
    ]
  },
  {
    fecha: "14 Dic 1981",
    hora: "Reunión Real",
    titulo: "Reunión del Rey con Gobierno y JUJEM",
    protagonista: "Juan Carlos I",
    descripcion: "Guión base para la reunión de S.M. el Rey con el Presidente, Ministro de Defensa y la Junta de Jefes de Estado Mayor.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_1_R.pdf",
    categoria: "Investigación",
    otros_documentos: [
      { titulo: "Entrevistas del Rey con Implicados", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_83_R.pdf" }
    ]
  },
  {
    fecha: "1981-1982",
    hora: "Varios",
    titulo: "Investigaciones Adicionales",
    protagonista: "Varios",
    descripcion: "Documentos diversos sobre procesamientos, cintas grabadas y comparecencias.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F6TR_1.PDF",
    categoria: "Investigación",
    otros_documentos: [
      { titulo: "Cintas esposa Tejero", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F6TR_1.PDF" },
      { titulo: "Procesamiento de un jefe", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_75_R.pdf" },
      { titulo: "Traslado de escrito", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_78_R.pdf" },
      { titulo: "Certificación causa 2/81", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_81_R.pdf" },
      { titulo: "Comparecimiento oficial y guardias", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_82_R.pdf" }
    ]
  },
  {
    fecha: "25 Feb 1982",
    hora: "Informe",
    titulo: "Ambiente en los Cuarteles",
    protagonista: "Ejército",
    descripcion: "Informe de inteligencia sobre el estado de opinión y ambiente en los cuarteles un año después.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_11_R.pdf",
    categoria: "Contexto",
    otros_documentos: [
      { titulo: "Reunión acontecimientos recientes (8 mar 82)", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_13_R.pdf" },
      { titulo: "Libertad provisional procesados (19 abr 82)", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_12_R.pdf" }
    ]
  },

  // JUICIO
  {
    fecha: "Feb - Mar 1982",
    hora: "Vistas Orales",
    titulo: "Desarrollo del Juicio (Fase I)",
    protagonista: "CSJM",
    descripcion: "Actas de las vistas orales del Consejo Supremo de Justicia Militar durante febrero y marzo de 1982.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_71_R.pdf",
    categoria: "Juicio",
    otros_documentos: [
      { titulo: "Vista 19 Feb", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_71_R.pdf" },
      { titulo: "Vista 20 Feb", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_70_R.pdf" },
      { titulo: "Vista 22 Feb", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_69_R.pdf" },
      { titulo: "Vista 24 Feb", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_68_R.pdf" },
      { titulo: "Vista 25 Feb", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_67_R.pdf" },
      { titulo: "Vista 26 Feb", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_66_R.pdf" },
      { titulo: "Vista 2 Mar", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_63_R.pdf" },
      { titulo: "Vista 5 Mar", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_62_R.pdf" },
      { titulo: "Vista 8 Mar", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_61_R.pdf" },
      { titulo: "Vista 9 Mar", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_60_R.pdf" },
      { titulo: "Comisiones militares (10 Mar)", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_9_R.pdf" },
      { titulo: "Vista 11 Mar", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_59_R.pdf" },
      { titulo: "Vista 12 Mar", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_58_R.pdf" },
      { titulo: "Vista 15 Mar", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_57_R.pdf" },
      { titulo: "Vista 16 Mar", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_56_R.pdf" },
      { titulo: "Vista 17 Mar", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_55_R.pdf" },
      { titulo: "Vista 18 Mar", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_54_R.pdf" },
      { titulo: "Vista 22 Mar", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_52_R.pdf" },
      { titulo: "Vista 23 Mar", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_53_R.pdf" },
      { titulo: "Vista 24 Mar", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_51_R.pdf" },
      { titulo: "Vista 26 Mar", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_50_R.pdf" },
      { titulo: "Vista 29 Mar", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_49_R.pdf" },
      { titulo: "Vista 30 Mar", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_48_R.pdf" }
    ]
  },
  {
    fecha: "Abr - May 1982",
    hora: "Vistas Orales",
    titulo: "Desarrollo del Juicio (Fase II)",
    protagonista: "CSJM",
    descripcion: "Continuación de las vistas orales durante abril y mayo de 1982.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_44_R.pdf",
    categoria: "Juicio",
    otros_documentos: [
      { titulo: "Vista 1 Abr", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_44_R.pdf" },
      { titulo: "Vista 2 Abr", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_43_R.pdf" },
      { titulo: "Vista 5 Abr", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_40_R.pdf" },
      { titulo: "Incidentes 5 Abr", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_46_R.pdf" },
      { titulo: "Vista 6 Abr", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_42_R.pdf" },
      { titulo: "Vista 7 Abr", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_41_R.pdf" },
      { titulo: "Vista 13 Abr", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_39_R.pdf" },
      { titulo: "Vista 14 Abr", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_38_R.pdf" },
      { titulo: "Vista 16 Abr", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_37_R.pdf" },
      { titulo: "Vista 19 Abr", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_36_R.pdf" },
      { titulo: "Vista 20 Abr", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_35_R.pdf" },
      { titulo: "Vista 27 Abr", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_34_R.pdf" },
      { titulo: "Vista 28 Abr", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_33_R.pdf" },
      { titulo: "Vista 29 Abr", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_32_R.pdf" },
      { titulo: "Vista 30 Abr", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_31_R.pdf" },
      { titulo: "Vista 3 May", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_29_R.pdf" },
      { titulo: "Vista 4 May", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_28_R.pdf" },
      { titulo: "Vista 5 May", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_27_R.pdf" },
      { titulo: "Vista 6 May", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_26_R.pdf" },
      { titulo: "Vista 10 May", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_25_R.pdf" },
      { titulo: "Vista 12 May", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_24_R.pdf" },
      { titulo: "Vista 17 May", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_23_R.pdf" },
      { titulo: "Vista 18 May", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_22_R.pdf" },
      { titulo: "Vista 24 May", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_21_R.pdf" },
      { titulo: "Comisiones militares vista (Doc 10)", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_10_R.pdf" }
    ]
  },
  {
    fecha: "5 Ene 1982",
    hora: "Comparecencia",
    titulo: "Comparecencia Cap. Tostón",
    protagonista: "Capitán Tostón",
    descripcion: "Interesando comparecencia del capitán de la Guardia Civil José Ramón Tostón de la Calle en la causa 2/81.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_79_R.pdf",
    categoria: "Juicio"
  },
  {
    fecha: "28 Abr 1982",
    hora: "Incidente",
    titulo: "Incidente Defensa Milans del Bosch",
    protagonista: "Milans del Bosch",
    descripcion: "Incidente entre la defensa del Teniente General Milans del Bosch y la prensa.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_15_R.pdf",
    categoria: "Juicio"
  },

  // SENTENCIA
  {
    fecha: "4 Jun 1982",
    hora: "Reacciones",
    titulo: "Reacciones ante la Sentencia",
    protagonista: "Gobierno",
    descripcion: "Declaraciones del gobierno y reacciones ante la sentencia del juicio del 23-F.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_18_R.pdf",
    categoria: "Sentencia",
    otros_documentos: [
      { titulo: "Estado de opinión sobre sentencias", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_19_R.pdf" },
      { titulo: "Referencias en medios (30 abr 81)", url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_74_R.pdf" }
    ]
  },
  {
    fecha: "6 Jun 1982",
    hora: "Comentarios",
    titulo: "Comentarios en el Cuartel General",
    protagonista: "JUJEM",
    descripcion: "Comentarios sobre la sentencia en el Cuartel General de la Junta de Jefes de Estado Mayor.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_16_R.pdf",
    categoria: "Sentencia"
  },

  // EPÍLOGO
  {
    fecha: "19 Oct 1987",
    hora: "Revisión",
    titulo: "Revisión de la Sentencia",
    protagonista: "CSJM",
    descripcion: "Documento sobre la revisión de la sentencia dictada en la causa 2/81.",
    documento_url: "https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_84_R.pdf",
    categoria: "Epílogo"
  }
];

export const categoriasColores = {
  "Antecedentes": "bg-stone-600 text-stone-50 border-stone-700",
  "Conspiración": "bg-stone-800 text-stone-100 border-stone-900",
  "Contexto": "bg-amber-800 text-amber-50 border-amber-900",
  "El Golpe": "bg-red-900 text-red-50 border-red-950",
  "La Noche del 23-F": "bg-purple-900 text-purple-50 border-purple-950",
  "Investigación": "bg-emerald-900 text-emerald-50 border-emerald-950",
  "Juicio": "bg-slate-800 text-slate-50 border-slate-900",
  "Sentencia": "bg-blue-900 text-blue-50 border-blue-950",
  "Epílogo": "bg-gray-500 text-gray-50 border-gray-600"
};

export const categoriasBordes = {
  "Antecedentes": "border-stone-600",
  "Conspiración": "border-stone-800",
  "Contexto": "border-amber-800",
  "El Golpe": "border-red-900",
  "La Noche del 23-F": "border-purple-900",
  "Investigación": "border-emerald-900",
  "Juicio": "border-slate-800",
  "Sentencia": "border-blue-900",
  "Epílogo": "border-gray-500"
};
