import editIcon from "../../assets/icon-edit.svg";

type EditButtonProps = {
  showEditForm: (isEditing: (prev: boolean) => boolean) => void;
}

function EditButton({ showEditForm }: EditButtonProps) {
  function handleShowEditForm() {
    showEditForm(prev => !prev)
  }
  
  return (
    <button className="edit-btn" onClick={handleShowEditForm}>
        <img src={editIcon} alt="" />
        <span>Edit</span>
    </button>
  )
}

export default EditButton