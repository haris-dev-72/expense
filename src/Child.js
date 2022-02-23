import React, { useContext, useState } from "react";
import { TransactionContext } from "./transContext";

function Child() {
  let { transactions, addTransaction } = useContext(TransactionContext);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);
  console.log(newDesc, newAmount);

  const handleAddition = (event) => {
    event.preventDefault();
    if (Number(newAmount) === 0) {
      alert("Enter Correct Value");
      return false;
    }
    addTransaction({
      amount: Number(newAmount),
      desc: newDesc,
    });
    setDesc("");
    setAmount(0);
  };
  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) income = income + transactions[i].amount;
    }
    return income;
  };

  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) expense += transactions[i].amount;
    }
    return expense;
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Expense Tracker</h1>;
        <h2 className="text-center2">
          Your Balance <br /> ${getIncome() + getExpense()}
        </h2>
        <div className="expense-container">
          <h2>
            INCOME <br /> {getIncome()}
          </h2>

          <h2>
            EXPENSE <br /> ${getExpense()}
          </h2>
        </div>
        <h3>
          History <hr />
        </h3>
        <ul className="trnsaction-list">
          {transactions.map((transObj, ind) => {
            return (
              <li key={ind}>
                <span>{transObj.desc}</span>
                <span>${transObj.amount}</span>
              </li>
            );
          })}
        </ul>
        <h3>
          Add new Transaction <hr />
        </h3>
        <form className="transaction-form input" onSubmit={handleAddition}>
          <label className="label">
            Enter Description <br />
            <input
              type="text"
              value={newDesc}
              placeholder="Description"
              onChange={(ev) => setDesc(ev.target.value)}
              required
            />
          </label>

          <br />
          <label className="label">
            Enter Amount <br />
            <input
              type="Number"
              value={newAmount}
              placeholder="Amount"
              onChange={(ev) => setAmount(ev.target.value)}
              required
            />
            <input className="button" type="submit" value="Add Transaction" />
          </label>
          <br />
        </form>
      </div>
    </>
  );
}
export default Child;
