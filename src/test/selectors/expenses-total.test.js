import { exportAllDeclaration } from '@babel/types';
import selectExpensesTotal from '../../selectors/expenses-total';
import { state } from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('Should return the total of a singles value', () => {
    const res = selectExpensesTotal([state[0]])
    expect(res).toBe(state[0].amount);
});

test('Should return the total of multiples values', () => {
    const res = selectExpensesTotal([state[0], state[1]])
    expect(res).toBe(state[0].amount + state[1].amount);
});