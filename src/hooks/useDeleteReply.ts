import { CommentType, ReplyType } from "../types/comments";
import { useSetRecoilState } from "recoil";
import { commentsState } from "../state/atoms/commentsState";

function useDeleteReply(comment: CommentType, reply: ReplyType) {
	const setDeleteReply = useSetRecoilState(commentsState);

	function deleteReply() {
		setDeleteReply(prev => {
			return prev.map(commentItem => {
				if (commentItem.id == comment.id) {
                    return {
                        ...comment, replies: comment.replies.filter(replyItem => replyItem.id != reply.id)
                    }
				}

				return commentItem;
			});
		});
	}

	return {
		deleteReply,
	};
}

export default useDeleteReply;
