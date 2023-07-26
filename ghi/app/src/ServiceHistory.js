import { useEffect, useState } from 'react';


function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDay()
    return `${month}/${day}/${year}`
}


function formatTime(dateString) {
    let date = new Date(dateString);
    let hours = date.getUTCHours();
    let minutes = ("00" + date.getUTCMinutes()).slice(-2);
    let AMPM = 'AM';
    if (hours > 12) {
        hours -= 12;
        AMPM = 'PM';
    }
    return `${hours}:${minutes} ${AMPM}`
}


function ServiceHistory() {
    const [formData, setFormData] = useState({
        vin: "",
    })

    const [appointments, setAppointments] = useState([]);

    const fetchAppointmentData = async (vin) => {
        const url = "http://localhost:8080/api/appointments/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            let relevant_appointments = []
            if (!vin) {
                relevant_appointments = data.appointments
            } else {
                for (let appointment of data.appointments) {
                    if (appointment.vin == vin) {
                        relevant_appointments.push(appointment)
                    }
                }
            }
            setAppointments(relevant_appointments);
        }
    };

    useEffect(() => {
        fetchAppointmentData();
    }, []);

    const handleFormChange = (event) => {
        const value = event.target.value;
        const inputName = event.target.name;
        setFormData({
            ...formData,
            [inputName]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        fetchAppointmentData(formData.vin);
    }

    return (
        <>
            <h1 className="mt-4">Service History</h1>
            <form onSubmit={handleSubmit} id="search-vin-form">
                <div className="input-group mb-3">
                    <input value={formData.vin} onChange={handleFormChange} type="text" name="vin" className="form-control" placeholder="Search by VIN..." aria-label="Search by VIN..." aria-describedby="basic-addon2"/>
                    <button className="input-group-append btn btn-outline-secondary">Search</button>
                </div>
            </form>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Is VIP?</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{ appointment.vin }</td>
                                <td>{ appointment.isVip ? "Yes" : "No" }</td>
                                <td>{ appointment.customer }</td>
                                <td>{ formatDate(appointment.date_time) }</td>
                                <td>{ formatTime(appointment.date_time) }</td>
                                <td>{ `${appointment.technician.first_name} ${appointment.technician.last_name}` }</td>
                                <td>{ appointment.reason }</td>
                                <td>{ appointment.status }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default ServiceHistory;
