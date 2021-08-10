import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index'
import SoccerTeam from './SoccerTeam'
import SoccerTeamForm from './SoccerTeamForm';

function SoccerTeamContainer() {

    const [soccerTeams, setSoccerTeams] = useState([])
    
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

    function createSoccerTeam(soccer_team){
        fetch(BASE_URL + "soccer_teams", {
            method: "POST",
            body: JSON.stringify(soccer_team),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((json) => setSoccerTeams([...soccerTeams, json]));
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

    function deleteSoccerTeam(soccer_team){
        fetch(BASE_URL + 'soccer_teams/' + soccer_team.id, {
            method: "DELETE"
        })
        const newSoccerTeams = soccerTeams.filter(st => st.id!== soccer_team.id)
        setSoccerTeams(newSoccerTeams)
    }

    return (
        <div>
            <div className="gym-container">{soccerTeams && populateSoccerTeams()}</div>
            <SoccerTeamForm createSoccerTeam={createSoccerTeam} />
        </div>
    )

}

export default SoccerTeamContainer