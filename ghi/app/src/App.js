import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CreateTechnicianForm from './CreateTechnicianForm';
import TechniciansList from './TechniciansList';
import CreateAppointmentForm from './CreateAppointmentForm';
import AppointmentsList from './AppointmentsList';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
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
