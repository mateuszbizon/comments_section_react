import { TComment } from "../../types/comments"
import { usersImages } from "../../constants/usersImages"
import ScoreButton from "../buttons/ScoreButton";

type CommentProps = {
  comment: TComment;
}

function Comment({ comment }: CommentProps) {
  return (
    <div className="comment">
      <div className="comment__top">
        <img className="comment__top-img" src={usersImages[comment.user.image.png]} alt="" />
        <span className="comment__top-username">{comment.user.username}</span>
        <span className="comment__top-created-at">{comment.createdAt}</span>
      </div>
      <p className="comment__content">{comment.content}</p>
      <ScoreButton comment={comment} />
    </div>
  )
}

export default Comment