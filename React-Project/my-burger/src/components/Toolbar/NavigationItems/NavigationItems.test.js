import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import NavigationItem from './NavigationItem/NavigationItem'
import NavigationItems from './NavigationItems';

configure({ adapter: new Adapter() })

describe('Now <NavigationItems /> component is tested', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />)
    })
    it('should render Home and Sign In if not autheniticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render Home, My Orders and Log Out if not authenticated', () => {
        wrapper.setProps({ isAuth: true })
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    })
    it('should render Home, My Orders and Log Out if not authenticated', () => {
        wrapper.setProps({ isAuth: true })
        expect(wrapper.contains(<NavigationItem link="/log-out">Logout</NavigationItem>)).toEqual(true);
    })
});