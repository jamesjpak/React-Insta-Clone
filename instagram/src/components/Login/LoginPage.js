import React from "react";
import "./LoginPage.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  inputHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  loginHandler = event => {
    event.preventDefault();

    localStorage.setItem("username", JSON.stringify(this.state.username));
    // localStorage.setItem("loggedIn", "true")
    window.location.reload();
  };

  render() {
    return (
      <div className="inputs-container">
        <input
          className="input-style"
          placeholder="username"
          name="username"
          value={this.state.username}
          onChange={this.inputHandler}
        />

        <input
          className="input-style"
          placeholder="password"
          name="password"
          value={this.state.password}
          onChange={this.inputHandler}
        />

        <button className="login-button" onClick={this.loginHandler}> Login </button>
      </div>
    );
  }
}

export default LoginPage;
