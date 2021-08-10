import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { BASE_URL } from "../constraints/index"
import SoccerPlayer from './SoccerPlayer';

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
                {soccerTeam.soccer_players.map(soccerPlayer => <SoccerPlayer key={soccerPlayer.id} soccerPlayer={soccerPlayer} />)}
            </>
            )}
        </div>
    );
}

export default SoccerTeamDetails;