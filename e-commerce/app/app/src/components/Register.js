import React from 'react';
import {Redirect} from 'react-router-dom';


//user registertion
class Register extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      isregistered : false
    }
    }
        handleEnter =()=> {
        let registerusername = document.getElementById("registerusername").value;
        let email = document.getElementById("email").value;
        let registerpassword = document.getElementById("registerpassword").value;
        let reEnterpassword = document.getElementById("reEnterpassword").value;
    if(registerusername !== '' && email !== '' &&  registerpassword !== '' && reEnterpassword !== ''){
        this.setState  ({
            isregistered : true
        })
    }
}
     render() {
         if(this.state.isregistered == true) {
             return <Redirect to = '/Signin' />
         }
    return(
        <div className="register">
        <h3>Register</h3>
        <input Placeholder="username" type="text" id="registerusername"/><br/><br/>
        <input Placeholder="email" type="text" id="email"/><br/><br/>
        <input Placeholder="password" type="password" id="registerpassword"/><br/><br/>
        <input Placeholder="re-enter password" type="password" id="reEnterpassword"/><br/><br/>
        <button onClick={this.handleEnter}>Enter</button>
        </div>
    )
    }
}

export default Register;