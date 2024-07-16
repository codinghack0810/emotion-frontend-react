import React from "react";

// import page parts.
// import Background from "./background";
import PricingCard from "../../../Components/PricingCard";

const Precios = () => {
  return (
    <div className="w-[100vw] min-h-[100vh] flex flex-col justify-center items-center p-10  ">
      {/* <div>
        <Background />
      </div> */}
      <div className="flex flex-row my-5 md:my-10">
        <div className="flex flex-row gap-12 flex-wrap justify-center items-center">
            <PricingCard/>           
        </div>
      </div>
    </div>
  );
};

export default Precios;
