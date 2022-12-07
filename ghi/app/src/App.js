import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CreateTechnicianForm from './CreateTechnicianForm';
import TechniciansList from './TechniciansList';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
            <Route path="technicians" element={<TechniciansList />} />
            <Route path="technicians/new" element={<CreateTechnicianForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
