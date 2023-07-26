import React, { useState } from "react";

function TechnicianForm() {
    const [employeeID, setEmployeeID] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleEmployeeIDChange = (event) => {
        const value = event.target.value;
        setEmployeeID(value);
    }

    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
    }

    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};

        data.employee_id = employeeID;
        data.first_name = firstName;
        data.last_name = lastName;

        const techUrl = "http://localhost:8080/api/technicians/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(techUrl, fetchConfig);
        if (response.ok) {
            setEmployeeID("");
            setFirstName("");
            setLastName("");
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Technician</h1>
                    <form id="create-technician-form" onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input placeholder="Employee ID" required type="text" name="employee_id" id="employee_id" className="form-control" onChange={handleEmployeeIDChange} value={employeeID} />
                            <label htmlFor="employee_id">Employee ID</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control" onChange={handleFirstNameChange} value={firstName} />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" onChange={handleLastNameChange} value={lastName} />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );

}
export default TechnicianForm;
