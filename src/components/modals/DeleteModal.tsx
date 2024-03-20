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
                    <p className="delete-modal__content">Are you sure you want to delete this comment?</p>
                    <div className="delete-modal__btns-row">
                        <button>no, cancel</button>
                        <button>yes, delete</button>
                    </div>
                </div>
            </>
        )}
    </>
  )
}

export default DeleteModal