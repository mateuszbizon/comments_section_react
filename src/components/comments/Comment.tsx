import { CommentType } from "../../types/comments"
import { usersImages } from "../../constants/usersImages"
import ScoreButton from "../buttons/ScoreButton";
import ReplyButton from "../buttons/ReplyButton";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";
import Replies from "./Replies";
import useCurrentuser from "../../hooks/useCurrentuser";
import AddCommentForm from "../forms/AddCommentForm";
import { useState } from "react";
import useAddReply from "../../hooks/useAddReply";

type CommentProps = {
  comment: CommentType;
}

function Comment({ comment }: CommentProps) {
  const [isReplyFormActive, setIsReplyFormActive] = useState(false);
  const [newReply, setNewReply] = useState("");
  const { isCurrentUser } = useCurrentuser(comment.user.username);
  const { addReply } = useAddReply(comment, comment.user.username, newReply);

  function handleAddReply() {
    addReply();

    setIsReplyFormActive(false);
  }

  return (
    <div className="comment-container">
      <div className="comment">
        <div className="comment__top">
          <img className="comment__top-img" src={usersImages[comment.user.image.png]} alt="" />
          <span className="comment__top-username">{comment.user.username}</span>
          <span className="comment__top-created-at">{comment.createdAt}</span>
        </div>
        <p className="comment__content">{comment.content}</p>
        <ScoreButton comment={comment} />
        {isCurrentUser ? (
          <>
            <DeleteButton />
            <EditButton />
          </>
        ) : <ReplyButton setIsReplyFormActive={setIsReplyFormActive} />}
      </div>
      {isReplyFormActive && (
        <div className="comment__form-editor">
          <AddCommentForm newComment={newReply} setNewComment={setNewReply} submitFunction={handleAddReply} isReply={true} />
        </div>
      )}
      {comment.replies.length > 0 && (
        <Replies replies={comment.replies} comment={comment} />
      )}
    </div>
  )
}

export default Comment