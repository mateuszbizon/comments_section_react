import { ReplyType } from "../../types/comments"
import Reply from "./Reply";

type RepliesProps = {
    replies: ReplyType[];
}

function Replies({ replies }: RepliesProps) {
  return (
    <div className="replies">
        <div className="replies__line"></div>
        <div className="replies__comments">
            {replies.map((reply) => {
                return (
                    <Reply reply={reply} />
                )
            })}
        </div>
    </div>
  )
}

export default Replies