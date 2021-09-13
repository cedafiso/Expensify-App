import React from 'react';
import {connect} from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import {DateRangePicker} from 'react-dates';

class ExpenseListFilter extends React.Component{
    state = {
        focusedInput: null,
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (focusedInput) => {
        this.setState({focusedInput})
    }
    render(){
        return (
            <div>
                <input 
                type='text' 
                value={this.props.filters.text} 
                onChange={(e)=>{
                    return this.props.dispatch(setTextFilter(e.target.value))
                    }}>
    
                </input>
                <p>Sort by:</p>
                <select value={this.props.filters.sortBy} 
                        onChange={(e) => {
                            if (e.target.value === 'amount'){
                                return this.props.dispatch(sortByAmount());
                            }else if(e.target.value === 'date'){
                                return this.props.dispatch(sortByDate());
                            }
                        }}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                startDate={this.props.filters.startDate}
                startDateId='Start_Date'
                endDate={this.props.filters.endDate}
                endDateId='End_Date'
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.focusedInput}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
                />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilter);