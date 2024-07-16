import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToastNotification from '../../../Components/ToastNotification';
import ToastNotification1 from '../../../Components/ToastNotification';
import { useNavigate } from "react-router-dom";
const AuthForgotPassword = () => {
  const navigator = useNavigate()
  const [showNotification, setShowNotification] = useState(false);
  const [showNotification1, setShowNotification1] = useState(false);
  const [newpassword, setNewpassword] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")
  const passwordInfo = { newpassword, confirmpassword }
  const handlepasswordChange = (e) => {
    setNewpassword(e.target.value);
  };
  const handleconfirmChange = (e) => {
    setConfirmpassword(e.target.value);
  };


  const handle = (e) => {
    e.preventDefault();



    if (newpassword != confirmpassword) {
    
      setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
    }

    axios
      .post("https://emotionseo.ai:8000/user/confirm_password/", passwordInfo)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {

          navigator('/login')

        }
      })
      .catch((err) => {
       
        setShowNotification1(true);
    setTimeout(() => {
      setShowNotification1(false);
    }, 4000);
      });
  }
  return (
    <form onSubmit={handle}>
      {showNotification && <ToastNotification message="Confirmar que la contraseña es incorrecta." duration={4000} onClose={() => setShowNotification(false)} />}
      {showNotification1 && <ToastNotification1 message="Ingrese la información correcta." duration={4000} onClose={() => setShowNotification1(false)} />}
      <div className="w-full md:w-[30rem] mt-5 md:mt-[5rem] lg:mt-[10rem] backdrop-blur-sm bg-black/30 p-5 md:p-14 rounded-3xl ">
        <div className="flex justify-center md:block">
          <img src="./a.png" alt="Emotion AI logo" className="h-auto w-[200px] md:w-full mt-10 md:mt-0" />
        </div>
        <p className="text-white text-center font-bold text-2xl py-10">
          Ingrese una nueva contraseña
        </p>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " onChange={handlepasswordChange} value={newpassword}
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nueva contraseña
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " onChange={handleconfirmChange} value={confirmpassword}
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirmar Contraseña
          </label>
        </div>

        {/* <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} /> */}
        <div className="">
          <button className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white w-full hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-purple-700 text-[1.3rem] h-[3.5rem] rounded-xl font-bold " >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default AuthForgotPassword;
