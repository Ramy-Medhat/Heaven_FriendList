import React from 'react';
import SelectGender from './SelectGender';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});

describe('<SelectGender />', () => {
    it('should render Loader component', () => {
        const wrapper = shallow(<SelectGender />);
        expect(wrapper.find('label').length).toBe(2);
    });
});