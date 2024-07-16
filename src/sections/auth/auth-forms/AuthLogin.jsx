import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import ToastNotification from '../../../Components/ToastNotification';
import ToastNotificationinvalidotp from '../../../Components/ToastNotification';
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

import { useCallback, useEffect } from "react";

const { REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_GOGGLE_REDIRECT_URL_ENDPOINT } =
  process.env;

const AuthLogin = () => {

  const [username1, setUsername1] = useState(localStorage.getItem('goggleFirstName'))

  useEffect(() => {
    const storedUsername = localStorage.getItem("user_goggle");
    if (storedUsername) {
      setUsername1(storedUsername);
    }
  }, []);
  const openGoogleLoginPage = useCallback(() => {
    const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";

    const scope = [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" ");

    const params = new URLSearchParams({
      response_type: "code",
      client_id: REACT_APP_GOOGLE_CLIENT_ID,
      redirect_uri: `${REACT_APP_GOGGLE_REDIRECT_URL_ENDPOINT}/google`,
      prompt: "select_account",
      access_type: "offline",
      scope,
    });

    const url = `${googleAuthUrl}?${params}`;

    window.location.href = url;
  }, []);


// This should now point to your Django backend endpoint which will handle the OAuth flow
// const REACT_APP_GOGGLE_REDIRECT_URI = 'https://emotionseo.ai:8000/user/auth/googlea/';

// const openGoogleLoginPage = useCallback(() => {
//   const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";

//   const scope = [
//     "https://www.googleapis.com/auth/userinfo.email",
//     "https://www.googleapis.com/auth/userinfo.profile",
//   ].join(" ");

//   const params = new URLSearchParams({
//     response_type: "code",
//     client_id: REACT_APP_GOOGLE_CLIENT_ID,
//     redirect_uri: REACT_APP_GOGGLE_REDIRECT_URI,
//     prompt: "select_account",
//     access_type: "offline",
//     scope,
//   });

//   const url = `${googleAuthUrl}?${params}`;
//   window.location.href = url;
// }, []);


  
  // const auth = useSelector((state) => state.memberinfo)
  const navigate = useNavigate();

  // Hide and show password.
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [showNotification, setShowNotification] = useState(false);
  const [showNotificationinvalidotp, setShowNotificationinvalidotp] = useState(false);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const loginInfo = {
    username,
    password,
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://emotionseo.ai:8000/user/login/", loginInfo)
      .then((res) => {
        console.log(res)
      
        if (res.status === 200 && res.data.otp == null) {
          const access = res.data.tokens.access
          const refresh=res.data.tokens.refresh
          localStorage.setItem("refresh", refresh)
         

          localStorage.setItem('access', access);
          // Retrieve the token from local storage
          navigate("/generatearticle");
          localStorage.setItem('isLogined', true)
        }

        else if (res.status === 200 && res.data.otp !== null) {

          setShowNotificationinvalidotp(true);
        setTimeout(() => {
          setShowNotificationinvalidotp(false);
        }, 5000);

          const usernameinfo = res.data.username

          const usernamei = {
            usernameinfo

          };
          axios.post("https://emotionseo.ai:8000/user/delete/", usernamei)
            .then((res) => {
              if (res.status === 200) {
                navigate('/register')
              }
            })


        }
      })

      .catch((err) => {

        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 5000);

      });
    // Handle successful registration
    // if(response.status === 400) alert("Bad Request")
  };





  return (

    <div className="w-full md:w-[30rem] backdrop-blur-sm bg-black/30 p-5 md:p-14 rounded-xl md:rounded-3xl ">
  
      {showNotification && <ToastNotification message="Ingrese la información correcta." duration={5000} onClose={() => setShowNotification(false)} />}
      {showNotificationinvalidotp && <ToastNotificationinvalidotp message="Email inválido. Por favor ingrese su información nuevamente." duration={5000} onClose={() => setShowNotificationinvalidotp(false)} />}
      <div className="flex justify-center">
        <img
          src="./a.png"
          alt="Emotion AI logo"
          className="h-auto w-[200px] md:w-[300px] mt-10 md:mt-0"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <p className="text-white text-center font-bold text-xl md:text-2xl pt-6 pb-1">
          Iniciar sesión en tu cuenta
        </p>
        <div class="relative z-0 w-full mb-3 group">
          <input
            type="text"
            name="floating_email"
            id="floating_email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            class="block py-2.5 px-0 w-full text-md md:text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-md md:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            nombre de usuario
          </label>
        </div>
        <div class="relative z-0 w-full flex mb-3 group">
          <input
            type={type}
            name="floating_password"
            id="floating_password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            class="block py-2.5 px-0 w-full text-md md:text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <span class="flex justify-center items-center" onClick={handleToggle}>
            <Icon
              class="absolute right-0 top- text-white"
              icon={icon}
              size={15}
            />
          </span>
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-md md:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Contraseña
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ms-2 text-md md:text-lg font-medium text-gray-300 dark:text-gray-300"
          >
            Mantener sesión activa
          </label>
        </div>
        <div class="flex items-center mb-4">
          <label
            for="default-checkbox"
            class="ms-2 text-md font-medium text-gray-300 dark:text-gray-300"
          >
            ¿Has olvidado tu contraseña?&nbsp;
          </label>
          <Link className="text-blue-300 text-md" to="/forgot-password">
            Clic aquí
          </Link>
        </div>
        <div className="mb-4">
          <button
            className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white w-full hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-purple-700 text-[1.1rem] md:text-[1.3rem] h-[3.5rem] rounded-xl md:rounded-2xl font-bold "
            type="submit"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
      <div className="mb-4">
        {<button className="flex items-center justify-center bg-red-500 text-white w-full hover:bg-red-700 hover:text-white text-[1.1rem] md:text-[1.3rem] h-[3.5rem] rounded-xl md:rounded-2xl font-bold " onClick={openGoogleLoginPage}>
          <GoogleIcon className="scale-105 md:scale-125" />
          &nbsp; Iniciar sesión con Google
        </button>
}
      </div>

      <div class="flex items-center">
        <label
          for="default-checkbox"
          class="ms-2 text-md font-medium text-gray-300 dark:text-gray-300"
        >
          ¿Todavía no tienes una cuenta?&nbsp;
        </label>
        <Link className="text-blue-300 text-md" to="/register">
          Regístrate aquí
        </Link>
      </div>
    </div>

  );
};

export default AuthLogin;
