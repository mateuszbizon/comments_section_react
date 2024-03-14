import { ChangeEvent, FormEvent } from "react";
import { usersImages } from "../../constants/usersImages";
import usersData from "../../data/data.json";
import SendButton from "../buttons/SendButton";

type AddCommentFormProps = {
	newComment: string;
	setNewComment: (newComment: string) => void;
	submitFunction: () => void;
	btnText: string;
	textareaText: string;
}

function AddCommentForm({ newComment, setNewComment, submitFunction, btnText, textareaText }: AddCommentFormProps) {
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
				<textarea className='add-comment-form__textarea' value={newComment} onChange={handleInputChange} rows={5} placeholder={textareaText}></textarea>
				<div className='add-comment-form__mobile-row'>
					<img
						className='add-comment-form__img'
						src={usersImages[usersData.currentUser.image.png]}
						alt=''
					/>
					<SendButton>
						{btnText}
					</SendButton>
				</div>
			</div>
		</form>
	);
}

export default AddCommentForm;
