import React from 'react';
import {connect} from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({description , amount, createdAt, id, dispatch}) => {
    return(
        <div>
            <p>Description: {description}</p>
            <p>Amount:{amount}</p>
            <p>Create at: {createdAt}</p>
            <button onClick={(e) => {
                return dispatch(removeExpense({id}))}}>
                Remove
            </button>
            <Link to={'/edit/'+id}>
                <button>
                Edit
                </button>
            </Link>
        </div>
    )
};



export default connect()(ExpenseListItem);