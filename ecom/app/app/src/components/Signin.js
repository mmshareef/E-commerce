import React from 'react';
import {Redirect} from 'react-router-dom'

// user Signin
const Signin =(props)=>{
    const {handleEnter, username} = props
    if( username !== '') {
        return <Redirect to='/' />;
    }
    return(
        <div className="user">
          <h3>Signin</h3>
            <input className = "username" placeholder = "username" type = "text" id = "username"/><br/><br/>
            <input className = "password" placeholder = "password" type = "password" id = "password"/><br/><br/>
            <button onClick={handleEnter}>Enter</button>
        </div>
    )
}
export default Signin;