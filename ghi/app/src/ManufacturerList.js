import React, { useState, useEffect } from "react";

function ManufacturerList() {
    const [manufacturers, setManufacturers] = useState([]);

    const loadManufacturers = async () => {
        const url = "http://localhost:8100/api/manufacturers/";
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
        };
    };

    useEffect(() => {
        loadManufacturers();
    }, []);

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Manufacturers</th>
                    </tr>
                </thead>
                <tbody>
                    {manufacturers?.map(manufacturer => {
                        return (
                            <tr key={manufacturer.id}>
                                <td>{manufacturer.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table >
        </div>
    );

}
export default ManufacturerList;
