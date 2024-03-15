import SendButton from "../buttons/SendButton";
import Textarea from "./Textarea";

type EditCommentFormProps = {
    editComment: string;
    setEditComment: (editComment: string) => void;
    submitFunction: () => void;
    btnText: string;
	textareaText: string;
}

function EditCommentForm({ editComment, setEditComment, submitFunction, btnText, textareaText }: EditCommentFormProps) {
	function handleSubmit() {
        if (editComment.length == 0) return;

        submitFunction();
    }
    
    return (
        <form className="edit-comment-form" onSubmit={handleSubmit}>
            <Textarea value={editComment} setValue={setEditComment} textareaText={textareaText} />
            <div className="edit-comment-form__btn-row">
                <SendButton>
                    {btnText}
                </SendButton>
            </div>
        </form>
    );
}

export default EditCommentForm;
