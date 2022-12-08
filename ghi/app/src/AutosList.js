import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function AutosList() {
    const [autos, setAutos] = useState([])
    useEffect(()=> {
        getAutos();

    },[])
    async function getAutos() {
        const response = await fetch('http://localhost:8100/api/automobiles/')
        if (response.ok) {
            const data = await response.json();
            setAutos(data);
        }
    }

    const deleteAuto = async id => {
        console.log(id)
        await fetch(`http://localhost:8100/api/automobiles/${id}/`, {
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
        <h1>Automobiles</h1>
        <NavLink className="nav-link" to="/automobiles/new">
            <button type="button" className="btn btn-primary">Add automobile</button>
        </NavLink>
        <table className="table table-striped">
        <thead>
            <tr>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>VIN</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {autos.autos?.map(auto => {
            return (
                <tr key={auto.id}>
                <td width="20%">{ auto.model.name }</td>
                <td width="20%">{ auto.year }</td>
                <td width="20%">{ auto.color }</td>
                <td width="25%">{ auto.vin }</td>
                <td><button onClick={() => deleteAuto(auto.id)} type="button" className="btn btn-primary">Delete</button></td>
                </tr>
            );
            })}
        </tbody>
        </table>
      </>
  );
}
export default AutosList;
