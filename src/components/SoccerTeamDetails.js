import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { BASE_URL } from "../constraints/index"
import SoccerPlayer from './SoccerPlayer';
import SoccerPlayerForm from './SoccerPlayerForm';

function SoccerTeamDetails({createSoccerPlayer}) {

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

    function createSoccerPlayer(soccerPlayerDetails){
        const newSoccerPlayer = {
            ...soccerPlayerDetails,
            soccer_team_id: id,
        }
        
        fetch(BASE_URL + "/soccer_players", {
            method: "POST",
            body: JSON.stringify(newSoccerPlayer)
        })
        .then((r) => r.json())
        
        .then((json) => {
            console.log(json)
            const newSoccerTeam = {...soccerTeam, soccer_players: [...soccerTeam.soccer_players, json] };
            setSoccerTeam(newSoccerTeam);
        })
    }

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
                <h3>Add New Soccer Player</h3>
                <SoccerPlayerForm createSoccerPlayer={createSoccerPlayer}/>
            </>
            )}
        </div>
    );
}

export default SoccerTeamDetails;