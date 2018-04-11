import React from 'react';
import {NavLink} from 'react-router-dom';
import ExpenseDashboardPage from './ExpenseDashboardPage';
import AddExpensePage from './AddExpensePage';
import EditExpensePage from './EditExpensePage';

const Header = () => (
    <div>
        <h2>Expensify</h2>
        <NavLink to="/" activeClassName="active" exact={true}>Dashboard</NavLink>
        <NavLink to="/addExpense" activeClassName="active">AddExpense</NavLink>
        <NavLink to="/editExpense" activeClassName="active">EditExpense</NavLink>
    </div>
);

export default Header;