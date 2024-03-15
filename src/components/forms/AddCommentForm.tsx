import { FormEvent } from "react";
import { usersImages } from "../../constants/usersImages";
import usersData from "../../data/data.json";
import SendButton from "../buttons/SendButton";
import Textarea from "./Textarea";

type AddCommentFormProps = {
	newComment: string;
	setNewComment: (newComment: string) => void;
	submitFunction: () => void;
	btnText: string;
	textareaText: string;
}

function AddCommentForm({ newComment, setNewComment, submitFunction, btnText, textareaText }: AddCommentFormProps) {
	
	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		if (newComment.length == 0) return;

		submitFunction();
		setNewComment("");
	}

	return (
		<form className='add-comment-form' onSubmit={handleSubmit}>
			<div className='add-comment-form__mobile'>
				<Textarea value={newComment} setValue={setNewComment} textareaText={textareaText} />
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
