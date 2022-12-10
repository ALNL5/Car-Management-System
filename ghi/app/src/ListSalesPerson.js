import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function ListSalesPerson() {
    const [salespersons, setSalesPerson] = useState([])
    useEffect(()=> {
        getSalesPersons();
    },[])
    async function getSalesPersons() {
        const response = await fetch('http://localhost:8090/api/salespersons/')
        if (response.ok) {
            const data = await response.json();
            setSalesPerson(data);
        }
    }

    const deleteSalesPerson = async id => {
        await fetch(`http://localhost:8090/api/salespersons/${id}/`, {
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
        <h1>Sales People</h1>
        <NavLink className="nav-link" to="/sales/employees/new/">
            <button type="button" className="btn btn-primary">Add Sales Person</button>
        </NavLink>
        <table className="table table-striped">
        <thead>
            <tr>
            <th>Name</th>
            <th>Employee ID</th>
            </tr>
        </thead>
        <tbody>
            {salespersons?.map(salesperson => {
            return (
                <tr key={salesperson.id}>
                <td width="33%">{ salesperson.name }</td>
                <td width="33%">{ salesperson.employee_id }</td>
                <td><button onClick={() => deleteSalesPerson(salesperson.id)} type="button" className="btn btn-primary">Delete</button></td>
                </tr>
            );
            })}
        </tbody>
        </table>
      </>
  );
}
export default ListSalesPerson;
