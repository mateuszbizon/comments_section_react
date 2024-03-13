import { useState } from "react";
import { usersImages } from "../../constants/usersImages";
import useCurrentuser from "../../hooks/useCurrentuser";
import { CommentType, ReplyType } from "../../types/comments";
import DeleteButton from "../buttons/DeleteButton";
import EditButton from "../buttons/EditButton";
import ReplyButton from "../buttons/ReplyButton";
import ScoreButton from "../buttons/ScoreButton";
import AddCommentForm from "../forms/AddCommentForm";
import { useSetRecoilState } from "recoil";
import { commentsState } from "../../state/atoms/commentsState";
import usersData from "../../data/data.json";

type ReplyProps = {
    reply: ReplyType;
    comment: CommentType;
}

function Reply({ reply, comment }: ReplyProps) {
  const [isReplyFormActive, setIsReplyFormActive] = useState(false);
  const [newReply, setNewReply] = useState("");
  const setReply = useSetRecoilState(commentsState);
  const { isCurrentUser } = useCurrentuser(reply.user.username)

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
              replyingTo: reply.user.username, 
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
          <AddCommentForm newComment={newReply} setNewComment={setNewReply} submitFunction={addReply} isReply={true} />
        </div>
      )}
    </>
  )
}

export default Reply