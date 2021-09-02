import expensesSelector from '../../selectors/expenses';
import moment from 'moment';
import { expect } from '@jest/globals';

const expenses = [
    {
        id: '1',
        description: 'rent',
        amount: 1000,
        note: 'apt',
        createdAt: moment().valueOf()
    },
    {
        id: '2',
        description: 'Water bill',
        amount: 8000,
        note: 'apt',
        createdAt: moment().add(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'Gas bill',
        amount: 500,
        note: 'apt',
        createdAt: moment().subtract(4, 'days').valueOf()
    }
];

test('Should return the array sort by amount', () => {
    const action = expensesSelector( expenses, {sortBy: 'amount'});
    expect(action).toEqual([expenses[1], expenses[0], expenses[2]]);
});

test('Should return the array sort by date', () => {
    const action = expensesSelector( expenses, {sortBy: 'date'});
    expect(action).toEqual([expenses[1], expenses[0], expenses[2]]);
});

test('Should return the array sort by date and fitler by text', () => {
    const action = expensesSelector( expenses, {sortBy: 'date', text:'ent'});
    expect(action).toEqual([expenses[0]]);
});

test('Should return the array sort by date and fitler by text', () => {
    const action = expensesSelector( expenses, {sortBy: 'date', text:'bill'});
    expect(action).toEqual([expenses[1], expenses[2]]);
});

test('Should return the array sort by date date, filter by text and in range of date', () => {
    const action = expensesSelector( expenses, {sortBy: 'date', text:'bill', startDate: moment()});
    expect(action).toEqual([expenses[1]]);
});