import React,{Component} from "react";
import './product.css';
class Products extends Component {
    state = {
        count : 0,
        productName : 'laptop',
        inStock : 'in stock.'
    }
    render() { 
        return (
            <>
                <span className="span">We have {this.format()} {this.state.productName} {this.state.inStock} </span>
                <button className="px-6 py-2 text-sm transition-colors duration-300 rounded rounded-full shadow-xl text-cyan-100 bg-cyan-500 hover:bg-cyan-600 shadow-cyan-400/30" onClick={this.increment}>+</button>
                <button className="px-6 py-2 text-sm text-indigo-500 transition-colors duration-300 border-2 border-indigo-400 rounded-full shadow-xl shadow-indigo-300/30 hover:bg-indigo-500 hover:text-indigo-100" onClick={this.decrement}>-</button>
                <button className="btn-red" onClick={this.delete}>Delete</button>
            </>
        );
    }


    increment = () => {
        const {count} = this.state;
        this.setState({count : count+1});
    }


    decrement = () => {
        const {count} = this.state;
        this.setState({count : count-1})
    }


    delete = () => {
        const {count} = this.state;
        this.setState({count : 0});
    }



    format = () => {
        if (this.state.count ===0 ) {
            
            return 'no'
            
        } else {
            return this.state.count 
        }
    }
}
 
export default Products;












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