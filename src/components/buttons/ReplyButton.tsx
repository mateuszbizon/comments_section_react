import replyIcon from "../../assets/icon-reply.svg";

function ReplyButton() {
  return (
    <button className="reply-btn">
        <img src={replyIcon} alt="" />
        <span>Reply</span>
    </button>
  )
}

export default ReplyButton