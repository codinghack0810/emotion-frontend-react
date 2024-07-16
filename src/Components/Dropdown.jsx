import React, { useState } from "react";

const Dropdown = (props) => {
  const [state, setState] = useState(false);

  const handleFAQ = () => {
    setState(!state);
  };

  const item = props.item;

  return (
    <div className="w-[90vw] md:w-[80vw] border-y border-y-indigo-900 mt-[-1px]">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="font-bold text-lg p-0 md:p-10 w-[100%] py-7 text-[2rem] flex justify-between hover:text-indigo-500"
        type="button"
        onClick={handleFAQ}
      >
        <div className={`text-left text-lg md:text-xl ${state ? "text-indigo-500" : "text-white"}`}>
          {item.question}
        </div>
        <div
          className={state ? "text-indigo-500 text-3xl" : "text-white text-3xl"}
        >
          {state ? "-" : "+"}
        </div>
      </button>

      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdown"
        class="text-indigo-300 px-10 py-5"
        style={{ display: `${state ? "block" : "none"}` }}
        aria-labelledby="dropdownDefaultButton"
      >
        {item.answer}
      </div>
    </div>
  );
};

export default Dropdown;
