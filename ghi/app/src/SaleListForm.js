import React, { useEffect, useState } from "react";

function SaleList() {
    const [sale, setSale] = useState([]);
    const fetchData = async() => {
        const url = "http://localhost:8090/api/sales/";
        const response = await fetch(url);
        
        if (response.ok) {
            const data = await response.json();
            setSale(data.sale);
        }
    };
    useEffect(() =>{
        fetchData();
    }, [])

    return (
        <div>    
            <h1 className="shadow p-4 mt-4">Sale List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Salesperson Employee ID</th>
                        <th>Salesperson Name</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th> 
                    </tr>
                </thead>
                <tbody>
                    {sale.map(sale => {
                        return (
                            <tr key={sale.id}>
                                <td>{sale.salesperson.id}</td>
                                <td>{sale.salesperson.name}</td>
                                <td>{sale.customer}</td>
                                <td>{sale.vin}</td>
                                <td>{sale.price}</td>        
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default SaleList;