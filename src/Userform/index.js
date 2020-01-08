import React, { Component } from 'react';
import 'antd/dist/antd.css';
import styles from './index.less'
import { Form,Icon,Input,Button} from 'antd';

class Userform extends Component {
    render() { 
        const { getFieldDecorator } = this.props.form;
        return (  
            <div >
                <Form onSubmit={this.handleSubmit} className={styles.userForm}>
                    <Form.Item>
                        {
                            getFieldDecorator('userName',{
                                rules:[{required:true,message:'please input your username!'}]
                            })(
                                <Input 
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />}
                                placeholder='Username'
                                />
                            )
                        }
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedNormalUserForm = Form.create({ name: 'normal_login' })(Userform);
export default WrappedNormalUserForm;