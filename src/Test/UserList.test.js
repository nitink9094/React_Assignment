import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import {Alert } from "antd";
import UserList from "../Component/UserList";
import User from "../Component/Users";
import axios from "axios";
import enableHooks from 'jest-react-hooks-shallow';

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("axios");
// pass an instance of jest to `enableHooks()`
enableHooks(jest);
const mockResponseData = [
    {
      id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', phone: '1111', website: 'hildegard.org',
    },
    {
      id: 2, name: 'aaa bbb', username: 'aaa', email: 'aaa@april.biz', phone: '2222', website: 'aaa.org',
    },
  ]

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
describe("<UserList />", () => {
    let wrapper;
    let users;
    afterEach(() => {
      jest.clearAllMocks();
    });
    beforeEach(() => {
      wrapper = Enzyme.shallow(<UserList />);
      global.localStorage = jest.fn().mockImplementation(() => {
        return {
            getItem: jest.fn().mockReturnValue(token)
        }
    });
      //wrapper = Enzyme.mount(Enzyme.shallow(<Login />).get(0))
    });
    it("renders <UserList /> components with user list", () => {
      axios.post.mockImplementationOnce(() => Promise.resolve(result));
        // React.useState = setHookState({
        //     users: mockResponseData,
        //     isLoading: false
        // })
        // setTimeout(()=>{
        //     expect(users.length).toBe(0);
        //     console.log(wrapper.debug()); 
        // },2000);
    });
    

});