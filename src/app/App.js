
import './App.css';

import  Header  from '../header/Header';
import Footer from '../footer/Footer';
/* <React.Fragment> </React.Fragment> */
function App() {
  let  applicationName="NEOSOFT EMPLOYEE MANAGEMENT"
  // development : JS
  return (
    // template : JSX
    <>  
        <h3 className='mainHeading'>{applicationName}</h3>
        <Header></Header>
        <Footer></Footer>
    </>
  );
}

export default App;
