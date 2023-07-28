import React, { useEffect, useState } from "react";


function VehicleModelForm() {

    const [models, setModels] = useState([]);
    const [color, setColor] = useState('');
    const [year, setYear] = useState('');
    const [vin, setVin] = useState('');
    const [model, setModel] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.color = color;
        data.year = year;
        data.vin = vin;
        data.model_id = model;

        const url = 'http://localhost:8100/api/automobiles/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {

            setColor('');
            setYear('');
            setVin('');
            setModel('');
        }
    }

    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }

    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    }

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const handleModelChange = (event) => {
        const value = event.target.value;
        setModel(value);
    }

    async function fetchAutomobile() {
        const response = await fetch('http://localhost:8100/api/models/');
        if (response.ok) {
            const data = await response.json();
            setModels(data.models);
        }
    }

    useEffect(() => {
        fetchAutomobile();
    }, []);

    return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Add an Automobile to Inventory</h1>
                <form onSubmit={handleSubmit} id="create-location-form">
                <div className="form-floating mb-3">
                <input value={color} onChange={handleColorChange}placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                <label htmlFor="color">Color</label>
                </div>
                <div className="form-floating mb-3">
                <input value={year} onChange={handleYearChange}placeholder="Year" required type="text" name="year" id="year" className="form-control" />
                <label htmlFor="year">Year</label>
                </div>
                <div className="form-floating mb-3">
                <input value={vin} onChange={handleVinChange}placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" />
                <label htmlFor="vin">Vin</label>
                </div>
                <div className="mb-3">
                    <select value={model} onChange={handleModelChange}required name="location" id="location" className="form-select">
                    <option value="">Choose a model</option>
                        {models?.map(manufacturer => {
                            return (
                                <option key={manufacturer.id} value={manufacturer.id}>
                                {manufacturer.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
    );
}

export default VehicleModelForm;
