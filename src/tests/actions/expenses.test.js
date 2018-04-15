import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: '1234abcd'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234abcd'
  });
});

test('Should setup edit expense action object', () => {
  const action = editExpense( '1234abcd', {note: 'new note added'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1234abcd',
    updates: {
      note: 'new note added'
    }
  })
});

test('Should add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent Bill',
    amount: 2343300,
    createdAt: 1000,
    note: 'August Month charges and Rent payment'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expenses: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('Should add expense action object with default values', () => {
  const defaultData = {
    description : '',
    note : '',
    amount : 0,
    createdAt : 0
  }
  const action = addExpense(defaultData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expenses: {
      ...defaultData,
      id: expect.any(String)
    } 
  })
});