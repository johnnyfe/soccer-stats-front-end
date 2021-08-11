import React from 'react';
import "../styles/SoccerPlayer.css"

function SoccerPlayer({soccerPlayer}) {
    return (
        <div class="soccer-player-card">
            <img src={soccerPlayer.img_url} alt={soccerPlayer.name}></img>
            <table align="center">
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
            <tr>
                <td>{soccerPlayer.name}</td>
                <td>{soccerPlayer.age}</td>
                <td>{soccerPlayer.matches}</td>
                <td>{soccerPlayer.goals}</td>
                <td>{soccerPlayer.assists}</td>
                <td>{soccerPlayer.yellow_cards}</td>
                <td>{soccerPlayer.red_cards}</td>
                <td>{soccerPlayer.position}</td>
                <td>{soccerPlayer.country}</td>
            </tr>
            </table>
        </div>
    );
}

export default SoccerPlayer;