"use client"
import { Cancel } from "./Icons";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex bg-gray-600 bg-opacity-50 lg:items-center lg:justify-center z-[2] bg-black">
      <div></div>
      <div className="lg:w-[70%] w-[100%] p-8 bg-white rounded shadow-lg relative">
        {children}
        <div className="absolute cursor-pointer top-0 right-3">
          <button
            onClick={onClose}
            className="px-4 py-2 mt-4 font-bold text-white "
          >
            <Cancel size={22} color="black" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;