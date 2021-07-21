import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import {Alert } from "antd";
import UserList from "../Component/UserList";
import User from "../Component/Users";
import axios from "axios";
import enableHooks, {withHooks}  from 'jest-react-hooks-shallow';

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("axios");
// pass an instance of jest to `enableHooks()`
enableHooks(jest,  { dontMockByDefault: false });
const mockResponseData = { data: [
    {
      id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', phone: '1111', website: 'hildegard.org',
    },
    {
      id: 2, name: 'aaa bbb', username: 'aaa', email: 'aaa@april.biz', phone: '2222', website: 'aaa.org',
    },
  ]
}

const setHookState = (newState= {}) => jest.fn().mockImplementation((state= {}) => [
    newState,
    (newState= {}) => {}
 ])

 const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

const token ='aaaaaaakjdfsakdfkjasdfaaaa'
const deleteUser = jest.fn();
const updateUser = jest.fn();

describe("<UserList />", () => {
    let wrapper;
    let users;
    let useEffect;
    let mockUseEffect = () => {
      useEffect.mockImplementationOnce(f => f());
    };
    afterEach(() => {
      jest.clearAllMocks();
    });
    beforeEach(() => {
      useEffect = jest.spyOn(React, "useEffect");
      global.localStorage = jest.fn().mockImplementation(() => {
        return {
              getItem: jest.fn().mockReturnValue(token)
          }        
      });
      mockUseEffect();
      wrapper = shallow(<UserList />);
      //wrapper = Enzyme.mount(Enzyme.shallow(<Login />).get(0))
    });
    it("renders <UserList /> components with user list", () => {
      
        mockUseEffect();
        const component = shallow(<UserList />);
        jest.spyOn(React,'useEffect').mockImplementation(f => f());
        // your test code
        console.debug(component);
        axios.get.mockImplementationOnce(() => Promise.resolve(mockResponseData));
     
        // React.useState = setHookState({
        //     users: mockResponseData,
        //     isLoading: false
        // })
        // setTimeout(()=>{
        //     expect(users.length).toBe(0);
        //     console.log(wrapper.debug()); 
        // },2000);
    });
    // it("renders <UserList /> components with user list", () => {
    //   withHooks(() => {

    //     const component = shallow(<UserList />);
    //     // your test code
    //     console.debug(component);
    //     axios.post.mockImplementationOnce(() => Promise.resolve(mockResponseData));
    //   });
    // });
    

});