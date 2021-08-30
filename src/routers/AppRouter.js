import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../componentes/Header';
import AddExpensePage from '../componentes/AddExpensePage';
import ExpenseDashboardPage from '../componentes/ExpenseDashboardPage';
import Error404 from '../componentes/Error404';
import EditExpensePage from '../componentes/EditExpensePage';

const AppRouter = () =>{
    return (
        <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path ="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path ="/create" component={AddExpensePage}/>
                <Route path='/edit/:id' component={EditExpensePage} />
                <Route component={Error404}/>
            </Switch>

        </div>
        </BrowserRouter>
    );
}

export default AppRouter;