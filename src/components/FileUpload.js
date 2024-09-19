import { useRef } from "react"
import { useParams } from "react-router-dom";


export function FileUpload(){
    const {_id}=useParams();
    const file = useRef();
    function getFile(employee_pic){
        console.log(employee_pic);
        file.current=employee_pic;
    }
    function upload(){

    }
    return (
       
        <div>
            <p>
                <small>ID : {_id}</small>
            </p>
            <label>Select File to upload</label>
            <input type="file" onChange={(event)=>getFile(event.target.files[0])}></input>
            <button onClick={upload}>UPDATE</button>
        </div>
      
    )
}