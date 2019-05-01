import React from "react";
import Comment from "./Comment";
import "./CommentSection.css";
import AddComment from "../AddComment/AddComment";

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

{
  /*
class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  render() {
    return (
    <>
      <div className="comment-section-style">
        <Comment comments={this.state.comments} />
      </div>

      <div>
        <AddComment />
      </div>
    </>
    )
    }
}
*/
}

export default CommentSection;
