import React from 'react';
import Header from '../../componentes/Header';
import {shallow} from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { expect } from '@jest/globals';

test('Should render Header' , () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').length).toBe(1);
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // console.log(renderer.getRenderOutput());
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});