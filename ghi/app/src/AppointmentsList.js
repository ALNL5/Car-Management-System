import React, { useEffect, useState } from 'react';


function AppointmentsList() {
    const [appointments, setAppointment] = useState([])
    useEffect(()=> {
        getAppointments();
    },[])
    async function getAppointments() {
        const response = await fetch('http://localhost:8080/api/appointments/')
        if (response.ok) {
            const data = await response.json();
            setAppointment(data);

        }
    }

    

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Customer name</th>
          <th>Vin #</th>
          <th>Date</th>
          <th>Time</th>
          <th>Reason</th>
          <th>VIP</th>
          <th>Cancellation</th>
          <th>Completion</th>
        </tr>
      </thead>
      <tbody>
        {appointments.appointments?.map(appointment => {
          return (
            <tr key={appointment.id}>
              <td width="12%">{ appointment.consumer_name }</td>
              <td width="12%">{ appointment.vin }</td>
              <td width="12%">{ appointment.date }</td>
              <td width="12%">{ appointment.time }</td>
              <td width="12%">{ appointment.reason }</td>
              <td width="12%">TBD</td>
              <td><button type="button" className="btn btn-primary">Cancel</button></td>
              <td><button type="button" className="btn btn-primary">Finished</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default AppointmentsList;
