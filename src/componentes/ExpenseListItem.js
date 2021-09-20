import React from 'react';
import {connect} from 'react-redux';
import { startRemoveExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({description , amount, createdAt, id, dispatch}) => {
    return(
        <div>
            <Link className="list-item" to={`/edit/${id}`}>
                <div>
                    <h3 className="list-item__tittle">{description}</h3>
                    <span className="list-item__subtittle">{moment(createdAt).format("MMMM Do, YYYY")}</span>
                </div>
                <h3 className="list-item__data">
                    {numeral(amount/100).format('$0,0.00')}
                </h3>
            </Link>
        </div>
    )
};



export default connect()(ExpenseListItem);