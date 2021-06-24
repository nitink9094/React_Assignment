import React from 'react';
import Enzyme, { render, shallow  } from 'enzyme';
import Login from '../Component/Login'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<Login />', () => {
    it('renders <Login /> components with Input control', () => {
      //const wrapper = shallow(<Login />);
      const component = shallow(<Login />);
      const form = component.find('Username');
     
      expect(component.state('input')).toBeDefined();
      //expect(wrapper.find('[name="Username"]')).toBe(1);
    });
  
  });
