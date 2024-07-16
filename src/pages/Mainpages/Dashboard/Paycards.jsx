import React from "react";
import Paycard from "../../../Components/Paycard";

const PayItems = [
  {
    title: "20,000 palabras al mes",
    content: "Crea 3 publicaciones o artículos gratis y luego 10€ al mes",
  },
  {
    title: "50,000 palabras al mes",
    content: "Crea 3 publicaciones o artículos gratis y luego 20€ al mes",
  },
  {
    title: "100.000 palabras al mes",
    content: "Crea 3 publicaciones o artículos gratis y luego 30€ al mes",
  },
];

const Paycards = () => {
  return (
    <div className="mt-20 w-[100vw] flex flex-col items-center ">
      <div className=" flex flex-wrap gap-15 justify-center items-center gap-16 ">
        {PayItems.map((item) => (
          <Paycard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Paycards;
