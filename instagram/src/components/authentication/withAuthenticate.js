import React from "react";

const withAuthenticate = (App) =>
  class extends React.Component {
  
    render() {
      return (
        <div>
          <App />
        </div>
      );
    }
  };


  export default withAuthenticate;