import editIcon from "../../assets/icon-edit.svg";

function EditButton() {
  return (
    <button className="edit-btn">
        <img src={editIcon} alt="" />
        <span>Edit</span>
    </button>
  )
}

export default EditButton