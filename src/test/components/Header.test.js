import React from 'react';
import Header from '../../componentes/Header';
import {shallow} from 'enzyme';
import { expect } from '@jest/globals';

test('Should render Header' , () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find('h1').text()).toBe('Expensify-App');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // console.log(renderer.getRenderOutput());
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});