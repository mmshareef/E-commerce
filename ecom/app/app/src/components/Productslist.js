import React from 'react';
import Product from './Product.js';
import Productsdata from '../data/Productsdata';

//productslist
const Productslist =() => {
      const listarray = Productsdata.map((item, index)=> {
        return (<Product data ={item}/>) 
      }); 
    return(
        <div>
        <div className= "home">
        <img className= "homeimage" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
        alt=""/>
        </div> 
        <div className="list"> 
        {listarray}
        </div>
        </div>

    )
}
export default Productslist;