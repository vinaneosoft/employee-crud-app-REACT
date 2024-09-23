import { useRef, useState } from "react";
import Button from '@mui/material/Button';
import { login } from "../model/UserModel";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../reactredux/userSlice";
export function AdminLogin(){
    const navigate=useNavigate();
    const [errorMessage, setMessage]=useState("");
    const dispatch=useDispatch();

    let usernameNode=useRef();
    let passwordNode=useRef();
    function collectData(ev){
        ev.preventDefault();
        const username=usernameNode.current.value;
        const password=passwordNode.current.value;
       // console.log(username);
      //  console.log(password);
        // we will test admin credentials

        const res=login(username, password);
        if(res) {
            setMessage("");
            dispatch(setUser(username))
            window.alert("You are logged in sucessfully...")
            navigate('/home');
        }
        else
            setMessage("Incorrect username or password")
    }
    return (
        <>
        <h4 className="text-center">ADMIN LOGIN</h4>
         <div className="d-flex justify-content-center">
             <form className="w-50 bg-secondary p-3" onSubmit={collectData}>
                <div>
                    <small className="text-danger">{errorMessage}</small>
                </div>
               <div className="mb-3">
                   <label htmlFor="username" className="form-label">USERNAME</label>
                   <input type="text" className="form-control" id="username"  ref={usernameNode} required />
               </div>
               <div className="mb-3">
                   <label htmlFor="password" className="form-label">PASSWORD</label>
                   <input type="password" className="form-control" id="password" ref={passwordNode}  required />
               </div>
               <Button type="submit" variant="contained"  className="m-2" color="secondary">Submit</Button>
               <Button type="reset" variant="contained" color="secondary" >Reset</Button>
           </form> 
         </div>
        </>
    );

}