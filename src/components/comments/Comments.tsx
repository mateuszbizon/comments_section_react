import commentsData from "../../data/data.json";
import Comment from "./Comment";

function Comments() {
  return (
    <div className="comments">
        {commentsData.comments.map((comment) => {
            return (
                <Comment key={comment.id} comment={comment} />
            )
        })}
    </div>
  )
}

export default Comments