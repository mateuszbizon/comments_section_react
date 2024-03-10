import { TComment } from "../../types/comments"

type CommentProps = {
  comment: TComment;
}

function Comment({ comment }: CommentProps) {
  return (
    <div className="comment">Comment</div>
  )
}

export default Comment