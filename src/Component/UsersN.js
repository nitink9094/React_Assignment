import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Modal, Form, Input } from 'antd';
import { MailOutlined, PhoneOutlined, DeleteOutlined, GlobalOutlined,
  HeartOutlined, EditOutlined, HeartFilled
 } from '@ant-design/icons';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

class UserN extends Component {
  state = {
    liked: false,
    editModalVisible: false,
  };

  toggleLiked = () => {
    this.setState((prevState) => ({
      liked: !prevState.liked,
    }));
  };

  handleOk = () => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.updateUser(this.props.user.id, values);
        this.closeModal();
      }
    });
  };

  closeModal = () => {
    this.setState({
      editModalVisible: false,
    });
  };

  openModal = () => {
    console.log('---- editModalVisible :',this.state.editModalVisible);
    this.setState({
      editModalVisible: true,
    });
  };

  render() {
    const { user, deleteUser } = this.props;
    //const { getFieldDecorator } = this.props.form;
    const { liked, editModalVisible } = this.state;

    return (
      <Fragment>
        <Modal title="Basic Modal" visible={editModalVisible} onOk={this.handleOk} onCancel={this.closeModal}>
          <Form {...formItemLayout} >
            <Form.Item label="Name" name={['user','name']} rules={[{ required: true,  message: 'This field is required', }]}>
              <Input />
            </Form.Item>
            {/* <Form.Item label="Email" name="user.email" rules={[
              { required: true,  message: 'This field is required', },
              { type: 'email', message: 'Invalid email',},]}>
              <Input />
            </Form.Item>
            <Form.Item label="Phone" name="user.phone" rules={[{ required: true,  message: 'This field is required', }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Website" name="user.website" rules={[{ required: true,  message: 'This field is required', }]}>
              <Input />
            </Form.Item> */}
          </Form>
        </Modal>
        <Card
          style={{ margin: 15 }}
          cover={
            <div className="cardHeadImage">
              <img
                src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
                alt="Avatar"
                style={{ width: 200, height: 200 }}
              />
            </div>
          }
          actions={[
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
              onClick={this.toggleLiked}
            >
             { liked ? <HeartFilled style={{ fontSize: 18 }}/> : <HeartOutlined /> }
            </button>,
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
              onClick={this.openModal}
            >
              <EditOutlined style={{ fontSize: 18 }} />
            </button>,
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
              onClick={() => {
                deleteUser(user.id);
              }}
            >
            <DeleteOutlined theme="filled" style={{ fontSize: 18 }} />
            </button>,
          ]}
        >
          <h3>{user.name}</h3>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <MailOutlined style={{ fontSize: '18px' }} />
            <p style={{ marginLeft: 10 }}>{user.email}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <PhoneOutlined style={{ fontSize: '18px' }} />
            <p style={{ marginLeft: 10 }}>{user.phone}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <GlobalOutlined style={{ fontSize: '18px' }} />
            <p style={{ marginLeft: 10 }}>http://{user.website}</p>
          </div>
        </Card>
      </Fragment>
    );
  }
}

UserN.propTypes = {
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default UserN;