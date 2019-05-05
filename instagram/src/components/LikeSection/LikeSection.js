import React from "react";
import "./LikeSection.css";

class LikeSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

addUpCounter = event => {
  this.setState((prevState, props) => {
    return {
      counter: prevState.counter + 1
    }
  })
}

  render() {
  return (
    <>
      <div className="button-layout">

        <div>
        <button className="like-dm-buttons" onClick={this.addUpCounter}> <i className="far fa-heart" /> </button>
        </div>

        <div >
          <button className="like-dm-buttons"> <i className="far fa-comment" /> </button>
        </div>

      </div>

      <div className='likes-counter'>
        
      <p>{this.state.counter} likes</p>

      </div>
    </>
  );
}
}

export default LikeSection;
