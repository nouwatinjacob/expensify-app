import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpensesListItem = ({dispatch, id, description, amount, createdAt}) => (
  <div>
    <p>{description}</p>
    <p>{amount}</p>
    <button
      onClick={() => {
        dispatch(removeExpense({id}));
      }}
    >remove</button>     
  </div>
);

export default connect()(ExpensesListItem);