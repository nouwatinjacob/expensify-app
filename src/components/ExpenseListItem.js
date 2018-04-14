import React from 'react';
import { Link } from 'react-router-dom';

const ExpensesListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
    <p>{description}</p>
    </Link>
    <p>{amount}</p>
         
  </div>
);

export default ExpensesListItem;