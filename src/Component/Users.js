import React, { Component, Fragment, useState } from 'react';
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

const User = ({user, deleteUser, updateUser}) =>{
  const [form] = Form.useForm();
  const [liked, setLiked] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);

  // state = {
  //   liked: false,
  //   editModalVisible: false
  // };

 const toggleLiked = () => {
   setLiked(!liked);
  };

  const onFinishFailed = (errorInfo) => {
    form.scrollToField(errorInfo.errorFields[0].name);
  };

  const onFinish = (values) => {
    updateUser(user.id, values);
    form.resetFields();
    closeModal();
  };

 const handleOk = (errorFields) => {
   console.log('---- errorFields :', form.getFieldsError());
  };

  const closeModal = () => {
    setEditModalVisible(false);
  };

  const openModal = () => {
    console.log('------ user :', user);
    setEditModalVisible(true);
  };

  React.useEffect(() => {
    if (editModalVisible) {
      form.setFieldsValue({ user : user  });
    }
  }, [editModalVisible]);

  // componentDidMount() {
  //   console.log('--------this.formRef.current :', form);
  //   this.formRef.current.setFieldsValue({
  //     name: this.props.user.name,
  //     email: this.props.user.email,
  //     phone: this.props.user.phone,
  //     website: this.props.user.website,
  //   });
  // }
  
  //render() {
    //const { user, deleteUser } = this.props;
    //const { getFieldDecorator } = this.props.form;
    //const { liked, editModalVisible } = this.state;

    return (
      <Fragment>
        <Modal title="Basic Modal" visible={editModalVisible} onOk={form.submit} onCancel={closeModal}>
          
          <Form {...formItemLayout} form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item label="name" name={['user','name']} rules={[{ required: true,  message: 'This field is required', }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Email" name={['user','email']} rules={[
              { required: true,  message: 'This field is required', },
              { type: 'email', message: 'Invalid email',},]}>
              <Input />
            </Form.Item>
            <Form.Item label="Phone" name={['user','phone']} rules={[{ required: true,  message: 'This field is required', }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Website" name={['user','website']} rules={[{ required: true,  message: 'This field is required', }]}>
              <Input />
            </Form.Item>
          </Form>
        </Modal>
        <Card
          style={{ margin: 15 }}
          cover={
            <div className="cardHeadImage">
              <img
                src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy`}
                alt="Avatar"
                style={{ width: 200, height: 200 }}
              />
            </div>
          }
          actions={[
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
              onClick={toggleLiked}
            >
             { liked ? <HeartFilled style={{ fontSize: 18, color:'red' }}/> : <HeartOutlined/> }
            </button>,
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
              onClick={openModal}
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
//}

User.propTypes = {
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default User;