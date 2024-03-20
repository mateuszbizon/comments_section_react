import CancelButton from "../buttons/CancelButton";
import DeleteConfirmButton from "../buttons/DeleteConfirmButton";
import Shadow from "./Shadow"

type DeleteModalProps = {
    isDeleteModalOpen: boolean;
    setIsDeleteModalOpen: (isOpen: boolean) => void;
}

function DeleteModal({ isDeleteModalOpen, setIsDeleteModalOpen } : DeleteModalProps) {
  return (
    <>
        {isDeleteModalOpen && (
            <>
                <Shadow setIsModalOpen={setIsDeleteModalOpen} />
                <div className="delete-modal">
                    <span className="delete-modal__title">Delete comment</span>
                    <p className="delete-modal__content">Are you sure you want to delete this comment? This will remove the comment and can't be undone</p>
                    <div className="delete-modal__btns-row">
                        <CancelButton>
                            no, cancel
                        </CancelButton>
                        <DeleteConfirmButton>
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