import { expect } from '@jest/globals';
import { exp } from 'prelude-ls';
import { experiments } from 'webpack';
import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('Should setur remove expense' , () => {
    const action = removeExpense({ id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
})

test('Should setup edit expense', () => {
    const action = editExpense('123abc' , { description: 'rent'});
    expect(action).toEqual({
        type:'EDIT',
        id: '123abc',
        updates: { description: 'rent'}
    })
}); 

test('Should setup add an expense with default values', () => {
    const action = addExpense();
    expect(action).toEqual({ 
        type: 'ADD_EXPENSE',
        expense: {
        description : '', 
        note : '', 
        amount : 0, 
        createdAt : 0,
        id: expect.any(String)
        }
    });
});

test('Should setup add an expense with value', () => {
    const action = addExpense({
        description: 'rent',
        amount: 1500,
        note: 'apt',
        createdAt: 1000
    });
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            description: 'rent',
            amount: 1500,
            note: 'apt',
            createdAt: 1000,
            id: expect.any(String)
        }
    });
});