import React, {useState, useEffect} from 'react'
import {useLocalStorage} from '../hooks/useLocalStorage'
import { Form, Icon, Input, Button } from 'antd';
import {setAxiosAuthConfig, useAxios} from 'useful-react-hooks'

function NormalLoginForm (props) {
    const [token, setToken] = useLocalStorage('token', '')
    const [credentials, setCredentials] = useState({username: '', password: ''});
    const [request, value, errors, isLoading] = useAxios()
    
    useEffect(() => {
        if(token)
            props.history.push("/friends")
    }, []);

    useEffect(() => {
        if(value){
            setToken(value)
            setAxiosAuthConfig({baseURL:`http://localhost:5000/api`, timeout: 1000, headers:{ Authorization: token} })
            props.history.push('/friends')
        }
    }, [value]);
  
    const handleSubmit = e => {
        e.preventDefault();
        request.post('/login', credentials)
    };

    const handleChanges = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const { getFieldDecorator } = props.form;

    return (
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!', setFieldsValue: credentials.username}],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              onChange = {handleChanges}
              name = "username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!', setFieldsValue: credentials.password }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              onChange = {handleChanges}
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

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login
