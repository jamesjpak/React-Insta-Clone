import React from "react";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  inputHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  loginHandler = event => {
    event.preventDefault();

    localStorage.setItem("username", JSON.stringify(this.state.username))
    // localStorage.setItem("loggedIn", "true")
    window.location.reload();
  }

  render() {
    return (
      <>
        <input 
        placeholder="username" 
        name="username"
        value={this.state.username}
        onChange={this.inputHandler}
        />

        <input 
        placeholder="password" 
        name="password"
        value={this.state.password}
        onChange={this.inputHandler}
        />

        <button onClick={this.loginHandler}> Login </button>
      </>
    );
  }
}

export default LoginPage;