import React from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js';
import Paycard from "./Paycard";
import { useEffect, useState } from "react";

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

const stripePromise = loadStripe('pk_live_51Ogq3BLQgLaib8pX7WZgX3ltynKUiC9ZMWsYi4nBUTF5IXZccDdlVUv7RTCmVTW80ROSSXD6G4qE8q6xuqUfe8Y500JX89YQXy');
const PricingCard = () => {
  const [lastRequestTime, setLastRequestTime] = useState(Date.now());

  useEffect(() => {
      const timer = setInterval(() => {
          const currentTime = Date.now();
          if (currentTime - lastRequestTime > 30 * 60 * 1000) {
              // User has not sent a request in 30 minutes
              localStorage.clear()
              navigate('/login')
          }
      }, 1000); // Check every second

      return () => clearInterval(timer);
  }, [lastRequestTime]);
  
  const navigate = useNavigate();
  const token = localStorage.getItem('access');

  const headers = {
    Authorization: `Bearer ${token}`
  };

  const handleSubmit = () => {
    navigate('/registerpage')
  }

  const handleOne = async (e) => {
    
    e.preventDefault();
    setLastRequestTime(Date.now())
    const stripe = await stripePromise;
    axios
      .get("https://emotionseo.ai:8000/user/subscribea/", { headers })
      .then(async (res) => {
        console.log(res.data);
        if (res.status === 200) {

          const result = await stripe.redirectToCheckout({ sessionId: res.data.sessionId });


        }
      })

      .catch((err) => {
        if (err.response && err.response.status === 401) {
         
          const refreshToken = localStorage.getItem('refresh');
          console.log(refreshToken)
          axios.post('https://emotionseo.ai:8000/user/api/token/refresh/', { refresh: refreshToken }).then(res=>{
            
            const newAccessToken = res.data.access;
      
        
            localStorage.setItem('access', newAccessToken);
          })
         
     
      }});
  }

  const handlesecond = async (e) => {
    e.preventDefault();
    setLastRequestTime(Date.now())
    const stripe = await stripePromise;
    axios
      .get("https://emotionseo.ai:8000/user/subscribeb/", { headers })
      .then(async (res) => {
        console.log(res.data);
        if (res.status === 200) {

          const result = await stripe.redirectToCheckout({ sessionId: res.data.sessionId });


        }
      })

      .catch((err) => {
        if (err.response && err.response.status === 401) {
        
          const refreshToken = localStorage.getItem('refresh');
          console.log(refreshToken)
          axios.post('https://emotionseo.ai:8000/user/api/token/refresh/', { refresh: refreshToken }).then(res=>{
            
            const newAccessToken = res.data.access;
      
            // Update the access token in local storage
            localStorage.setItem('access', newAccessToken);
          })
         
     
      }});
  }

  const handlethird = async (e) => {
    e.preventDefault();
    setLastRequestTime(Date.now())
    const stripe = await stripePromise;
    axios
      .get("https://emotionseo.ai:8000/user/subscribec/", { headers })
      .then(async (res) => {
        console.log(res.data);
        if (res.status === 200) {

          const result = await stripe.redirectToCheckout({ sessionId: res.data.sessionId });


        }
      })

      .catch((err) => {
        if (err.response && err.response.status === 401) {
        
          const refreshToken = localStorage.getItem('refresh');
          console.log(refreshToken)
          axios.post('https://emotionseo.ai:8000/user/api/token/refresh/', { refresh: refreshToken }).then(res=>{
            
            const newAccessToken = res.data.access;
      
            // Update the access token in local storage
            localStorage.setItem('access', newAccessToken);
          })
         
     
      }});
  }





  return (
    <>
      <div className="mt-20 w-[100vw] flex flex-col items-center">
        <div className=" flex flex-wrap gap-15 justify-center items-center gap-16 ">
          <div class="max-w-sm bg-gray-800 border-2 border-gray-700 rounded-3xl shadow-xl shadow-fuchsia-700 hover:shadow-2xl hover:shadow-indigo-700 hover:border-2 hover:border-indigo-800 hover:scale-y-105 mx-10">
            <div class="p-5">
              <h5 class="py-6 text-5xl md:text-7xl font-bold tracking-tight text-gray-100 text-center leading-[4rem]">
                20,000 palabras al mes
              </h5>
              <p class="mb-3 font-bold text-lg md:text-xl text-gray-400 px-10 py-5 text-center leading-[2rem]">
                10€ al mes
              </p>
              <button className="bg-white text-indigo-700 hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-purple-700 hover:text-white text-[1.1rem] w-[100%] h-[4rem] rounded-[20px] font-bold my-5" onClick={handleOne}>
                ¡COMENZAR AHORA!
              </button>
            </div>
          </div>
          <div class="max-w-sm bg-gray-800 border-2 border-gray-700 rounded-3xl shadow-xl shadow-fuchsia-700 hover:shadow-2xl hover:shadow-indigo-700 hover:border-2 hover:border-indigo-800 hover:scale-y-105 mx-10">
            <div class="p-5">

              <h5 class="py-6 text-5xl md:text-7xl font-bold tracking-tight text-gray-100 text-center leading-[4rem]">
                50,000 palabras al mes
              </h5>
              <p class="mb-3 font-bold text-lg md:text-xl text-gray-400 px-10 py-5 text-center leading-[2rem]">
                20€ al mes
              </p>
              <button className="bg-white text-indigo-700 hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-purple-700 hover:text-white text-[1.1rem] w-[100%] h-[4rem] rounded-[20px] font-bold my-5" onClick={handlesecond}>
                ¡COMENZAR AHORA!
              </button>
            </div>
          </div>
          <div class="max-w-sm bg-gray-800 border-2 border-gray-700 rounded-3xl shadow-xl shadow-fuchsia-700 hover:shadow-2xl hover:shadow-indigo-700 hover:border-2 hover:border-indigo-800 hover:scale-y-105 mx-10">
            <div class="p-5">

              <h5 class="py-6 text-5xl md:text-7xl font-bold tracking-tight text-gray-100 text-center leading-[4rem]">
                100,000 palabras al mes
              </h5>
              <p class="mb-3 font-bold text-lg md:text-xl text-gray-400 px-10 py-5 text-center leading-[2rem]">
                30€ al mes
              </p>
              <button className="bg-white text-indigo-700 hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-purple-700 hover:text-white text-[1.1rem] w-[100%] h-[4rem] rounded-[20px] font-bold my-5" onClick={handlethird}>
                ¡COMENZAR AHORA!
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
