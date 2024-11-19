import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const SubscriberTIN = ({ closeSubscriberTIN }) => {

  return (
    <div className="modal-overlay">
      <div className="modal-layout zoomsin p-8 ">
        <div className="w-full flex items-center justify-between py-1 border-b-2">
          <div className="kyc-header">Subscriber TIN</div>
          <div className="kyc-close" onClick={closeSubscriberTIN}>
            <IoClose />
          </div>
        </div>
        <div className="py-2">
          <p className="py-2 flex items-center justify-between">
            <span>
              Tax Identification Number: <b>4361 4361 4361 4361</b>
            </span>
            <span>verify</span>
          </p>
          <form>
            <label for="message" class="block text-sm font-medium mt-2 mb-1">
              Remark
            </label>
            <textarea
              id="message"
              rows="7"
              class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              placeholder="Enter short message"
            ></textarea>
          </form>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <button className="rounded py-2 px-6 border-2 border-gray-400">
              <b>Cancel</b>
            </button>
          </div>
          <div>
            <button className="bg-green-800 px-4 py-2 mr-4 text-white rounded">
              Pass
            </button>
            <button className="bg-red-700 px-4 py-2 text-white rounded">
              Fail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriberTIN;