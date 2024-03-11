import deleteIcon from "../../assets/icon-delete.svg";

function DeleteButton() {
  return (
    <button className="delete-btn">
        <img src={deleteIcon} alt="" />
        <span>Delete</span>
    </button>
  )
}

export default DeleteButton