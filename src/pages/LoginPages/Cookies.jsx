import React, { useState } from 'react';

const Cookies = () => {

  return (
    <div className='flex flex-col gap-3 m-auto w-full md:w-[70rem] min-h-[10rem] border-1 border-slate-900 rounded-xl backdrop-blur-sm bg-black/30 p-10 pt-[10rem]'>
      <div className='text-white  text-[0.5rem] md:text-[1rem]'>
        <div class='py-4'>
          <div
            className="ms-2 text-[1.5rem] md:text-[1.8rem] font-medium text-white text-left md:text-justify py-2"
          >
            POLITICA DE COOKIES
          </div>
          <div className="ms-2 text-[1.1rem] md:text-[1.2rem] font-medium text-white text-left md:text-justify py-2">
            Cookies de redes sociales externas:
          </div>
          <div className='py-2'>
            <div className="ms-2 text-[0.9rem] md:text-[1rem] text-white text-left md:text-justify py-1 px-4">
              se utilizan para que los visitantes puedan
              interactuar con el contenido de diferentes plataformas sociales(facebook,
              youtube, twitter, linkedIn, etc.) y que se generen únicamente para los usuarios
              de dichas redes sociales.Las condiciones de utilización de estas cookies y la
              información recopilada se regula por la política de privacidad de la plataforma
              social correspondiente.
            </div>
          </div>
          <div className="ms-2 text-[1.1rem] md:text-[1.2rem] font-medium text-white text-left md:text-justify py-2">
            Desactivación y eliminación de cookies
            <div className="ms-2 text-[0.9rem] md:text-[1rem] text-white text-left md:text-justify py-1 px-4">
              Tienes la opción de permitir, bloquear o eliminar las cookies instaladas en tu equipo
              mediante la configuración de las opciones del navegador instalado en su equipo.Al
              desactivar cookies, algunos de los servicios disponibles podrían dejar de estar
              operativos.La forma de deshabilitar las cookies es diferente para cada navegador, pero
              normalmente puede hacerse desde el menú Herramientas u Opciones.También puede
              consultarse el menú de Ayuda del navegador dónde puedes encontrar instrucciones.El
              usuario podrá en cualquier momento elegir qué cookies quiere que funcionen en este
              sitio web.
            </div>
          </div>

          <div className="ms-2 text-[1.1rem] md:text-[1.2rem] font-medium text-white text-left md:text-justify py-2">
            Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante
            la configuración de las opciones del navegador instalado en su ordenador:
          </div>
          <div className='py-2'>
            <div className="ms-2 text-[0.9rem] md:text-[1rem] text-white text-left md:text-justify py-1 px-4">
               Microsoft Internet Explorer o Microsoft Edge: http://windows.microsoft.com/eses/windows-vista/Block-or-allow-cookies
            </div>
            <div className="ms-2 text-[0.9rem] md:text-[1rem] text-white text-left md:text-justify py-1 px-4">
               Mozilla Firefox: http://support.mozilla.org/es/kb/impedir-que-los-sitios-webguarden-sus-preferencia
            </div>
            <div className="ms-2 text-[0.9rem] md:text-[1rem] text-white text-left md:text-justify py-1 px-4">
               Chrome: https://support.google.com/accounts/answer/61416?hl=es
            </div>
            <div className="ms-2 text-[0.9rem] md:text-[1rem] text-white text-left md:text-justify py-1 px-4">
               Safari: http://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-lascookies/
            </div>
            <div className="ms-2 text-[0.9rem] md:text-[1rem] text-white text-left md:text-justify py-1 px-4">
               Opera: http://help.opera.com/Linux/10.60/es-ES/cookies.html
            </div>
          </div>
          <div className="ms-2 text-[1.1rem] md:text-[1.2rem] font-medium text-white text-left md:text-justify py-2">
            Aceptación de la Política de cookies
            <div className="ms-2 text-[0.9rem] md:text-[1rem] text-white text-left md:text-justify py-1 px-4">
              www.emotionseo.ai asume que usted acepta el uso de cookies.No obstante, muestra
              información sobre su Política de cookies en la parte inferior o superior de cualquier
              página del portal con cada inicio de sesión con el objeto de que usted sea consciente
              Ante esta información es posible llevar a cabo las siguientes acciones:
            </div>
          </div>
          <div className='py-2'>
            <div className="ms-2 text-[0.9rem] md:text-[1rem] text-white text-left md:text-justify py-1 px-4">
               Aceptar cookies.No se volverá a visualizar este aviso al acceder a cualquier
              página del portal durante la presente sesión.
            </div>
            <div className="ms-2 text-[0.9rem] md:text-[1rem] text-white text-left md:text-justify py-1 px-4">
               Cerrar.Se oculta el aviso en la presente página.
            </div>
            <div className="ms-2 text-[0.9rem] md:text-[1rem] text-white text-left md:text-justify py-1 px-4">
               Modificar su configuración.Podrá obtener más información sobre qué son las
              cookies, conocer la Política de cookies de www.emotionseo.ai y modificar la
              configuración de su navegador.
            </div>
          </div>
        </div>
        
        
       
         
   
      </div>
    </div>
  );
};

export default Cookies;
