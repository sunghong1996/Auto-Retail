import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CustomerForm from './CustomerForm';
import SaleList from './SalesList';
import TechnicianForm from './TechnicianForm';
import TechniciansList from './TechnicianList';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import ServiceHistory from './ServiceHistory';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import VehicleModelsList from './VehicleModelsList';
import VehicleModelForm from './VehicleModelForm';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="sale"> 
            <Route path="add" element={<SaleList />} />
            <Route path="list" element={<SaleList/>} />
          </Route>
          <Route path="customer">
            <Route path="add" element={<CustomerForm />} />
            <Route path="list" element={<CustomerList />} />
          </Route>
          <Route path="salesperson">
            <Route path="add" element={<TechnicianForm />} />
            <Route path="list" element={<TechniciansList />} />
            <Route path="history" element={<TechniciansList />} />
          </Route>
          <Route path="customer">
            <Route path="add" element={<TechnicianForm />} />
            <Route path="list" element={<TechniciansList />} />
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
