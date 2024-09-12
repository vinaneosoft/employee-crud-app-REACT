
import './App.css';
import React, { useEffect, useState } from 'react';
import  Header  from '../header/Header';
import Footer from '../footer/Footer';
import { Learning } from '../components/Learning';
import { NeoEmployees } from '../components/NeoEmployees';
import { Counter } from '../components/Counter';
import { EmployeeForm } from '../components/EmployeeForm';
import { AdminLogin } from '../components/AdminLogin';
import { appName } from './model/data';
import { MyContext } from './model/context';


/* <React.Fragment> </React.Fragment> */
function App() {
  let  [applicationName, setName]=useState(appName)
  // development : JS
  setTimeout(()=>{
    setName("NEO EMP MGMT")
  }, 3000)
  return (
    // template : JSX
    <MyContext.Provider value={applicationName}>  
        <h3 className='mainHeading'>{applicationName}</h3>
        <Header></Header>
        <AdminLogin></AdminLogin>
        <Footer></Footer>
    </MyContext.Provider>
  );
}

export default App;
