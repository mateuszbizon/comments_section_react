import CancelButton from "../buttons/CancelButton";
import DeleteConfirmButton from "../buttons/DeleteConfirmButton";
import Shadow from "./Shadow"

type DeleteModalProps = {
    isDeleteModalOpen: boolean;
    setIsDeleteModalOpen: (isOpen: boolean) => void;
    deleteFunction: () => void;
}

function DeleteModal({ isDeleteModalOpen, setIsDeleteModalOpen, deleteFunction } : DeleteModalProps) {
  return (
    <>
        {isDeleteModalOpen && (
            <>
                <Shadow setIsModalOpen={setIsDeleteModalOpen} />
                <div className="delete-modal">
                    <span className="delete-modal__title">Delete comment</span>
                    <p className="delete-modal__content">Are you sure you want to delete this comment? This will remove the comment and can't be undone</p>
                    <div className="delete-modal__btns-row">
                        <CancelButton setIsModalOpen={setIsDeleteModalOpen}>
                            no, cancel
                        </CancelButton>
                        <DeleteConfirmButton deleteFunction={deleteFunction}>
                            yes, delete
                        </DeleteConfirmButton>
                    </div>
                </div>
            </>
        )}
    </>
  )
}

export default DeleteModal