import React from 'react';
import {connect} from 'react-redux';
import { startRemoveExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({description , amount, createdAt, id, dispatch}) => {
    return(
        <div>
            <p>Description: {description}</p>
            <p>Amount: {numeral(amount/100).format('$0,0.00')}</p>
            <p>Created at: {moment(createdAt).format("MMMM Do, YYYY")}</p>
            <button onClick={(e) => {
                return dispatch(startRemoveExpense({id}))}}>
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