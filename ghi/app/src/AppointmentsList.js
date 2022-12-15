import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function AppointmentsList() {
    const [appointments, setAppointment] = useState([])
    const [unfinishedAppointments, setUnfinishedAppointment] = useState([])
    useEffect(()=> {
        getAppointments();
    },[])
    async function getAppointments() {
        const response = await fetch('http://localhost:8080/api/appointments/')
        if (response.ok) {
            const data = await response.json();
            const unfinishedAppointments = data.appointments.filter(
                appointment => { return appointment.is_finished === false }
                );
            setAppointment(data);
            setUnfinishedAppointment(unfinishedAppointments)
        }
    }

    const deleteAppointment = async id => {
        await fetch(`http://localhost:8080/api/appointments/${id}/`, {
          method: "delete",
          headers: {
            "Content-Type": "application/json"
        },
        }).then(() => {
            window.location.reload();
      });
    }

    const updateAppointment = async id => {
        await fetch(`http://localhost:8080/api/appointments/${id}/`, {
          method: "put",
          body: JSON.stringify({
            is_finished: true,
          }),
          headers: {
            "Content-Type": "application/json"
        },
        }).then(() => {
            window.location.reload();
      });
    }

  return (
    <>
        <h1>Service appointments</h1>
        <NavLink className="nav-link" to="/appointments/new">
          <button type="button" className="btn btn-primary">Add appointment</button>
        </NavLink>
        <table className="table table-striped">
          <thead>
              <tr>
              <th>No.</th>
              <th>Customer name</th>
              <th>VIP</th>
              <th>VIN</th>
              <th>Date</th>
              <th>Time</th>
              <th>Reason</th>
              <th>Technician</th>
              <th>Cancellation</th>
              <th>Completion</th>
              </tr>
          </thead>
          <tbody>
              {unfinishedAppointments?.map(appointment => {
              return (
                  <tr key={appointment.id}>
                  <td width="8%">{ appointment.id }</td>
                  <td width="8%">{ appointment.consumer_name }</td>
                  {appointment.vip && <td width="6%">Y</td>}
                  {!appointment.vip && <td width="6%">N</td>}
                  <td width="12%">{ appointment.vin }</td>
                  <td width="16%">{ appointment.date }</td>
                  <td width="12%">{ appointment.time }</td>
                  <td width="12%">{ appointment.reason }</td>
                  <td width="12%">{ appointment.technician.technician_name }</td>
                  <td width="12%"><button onClick={() => deleteAppointment(appointment.id)} type="button" className="btn btn-primary">Cancel</button></td>
                  <td width="12%"><button onClick={() => updateAppointment(appointment.id)} type="button" className="btn btn-primary">Complete</button></td>
                  </tr>
              );
              })}
          </tbody>
        </table>
    </>
  );
}

export default AppointmentsList;
