import React, {useState, useEffect} from 'react';
import playerData from '../../data/playerData.json';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Team.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Team = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setPlayers(playerData);
    }, []);

    const handleAddPlayer = (player) =>{
        const newCart = [...cart, player];
        setCart(newCart);
    }
    return (
        <div className="team-container">
            <div className="player-container">
                {
                    players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer}></Player>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} player={players}></Cart>
            </div>
        </div>
    );
};

export default Team;