
import './App.css';
import React from 'react';
import  Header  from '../header/Header';
import Footer from '../footer/Footer';
import { Learning } from '../components/Learning';
import { NeoEmployees } from '../components/NeoEmployees';
import { Counter } from '../components/Counter';
import { EmployeeForm } from '../components/EmployeeForm';
import { AdminLogin } from '../components/AdminLogin';

const MyContext=React.createContext();

/* <React.Fragment> </React.Fragment> */
function App() {
  let  applicationName="NEOSOFT EMPLOYEE MANAGEMENT"
  // development : JS
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
