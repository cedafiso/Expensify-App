import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {editExpense} from '../actions/expenses';
import {useParams} from 'react-router-dom';

const EditExpensePage = (props) => {
    console.log(props.expenses);
    return (
        <div>
            <p>Expensify-App-Edit {props.match.params.id}</p>
            <ExpenseForm
                expense={props.expenses}
                onSubmit={(expenses) => {
                props.dispatch(editExpense(props.match.params.id, expenses));
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