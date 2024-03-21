import { useSetRecoilState } from "recoil";
import { CommentType } from "../types/comments";
import { commentsState } from "../state/atoms/commentsState";

function useDeleteComment(comment: CommentType) {
	const setUpdateComment = useSetRecoilState(commentsState);

	function deleteComment() {
		setUpdateComment(prev => {
			return prev.filter(commentItem => commentItem.id != comment.id);
		});
	}

	return {
		deleteComment,
	};
}

export default useDeleteComment;
