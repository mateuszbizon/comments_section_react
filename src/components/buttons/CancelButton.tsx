import { ReactNode } from "react"

type CancelButtonProps = {
  children: ReactNode;
  setIsModalOpen: (isOpen: boolean) => void;
}

function CancelButton({ children, setIsModalOpen } : CancelButtonProps) {
  function handleSetModalClose() {
    setIsModalOpen(false);
  }
  
  return (
    <button className="cancel-btn" onClick={handleSetModalClose}>
        {children}
    </button>
  )
}

export default CancelButton