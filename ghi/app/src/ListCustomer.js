import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function ListCustomer() {
    const [customers, setCustomer] = useState([])
    useEffect(()=> {
        getCustomers();
    },[])
    async function getCustomers() {
        const response = await fetch('http://localhost:8090/api/customers/')
        if (response.ok) {
            const data = await response.json();
            setCustomer(data);

        }
    }

    const deleteCustomer = async id => {
        await fetch(`http://localhost:8090/api/customers/${id}/`, {
          method: "delete",
          headers: {
            "Content-Type": "application/json"
        },
        }).then(() => {
            window.location.reload();
      });
    }

  return (
      <div className='container'>
        <h1>Customers</h1>
        <NavLink className="nav-link" to="/sales/customers/new/">
            <button type="button" className="btn btn-primary">Add Customer</button>
        </NavLink>
        <table className="table table-striped">
        <thead>
            <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {customers?.map(customer => {
            return (
                <tr key={customer.id}>
                <td width="33%">{ customer.name }</td>
                <td width="33%">{ customer.address }</td>
                <td width="25%">{ customer.phone_number }</td>
                <td><button onClick={() => deleteCustomer(customer.id)} type="button" className="btn btn-primary">Delete</button></td>
                </tr>
            );
            })}
        </tbody>
        </table>
      </div>
  );
}
export default ListCustomer;
