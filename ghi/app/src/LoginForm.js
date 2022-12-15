import React from 'react';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

      }

      async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};

        const loginUrl = `http://localhost:8070/api/users/`;

        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(loginUrl, fetchConfig);
        if (response.ok) {

              const cleared = {
                username: '',
                password: '',
              };
              this.setState(cleared);
              window.location.href='http://localhost:3000/'
            }
      }

      handleChangeUsername(event) {
        const value = event.target.value;
        this.setState({ username: value });
      }

      handleChangePassword(event) {
        const value = event.target.value;
        this.setState({ password: value });
      }

      render() {
        return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1 className='text-center'>Login</h1>
                <form onSubmit={this.handleSubmit} id="create-login-form">
                  <div className="form-floating mb-3">
                    <input value={this.state.username} onChange={this.handleChangeUsername} placeholder="Username" required type="text" name="username" id="username" className="form-control" />
                    <label htmlFor="username">Username</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.password} onChange={this.handleChangePassword} placeholder="Password" required type="text" name="password" id="password" className="form-control" />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className='text-center'>
                  <button className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      }
}

export default LoginForm;
