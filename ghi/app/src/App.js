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

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />

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
            <Route path="list" element={<VehicleModelsList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
