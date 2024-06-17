import React, { useState, useEffect } from "react";

const Table = ({ setTotalAmountPayable }) => {
  const [customModuleChecked, setCustomModuleChecked] = useState(true);
  const [storageChecked, setStorageChecked] = useState(false);
  const [processUserChecked, setProcessUserChecked] = useState(false);
  const [selfServiceChecked, setSelfServiceChecked] = useState(false);

  const basePlanPrice = 120000;
  const customModulePrice = customModuleChecked ? 10000 : 0;
  const storagePrice = storageChecked ? 10000 : 0;
  const processUserPrice = processUserChecked ? 10000 : 0;
  const selfServicePrice = selfServiceChecked ? 10000 : 0;

  const totalSubscription = basePlanPrice + customModulePrice + storagePrice + processUserPrice + selfServicePrice;
  const totalAdditionalPlans = customModulePrice + storagePrice + processUserPrice + selfServicePrice;
  const totalBeforeDiscount = totalSubscription + totalAdditionalPlans;

  const waiverDiscount = 0.35 * totalSubscription;
  const paymentCycleDiscount = 0.1 * totalSubscription;
  const promoDiscount = 0.15 * totalSubscription;

  const discountedSubscription = waiverDiscount + paymentCycleDiscount + promoDiscount;

  const vatPercentage = 7.5;
  const exciseDutyPercentage = 5.0;
  const paymentGatewayPercentage = 5.0;

  const vat = (discountedSubscription * vatPercentage) / 100;
  const exciseDuty = (discountedSubscription * exciseDutyPercentage) / 100;
  const paymentGateway = (discountedSubscription * paymentGatewayPercentage) / 100;

  const totalCharges = vat + exciseDuty + paymentGateway;
  const totalAmountPayable = discountedSubscription + totalCharges;

  useEffect(() => {
    setTotalAmountPayable(totalAmountPayable);
  }, [totalAmountPayable, setTotalAmountPayable]);

  return (
    <div className="table-container">
      <table style={{ width: "100%", marginTop: "2rem" }}>
        <thead>
          <tr>
            <th align="left">Item Description</th>
            <th align="center">Qty</th>
            <th align="center">Price</th>
            <th align="center">Period</th>
            <th align="center">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-rule">
            <td>Standard Plan</td>
            <td align="center"  >
              <div className="border-gray-400 border bg-gray-100  w-full">
                  1
              </div>
            </td>
            <td align="center">10,000.00</td>
            <td align="center">12</td>
            <td align="center">120,000.00</td>
          </tr>
          <tr className="table-rule">
            <td>
              <label>
                <input
                  type="checkbox"
                  checked={true}
                  style={{color:"black"}}
                  disabled
                 className="mr-2"
                />
                Standard Modules
              </label>
            </td>
            <td align="center">All</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="table-rule">
            <td>
              <label>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="mr-2"
                />
                Admin User
              </label>
            </td>
            <td align="center">2</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="table-rule">
            <td>
              <label>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="mr-2"
                />
         Storage (15GB)
              </label>
            </td>
            <td align="center">1</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        
          <tr className="table-rule">
            <td style={{ fontWeight: "700" }}>Additional Plans (optional)</td>
          </tr>
          <tr className="table-rule">
            <td>
              <label>
                <input
                  type="checkbox"
                  checked={customModuleChecked}
                  onChange={() => setCustomModuleChecked(!customModuleChecked)}
                  className="mr-2"
                />
                Custom Module (School)
              </label>
            </td>
            <td align="center">1</td>
            <td align="center">10,000.00</td>
            <td align="center"> 12</td>
            <td align="center">{customModuleChecked ? "10,000.00" : "0.00"}</td>
          </tr>
          <tr className="table-rule">
            <td>
              <label>
                <input
                  type="checkbox"
                  checked={storageChecked}
                  onChange={() => setStorageChecked(!storageChecked)}
                  className="mr-2"
                />
                Storage (15GB)
              </label>
            </td>
            <td  align="center">
            <div className="border-gray-400 border bg-gray-100  w-full">
                  0
              </div>
            </td>
            <td  align="center">10,000.00</td>
            <td  align="center">12</td>
            <td  align="center">{storageChecked ? "10,000.00" : "0.00"}</td>
          </tr>
          <tr className="table-rule">
            <td>
              <label>
                <input
                  type="checkbox"
                  checked={processUserChecked}
                  onChange={() => setProcessUserChecked(!processUserChecked)}
                  className="mr-2"
                />
                Process User
              </label>
            </td>
            <td  align="center">
            <div className="border-gray-400 border bg-gray-100  w-full">
                  0
              </div>
            </td>
            <td  align="center">10,000.00</td>
            <td  align="center">12</td>
            <td align="center">{processUserChecked ? "10,000.00" : "0.00"}</td>
          </tr>
          <tr className="table-rule">
            <td>
              <label>
                <input
                  type="checkbox"
                  checked={selfServiceChecked}
                  onChange={() => setSelfServiceChecked(!selfServiceChecked)}
                  className="mr-2"
                />
                Self-Service User
              </label>
            </td>
            <td align="center">
            <div className="border-gray-400 border bg-gray-100  w-full">
                  0
              </div>
            </td>
            <td align="center">10,000.00</td>
            <td align="center">12</td>
            <td align="center">{selfServiceChecked ? "10,000.00" : "0.00"}</td>
          </tr>
          <tr className="table-rule">
            <td colSpan="4" style={{ fontWeight: "700" }}>Total Subscription</td>
            <td style={{ fontWeight: "700" }}  align="center">{totalSubscription.toFixed(2)}</td>
          </tr>
          <tr className="table-rule">
            <td style={{ fontWeight: "700" }}>Discounts (as applicable)</td>
          </tr>
          <tr className="table-rule">
            <td>Waiver: Part</td>
            <td></td>
            <td></td>
            <td  align="center">35.0%</td>
            <td  align="center">{waiverDiscount.toFixed(2)}</td>
          </tr>
          <tr className="table-rule">
            <td>Payment Cycle: Annual</td>
            <td></td>
            <td></td>
            <td align="center">10.0%</td>
            <td  align="center">{paymentCycleDiscount.toFixed(2)}</td>
          </tr>
          <tr className="table-rule">
            <td>Promo: Christmas Bonanza</td>
            <td></td>
            <td></td>
            <td align="center">15.0%</td>
            <td  align="center">{promoDiscount.toFixed(2)}</td>
          </tr>
          <tr className="table-rule">
            <td colSpan="4" style={{ fontWeight: "700" }}>Discounted Subscription</td>
            <td style={{ fontWeight: "700" }}  align="center">{discountedSubscription.toFixed(2)}</td>
          </tr>
          <tr className="table-rule">
            <td style={{ fontWeight: "700" }}>Charges</td>
          </tr>
          <tr className="table-rule">
            <td>VAT</td>
            <td></td>
            <td></td>
            <td  align="center">7.5%</td>
            <td  align="center">{vat.toFixed(2)}</td>
          </tr>
          <tr className="table-rule">
            <td>Excise Duty</td>
            <td></td>
            <td></td>
            <td align="center">5.0%</td>
            <td align="center">{exciseDuty.toFixed(2)}</td>
          </tr>
          <tr className="table-rule">
            <td>Payment Gateway</td>
            <td></td>
            <td></td>
            <td align="center">5.0%</td>
            <td align="center">{paymentGateway.toFixed(2)}</td>
          </tr>
          <tr className="table-rule">
            <td colSpan="4" style={{ fontWeight: "700" }}>Total Charges</td>
            <td style={{ fontWeight: "700" }} align="center">{totalCharges.toFixed(2)}</td>
          </tr>
          <tr className="table-rule">
            <td colSpan="4" style={{ fontWeight: "700" }}>Amount Payable</td>
            <td style={{ fontWeight: "700" }} align="center">{totalAmountPayable.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
