import { useState } from "react"
import AddCommentForm from "../forms/AddCommentForm"
import { useSetRecoilState } from "recoil";
import { commentsState } from "../../state/atoms/commentsState";
import usersData from "../../data/data.json";
import { btnAddText, textareaAddText } from "../../constants/formsText";

function AddComment() {
  const [newComment, setNewComment] = useState("");
  const setComment = useSetRecoilState(commentsState)

  function addComment() {
    setComment(prev => {
      return [...prev, {
        id: Math.floor(Math.random() * 10000),
        content: newComment,
        user: usersData.currentUser,
        createdAt: "today",
        score: 0,
        replies: []
      }]
    })
  }

  return (
    <div className="add-comment">
      <AddCommentForm newComment={newComment} setNewComment={setNewComment} submitFunction={addComment} btnText={btnAddText} textareaText={textareaAddText} />
    </div>
  )
}

export default AddComment