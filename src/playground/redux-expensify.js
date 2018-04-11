import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// Add Expense
const addExpense = ({ 
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
}) ;

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    default:
      return state;
  }
};

// Filter Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store Creation

const store = createStore(
  combineReducers({
    expense: expensesReducer,
    filter: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addExpense({description: 'Rent', amount: 100}));

const demoState = {
  expense: [{
    id:'ewdwdsdsefeybbdfbjk',
    description: 'January Rent',
    note: 'This was the final payment for the address',
    amount: 54500,
    createdAt: 0
  }],
  filter: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};