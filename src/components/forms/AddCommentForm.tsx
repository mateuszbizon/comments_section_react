import { ChangeEvent, FormEvent } from "react";
import { usersImages } from "../../constants/usersImages";
import usersData from "../../data/data.json";

type AddCommentFormProps = {
	newComment: string;
	setNewComment: (newComment: string) => void;
	submitFunction: () => void;
	isReply: boolean;
}

function AddCommentForm({ newComment, setNewComment, submitFunction, isReply }: AddCommentFormProps) {
	function handleInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
		setNewComment(e.target.value)
	}

	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		if (newComment.length == 0) return;

		submitFunction();
		setNewComment("");
	}

	return (
		<form className='add-comment-form' onSubmit={handleSubmit}>
			<div className='add-comment-form__mobile'>
				<textarea className='add-comment-form__textarea' value={newComment} onChange={handleInputChange} rows={5} placeholder={isReply ? "Add a reply..." : "Add a comment..."}></textarea>
				<div className='add-comment-form__mobile-row'>
					<img
						className='add-comment-form__img'
						src={usersImages[usersData.currentUser.image.png]}
						alt=''
					/>
					<button type="submit" className='add-comment-form__send-btn'>{isReply ? "reply" : "send"}</button>
				</div>
			</div>
		</form>
	);
}

export default AddCommentForm;
