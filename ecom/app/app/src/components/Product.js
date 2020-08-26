import React from 'react';

// products 
const Product = (props) => {
    return(
      <div className="container productbox">  
           <img className="top" src={props.data.ProductImage}/>
           <div className="info">
           <div>{props.data.ProductName}</div>
           <div>{props.data.ProductBrand}</div>
           <div>{props.data.ProductDescription}</div>
           <div>{props.data.ProductPrice}</div>
           <div>{props.data.ProductAvailability}</div>
           <div>{props.data.ProductRating}</div>
           <div>{props.data.ProductSize}</div>
           <div>{props.data.ProductColor}</div>
           <button>Add to cart</button>
           </div>  
        </div>  
    )
}
export default Product;