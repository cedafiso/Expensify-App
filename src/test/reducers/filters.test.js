import { expect } from '@jest/globals';
import filtersReducer from '../../reducers/filters';
import moment from 'moment';

const date = moment().add(4, 'days');
test('Should initialize store with default values', () =>{
    const action = filtersReducer( undefined, {type: '@@INIT'});
    expect(action).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
})

test('Should set sort by amount', () =>{
    const action = filtersReducer( undefined, {type: 'SORT_BY_AMOUNT'});
    expect(action.sortBy).toBe('amount');
})

test('Should iset sort by date', () =>{
    const action = filtersReducer( undefined, {type: 'SORT_BY_DATE'});
    expect(action.sortBy).toBe('date');
})

test('Should set text for filter', () =>{
    const action = filtersReducer( undefined, {type: 'SET_TEXT_FILTER', text: 'rent'});
    expect(action.text).toBe('rent');
})

test('Should set the start date', () =>{
    const action = filtersReducer( undefined, {type: 'SET_START_DATE', date: date});
    expect(action.startDate).toBe(date);
})

test('Should set the end date', () =>{
    const action = filtersReducer( undefined, {type: 'SET_END_DATE', date: date});
    expect(action.endDate).toBe(date);
})