import React from "react";
import { Carousel } from "flowbite-react";
import FlowCard from "../../../Components/FlowCard";


const cardItems = [
  {
    avatar: "avatar1.jpeg",
    name: "Joan Blanch",
    title: "Eficiencia Increíble",
    content: "Usar EmotionSEO ha sido un cambio de juego para mi blog. Mis posts están alcanzando mejores posiciones en Google, y mis lectores se sienten más,conectados con el contenido.",
  },
  {
    avatar: "avatar2.jpeg",
    name:   "Paula Matamala",
    title: "Sorprendentemente Fácil",
    content: "Nunca pensé que combinar SEO con emociones sería tan fácil. EmotionSEO me ha ayudado a crear artículos que realmente resuenan. ¡Recomendado!",
  },
  {
    avatar: "avatar3.jpeg",
    name: "Amaia Uceda",
    title: "Resultados Visibles",
    content: "Desde que empecé a usar EmotionSEO, he visto un aumento en el tráfico y la interacción. Es una herramienta que realmente hace la diferencia.",
  },
  {
    avatar: "avatar4.jpeg",
    name: "Javi Sanchez",
    title: "Soporte Genial",
    content: "Cualquier duda que he tenido, el equipo de EmotionSEO ha estado ahí para ayudar. Es genial tener un soporte tan atento.",
  },
];


const OverflowCard = () => {
  return (
    <div className="h-[60vh] flex flex-col gap-10 justify-center my-[5rem]">

      <div className="text-[2rem] md:text-[3rem] text-white text-center">
        Valorado con 4,9/5 por más de 100 usuarios
      </div>
      <div className=" px-[2rem] md:px-[7rem] xl:px-[200px] pb-[rem]">
        <Carousel className="flex items-center px-10">
          {cardItems.map((item) => (
            <FlowCard item={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default OverflowCard;
