import { ReactNode } from "react"

type DeleteConfirmButtonProps = {
  children: ReactNode;
  deleteFunction: () => void;
}

function DeleteConfirmButton({ children, deleteFunction } : DeleteConfirmButtonProps) {
  function handleDelete() {
    deleteFunction();
  }
  
  return (
    <button className="delete-confirm-btn" onClick={handleDelete}>
        {children}
    </button>
  )
}

export default DeleteConfirmButton