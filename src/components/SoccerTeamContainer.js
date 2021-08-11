import React, {useEffect, useState} from 'react';
import {BASE_URL} from '../constraints/index';
import SoccerTeam from './SoccerTeam';
import SoccerTeamForm from './SoccerTeamForm';
import "../styles/SoccerTeamContainer.css";

function SoccerTeamContainer() {

    const [soccerTeams, setSoccerTeams] = useState(null);
    
    //READ

    useEffect(() => {
        fetch(BASE_URL + 'soccer_teams')
        .then(res => res.json())
        .then(setSoccerTeams)
    }, []);

    function populateSoccerTeams() {
        return soccerTeams.map((soccer_team) => (
        <SoccerTeam soccer_team={soccer_team} deleteSoccerTeam={deleteSoccerTeam} updateSoccerTeam={updateSoccerTeam} key={soccer_team.id}/> ));
    }

    //CREATE

    function handleAddSoccerTeam(newSoccerTeam){
        const updatedSoccerTeam=([...soccerTeams,newSoccerTeam])
        return setSoccerTeams(updatedSoccerTeam);
    }

    //UPDATE
    
    function updateSoccerTeam(soccer_team) {
        fetch(BASE_URL + 'soccer_teams/' + soccer_team.id, {
            method: "PATCH",
            body: JSON.stringify(soccer_team),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
        });
        const newSoccerTeams = soccerTeams.map((st) =>{
            if (st.id === soccer_team.id) {
                st = soccer_team;
            }
            return st
        })
        setSoccerTeams(newSoccerTeams)
    }

    //DELETE

    function deleteSoccerTeam(soccer_team){
        fetch(BASE_URL + 'soccer_teams/' + soccer_team.id, {
            method: "DELETE"
        })
        const newSoccerTeams = soccerTeams.filter(st => st.id!== soccer_team.id)
        setSoccerTeams(newSoccerTeams)
    }

    return (

        <div>
            <h2 className="soccer-teams-header">All Soccer Teams</h2>
            <SoccerTeamForm handleAddSoccerTeam={handleAddSoccerTeam} />
            <div className="soccer-team-container">{soccerTeams && populateSoccerTeams()}</div>
        </div>
    )

}

export default SoccerTeamContainer