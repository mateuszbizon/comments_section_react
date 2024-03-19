import { useSetRecoilState } from "recoil";
import { CommentType, ReplyType } from "../types/comments"
import { commentsState } from "../state/atoms/commentsState";

function useScoreReply(comment: CommentType, reply: ReplyType) {
    const setUpdateReply = useSetRecoilState(commentsState);

    function increaseScoreReply() {
        const updatedReply = { ...reply, score: reply.score + 1 }

        setUpdateReply(prev => {
            return prev.map(commentItem => {
                if (commentItem.id == comment.id) {
                    return {
                        ...comment, replies: comment.replies.map(replyItem => {
                            if (replyItem.id == reply.id) {
                                return updatedReply;
                            }

                            return replyItem;
                        })
                    }
                }

                return commentItem;
            })
        })
    }

    function decreaseScoreReply() {
        if (reply.score == 0) return;

        const updatedReply = { ...reply, score: reply.score - 1 }

        setUpdateReply(prev => {
            return prev.map(commentItem => {
                if (commentItem.id == comment.id) {
                    return {
                        ...comment, replies: comment.replies.map(replyItem => {
                            if (replyItem.id == reply.id) {
                                return updatedReply;
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
    increaseScoreReply,
    decreaseScoreReply,
  }
}

export default useScoreReply