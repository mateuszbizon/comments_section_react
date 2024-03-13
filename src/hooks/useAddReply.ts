import { useSetRecoilState } from "recoil";
import { CommentType } from "../types/comments"
import { commentsState } from "../state/atoms/commentsState";
import usersData from "../data/data.json";

function useAddReply(comment: CommentType, commentAuthor: string, newReply: string) {
    const setReply = useSetRecoilState(commentsState);

    function addReply() {
        setReply(prev => {
            return prev.map(commentItem => {
              if (commentItem.id === comment.id) {
                return {
                  ...commentItem,
                  replies: [...commentItem.replies, {
                    id: Math.floor(Math.random() * 10000), 
                    content: newReply, 
                    createdAt: "today", 
                    score: 0, 
                    replyingTo: commentAuthor, 
                    user: usersData.currentUser,
                  }]
                };
              }
      
              return commentItem;
            });
          })
    }
  
    return {
        addReply,
    }
}

export default useAddReply