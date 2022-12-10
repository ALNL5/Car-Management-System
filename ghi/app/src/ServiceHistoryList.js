import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function ServiceHistoryList() {
    const [vin, setVin] = useState("")
    const [targetedAppointments, setTargetedAppointments] = useState([])
    useEffect(()=> {
        getAppointments();
    },[])

    async function getAppointments(inputVin) {
        const response = await fetch('http://localhost:8080/api/appointments/')
        if (response.ok) {
            const data = await response.json();
            const targetedAppointments = await data.appointments.filter(
                appointment => appointment.vin === inputVin
              );
            const targetedAppointments2 = await targetedAppointments.filter(
                appointment => {return appointment.is_finished }
            );
            setTargetedAppointments(targetedAppointments2);
        }
    }


  return (
    <>
        <div>
        <input onChange={e => setVin(e.target.value)} type="search" id="search" name="search" placeholder="Search by VIN"/>
        <button onClick={() => getAppointments(vin)} htmlFor="search" type="submit" className="btn btn-primary">Search</button>
        </div>
        <h1>Service history</h1>
        <table className="table table-striped">
        <thead>
            <tr>
            <th>VIN</th>
            <th>Customer name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
            </tr>
        </thead>
        <tbody>
            {targetedAppointments?.map(appointment => {
            return (
                <tr key={appointment.id}>
                <td width="12%">{ appointment.vin }</td>
                <td width="14%">{ appointment.consumer_name }</td>
                <td width="12%">{ appointment.date }</td>
                <td width="10%">{ appointment.time }</td>
                <td width="12%">{ appointment.technician.technician_name }</td>
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
