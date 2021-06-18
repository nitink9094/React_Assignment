import React, { useState } from 'react';
import { Form, Input, Row, Col, Button, Alert } from 'antd';
import { useHistory } from "react-router-dom";
import '../css/Login.css'
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
      fetch(`http://localhost:3001/jwt/${username}`)
        .then(res => res.json())
        .then(
          (result) => {
            localStorage.setItem('token', result.token);
            history.replace("/userList");
          },
          (error) => {
            setError('Invalid Credentials');
          }
        )
      
    }
    else {
      setError('Please enter valid Credentials');
    }
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
    setError(errorInfo.errorFields[0].name);
    console.log('- errorInfo :', errorInfo)
  };

  React.useEffect(() => {
    form.setFieldsValue({ username: '', password: '' });

  }, []);

  const errorAlert = error ? <Row>
    <Col span="8"></Col>
    <Col span="8">
      <Alert message={error} type="warning"></Alert>
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

