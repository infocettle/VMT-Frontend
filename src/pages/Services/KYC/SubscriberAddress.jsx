import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const SubscriberAddress = ({ closeSubscriberAddress }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-layout zoomsin p-8">
        <div className="w-full flex items-center justify-between py-1 border-b-2">
          <div className="kyc-header">Subscriber Address</div>
          <div className="kyc-close" onClick={closeSubscriberAddress}>
            <IoClose />
          </div>
        </div>
        <div className="py-2">
          <p className="py-2">
            Address: <b>Lorem Ipsum</b>
          </p>
          <div className="relative overflow-hidden rounded-lg shadow-lg my-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8152829.049160672!2d1.8451358687499875!3d3.837307613778319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1723112448892!5m2!1sen!2sng"
              width="100%"
              height="300"
              style={{border:0}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <form>
            <label for="message" class="block text-sm font-medium mt-2 mb-1">
              Remark
            </label>
            <textarea
              id="message"
              rows="4"
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

export default SubscriberAddress;
