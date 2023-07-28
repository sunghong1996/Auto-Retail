import React, { useEffect, useState } from "react";
function CustomerList() {
    const [customer, setCustomer] = useState([]);
    const fetchData = async() => {
        const url = "http://localhost:8090/api/customers/";
        const response = await fetch(url);
        
        if (response.ok) {
            const data = await response.json();
            setCustomer(data.customer);
        }
    };
    useEffect(() =>{
        fetchData();
    }, [])

    return (
        <div>    
            <h1 className="shadow p-4 mt-4">Customers List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Address</th> 
                    </tr>
                </thead>
                <tbody>
                    {customer.map(customer => {
                        return (
                            <tr key={customer.id}>
                                <td>{customer.name}</td>
                                <td>{customer.phonenumber}</td>
                                <td>{customer.address}</td>       
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CustomerList;