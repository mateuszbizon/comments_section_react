import { CommentType, ReplyType } from "../../types/comments"
import Reply from "./Reply";

type RepliesProps = {
    replies: ReplyType[];
    comment: CommentType;
}

function Replies({ replies, comment }: RepliesProps) {
  return (
    <div className="replies">
        <div className="replies__line"></div>
        <div className="replies__comments">
            {replies.map((reply) => {
                return (
                    <Reply key={reply.id} reply={reply} comment={comment} />
                )
            })}
        </div>
    </div>
  )
}

export default Replies