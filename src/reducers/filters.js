import moment from 'moment';

const filtersReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return Object.assign({}, state, {text:action.text});
        case 'SORT_BY_AMOUNT':
            return Object.assign({}, state, {sortBy: 'amount'});
        case 'SORT_BY_DATE':
            return Object.assign({}, state, {sortBy: 'date'});
        case 'SET_START_DATE':
            return Object.assign({}, state, {startDate: action.date});
        case 'SET_END_DATE':
            return Object.assign({}, state, {endDate: action.date});
        default:
            return state;
    }

};

export default filtersReducer;