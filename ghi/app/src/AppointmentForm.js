import React, { useState, useEffect } from "react";

function AppointmentForm() {
    const [date, setDate] = useState([]);
    const [time, setTime] = useState([]);
    const [reason, setReason] = useState("");
    const [customer, setCustomer] = useState("");
    const [technicians, setTechnicians] = useState([]);
    const [vin, setVin] = useState("");
    const [person, setPerson] = useState("");

    const handleDateChange = (event) => {
        const value = event.target.value;
        setDate(value);
    }

    const handleTimeChange = (event) => {
        const value = event.target.value;
        setTime(value);
    }

    const handleReasonChange = (event) => {
        const value = event.target.value;
        setReason(value);
    }

    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const handlePersonChange = (event) => {
        const value = event.target.value;
        setPerson(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};

        data.technician = person;
        data.customer = customer;
        data.vin = vin;
        data.date_time = `${date} ${time}`;
        data.reason = reason;

        const apptUrl = "http://localhost:8080/api/appointments/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const appointment = await fetch(apptUrl, fetchConfig);

        if (appointment.ok) {
            setDate("");
            setTime("");
            setPerson("");
            setReason("");
            setCustomer("");
            setVin("");
        }
    }

    async function fetchTechnician() {
        const techUrl = 'http://localhost:8080/api/technicians/';
        const response = await fetch(techUrl);

        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians);
        }
    }

    useEffect(() => {
        fetchTechnician();
    }, []);


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Service Appointment</h1>
                    <form id="create-record-of-an-appointment-form" onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input placeholder="Automobile VIN" required type="text" name="vin" id="vin" className="form-control" onChange={handleVinChange} value={vin} />
                            <label htmlFor="vin">VIN #</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input placeholder="Customer" required type="text" name="customer" id="customer" className="form-control" onChange={handleCustomerChange} value={customer} />
                            <label htmlFor="customer">Customer</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input placeholder="Date" required type="date" name="date" id="date" className="form-control" onChange={handleDateChange} value={date} />
                            <label htmlFor="date">Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input placeholder="Time" required type="time" name="time" id="time" className="form-control" onChange={handleTimeChange} value={time} />
                            <label htmlFor="time">Time</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" onChange={handleReasonChange} value={reason} />
                            <label htmlFor="reason">Reason</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select required placeholder="Technician" id="technician" className="form-select" onChange={handlePersonChange} value={person}>
                                <option value="">Choose a technician</option>
                                {technicians?.map(technician => {
                                    return (
                                        <option key={technician.id} value={technician.id}>{technician.first_name} {technician.last_name}</option>
                                    );
                                })}
                            </select>
                            <label htmlFor="technician">Technician</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );

}
export default AppointmentForm;
