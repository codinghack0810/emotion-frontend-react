import React, { useState } from 'react';

const PrivacyItems = [
  {
    title: "Legalidad:",
    content:
      "Solo recopilaremos sus Datos personales para fines específicos, explícitos y legítimos.",
  },
  {
    title: "Minimización de datos:",
    content:
      "Limitamos la recogida de datos de carácter personal a lo que es estrictamente relevante y necesario para los fines para los que se han recopilado."
  },
  {
    title: "Limitación de la Finalidad:",
    content:
      "Solo recogeremos sus datos personales para los fines declarados y solo según sus deseos."
  },
  {
    title: "Precisión:",
    content:
      "Mantendremos sus datos personales exactos y actualizados.",
  },
  {
    title: "Seguridad de los Datos:",
    content:
      "Aplicamos las medidas técnicas y organizativas adecuadas y proporcionales a los riesgos para garantizar que sus datos no sufran daños, tales como divulgación o acceso no autorizado, la destrucción accidental o ilícita o su pérdida accidental o alteración y cualquier otra forma de tratamiento ilícito.",
  },
  {
    title: "Acceso y Rectificación:",
    content:
      "Disponemos de medios para que acceda o rectifique sus datos cuando lo considere oportuno.",
  },
  {
    title: "Conservación:",
    content:
      "Conservamos sus datos personales de manera legal y apropiada y solo mientras es necesario para los fines para los que se han recopilado.",
  },
  {
    title: "Las transferencias internacionales:",
    content:
      "cuando se dé el caso de que sus datos vayan a ser transferidos fuera de la UE/EEE se protegerán adecuadamente."
  },
  {
    title: "Terceros:",
    content:
      "El acceso y transferencia de datos personales a terceros se llevan a cabo de acuerdo con las leyes y reglamentos aplicables y con las garantías contractuales adecuadas."
  },
  {
    title: "Marketing Directo y cookies:",
    content:
      "Cumplimos con la legislación aplicable en materia de publicidad y cookies.",
  },
  {
    title: "RECOGIDA Y TRATAMIENTO DE SUS DATOS PERSONALESLas tipos de datos que se pueden solicitar y tratar son:",
    content:
      "Datos de carácter identificativo. También recogemos de forma automática datos sobre su visita a nuestro sitio web según se describe en la política de cookies. Siempre que solicitemos sus Datos personales, le informaremos con claridad de qué datos personales recogemos y con qué fin.",
  },
  {
    title: "En general, recogemos y tratamos sus datos personales con el propósito de:",
    content:
      "Proporcionar información, servicios, productos, información relevante y novedades en el sector.Envío de comunicaciones.",
  },
  {
    title: "LEGITIMIDAD",
    content:
      "De acuerdo con la normativa de protección de datos aplicable, sus datos personales podrán tratarse siempre que: Nos ha dado su consentimiento a los efectos del tratamiento. Por supuesto podrá retirar su consentimiento en cualquier momento.Por requerimiento legal.Por exisitr un interés legítimo que no se vea menoscabado por sus derechos de privacidad, como por ejemplo el envío de información comercial bien por suscripción a nuestra newsletter o por su condición de cliente.Por se necesaria para la prestación de alguno de nuestros servicios mediante relación contractual entre usted y nosotros."
  },
  {
    title: "COMUNICACIÓN DE DATOS PERSONALES",
    content:
      "Los datos pueden ser comunicados a empresas relacionadas con CLOSERS AVENUE, S.L. para la prestación de los diversos servicios en calidad de Encargados del Tratamiento. La empresa no realizará ninguna cesión, salvo por obligación legal.",
  },
  {
    title: "SUS DERECHOS",
    content:
      "En relación con la recogida y tratamiento de sus datos personales, puede ponerse en contacto con nosotros en cualquier momento para: Acceder a sus datos personales y a cualquier otra información indicada en el Artículo 15.1 del RGPD.Rectificar sus datos personales que sean inexactos o estén incompletos de acuerdo con el Artículo 16 del RGPD.Suprimir sus datos personales de acuerdo con el Artículo 17 del RGPD.Limitar el tratamiento de sus datos personales de acuerdo con el Artículo 18 del RGPD.Solicitar la portabilidad de sus datos de acuerdo con el Artículo 20 del RGPD.Oponerse al tratamiento de sus datos personales de acuerdo con el artículo 21 del RGPD. Si ha otorgado su consentimiento para alguna finalidad concreta, tiene derecho a retirar el consentimiento otorgado en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.  Puede ejercer estos derechos enviando comunicación, motivada y acreditada, a info@undercontent.com. También tiene derecho a presentar una reclamación ante la Autoridad de control competente (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.",
  },
  {
    title: "INFORMACIÓN LEGAL",
    content:
      "Los requisitos de esta Política complementan, y no reemplazan, cualquier otro requisito existente bajo la ley de protección de datos aplicable, que será la que prevalezca en cualquier caso. Esta Política está sujeta a revisiones periódicas y la empresa puede modificarla en cualquier momento. Cuando esto ocurra, le avisaremos de cualquier cambio y le pediremos que vuelva a leer la versión más reciente de nuestra Política y que confirme su aceptación.",
  },
];

