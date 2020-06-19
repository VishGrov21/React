import React from 'react';
import { BurgerBuilder } from './BurgerBuilder';
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
configure({ adapter: new Adapter() })

describe('Testing BurgerBuilder container', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder setIngredientHandler={() => { }} />)
    })

    it('should render build controls', () => {
        wrapper.setProps({ ingredients: { cheese: 1 } })
        expect(wrapper.find(BuildControls)).toHaveLength(1)
    })
})
