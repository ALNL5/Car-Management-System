import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function ServiceHistoryList() {
    const [services, setService] = useState([])
    useEffect(()=> {
        getServices();
    },[])
    async function getServices() {
        const response = await fetch('http://localhost:8080/api/appointments/')
        if (response.ok) {
            const data = await response.json();
            setService(data);
        }
    }


  return (
    <>
        <div>
          <label for="search">Search by VIN</label>
          <input type="search" id="search" name="search" />
        </div>
        <h1>Service appointments</h1>
        <NavLink className="nav-link" to="/appointments/new">
        <button type="button" className="btn btn-primary">Add appointment</button>
        </NavLink>
        <table className="table table-striped">
        <thead>
            <tr>
            <th>Customer name</th>
            <th>VIN</th>
            <th>Date</th>
            <th>Time</th>
            <th>Reason</th>
            </tr>
        </thead>
        <tbody>
            {appointments.appointments?.map(appointment => {
            return (
                <tr key={appointment.id}>
                <td width="8%">{ appointment.consumer_name }</td>
                <td width="6%">TBD</td>
                <td width="12%">{ appointment.vin }</td>
                <td width="12%">{ appointment.date }</td>
                <td width="12%">{ appointment.time }</td>
                <td width="12%">{ appointment.reason }</td>
                </tr>
            );
            })}
        </tbody>
        </table>
    </>
  );
}

export default ServiceHistoryList;
