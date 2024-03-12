import { usersImages } from "../../constants/usersImages";
import usersData from "../../data/data.json";

function AddCommentForm() {
	return (
		<form className='add-comment-form'>
			<div className='add-comment-form__mobile'>
				<textarea className='add-comment-form__textarea' rows={5} placeholder="Add a comment..."></textarea>
				<div className='add-comment-form__mobile-row'>
					<img
						className='add-comment-form__img'
						src={usersImages[usersData.currentUser.image.png]}
						alt=''
					/>
					<button className='add-comment-form__send-btn'>send</button>
				</div>
			</div>
		</form>
	);
}

export default AddCommentForm;
