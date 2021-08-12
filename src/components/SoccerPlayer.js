import React from 'react';
import "../styles/SoccerPlayer.css"

function SoccerPlayer({soccerPlayer}) {
    return (
        <div className="soccer-player-card">
            <img src={soccerPlayer.img_url} alt={soccerPlayer.name}></img>
            <table >
                <tbody>
                 <tr>
                    <th>Name</th>
                    <td>{soccerPlayer.name}</td>
                 </tr>
                 <tr>
                    <th>Age</th>
                    <td>{soccerPlayer.age}</td>
                 </tr>
                 <tr>
                     <th>Matches</th> 
                     <td>{soccerPlayer.matches}</td>
                 </tr>
                 <tr>
                     <th>Goals</th>
                     <td>{soccerPlayer.goals}</td>
                 </tr>
                 <tr>
                     <th>Assists</th>
                     <td>{soccerPlayer.assists}</td>
                 </tr>
                 <tr>
                     <th>Yellow Cards</th>
                     <td>{soccerPlayer.yellow_cards}</td>
                 </tr>
                 <tr>
                     <th>Red Cards</th>
                     <td>{soccerPlayer.red_cards}</td>
                 </tr>
                 <tr>
                     <th>Position</th>
                     <td>{soccerPlayer.position}</td>
                 </tr>
                 <tr>
                     <th>Country</th>
                     <td>{soccerPlayer.country}</td>
                 </tr> 
                </tbody>
            </table>
        </div>
    );
}

export default SoccerPlayer;