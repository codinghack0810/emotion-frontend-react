import React, {useEffect} from 'react';
import PageRoutes from './routes';
import { Provider, useSelector } from 'react-redux';
// import store from './store';
import { BrowserRouter, Routes, Router } from 'react-router-dom';
// import setAuthToken from './utils/setAuthToken'


function App() {

  // useEffect(() => {
  //   const AccessToken = localStorage.getItem('accessToken');
  //   if(AccessToken) {
      
  //   } 
  // }, [])

 

  return (
        <PageRoutes />
  );
}


export default App;
