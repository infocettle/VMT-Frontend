import React, { useEffect, useState } from "react";
import { Table, Divider, Space } from "antd";
import Tables from "@/pages/Services/Tables/Tables";
import ServicesDiv from "../ServicesDiv";
import { Link } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import {
  BsEnvelopeFill,
  BsGeoAltFill,
  BsTelephoneFill,
  BsPencil,
  BsTrash,
} from "react-icons/bs";
import "../services.css";

export default function UpdateSubscription() {

  const tableHeaderOne = ["Item Description", "Qty", "Price", "Period", "Amount"];
  const tableRowsOne = [
    {
      itemdescription: (
        <div class="flex items-center space-x-3">
          <input
            id="checkbox1"
            type="checkbox"
            name="example"
            value="option1"
            class="h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="checkbox1" class="text-gray-700">
            Standard Module
          </label>
        </div>
      ),
      qty: "5",
      price: "2,000",
      period: "5",
      amount: "65,000",
    },
    {
      itemdescription: (
        <div class="flex items-center space-x-3">
          <input
            id="checkbox4"
            type="checkbox"
            name="example"
            value="option1"
            class="h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="checkbox4" class="text-gray-700">
            Self Service User
          </label>
        </div>
      ),
      qty: "5",
      price: "2,000",
      period: "5",
      amount: "65,000",
    },
    {
      itemdescription: (
        <div class="flex items-center space-x-3">
          <input
            id="checkbox4"
            type="checkbox"
            name="example"
            value="option1"
            class="h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="checkbox4" class="text-gray-700">
            Self Service User
          </label>
        </div>
      ),
      qty: "5",
      price: "2,000",
      period: "5",
      amount: "65,000",
    },
  ];

  const tableHeaderTwo = ["Item Description", "Status", "Qty", "Price", "Period", "Amount"];
  const tableRowsTwo = [
    {
      itemdescription: (
        <div class="flex items-center space-x-3">
          <input
            id="checkbox1"
            type="checkbox"
            name="example"
            value="option1"
            class="h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="checkbox1" class="text-gray-700">
            Custom Module
          </label>
        </div>
      ),
      status: "",
      qty: "5",
      price: "2,000",
      period: "5",
      amount: "65,000",
    },
    {
      itemdescription: (
        <div class="flex items-center space-x-3">
          <input
            id="checkbox2"
            type="checkbox"
            name="example"
            value="option1"
            class="h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="checkbox2" class="text-gray-700">
            Storage (15GB)
          </label>
        </div>
      ),
      status: "5GB of 15GB used",
      qty: "5",
      price: "2,000",
      period: "5",
      amount: "120,000",
    },
    {
      itemdescription: (
        <div class="flex items-center space-x-3">
          <input
            id="checkbox3"
            type="checkbox"
            name="example"
            value="option1"
            class="h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="checkbox3" class="text-gray-700">
            Process User
          </label>
        </div>
      ),
      status: "5 of 5 active user",
      qty: "5",
      price: "2,000",
      period: "5",
      amount: "65,000",
    },
    {
      itemdescription: (
        <div class="flex items-center space-x-3">
          <input
            id="checkbox4"
            type="checkbox"
            name="example"
            value="option1"
            class="h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="checkbox4" class="text-gray-700">
            Self Service User
          </label>
        </div>
      ),
      status: "5 of 5 active user",
      qty: "5",
      price: "2,000",
      period: "5",
      amount: "120,000",
    },
    {
      itemdescription: <p className="font-bold">Total</p>,
      status: "",
      qty: "",
      price: "",
      period: "",
      amount: <p className="font-bold">365,000</p>,
    },
  ];

  const tableHeaderThree = ["Discount", "Rate", "Price"];
  const tableRowsThree = [
    {
      discount: "Waiver",
      rate: "7.5%",
      price: "65,000",
    },
    {
      discount: "Payement Cycle",
      rate: "5.0%",
      price: "120,000",
    },
    {
      discount: "Promo",
      rate: "5.0%",
      price: "65,000",
    },
    {
      discount: <p className="font-bold">Discounted Subscription</p>,
      rate: "",
      price: <p className="font-bold">65,000</p>,
    },
  ];

  const tableHeaderFour = ["Charge", "Rate", "Price"];
  const tableRowsFour = [
    {
      charge: "VAT",
      rate: "7.5%",
      price: "65,000",
    },
    {
      charge: "Excise Duty",
      rate: "5.0%",
      price: "120,000",
    },
    {
      charge: "Payement Gateway",
      rate: "5.0%",
      price: "65,000",
    },
    {
      charge: <p className="font-bold">Total Charges</p>,
      rate: "",
      price: <p className="font-bold">65,000</p>,
    },
  ];


  return (
    <div className="w-full">
      <ServicesDiv module={"Contacts"} />
      <div className="bg-gray-100 px-2 py-3  scrolled-height lg:px-10 w-full flex-col items-center">
        <div className="flex justify-between w-full items-center">
          <div className="main-container">
            <div>
              <div>
                <h2
                  className="performance_header flex"
                  style={{ color: "#000", fontSize: "12px" }}
                >
                  <Link
                    style={{ color: "#000", fontSize: "14px" }}
                    to={"/services/contacts/viewcontactpayments"}
                    className="flex "
                  >
                    <BiLeftArrowAlt size={20} />
                    <span>Upgarde Subscription</span>
                  </Link>
                </h2>
              </div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4 my-5">
              <div className="services-card col-span-4 px-5">
                <div className="py-2" style={{ fontSize: "12px" }}>
                  <div className="flex justify-between py-2">
                    <p>
                      <b>Subscriber</b>
                    </p>
                    <p>
                      <b>2213171676</b>
                    </p>
                    <p>
                      <b>DesignXcel</b>
                    </p>
                    <p>
                      <b>info@designxcel.com</b>
                    </p>
                    <p>
                      <b>+23480835927668</b>
                    </p>
                  </div>
                  <div className="flex justify-between py-2">
                    <p>
                      <b>Admin 1</b>
                    </p>
                    <p>
                      <b>2213171676</b>
                    </p>
                    <p>
                      <b>DesignXcel</b>
                    </p>
                    <p>
                      <b>info@designxcel.com</b>
                    </p>
                    <p>
                      <b>23480835927668</b>
                    </p>
                  </div>
                  <div className="flex justify-between py-2">
                    <p>
                      <b>Agent</b>
                    </p>
                    <p>
                      <b>2213171676</b>
                    </p>
                    <p>
                      <b>DesignXcel</b>
                    </p>
                    <p>
                      <b>info@designxcel.com</b>
                    </p>
                    <p>
                      <b>23480835927668</b>
                    </p>
                  </div>
                  <div className="flex justify-between py-2">
                    <p>
                      <b>Payment Cycle:</b>
                    </p>
                    <div class="flex items-center space-x-1">
                      <input
                        id="radio1"
                        type="radio"
                        name="example"
                        value="option1"
                        class="h-3 w-3 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <label for="radio1" class="text-gray-700">
                        1 Month
                      </label>
                    </div>
                    <div class="flex items-center space-x-1">
                      <input
                        id="3months"
                        type="radio"
                        name="example"
                        value="option1"
                        class="h-3 w-3 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <label for="3months" class="text-gray-700">
                        3 Months
                      </label>
                    </div>
                    <div class="flex items-center space-x-1">
                      <input
                        id="6months"
                        type="radio"
                        name="example"
                        value="option1"
                        class="h-3 w-3 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <label for="6months" class="text-gray-700">
                        6 Months
                      </label>
                    </div>
                    <div class="flex items-center space-x-1">
                      <input
                        id="1year"
                        type="radio"
                        name="example"
                        value="option1"
                        class="h-3 w-3 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <label for="1year">1 Year</label>
                    </div>
                  </div>
                  <div>
                    <p className="py-2">
                      Invoice Number: <b>2213171676</b>
                    </p>
                    <p className="py-2">
                      Discount: <b>12-SEP-2016</b>
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="font-bold border-b-2">Standard Plan</p>
                  <Tables
                    headerArr={tableHeaderOne}
                    rowArr={tableRowsOne}
                    // headBg={"beige-bg"}
                  />
                </div>
                <div className="mt-3">
                  <p className="font-bold border-b-2">Additional Plans (optional)</p>
                  <Tables
                    headerArr={tableHeaderTwo}
                    rowArr={tableRowsTwo}
                    // headBg={"beige-bg"}
                  />
                </div>
                <div className="mt-3">
                  <p className="font-bold border-b-2">Discounts (as applicable)</p>
                  <Tables
                    headerArr={tableHeaderThree}
                    rowArr={tableRowsThree}
                    // headBg={"beige-bg"}
                  />
                </div>
                <div className="mt-3">
                  <p className="font-bold border-b-2">Charges</p>
                  <Tables
                    headerArr={tableHeaderFour}
                    rowArr={tableRowsFour}
                    // headBg={"beige-bg"}
                  />
                </div>
                <div className="mt-3">
                  <div>
                    <p className="font-bold">Total Amount Payable</p>
                    <h1 className="font-bold text-2xl">N 238,500.00</h1>
                  </div>
                  <div className="w-full border-b py-5 px-4 flex items-center justify-between ">
                    <button
                      type="button"
                      style={{ height: "100%" }}
                      className="py-1 px-2 rounded border-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      style={{ height: "100%" }}
                      className="text-white bg-blue-600 py-1 px-2 rounded"
                    >
                      Proceed to payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b py-5 px-4 flex items-center justify-between box-container-footer large_screen">
        <button
          type="button"
          style={{ height: "100%" }}
          className="services-newtype-cancel services-btn services-no-radius"
        >
          Cancel
        </button>
        <button
          type="button"
          style={{ height: "100%" }}
          className=" services-newtype-submit services-no-radius"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
