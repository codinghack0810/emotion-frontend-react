import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
// Import page part.

const buttonProps = [
  { color: "#18e756", buttonName: "Comprar plan", path: "#" },
  { color: "#e78618", buttonName: "Editar forma de pago", path: "#" },
  { color: "#e73018", buttonName: "Cancelar suscripción", path: "#" },
  { color: "#e7d918", buttonName: "Historial de facturas", path: "#" },
];

const Profile = () => {
  const [cancelstring, setCancelstring] = useState("Subcription canceled")
  const [cancelbutton, setCancelbutton]=useState(false)
  const [gword, setGword] = useState("")
  const token = localStorage.getItem('access');

  // Set the Authorization header with the bearer token
  const headers = {
    Authorization: `Bearer ${token}`
  };


  const g = JSON.parse(localStorage.getItem("g"))
  const percent = g.generated_word / g.word_limit * 100
  console.log(g)


  useEffect(() => {
    if (g.subscribed == true) {
      setCancelstring("Suscrito")
      setCancelbutton(false)
      
    }
    else { setCancelstring("Suscripción cancelada");
    setCancelbutton(true)
    }
  }, [g.subscribed])

  const handle = (e) => {
    e.preventDefault();

    setCancelstring("Suscripción cancelada")
    setCancelbutton(true)

    axios
      .get('https://emotionseo.ai:8000/user/cancelsubscription/', { headers })


  }

  const buyplan=(e)=>{
    e.preventDefault();
    navigate('/precios')
  }

  const navigate = useNavigate();

  return (
    <div className="m-auto w-[70vw] min-h-[100vh] mt-16 flex flex-col gap-6 justify-center items-center">
      <div className="flex flex-col lg:flex-row w-full justify-between gap-6">
        <div className=" w-full lg:w-[27rem] min-h-[12rem] rounded-[1rem] p-7 bg-slate-900 ">
          <a href="#" className="flex flex-col justify-center gap-4">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
            Palabras generadas
            </h5>
            <div class="w-full rounded-full h-2.5 bg-gray-700">
              <div
                class="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${percent}%` }}
              ></div>
              <div className="flex flex-row justify-between text-white">
                <p>{g.generated_word}</p>
                <p></p>
                <p>{g.word_limit}</p>
              </div>
            </div>
          </a>
        </div>
        <div className=" w-full lg:w-[27rem] min-h-[12rem] rounded-[1rem] p-7 bg-slate-900">
          <a href="#" className="flex flex-col justify-center gap-4">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
            Palabras disponibles
            </h5>


            <div className="flex flex-row justify-between text-white">

              <p>{g.rest_word}</p>
            </div>

          </a>
        </div>
        <div className=" w-full lg:w-[27rem] min-h-[12rem] rounded-[1rem] p-7 bg-slate-900">
          <a href="#" className="flex flex-col justify-center gap-4">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
            Plan de palabras contratado
            </h5>


            <div className="flex flex-row justify-between text-white">

              <p>{g.word_limit}</p>

            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6 w-full min-h-[20rem] rounded-[1rem] p-4 sm:p-10 bg-slate-900">
        <h1 className="text-white text-[2rem] text-center sm:text-left">Información personal</h1>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6">
          <img
            src="./assets/a.png"
            alt="avatar"
            className="w-[5rem] h-[5rem] rounded-[2.5rem]"
          />
          <div className="flex flex-col lg:flex-row float-right w-full gap-5">
            <div className="w-full flex flex-col">
              <label htmlFor="titleEnter" className="text-white font-mono">
                Nombre
              </label>
              <input
                type="text"
                name="titleEnter"
                value={g.first}
                className="rounded-lg"
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="titleEnter" className="text-white font-mono">
                Apellido
              </label>
              <input
                type="text"
                value={g.last}
                name="titleEnter"

                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          class="text-white font-mono bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center w-full lg:max-w-[15rem]"
        >
          Guardar cambios
        </button>
      </div>
      <div className="flex flex-col justify-center gap-6 w-full min-h-[20rem] rounded-[1rem] p-4 sm:p-10 bg-slate-900 text-center sm:text-left">
        <h1 className="text-white text-[2rem]">{cancelstring}</h1>
        <p className="text-slate-300">
          {g.word_limit} palabras con el plan <b className="text-white">Premium</b>
        </p>
        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-3">

          <button
            type="button"  disabled={!cancelbutton}
            class="text-white bg-green-400 disabled:opacity-75 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={buyplan}

          >
            Comprar plan
          </button>

          <button
            type="button" disabled={cancelbutton}
            class="text-white bg-red-700 disabled:opacity-75 disabled: text-gray  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
             onClick={handle}

          >
            Cancelar suscripción
          </button>
          <button
            type="button"
            class="text-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            style={{ backgroundColor: "#e7d918" }}

          >
            Historial de facturas
          </button>



        </div>
      </div>
    </div>
  );
};

export default Profile;
