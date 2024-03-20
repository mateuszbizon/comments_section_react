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
import { btnReplyText, textareaReplyText, btnUpdateText, textareaUpdateText } from "../../constants/formsText";
import EditCommentForm from "../forms/EditCommentForm";
import useEditReply from "../../hooks/useEditReply";
import useScoreReply from "../../hooks/useScoreReply";
import DeleteModal from "../modals/DeleteModal";

type ReplyProps = {
    reply: ReplyType;
    comment: CommentType;
}

function Reply({ reply, comment }: ReplyProps) {
  const [isReplyFormActive, setIsReplyFormActive] = useState(false);
  const [newReply, setNewReply] = useState("");
  const [editReply, setEditReply] = useState<string>(reply.content);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { isCurrentUser } = useCurrentuser(reply.user.username)
  const { addReply } = useAddReply(comment, reply.user.username, newReply);
  const { updateReply } = useEditReply(comment, reply, editReply)
  const { increaseScoreReply, decreaseScoreReply } = useScoreReply(comment, reply);

  function handleAddReply() {
    addReply();
    setIsReplyFormActive(false);
  }

  function handleUpdateReply() {
    updateReply();

    setIsEditing(false);
  }

  return (
    <>
      <div className="comment">
        <div className="comment__top">
          <img className="comment__top-img" src={usersImages[reply.user.image.png]} alt="" />
          <span className="comment__top-username">{reply.user.username}</span>
          <span className="comment__top-created-at">{reply.createdAt}</span>
        </div>

        {!isEditing ? (
          <p className="comment__content"><span className="comment__content-username">@{reply.replyingTo}</span>{reply.content}</p>
        ) : (
          <EditCommentForm editComment={editReply} setEditComment={setEditReply} submitFunction={handleUpdateReply} btnText={btnUpdateText} textareaText={textareaUpdateText} />
        )}

        <ScoreButton comment={reply} increaseFunction={increaseScoreReply} decreaseFunction={decreaseScoreReply} />
        
        <div className="comment__btns-row">
          {isCurrentUser ? (
            <>
              <DeleteButton setIsDeleteModalOpen={setIsDeleteModalOpen} />
              <EditButton showEditForm={setIsEditing} />
            </>
          ) : <ReplyButton setIsReplyFormActive={setIsReplyFormActive} />}
        </div>
      </div>

      {isReplyFormActive && (
        <div className="comment__form-editor">
          <AddCommentForm newComment={newReply} setNewComment={setNewReply} submitFunction={handleAddReply} btnText={btnReplyText} textareaText={textareaReplyText} />
        </div>
      )}

      <DeleteModal isDeleteModalOpen={isDeleteModalOpen} setIsDeleteModalOpen={setIsDeleteModalOpen} />
    </>
  )
}

export default Reply