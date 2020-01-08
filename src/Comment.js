import React, { Component } from 'react';
import Userform from './Userform/index'



class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Userform/>
            </div>
         );
    }
}
 
export default Comment;