import { useSetRecoilState } from "recoil"
import { commentsState } from "../state/atoms/commentsState"
import { CommentType, ReplyType } from "../types/comments"

function useEditReply(comment: CommentType, reply: ReplyType, editReply: string) {
    const setUpdateReply = useSetRecoilState(commentsState);

    function updateReply() {
        const updatedReply = { ...reply, content: editReply }
        
        setUpdateReply(prev => {
            return prev.map(commentItem => {
              if (commentItem.id == comment.id) {
                return {
                  ...comment, replies: comment.replies.map(replyItem => {
                    if (replyItem.id == reply.id) {
                      return updatedReply
                    }
      
                    return replyItem;
                  })
                }
              }
      
              return commentItem;
            })
          })
    }
  
    return {
        updateReply,
  }
}

export default useEditReply