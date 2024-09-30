import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50">
      <div className="h-[70vh] w-full max-w-md rounded-lg bg-white pt-4">
        {children}
      </div>
    </div>
  );
};

export default Modal;
