import React, { useEffect, useState } from 'react';
function SalesForm() {

    const [automobiles, setAutomobiles] = useState([]);
    const [automobile, setAutomobile] = useState('');
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState('');
    const [salesPersons, setSalesPersons] = useState([]);
    const [salesPerson, setSalesPerson] = useState('');
    const [salesPrice, setSalesPrice] = useState([]);
    const [salePrice, setSalePrice] = useState('');

    const handleAutomobileChange = (event) => {
        setAutomobile(event.target.value);
    }
    const handleSalesPersonChange = (event) => {
        setSalesPerson(event.target.value);
    }
    const handleCustomerChange = (event) => {
        setCustomer(event.target.value);
    }
    const handlePriceChange = (event) => {
        setSalePrice(event.target.value);
    }

    const fetchSalesPrice = async() => {
        const Url = 'http://localhost:8090/api/sales/';
        const Response = await fetch(Url);
        if (Response.ok) {
            const data = await Response.json();
            setSalesPrice(data.sales)
        }
    }

    const fetchAutomobiles = async() => {
        const Url = 'http://localhost:8100/api/automobiles/';
        const Response = await fetch(Url);
        if (Response.ok) {
            const data = await Response.json();
            setAutomobiles(data.autos)
        }
    }

    const fetchSalesPerson = async() => {
        const Url = 'http://localhost:8090/api/sales/employee/';
        const Response = await fetch(Url);
        if (Response.ok) {
            const data = await Response.json();
            setSalesPersons(data.salesperson)
        }
    }

    const fetchCustomer = async() => {
        const Url = 'http://localhost:8090/api/sales/customer/';
        const Response = await fetch(Url);
        if (Response.ok) {
            const data = await Response.json();
            setCustomers(data.customers)
        }
    }

    useEffect(() => {
        fetchAutomobiles();
        fetchCustomer();
        fetchSalesPerson();
        fetchSalesPrice();
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {}
        data.automobile = automobile;
        data.customer = customer;
        data.salesperson = salesPerson;
        data.price = salePrice;

        const url = 'http://localhost:8090/api/sales/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setAutomobile('');
            setCustomer('');
            setSalesPerson('');
            setSalePrice('');
        }
    }

    return (
        <div className="container">
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create New Sales</h1>
                    <form onSubmit={handleSubmit} id='create-sales-form'>
                        <div className='mb-3'>
                            <select 
                                onChange={handleAutomobileChange}
                                value={automobile}
                                required
                                name='automobile'
                                id='automobile'
                                className='form-select'>
                                    <option value="">Choose an Automobile</option>
                                    {automobiles.filter((auto) => {
                                        return salesPrice.includes(auto.vin);
                                    })
                                    .map(auto => {
                                        return (
                                            <option key = {auto.vin} value={auto.vin}>
                                                {auto.name}
                                            </option>
                                        )
                                    })}
                            </select>    
                        </div>
                        <div className='mb-3'>
                            <select
                                onChange={handleSalesPersonChange}
                                required
                                name='salesperson'
                                id='salesperson'
                                className='form-select'
                                value={salesPerson}>
                                    <option value=''>Choose a Salesperson</option>
                                    {salesPersons.map(saleperson => {
                                        return (
                                            <option key={saleperson.id} value={saleperson.id}>
                                                {saleperson.name}
                                            </option>
                                        )
                                    })}
                                </select>
                        </div>
                        <div className='mb-3'>
                            <select
                                onChange={handleCustomerChange}
                                required
                                name='customers'
                                id='customers'
                                className='form-select'
                                value={customer}>
                                    <option value=''>Choose a Customer</option>
                                    {customers.map(customer => {
                                        return (
                                            <option key={customer.id} value={customer.id}>
                                                {customer.name}
                                            </option>
                                        )
                                    })}
                            </select>
                        </div>
                        <div className='form-floating mb-3'>
                            <input 
                                onChange={handlePriceChange}
                                value={salePrice}
                                placeholder='saleprice'
                                required
                                name='saleprice'
                                id='saleprice'
                                className='form-control' />
                            <label htmlFor='saleprice'>Sale Price</label>
                        </div>
                        < button className='btn btn-primary'>Create</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
    )
}
export default SalesForm;