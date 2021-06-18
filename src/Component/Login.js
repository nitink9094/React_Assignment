import React, { Component, useState } from 'react';
import { Form, Input, Row, Col, Button, Alert } from 'antd';
import { useHistory } from "react-router-dom";
import '../css/Login.css'
//https://www.youtube.com/watch?v=MqczHS3Z2bc
const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [form] = Form.useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isLoggedIn', 'Y');
      localStorage.setItem('LoggedInUser', 'admin');
      history.replace("/userList");
    }
    else {
      setError('Invalid Credentials');
    }
    // const oktaAuth = new OktaAuth({ url: baseUrl, issuer: issuer });
    // oktaAuth.signIn({ username, password })
    //   .then(res => setSessionToken(res.sessionToken))
    //   .catch(err => setError(err));
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onFinishFailed = (errorInfo) => {
    form.scrollToField(errorInfo.errorFields[0].name);
    console.log('- errorInfo :', errorInfo)
  };

  React.useEffect(() => {
    form.setFieldsValue({ username: '', password: '' });

  }, []);

  const errorAlert = error ? <Row>
    <Col span="8"></Col>
    <Col span="8">
      <Alert message="Authentication Failed" type="warning"></Alert>
    </Col>
  </Row> : ''

  return (
    <>
      <Form
        {...layout}
        onSubmit={handleSubmit}
        onFinishFailed={onFinishFailed}
        form={form}
      >

        <Row>
          <Col span="8"></Col>
          <Col span="8"><p>Please Login with your valid Credentials..</p></Col>
        </Row>

        <Form.Item
          label="Username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Login
                    </Button>
        </Form.Item>

        {errorAlert}

      </Form>
    </>
  );
}

export default Login

