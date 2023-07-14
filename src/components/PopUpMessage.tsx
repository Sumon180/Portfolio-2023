import { PopUpMessageType } from "@/types";
import { FC } from "react";

export const PopupMessage: FC<PopUpMessageType> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow">
        <p>{message}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
