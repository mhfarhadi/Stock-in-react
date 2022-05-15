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
                <span>ClassBased version.</span>
                <button onClick={this.handleReset} className='btn-red'>Reset All</button>
                {this.state.products.map((p,index) => (
                    <Product onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} id={p.id} key={index} productName={p.productName} count={p.count}>Lorem ipsumunt quidem eveniet id.</Product>
                ))}
            </>
        );
    }

    handleDelete = (productId) =>{
        const newProducts = this.state.products.filter(p => p.id !== productId)
        this.setState({products : newProducts})
    }


    handleIncrement = (productId) => {
        const newProducts = [...this.state.products];
        const index = newProducts.findIndex(p=> p.id === productId);
        newProducts[index].count += 1 ;
        this.setState({products : newProducts});    
    }

    handleDecrement = (productId) => {
        const newProducts = [...this.state.products];
        const index = newProducts.findIndex(p=> p.id === productId);
        newProducts[index].count -= 1 ;
        this.setState({products : newProducts});    
    }

    handleReset = () => {
        const newProducts = this.state.products.map(p => {
            p.count = 0;
            return p
        });
        this.setState({products : newProducts});
    }
}
 
export default Products;