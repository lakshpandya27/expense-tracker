import React, { useState, useEffect } from "react";
import './style.css';

export const Calculate = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (localStorageTransactions) {
      setTransactions(localStorageTransactions);
    }
  }, []);

  const addTransaction = (text, amount) => {
    const newTransaction = {
      id: generateID(),
      text,
      amount: +amount
    };

    setTransactions([...transactions, newTransaction]);
  };

  const removeTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const generateID = () => {
    return Math.floor(Math.random() * 100000000);
  };

  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2);
  const income = transactions.filter(transaction => transaction.amount > 0).reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2);
  const expense = transactions.filter(transaction => transaction.amount < 0).reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2) * -1;

  return (
    <div className="calcont">
      <h2 className="h2">WisePay Expense Tracker</h2>
      <div className="container-c">
        <h4 className="h4">Your Balance</h4>
        <h1 id="balance">${total}</h1>
        <div className="inc-exp-container">
          <div>
            <h4 className="h4">Income</h4>
            <p id="money-plus" className="money plus">${income}</p>
          </div>
          <div>
            <h4 className="h4">Expense</h4>
            <p id="money-minus" className="money minus">${expense}</p>
          </div>
        </div>
        <h3 className="h3">History</h3>
        <ul id="list" className="list">
          {transactions.map(transaction => (
            <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
              {transaction.text} <span>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</span>
              <button className="delete-btn" onClick={() => removeTransaction(transaction.id)}>x</button>
            </li>
          ))}
        </ul>
        <h3 className="h3">Add new transaction</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          const text = e.target.text.value;
          const amount = e.target.amount.value;
          if (text.trim() !== '' && amount.trim() !== '') {
            addTransaction(text, amount);
            e.target.text.value = '';
            e.target.amount.value = '';
          } else {
            alert('Please add a text and amount');
          }
        }}>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" id="text" placeholder="Enter text..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount <br /> (negative - expense | positive - income)</label>
            <input type="number" id="amount" placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </div>
    </div>
  );
};
