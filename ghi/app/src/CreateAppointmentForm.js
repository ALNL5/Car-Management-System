import React from 'react';


class CreateAppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          consumer_name: '',
          vin: '',
          date: '',
          time: '',
          reason: '',
          technician: '',
          technicians: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleConsumerName = this.handleConsumerName.bind(this);
        this.handleChangeVin = this.handleChangeVin.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleChangeReason = this.handleChangeReason.bind(this);
        this.handleChangeTechnician = this.handleChangeTechnician.bind(this);
      }

      async componentDidMount() {
        const url = 'http://localhost:8100/api/technicians/';

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          this.setState({ techhicians: data.technicians });
        }
      }

      async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.technicians;

        const appointmentsUrl = `http://localhost:8080/api/appointments/`;

        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(appointmentsUrl, fetchConfig);
        if (response.ok) {
          this.setState({
            consumer_name: '',
            vin: '',
            date: '',
            time: '',
            reason: '',
            technician: '',
          });

        }
      }

      handleConsumerName(event) {
        const value = event.target.value;
        this.setState({ consumer_name: value });
      }

      handleChangeVin(event) {
        const value = event.target.value;
        this.setState({ vin: value });
      }

      handleChangeDate(event) {
        const value = event.target.value;
        this.setState({ color: value });
      }

      handleChangeTime(event) {
        const value = event.target.value;
        this.setState({ time: value });
      }

      handleChangeReason(event) {
        const value = event.target.value;
        this.setState({ reason: value });
      }

      handleChangeTechnician(event) {
        const value = event.target.value;
        this.setState({ technician: value });
      }

      render() {
        return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Create a new shoes</h1>
                <form onSubmit={this.handleSubmit} id="create-conference-form">
                  <div className="form-floating mb-3">
                    <input value={this.state.consumer_name} onChange={this.handleConsumerName} placeholder="Costumer name" required type="text" name="consumer_name" id="consumer_name" className="form-control" />
                    <label htmlFor="consumer_name">Costumer name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.vin} onChange={this.handleChangeVin} placeholder="Vin number" required type="text" name="vin" id="vin" className="form-control" />
                    <label htmlFor="vin">Vin number</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.date} onChange={this.handleChangeDate} placeholder="Date" required type="date" name="date" id="date" className="form-control" />
                    <label htmlFor="date">Date</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.time} onChange={this.handleChangeTime} placeholder="Time" required type="time" name="time" id="time" className="form-control" />
                    <label htmlFor="time">Time</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.reason} onChange={this.handleChangeReason} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" />
                    <label htmlFor="reason">Reason</label>
                  </div>
                  <div className="mb-3">
                    <select value={this.state.technician} onChange={this.handleChangeTechnician} required name="technician" id="technician" className="form-select">
                      <option value="">Choose a technician</option>
                      {this.state.technicians.map(technician => {
                        return (
                          <option key={technician.id} value={technician.id}>{technician.technician_name}</option>
                        )
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
