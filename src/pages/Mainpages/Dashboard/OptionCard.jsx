import React from "react";

const optionItems = [
  {
    title: "Generación Instantánea de Contenido Emocional y SEO-Optimizado",
    content:
      "Crea artículos en segundos que no solo están optimizados para SEO, sino que también están alineados emocionalmente para maximizar la visibilidad de tu web.",
  },
  {
    title: "Dominio emocional en español e ingles",
    content:
      "Escribe y analiza sentimientos en más de 30 idiomas con precisión, asegurando que cada artículo resuene de manera auténtica con audiencias globales.",
  },
  {
    title: "Versatilidad Temática con Enfoque Emocional",
    content:
      "Capacidad para generar contenido adaptado a cualquier tema, infundiendo un análisis emocional detallado para cada nicho específico.",
  },
  {
    title: "Identificación de Palabras Clave Emocionales Ocultas",
    content:
      "Descubre términos emocionales y de búsqueda inexplorados para fortalecer tu posicionamiento y conexión con los lectores.",
  },
  {
    title: "Recomendaciones para Potenciar la Resonancia Emocional",
    content:
      "Recibe sugerencias para enriquecer tu contenido, mejorando tanto en SEO como en impacto emocional para elevar tus rankings de búsqueda.",
  },
  {
    title: "Creación de Contenidos Auténticos y Humanizados",
    content:
      "Desarrolla contenidos que superan la percepción de automatización, ofreciendo una experiencia genuinamente humana e indetectable por algoritmos de IA.",
  },
];

const OptionCard = () => {
  return (

    <div className=" w-full flex justify-center px-8">
    <div className=" bg-slate-700 w-auto rounded-tl-[3rem] md:rounded-tl-[10rem] rounded-tr-[3rem] md:rounded-tr-[10rem] rounded-br-[0.5rem] md:rounded-br-[2rem] rounded-bl-[3rem] md:rounded-bl-[10rem]">
        <div class="flex flex-col justify-around p-5 md:p-[5rem] leading-normal">
          <h4 class="text-2xl font-bold tracking-tight text-white pt-10 md:pt-0 pb-5 md:pb-10">
            Olvídate de malgastar tiempo y recursos en la creación de contenido
          </h4>
          {optionItems.map((item) => (
            <div class='py-4'>
              <input
                checked
                id="teal-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mr-2 text-purple-800 bg-gray-100 border-gray-300 rounded-full scale-150 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="teal-checkbox"
                className="ms-2 text-[1rem] md:text-[1.3rem] font-medium text-white text-justify md:text-left"
              >
                {item.title}
              </label>
            </div>
          ))}

        </div>
      </div>
    </div>

  );
};

export default OptionCard;
