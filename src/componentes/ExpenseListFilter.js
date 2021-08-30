import React from 'react';
import {connect} from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilter = (props) => {
    return (
        <div>
            <input 
            type='text' 
            value={props.filters.text} 
            onChange={(e)=>{
                return props.dispatch(setTextFilter(e.target.value))
                }}>

            </input>
            <p>Sort by:</p>
            <select value={props.filters.sortBy} 
                    onChange={(e) => {
                        if (e.target.value === 'amount'){
                            return props.dispatch(sortByAmount());
                        }else if(e.target.value === 'date'){
                            return props.dispatch(sortByDate());
                        }
                    }}>
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
            </select>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilter);