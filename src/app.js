import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import *  as actionsExpenses from './actions/expenses';
import * as actionsFilters from './actions/filters';
import expenses from './selectors/expenses';
import './estilos/base/_setting.scss';
import '../node_modules/normalize.css/normalize.css'
import './estilos/estilo.scss';

const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = expenses(state.expenses , state.filters)
    console.log(visibleExpenses);
});

store.dispatch(actionsExpenses.addExpense({description: 'Water bill', amount: '1000'}));
store.dispatch(actionsExpenses.addExpense({description: 'Gas bill', amount: '200'}));
store.dispatch(actionsFilters.setTextFilter('Water'));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

);
ReactDOM.render(jsx, document.getElementById('app'))