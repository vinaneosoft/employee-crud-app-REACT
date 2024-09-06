
import './App.css';

import  Header  from '../header/Header';
import Footer from '../footer/Footer';
/* <React.Fragment> </React.Fragment> */
function App() {
  // development : JS
  return (
    // template : JSX
    <>  
        <h3 className='mainHeading'>NEOSOFT EMPLOYEE MANAGEMENT</h3>
        <Header></Header>
        <Footer></Footer>
    </>
  );
}

export default App;
