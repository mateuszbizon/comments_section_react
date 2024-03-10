import AddComment from "../components/comments/AddComment"
import Comments from "../components/comments/Comments"

function CommentsSection() {
  return (
    <div className="comments-section">
        <Comments />
        <AddComment />
    </div>
  )
}

export default CommentsSection