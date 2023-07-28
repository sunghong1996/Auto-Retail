import React, { useState } from "react";

function AutomobilesForm() {
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};

        data.name = name;

        const url = "http://localhost:8100/api/automobiles/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const automobiles = await fetch(url, fetchConfig);

        if (automobiles.ok) {
            setName('');
        }
    }


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add an automobiles</h1>
                    <form id="create-automobiles-form" onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input placeholder="Name" required type="text" name="name" id="name" className="form-control" value={name} onChange={handleNameChange} />
                            <label htmlFor="name">Name</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );

}
export default AutomobilesForm;