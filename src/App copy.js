import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import User from './Component/Users';
import UserN from './Component/UsersN';
import Login from './Component/Login';
import Header from './Component/Header';

class App extends Component {
  state = {
    users: [],
  };

componentDidMount() {
  setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            users: result,
          });
        },
        (error) => {
          console.log(error);
        }
      )
    }, 2000);
}

  deleteUser = (id) => {
    this.setState((prevState) => ({
      users: prevState.users.filter((entry) => entry.id !== id),
    }));
  };

  updateUser = (id, data) => {
    this.setState((prevState) => ({
      users: prevState.users.map((entry) => {
        if (entry.id === id) return { ...entry, ...data.user };
        return entry;
      }),
    }));
  };

  render() {
    const { users } = this.state;
    console.log('------- uesrs :', users);
    if (users.length === 0) {
      return (
        <div>
          <div className="spinner">
            <div className="bounce1" />
            <div className="bounce2" />
            <div className="bounce3" />
          </div>
        </div>
      );
    }

    return (
      <>

        <Header></Header>
        <Login></Login>
        <Row>
          {
            users.map((user) => (
              <Col xs={24} sm={24} md={8} lg={8} xl={6} key={user.username}>
                <User user={user} deleteUser={this.deleteUser} updateUser={this.updateUser} />
                {/* <UserN user={user} deleteUser={this.deleteUser} updateUser={this.updateUser} /> */}
              </Col>
            ))
          }
        </Row>
      </>
    );
  }
}

{/* <Form {...formItemLayout} form={this.formRef} 
          // initialValues={{
          //   name: ['user', 'name'], email: ['user', 'email'], phone: ['user', 'phone'], website: ['user', 'website'],
          //   //name: ['user', 'name'], email: user.email, phone: user.phone, website: user.website,
          // }}
          >
            <Form.Item label="Name" rules={[{ required: true, message: 'This field is required', }]}>
              <Input name={['user', 'name']} />
            </Form.Item>
            <Form.Item label="Email"  rules={[
              { required: true, message: 'This field is required', },
              { type: 'email', message: 'Invalid email', },]}>
              <Input name={['user', 'email']} />
            </Form.Item>
            <Form.Item label="Phone" name={['user', 'phone']} rules={[{ required: true, message: 'This field is required', }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Website" name={['user', 'website']} rules={[{ required: true, message: 'This field is required', }]}>
              <Input />
            </Form.Item>
          </Form> */}
export default App;
