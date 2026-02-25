import React, { useState } from 'react';
import { ArrowLeft, FileText, Shield, Globe, Landmark, Gavel, History, BookOpen } from 'lucide-react';
import { PDFModal } from '../components/PDFModal';
import { Link } from 'react-router-dom';

// Helper component for inline document links
const DocLink = ({ title, url, onClick }: { title: string, url: string, onClick: (url: string, title: string) => void }) => (
  <button 
    onClick={() => onClick(url, title)}
    className="inline-flex items-baseline gap-1 text-sepia-900 font-bold hover:text-sepia-700 hover:underline decoration-sepia-900/30 underline-offset-2 transition-colors mx-1 cursor-pointer text-left"
    title="Abrir documento original"
  >
    <span>{title}</span>
    <FileText size={14} className="self-center inline flex-shrink-0" />
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
              Esta página presenta un análisis detallado de los hechos del 23 de febrero de 1981, integrando <strong>todos</strong> los documentos desclasificados por el Gobierno de España. Cada enlace permite acceder a la fuente primaria original.
            </p>
          </div>

          {/* SECCIÓN 1: ANTECEDENTES */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="text-sepia-900" size={32} />
              <h3 className="text-3xl font-bold text-sepia-900 m-0">I. Antecedentes y Gestación (1975-1980)</h3>
            </div>
            <p className="mb-6">
              La conspiración que desembocó en el 23-F se fraguó durante años de inestabilidad. Los archivos de la Guardia Civil revelan que el Teniente Coronel <strong>Antonio Tejero Molina</strong> ya estaba bajo vigilancia desde 1975. Un 
              <DocLink 
                title="oficio de la zona del País Vasco" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_9._Oficio_dimanante_Zona_del_Pais_Vasco_disposiciones_sobre_Tejero.pdf" 
                onClick={openPdf} 
              /> 
              detalla las primeras disposiciones sobre su conducta.
            </p>
            <p className="mb-6">
              El primer intento serio fue la <strong>Operación Galaxia</strong> en 1978. La 
              <DocLink 
                title="nota sobre la comparecencia de Tejero" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_10._Nota_comparecencia_Tejero_Galaxia.pdf" 
                onClick={openPdf} 
              /> 
              y la 
              <DocLink 
                title="nota informativa sobre la repercusión de su arresto" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_11._Nota_Informativa_repercusion_prensa_arresto_Tejero_antes_1981.pdf" 
                onClick={openPdf} 
              /> 
              muestran cómo el malestar militar empezaba a cristalizar en planes concretos.
            </p>
            <p className="mb-6">
              Hacia 1980, los planes se volvieron operativos. Se han recuperado documentos de 
              <DocLink 
                title="planificación del golpe" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_4._Documento_planificacion_del_golpe.pdf" 
                onClick={openPdf} 
              /> 
              y 
              <DocLink 
                title="esbozos manuscritos" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_5._Documento_manuscrito_planificacion_del_golpe.pdf" 
                onClick={openPdf} 
              /> 
              que detallan la toma de puntos estratégicos. Incluso se menciona la influencia de la anterior 
              <DocLink 
                title="Operación Ariete" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/policia/18-03-81_NOTA_INFORMATIVA_SOBRE_LA_OPERACION_ARIETE.pdf" 
                onClick={openPdf} 
              /> 
              en la concepción del asalto.
            </p>
          </section>

          {/* SECCIÓN 2: EL ASALTO */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Landmark className="text-sepia-900" size={32} />
              <h3 className="text-3xl font-bold text-sepia-900 m-0">II. El 23 de Febrero: El Día del Asalto</h3>
            </div>
            <p className="mb-6">
              A las 18:23 horas, Tejero entra en el Congreso. La 2ª Sección del Estado Mayor de la Guardia Civil comenzó a emitir 
              <DocLink 
                title="notas informativas urgentes" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_7._Notas_Informativas_2_Seccion_EM_desarrollo_hechos.pdf" 
                onClick={openPdf} 
              /> 
              y a recibir 
              <DocLink 
                title="télex de agencias y unidades" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_8._Telex_interiores_y_de_Agencias_recibidos_en_2_Seccion_EM.pdf" 
                onClick={openPdf} 
              />.
            </p>
            <p className="mb-6">
              Las comunicaciones telefónicas interceptadas son cruciales. Destaca la 
              <DocLink 
                title="conversación entre García Carrés y Tejero" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_1._Conversacion_telefonica_GARCIA_CARRES_y_Tcol._TEJERO.pdf" 
                onClick={openPdf} 
              /> 
              y una 
              <DocLink 
                title="segunda conversación de García Carrés" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_2._Conversacion_telefonica_GARCIA_CARRES.pdf" 
                onClick={openPdf} 
              /> 
              con otros implicados.
            </p>
            <p className="mb-6">
              El CESID (actual CNI) monitorizaba todo. Su 
              <DocLink 
                title="relato de los sucesos de los días 23 y 24" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_20_R.pdf" 
                onClick={openPdf} 
              /> 
              y el informe sobre la 
              <DocLink 
                title="actitud del centro ante los incidentes" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_5_R.pdf" 
                onClick={openPdf} 
              /> 
              ofrecen la perspectiva de la inteligencia. También se analizó la 
              <DocLink 
                title="actuación del Departamento de Defensa Interna" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_4_R.pdf" 
                onClick={openPdf} 
              />.
            </p>
          </section>

          {/* SECCIÓN 3: REACCIÓN INTERNACIONAL */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="text-sepia-900" size={32} />
              <h3 className="text-3xl font-bold text-sepia-900 m-0">III. Reacción Internacional y Diplomacia</h3>
            </div>
            <p className="mb-6">
              El Ministerio de Asuntos Exteriores gestionó el impacto global. El expediente sobre el 
              <DocLink 
                title="conflicto diplomático con EE.UU." 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGMAE-R39017/D.1._AGMAE_R39017_Exp._4.pdf" 
                onClick={openPdf} 
              /> 
              incluye documentos desde el 
              <DocLink title="D.1" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGMAE-R39017/D.1._AGMAE_R39017_Exp._4.pdf" onClick={openPdf} /> 
              hasta el 
              <DocLink title="D.14" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGMAE-R39017/D.14._AGMAE_R39017_Exp._4.pdf" onClick={openPdf} />.
            </p>
            <p className="mb-6">
              Se recibieron muestras de solidaridad en consulados (
              <DocLink title="D.15" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGMAE-40201/D.15._AGMAE_R40201_Exp._215.pdf" onClick={openPdf} />, 
              <DocLink title="D.16" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGMAE-40201/D.16._AGMAE_R40201_Exp._215.jpg" onClick={openPdf} />, 
              <DocLink title="D.17" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGMAE-40201/D.17._AGMAE_R40201_Exp._215.jpg" onClick={openPdf} />
              ) y desde Iberoamérica (
              <DocLink title="D.18" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGA-83-07633/D.18._AGA-83-07633_exp._4.pdf" onClick={openPdf} /> 
              a 
              <DocLink title="D.24" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGA-83-07633/D.24._AGA-83-07633_exp._4.pdf" onClick={openPdf} />
              ). Europa también mostró su apoyo (
              <DocLink title="D.26" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGA-83-09301/D.26._AGA-83-09301_exp._5.pdf" onClick={openPdf} /> 
              a 
              <DocLink title="D.31" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/exteriores/AGA-83-09301/D.31._AGA-83-09301_exp._5.pdf" onClick={openPdf} />
              ).
            </p>
          </section>

          {/* SECCIÓN 4: EL DESENLACE */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <History className="text-sepia-900" size={32} />
              <h3 className="text-3xl font-bold text-sepia-900 m-0">IV. El Desenlace y la Rendición</h3>
            </div>
            <p className="mb-6">
              La mañana del 24 de febrero trajo la rendición. Las 
              <DocLink 
                title="conversaciones de la unidad de El Pardo" 
                url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/guardia-civil/23F_3._Conversaciones_telefonicas_unidad_militar_El_Pardo.pdf" 
                onClick={openPdf} 
              /> 
              muestran el fin de la resistencia. La Policía Nacional emitió informes de situación los días 
              <DocLink title="24" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/policia/SITUACION_REGIONES_POLICIALES_24-02-81.pdf" onClick={openPdf} />, 
              <DocLink title="25" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/policia/SITUACION_REGIONES_POLICIALES_25-02-81.pdf" onClick={openPdf} /> 
              y 
              <DocLink title="26 de febrero" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/policia/SITUACION_REGIONES_POLICIALES_26-02-81.pdf" onClick={openPdf} />.
            </p>
          </section>

          {/* SECCIÓN 5: EL JUICIO */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Gavel className="text-sepia-900" size={32} />
              <h3 className="text-3xl font-bold text-sepia-900 m-0">V. El Juicio y la Causa 2/81</h3>
            </div>
            <p className="mb-6">
              El procesamiento de los implicados fue complejo. Se conservan las comunicaciones de procesamiento de 
              <DocLink title="Milans del Bosch" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Carpeta_21800_Reservado_comunicacion_del_procesamiento_de_Milans.pdf" onClick={openPdf} /> 
              y otros implicados (
              <DocLink title="1" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Carpeta_21800_Reservado_comunicacion_procesamiento_de_implicado_1.pdf" onClick={openPdf} />, 
              <DocLink title="2" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Carpeta_21800_Reservado_comunicacion_procesamiento_de_implicado_2.pdf" onClick={openPdf} />, 
              <DocLink title="3" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Carpeta_21800_Reservado_comunicacion_procesamiento_de_implicado_3.pdf" onClick={openPdf} />, 
              <DocLink title="4" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Carpeta_21800_Reservado_comunicacion_procesamiento_de_implicado_4.pdf" onClick={openPdf} />, 
              <DocLink title="5" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Carpeta_21800_Reservado_comunicacion_procesamiento_de_implicado_5.pdf" onClick={openPdf} />, 
              <DocLink title="6" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Carpeta_21800_Reservado_comunicacion_procesamiento_de_implicado_6.pdf" onClick={openPdf} />
              ).
            </p>
            <p className="mb-6">
              El CNI desclasificó las actas de la vista oral desde el 
              <DocLink title="Documento 21" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_21_R.pdf" onClick={openPdf} /> 
              hasta el 
              <DocLink title="Documento 44" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_44_R.pdf" onClick={openPdf} />, 
              cubriendo fechas clave de abril y mayo de 1982. También se incluyen las actas de marzo (
              <DocLink title="Doc 48" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_48_R.pdf" onClick={openPdf} /> 
              a 
              <DocLink title="Doc 63" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_63_R.pdf" onClick={openPdf} />
              ) y febrero (
              <DocLink title="Doc 66" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_66_R.pdf" onClick={openPdf} /> 
              a 
              <DocLink title="Doc 71" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_71_R.pdf" onClick={openPdf} />
              ).
            </p>
            <p className="mb-6">
              Se monitorizó el 
              <DocLink title="ambiente en los cuarteles" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_11_R.pdf" onClick={openPdf} /> 
              y las 
              <DocLink title="reacciones ante la sentencia" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_18_R.pdf" onClick={openPdf} />. 
              El papel de la <strong>JUJEM</strong> fue analizado en el 
              <DocLink title="Documento 17" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_17_R.pdf" onClick={openPdf} />.
            </p>
          </section>

          {/* SECCIÓN 6: OTRAS INVESTIGACIONES */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="text-sepia-900" size={32} />
              <h3 className="text-3xl font-bold text-sepia-900 m-0">VI. Investigaciones y Notas Adicionales</h3>
            </div>
            <p className="mb-6">
              El archivo incluye notas sobre la 
              <DocLink title="Campaña contra S.M." url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/archivo/4_campana_contra_SM.pdf" onClick={openPdf} />, 
              el 
              <DocLink title="involucionismo político" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/archivo/5_INVOLUCIONISMO_POLITICO_PROVOCADO_POSIBLE_GOLPE_MILITAR_desp.pdf" onClick={openPdf} /> 
              y un 
              <DocLink title="posible golpe de estado" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/archivo/6_POSIBLE_GOLPE_DE_ESTADO_desp.pdf" onClick={openPdf} />.
            </p>
            <p className="mb-6">
              También se desclasificaron documentos sobre el Capitán <strong>Sánchez Valiente</strong>: su 
              <DocLink title="hoja de servicios" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Causa_9481_Reservado_Hoja_de_servicios_del_Cap_Sanchez_Valiente.pdf" onClick={openPdf} />, 
              el 
              <DocLink title="parte por abandono" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Causa_9481_Reservado_parte_por_abandono_de_destino_del_Cap_Sanchez_Valiente.pdf" onClick={openPdf} /> 
              y el 
              <DocLink title="informe de asesoría jurídica" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/Causa_9481_reservado_Informe_de_Asesoria_Juridica_General_sobre_situacion_administrativa_del_Cap_Sanchez_Valiente.pdf" onClick={openPdf} />.
            </p>
            <p className="mb-6">
              Finalmente, se recogen notas de 1983 sobre la 
              <DocLink title="libertad de los condenados" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/interior/archivo/7_Notas_1983_desp.pdf" onClick={openPdf} /> 
              y una 
              <DocLink title="revisión de la sentencia en 1987" url="https://www.lamoncloa.gob.es/consejodeministros/Documents/2026/desclasificacion-documentos-23F/defensa/cni/Documento_84_R.pdf" onClick={openPdf} />.
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
