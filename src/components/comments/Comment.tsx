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
import { useSetRecoilState } from "recoil";
import { commentsState } from "../../state/atoms/commentsState";
import usersData from "../../data/data.json";

type CommentProps = {
  comment: CommentType;
}

function Comment({ comment }: CommentProps) {
  const [isReplyFormActive, setIsReplyFormActive] = useState(false);
  const [newReply, setNewReply] = useState("");
  const setReply = useSetRecoilState(commentsState);
  const { isCurrentUser } = useCurrentuser(comment.user.username);

  function addReply() {
    setReply(prev => {
      return prev.map(commentItem => {
        if (commentItem.id === comment.id) {
          return {
            ...commentItem,
            replies: [...commentItem.replies, {
              id: Math.floor(Math.random() * 10000), 
              content: newReply, 
              createdAt: "today", 
              score: 0, 
              replyingTo: comment.user.username, 
              user: usersData.currentUser,
            }]
          };
        }

        return commentItem;
      });
    })

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
          <AddCommentForm newComment={newReply} setNewComment={setNewReply} submitFunction={addReply} isReply={true} />
        </div>
      )}
      {comment.replies.length > 0 && (
        <Replies replies={comment.replies} />
      )}
    </div>
  )
}

export default Comment