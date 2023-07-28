import React, { useState } from "react";

function CustomerForm() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {}; 
        data.name = name;
        data.address  = address;
        data.phone_number = phone_number;

        const url = "http://localhost:8090/api/customer/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setName("");
            setAddress("");
            setPhoneNumber("");
        }
    }
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>New Customer</h1>
                    <form onSubmit={handleSubmit} id="create-customer">
                        <div className="form-floating mb-3">
                            <input 
                                onChange={handleNameChange}
                                name="name"
                                value={name}
                                placeholder="name" 
                                required 
                                type="text"
                                className="form-control"
                                id="name"
                            />
                            <label htmlFor="name">Name</label>    
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                onChange={handleAddressChange}
                                name="address"
                                value={address}
                                placeholder="address" 
                                required 
                                type="text"
                                className="form-control"
                                id="address"
                            />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                onChange={handlePhoneNumberChange}
                                name="PhoneNumber"
                                value={phone_number}
                                placeholder="PhoneNumber" 
                                required 
                                type="text"
                                className="form-control"
                                id="phone_number"
                            />
                            <label htmlFor="phone_number">Phone Number</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CustomerForm;