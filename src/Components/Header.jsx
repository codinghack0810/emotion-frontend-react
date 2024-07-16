import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSubmit = () => {
    navigate("/precios");
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const handle=()=>{
    navigate('/')
  }

  return (
    <div  className="flex flex-row items-center h-[7rem] w-[100vw] justify-between px-[3rem] md:px-[4rem] lg:px-[12rem] py-[3rem] fixed active bg-[#171B1F] z-20 ">
      <div className=" flex flex-row items gap-6 items-baseline ">
        <p className=" text-[2rem] from-fuchsia-700 to-purple-700 font-bold bg-gradient-to-r bg-clip-text text-transparent" onClick={handle}>
          EmotionSEO.ai
        </p>
        {/* <p className=" text-[1.2rem] text-white">Precios</p> */}
      </div>

      <div className="hidden md:flex flex-row gap-8 items-center xl:flex ">
        <div
          className=" text-white text-[1.3rem] font-bold cursor-pointer"
          onClick={handleLogin}
        >
          Acceso
        </div>
        <button
          className=" bg-gradient-to-r from-fuchsia-700 to-purple-700 text-white text-[1.1rem] w-[12rem] h-[4rem] rounded-[2rem] font-bold "
          onClick={handleSubmit}
        >
          ¡COMENZAR AHORA!
        </button>
      </div>

      <Menu as="div" className="relative ml-3 block md:hidden ">
        <div>
          <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 focus:ring-offset-gray-800">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <div
                  onClick={handleLogin}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Acceso
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  onClick={handleSubmit}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  ¡COMENZAR AHORA!
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>

    /* <Disclosure as="nav" className="bg-gray-800 fixed top-0 w-full ">
{({ open }) => (
  <>
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          {/* Mobile menu button*/
    //           <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //             <span className="absolute -inset-0.5" />
    //             <span className="sr-only">Open main menu</span>
    //             {open ? (
    //               <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    //             ) : (
    //               <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
    //             )}
    //           </Disclosure.Button>
    //         </div>
    //         <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //           <div className="flex flex-shrink-0 items-center">
    //             <img
    //               className="h-8 w-auto"
    //               src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
    //               alt="Your Company"
    //             />
    //           </div>
    //           <div className="hidden sm:ml-6 sm:block">
    //             <div className="flex space-x-4">
    //               {navigation.map((item) => (
    //                 <a
    //                   key={item.name}
    //                   href={item.href}
    //                   className={classNames(
    //                     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
    //                     'rounded-md px-3 py-2 text-sm font-medium'
    //                   )}
    //                   aria-current={item.current ? 'page' : undefined}
    //                 >
    //                   {item.name}
    //                 </a>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //         <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //           <button
    //             type="button"
    //             className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    //           >
    //             <span className="absolute -inset-1.5" />
    //             <span className="sr-only">View notifications</span>
    //             <BellIcon className="h-6 w-6" aria-hidden="true" />
    //           </button>

    //           {/* Profile dropdown */}
    //           <Menu as="div" className="relative ml-3">
    //             <div>
    //               <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
    //                 <span className="absolute -inset-1.5" />
    //                 <span className="sr-only">Open user menu</span>
    //                 <img
    //                   className="h-8 w-8 rounded-full"
    //                   src="./assets/a.png"
    //                   alt=""
    //                 />
    //               </Menu.Button>
    //             </div>
    //             <Transition
    //               as={Fragment}
    //               enter="transition ease-out duration-100"
    //               enterFrom="transform opacity-0 scale-95"
    //               enterTo="transform opacity-100 scale-100"
    //               leave="transition ease-in duration-75"
    //               leaveFrom="transform opacity-100 scale-100"
    //               leaveTo="transform opacity-0 scale-95"
    //             >

    //               <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    //                 <Menu.Item>
    //                   {({ active }) => (
    //                     <a
    //                       href=""
    //                       className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} onClick={handle}
    //                     >
    //                       Tu perfil
    //                     </a>
    //                   )}
    //                 </Menu.Item>
    //                 <Menu.Item>
    //                   {({ active }) => (
    //                     <a
    //                       href="/generateArticle"
    //                       className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                     >
    //                       Generar artículo
    //                     </a>
    //                   )}
    //                 </Menu.Item>
    //                 <Menu.Item>
    //                   {({ active }) => (
    //                     <a
    //                       href="#"
    //                       className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} onClick={signout}
    //                     >
    //                      cierre de sesión
    //                     </a>
    //                   )}
    //                 </Menu.Item>
    //               </Menu.Items>
    //             </Transition>
    //           </Menu>
    //         </div>
    //       </div>
    //     </div>

    //     <Disclosure.Panel className="sm:hidden">
    //       <div className="space-y-1 px-2 pb-3 pt-2">
    //         {navigation.map((item) => (
    //           <Disclosure.Button
    //             key={item.name}
    //             as="a"
    //             href={item.href}
    //             className={classNames(
    //               item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
    //               'block rounded-md px-3 py-2 text-base font-medium'
    //             )}
    //             aria-current={item.current ? 'page' : undefined}
    //           >
    //             {item.name}
    //           </Disclosure.Button>
    //         ))}
    //       </div>
    //     </Disclosure.Panel>
    //   </>
    // )}
    // </Disclosure>
  );
};

export default Header;
