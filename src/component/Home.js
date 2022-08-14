import React from "react";
import './Home.css';
import oneplus from '../images/oneplus.png'
import cart1 from '../images/cart1.jpg'


export default class Home extends React.Component{
    render(){
       return(
        <>
       <div className="header-div"> 
        <h1 className="title">Mobile Section</h1>
       </div>
      
       <div  className="div-container">
       <img className="image-size" src={oneplus} alt="mobile"></img>
       <img className="image-size-cart" src={cart1} alt="mobile"></img>
       </div>
       <div className="span-button"><p className="brand-name">Oneplus 8 pro</p>
       <button className="add-to-cart">Add to cart</button></div>
       
       
       </>
         );
    }
}