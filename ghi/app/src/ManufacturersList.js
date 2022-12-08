import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function ManufacturersList() {
    const [manufacturers, setManufacturer] = useState([])
    useEffect(()=> {
        getManufacturers();
    },[])
    async function getManufacturers() {
        const response = await fetch('http://localhost:8100/api/manufacturers/')
        if (response.ok) {
            const data = await response.json();
            setManufacturer(data);
        }
    }

  return (
    <>
        <h1>Manufacturers</h1>
        <NavLink className="nav-link" to="/manufacturers/new">
            <button type="button" className="btn btn-primary">Add manufacturer</button>
        </NavLink>
        <table className="table table-striped">
        <thead>
            <tr>
            <th>Name</th>
            <th>id</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {manufacturers.manufacturers?.map(manufacturer => {
            return (
                <tr key={manufacturer.id}>
                <td width="45%">{ manufacturer.name }</td>
                <td width="40%">{ manufacturer.id }</td>
                <td><button type="button" className="btn btn-primary">Delete</button></td>
                </tr>
            );
            })}
        </tbody>
        </table>
    </>
  );
}
export default ManufacturersList;
