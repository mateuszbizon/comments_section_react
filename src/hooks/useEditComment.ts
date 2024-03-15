import { useSetRecoilState } from "recoil";
import { CommentType } from "../types/comments";
import { commentsState } from "../state/atoms/commentsState";

function useEditComment(comment: CommentType, editComment: string) {
    const setUpdateComment = useSetRecoilState(commentsState);

    function updateComment() {
        const updatedComment = { ...comment, content: editComment }
        
        setUpdateComment(prev => {
            return prev.map((commentItem) => commentItem.id == updatedComment.id ? updatedComment : commentItem)
          })
    }

    return {
        updateComment,
    };
}

export default useEditComment;
