import React from "react";
import Enzyme, { render, shallow, mount } from "enzyme";
import { Form, Input, Row, Col, Button, Alert } from "antd";
import Login from "../Component/Login";
import axios from "axios";

import Adapter from "enzyme-adapter-react-17-updated";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("axios");

describe("<Login />", () => {
  let wrapper;
  // const setState = jest.fn();
  // const useStateSpy = jest.spyOn(React, "useState")
  // useStateSpy.mockImplementation((init) => [init, setState]);
  afterEach(() => {
    jest.clearAllMocks();
  });
  beforeEach(() => {
    wrapper = Enzyme.shallow(<Login />);
    //wrapper = Enzyme.mount(Enzyme.shallow(<Login />).get(0))
  });
  it("renders <Login /> components with Form control", () => {
    expect(wrapper.find("#login")).toHaveLength(1);
  });

  it("renders <Login /> components with button", () => {
    const buttonElement = wrapper.find('[type="primary"]');
    expect(buttonElement).toHaveLength(1);
  });

  it("renders <Login /> components with button", () => {
    const buttonElement = wrapper.find('[htmlType="submit"]');
    expect(buttonElement).toHaveLength(1);
  });

  it("renders <Login /> components with username input change", () => {
    // const username = wrapper.find('[label="Username"]').at(0);
    // username.value = "admin";
    // username.simulate("change", { target: { value: 'test' } });
    // expect(setState).toHaveBeenCalledWith("admin");
    // wrapper.find('[label="Username"]').prop('onChange')
    // ({ target: { value: 'admin' } });
    wrapper
      .find('[label="Username"]')
      .simulate("change", { target: { value: "admin" } });
  });

  it("renders <Login /> components with Password input change", () => {
    wrapper
      .find('[label="Password"]')
      .simulate("change", { target: { value: "admin" } });
  });

  it("renders <Login /> components with button click", () => {
    // wrapper
    //   .find('[label="Password"]')
    //   .simulate("change", { target: { value: "admin" } });
    // wrapper
    //   .find('[label="Username"]')
    //   .simulate("change", { target: { value: "admin" } });
    // const buttonElement = wrapper.find('[htmlType="submit"]');
    // expect(buttonElement).toHaveLength(1);
    // const preventDefault = jest.fn();
    // const result = {
    //   data: {
    //     token: "asdfasfjsdjfk",
    //   },
    // };
    // jest.spyOn(axios, "post");
    // axios.post.mockImplementationOnce(() => Promise.resolve(result));
    // buttonElement.simulate("click", { preventDefault });
    // const loginComponent = shallow(<Login />);
    // expect(loginComponent.find(<Alert />).length).toBe(0);
  });

  it("renders <Login /> components with button click - Error", async() => {
    const buttonElement = wrapper.find('[htmlType="submit"]');
    expect(buttonElement).toHaveLength(1);
    const preventDefault = jest.fn();
    const result = {};
    jest.spyOn(axios, "post");
    axios.post.mockImplementationOnce(() => Promise.reject(result));
    buttonElement.simulate("click", { preventDefault });
    await wrapper.update();
    console.log(wrapper.debug());
    expect(wrapper.find("Alert").length).toBe(1);
  });

  // it('renders <Login /> components with form submit', () => {
  //     // const fakeEvent = { preventDefault: () => console.log('preventDefault') };
  //     // wrapper.find('[type="primary"]').simulate('onClick', { preventDefault: () =>{}, target: { value: 'test' } });
  //     wrapper.find('[label="Username"]').simulate('change', { target: { value: 'admin' } });
  //     wrapper.find('[label="Password"]').simulate('change', { target: { value: 'admin' } });
  //     const fakeEvent = { preventDefault: () => {}};
  //     const loginComponent = shallow(<Login />);
  //     expect(loginComponent.find('form').length).toBe(1);
  //     loginComponent.find('form').simulate('submit', fakeEvent);
  //     expect(loginComponent.find(<Alert/>).length).toBe(0);
  // });

  it("renders <Login /> components with button Text.", () => {
    const buttonElement = wrapper.find('[htmlType="submit"]');
    expect(buttonElement.text()).toBe("Login");
  });
});
