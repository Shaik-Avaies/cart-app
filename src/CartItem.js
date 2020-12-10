import React from 'react';


class CartItem extends React.Component{

    constructor(){
        super();
        this.state = {
            title: "phone",
            price: 100,
            qty: 1,
            img: ''
        }
        //one of the way
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    };


    //arrow function to bind to the class automatically
    increaseQuantity = () => {
        //1st way
        // this.setState({
        //     qty: this.state.qty += 1
        // });
        //2nd way == If prevState required then use this
        this.setState((prevState) => {
            return{
                qty: prevState.qty+1
            }
        });
    }

    decreaseQuantity = () => {
        this.setState({
            qty: this.state.qty -= 1
        });
    }

    render(){

        const {title,price,qty,img} = this.state;

        return(
            <div clasName="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={img}/>
                </div>
                <div className="right-block">

                    <div style= { { fontSize: 25 } }>{title}</div>
                    <div style= { { color: '#777' } }>RS: {price}</div>
                    <div style= { { color: '#777' } }>Qty: {qty}</div>

                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992651.svg" 
                        //one of the way of binding to the class
                        // onClick= {this.increaseQuantity.bind(this)}
                        onClick = {this.increaseQuantity}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1665/1665612.svg" 
                        onClick= {this.decreaseQuantity}
                        />
                        <img
                        alt="delete"
                        className="action-icons"
                        src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
                        onClick= {this.delete}
                        />
                    </div>

                </div>
            </div>
        );
    }

}


const styles = {
    image: {
        height: 100,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;