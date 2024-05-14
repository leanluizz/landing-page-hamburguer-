import React from 'react';

const Modal = ({ isOpen, onClose, onBuy, children, display }: any) => {
  if (!isOpen) return null;

  return (
    <form onSubmit={(e: any) => e.preventDefault()} className="z-10 modal-overlay" onClick={onClose}>
      <div className="p-6 modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <div className='flex'>
        <button className={`${display == 'true' ? 'block' : 'hidden'} m-2 bg-orange-600`} onClick={onBuy}>Comprar</button>
        <button className={`${display == 'true' ? 'block' : 'hidden'} m-2 bg-orange-600`} onClick={onClose}>Fechar</button>
        
        </div>
      </div>
    </form>
  );
};

export default Modal;
