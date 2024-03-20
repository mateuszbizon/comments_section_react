import deleteIcon from "../../assets/icon-delete.svg";

type DeleteButtonProps = {
  setIsDeleteModalOpen: (isOpen: boolean) => void;
}

function DeleteButton({ setIsDeleteModalOpen }: DeleteButtonProps) {
  function handleSetDeleteModalOpen() {
    setIsDeleteModalOpen(true);
  }
  
  return (
    <button className="delete-btn" onClick={handleSetDeleteModalOpen}>
        <img src={deleteIcon} alt="" />
        <span>Delete</span>
    </button>
  )
}

export default DeleteButton