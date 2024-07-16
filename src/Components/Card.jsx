import React from "react";

const Card = (props) => {
  const item = props.item;

  return (
    <div class="min-w-[300px] p-8 md:p-10 bg-gray-800 border-4 border-gray-600 rounded-3xl">
      {/* <img src="./assets/chatbotGrid.svg" alt="" /> */}
      <div>
        <h5 class="mb-8 text-xl md:text-2xl font-semibold tracking-tight text-gray-300 text-center md:text-left">
          {item.title}
        </h5>
        <p class="font-thin text-gray-500">{item.content}</p>
      </div>
    </div>
  );
};

export default Card;
