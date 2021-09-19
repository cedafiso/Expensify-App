import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import *  as actionsExpenses from './actions/expenses';
import *  as actionsAuth from './actions/auth';
import '../node_modules/normalize.css/normalize.css'
import './estilos/estilo.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { firebaseAuth } from './firebase/firebase';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
    }

const store = configureStore();
let hasRendered = false;

const rendererApp = () => {
    if (!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = false;
    }
};

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

);

const auth = firebaseAuth.getAuth()
firebaseAuth.onAuthStateChanged(auth, (user) => {
    if (user){
        store.dispatch(actionsAuth.logIn(user.uid));
        store.dispatch(actionsExpenses.startSetExpenses()).then(() =>{
            rendererApp();
            if (history.location.pathname === "/"){
                history.push("/dashboard")
            }
        });
    }else{
        store.dispatch(actionsAuth.logOut());
        rendererApp();
        history.push('/');
    }
});