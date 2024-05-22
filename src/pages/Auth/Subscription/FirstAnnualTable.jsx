import React, { useState, useEffect } from "react";

const FirstAnnualTable = ({setTotalAmountPayable}) => {
  const [bookKeepingQuantity, setBookKeepingQuantity] = useState(1);
  const [accountingChecked, setAccountingChecked] = useState(false);
  const [accountingQuantity, setAccountingQuantity] = useState(1);
  const [auditingQuantity, setAuditingQuantity] = useState(1);
  const [legalQuantity, setLegalQuantity] = useState(1);
  const [othersQuantity, setOthersQuantity] = useState(1);
  const [vatPrice, setVatPrice] = useState(0);
  const [exerciseDutyPrice, setExerciseDutyPrice] = useState(0);

  const bookKeepingPrice = bookKeepingQuantity * 10000;
  const accountingPrice = accountingQuantity * 10000
  const auditingPrice = auditingQuantity * 10000;
  const legalPrice = legalQuantity * 10000;
  const othersPrice = othersQuantity * 10000;
  const totalSubscription =
    bookKeepingPrice + accountingPrice + auditingPrice + legalPrice + othersPrice;
  const totalAdditionalPlans =
    accountingPrice + auditingPrice + legalPrice + othersPrice;

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



  const handleBookKeepingIncrement = () => {
    setBookKeepingQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleBookKeepingDecrement = () => {
    if (bookKeepingQuantity > 1) {
      setBookKeepingQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAccountingCheckboxChange = () => {
    setAccountingChecked(!accountingChecked);
    if (!accountingChecked) {
      setAccountingQuantity(1); // Reset accounting quantity to 1 when checked
    }
  };

  const handleAccountingIncrement = () => {
    setAccountingQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAccountingDecrement = () => {
    if (accountingQuantity > 1) {
      setAccountingQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAuditingIncrement = () => {
    setAuditingQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAuditingDecrement = () => {
    if (auditingQuantity > 1) {
      setAuditingQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleLegalIncrement = () => {
    setLegalQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleLegalDecrement = () => {
    if (legalQuantity > 1) {
      setLegalQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleOthersIncrement = () => {
    setOthersQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleOthersDecrement = () => {
    if (othersQuantity > 1) {
      setOthersQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <table style={{width:"100%",marginTop:"2rem"}}>
      <thead>
        <tr>
          <th align="left">Item</th>
          <th align="left"></th>
          <th align="left">Quantity</th>
          <th align="left">Price</th>
          <th align="left">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-rule">
          <td>Book Keeping</td>
          <td></td>
          <td>
            <div>
              <button onClick={handleBookKeepingDecrement}>-</button>
              <span>{bookKeepingQuantity}</span>
              <button onClick={handleBookKeepingIncrement}>+</button>
            </div>
          </td>
          <td>{bookKeepingPrice.toFixed(2)}</td>
          <td>{bookKeepingPrice.toFixed(2)}</td>
        </tr>

       
       
        <tr className="table-rule">
          <td>Accounting</td>
          <td></td>
          <td>
            <div>
              <button onClick={handleAccountingDecrement}>-</button>
              <span>{accountingQuantity}</span>
              <button onClick={handleAccountingIncrement}>+</button>
            </div>
          </td>
          <td>{accountingPrice.toFixed(2)}</td>
          <td>{accountingPrice.toFixed(2)}</td>
        </tr>
        <tr className="table-rule">
          <td>Auditing</td>
          <td></td>
          <td>
            <div>
              <button onClick={handleAuditingDecrement}>-</button>
              <span>{auditingQuantity}</span>
              <button onClick={handleAuditingIncrement}>+</button>
            </div>
          </td>
          <td>{auditingPrice.toFixed(2)}</td>
          <td>{auditingPrice.toFixed(2)}</td>
        </tr>
        <tr className="table-rule">
          <td>Legal</td>
          <td></td>
          <td>
            <div>
              <button onClick={handleLegalDecrement}>-</button>
              <span>{legalQuantity}</span>
              <button onClick={handleLegalIncrement}>+</button>
            </div>
          </td>
          <td>{legalPrice.toFixed(2)}</td>
          <td>{legalPrice.toFixed(2)}</td>
        </tr>
        <tr className="table-rule">
          <td>Others</td>
          <td></td>
          <td>
            <div>
              <button onClick={handleOthersDecrement}>-</button>
              <span>{othersQuantity}</span>
              <button onClick={handleOthersIncrement}>+</button>
            </div>
          </td>
          <td>{othersPrice.toFixed(2)}</td>
          <td>{othersPrice.toFixed(2)}</td>
        </tr>
        <tr className="table-rule">
          <td colSpan="4"></td>
          <td style={{fontWeight:"700"}}>{totalAdditionalPlans.toFixed(2)}</td>
        </tr>
        <tr className="table-rule">
          <td colSpan="4" style={{fontWeight:"700"}}>Total Fee</td>
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

export default FirstAnnualTable;
