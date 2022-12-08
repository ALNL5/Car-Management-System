import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CreateTechnicianForm from './CreateTechnicianForm';
import TechniciansList from './TechniciansList';
import CreateAppointmentForm from './CreateAppointmentForm';
import AppointmentsList from './AppointmentsList';
import ManufacturersList from './ManufacturersList';
import CreateManufacturerForm from './CreateManufacturerForm';
import ModelsList from './ModelsList';
import CreateModelForm from './CreateModelForm';
import AutosList from './AutosList';
import CreateAutoForm from './CreateAutoForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
            <Route path="manufacturers" element={<ManufacturersList />} />
            <Route path="manufacturers/new" element={<CreateManufacturerForm />} />
            <Route path="models" element={<ModelsList />} />
            <Route path="models/new" element={<CreateModelForm />} />
            <Route path="automobiles" element={<AutosList />} />
            <Route path="automobiles/new" element={<CreateAutoForm />} />
            <Route path="technicians" element={<TechniciansList />} />
            <Route path="technicians/new" element={<CreateTechnicianForm />} />
            <Route path="appointments" element={<AppointmentsList />} />
            <Route path="appointments/new" element={<CreateAppointmentForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
