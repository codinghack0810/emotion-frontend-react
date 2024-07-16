import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreditForm = () => {

  const [name, setName]=useState("")
  const [city, setCity]=useState("")
  const [home, setHome]=useState("")
  const [surname, setSurname]=useState("")
  const [postalcode, setPostalcode]=useState("")
  const [dni, setDni]=useState("")
  
  const [cname, setCname]=useState("")
 

  
  const token = localStorage.getItem('access');
  const navigate = useNavigate();
  // Set the Authorization header with the bearer token
  const headers = {
    Authorization: `Bearer ${token}`
  };
  // Set up Submit button event.

  const handle =(e) => {
  
    e.preventDefault();
    const data = {
      "name":name, "city":city, "home":home, "surname":surname, "postalcode":postalcode, "dni":dni, "cname":cname
    }
  
    const queryParams = new URLSearchParams(data).toString();

  axios.get(`https://emotionseo.ai:8000/user/invoice/?${queryParams}`, {headers})
       .then((res)=>{
        if(res.status==200){
        navigate('/generatearticle')

        }
        else{
          alert("NO")
        }
       })

  }


  const handle1=(e)=>{
   setName(e.target.value)
  }
  const handle2=(e)=>{
    setCity(e.target.value)
   }
   const handle3=(e)=>{
    setHome(e.target.value)
   }
   const handle4=(e)=>{
    setSurname(e.target.value)
   }
   const handle5=(e)=>{
    setPostalcode(e.target.value)
   }
   const handle6=(e)=>{
    setDni(e.target.value)
   }
   const handle7=(e)=>{
    setCname(e.target.value)
   }
  

  return (
       
       <div className="w-full p-1 md:p-8 mt-0 z-10 ">
      <div className="text-white text-center text-[1.2rem] font-bold ">
      Configure su información de facturación para obtener una factura.
      </div>
    
      
        <div className="text-left">
          <div class="grid md:grid-cols-2 md:gap-6">
            {/* <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " value={name} onChange={handle1}
                required
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nombre
              </label>
            </div> */}
            <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="company_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" " value={cname} onChange={handle7}
              required
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Company name
            </label>
          </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="city"
                id="floating_last_name"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "  value={city} onChange={handle2}
                required
              />
              <label
                for="floating_last_name"
                class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                City
              </label>
            </div>
          </div>

          <div class="grid md:grid-cols-2 md:gap-6">
            {/* <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="surname"
                id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "  value={surname} onChange={handle4}
                required
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Surname
              </label>
            </div> */}
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="postalcode"
                id="floating_last_name"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " value={postalcode} onChange={handle5}
                required
              />
              <label
                for="floating_last_name"
                class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Postal Code
              </label>
            </div>
          </div>

          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="dni"
                id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "  value={dni} onChange={handle6}
                required
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                DNI/NIF or CIF
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="home"
                id="floating_last_name"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " value={home} onChange={handle3}
                required
              />
              <label
                for="floating_last_name"
                class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Home
              </label>
            </div>
          </div>
        </div>
        
 
      <div className="flex flex-col items-end ">
        <button className="w-full md:w-[10rem] h-[3rem] rounded-lg text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
        Tarjeta de crédito
        </button>
        <button onClick={handle} className=" flex flex-row justify-center items-center h-[3rem] mt-2 rounded-lg text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full ">
          <svg
            class="w-3.5 h-3.5 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
          </svg>
          Generando factura
        </button>
      </div>
    </div>
    
  );
};

export default CreditForm;
