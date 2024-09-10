export class Employee{
    constructor(
        _id=0,  // id="0" for backend json server
        emp_name="",
        joining_date=new Date(),
        emp_salary =0,
        dept_code="",
        experience=0,
        emp_email="",
        secrete_code="123",
        employee_pic=""
       ){
           this._id=_id;
           this.emp_name=emp_name;
           this.joining_date=joining_date;
           this.emp_salary=emp_salary;
           this.dept_code=dept_code;
           this.experience=experience;
           this.emp_email=emp_email;
           this.secrete_code=secrete_code;
           this.employee_pic=employee_pic
       }
}