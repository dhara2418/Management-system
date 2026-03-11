import { useState, useEffect } from "react";

function EmployeeForm({ addEmployee, editEmployee, updateEmployee }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [salary, setSalary] = useState("");

    useEffect(() => {
        if (editEmployee) {
            setName(editEmployee.name);
            setEmail(editEmployee.email);
            setPhone(editEmployee.phone);
            setSalary(editEmployee.salary);
        }
    }, [editEmployee]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email) {
            alert("Fill all fields");
            return;
        }

        const emp = {
            id: editEmployee?.id,
            name,
            email,
            phone,
            salary
        };

        if (editEmployee) {
            updateEmployee(emp);
        } else {
            addEmployee(emp);
        }

        setName("");
        setEmail("");
        setPhone("");
        setSalary("");
    };

    return (

        <form onSubmit={handleSubmit}>

            <input
                placeholder="Employee Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <input
                placeholder="Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
            />

            <button>
                {editEmployee ? "Update Employee" : "Add Employee"}
            </button>

        </form>

    );
}

export default EmployeeForm;