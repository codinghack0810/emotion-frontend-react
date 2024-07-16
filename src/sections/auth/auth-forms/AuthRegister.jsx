import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import ToastNotification from '../../../Components/ToastNotification';
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Home from "./Home";
import { useCallback, useEffect} from "react";

const { REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_GOGGLE_REDIRECT_URL_ENDPOINT } =
  process.env;


const AuthRegister = () => {

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


  // Hide and show password.
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [showNotification, setShowNotification] = useState(false);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  // Set button events.
  const [first_name, setName] = useState("");
  const [last_name, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errormessage, setErrormessage]=useState("");
  const registerInfo = {
    email,
    first_name,
    last_name,
    password,
    username
  };
  const navigate = useNavigate();
  const handleRegistration = async (e) => {
    e.preventDefault();
    console.log(registerInfo);
    try {
      const response = await axios.post('https://emotionseo.ai:8000/user/register/', registerInfo);
      // Handle successful registration
     
      if (response.status === 201) navigate('/verifyUser')
      // if(response.status === 400) alert("Bad Request")
    } catch (error) {
      // Handle registration error
      if (error.response.status === 400) {
        // Handle validation errors
        const errorData = error.response.data;
        console.log(errorData)
        let s = ""
        if ("email" in errorData) {
          s = "email"
          setErrormessage(s)
        }
        if ("username" in errorData) {
          s = "username"
          setErrormessage(s)

        }
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 4000);
       
        // Display error messages to the user
      }

    }
  };

  const googleSignUp = () => {
    navigate("/login");
  };

  return (
    <form onSubmit={handleRegistration}>
   

      <div className="w-full md:w-[30rem]  backdrop-blur-sm bg-black/30 p-5 md:p-14 rounded-xl md:rounded-3xl">
      {showNotification && <ToastNotification message={`El usuario con este ${errormessage} ya existe.`} duration={4000} onClose={() => setShowNotification(false)} />}
        <div className="flex justify-center ">
          <img
            src="./a.png"
            alt="Emotion AI logo"
            className="h-auto w-[200px] md:w-[300px]"
          />
        </div>
        <p className="text-white text-center font-bold text-xl md:text-2xl pt-4 pb-2">
          Crea tu cuenta ahora mismo
        </p>
        <div className="flex gap-4">
          <div class="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              value={first_name}
              onChange={(e) => setName(e.target.value)}
              class="block py-2.5 px-0 w-full text-md md:text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-md md:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>
          <div class="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              value={last_name}
              onChange={(e) => setSurname(e.target.value)}
              class="block py-2.5 px-0 w-full  text-md md:text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-md md:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Apellidos
            </label>
          </div>
        </div>
        <div class="relative z-0 w-full mb-3 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            class="block py-2.5 px-0 w-full text-md md:text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-md md:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Correo
          </label>
        </div>
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
            username
          </label>
        </div>
        <div class="relative z-0 w-full flex mb-4 group">
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
            <Icon class="absolute right-0 top- text-white" icon={icon} size={15} />
          </span>
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-md md:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Contraseña
          </label>
        </div>
        {/* <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} /> */}
        <div className="mb-3">
          <button
            className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white w-full hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-purple-700 text-[1.1rem] md:text-[1.3rem] h-[3.5rem] rounded-xl md:rounded-2xl font-bold "
            type="submit"
          >
            Registrarme
          </button>
        </div>
        <div className="mb-3">
        {<button
            className="flex items-center justify-center bg-red-500 text-white w-full hover:bg-red-700 hover:text-white text-[1.1rem] md:text-[1.3rem] h-[3.5rem] rounded-xl md:rounded-2xl font-bold "
            onClick={openGoogleLoginPage}
          >
            <GoogleIcon className="scale-105 md:scale-125" />
            &nbsp; Registrarme con Google
          </button>}
        </div>
        <div class="flex items-center">
          <label
            for="default-checkbox"
            class="ms-2 text-md font-medium text-gray-300 dark:text-gray-300"
          >
            ¿Ya tienes una cuenta?&nbsp;
          </label>
          <Link className="text-blue-300 text-md" to="/login">
            Inicia sesión aquí
          </Link>
        </div>
      </div>
    </form>
  );
};

export default AuthRegister;
