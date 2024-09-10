import { Employee } from "../classes/Employee";
import { EmployeeCard } from "./EmployeeCard";


export function NeoEmployees(){

    function deleteEmployee(_id){
        // employee to be deleted
        console.log("data from child:"+_id);
        
    }   
    let employees=[
        new Employee(111,'hari patel', new Date('22 July 2023'), 78888, 'LD', 10, 'hari@gmail.com', '333'),
        new Employee(121,'Maneesh Shaha', new Date('22 July 2023'), 78888, 'LD', 10, 'hari@gmail.com', '333'),
        new Employee(131,'Rama pawar', new Date('22 July 2023'), 78888, 'LD', 10, 'hari@gmail.com', '333'),
    ]
    const employeeCards=employees.map((employee)=><EmployeeCard employee={employee} deleteEmployee={deleteEmployee}></EmployeeCard>)
    return(
        <div class="row">
            {employeeCards}
        </div>
    );
}