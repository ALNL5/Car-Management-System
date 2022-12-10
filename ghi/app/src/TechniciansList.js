import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function TechniciansList() {
    const [technicians, setTechnician] = useState([])
    useEffect(()=> {
        getTechnicians();
    },[])
    async function getTechnicians() {
        const response = await fetch('http://localhost:8080/api/technicians/')
        if (response.ok) {
            const data = await response.json();
            setTechnician(data);

        }
    }

    const deleteTechnician = async id => {
        await fetch(`http://localhost:8080/api/technicians/${id}/`, {
          method: "delete",
          headers: {
            "Content-Type": "application/json"
        },
        }).then(() => {
            window.location.reload();
      });
    }

  return (
      <>
        <h1>Technicians</h1>
        <NavLink className="nav-link" to="/technicians/new">
            <button type="button" className="btn btn-primary">Add technician</button>
        </NavLink>
        <table className="table table-striped">
        <thead>
            <tr>
            <th>Name</th>
            <th>Employee #</th>
            <th>id</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {technicians.technicians?.map(technician => {
            return (
                <tr key={technician.id}>
                <td width="33%">{ technician.technician_name }</td>
                <td width="33%">{ technician.employee_number }</td>
                <td width="25%">{ technician.id }</td>
                <td><button onClick={() => deleteTechnician(technician.id)} type="button" className="btn btn-primary">Delete</button></td>
                </tr>
            );
            })}
        </tbody>
        </table>
      </>
  );
}
export default TechniciansList;
