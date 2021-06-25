import React from 'react';
import Enzyme, { render, shallow  } from 'enzyme';
import Login from '../Component/Login'
import Adapter from "enzyme-adapter-react-17-updated";

Enzyme.configure({ adapter: new Adapter() })

describe('<Login />', () => {
    it('renders <Login /> components with Input control', () => {     
      const component = shallow(<Login />);
      expect(component.find('#login')).toHaveLength(1);
    });
  
  });
