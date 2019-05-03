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

    localStorage.setItem("username", this.state.username)
  }

  render() {
    return (
      <>
        <input 
        placeHolder="username" 
        name="username"

        />

        <input 
        placeHolder="password" 
        name="password"
        />

        <button>Login</button>
      </>
    );
  }
}

export default LoginPage;