import React, { useState, useEffect } from "react";

const Table = ({setTotalAmountPayable}) => {
  const [basePlanQuantity, setBasePlanQuantity] = useState(1);
  const [storageChecked, setStorageChecked] = useState(false);
  const [storageQuantity, setStorageQuantity] = useState(0);
  const [processUserQuantity, setProcessUserQuantity] = useState(1);
  const [selfServiceQuantity, setSelfServiceQuantity] = useState(1);
  const [vatPrice, setVatPrice] = useState(0);
  const [exerciseDutyPrice, setExerciseDutyPrice] = useState(0);

  const basePlanPrice = basePlanQuantity * 10000;
  const storagePrice = storageChecked ? storageQuantity * 10000 : 0;
  const processUserPrice = processUserQuantity * 10000;
  const selfServicePrice = selfServiceQuantity * 10000;
  const totalSubscription =
    basePlanPrice + storagePrice + processUserPrice + selfServicePrice;
  const totalAdditionalPlans =
    storagePrice + processUserPrice + selfServicePrice;

  const vatPercentage = 7.5;
  const exerciseDutyPercentage = 5.0;
  const totalCharges = vatPrice + exerciseDutyPrice;
  const totalAmountPayable = totalSubscription + totalCharges;
  useEffect(() => {
    const vat = (totalSubscription * vatPercentage) / 100;
    setVatPrice(vat);
    const exerciseDuty = (totalSubscription * exerciseDutyPercentage) / 100;
    setExerciseDutyPrice(exerciseDuty);
    setTotalAmountPayable(totalAmountPayable)
  }, [totalSubscription,totalAmountPayable]);



  const handleBasePlanIncrement = () => {
    setBasePlanQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleBasePlanDecrement = () => {
    if (basePlanQuantity > 1) {
      setBasePlanQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleStorageCheckboxChange = () => {
    setStorageChecked(!storageChecked);
    if (!storageChecked) {
      setStorageQuantity(1); // Reset storage quantity to 1 when checked
    }
  };

  const handleStorageIncrement = () => {
    setStorageQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleStorageDecrement = () => {
    if (storageQuantity > 1) {
      setStorageQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleProcessUserIncrement = () => {
    setProcessUserQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleProcessUserDecrement = () => {
    if (processUserQuantity > 1) {
      setProcessUserQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleSelfServiceIncrement = () => {
    setSelfServiceQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleSelfServiceDecrement = () => {
    if (selfServiceQuantity > 1) {
      setSelfServiceQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <table style={{width:"100%",marginTop:"2rem"}}>
      <thead>
        <tr>
          <th align="left">Item</th>
          <th align="left">Item Description</th>
          <th align="left">Quantity</th>
          <th align="left">Price</th>
          <th align="left">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-rule">
          <td>Base Plan</td>
          <td>Basic Plan</td>
          <td>
            <div>
              <button onClick={handleBasePlanDecrement}>-</button>
              <span>{basePlanQuantity}</span>
              <button onClick={handleBasePlanIncrement}>+</button>
            </div>
          </td>
          <td>{basePlanPrice.toFixed(2)}</td>
          <td>{basePlanPrice.toFixed(2)}</td>
        </tr>

        <tr className="table-rule">
          <td style={{fontWeight:"700"}}>Additional Plans (optional)</td>
          
        </tr>
        <tr className="table-rule">
          <td>
            <label>
              <input
                type="checkbox"
                checked={storageChecked}
                onChange={handleStorageCheckboxChange}
              />
              Storage {storageChecked ? `(${storageQuantity}0GB)` : `(0GB)`}
            </label>
          </td>
          <td>Sub Storage</td>
          <td>
            {storageChecked ? (
              <div>
                <button onClick={handleStorageDecrement}>-</button>
                <span>{storageQuantity}</span>
                <button onClick={handleStorageIncrement}>+</button>
              </div>
            ) : (
              <div>0</div>
            )}
          </td>
          <td>{storagePrice.toFixed(2)}</td>
          <td>{storagePrice.toFixed(2)}</td>
        </tr>
        <tr className="table-rule">
          <td>Process User</td>
          <td>Process User Plan</td>
          <td>
            <div>
              <button onClick={handleProcessUserDecrement}>-</button>
              <span>{processUserQuantity}</span>
              <button onClick={handleProcessUserIncrement}>+</button>
            </div>
          </td>
          <td>{processUserPrice.toFixed(2)}</td>
          <td>{processUserPrice.toFixed(2)}</td>
        </tr>
        <tr className="table-rule">
          <td>Self Service</td>
          <td>Self Service Plan</td>
          <td>
            <div>
              <button onClick={handleSelfServiceDecrement}>-</button>
              <span>{selfServiceQuantity}</span>
              <button onClick={handleSelfServiceIncrement}>+</button>
            </div>
          </td>
          <td>{selfServicePrice.toFixed(2)}</td>
          <td>{selfServicePrice.toFixed(2)}</td>
        </tr>
        <tr className="table-rule">
          <td colSpan="4"></td>
          <td style={{fontWeight:"700"}}>{totalAdditionalPlans.toFixed(2)}</td>
        </tr>
        <tr className="table-rule">
          <td colSpan="4" style={{fontWeight:"700"}}>Total Subscription</td>
          <td style={{fontWeight:"700"}}>{totalSubscription.toFixed(2)}</td>
        </tr>
        <tr className="table-rule">
          <td style={{fontWeight:"700"}}>Charges</td>
          
        </tr>
        <tr className="table-rule">
          <td>VAT</td>
          <td colSpan="2"></td>
          <td >7.5%</td>
          <td>{vatPrice.toFixed(2)}</td>
        </tr>
        <tr className="table-rule">
          <td>Exercise Duty</td>
          <td colSpan="2"></td>
          <td > 5.0%</td>
          <td>{exerciseDutyPrice.toFixed(2)}</td>
        </tr>
        <tr className="table-rule">
          <td  style={{fontWeight:"700"}}>Total Charges</td>
          <td colSpan="3"></td>
       
          <td  style={{fontWeight:"700"}}>{totalCharges.toFixed(2)}</td>
        </tr>
      </tbody>

      {/* <tfoot>
        
        <tr className="table-rule">
          <td colSpan="4">Total Amount Payable</td>
          <td>{totalAmountPayable.toFixed(2)}</td>
        </tr>
      </tfoot> */}
    </table>
  );
};

export default Table;
