import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { BASE_URL } from "../constraints/index"

function SoccerTeamDetails() {

    const [soccerTeam, setSoccerTeam] = useState(null);
    
    const { id } = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'soccer_teams/' + id)
        .then(res => res.json())
        .then(json => setSoccerTeam(json))
    }, [id]);

    useEffect(() => {
        console.log(soccerTeam)
    }, [soccerTeam])

    return (
        <div>
            {soccerTeam && (
            <>
                <p>Soccer Team: {soccerTeam.name}</p>
                <p>Date Founded: {soccerTeam.founded}</p>
                <p>Nationality: {soccerTeam.country}</p>
                <p>Coach: {soccerTeam.manager}</p>
                <img src={soccerTeam.img_url} alt={soccerTeam.name}></img>
                {soccerTeam.soccer_players.map( player => (
                    <div>
                        <p>Name: {player.name}</p>
                        <p>Age: {player.age}</p>
                        <p>Matches: {player.matches}</p>
                        <p>Goals: {player.goals}</p>
                        <p>Assists: {player.assists}</p>
                        <p>Yellow Cards: {player.yellow_cards}</p>
                        <p>Red Cards: {player.red_cards}</p>
                        <p>Position: {player.position}</p>
                        <p>Country: {player.country}</p>
                        <img src={player.img_url} alt={player.name}></img>
                    </div>
            ))}
            </>
            )}
        </div>
    );
}

export default SoccerTeamDetails;