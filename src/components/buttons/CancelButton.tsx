import { ReactNode } from "react"

function CancelButton({ children } : { children: ReactNode }) {
  return (
    <button className="cancel-btn">
        {children}
    </button>
  )
}

export default CancelButton