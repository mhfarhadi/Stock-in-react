import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
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
            <>
                {this.state.products.map((p,index) => (
                    <Product onDelete={this.handleDelete} id={p.id} key={index} productName={p.productName} count={p.count}>Lorem ipsumunt quidem eveniet id.</Product>
                ))}
            </>
        );
    }

    handleDelete = (productId) =>{
        const newProducts = this.state.products.filter(p => p.id !== productId)
        this.setState({products : newProducts})
    }
}
 
export default Products;