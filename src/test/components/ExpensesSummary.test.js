import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../componentes/ExpensesSummary';

test('Should correctly render Expenses Summary with 1 Expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>)
    expect(wrapper).toMatchSnapshot();

});

test('Should correctly render Expenses Summary with multiples Expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={20} expensesTotal={2305}/>)
    expect(wrapper).toMatchSnapshot();

});