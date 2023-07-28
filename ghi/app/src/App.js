import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';

import TechnicianForm from './TechnicianForm';
import TechniciansList from './TechnicianList';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import ServiceHistory from './ServiceHistory';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import VehicleModelsList from './VehicleModelsList';
import VehicleModelForm from './VehicleModelForm';

import AutomobilesForm from './AutomobilesForm';
import AutomobilesList from './AutomobilesList'
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import SalesForm from './SalesForm';
import SaleList from './SalesList';
import SalesPersonForm from './SalespersonForm';
import SalesPersonHistory from './SalesPersonHistory'



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          
          <Route path="sale"> 
            <Route path="add" element={<SalesForm />} />
            <Route path="list" element={<SaleList/>} />
          </Route>

          <Route path="customer">
            <Route path="add" element={<CustomerForm />} />
            <Route path="list" element={<CustomerList/>} />
          </Route>

          <Route path="salesperson">
            <Route path="add" element={<SalesPersonForm />} />
            <Route path="history" element={<SalesPersonHistory />} />
          </Route>

          <Route path="automobiles">
            <Route path="add" element={<AutomobilesForm />} />
            <Route path="list" element={<AutomobilesList />} />
          </Route>



          <Route path="technicians">
            <Route path="add" element={<TechnicianForm />} />
            <Route path="list" element={<TechniciansList />} />
          </Route>

          <Route path="appointments">
            <Route path="add" element={<AppointmentForm />} />
            <Route path="list" element={<AppointmentList />} />
          </Route>

          <Route path="service/history/" element={<ServiceHistory />} />

          <Route path="manufacturers">
            <Route path="add" element={<ManufacturerForm />} />
            <Route path="list" element={<ManufacturerList />} />
          </Route>

          <Route path="models">
            <Route path="add" element={<VehicleModelForm />} />
            <Route path="list" element={<VehicleModelsList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
