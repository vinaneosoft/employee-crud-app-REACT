
import './App.css';

import  Header  from '../header/Header';
import Footer from '../footer/Footer';
import { Learning } from '../components/Learning';
import { NeoEmployees } from '../components/NeoEmployees';
import { Counter } from '../components/Counter';
import { EmployeeForm } from '../components/EmployeeForm';

/* <React.Fragment> </React.Fragment> */
function App() {
  let  applicationName="NEOSOFT EMPLOYEE MANAGEMENT"
  // development : JS
  return (
    // template : JSX
    <>  
        <h3 className='mainHeading'>{applicationName}</h3>
        <Header></Header>
        <EmployeeForm></EmployeeForm>
        <Footer></Footer>
    </>
  );
}

export default App;
