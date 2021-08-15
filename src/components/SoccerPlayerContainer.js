import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../constraints';
import SoccerPlayerAll from './SoccerPlayerAll';
import "../styles/SoccerPlayerContainer.css"

function SoccerPlayerContainer() {

    const [soccerPlayers, setSoccerPlayers] = useState(null)

    useEffect(() =>{
        fetch(BASE_URL + "soccer_players")
        .then(r => r.json())
        .then(json =>setSoccerPlayers(json))
    }, [])

    function handleAddSoccerPlayer(){
        return soccerPlayers.map((soccer_player) => (<SoccerPlayerAll soccer_player={soccer_player} key={soccer_player.id}/>))
    }
    
    return (
        <div>
            <div className='soccer-player-container'>
                <h2>List of All Players</h2>
             <table>
                 <tbody>
                   <tr>
                    <th>Name</th>
                    <th>Age</th> 
                    <th>Matches</th>
                    <th>Goals</th>
                    <th>Assists</th>
                    <th>Yellow Cards</th>
                    <th>Red Cards</th>
                    <th>Position</th>
                    <th>Country</th>
                 </tr>  
                 </tbody>
             </table>
                 {soccerPlayers && handleAddSoccerPlayer()}
            </div>
        </div>
    );
}

export default SoccerPlayerContainer;
