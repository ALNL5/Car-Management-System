import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


async function loadTechnicians() {
  const response1 = await fetch("http://localhost:8080/api/technicians/");
  if (response1.ok) {
    const data1 = await response1.json();
    root.render(
      <React.StrictMode>
        <App technicians={data1.technicians} />
      </React.StrictMode>
    )
  } else {
    console.error(response1);
  }
}
loadTechnicians();
