import { useState } from "react";
import { usersImages } from "../../constants/usersImages";
import useCurrentuser from "../../hooks/useCurrentuser";
import { CommentType, ReplyType } from "../../types/comments";
import DeleteButton from "../buttons/DeleteButton";
import EditButton from "../buttons/EditButton";
import ReplyButton from "../buttons/ReplyButton";
import ScoreButton from "../buttons/ScoreButton";
import AddCommentForm from "../forms/AddCommentForm";
import useAddReply from "../../hooks/useAddReply";

type ReplyProps = {
    reply: ReplyType;
    comment: CommentType;
}

function Reply({ reply, comment }: ReplyProps) {
  const [isReplyFormActive, setIsReplyFormActive] = useState(false);
  const [newReply, setNewReply] = useState("");
  const { isCurrentUser } = useCurrentuser(reply.user.username)
  const { addReply } = useAddReply(comment, reply.user.username, newReply);

  function handleAddReply() {
    addReply();
    setIsReplyFormActive(false);
  }

  return (
    <>
      <div className="comment">
          <div className="comment__top">
            <img className="comment__top-img" src={usersImages[reply.user.image.png]} alt="" />
            <span className="comment__top-username">{reply.user.username}</span>
            <span className="comment__top-created-at">{reply.createdAt}</span>
          </div>
          <p className="comment__content">{reply.content}</p>
          <ScoreButton comment={reply} />
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
    </>
  )
}

export default Reply