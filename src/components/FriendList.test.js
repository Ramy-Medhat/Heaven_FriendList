import React from 'react';
import FriendList from './SelectGender';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});

describe('<FriendList />', () => {
    it('should render FriendList component', () => {
        const wrapper = shallow(<FriendList />);
        expect(wrapper.find('p').text()).toBe('there is no friends');
    });
});