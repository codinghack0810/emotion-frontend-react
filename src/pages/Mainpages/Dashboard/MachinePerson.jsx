import { TypeAnimation } from "react-type-animation";

const MachinePerson = () => {
  return (
    <div className="text-center justify-center mt-20">
      <h1 className="text-3xl md:text-6xl tracking-tight text-white py-5 md:py-10">
        ¿Te habla una máquina o una persona?
      </h1>
      <div className="p-5 md:p-10 mb-10 h-[10rem] md:h-[10rem]">
        <TypeAnimation
          className="mb-2 text-xl md:text-3xl tracking-tight text-white p-10"
          sequence={[
            // Same substring at the start will only be typed once, initially
            "EmotionSEO borra la línea entre humano y máquina. Nuestra inteligencia artificial emocional asegura que cada mensaje parezca escrito por una persona, ofreciendo una comunicación auténtica y cercana.",
            1000,
            "",
            100,
          ]}
          speed={50}
          // style={{ fontSize: "2rem", color: "white", textAlign: "center" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default MachinePerson;
