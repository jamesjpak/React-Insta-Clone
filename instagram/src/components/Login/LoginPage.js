import React from "react";

class Login extends React.component {
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
