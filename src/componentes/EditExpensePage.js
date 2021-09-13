import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startEditExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <p>Expensify-App-Edit</p>
            <ExpenseForm
                expense={props.expenses}
                onSubmit={(expenses) => {
                props.dispatch(startEditExpense(props.match.params.id, expenses));
                props.history.push('/');
            }
                }/>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    expenses: state.expenses.find((expense) => {
        return expense.id === props.match.params.id})
});

export default connect(mapStateToProps)(EditExpensePage);