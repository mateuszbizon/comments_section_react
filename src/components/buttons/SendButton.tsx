import { ReactNode } from 'react'

function SendButton({ children }: { children: ReactNode }) {
  return (
    <button type="submit" className='send-btn'>
        {children}
    </button>
  )
}

export default SendButton