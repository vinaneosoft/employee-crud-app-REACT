import axios from 'axios';


const url="http://localhost:5000/employees";
//const url2="http://localhost:3000/employees" // for json-server
export async function addEmployee(employee){
    const response=await axios.post(url+"/add",employee);
    //const response=await axios.post(url,employee);
    return response.data;
}
export function updateEmployee(employee){

}
export function deleteEmployeeById(_id){

}
export function getEmployeeById(_id){
    
}
export function getAllEmployees(){

}

