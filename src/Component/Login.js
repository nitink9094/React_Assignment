import React, { useState } from "react";
import { Form, Input, Row, Col, Button, Alert } from "antd";
import { useHistory } from "react-router-dom";
import "../css/Login.css";
import axios from "axios";
const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const [form] = Form.useForm();
  const handleSubmit = (e) => {
    
    e.preventDefault();
    const obj = { username: username, password: password };
    axios
      .post("https://hbauth.herokuapp.com/login", {
        username: username,
        password: password,
      })
      .then(
        (result) => {
          console.log(result);
          localStorage.setItem("isLoggedIn", "Y");
          localStorage.setItem("LoggedInUser", "admin");
          localStorage.setItem("token", result.data.token);
          history.replace("/userList");
        },
        (error) => {
          setError(true);
          // console.log("I am here");          
        }
      );
    // fetch('http://localhost:3001/login', {
    //   method: 'POST',
    //   body: JSON.stringify(obj),
    //   headers: {"Content-type": "application/json;"}
    // })
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       localStorage.setItem('isLoggedIn', 'Y');
    //       localStorage.setItem('LoggedInUser', 'admin');
    //       localStorage.setItem('token', result.token);
    //       history.replace("/userList");
    //     },
    //     (error) => {
    //       console.log('----error : ',error);
    //       setError('Invalid Credentials');
    //     }
    //   )
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
    console.log("- errorInfo :", errorInfo);
  };
  React.useEffect(() => {
    form.setFieldsValue({ username: "", password: "" });
  }, []);
  const errorAlert = error ? (
    <Row>
      <Col span='8'></Col>
      <Col span='8' className='errorText'>
        <Alert message={error} type='warning'></Alert>
      </Col>
    </Row>
  ) : (
    ""
  );
  return (
    <>
      <Form
        {...layout}
        onSubmit={handleSubmit}
        onFinishFailed={onFinishFailed}
        form={form}
        id='login'>
        <Row>
          <Col span='8'></Col>
          <Col span='8'>
            <p>Please Login with your valid Credentials..</p>
          </Col>
        </Row>
        <Form.Item
          label='Username'
          name='username'
          value={username}
          onChange={handleUsernameChange}
          rules={[{ required: true, message: "Please input your username!" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label='Password'
          name='password'
          value={password}
          onChange={handlePasswordChange}
          rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit' onClick={handleSubmit}>
            Login
          </Button>
        </Form.Item>
        {errorAlert}
      </Form>
    </>
  );
};
export default Login;
