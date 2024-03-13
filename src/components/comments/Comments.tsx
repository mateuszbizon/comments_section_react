import { useRecoilValue } from "recoil";
import { commentsState } from "../../state/atoms/commentsState";
import Comment from "./Comment";

function Comments() {
  const comments = useRecoilValue(commentsState)

  return (
    <div className="comments">
        {comments.map((comment) => {
            return (
                <Comment key={comment.id} comment={comment} />
            )
        })}
    </div>
  )
}

export default Comments