import React from "react";

const PercentBar = () => {
  return (
    <div className="w-[100vw] h-[70vh] flex flex-col justify-around items-center">
      <p className=" text-white text-[2.5rem] text-center ">
        Stop wasting time and money
        <br />
        creating your content
      </p>
      <p className="text-white text-center text-[1.5rem]">
        <b>51000</b> words a month
      </p>
      <div class=" w-[70vw] h-6 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          class="h-6 bg-blue-600 rounded-full dark:bg-blue-500"
          style={{ width: "45%" }}
        ></div>
      </div>
      <p className="text-white text-[1.3rem]">
        Save <b>63</b> hours and <b>607€</b> per month using Escribelo
      </p>
      <button className=" bg-gradient-to-r from-fuchsia-700 to-purple-700 text-white text-[1.1rem] w-[12rem] h-[4rem] rounded-[5px] font-bold ">
        ¡COMENZAR AHORA!
      </button>
    </div>
  );
};

export default PercentBar;
