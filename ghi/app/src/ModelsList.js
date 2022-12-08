import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function ModelsList() {
    const [models, setModels] = useState([])
    useEffect(()=> {
        getModels();

    },[])
    async function getModels() {
        const response = await fetch('http://localhost:8100/api/models/')
        if (response.ok) {
            const data = await response.json();
            setModels(data);
        }
    }

    const deleteModel = async id => {
        await fetch(`http://localhost:8100/api/models/${id}/`, {
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
        <h1>Vehicle Models</h1>
        <NavLink className="nav-link" to="/models/new">
            <button type="button" className="btn btn-primary">Add model</button>
        </NavLink>
        <table className="table table-striped">
        <thead>
            <tr>
            <th>Name</th>
            <th>Picture</th>
            <th>Manufacturer</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {models.models?.map(model => {
            return (
                <tr key={model.id}>
                <td width="25%">{ model.name }</td>
                <td width="30%"><img src={ model.picture_url } alt='' className="img-rounded" width = "50%" height="50%" /></td>
                <td width="30%">{ model.manufacturer.name }</td>
                <td><button onClick={() => deleteModel(model.id)} type="button" className="btn btn-primary">Delete</button></td>
                </tr>
            );
            })}
        </tbody>
        </table>
      </>
  );
}
export default ModelsList;
