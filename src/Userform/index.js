import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.less'
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import {getStorage} from '../utils/storage'

class Userform extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            },
        };
        return (
            <div className={'userForm'}>
                <Form {...formItemLayout} onSubmit={this.handleSubmit} >
                    <Form.Item label="用户名：">
                        {
                            getFieldDecorator('userName', {
                                rules: [{ required: false, message: 'please input your username!' }]
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder='Username'
                                    ref={(input)=>this.userNameInput=input}
                                />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="评论内容：">
                        {
                            getFieldDecorator('content', {
                                rules: [{ required: false, message: 'please input your content!' }]
                            })(
                                <Input.TextArea
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder='content'
                                    rows={4}
                                />
                            )
                        }
                    </Form.Item>
                    <Row>
                        <Col span={24} style={{textAlign:'right'}}>
                            <Button type="primary" onClick={this.props.release}>发布</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    };
    componentWillMount(){
        let userName = getStorage("userName")
        this.props.form.getFieldDecorator('userName',{initialValue:userName})
    }

    componentDidMount(){
        this.userNameInput.focus()
    }
}

const WrappedNormalUserForm = Form.create({ name: 'normal_login' })(Userform);
export default WrappedNormalUserForm;