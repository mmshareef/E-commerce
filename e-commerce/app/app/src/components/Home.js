import React from 'react';
import Categorylist from "./Categorylist";

// Home page
class Home extends React.Component {
    constructor(props){
    super(props);
}
    render(){  
    return(
        <div>
        <Categorylist />
        </div>  
    )
}
}
export default Home;