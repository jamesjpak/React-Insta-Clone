import React from "react";
import Comment from "./Comment";
import "./CommentSection.css";
import AddComment from "../AddComment/AddComment";


{
  /*
function CommentSection(props) {
  return (
    <>
      <div className="comment-section-style">
        <Comment comments={props.data.comments} />
      </div>

      <div>
        <AddComment />
      </div>
    </>
  );
}
*/
}

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.data.comments
    };
  }

  render() {
    return (
    <>


      <div className="comment-section-style">
      {this.state.comments.map(element => <Comment comment={element} />)}
      </div>

      <div>
        <AddComment />
      </div>
    </>
    )
    }
}

export default CommentSection;
