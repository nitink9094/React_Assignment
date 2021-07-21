import React from "react";
import Enzyme, {shallow} from "enzyme";
import {Alert } from "antd";
import User from "../Component/Users";

import { MailOutlined, PhoneOutlined, DeleteOutlined, GlobalOutlined,
    HeartOutlined, EditOutlined, HeartFilled
   } from '@ant-design/icons';

const deleteUser = jest.fn();
const updateUser = jest.fn();
const userData =  {
      id: 2, name: 'aaa bbb', username: 'aaa', email: 'aaa@april.biz', phone: '2222', website: 'aaa.org',
    }

describe("<User />", () => {
  let wrapper;
  // const setState = jest.fn();
  // const useStateSpy = jest.spyOn(React, "useState")
  // useStateSpy.mockImplementation((init) => [init, setState]);
  afterEach(() => {
    jest.clearAllMocks();
  });
  beforeEach(() => {
    wrapper = Enzyme.shallow(<User user={userData} deleteUser={deleteUser} updateUser={updateUser}/>);
  });
  it("renders <User /> components with img control", () => {
      console.debug(wrapper);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders <User /> components with username field in modal", () => {
    const usernameInput = wrapper.find('[label="name"]');
    expect(usernameInput).toHaveLength(1);
    //expect(usernameInput.text()).toBe('aaa bbb');
  });

  it("renders <User /> components with emailInput field in modal", () => {
    const emailInput = wrapper.find('[label="Email"]');
    expect(emailInput).toHaveLength(1);
  });

  it("renders <Login /> components with Phone Input in modal", () => {
    const phoneElement = wrapper.find('[label="Phone"]');
    expect(phoneElement).toHaveLength(1);
  });

  it("renders <Login /> components with Website Input in modal", () => {
    const websitenElement = wrapper.find('[label="Website"]');
    expect(websitenElement).toHaveLength(1);
  });
  it("renders <User /> components with name in h3 tag.", () => {
    const usernameInput = wrapper.find('h3');
    expect(usernameInput).toHaveLength(1);
    expect(usernameInput.text()).toBe('aaa bbb');
  });
  it("renders <User /> components with email field value.", () => {
    const usernameInput = wrapper.find('p').at(0);
    expect(usernameInput).toHaveLength(1);
    expect(usernameInput.text()).toBe('aaa@april.biz');
  });
  it("renders <User /> components with phone field value.", () => {
    const usernameInput = wrapper.find('p').at(1);
    expect(usernameInput).toHaveLength(1);
    expect(usernameInput.text()).toBe('2222');
  });
  it("renders <User /> components with website field value.", () => {
    const usernameInput = wrapper.find('p').at(2);
    expect(usernameInput).toHaveLength(1);
    expect(usernameInput.text()).toBe('http://aaa.org');
  });

});
