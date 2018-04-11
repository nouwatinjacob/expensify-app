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
});

const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id );
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

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 500}));

store.dispatch(removeExpense({id: expenseOne.expense.id}));


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