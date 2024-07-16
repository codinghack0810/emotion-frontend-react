import React from "react";
import { Carousel } from "flowbite-react";

const checkItems = [
  { title: "Adaptable a cualquier nicho", path: "" },
  { title: "Perfección SEO con un toque humano", path: "" },
  { title: "Adiós a las sanciones de google", path: "" }
];

const OpenAI = () => {
  return (
    <div className="flex flex-col items-center relative p-4 mb-[5rem]">
      <img
        src="./assets/back.png"
        alt="img"
        className="w-[90vw] md:w-[80vw] lg:w-[55vw] h-[70vh] shadow-2xl shadow-cyan-500/50 hidden xl:block "
      />
      <img
        src="./assets/mobile.jpg"
        alt="mobile"
        className="block xl:hidden rounded-[2rem]"
      />
      {/* <div className="absolute left-[12%] md:left-[52%] top-[60%] md:top-[38%] hidden md:block">
        {checkItems.map((item) => (
          <div className="flex flex-row items-center  ">
            <input
              checked
              id="teal-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-purple-900 bg-gray-100 border-gray-300 rounded-full scale-150"
            />
            <label
              for="teal-checkbox"
              className="max-[1300px]:text-[1rem] min-[1500px]:text-[1.5rem] py-2 md:py-4 px-4 text-left md:text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent"
            >
              {item.title}
            </label>            
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default OpenAI;
