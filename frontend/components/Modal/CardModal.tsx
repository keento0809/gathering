import React from "react";

interface CardProps {
  isExpired: boolean;
}

const CardModal = ({ isExpired }: CardProps) => {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 bg-slate-700 rounded-lg z-40 opacity-80">
      <div className="modal-container text-red-500 flex justify-center items-center h-full">
        <p className="text-2xl font-semibold">
          {isExpired ? "Expired" : "Fully booked"}
        </p>
      </div>
    </div>
  );
};

export default CardModal;
