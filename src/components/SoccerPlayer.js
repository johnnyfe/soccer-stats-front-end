import React from 'react';

function SoccerPlayer({soccerPlayer}) {
    return (
        <div>
            <p>Name: {soccerPlayer.name}</p>
            <p>Age: {soccerPlayer.age}</p>
            <p>Matches: {soccerPlayer.matches}</p>
            <p>Goals: {soccerPlayer.goals}</p>
            <p>Assists: {soccerPlayer.assists}</p>
            <p>Yellow Cards: {soccerPlayer.yellow_cards}</p>
            <p>Red Cards: {soccerPlayer.red_cards}</p>
            <p>Position: {soccerPlayer.position}</p>
            <p>Country: {soccerPlayer.country}</p>
            <img src={soccerPlayer.img_url} alt={soccerPlayer.name}></img>      
        </div>
    );
}

export default SoccerPlayer;