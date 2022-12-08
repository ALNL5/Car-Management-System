import React from 'react';


class CreateModelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          picture_url: '',
          manufacturer_id: '',
          manufacturers: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePictureUrl = this.handleChangePictureUrl.bind(this);
        this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
      }

      async componentDidMount() {
        const url = `http://localhost:8100/api/manufacturers/`;

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          this.setState({manufacturers: data.manufacturers});
        }
      }

      async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.manufacturers

        const modelUrl = `http://localhost:8100/api/models/`;

        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(modelUrl, fetchConfig);
        if (response.ok) {

              const cleared = {
                name: '',
                picture_url: '',
                manufacturer_id: '',
              };
              this.setState(cleared);
              window.location.href='http://localhost:3000/models/'
            }
      }

      handleChangeName(event) {
        const value = event.target.value;
        this.setState({ name: value });
      }

      handleChangePictureUrl(event) {
        const value = event.target.value;
        this.setState({ picture_url: value });
      }

      handleChangeManufacturer(event) {
        const value = event.target.value;
        this.setState({ manufacturer_id: value });
      }


      render() {
        return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Add vehicle model</h1>
                <form onSubmit={this.handleSubmit} id="create-model-form">
                <div className="form-floating mb-3">
                    <select value={this.state.manufacturer_id} onChange={this.handleChangeManufacturer} required name="manufacturer_id" id="manufacturer_id" className="form-select">
                      <option value="">Choose a manufacturer</option>
                      {this.state.manufacturers.map(manufacturer => {
                        return (
                          <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                        )
                      })}
                    </select>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.name} onChange={this.handleChangeName} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                    <label htmlFor="name">Model name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.picture_url} onChange={this.handleChangePictureUrl} placeholder="Picture URL" required type="text" name="picture_url" id="picture_url" className="form-control" />
                    <label htmlFor="picture_url">Picture URL</label>
                  </div>
                  <button className="btn btn-primary">Create</button>
                </form>
              </div>
            </div>
          </div>
        );
      }
}

export default CreateModelForm;
