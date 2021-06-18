import React, { Component, useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import User from './Users';
import { useHistory } from "react-router-dom";
import Header from './Header';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('token')  && localStorage.getItem('token') !== '') {
      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(
            (result) => {
              setUsers(result);
            },
            (error) => {
              console.log(error);
            }
          )
      }, 2000);
    }
    else {
      history.push('/Login');
      console.log('not logged in');
    }
  }, []);

  const deleteUser = (id) => {
    setUsers(() => users.filter((entry) => entry.id !== id));
  };

  const updateUser = (id, data) => {
    console.log(' id ', id);
    //console.log(' data ', data);
    const updatedUsers = users.map((entry) => {
      if (entry.id === id) return { ...entry, ...data.user };
      return entry;
    });
    setUsers(updatedUsers);
  };
  if (users.length === 0) {
    return (
      <>
      <Header></Header>
      <div>
        <div className="spinner">
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </div>
        </div>
        </>
    );
  } else {
    console.log('--- users 111 ', users);
    return (
      <>
      <Header></Header>

      <Row>
        {

          users.map((user) => (
            <Col xs={24} sm={24} md={8} lg={8} xl={6} key={user.username}>
              <User user={user} deleteUser={deleteUser} updateUser={updateUser} />
              {/* <UserN user={user} deleteUser={this.deleteUser} updateUser={this.updateUser} /> */}
            </Col>
          ))
        }
        </Row>
        </>
    )
  };
}

export default UserList;