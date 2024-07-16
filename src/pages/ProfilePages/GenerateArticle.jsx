import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import ToastNotification from '../../Components/ToastNotification';
import ToastNotificationentire from '../../Components/ToastNotification';
import ToastNotification1 from "../../Components/ToastNotification";
import ToastNotification2 from "../../Components/ToastNotification";
import ToastNotification3 from "../../Components/ToastNotification";
import ToastNotificationsubject from "../../Components/ToastNotification";
import ToastNotificationlimitemotion from "../../Components/ToastNotification";
import './button.css';
import { FadeLoader } from "react-spinners";
import Modal from '@mui/material/Modal';
import Modalimage from '@mui/material/Modal';
import Modalimage1 from '@mui/material/Modal';
import Modalpost from '@mui/material/Modal';
import Effect from "./Effect";
import Loading from "./Loading";
import { setOriginalNode } from "typescript";
const k = []

const Profile = () => {
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

  const [loading, setLoading] = useState(false);
  const [loadingimage, setLoadingimage]=useState(false);
  const [loadingimage1, setLoadingimage1]=useState(false);
  const [loadingpost, setLoadingpost] = useState(false);
  const navigate = useNavigate();
  const [imageURL, setImageURL]=useState();
  const [image, setImage]=useState(false);
  const [image1, setImage1]=useState(false);
  const [imagebutton, setImagebutton]=useState(false)
  const [imagebutton2, setImagebutton2]=useState(false)
  const [isTrue, setTrue] = useState(false);
  const [post, setPost]=useState("Instagram")
  const [isButton, setButton] = useState(false);
  const [ar, setAr] = useState([])
  const [message, setMessage] = useState("")
  const [message1, setMessage1] = useState("")
  const [language, setLanguage] = useState("Spanish")
  const [showNotification, setShowNotification] = useState(false);
  const [showNotification1, setShowNotification1] = useState(false);
  const [showNotification2, setShowNotification2] = useState(false);
  const [showNotification3, setShowNotification3] = useState(false);
  const [showNotificationsubject, setShowNotificationsubject] = useState(false);
  const [showNotificationlimitemotion, setShowNotificationlimitemotion] = useState(false);

  const [showNotificationentire, setShowNotificationentire] = useState(false);



  const [title, setTitle] = useState('');
  const [keyword, setKeyword] = useState('');
  const [subject, setSubject] = useState('');
  const [url, setUrl] = useState('');
  const [selectedOption, setSelectedOption] = useState('HAPPY');
  
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  
  
  const token = localStorage.getItem('access');

  // Set the Authorization header with the bearer token
  const headers = {
    Authorization: `Bearer ${token}`
  };
  // Set up Submit button event.

  const generate = (e) => {
    e.preventDefault();
    console.log(selectedOption);
    const data = {
      "title": title, "language": language
    }

    if (title == "") {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
    else {
      const queryParams = new URLSearchParams(data).toString();

      axios
        .get(`https://emotionseo.ai:8000/user/generating/?${queryParams}`, { headers })
        .then((res) => {
          const k = res.data.keyword;
          
          

          const words = k.split(",");

      
          const newArra = words.map(word => word.trim());

          setAr(newArra)
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
  }

  const handleselection = (e) => {
    e.preventDefault();

    const selectedCar = e.target.value;

    setLanguage(selectedCar)

  }
  const handleSelectionPost=(e)=>{
    e.preventDefault();

    const selectedPost=e.target.value;
    setPost(selectedPost)

  }
  
  const handleDownload = () => {
    const imageUrl = 'https://www.emotionseo.ai:8000/user/image/';

    fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
            var url = window.URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = url;
            link.download = 'image.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => console.error('Error downloading image:', error));
        }

  const handleDownload1 = () => {
          const imageUrl = 'https://www.emotionseo.ai:8000/user/imagepost/';
      
          fetch(imageUrl)
              .then(response => response.blob())
              .then(blob => {
                  var url = window.URL.createObjectURL(blob);
                  var link = document.createElement('a');
                  link.href = url;
                  link.download = 'image.jpg';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
              })
              .catch(error => console.error('Error downloading image:', error));
              }   


  const generateimage = (e) => {
    e.preventDefault();
    setLoadingimage(true)
    const content=localStorage.getItem("content")
    const data = {content}
    
    axios
      .post("https://emotionseo.ai:8000/user/generateimage/", data)
      .then(res=>{
        if(res.status==200){
          setLoadingimage(false)
          setImage(true)
          setImageURL(res.data.url)
        
        }
      })

  }
  const generateimage1 = (e) => {
    e.preventDefault();
    setLoadingimage1(true)
    const content=localStorage.getItem("content")
    const data = {content}
    
    axios
      .post("https://emotionseo.ai:8000/user/generateimagepost/", data)
      .then(res=>{
        if(res.status==200){
        setImage1(true)
        setLoadingimage1(false)
         setImageURL(res.data.url)
        
        }
      })

  }

  const handlefalse = (e) => {
    e.preventDefault();

    const checkedValues = [];
    checkedValues.push(selectedOption)
   
    const data = {
      "subject": subject, "url":url, "checkedValues": checkedValues, "post": post, "language":language
    }

    if(subject!="" && url!="") {

      setShowNotificationsubject(true);
          setTimeout(() => {
            setShowNotificationsubject(false);
          }, 3000);



    }
 
    else if((subject!= "" || url!="") && checkedValues.length == 1){
      setLastRequestTime(Date.now());
      setLoadingpost(true)
      
    const queryParams = new URLSearchParams(data).toString();
    axios
      .get(`https://emotionseo.ai:8000/user/post/?${queryParams}`, { headers })
      .then((res) => {
        if (res.status === 200) {
         
          setLoadingpost(false)
         
          localStorage.setItem("content", res.data.message)
          setMessage1(res.data.message)
          
          setImagebutton2(true)

          // Retrieve the token from local storage


        }
        else if (res.status === 201 && res.data.message === "free") {

          setLoadingpost(false)
          setShowNotification1(true);
          setTimeout(() => {
            setShowNotification1(false);
          }, 3000);
          setButton(true)


        }
        else if (res.status === 201 && res.data.message != "free" && res.data.message != "limit") {
          setButton(false)
          
          setLoading(false)
          
          localStorage.setItem("content", res.data.message)
          setMessage1(res.data.message)
          setImagebutton2(true)



        }
        else if (res.status === 201 && res.data.message === "limit") {

          setLoadingpost(false)

          setShowNotification2(true);
          setTimeout(() => {
            setShowNotification2(false);
          }, 3000);

          setButton(true)

        }
      

      
      })
        .catch((err) => {
          if (err.response && err.response.status === 401) {

            setLoadingpost(false)
            // Access token expired, refresh the token
            const refreshToken = localStorage.getItem('refresh');
            console.log(refreshToken)
            axios.post('https://emotionseo.ai:8000/user/api/token/refresh/', { refresh: refreshToken }).then(res=>{
              
              const newAccessToken = res.data.access;
        
              // Update the access token in local storage
              localStorage.setItem('access', newAccessToken);
            })
            // navigate('/login')
            // localStorage.clear();
           
       
        }});
      }
      else if (checkedValues.length>1){

        setShowNotificationlimitemotion(true);
          setTimeout(() => {
            setShowNotificationlimitemotion(false);
          }, 3000);


      }

   
    }

    const handlePostformat=(e)=>{
      e.preventDefault();
      setSubject("")
     setUrl("")
     setMessage1("")
     setImage1(false)
     setImagebutton2(false)
      
    }
  const handleSubmit = (e) => {

    e.preventDefault();
    const checkedValues = [];
    checkedValues.push(selectedOption)
    const data = {
      "title": title, "keyword": keyword, "checkedValues": checkedValues, "language": language
    }

    if (title != "" && checkedValues.length == 1) {
  
      setLastRequestTime(Date.now());
      setLoading(true)

      const queryParams = new URLSearchParams(data).toString();
      axios
        .get(`https://emotionseo.ai:8000/user/service/?${queryParams}`, { headers })
        .then((res) => {

          if (res.status === 200) {
            setLoading(false)
           
            setMessage(res.data.message)
            localStorage.setItem("content", res.data.message)
            setImagebutton(true)

            // Retrieve the token from local storage


          }
          else if (res.status === 201 && res.data.message === "free") {

            setLoading(false)
            setShowNotification1(true);
            setTimeout(() => {
              setShowNotification1(false);
            }, 3000);
            setTrue(true)


          }
          else if (res.status === 201 && res.data.message != "free" && res.data.message != "limit") {
            setTrue(false)
            setLoading(false)
           
            setMessage(res.data.message)
            localStorage.setItem("content", res.data.message)
            setImagebutton(true)



          }
          else if (res.status === 201 && res.data.message === "limit") {

            setLoading(false)

            setShowNotification2(true);
            setTimeout(() => {
              setShowNotification2(false);
            }, 3000);

            setTrue(true)

          }

        })
        .catch((err) => {
          if (err.response && err.response.status === 401) {
            setLoadingpost(false)
            // navigate('/login')
            // localStorage.clear();
            // // Access token expired, refresh the token
            const refreshToken = localStorage.getItem('refresh');
            console.log(refreshToken)
            axios.post('https://emotionseo.ai:8000/user/api/token/refresh/', { refresh: refreshToken }).then(res=>{
              
              const newAccessToken = res.data.access;
        
              // Update the access token in local storage
              localStorage.setItem('access', newAccessToken);
            })
           
       
        }});



    }
    else if (title != "" && checkedValues.length > 1) {

      setShowNotification3(true);
      setTimeout(() => {
        setShowNotification3(false);
      }, 3000);

    }
    else {
      setShowNotificationentire(true);
      setTimeout(() => {
        setShowNotificationentire(false);
      }, 3000);
    }
  }
  const startNow = (e) => {

    e.preventDefault();

    navigate('/precios')


  }
  const sett = (e) => {

    e.preventDefault();

    setTitle(e.target.value)


  }
  const setk = (e) => {

    e.preventDefault();

    setKeyword(e.target.value)


  }
  const sets = (e) => {

    e.preventDefault();

    setSubject(e.target.value)


  }
  const setu = (e) => {

    e.preventDefault();

    setUrl(e.target.value)


  }
  const handledelete = (e) => {
    e.preventDefault();
    setMessage("");
    setImage("")
    setImagebutton(false)
    setKeyword("");
    setTitle("");
    setAr([])

  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }

  const [color, setColor] = useState(true);

  return (
    <div>
      <div className="flex flex-col justify-center items-center p-5">
        <div class="w-full overflow-hidden xl:w-[80rem] rounded-[1.5rem] p-5 bg-slate-950">
          <div className="w-full flex justify-center text-xl md:text-2xl font-bold text-white">
           
         
            <button className={`cursor-point w-[50vw] py-4 ${color ? 'border-b-4 border-[#8707ff]' : ''}`} onClick={() => setColor(true)}>GENERAR ARTÍCULO</button>
            <button className={`cursor-point w-[50vw] py-4 ${!color ? 'border-b-4 border-[#8707ff]' : ''}`} onClick={() => setColor(false)}>GENERAR PUBLICACIÓN</button>
          </div>
        
          {showNotificationlimitemotion && <ToastNotificationlimitemotion message="Debes elegir sólo una emoción." duration={3000} onClose={() => setShowNotificationlimitemotion(false)} />}
          {showNotificationsubject && <ToastNotificationsubject message="POR FAVOR INTRODUCE SOLO EL TEMA O LA URL." duration={3000} onClose={() => setShowNotificationsubject(false)} />}
          {showNotification3 && <ToastNotification3 message="Por favor escoge una emoción." duration={3000} onClose={() => setShowNotification3(false)} />}
          {showNotification && <ToastNotification message="Por favor ingrese el título del artículo." duration={3000} onClose={() => setShowNotification(false)} />}
          {showNotification2 && <ToastNotification2 message="Límite de palabra. Por favor suscríbete nuevamente." duration={3000} onClose={() => setShowNotification2(false)} />}
          {showNotification1 && <ToastNotification1 message="Has utilizado el servicio gratuito 3 veces. Para seguir utilizando el servicio es necesario suscribirse." duration={3000} onClose={() => setShowNotification1(false)} />}
          {showNotificationentire && <ToastNotificationentire message="Por favor ingrese toda la información." duration={3000} onClose={() => setShowNotificationentire(false)} />}
          <h5 class="text-[2rem] md:text-[2.3rem] font-bold tracking-tight pt-10 font-mono text-center text-white">
            {color ? 'Genera un artículo ahora mismo' : 'Publicación para redes sociales'}
          </h5>
   
          <Modal open={loading}><Effect/></Modal>
          <Modalpost open={loadingpost}><Effect/></Modalpost>
          <Modalimage open={loadingimage}><Loading/></Modalimage>
          <Modalimage1 open={loadingimage1}><Loading/></Modalimage1>

         
          <div className=" flex flex-col md:flex-row ">
            <div className="w-full md:w-1/2 min-h-[32rem] ">
              {color ? <div className="w-full p-2 md:p-4 flex flex-col ">

                <label htmlFor="titleEnter" className="font-mono text-[0.9rem] md:text-[1.2rem] text-white">
                  Introduce el título del artículo que quieres generar
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Introduce el título del artículo"
                  className="rounded-lg input1" onChange={sett}
                  value={title}
                />
              </div> : <div className="w-full p-2 md:p-4 flex flex-col ">
                <label htmlFor="titleEnter" className="font-mono text-[0.9rem] md:text-[1.2rem] text-white">
                Introduce el tema
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Introduce el tema"
                  className="rounded-lg input1" onChange={sets}
                  value={subject}
                />
              </div>}

              {color ? <div className="w-full p-2 md:p-4 flex flex-col">
                <label htmlFor="keyword" className="font-mono text-[0.9rem] md:text-[1.2rem] text-white">
                  Introduce, si quieres, una palabra clave especifica o usa el boton de abajo para generarla si no las sabes
                </label>
                <input
                  type="text"
                  name="keyword" onChange={setk}
                  placeholder="Introduce, si quieres, una palabra clave especifica o usa el boton de abajo para generarla si no las sabes
              "
                  className="rounded-lg input1"
                  value={keyword}
                />
              </div> : <div className="w-full p-2 md:p-4 flex flex-col">
                <label htmlFor="keyword" className="font-mono text-[0.9rem] md:text-[1.2rem] text-white">
                Introduce tu página web, si tienes
                </label>
                <input
                  type="text"
                  name="keyword" onChange={setu}
                  placeholder="Analizaremos tu página y crearemos la publicación"
                  className="rounded-lg input1"
                  value={url}
                />
              </div>}

              {color &&
                <div className=" flex flex-col-reverse lg:flex-row justify-between w-full p-4 gap-3 ">
                   <button class="btn cursor-point w-[50vw]" onClick={generate}>
    <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>

    <span class="text">GENERAR PALABRAS CLAVE</span>
</button>
                  {/* <button
                    type="button" onClick={generate}
                    class="text-white center bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-md md:text-lg px-5 h-11 text-center "

                  >
                    GENERAR PALABRAS CLAVE
                  </button> */}
                </div>
              }

              <div className="w-full p-4 flex flex-col text-white">
                

                 {color? ar.map((item) => (
                    <div>{item}</div>
                  )):<div></div>}
              

              </div>

              <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                <label className="text-[0.8rem] md:text-[0.9rem] text-white">
                
                  <input
                    type="radio" className="scale-85 md:scale-90" name="happy"
                    checked={selectedOption === 'HAPPINESS'}
                    value="HAPPINESS"
                    onChange={handleOptionChange}
                  />
                  &nbsp;FELICIDAD
                </label>
                <label className="text-[0.8rem] md:text-[0.9rem] text-white">
                  <input
                    type="radio" className="scale-85 md:scale-90"
                    checked={selectedOption === 'SADNESS'}
                    value="SADNESS"
                    onChange={handleOptionChange}
                  />
                  &nbsp;TRISTEZA
                </label>
                <label className="text-[0.8rem] md:text-[0.9rem] text-white">
                  <input
                    type="radio" className="scale-85 md:scale-90"
                    checked={selectedOption === 'URGENCY'}
                    value="URGENCY"
                    onChange={handleOptionChange}
                  />
                  &nbsp;URGENCIA
                </label>
                <label className="text-[0.8rem] md:text-[0.9rem] text-white">
                  <input
                    type="radio" className="scale-85 md:scale-90"
                    checked={selectedOption === 'INSPIRATION'}
                    value="INSPIRATION"
                    onChange={handleOptionChange}
                  />
                  &nbsp;INSPIRACIÓN
                </label>
                <label className="text-[0.8rem] md:text-[0.9rem] text-white">
                  <input
                    type="radio" className="scale-85 md:scale-90"
                    checked={selectedOption === 'TRANQUILITY'}
                    value="TRANQUILITY"
                    onChange={handleOptionChange}
                  />
                  &nbsp;TRANQUILIDAD
                </label>
                <label className="text-[0.8rem] md:text-[0.9rem] text-white">
                  <input
                    type="radio" className="scale-85 md:scale-90"
                    checked={selectedOption === 'SURPRISE'}
                    value="SURPRISE"
                    onChange={handleOptionChange}
                  />
                  &nbsp;SORPRESA
                </label>
                <label className="text-[0.8rem] md:text-[0.9rem] text-white">
                  <input
                    type="radio" className="scale-85 md:scale-90"
                    checked={selectedOption === 'TRUST'}
                    value="TRUST"
                    onChange={handleOptionChange}
                  />
                  &nbsp;CONFIANZA
                </label>
                <label className="text-[0.8rem] md:text-[0.9rem] text-white">
                  <input
                    type="radio" className="scale-85 md:scale-90"
                    checked={selectedOption === 'CURIOSITY'}
                    value="CURIOSITY"
                    onChange={handleOptionChange}
                  />
                  &nbsp;CURIOSIDAD
                </label>
                <label className="text-[0.8rem] md:text-[0.9rem] text-white">
                  <input
                    type="radio" className="scale-85 md:scale-90"
                    checked={selectedOption === 'EMPATHY'}
                    value="EMPATHY"
                    onChange={handleOptionChange}
                  />
                  &nbsp;EMPATÍA
                </label>
                <label className="text-[0.8rem] md:text-[0.9rem] text-white">
                  <input
                    type="radio" className="scale-85 md:scale-90"
                     checked={selectedOption === 'ENTHUSIASM'}
                     value="ENTHUSIASM"
                  onChange={handleOptionChange}
                  />
                  &nbsp;ENTUSIASMO
                </label>
                <label className="text-[0.8rem] md:text-[0.9rem] text-white">
                  <input
                    type="radio" className="scale-85 md:scale-90"
                    checked={selectedOption === 'PROFESSIONALISM/SERIOUSNESS'}
                    value="PROFESSIONALISM/SERIOUSNESS"
                    onChange={handleOptionChange}
                  />
                  &nbsp;PROFESIONAL/ SERIO
                </label>

              </div>
              {/* <div className="w-full px-4">

                
              </div> */}


              <select className="m-4 rounded-lg" name="cars" id="cars" onChange={handleselection}>
                <option value="Spanish">Español</option>
                <option value="English">Inglés</option>
              </select>

              {!color &&
                <select className="m-4 rounded-lg" name="cars" id="cars" onChange={handleSelectionPost}>
                  <option value="Instagram">Instagram</option>
                  <option value="Linkedin">Linkedin</option>
                  
                  <option value="Facebook">Facebook</option>
                </select>}

              <div className=" flex flex-col-reverse lg:flex-row justify-between p-4 gap-3 ">
                {/* {color ? <button
                  type="button"
                  class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-md md:text-lg px-5 h-11 text-center "
                  // onClick={handleSubmit}
                  onClick={handleSubmit}
                >
                  Crear artículo
                </button> : <button
                  type="button"
                  class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-md md:text-lg px-5 h-11 text-center "
                  // onClick={handleSubmit}
                  onClick={handlefalse}
                >
                  Generar publicación
                </button>} */}
                { color? <button class="btn cursor-point w-[50vw]" onClick={handleSubmit}>
    <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>

    <span class="text"> Crear artículo</span>
</button>: <button class="btn cursor-point w-[50vw]" onClick={handlefalse}>
    <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>

    <span class="text"> Generar publicación</span>
</button>}
{ color? 
<div>
 {imagebutton && <button class="btn cursor-point w-[50vw]" onClick={generateimage}>
    <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>

    <span class="text"> Generar Imagen</span>
</button>}</div>:
<div>
{ imagebutton2 && <button class="btn cursor-point w-[50vw]" onClick={generateimage1}>
    <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>

    <span class="text"> Generar Imagen</span>
</button>}</div>}

                { color? <button
                  type="button"
                  class={`text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm md:text-md px-5 h-11 text-center ${isTrue ? "" : "hidden"}`}
                  onClick={startNow}
                >
                  ¡COMENZAR AHORA!
                </button>: <button
                  type="button"
                  class={`text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm md:text-md px-5 h-11 text-center ${isButton ? "" : "hidden"}`}
                  onClick={startNow}
                >
                  ¡COMENZAR AHORA!
                </button>}

              


              </div>
              <div className=" flex flex-col-reverse lg:flex-row justify-between p-4 gap-3 ">

              { color? <button class="btn cursor-point w-[50vw]" onClick={handledelete}>
    <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>
    
    <span class="text"> Generar otro artículo</span>
</button>: <button class="btn cursor-point w-[50vw]" onClick={handlePostformat}>
    <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>

    <span class="text"> Generar otra publicación</span>
</button>}
            




              </div>

            </div>
            <div className="w-full md:w-1/2 p-4 ">
              <label htmlFor="article" className="font-mono text-[1rem] md:text-[1.5rem] text-white">
                {color ? 'Tu artículo' : 'Publicación'}
              </label>

             { color? <textarea
                name="article"
                id="article" value={message}
                className="input1 w-full rounded-lg scroll-smooth focus:scroll-auto min-h-[15rem] md:min-h-[32.3rem] lg:min-h-[28.7rem] xl:min-h-[27.2rem] h-[50%]"

              >
              </textarea>:<textarea
                name="article"
                id="article" value={message1}
                className="input1 w-full rounded-lg scroll-smooth focus:scroll-auto min-h-[15rem] md:min-h-[32.3rem] lg:min-h-[28.7rem] xl:min-h-[27.2rem] h-[50%]"

              >
              </textarea>}
              <div className="flex px-6 justify-center">
                { color?
                <div>
                {
                  image && 
                  <div  className="flex px-6 flex-col md:flex-row justify-between" >
                    <div className="flex flex-col p-2">
              <img src='https://www.emotionseo.ai:8000/user/image/' width="200" height="200" alt="sdf"/>         
              <button onClick={handleDownload} className="text-white">Descargar imagen</button>
              </div>
              <div className="flex flex-col p-2">
              <img src="https://www.emotionseo.ai:8000/user/imagepost/" width="200" height="200" alt="sdf"/>
              <button onClick={handleDownload1} className="text-white">Descargar imagen</button>
              </div>
           
              </div>
                
                }
              </div>:
              <div >
                {
                  image1 && 
                  <div  className="flex px-6 flex-col md:flex-row justify-between" >
                    <div className="flex flex-col p-2">
              <img src='https://www.emotionseo.ai:8000/user/image/' width="200" height="200" alt="sdf"/>         
              <button onClick={handleDownload} className="text-white">Descargar imagen</button>
              </div>
              <div className="flex flex-col p-2">
              <img src="https://www.emotionseo.ai:8000/user/imagepost/" width="200" height="200" alt="sdf"/>
              <button onClick={handleDownload1} className="text-white">Descargar imagen</button>
              </div>
           
              </div>
                
                }
                </div>}

              </div>
        


          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
