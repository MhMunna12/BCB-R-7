import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const player = props.player;
    const totalSalary = cart.reduce((total,player) => total + player.salary ,0);
     
    return (
        <div className="cart">
            <h2 className="player-header">Total Player: {player.length}</h2>
            <h4>Hire Player: {cart.length}</h4>
                {
                    cart.map( player => <h6 className="player-style">{player.name} :${player.salary}</h6>)
                }
            <hr></hr>
            <h3>Total Salary: ${totalSalary}</h3>
        </div>
    );
};

export default Cart;