import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses';

const AddExpensePage = (props) => {
    return (
        <div>
            <p>Expensify-App-Add</p>
            <ExpenseForm 
            onSubmit={(expenses) => {
                props.dispatch(startAddExpense(expenses));
                props.history.push('/');
            }}
            />
        </div>
    );
}

export default connect()(AddExpensePage);