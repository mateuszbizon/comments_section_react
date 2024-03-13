import { CommentType } from "../../types/comments"
import { usersImages } from "../../constants/usersImages"
import ScoreButton from "../buttons/ScoreButton";
import ReplyButton from "../buttons/ReplyButton";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";
import Replies from "./Replies";
import useCurrentuser from "../../hooks/useCurrentuser";

type CommentProps = {
  comment: CommentType;
}

function Comment({ comment }: CommentProps) {
  const { isCurrentUser } = useCurrentuser(comment.user.username)

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
        ) : <ReplyButton />}
      </div>
      {comment.replies.length > 0 && (
        <Replies replies={comment.replies} />
      )}
    </div>
  )
}

export default Comment