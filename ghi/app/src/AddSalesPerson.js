import React from 'react';


class AddSalesPerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            employee_id: '',

        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleIDnumberChange = this.handleIDnumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };

        const salesPersonUrl = 'http://localhost:8090/api/salespersons/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const response = await fetch(salesPersonUrl, fetchConfig);

        if (response.ok) {
            const newSalesPerson = await response.json();
            const cleared = {
                name: '',
                employee_id: '',
            }
            this.setState(cleared);
            const preElement = document.getElementById("pre-form");
            preElement.classList.add("d-none")

            const postElement = document.getElementById("post-form");
            postElement.classList.remove("d-none")
        }
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value })
    }

    handleIDnumberChange(event) {
        const value = event.target.value;
        this.setState({ employee_id: value })
    }

    handleClick(event) {
        const cleared = {
            name: '',
            employee_id: '',
        }
        this.setState(cleared)
        const preElement = document.getElementById("pre-form");
        preElement.classList.remove("d-none")

        const postElement = document.getElementById("post-form");
        postElement.classList.add("d-none")
    }

    render() {
        return (
            <>
                <div className='container' id='pre-form'>
                    <h1>Create a Sales Person</h1>
                    <form onSubmit={this.handleSubmit} id='create-sales-person-form'>
                        <div className='form-floating mb-3'>
                            <input onChange={this.handleNameChange} value={this.state.name} type='text' className='form-control' placeholder='name' required name='name' />
                            <label htmlFor='name'>Name</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input onChange={this.handleIDnumberChange} value={this.state.employee_id} type='text' className='form-control' placeholder='ID number' required name='employee_id' />
                            <label htmlFor='id'>ID Number</label>
                        </div>
                        <button className="btn btn-primary btn-lg">Create</button>
                    </form>
                </div>
                <div className='col text-center d-none' id='post-form' >
                    <button onClick={this.handleClick} className="btn btn-primary btn-lg" id='post-form'>Add Another?</button>
                </div>

            </>
        )
    }
}

export default AddSalesPerson;
