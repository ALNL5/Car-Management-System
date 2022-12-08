import React, { useEffect, useState } from 'react';


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

  return (
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
              <td width="25%">{ technician.technician_name }</td>
              <td width="25%">{ technician.employee_number }</td>
              <td width="25%">{ technician.id }</td>
              <td><button type="button" className="btn btn-primary">Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default TechniciansList;
