type ShadowProps = {
    setIsModalOpen: (isOpen: boolean) => void;
}

function Shadow({ setIsModalOpen } : ShadowProps) {
  function handleSetModalClose() {
    setIsModalOpen(false);
  }
  
    return (
    <div className="shadow" onClick={handleSetModalClose}></div>
  )
}

export default Shadow