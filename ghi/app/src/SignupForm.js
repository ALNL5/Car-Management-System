import React from 'react';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          password_confirmation: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePasswordConfirmation = this.handleChangePasswordConfirmation.bind(this);
      }

      async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};

        const signupUrl = `http://localhost:8070/api/users/`;

        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(signupUrl, fetchConfig);
        if (response.ok) {

              const cleared = {
                username: '',
                password: '',
                password_confirmation: '',
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

      handleChangePasswordConfirmation(event) {
        const value = event.target.value;
        this.setState({ password_confirmation: value });
      }

      render() {
        return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1 className='text-center'>Signup</h1>
                <form onSubmit={this.handleSubmit} id="create-login-form">
                  <div className="form-floating mb-3">
                    <input value={this.state.username} onChange={this.handleChangeUsername} placeholder="Username" required type="text" name="username" id="username" className="form-control" />
                    <label htmlFor="username">Username</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.password} onChange={this.handleChangePassword} placeholder="Password" required type="text" name="password" id="password" className="form-control" />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.password_confirmation} onChange={this.handleChangePasswordConfirmation} placeholder="Password confirmation" required type="text" name="password_confirmation" id="password_confirmation" className="form-control" />
                    <label htmlFor="password_confirmation">Password confirmation</label>
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

export default SignupForm;