const Privacy = () => {
  return (
    <div className='flex flex-col gap-3 m-auto w-full md:w-[70rem] min-h-[10rem] border-1 border-slate-900 rounded-xl backdrop-blur-sm bg-black/30 p-10 pt-[10rem]'>
    <div className='text-white  text-[0.5rem] md:text-[1rem]'>
        <p className="ms-2 text-[1.2rem] md:text-[2rem] font-medium text-white text-center py-2">
          Política de Privacidad
        </p>
        <div>
          <div class='py-4'>
            <div
              className="ms-2 text-[1.2rem] md:text-[2rem] font-medium text-white text-center py-2"
            >
              1. INFORMACIÓN AL USUARIO
            </div>
            <div
              className="ms-2 text-[1rem] md:text-[1.2rem] font-medium text-white text-justify"
            >
              Como Responsable del Tratamiento, le informa que, según lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril, (RGPD) y en la L.O. 3/2018, de 5 de diciembre, de protección de datos y garantía de los derechos digitales (LOPDGDD), trataremos su datos tal y como reflejamos en la presente Política de Privacidad.
              En esta Política de Privacidad describimos cómo recogemos sus datos personales y por qué los recogemos, qué hacemos con ellos, con quién los compartimos, cómo los protegemos y sus opciones en cuanto al tratamiento de sus datos personales.
              Esta Política se aplica al tratamiento de sus datos personales recogidos por la empresa para la prestación de sus servicios. Si acepta las medidas de esta Política, acepta que tratemos sus datos personales como se define en esta Política.
            </div>
          </div>
          <div class='py-4'>
            <div
              className="ms-2 text-[1.2rem] md:text-[2rem] font-medium text-white text-center py-2"
            >
              2. CONTACTO
            </div>
            <div
              className="ms-2 text-[1rem] md:text-[1.2rem] font-medium text-white text-center"
            >
              Representante legal: Closers Avenue SL<br />
              B72718620<br />
              Calle Jaume Cantater 14, 08221 Terrassa, Barcelona<br />
              Nombre comercial: EmotionSEO
            </div>
          </div>
          <div class='py-4'>
            <div
              className="ms-2 text-[1.2rem] md:text-[2rem] font-medium text-white text-center py-2"
            >
              3. PRINCIPIOS CLAVE
            </div>
              {PrivacyItems.map((item) => (
                <div class='py-2'>
                  <div
                    className="ms-2 text-[1.3rem] md:text-[1.5rem] font-medium text-white text-left md:text-justify py-2"
                  >
                    {item.title}
                  </div>
                  <div
                    className="ms-2 text-[1rem] md:text-[1rem] font-medium text-white text-left md:text-justify"
                  >
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div >
    // 

    // 3. PRINCIPIOS CLAVE



    //         </p>
    //         <div class="relative z-0 w-full mb-3 group">

    //         </div>



    //     </div>

  );
};

export default Privacy;