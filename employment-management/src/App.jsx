import { useState, useEffect } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {

const [employees,setEmployees] = useState([]);
const [editEmployee,setEditEmployee] = useState(null);

useEffect(()=>{
const stored = JSON.parse(localStorage.getItem("employees")) || [];
setEmployees(stored);
},[]);

useEffect(()=>{
localStorage.setItem("employees", JSON.stringify(employees));
},[employees]);

const addEmployee = (emp)=>{
setEmployees([...employees,{...emp,id:Date.now()}]);
};

const deleteEmployee = (id)=>{
setEmployees(employees.filter(e=>e.id!==id));
};

const startEdit = (emp)=>{
setEditEmployee(emp);
};

const updateEmployee = (updated)=>{
setEmployees(
employees.map(e=>e.id===updated.id ? updated : e)
);
setEditEmployee(null);
};

const clearAllEmployees = ()=>{
if(window.confirm("Clear all employees?")){
setEmployees([]);
}
};

return(

<div className="container">

<h1>Employee Management System</h1>

<Dashboard employees={employees}/>

<EmployeeForm
addEmployee={addEmployee}
editEmployee={editEmployee}
updateEmployee={updateEmployee}
/>

<button className="clear" onClick={clearAllEmployees}>
Clear All Employees
</button>

<EmployeeList
employees={employees}
deleteEmployee={deleteEmployee}
startEdit={startEdit}
/>

</div>

);
}

export default App;