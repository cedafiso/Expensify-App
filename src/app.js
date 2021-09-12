import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import *  as actionsExpenses from './actions/expenses';
import '../node_modules/normalize.css/normalize.css'
import './estilos/estilo.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
    }

const store = configureStore();

store.dispatch(actionsExpenses.addExpense({description: 'Water bill', amount: '1000'}));
store.dispatch(actionsExpenses.addExpense({description: 'Gas bill', amount: '200'}));
store.dispatch(actionsExpenses.addExpense({description: 'Rent', amount: '100000', createdAt: 1000}));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

);
ReactDOM.render(jsx, document.getElementById('app'))