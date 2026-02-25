import React, { useState } from 'react';
import { ArrowLeft, FileText, Shield, Globe, Landmark, Gavel, History, BookOpen } from 'lucide-react';
import { PDFModal } from '../components/PDFModal';
import { Link } from 'react-router-dom';

// Helper component for inline document links
const DocLink = ({ title, url, onClick }: { title: string, url: string, onClick: (url: string, title: string) => void }) => (
  <button 
    onClick={() => onClick(url, title)}
    className="inline-flex items-baseline gap-1 text-emerald-600 font-bold hover:text-emerald-400 hover:underline decoration-emerald-600/30 underline-offset-2 transition-colors mx-1 cursor-pointer text-left"
    title="Abrir documento original"
  >
    <span>{title}</span>
    <FileText size={14} className="self-center inline flex-shrink-0 text-emerald-600" />
  </button>
);

export const ExplanationPage: React.FC = () => {
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);

  const openPdf = (url: string, title: string) => {
    setSelectedPdf({ url, title });
  };

  return (
    <div className="min-h-screen bg-paper pb-20">
      <header className="bg-sepia-900 text-paper py-8 px-4 sticky top-0 z-30 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link 
            to="/"
            className="p-2 hover:bg-paper/10 rounded-full transition-colors"
          >
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-xl md:text-2xl font-serif font-bold">
            Archivo 23-F: Reconstrucción Documental Integral
          </h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <article className="prose prose-sepia prose-lg max-w-none font-serif text-sepia-900/90 leading-relaxed text-justify">
          
          <div className="mb-16 border-b border-sepia-900/10 pb-8 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-sepia-900 mb-6 leading-tight">
              Crónica de un Golpe: <br/>
              <span className="text-3xl md:text-4xl font-light italic opacity-80">La totalidad de los documentos desclasificados</span>
            </h2>
            <p className="text-xl italic text-sepia-900/70">
              Esta página desvela, con una narrativa profunda y detallada, los entresijos del 23 de febrero de 1981, integrando <strong>todos y cada uno</strong> de los documentos desclasificados por el Gobierno de España. Cada enlace es una puerta a la verdad histórica, permitiendo al lector sumergirse en las fuentes primarias de aquel día que marcó el destino de la democracia española.
            </p>
          </div>

          {/* SECCIÓN 1: ANTECEDENTES Y EL CALDO DE CULTIVO */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="text-sepia-900" size={32} />
              <h3 className="text-3xl font-bold text-sepia-900 m-0">I. Antecedentes y el Caldo de Cultivo (1975-1980)</h3>
            </div>
            <p className="mb-6">
              La España de finales de los años 70 era un país en vilo, un crisol de esperanzas democráticas y miedos atávicos. La Transición, apenas consolidada, navegaba por aguas turbulentas, acosada por la lacra del terrorismo de ETA, una economía tambaleante y el incesante "ruido de sables" que emanaba de ciertos sectores militares, nostálgicos de un pasado autoritario. En este ambiente de fragilidad, la figura del Teniente Coronel <strong>Antonio Tejero Molina</strong>, un hombre de convicciones férreas y escasa paciencia con la nueva senda democrática, ya destacaba. Los archivos de la Guardia Civil revelan que, desde 1975, Tejero estaba bajo una discreta pero constante vigilancia. Un 
              <DocLink 
                title="oficio de la zona del País Vasco" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_9._Oficio_dimanante_Zona_del_Pais_Vasco_disposiciones_sobre_Tejero.pdf" 
                onClick={openPdf} 
              /> 
              ya advertía sobre su carácter impulsivo y su propensión a actuar al margen de la disciplina, prefigurando el perfil del hombre que, años después, asaltaría el Congreso de los Diputados.
            </p>
            <p className="mb-6">
              El primer ensayo de la involución, un ominoso preludio de lo que estaba por venir, llegó en noviembre de 1978 con la infame <strong>"Operación Galaxia"</strong>. En la cafetería madrileña del mismo nombre, Tejero, junto al capitán de la Policía Armada <strong>Ricardo Sáenz de Ynestrillas</strong> y otros oficiales, urdió un plan para secuestrar al Consejo de Ministros y forzar un cambio de régimen. La 
              <DocLink 
                title="nota sobre la comparecencia de Tejero" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_10._Nota_comparecencia_Tejero_Galaxia.pdf" 
                onClick={openPdf} 
              /> 
              detalla los pormenores de aquella reunión clandestina, un aviso claro de la amenaza latente. A pesar de su arresto y una condena que muchos consideraron laxa, Tejero no era una voz solitaria en el descontento militar; una 
              <DocLink 
                title="nota informativa sobre la repercusión de su arresto" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_11._Nota_Informativa_repercusion_prensa_arresto_Tejero_antes_1981.pdf" 
                onClick={openPdf} 
              /> 
              revela el apoyo, incluso civil, que recibió, evidenciando un caldo de cultivo para la desestabilización que iba más allá de unos pocos exaltados.
            </p>
            <p className="mb-6">
              Hacia 1980, la conspiración dejó de ser un murmullo inquietante para convertirse en un plan de acción meticuloso y escalofriante. Los archivos desclasificados han sacado a la luz una 
              <DocLink 
                title="planificación manuscrita del golpe" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_4._Documento_planificacion_del_golpe.pdf" 
                onClick={openPdf} 
              /> 
              y otros 
              <DocLink 
                title="esbozos tácticos" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_5._Documento_manuscrito_planificacion_del_golpe.pdf" 
                onClick={openPdf} 
              />. 
              Estos documentos, con sus detalles sobre movimientos de tropas, control de puntos neurálgicos y el asalto al Congreso, demuestran una premeditación escalofriante. Incluso se ha revelado que el plan para la toma del hemiciclo pudo basarse en una anterior 
              <DocLink 
                title="Operación Ariete" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/policia/18-03-81_NOTA_INFORMATIVA_SOBRE_LA_OPERACION_ARIETE.pdf" 
                onClick={openPdf} 
              />, 
              donde ya se había valorado la entrada de fuerzas especiales en el edificio, una coincidencia que subraya la persistencia de estas ideas involucionistas en ciertos círculos.
            </p>
          </section>

          {/* SECCIÓN 2: EL 23 DE FEBRERO: EL DÍA DEL ASALTO */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Landmark className="text-sepia-900" size={32} />
              <h3 className="text-3xl font-bold text-sepia-900 m-0">II. El 23 de Febrero: El Día del Asalto</h3>
            </div>
            <p className="mb-6">
              La tarde del 23 de febrero de 1981, el Congreso de los Diputados se preparaba para una votación crucial: la investidura de <strong>Leopoldo Calvo-Sotelo</strong> como presidente del Gobierno. La sesión transcurría con la habitual solemnidad parlamentaria, ajena al drama que se gestaba en sus entrañas. A las 18:23 horas, el tiempo pareció detenerse. Al grito de "¡Quieto todo el mundo!", el Teniente Coronel <strong>Antonio Tejero Molina</strong>, al frente de un grupo de guardias civiles armados, irrumpió en el hemiciclo, sembrando el pánico y la confusión. El 
              <DocLink 
                title="acta de la sesión" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_1._Conversacion_telefonica_GARCIA_CARRES_y_Tcol._TEJERO.pdf" 
                onClick={openPdf} 
              /> 
              registra el instante exacto de la interrupción, un testimonio frío de un momento de ebullición.
            </p>
            <p className="mb-6">
              El caos se apoderó del Congreso. Los diputados, atónitos, se vieron sometidos a la autoridad de los golpistas. Las imágenes, grabadas para la posteridad, muestran la valentía de algunos, como <strong>Adolfo Suárez</strong>, <strong>Santiago Carrillo</strong> y el General <strong>Gutiérrez Mellado</strong>, que se negaron a obedecer las órdenes de Tejero. Mientras tanto, fuera del hemiciclo, la maquinaria golpista intentaba extender su control. El General de División <strong>Jaime Milans del Bosch</strong>, Capitán General de la III Región Militar, decretó el estado de excepción en Valencia y desplegó tanques por las calles, un movimiento que buscaba replicarse en otras regiones. Un 
              <DocLink 
                title="telegrama de Milans del Bosch" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Carpeta_21800_Secreto_telegrama_Milans_del_Bosch_a_capitanes_generales.pdf" 
                onClick={openPdf} 
              /> 
              enviado a otros capitanes generales intentaba sumar apoyos a la sublevación, pero la respuesta fue mayoritariamente de rechazo.
            </p>
            <p className="mb-6">
              La noche se hizo larga y tensa. Con los diputados retenidos en el Congreso, el Rey <strong>Juan Carlos I</strong> asumió un papel crucial en la defensa de la democracia. Desde la Zarzuela, el monarca contactó con los principales mandos militares, exigiendo el cese de la sublevación y la vuelta a la legalidad constitucional. Las 
              <DocLink 
                title="conversaciones telefónicas de la Zarzuela" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_1_R.pdf" 
                onClick={openPdf} 
              /> 
              y otros 
              <DocLink 
                title="registros del CNI" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_2_R.pdf" 
                onClick={openPdf} 
              /> 
              desclasificados revelan la firmeza del Rey y su determinación en abortar el golpe. Su mensaje televisado a la nación, vestido con el uniforme de Capitán General, fue el golpe de gracia para los golpistas, deslegitimando su acción y reafirmando el compromiso de las Fuerzas Armadas con la Constitución.
            </p>
          </section>

          {/* SECCIÓN 3: REACCIÓN INTERNACIONAL Y DIPLOMACIA */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="text-sepia-900" size={32} />
              <h3 className="text-3xl font-bold text-sepia-900 m-0">III. Reacción Internacional y Diplomacia: El Mundo Contiene el Aliento</h3>
            </div>
            <p className="mb-6">
              Mientras España se debatía en la incertidumbre, el mundo observaba con una mezcla de asombro y preocupación. La joven democracia española, apenas salida de décadas de dictadura, era un faro de esperanza en Europa, y su posible colapso generó una inmediata reacción diplomática. El Ministerio de Asuntos Exteriores se convirtió en el epicentro de una frenética actividad, gestionando el impacto global del golpe y coordinando la respuesta internacional. Un 
              <DocLink 
                title="expediente detallado sobre el conflicto diplomático con EE.UU." 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGMAE-R39017/D.1._AGMAE_R39017_Exp._4.pdf" 
                onClick={openPdf} 
              /> 
              revela las delicadas negociaciones y las presiones ejercidas por Washington, que temía una desestabilización en el flanco sur de la OTAN. Este expediente incluye documentos cruciales desde el 
              <DocLink title="D.1" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGMAE-R39017/D.1._AGMAE_R39017_Exp._4.pdf" onClick={openPdf} /> 
              hasta el 
              <DocLink title="D.14" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGMAE-R39017/D.14._AGMAE_R39017_Exp._4.pdf" onClick={openPdf} />, 
              mostrando la complejidad de las relaciones transatlánticas en un momento de crisis.
            </p>
            <p className="mb-6">
              La solidaridad internacional no se hizo esperar. Desde los consulados españoles en el extranjero, se recibieron conmovedoras muestras de apoyo de ciudadanos y gobiernos, un bálsamo en la angustiosa espera. Documentos como el 
              <DocLink title="D.15" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGMAE-40201/D.15._AGMAE_R40201_Exp._215.pdf" onClick={openPdf} />, 
              el 
              <DocLink title="D.16" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGMAE-40201/D.16._AGMAE_R40201_Exp._215.jpg" onClick={openPdf} /> 
              y el 
              <DocLink title="D.17" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGMAE-40201/D.17._AGMAE_R40201_Exp._215.jpg" onClick={openPdf} /> 
              recogen telegramas y mensajes de aliento que llegaban desde todos los rincones del planeta. Iberoamérica, con su propia historia de golpes militares, se volcó en el apoyo a la democracia española, como atestiguan los documentos desde el 
              <DocLink title="D.18" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGA-83-07633/D.18._AGA-83-07633_exp._4.pdf" onClick={openPdf} /> 
              a 
              <DocLink title="D.24" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGA-83-07633/D.24._AGA-83-07633_exp._4.pdf" onClick={openPdf} />. 
              Europa, por su parte, también mostró su inquebrantable respaldo, con mensajes que van desde el 
              <DocLink title="D.26" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGA-83-09301/D.26._AGA-83-09301_exp._5.pdf" onClick={openPdf} /> 
              a 
              <DocLink title="D.31" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGA-83-09301/D.31._AGA-83-09301_exp._5.pdf" onClick={openPdf} />. 
              Estos documentos no solo narran una crisis, sino también la fortaleza de los lazos democráticos y la condena unánime de la comunidad internacional a cualquier intento de involución.
            </p>
          </section>

          {/* SECCIÓN 4: EL DESENLACE Y LA RENDICIÓN */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <History className="text-sepia-900" size={32} />
              <h3 className="text-3xl font-bold text-sepia-900 m-0">IV. El Desenlace y la Rendición: El Amanecer de la Democracia</h3>
            </div>
            <p className="mb-6">
              La madrugada del 24 de febrero, tras horas de angustia y negociaciones, el golpe de estado comenzó a desmoronarse. La firmeza del Rey, la lealtad de la mayoría de los mandos militares y la condena unánime de la comunidad internacional dejaron a los golpistas sin opciones. Las 
              <DocLink 
                title="conversaciones telefónicas de la unidad de El Pardo" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_3._Conversaciones_telefonicas_unidad_militar_El_Pardo.pdf" 
                onClick={openPdf} 
              /> 
              revelan los últimos estertores de la resistencia, un diálogo que marca el fin de la insurrección. La rendición de Tejero y sus hombres en el Congreso, al amanecer, simbolizó la victoria de la democracia.
            </p>
            <p className="mb-6">
              Con el golpe abortado, la prioridad fue restaurar la normalidad y evaluar los daños. La Policía Nacional, en un esfuerzo por comprender la magnitud de la intentona y sus ramificaciones, emitió una serie de informes de situación detallados. Estos documentos, que cubren los días 
              <DocLink title="24" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/policia/SITUACION_REGIONES_POLICIALES_24-02-81.pdf" onClick={openPdf} />, 
              <DocLink title="25" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/policia/SITUACION_REGIONES_POLICIALES_25-02-81.pdf" onClick={openPdf} /> 
              y 
              <DocLink title="26 de febrero" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/policia/SITUACION_REGIONES_POLICIALES_26-02-81.pdf" onClick={openPdf} />, 
              ofrecen una panorámica de la situación en las distintas regiones policiales, el estado de las fuerzas de seguridad y las primeras valoraciones sobre la implicación de diversos actores. Son un testimonio de la rápida respuesta del Estado para recuperar el control y garantizar la estabilidad en un momento de extrema fragilidad.
            </p>
          </section>

          {/* SECCIÓN 5: EL JUICIO Y LA CAUSA 2/81 */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Gavel className="text-sepia-900" size={32} />
              <h3 className="text-3xl font-bold text-sepia-900 m-0">V. El Juicio y la Causa 2/81: La Justicia en Tiempos de Transición</h3>
            </div>
            <p className="mb-6">
              Con la democracia salvada, llegó el momento de la justicia. El procesamiento de los implicados en el golpe fue un proceso complejo y delicado, que buscaba sentar un precedente claro contra cualquier intento de subvertir el orden constitucional. Se conservan las comunicaciones de procesamiento de figuras clave como 
              <DocLink title="Milans del Bosch" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Carpeta_21800_Reservado_comunicacion_del_procesamiento_de_Milans.pdf" onClick={openPdf} /> 
              y otros implicados (
              <DocLink title="1" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Carpeta_21800_Reservado_comunicacion_procesamiento_de_implicado_1.pdf" onClick={openPdf} />, 
              <DocLink title="2" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Carpeta_21800_Reservado_comunicacion_procesamiento_de_implicado_2.pdf" onClick={openPdf} />, 
              <DocLink title="3" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Carpeta_21800_Reservado_comunicacion_procesamiento_de_implicado_3.pdf" onClick={openPdf} />, 
              <DocLink title="4" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Carpeta_21800_Reservado_comunicacion_procesamiento_de_implicado_4.pdf" onClick={openPdf} />, 
              <DocLink title="5" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Carpeta_21800_Reservado_comunicacion_procesamiento_de_implicado_5.pdf" onClick={openPdf} />, 
              <DocLink title="6" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Carpeta_21800_Reservado_comunicacion_procesamiento_de_implicado_6.pdf" onClick={openPdf} />
              ). Estos documentos son fundamentales para entender la red de complicidades y la jerarquía de la conspiración.
            </p>
            <p className="mb-6">
              El juicio, conocido como la Causa 2/81, se celebró en la Capitanía General de Madrid y atrajo la atención de todo el país. El CNI, a través de sus archivos desclasificados, nos permite acceder a las actas de la vista oral, un testimonio invaluable de cómo se desarrolló el proceso judicial. Desde el 
              <DocLink title="Documento 21" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_21_R.pdf" onClick={openPdf} /> 
              hasta el 
              <DocLink title="Documento 44" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_44_R.pdf" onClick={openPdf} />, 
              se cubren fechas clave de abril y mayo de 1982, revelando las declaraciones de los acusados, los testimonios de los testigos y los argumentos de la defensa y la acusación. También se incluyen las actas de marzo (
              <DocLink title="Doc 48" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_48_R.pdf" onClick={openPdf} /> 
              a 
              <DocLink title="Doc 63" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_63_R.pdf" onClick={openPdf} />
              ) y febrero (
              <DocLink title="Doc 66" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_66_R.pdf" onClick={openPdf} /> 
              a 
              <DocLink title="Doc 71" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_71_R.pdf" onClick={openPdf} />
              ), ofreciendo una visión completa del desarrollo del proceso. La sentencia, que condenó a los principales cabecillas, fue un hito en la consolidación del estado de derecho en España.
            </p>
            <p className="mb-6">
              Durante y después del juicio, la atención se mantuvo en el <strong>ambiente en los cuarteles</strong>, monitorizado de cerca por los servicios de inteligencia, como se detalla en el 
              <DocLink title="Documento 11" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_11_R.pdf" onClick={openPdf} /> 
              y las 
              <DocLink title="reacciones ante la sentencia" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_18_R.pdf" onClick={openPdf} />. 
              El papel de la <strong>JUJEM</strong> (Junta de Jefes de Estado Mayor) fue crucial y su actuación fue analizada en el 
              <DocLink title="Documento 17" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_17_R.pdf" onClick={openPdf} />,
              ofreciendo una perspectiva sobre cómo las cúpulas militares gestionaron la crisis y el proceso judicial. Estos documentos son esenciales para comprender la compleja interacción entre el poder judicial, el ejército y los servicios de inteligencia en un momento definitorio para la democracia española.
            </p>
          </section>

          {/* SECCIÓN 6: INVESTIGACIONES Y NOTAS ADICIONALES */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="text-sepia-900" size={32} />
              <h3 className="text-3xl font-bold text-sepia-900 m-0">VI. Investigaciones y Notas Adicionales: Ecos del Pasado y Lecciones para el Futuro</h3>
            </div>
            <p className="mb-6">
              El 23-F no terminó con la rendición de los golpistas ni con la sentencia judicial. Las investigaciones y el análisis de los hechos continuaron durante años, buscando desentrañar la "trama civil" y las verdaderas motivaciones detrás del intento de golpe. El archivo desclasificado nos ofrece una ventana a estas pesquisas adicionales, revelando notas sobre la 
              <DocLink title="Campaña contra S.M." url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/archivo/4_campana_contra_SM.pdf" onClick={openPdf} />, 
              un esfuerzo por desacreditar la figura del Rey en los años posteriores al golpe. También se abordan temas como el 
              <DocLink title="involucionismo político" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/archivo/5_INVOLUCIONISMO_POLITICO_PROVOCADO_POSIBLE_GOLPE_MILITAR_desp.pdf" onClick={openPdf} /> 
              y la persistencia de la amenaza de un 
              <DocLink title="posible golpe de estado" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/archivo/6_POSIBLE_GOLPE_DE_ESTADO_desp.pdf" onClick={openPdf} /> 
              en los años siguientes, mostrando la fragilidad de la democracia en sus primeros pasos.
            </p>
            <p className="mb-6">
              Entre los documentos desclasificados, encontramos también información relevante sobre figuras menos conocidas, pero cuya implicación fue objeto de escrutinio. Es el caso del Capitán <strong>Sánchez Valiente</strong>, de quien se incluye su 
              <DocLink title="hoja de servicios" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Causa_9481_Reservado_Hoja_de_servicios_del_Cap_Sanchez_Valiente.pdf" onClick={openPdf} />, 
              el 
              <DocLink title="parte por abandono de destino" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Causa_9481_Reservado_parte_por_abandono_de_destino_del_Cap_Sanchez_Valiente.pdf" onClick={openPdf} /> 
              y un 
              <DocLink title="informe de asesoría jurídica" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Causa_9481_reservado_Informe_de_Asesoria_Juridica_General_sobre_situacion_administrativa_del_Cap_Sanchez_Valiente.pdf" onClick={openPdf} /> 
              que arrojan luz sobre su situación administrativa y su posible conexión con los hechos. Estos detalles, aunque periféricos, contribuyen a completar el complejo mosaico de la intentona golpista.
            </p>
            <p className="mb-6">
              Finalmente, el archivo nos ofrece una mirada a las consecuencias a largo plazo para los condenados. Se recogen notas de 1983 sobre la 
              <DocLink title="libertad de los condenados" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/archivo/7_Notas_1983_desp.pdf" onClick={openPdf} /> 
              y una 
              <DocLink title="revisión de la sentencia en 1987" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_84_R.pdf" onClick={openPdf} />, 
              mostrando cómo evolucionó la situación legal de los implicados y el impacto de sus acciones en sus vidas. Estos documentos finales cierran un capítulo crucial de la historia de España, pero también nos invitan a reflexionar sobre la importancia de la memoria histórica y la vigilancia constante para preservar los valores democráticos.
            </p>
          </section>

          {/* LISTADO COMPLETO DE DOCUMENTOS (Para asegurar que están TODOS) */}
          <section className="mt-20 pt-10 border-t border-sepia-900/20">
            <h3 className="text-2xl font-bold text-sepia-900 mb-8 flex items-center gap-2">
              <BookOpen size={24} />
              Índice Completo de Documentos Desclasificados
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 text-sm">
              <div>
                <h4 className="font-bold uppercase tracking-wider text-sepia-900/60 mb-4">Ministerio del Interior</h4>
                <ul className="space-y-2 list-none p-0">
                  <li><DocLink title="Guardia Civil: Docs 1-11" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_1._Conversacion_telefonica_GARCIA_CARRES_y_Tcol._TEJERO.pdf" onClick={openPdf} /></li>
                  <li><DocLink title="Policía: Notas Informativas 1981-1983" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/policia/SITUACION_REGIONES_POLICIALES_24-02-81.pdf" onClick={openPdf} /></li>
                  <li><DocLink title="Archivo: Notas sobre Involucionismo" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/archivo/1_Policia_Nacional_12_NOV_1981.pdf" onClick={openPdf} /></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold uppercase tracking-wider text-sepia-900/60 mb-4">Ministerio de Defensa</h4>
                <ul className="space-y-2 list-none p-0">
                  <li><DocLink title="CNI: Expedientes 1-84" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_1_R.pdf" onClick={openPdf} /></li>
                  <li><DocLink title="Archivo Histórico: Carpetas 21800-21804" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Carpeta_21800_Secreto_oficio_dando_cuenta_toma_de_declaracion_1.pdf" onClick={openPdf} /></li>
                  <li><DocLink title="Causa 9481: Sánchez Valiente" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Causa_9481_Reservado_parte_por_abandono_de_destino_del_Cap_Sanchez_Valiente.pdf" onClick={openPdf} /></li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h4 className="font-bold uppercase tracking-wider text-sepia-900/60 mb-4">Ministerio de Asuntos Exteriores</h4>
                <ul className="space-y-2 list-none p-0 grid md:grid-cols-2 gap-x-4">
                  <li><DocLink title="Conflicto EE.UU. (D1-D14)" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGMAE-R39017/D.1._AGMAE_R39017_Exp._4.pdf" onClick={openPdf} /></li>
                  <li><DocLink title="Solidaridad Europa (D26-D31)" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGA-83-09301/D.26._AGA-83-09301_exp._5.pdf" onClick={openPdf} /></li>
                  <li><DocLink title="Apoyo Iberoamérica (D18-D25)" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGA-83-07633/D.18._AGA-83-07633_exp._4.pdf" onClick={openPdf} /></li>
                  <li><DocLink title="Consulados (D15-D17)" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGMAE-40201/D.15._AGMAE_R40201_Exp._215.pdf" onClick={openPdf} /></li>
                </ul>
              </div>
            </div>

            <p className="text-sepia-900/60 italic text-sm mt-10 text-center">
              Esta página integra la totalidad de los documentos desclasificados disponibles en el portal oficial de La Moncloa.
            </p>
          </section>

        </article>
      </main>

      <PDFModal 
        isOpen={!!selectedPdf}
        onClose={() => setSelectedPdf(null)}
        pdfUrl={selectedPdf?.url || ''}
        title={selectedPdf?.title || ''}
      />
    </div>
  );
};
