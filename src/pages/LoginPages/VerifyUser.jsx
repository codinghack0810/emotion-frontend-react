import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const VerifyUser = () => {
    
    const navigate = useNavigate();
    const [otp, setOtpCode] = useState("");
    const [email, setEmail] = useState("");
    const otpInfo = {
        'otp':otp
      };

  // handle OTP Submit
  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log(otpInfo);
    const queryParams = new URLSearchParams(otpInfo).toString();
    axios
    .get(`https://emotionseo.ai:8000/user/validat/?${queryParams}`)
    .then((res) => {
      console.log(res.error);
      if (res.status === 200) {
        navigate('/login');
      } else if (res.status === 201) {
        alert("Wrong OTP");
      }
    })
    .catch((error) => {
      console.error("Error occurred:", error);
      // Handle error
    });
    
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className='flex flex-col gap-3 m-auto w-full md:w-[25rem] min-h-[10rem] border-1 border-slate-900 rounded-xl backdrop-blur-sm bg-black/30 p-10'>
        <p className='text-white text-center text-[1.5rem] md:text-[2rem]'>Ingresar código de validación</p>
        <div class="relative z-0 w-full mb-3 group">
          <input
            type="text"
            name="otp"
            id="floating_email"
            value={otp}
            onChange={(e) => setOtpCode(e.target.value)}
            class="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-md md:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Codigo de validacion
          </label>
        </div>
        {/* <div class="relative z-0 w-full mb-3 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            value={otp}
            onChange={(e) => setOtpCode(e.target.value)}
            class="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            email
          </label>
        </div> */}
        <button className='w-full h-11 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white font-bold font-mono rounded-lg h-[3.5rem] text-xl md:text-2xl' type='submit'>Enviar</button>
        {/* <button className='w-full h-11 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white font-bold font-mono rounded-lg' onClick={() => handleSubmit()}>Next</button> */}
    </div>
    </form>
  );
};

export default VerifyUser;