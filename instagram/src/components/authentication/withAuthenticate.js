import React from "react";

const withAuthenticate = PostsPage => LoginPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (localStorage.getItem("username")) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
            loggedIn: false
        });
      }
    }

    render() {
      return (
        <div>
          {this.state.loggedIn === true ? <PostsPage/> : <LoginPage/>}
        </div>
      );
    }
  };

export default withAuthenticate;
