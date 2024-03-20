import { ReactNode } from "react"

function DeleteConfirmButton({ children } : { children: ReactNode }) {
  return (
    <button className="delete-confirm-btn">
        {children}
    </button>
  )
}

export default DeleteConfirmButton