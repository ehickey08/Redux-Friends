import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import {attemptLogin} from '../actions'

class NormalLoginForm extends React.Component {
  state = {
      credentials: {
          username: '',
          password: ''
      }
  }
  componentDidMount() {
      if(localStorage.getItem("token"))
        this.props.history.push("/friends")
  }
  
    handleSubmit = e => {
        e.preventDefault();
        this.props.attemptLogin(this.state.credentials)
            .then((res) => {
                if(res)
                    this.props.history.push("/friends")
            })
  };

  handleChanges = e => {
      this.setState({
          credentials: {
              ...this.state.credentials,
              [e.target.name]: e.target.value
          }
      })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!', setFieldsValue: this.state.username}],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              onChange = {this.handleChanges}
              name = "username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!', setFieldsValue: this.state.password }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              onChange = {this.handleChanges}
              name = "password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    attemptLogin
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
