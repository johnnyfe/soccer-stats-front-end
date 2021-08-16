import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../constraints';
import SoccerPlayerAll from './SoccerPlayerAll';
import "../styles/SoccerPlayerContainer.css"

function SoccerPlayerContainer() {

    const [soccerPlayers, setSoccerPlayers] = useState([]);
    const [currentSearch, setCurrentSearch] = useState("");

    useEffect(() =>{
        fetch(BASE_URL + "soccer_players")
        .then(r => r.json())
        .then(json =>setSoccerPlayers(json))
    }, [])

    const soccerPlayerDisplayed = soccerPlayers
    .filter((soccer_player)=> {
        return (
        soccer_player.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
        soccer_player.position.toLowerCase().includes(currentSearch.toLowerCase()) ||
        soccer_player.country.toLowerCase().includes(currentSearch.toLowerCase())
        )
    })

    function handleAddSoccerPlayer(){
        return soccerPlayerDisplayed.map((soccer_player) => (<SoccerPlayerAll soccer_player={soccer_player} key={soccer_player.id}/>))
    }

    function handleChange(e){
        setCurrentSearch(e.target.value)
    }
    
    return (
        <div>
            <div className='soccer-player-container'>
                <h3>Filter Soccer Players</h3>
                <label>Find by Name, Position and Country: </label>
                <input onChange={handleChange} value={currentSearch}></input>
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
