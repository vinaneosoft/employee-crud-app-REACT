import { useEffect, useState } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { getAllEmployees } from "../model/EmployeeCRUD";
import { useLoaderData } from "react-router-dom";


export function NeoEmployees(){
    const data=useLoaderData();
    let [employees, setEmployees]=useState(data); 

    async function getEmps(){
        const data=await getAllEmployees();
        setEmployees(data);
    }
    function deleteEmployee(_id){
        // employee to be deleted
        console.log("data from child:"+_id);
    }  
    useEffect(()=>{ 
        console.log("in useEffect");
      //  getEmps();
    }/* ,[] */)

    const employeeCards=employees.map((employee, i)=><EmployeeCard key={'e'+i} employee={employee} deleteEmployee={deleteEmployee}></EmployeeCard>)
    return(
        <div className="row">
            {employeeCards}
        </div>
    );
}