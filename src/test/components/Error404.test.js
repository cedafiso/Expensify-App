import React from 'react';
import {shallow} from 'enzyme';
import Error404 from '../../componentes/Error404';

test('It should render the not found page correctly', () => {
    const wrapper = shallow(<Error404 />);
    expect(wrapper).toMatchSnapshot();
});