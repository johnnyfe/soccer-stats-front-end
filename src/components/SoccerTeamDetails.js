import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { BASE_URL } from "../constraints/index"
import { useHistory } from 'react-router';
import SoccerPlayer from './SoccerPlayer';
import SoccerPlayerForm from './SoccerPlayerForm';

function SoccerTeamDetails({createSoccerPlayer}) {

    const history = useHistory();

    const [soccerTeam, setSoccerTeam] = useState(null);
    const [selectedPosition, setSelectedPosition] = useState("ALL")
    
    const { id } = useParams();
    
    useEffect(() => {
        fetch(BASE_URL + 'soccer_teams/' + id)
        .then((res) => { 
            if(!res.ok){
                throw Error(res.statusText)
            }
            return res.json()
        })
        .then((json) => setSoccerTeam(json))
        .catch(error => {
            console.log(error)
            history.push('/')
        })
    }, [id]);

    function uniquePositions(){
        const positions = soccerTeam.soccer_players.map((soccerPlayer) => soccerPlayer.position);
        const uniquePosition = [...new Set(positions)];
        return uniquePosition
    }

    function populatePositionOptions(){
        return uniquePositions().map((position) => 
        (<option value={position}>{position}</option>));
    }

    function handleSelectPosition(e) {
        setSelectedPosition(e.target.value)
    }

    function filteredSoccerPlayers(){
        if (selectedPosition === "ALL") {
            return soccerTeam.soccer_players;
        }
        return soccerTeam.soccer_players.filter(
            (soccerPlayer) => soccerPlayer.position === selectedPosition
        );
    }


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
            const newSoccerTeam = {...soccerTeam, soccer_players: [...soccerTeam.soccer_players, json] };
            setSoccerTeam(newSoccerTeam);
        })
    }

    function parseSoccerTeamDate(){
        const ts = new Date(soccerTeam.founded);
        ts.setHours(24);
        let soccer_team_date =ts.toLocaleDateString();
        return soccer_team_date
    }

    return (
        <div>
            {soccerTeam && (
            <>
                <h2>Soccer Team</h2>
                <p>Soccer Team: {soccerTeam.name}</p>
                <p>Date Founded: {parseSoccerTeamDate()}</p>
                <p>Nationality: {soccerTeam.country}</p>
                <p>Coach: {soccerTeam.manager}</p>
                <img src={soccerTeam.img_url} alt={soccerTeam.name}></img>
                <h2>List of Players</h2>
                <select value={selectedPosition} onChange={handleSelectPosition}>
                    <option value ="ALL">All Positions</option>
                    {populatePositionOptions()}
                </select>
                <div className = "soccer-player-card-container">
                    {filteredSoccerPlayers().map((soccerPlayer) => (
                        <SoccerPlayer key={soccerPlayer.id} soccerPlayer={soccerPlayer} />
                    ))}
                </div>
                <h3>Add New Soccer Player</h3>
                <SoccerPlayerForm createSoccerPlayer={createSoccerPlayer}/>
            </>
            )}
        </div>
    );
}

export default SoccerTeamDetails;