import React from 'react'


const Modal = ({ onClose = () => {}, children }) => {
  return (
    <div className="modal__content">{ children }</div>
  )
}

export default Modal