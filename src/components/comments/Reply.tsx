import { usersImages } from "../../constants/usersImages";
import { ReplyType } from "../../types/comments";
import ReplyButton from "../buttons/ReplyButton";
import ScoreButton from "../buttons/ScoreButton";

type ReplyProps = {
    reply: ReplyType;
}

function Reply({ reply }: ReplyProps) {
  return (
    <div className="comment">
        <div className="comment__top">
          <img className="comment__top-img" src={usersImages[reply.user.image.png]} alt="" />
          <span className="comment__top-username">{reply.user.username}</span>
          <span className="comment__top-created-at">{reply.createdAt}</span>
        </div>
        <p className="comment__content">{reply.content}</p>
        <ScoreButton comment={reply} />
        <ReplyButton />
      </div>
  )
}

export default Reply