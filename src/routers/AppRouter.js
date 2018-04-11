import React from 'react';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ExpenseDashboardPage}  exact={true}/>
          <Route path="/addExpense" component={AddExpensePage} />
          <Route path="/EditExpense" component={EditExpensePage} />
          <Route component={NotFoundPage} />
        </Switch>       
      </div>      
    </BrowserRouter>
);

export default AppRouter;