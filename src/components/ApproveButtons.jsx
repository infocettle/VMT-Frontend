import React from "react";

const ApproveButtons = ({ handleCloseModal }) => {
  return (
    <div className="flex justify-between items-center">
      <div
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 cursor-pointer"
        type="button"
        onClick={handleCloseModal}
      >
        Reject
      </div>
      <button
        className="bg-vmtblue hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Approve
      </button>
    </div>
  );
};

export default ApproveButtons;
