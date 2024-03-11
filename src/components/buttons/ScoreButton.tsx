import plusIcon from "../../assets/icon-plus.svg";
import minusIcon from "../../assets/icon-minus.svg";
import { CommentType, ReplyType } from "../../types/comments"

type ScoreButtonProps = {
    comment: CommentType | ReplyType;
}

function ScoreButton({ comment }: ScoreButtonProps) {
  return (
    <div className="score-container">
        <button className="score-container__btn score-container__btn--plus-btn">
            <img src={plusIcon} alt="" />
        </button>
        <div className="score-container__number">{comment.score}</div>
        <button className="score-container__btn score-container__btn--minus-btn">
            <img src={minusIcon} alt="" />
        </button>
    </div>
  )
}

export default ScoreButton