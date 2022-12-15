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
import ServiceHistoryList from './ServiceHistoryList';
import ListSalesHistory from './ListSalesHistory';
import AddSalesPerson from './AddSalesPerson';
import ListSalesPerson from './ListSalesPerson';
import AddCustomer from './AddCustomer';
import ListCustomer from './ListCustomer';
import CreateSalesRecord from './CreateSalesRecord';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div>
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
            <Route path="service-history" element={<ServiceHistoryList />} />
            <Route path="/sales/employees/new/" element={<AddSalesPerson />} />
            <Route path="/sales/employees/" element={<ListSalesPerson />} />
            <Route path="/sales/customers/new/" element={<AddCustomer />} />
            <Route path="/sales/customers/" element={<ListCustomer />} />
            <Route path="/sales/records/new/" element={<CreateSalesRecord />} />
            <Route path="/sales/records/" element={<ListSalesHistory />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
