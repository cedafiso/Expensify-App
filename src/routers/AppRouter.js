import React from 'react';
import { createBrowserHistory } from 'history';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import AddExpensePage from '../componentes/AddExpensePage';
import ExpenseDashboardPage from '../componentes/ExpenseDashboardPage';
import Error404 from '../componentes/Error404';
import EditExpensePage from '../componentes/EditExpensePage';
import LoginPage from '../componentes/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
export const history = createBrowserHistory();

const AppRouter = () =>{
    return (
        <Router history={history}>
            <div>
                    <Switch>
                        <PublicRoute path="/" component={LoginPage} exact={true}/>
                        <PrivateRoute path ="/dashboard" component={ExpenseDashboardPage} />
                        <PrivateRoute path ="/create" component={AddExpensePage}/>
                        <PrivateRoute path='/edit/:id' component={EditExpensePage} />
                        <Route component={Error404}/>
                    </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;