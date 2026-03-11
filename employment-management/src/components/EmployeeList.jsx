import EmployeeRow from "./EmployeeRow";

function EmployeeList({ employees, deleteEmployee, startEdit }) {

    if (employees.length === 0) {
        return <p>No Employees Found</p>;
    }

    return (

        <table>

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>

                {employees.map(emp => (
                    <EmployeeRow
                        key={emp.id}
                        emp={emp}
                        deleteEmployee={deleteEmployee}
                        startEdit={startEdit}
                    />
                ))}

            </tbody>

        </table>

    );
}

export default EmployeeList;