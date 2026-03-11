function EmployeeRow({ emp, deleteEmployee, startEdit }) {

    return (

        <tr>

            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.phone}</td>
            <td>{emp.salary}</td>

            <td>

                <button
                    className="edit"
                    onClick={() => startEdit(emp)}
                >
                    Edit
                </button>


                <button
                    className="delete"
                    onClick={() => deleteEmployee(emp.id)}
                >
                    Delete
                </button>

            </td>

        </tr>

    );
}

export default EmployeeRow;