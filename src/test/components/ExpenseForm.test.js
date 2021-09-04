import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../componentes/ExpenseForm';

test('Should render expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});