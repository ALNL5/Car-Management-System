import React from 'react';


class CreateTechnicianForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          technician_name: '',
          employee_number: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTechnicianName = this.handleChangeTechnicianName.bind(this);
        this.handleChangeEmployeeNumber = this.handleChangeEmployeeNumber.bind(this);

      }

      async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};

        const technicianUrl = `http://localhost:8080/api/technicians/`;

        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok) {
          this.setState({
            technician_name: '',
            employee_number: '',
          });

        }
      }

      handleChangeTechnicianName(event) {
        const value = event.target.value;
        this.setState({ technician_name: value });
      }

      handleChangeEmployeeNumber(event) {
        const value = event.target.value;
        this.setState({ employee_number: value });
      }

      render() {
        return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Add a new technician</h1>
                <form onSubmit={this.handleSubmit} id="create-technician-form">
                  <div className="form-floating mb-3">
                    <input value={this.state.technician_name} onChange={this.handleChangeTechnicianName} placeholder="Technician name" required type="text" name="technician_name" id="technician_name" className="form-control" />
                    <label htmlFor="technician_name">Technician name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.employee_number} onChange={this.handleChangeEmployeeNumber} placeholder="Employee number" required type="employee_number" name="employee_number" id="model_nam" className="form-control" />
                    <label htmlFor="employee_number">Employee number</label>
                  </div>
                  <button className="btn btn-primary">Create</button>
                </form>
              </div>
            </div>
          </div>
        );
      }
}

export default CreateTechnicianForm;
