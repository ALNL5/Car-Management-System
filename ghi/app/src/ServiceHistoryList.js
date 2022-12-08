import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function ServiceHistoryList() {
    const [appointments, setAppointment] = useState([])
    const [finishedAppointments, setFinishedAppointments] = useState([])
    useEffect(()=> {
        getAppointments();
    },[])
    async function getAppointments() {
        const response = await fetch('http://localhost:8080/api/appointments/')
        if (response.ok) {
            const data = await response.json();
            const finishedAppointments = data.appointments.filter(
                appointment => appointment.is_finished === true
              );
            setAppointment(data);
            setFinishedAppointments(finishedAppointments);
        }
    }


  return (
    <>
        <div>
        <input type="search" id="search" name="search" placeholder="Search by VIN"/>
        {/* <button onClick={() => searchHistory("search")} htmlFor="search" type="button" className="btn btn-primary">Search</button> */}
        </div>
        <h1>Service appointments</h1>
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
            {finishedAppointments?.map(appointment => {
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
