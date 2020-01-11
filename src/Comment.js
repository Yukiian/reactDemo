import React, { Component } from 'react';
import Userform from './Userform/index';
import CommentList from './CommentList/index'
import  './Comment.less'
import {getStorage,setStorage} from './utils/storage'

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:"",
            content:"",
            commitTime:"",
            list:[]
          };
          this.release=this.release.bind(this);
          this.delate=this.delate.bind(this);
    }
    render() { 
        return ( 
            <div className={'wrapper'}>
                <div><Userform  ref="userForm"  release={this.release} userName={this.state.userName}/></div>
                <div style={{marginTop:"10px"}}><CommentList timeChangeList={this.state.timeChangeList} list={this.state.list} delate={this.delate}/></div>
            </div>
         );
    };
    componentWillMount (){
       var list = getStorage("list");
       if(list){
           this.setState({list:JSON.parse(list)})
       }
       setInterval(() => {
           const {userName,content,commitTime,list} = this.state;
           this.setState({
            userName,content,commitTime,list
           })
       }, 5000);
    }
    

    userNameChange(e) {
        this.setState({
            userName:e.target.value
        })
    };
    contentChnage(e) {
        this.setState({
            content:e.target.value
        })
    };
    release(e){
        e.preventDefault();
        const form = this.refs.userForm;
        form.validateFields((err,values)=>{
            if(!err){
                var list = [...this.state.list,{userName:values.userName,
                    content:values.content,
                    time:new Date().getTime()
                }]
                this.setState((state)=>({
                    userName:values.userName,
                    content:values.content,
                    list:list,
                })
               ,function () {
                form.setFieldsValue({content:""})
               }
               )
               setStorage('userName',values.userName)
               setStorage('list',JSON.stringify(list))
            }
        })

    };
    delate(index){
        const list= this.state.list;
        list.splice(index,1);
        this.setState({list})
        setStorage('list',JSON.stringify(list))
        // console.log(list);
    }
}
 
export default Comment;