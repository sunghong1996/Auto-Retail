import React, { useEffect, useState } from "react";

function AppointmentList() {
    const [appointments, setAppointments] = useState([]);

    const fetchAppointments = async() => {
        const apptUrl = "http://localhost:8080/api/appointments/";
        const response = await fetch(apptUrl);

        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    const cancelAppointment = async (id) => {
        const url = `http://localhost:8080/api/appointments/${id}/cancel/`;
        const fetchConfig = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setAppointments(value => {
                return value.filter(appointment => appointment.id !== id )
            });
        };
    };

    const finishAppointment = async (id) => {
        const appointmentUrl = `http://localhost:8080/api/appointments/${id}/finish/`;
        const fetchConfig = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok) {
            setAppointments(value => {
                return value.filter(appointment => appointment.id !== id);
            });
        };
    };


    return (
        <div>
            <h2>Service Appointments</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>VIN #</th>
                        <th>VIP?</th>
                        <th>Customer</th>
                        <th>Technician</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.filter(appointment => appointment.status === "created").map(appointment => {
                        return (
                            <tr className="table-row" key={appointment.id}>
                                <td>
                                    {new Date(appointment.date_time).toLocaleDateString("en-US")}
                                </td>
                                <td>
                                    {new Date(appointment.date_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", })}
                                </td>
                                <td>{appointment.vin}</td>
                                <td>{appointment.vip ? "Yes" : "No"}</td>
                                <td>{appointment.customer}</td>
                                <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                                <td>{appointment.reason}</td>
                                <td>
                                    <button onClick={() => cancelAppointment(appointment.id)} className="btn btn-secondary m-2">
                                    Cancel
                                    </button>
                                    <button onClick={() => finishAppointment(appointment.id)} className="btn btn-primary">
                                    Finished
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table >
        </div>
    );

}
export default AppointmentList;
