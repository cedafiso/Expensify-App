import { expect } from '@jest/globals';
import expenses from '../../reducers/expenses';
import {state, stateEdit} from '../fixtures/expenses';

test('Should initialize the store with default value', () => {
    const action = expenses(undefined, {type: '@@INIT'});
    expect(action).toEqual([]);
})

test('Should add an expense to the store', () => {
    const action = expenses(undefined, {
        type: 'ADD_EXPENSE',
        expense: state[1]
    });
    expect(action).toEqual([state[1]]);
});

test('Should remove a item from the state store', () => {
    const action = expenses(state, {type: 'REMOVE_EXPENSE', id:state[0].id});
    expect(action).toEqual([state[1], state[2]])
});

test('Should edit a property of an object in state store',  () => {
    const action = expenses(state, {type: 'EDIT', id:state[1].id, updates: {description: 'Agua bill'}});
    expect(action).toEqual([state[0], stateEdit[0], state[2]])
});

test('Should not edit a property of an object in state store',  () => {
    const action = expenses(state, {type: 'EDIT', id:'35', updates: {description: 'Agua bill'}});
    expect(action).toEqual([state[0], state[1], state[2]])
});