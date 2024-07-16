import React from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate=useNavigate()
  const redirectLogin=(e)=>{
    e.preventDefault();
   navigate('/login')
  }
  return (
    <div className="flex flex-col items-center bg-[#171B1F] absolute z-10 ">
      <div className="flex flex-col xl:flex-row py-16 w-[100vw] justify-center items-center gap-5">
        <div className="w-full xl:w-[15vw] flex flex-col xl:flex-row justify-center items-center">
          <img
            src="./a.png"
            alt="img"
            className="w-full object-contain md:w-[40vw] lg:w-[30vw] xl:w-[20vw] h-[40vh] mr-0 md:mr-[2rem]"
          />
        </div>
        <div className="w-full md:w-[80vw] lg:w-[50vw] flex flex-col justify-center md:items-center gap-5 px-5">
          <div className="flex flex-col md:flex-row w-full gap-6 ">
            <div className="w-full md:w-[50%] flex flex-col gap-3 items-center">
              <p className="text-white text-[2.5rem]">Producto</p>
              <a href="#price" className="text-white text-[1.2rem]">
                Precio
              </a>
              
              <a href="/login" className="text-white text-[1.2rem]">
                Acceso usuarios
              </a>
              
            </div>
            <div className="w-full md:w-[50%] flex flex-col gap-3 items-center">
              <p className="text-white text-[2.5rem]">Políticas</p>
             
              <a href="/privacy" className="text-white text-[1.2rem]">
                Política de privacidad
              </a>
              <a href="/legal" className="text-white text-[1.2rem]">
                Aviso legal
              </a>
              <a href="/cookies" className="text-white text-[1.2rem]">
                cookies
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-6">
            <div className="w-full md:w-[50%] flex flex-col gap-3 items-center">
              <p className="text-white text-[2.5rem]">Medio</p>
              <a href="" className="text-white text-[1.2rem]">
                Correo: hola@emotionseo.ai
              </a>
            </div>
            <div className="w-full md:w-[50%] flex flex-col gap-3 items-center">
              <p className="text-white text-[2.5rem]">Recursos</p>
              <a href="#" className="text-white text-[1.2rem]">
                Blog
              </a>
            </div>
          </div>
        </div>
        <div>
          {/* <div class="w-full max-w-sm p-4 bg-gradient-to-r from-fuchsia-700 to-purple-700 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="space-y-6" >
              <h5 class="text-xl font-medium text-white">
                Acceda a nuestra plataforma
              </h5>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Tu correo
                </label>
                <input
                  type="email"
                  name="email"
                 
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-slate-300 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Tu contraseña
                </label>
                <input
                  type="password"
                  name="password"
                 
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div class="flex items-start">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    class="ms-2 text-sm font-medium text-white dark:text-gray-300"
                  >
                    Recordarme
                  </label>
                </div>
                <a
                  href="#"
                  class="ms-auto text-sm text-white hover:underline dark:text-blue-500"
                >
                  ¿Recuperar contraseña?
                </a>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 bg-"
              onClick={redirectLogin}>
                Acceda a su cuenta
              </button>
              <div class="text-sm font-medium text-white dark:text-gray-300">
                ¿No está registrado?{" "}
                <a
                  href="#"
                  class="text-white hover:underline dark:text-blue-500"
                >
                  Crear cuenta
                </a>
              </div>
            </div>
          </div> */}
          <img src="./assets/footer.png" alt="Contact us" onClick={redirectLogin}/>
        </div>
      </div>
      {/* <div className="h-[13rem] w-[80vw] border-t-2 border-slate-600 "></div> */}
    </div>
  );
};

export default Footer;
