import axios from 'axios';


const url="http://localhost:5000/employees";
async function addEmployee(employee){
    const response=await axios.post(url,employee);
    console.log(response);
}
function updateEmployee(employee){

}
function deleteEmployeeById(_id){

}
function getEmployeeById(_id){
    
}
function getAllEmployees(){

}

module.exports={addEmployee, updateEmployee,deleteEmployeeById, getEmployeeById,getAllEmployees}