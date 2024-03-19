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
import { btnReplyText, textareaReplyText, btnUpdateText, textareaUpdateText } from "../../constants/formsText";
import EditCommentForm from "../forms/EditCommentForm";
import useEditComment from "../../hooks/useEditComment";
import useScoreComment from "../../hooks/useScoreComment";

type CommentProps = {
  comment: CommentType;
}

function Comment({ comment }: CommentProps) {
  const [isReplyFormActive, setIsReplyFormActive] = useState(false);
  const [newReply, setNewReply] = useState("");
  const [editComment, setEditComment] = useState<string>(comment.content)
  const [isEditing, setIsEditing] = useState(false);
  const { isCurrentUser } = useCurrentuser(comment.user.username);
  const { addReply } = useAddReply(comment, comment.user.username, newReply);
  const { updateComment } = useEditComment(comment, editComment);
  const { increaseScoreComment, decreaseScoreComment } = useScoreComment(comment);

  function handleAddReply() {
    addReply();

    setIsReplyFormActive(false);
  }

  function handleUpdateComment() {
    updateComment();

    setIsEditing(false)
  }

  return (
    <div className="comment-container">
      <div className="comment">
        <div className="comment__top">
          <img className="comment__top-img" src={usersImages[comment.user.image.png]} alt="" />
          <span className="comment__top-username">{comment.user.username}</span>
          <span className="comment__top-created-at">{comment.createdAt}</span>
        </div>
        
        {!isEditing ? <p className="comment__content">{comment.content}</p> : <EditCommentForm editComment={editComment} setEditComment={setEditComment} submitFunction={handleUpdateComment} btnText={btnUpdateText} textareaText={textareaUpdateText} />}

        <ScoreButton comment={comment} increaseFunction={increaseScoreComment} decreaseFunction={decreaseScoreComment} />

        <div className="comment__btns-row">
          {isCurrentUser ? (
            <>
              <DeleteButton />
              <EditButton showEditForm={setIsEditing} />
            </>
          ) : <ReplyButton setIsReplyFormActive={setIsReplyFormActive} />}
        </div>
      </div>

      {isReplyFormActive && (
        <div className="comment__form-editor">
          <AddCommentForm newComment={newReply} setNewComment={setNewReply} submitFunction={handleAddReply} btnText={btnReplyText} textareaText={textareaReplyText}  />
        </div>
      )}
      
      {comment.replies.length > 0 && (
        <Replies replies={comment.replies} comment={comment} />
      )}
    </div>
  )
}

export default Comment