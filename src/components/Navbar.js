import { useContext, useEffect } from "react";
import { MyContext } from "../app/model/context";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetUser, setUser } from "../reactredux/userSlice";
import Cookies from "universal-cookie";
export function Navbar(){
  const cookie=new Cookies();
  let contextData=useContext(MyContext)
  const username=useSelector((state)=>state.user.value);
  const dispatch=useDispatch();
  const navigate=useNavigate();
 // console.log(username);
  function logout(){
    cookie.remove("user");
    dispatch(resetUser());
    window.alert("Logged out.....");
    navigate("/adminlogin");
  }
  useEffect(()=>{
    console.log("store:", username);
    const uname=cookie.get('user');
    if(uname!==undefined)
      dispatch(setUser(uname));
  });
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
        <li className="nav-item">
          <Link className="nav-link" to="addemployee" style={{
          pointerEvents: (username==="") ? "none" : "auto",
          }}>ADD Employee</Link> 
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          {username==="" && <Link className="nav-link" to="adminlogin">LOGIN</Link>}
        </li>
        <li className="nav-item">
          {username!=="" && <button onClick={logout} className="nav-link" href="#">LOGOUT</button>}
        </li>
      </ul>
    </div>
    <b className="text-white">{username}</b>
  </div>
 
</nav>
);

}