function Dashboard({employees}){

const total = employees.length;

const lastEmployee = employees[employees.length-1];

return(

<div className="dashboard">

<div className="card">
<h3>Total Employees</h3>
<p>{total}</p>
</div>

<div className="card">
<h3>Last Added</h3>
<p>{lastEmployee ? lastEmployee.name : "None"}</p>
</div>

<div className="card">
<h3>Storage</h3>
<p>LocalStorage</p>
</div>

</div>

);
}

export default Dashboard;