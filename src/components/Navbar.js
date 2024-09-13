import { useContext } from "react";
import { MyContext } from "../app/model/context";
import { Link } from "react-router-dom";


export function Navbar(){
  let contextData=useContext(MyContext)
return(
<nav className="navbar bg-dark navbar-expand-sm bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="home">{contextData}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" to="home">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="employees">Show Employees</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link"  href="#">LOGIN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">LOGOUT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);

}