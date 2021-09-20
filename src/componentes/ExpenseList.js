import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import visibleExpenses from '../selectors/expenses';


export const ExpenseList = (props) => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            <div className="list-body">
                {
                    props.expenses.length === 0 && 
                    (
                        <div className="list-item list-item--message">
                            <p>
                                No expenses
                            </p>
                        </div>
                    )
                }
                {props.expenses.map((item) => {
                    return (<ExpenseListItem
                        key={item.id}
                        {...item}

                    />)
                })}
            </div>
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