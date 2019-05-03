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
          { if (this.state.loggedIn === true) {
            return <PostsPage /> 
          } else {
              return <LoginPage />
          }
          }

        </div>
      );
    }
  };

export default withAuthenticate;
