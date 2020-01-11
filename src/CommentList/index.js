import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.less'
import {List} from 'antd'
import propTypes from 'prop-types'
import timeAgo from '../utils/timeAgo'

class CommentList extends Component {
    static propTypes={
        list:propTypes.array
    }
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {list} =this.props;
        return ( 
            <div style={{width:'350px'}}>
                <List
                bordered
                dataSource={list}
                renderItem={(item,index)=>(
                    <List.Item style={{display:"block",position:"relative"}} className="comment">
                        <div style={{display:'flex',alignItems:"initial"}}>
                            <span style={{color:"#44A9DA",whiteSpace:"nowrap",float:"left"}}>{item.userName}：</span>
                            <span className="comment-content">{item.content}</span>
                            <span className="comment-delate" onClick={()=>(this.delate(index))}>删除</span>
                        </div>
                        <div style={{textAlign:"right",color:"black",marginTop:'5px'}}>
                          {timeAgo(item.time)}
                        </div>
                    </List.Item>
                )}
                />
            </div>
         );
    };
    delate(index){ //删除
       this.props.delate(index);
    }
}
 
export default CommentList;