import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function ServiceHistoryList() {
    const [appointments, setAppointment] = useState([])
    const [targetedAppointments, setTargetedAppointments] = useState([])
    useEffect(()=> {
        getAppointments();
    },[])

    async function getAppointments(inputVin) {
        const response = await fetch('http://localhost:8080/api/appointments/')
        if (response.ok) {
            const data = await response.json();
            const targetedAppointments = data.appointments.filter(
                appointment => appointment.vin === inputVin
              );
            setAppointment(data);
            setTargetedAppointments(targetedAppointments);
        }
    }


  return (
    <>
        <div>
        <input onChange={e => getAppointments(e.target.value)} type="search" id="search" name="search" placeholder="Search by VIN"/>
        {/* <button htmlFor="search" type="button" className="btn btn-primary">Search</button> */}
        </div>
        <h1>Service history</h1>
        <table className="table table-striped">
        <thead>
            <tr>
            <th>VIN</th>
            <th>Customer name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Reason</th>
            </tr>
        </thead>
        <tbody>
            {targetedAppointments?.map(appointment => {
            return (
                <tr key={appointment.id}>
                <td width="8%">{ appointment.vin }</td>
                <td width="12%">{ appointment.consumer_name }</td>
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
