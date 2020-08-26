import React from 'react';
import { Redirect } from 'react-router-dom';

//home  categories
class Category extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        isRedirect : false
    }
}
    handleClick=()=> {
        this.setState({
            isRedirect:true
        })
    }
  render(){
      if(this.state.isRedirect == true) {
          return <Redirect to= '/Products'/>
      }

    return(
      <div className="container categorybox" onClick={this.handleClick} >
           <img className="top" src={this.props.data.categoryImage}/>
           <div className="info">
           <div>{this.props.data.categoryName}</div>
           <div>{this.props.data.categoryDescription}</div>
           </div>  
        </div>  
    )
}
}
export default Category;