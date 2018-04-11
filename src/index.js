import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import AddExpensePage from './components/AddExpensePage';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(addExpense({description: 'Water bill'}));
store.dispatch(addExpense({description: 'Gas bill'}));

store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));


ReactDOM.render(<AppRouter />, document.getElementById("index"));