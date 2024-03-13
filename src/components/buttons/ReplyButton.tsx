import replyIcon from "../../assets/icon-reply.svg";

type ReplyButtonProps = {
  setIsReplyFormActive: (isReplyFormActive: (prev: boolean) => boolean) => void;
}

function ReplyButton({ setIsReplyFormActive }: ReplyButtonProps) {
  function handleSetReplyFormActive() {
    setIsReplyFormActive(prev => !prev);
  }
  
  return (
    <button className="reply-btn" onClick={handleSetReplyFormActive}>
        <img src={replyIcon} alt="" />
        <span>Reply</span>
    </button>
  )
}

export default ReplyButton