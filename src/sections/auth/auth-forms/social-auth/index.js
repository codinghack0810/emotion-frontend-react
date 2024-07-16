import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import "./index.css";

const BACKEND_API_URL = "https://emotionseo.ai:8000"

const SocialAuth = () => {
  let location = useLocation();
  console.log("location", location);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const values = queryString.parse(location.search);
    const code = values.code ? values.code : null;

    if (code) {
      onGogglelogin();
    }
  }, []);

  const googleLoginHandler = (code) => {
    // const data = {
    //   "code": code
    // }
    // const queryParams = new URLSearchParams(data).toString();

    return axios
      .get(`${BACKEND_API_URL}/user/auth/google/${code}`)
      .then((res) => {
        console.log("res", res)
        localStorage.setItem("goggleFirstName", res.data.user.first_name);
     
        localStorage.setItem('access', res.data.access_token);
        navigate('/generatearticle')
        localStorage.setItem('isLogined', true)
        return res.data;
      })
      .catch((err) => {
        console.log("error", err)
        return err;
      });
  };

  const onGogglelogin = async () => {
    const response = await googleLoginHandler(location.search);
    console.log(response);
  }

  return (
    <div className="loading-icon-container">
      <div className="loading-icon">
        <div className="loading-icon__circle loading-icon__circle--first"></div>
        <div className="loading-icon__circle loading-icon__circle--second"></div>
        <div className="loading-icon__circle loading-icon__circle--third"></div>
        <div className="loading-icon__circle loading-icon__circle--fourth"></div>
      </div>
      <small className=" text-center mr-2">
        Just a moment
      </small>
    </div>
  );
};


export default SocialAuth;
