import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1>Edit expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                expense={props.expenses}
                onSubmit={(expenses) => {
                props.dispatch(startEditExpense(props.match.params.id, expenses));
                props.history.push('/');
                    }
                }/>
                <button className="button button--secondary" onClick={(e) => {
                        props.dispatch(startRemoveExpense({id: props.match.params.id}));
                        props.history.push('/');
                        }}>
                        Remove
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    expenses: state.expenses.find((expense) => {
        return expense.id === props.match.params.id})
});

export default connect(mapStateToProps)(EditExpensePage);