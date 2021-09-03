import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListItem} from '../../componentes/ExpenseListItem';
import {state} from '../fixtures/expenses';

test('It should render an item of the item list expenses', () => {
    const wrapper = shallow(<ExpenseListItem {...state[1]} />)
    expect(wrapper).toMatchSnapshot();
});