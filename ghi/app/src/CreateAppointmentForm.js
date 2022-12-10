import React from 'react';


class CreateAppointmentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          vin: '',
          consumer_name:'',
          date: '',
          time:'',
          reason:'',
          technician_id:'',
          technicians: []
        };
        this.handleVinChange = this.handleVinChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleReasonChange = this.handleReasonChange.bind(this);
        this.handleTechnicianChange = this.handleTechnicianChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


      async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.technicians;

        const AppointmentUrl = 'http://localhost:8080/api/appointments/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(AppointmentUrl, fetchConfig);
        if (response.ok) {

          const cleared = {
            vin: '',
            consumer_name:'',
            date: '',
            time:'',
            reason:'',
            technician_id:'',
          };
          this.setState(cleared);
          window.location.href='http://localhost:3000/appointments'
        }
      }

      handleVinChange(event) {
        const value = event.target.value;
        this.setState({vin: value})
      }

      handleNameChange(event) {
        const value = event.target.value;
        this.setState({consumer_name: value})
      }

      handleDateChange(event) {
        const value = event.target.value;
        this.setState({date: value})
      }

      handleTimeChange(event) {
        const value = event.target.value;
        this.setState({time: value})
      }

      handleReasonChange(event) {
        const value = event.target.value;
        this.setState({reason: value})
      }

      handleTechnicianChange(event) {
        const value = event.target.value;
        this.setState({technician_id: value})
      }

      async componentDidMount() {
        const url = `http://localhost:8080/api/technicians/`;

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          this.setState({technicians: data.technicians});
        }
      }

      render() {
        return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Add an appointment</h1>
                <form onSubmit={this.handleSubmit} id="create-appointment-form">
                  <div className="form-floating mb-3">
                    <input value={this.state.consumer_name} onChange={this.handleNameChange} placeholder="consumer_name" required type="text" name="consumer_name" id="consumer_name" className="form-control" />
                    <label htmlFor="consumer_name">Customer Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.vin} onChange={this.handleVinChange} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
                    <label htmlFor="vin">VIN</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.date} onChange={this.handleDateChange} placeholder="date" required type="date" name="date" id="date" className="form-control" />
                    <label htmlFor="date">Date</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.time} onChange={this.handleTimeChange} placeholder="time" required type="time" name="time" id="time" className="form-control" />
                    <label htmlFor="time">Time</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.reason} onChange={this.handleReasonChange} placeholder="reason" required type="text" name="reason" id="time" className="form-control" />
                    <label htmlFor="reason">Reason</label>
                  </div>
                  <div className="mb-3">
                    <select value={this.state.technician_id} onChange={this.handleTechnicianChange} required name="technician_id" id="technician_id" className="form-select">
                      <option value="">Choose a technician</option>
                      {this.state.technicians.map(technician => {
                        return (
                          <option key={technician.id} value={technician.id}>
                            {technician.technician_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <button className="btn btn-primary">Create</button>
                </form>
              </div>
            </div>
          </div>
        );
      }
    }


export default CreateAppointmentForm;
