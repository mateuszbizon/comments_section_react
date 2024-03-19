import { useSetRecoilState } from "recoil";
import { CommentType } from "../types/comments"
import { commentsState } from "../state/atoms/commentsState";

function useScoreComment(comment: CommentType) {
    const setUpdateComment = useSetRecoilState(commentsState);
  
    function increaseScoreComment() {
        const updatedComment = { ...comment, score: comment.score + 1 }
        
        setUpdateComment(prev => {
            return prev.map((commentItem) => commentItem.id == updatedComment.id ? updatedComment : commentItem)
        })
    }

    function decreaseScoreComment() {
        if (comment.score == 0) return;

        const updatedComment = { ...comment, score: comment.score - 1 }
        
        setUpdateComment(prev => {
            return prev.map((commentItem) => commentItem.id == updatedComment.id ? updatedComment : commentItem)
        })
    }
  
    return {
        increaseScoreComment,
        decreaseScoreComment,
    }
}

export default useScoreComment