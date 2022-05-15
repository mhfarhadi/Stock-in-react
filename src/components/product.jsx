import React,{Component} from "react";
import './product.css';



class Product extends Component {
    
    render() { 
        const {productName} = this.props
        return (
            <div  className="subDiv">
                <>
                    <span className="span"> We have {this.format()} <b>{productName}</b> in Stock.</span>
                    <button className="btn-green" onClick={this.increment}>+</button>
                    <button className="btn-yellow" onClick={this.decrement}>-</button>
                    <button className="btn-red" onClick={this.delete}>Delete</button>
                    <p>{this.props.children}</p>
                </>

             </div>
        );
    }


    increment = () => {
        this.props.onIncrement(this.props.id)
    }


    decrement = () => {
        this.props.onDecrement(this.props.id)
    }


    delete = () => {
        this.props.onDelete(this.props.id)
    }



    format = () => {
        if (this.props.count ===0 ) {
            
            return 'no'
            
        } else {
            return this.props.count 
        }
    }
}
 
export default Product;












// import React from "react";
// import { Component } from "react";
// import './product.css'


// class Products extends Component {
//     state = {
//         count : 0 ,
//         productName : 'Laptop'
//     }
//     render() { 
//         return (
//             <>
//                  <span className="span"> Product's Name : {this.state.productName}</span>
//                  <span className="span"> Stock : {this.format()}</span>
//                  <button className="btn-green" onClick={this.increment}>+</button>
//                  <button className="btn-yellow" onClick={this.decrement}>-</button>
//                  <button className="btn-red" onClick={this.delete}>Delete</button>

//             </>
//         );
//     }


//     increment = () => {
//         const {count} = this.state;
//         this.setState ({count:count+1})
//     }
//     decrement = () => {
//         const {count} = this.state;
//         this.setState ({count:count-1})
//     }
//     delete = () => {
//         const {count} = this.state;
//         this.setState ({count:0 , productName : "No product"})
//     }

//     format = () => {
//         if (this.state.count === 0){
//             return 'Empety'
//         } else {
//             return this.state.count
//         }
//     }

// }
 
// export default Products;


// it React from "react";
// import { Component } from "react";

// class Products extends Component {
//     state = {
//         count : 0,
//         productName : 'Laptop'
//       }
//     render() { 
//         return (
//             <>
//                 <span>Kind of Product : {this.state.productName}</span>
//                 <span>Stock : {this.format()}</span>
//                 <button onClick={this.increment} className="border-2 m-2 p-2">+</button>
//                 <button onClick={this.decrement} className="border-2 m-2 p-2">-</button>
//                 <button onClick={this.delete} className="border-2 m-2 p-2">Delete</button>
//             </>
//         );
//     }

//     increment = () => {
//         const {count} = this.state;
//         this.setState ({count : count + 1 , productName : 'Laptop'});
//     }

//     decrement = () => {
//         const {count} = this.state;
//         this.setState({count : count - 1});
//     }

//     delete = () => {
//         const {count} = this.state;
//         this.setState({count : 0 , productName : 'No product'});
//     }


//     format = () => {
//         if (this.state.count === 0) {
//             return 'Empety';
//         } else {
//             return this.state.count;
//         }
//     } 
// }
 
// export default Products;