import React from "react";
import Enzyme, { shallow} from "enzyme";
import UserList from "../Component/UserList";
import axios from "axios";
import enableHooks, {withHooks}  from 'jest-react-hooks-shallow';

// import Adapter from "enzyme-adapter-react-16";

// Enzyme.configure({ adapter: new Adapter() });

const mockResponseData = { data: [
    {
      id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', phone: '1111', website: 'hildegard.org',
    },
    {
      id: 2, name: 'aaa bbb', username: 'aaa', email: 'aaa@april.biz', phone: '2222', website: 'aaa.org',
    },
  ]
}

 const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

const token ='aaaaaaakjdfsakdfkjasdfaaaa'
const deleteUser = jest.fn();
const updateUser = jest.fn();
jest.mock('axios');
const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
describe("<UserList />", () => {
    let wrapper;
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };
    afterEach(() => {
      jest.clearAllMocks();
    });
    beforeEach(() => {
      useEffect = jest.spyOn(React, "useEffect");
      mockUseEffect();
      global.localStorage = jest.fn().mockImplementation(() => {
        return {
              getItem: jest.fn().mockReturnValue(token)
          }        
      });
      wrapper = shallow(<UserList />);
      //wrapper = Enzyme.mount(Enzyme.shallow(<Login />).get(0))
    });
  it("renders <UserList /> components with user list", () => {
    axios.get.mockImplementationOnce(() => Promise.reject(mockResponseData));
  });
});