import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import User from './Component/Users';
import Home from './Component/Home';
import Login from './Component/Login';
import UserList from './Component/UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }
//Commit -1 
//Commit -2
componentDidMount() {
  this.setState({ loggedIn: localStorage.getItem('isLoggedIn') ? true : false });
}
render() {
    // const { users } = this.state;
    // console.log('------- uesrs :', users);
    // if (users.length === 0) {
    //   return (
    //     <div>
    //       <div className="spinner">
    //         <div className="bounce1" />
    //         <div className="bounce2" />
    //         <div className="bounce3" />
    //       </div>
    //     </div>
    //   );
    // }

    return (
      <>
        <Router>
           
          <Route exact path='/' component={Home}></Route>
          {/* <Route exact path='/home' component={Home}></Route> */}
          <Route exact path='/Login' component={Login}></Route>
          <Route exact path='/userList' component={UserList}></Route>          
        </Router>
       
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
