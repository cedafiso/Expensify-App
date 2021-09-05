import React from 'react';
import {connect} from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const ExpenseListItem = ({description , amount, createdAt, id, dispatch}) => {
    return(
        <div>
            <p>Descriptiooooon: {description}</p>
            <p>Amount:{amount}</p>
            <p>Create at: {moment(createdAt).format("dddd, MMMM Do YYYY")}</p>
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