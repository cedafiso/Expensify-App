import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboardPage from '../../componentes/ExpenseDashboardPage';

test('It should render the expense dashboard page correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage/>);
    expect(wrapper).toMatchSnapshot();
});