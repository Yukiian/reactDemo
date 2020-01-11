import React, { Component } from 'react';
import 'antd/dist/antd.css'
import './index.less'
import {List,Avatar,Button} from 'antd'

class Userlist extends Component {
    constructor(props) {
        super(props);
        this.state = { }
        this.clickName=this.clickName.bind(this);
    }
    render() {
        const {userList} =this.props; 
        return (<div>
            <List
            dataSource={userList}
            renderItem={item=>(
                <List.Item>
                    <List.Item.Meta 
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<Button type="link" onClick={()=>{this.clickName(item)}}>{item.name}</Button>}
                    description={item.email}
                    />
                </List.Item>
            )}
            />
        </div>);
    };
    clickName(item){
        this.props.clickName(item.name)
    }
}
 
export default Userlist;