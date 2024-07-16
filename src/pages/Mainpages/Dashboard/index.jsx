import React from "react";

// import page parts.
import OpenAI from "./OpenAI";
import OverflowCard from "./OverflowCard";
import OptionPage from "./OptionPage";
import MachinePerson from "./MachinePerson";
// import Profile from "./Profile";
// import PercentBar from "./PercentBar";
import OptionCard from "./OptionCard";
import FAQ from "./FAQ";
import Footer from "../../../Components/Footer";
import Paycards from "./Paycards";
import "../../../style/card.css";


const checkItems = [
  { title: "Adaptable a cualquier nicho", path: "" },
  { title: "Perfección SEO con un toque humano", path: "" },
  { title: "Adiós a las sanciones de google", path: "" }
];

const Dashboard = () => {

  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex flex-col items-center justify-center gap-10 min-h-[70vh]">
        <video
          className="object-contain h-[90vh] md:h-[90vh] hidden md:block "
          src="./assets/backgroundVideo.mp4"
          autoPlay
          muted
          playsinline
          loop
        >
        </video>
        <img src="./assets/image.png" alt="video image" className="object-contain h-[90vh] block md:hidden" />
        <div className="mt-10 md:mt-16 text-white text-[1.4rem] md:text-[2.3rem] text-center font-bold absolute top-24 sm:px-6 px-10 lg:px-[10rem] xl:px-[20rem]">
        Crea publicaciones para redes sociales y artículos optimizados para SEO según tus emociones con la Inteligencia Artificial más avanzada en análisis de sentimientos
        </div>
        <div className="mt-[-15rem] md:mt-[-15rem] lg:mt-[-2rem] text-white text-[1rem] md:text-[1.4rem] text-center px-5 md:px-20 mb-10 md:mb-28">
          Desarrolla contenido enriquecido con emociones y perfectamente
          optimizado para SEO, creado por una Inteligencia Artificial avanzada
          en análisis emocional, imperceptible para Google y perfeccionado por
          expertos SEO Copywriters españoles.
        </div>
        <div className="mb-[5rem] md:mb-[9rem]">
          <div className="hidden md:block">
            <div className="cool">
              <div role="button">
                <span class="glow"></span>
                <div>
                  <div className="">
                    {checkItems.map((item) => (
                      <div className="flex flex-row items-center w-full py-2 md:py-4">
                        <div
                          for="teal-checkbox"
                          className=""
                        // className="max-[1300px]:text-[1rem] min-[1500px]:text-[1.3rem] py-2 md:py-8 text-left md:text-justify font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent"
                        >
                          {item.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="block md:hidden"> */}
          <img src="./assets/mobile1.png" alt="mobile" className="block md:hidden" />
          {/* </div> */}
        </div>
      </div>
      <OpenAI />
      <OverflowCard />
      <OptionPage />
      <MachinePerson />
      <OptionCard />
      <Paycards />
      <FAQ />
    </div>
  );
};

export default Dashboard;
