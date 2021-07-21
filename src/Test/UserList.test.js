import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import {Alert } from "antd";
import UserList from "../Component/UserList";
import User from "../Component/Users";
import axios from "axios";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

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

describe("<UserList />", () => {
    let wrapper;
    let users;
    afterEach(() => {
      jest.clearAllMocks();
    });
    beforeEach(() => {
      wrapper = Enzyme.shallow(<UserList />);
      //wrapper = Enzyme.mount(Enzyme.shallow(<Login />).get(0))
    });
    it("renders <UserList /> components with user list", () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => mockResponseData
          });
        React.useState = setHookState({
            users: mockResponseData,
            isLoading: false
        })
        // setTimeout(()=>{
        //     expect(users.length).toBe(0);
        //     console.log(wrapper.debug()); 
        // },2000);
    });
    

});