import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCommentDollar, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import './Player.css';

const Player = (props) => {
    const {name,image,team,role,salary} = props.player;
    return (
        <div className="player">
            <img src={image} alt=""/>
            <h2>{name}</h2>
            <h3>{team}</h3>
            <h5> <FontAwesomeIcon icon={faCommentDollar} /> {salary}</h5>
            <p>{role}</p>
            <button onClick={() => props.handleAddPlayer(props.player)} className="main-btn btn btn btn-danger"> <FontAwesomeIcon icon={faUserAlt} /> Add Player</button>
        </div>
    );
};

export default Player;