import React from "react";
import Card from "../../../Components/Card";

const OptionItems = [
  {
    title: "Conexión Emocional Profundizada",
    content:
      "Crear contenido que no solo es informativo sino también emocionalmente atractivo, resonando profundamente con la audiencia y aumentando el compromiso del usuario.",
  },
  {
    title: "Mejora en la Optimización para Motores de Búsqueda",
    content:
      "Generar artículos que están perfectamente alineados con las prácticas de SEO, ayudando a mejorar el ranking en los motores de búsqueda como Google.",
  },
  {
    title: "Contenido Versátil para Diversos Nichos",
    content:
      "Adaptar fácilmente el tono y estilo del contenido para adecuarse a una amplia gama de nichos de mercado, manteniendo siempre un alto nivel de relevancia y atractivo emocional.",
  },
  {
    title: "Eficiencia en la Producción de Contenido",
    content:
      "Ahorrar tiempo y recursos en la creación de contenido, gracias a la generación automática de textos que requieren mínimas ediciones o ajustes.",
  },
  {
    title: "Mejora en la Estrategia de Marketing de Contenidos",
    content:
      "Implementar estrategias de marketing de contenidos más efectivas, utilizando textos que no solo captan la atención por su calidad SEO, sino también por su capacidad de generar una respuesta emocional en los lectores.",
  },
  {
    title: "Análisis Avanzado de Sentimientos",
    content:
      "Beneficiarse de un sofisticado análisis de sentimientos para entender mejor cómo el tono y las emociones del contenido pueden influir en la percepción y el comportamiento del público objetivo.",
  },
];

const OptionPage = () => {
  return (
    <div className=" w-full flex flex-col items-center gap-10">
      <div className="text-[2rem] md:text-[3rem] text-white text-center px-5 pb-10">
        ¿Que puedes lograr con EmotionSEO?
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-15 px-5 md:px-10 lg:px-20 items-stretch">
        {OptionItems.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};

export default OptionPage;
