import { useEffect, useRef, useState } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { deleteEmployeeById, getAllEmployees, getEmployeeByName } from "../model/EmployeeCRUD";
import { useLoaderData } from "react-router-dom";


export function NeoEmployees(){
    const nameNode=useRef();
    const data=useLoaderData();
    let [employees, setEmployees]=useState(data); 

    async function getEmps(){
        const data=await getAllEmployees();
        setEmployees(data);
    }
    async function deleteEmployee(_id){
        //console.log("data from child:"+_id);
        const ans=window.confirm("Do you really want to delete?");
        if(ans){
            const data=await deleteEmployeeById(_id);
           // console.log(data); 
            if(data.deletedCount>0) /* data!=null */
            {
                window.alert("Employee deleted successfully....");
                getEmps();
            }
            else
                window.alert("Something went wrong while deleting....");
        }
    }  
    function searchEmp(emp_name){
        console.log(emp_name);
        const data=getEmployeeByName(emp_name)
        if(data!=null)
            setEmployees(data);
        else
            console.log("NOT FOUND");
            
    }
    useEffect(()=>{ 
        console.log("in useEffect");
      //  getEmps();
    }/* ,[] */)

    const employeeCards=employees.map((employee, i)=><EmployeeCard key={'e'+i} employee={employee} deleteEmployee={deleteEmployee}></EmployeeCard>)
    return(
        <>
        <section className="m-2">
            <label>Employee name to search:</label>
            <input type="text" ref={nameNode} onKeyUp={()=>searchEmp(nameNode.current.value)}></input>
        </section>
        <div className="row">
            {employeeCards}
        </div>
        </>
      
    );
}