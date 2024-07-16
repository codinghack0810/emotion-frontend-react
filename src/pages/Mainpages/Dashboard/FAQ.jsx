import React from "react";
import Dropdown from "../../../Components/Dropdown.jsx";

const faqItems = [
  {
    // question: "• What is EmotionSEO?",
    question: "• Qué es EmotionSEO?",
    answer:
      // "EmotionSEO is a content generation tool powered by artificial intelligence that combines SEO optimization with advanced emotion analysis, to create texts that not only rank well in search engines, but also resonate emotionally with readers.",
      "EmotionSEO es una herramienta de generación de contenido impulsada por inteligencia artificial que combina la optimización de SEO con un análisis avanzado de emociones, para crear textos que no solo posicionan bien en buscadores, sino que también resuenan emocionalmente con los lectores.",
  },
  {
    question: "• ¿Cómo funciona el análisis emocional de EmotionSEO?",
    answer:
      "EmotionSEO utiliza algoritmos de inteligencia artificial y procesamiento del lenguaje natural para identificar y adaptar el tono emocional del contenido, asegurando que este conecte genuinamente con los sentimientos y estados de ánimo de la audiencia",
  },
  {
    question: "• ¿EmotionSEO puede escribir en varios idiomas?",
    answer:
      "EmotionSEO está capacitado para escribir en español e inglés, manteniendo un alto nivel de precisión y relevancia cultural en cada uno.",
  },
  {
    question: "• ¿Puede EmotionSEO ayudarme a mejorar mi SEO?",
    answer:
      "Absolutamente. EmotionSEO no solo enfoca en el aspecto emocional del contenido, sino que también asegura que cada artículo esté optimizado para los motores de búsqueda, mejorando la visibilidad y el ranking de tu sitio web.",
  },
  {
    question: "• ¿Cómo se diferencia EmotionSEO de otras herramientas de generación de contenido?",
    answer:
      "La principal diferencia de EmotionSEO radica en su capacidad única para integrar un análisis emocional detallado en la generación de contenido. Esto significa que no solo se enfoca en el SEO, sino que también en crear una conexión emocional con los lectores.",
  },
  {
    question: "• ¿Es difícil usar EmotionSEO?",
    answer:
      "No, EmotionSEO está diseñado para ser intuitivo y fácil de usar, independientemente del nivel de experiencia técnica. Ofrece una interfaz sencilla y guías paso a paso para facilitar la generación de contenido.",
  },
  {
    question: "• ¿Cómo garantiza EmotionSEO la autenticidad del contenido?",
    answer:
      "EmotionSEO utiliza tecnologías avanzadas para asegurar que cada pieza de contenido sea única, evitando la detección como texto generado por IA y manteniendo un tono auténticamente humano.",
  },
];

const FAQ = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-12 md:py-24 ">
      <div className="text-white text-[1.8rem] md:text-[2.5rem] pb-10 md:pb-20">Preguntas Frecuentes</div>
      {faqItems.map((item) => (
        <Dropdown item={item} />
      ))}
    </div>
  );
};

export default FAQ;
