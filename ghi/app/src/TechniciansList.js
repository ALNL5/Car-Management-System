import React from 'react';

function TechniciansList(props) {
//   const deleteTechnician = async (id) => {
//     fetch(`http://localhost:8080/api/technicians/${id}/`, {
//       method: 'delete',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }).then(() => {
//       window.location.reload();
//   })
//   }


  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Employee #</th>
          <th>id</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {props.technicians.map(technician => {
          return (
            <tr key={technician.id}>
              <td width="25%">{ technician.technician_name }</td>
              <td width="25%">{ technician.employee_number }</td>
              <td width="25%">{ technician.id }</td>
              {/* <td><button onClick={() => deleteShoe(technician.id)} type="button" className="btn btn-primary">Delete</button></td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default TechniciansList;
