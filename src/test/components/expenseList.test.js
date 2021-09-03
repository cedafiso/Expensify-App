import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseList } from "../../componentes/ExpenseList";
import {state} from '../fixtures/expenses';

test('Should render an instance of ExpenseList', () => {
    const wrapper = shallow(<ExpenseList expenses={state}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render an instance of ExpenseList with empty sign', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});