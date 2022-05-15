import React, { Component } from 'react';

import SubProduct from './subProduct';



class MainProduct extends Component {
    state = { 
        products: [
            {id:1 , count: 28 , productName:'Laptop'} ,
            {id:2 , count: 32 , productName:'Mobile'} ,
            {id:3 , count: 13 , productName:'Tablet'} ,
            {id:4 , count: 217 , productName:'Accessory'} 
        ]
     } 
    render() { 
        return (
            <div>
                {this.state.products.map((p,index) => (
                    <SubProduct key={index} productName={p.productName} count={p.count}>Lorem ipsumunt quidem eveniet id.</SubProduct>
                ))}
            </div>
        );
    }
}
 
export default MainProduct;