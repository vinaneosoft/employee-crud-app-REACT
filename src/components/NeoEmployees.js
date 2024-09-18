import { useEffect, useState } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { deleteEmployeeById, getAllEmployees } from "../model/EmployeeCRUD";
import { useLoaderData } from "react-router-dom";


export function NeoEmployees(){
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