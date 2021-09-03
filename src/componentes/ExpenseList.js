import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import visibleExpenses from '../selectors/expenses';


export const ExpenseList = (props) => {
    return (
        <div>
            <h1>Expense List:</h1>
            {
                props.expenses.length === 0 && <p>Empty</p>
            }
            {props.expenses.map((item) => {
                return (<ExpenseListItem
                    key={item.id}
                    {...item}

                />)
            })}
        </div>
    )
};

const ConnectedExpenseList = connect()

const mapStateToProps = (state) => {
    return {
        expenses : visibleExpenses(state.expenses , state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);