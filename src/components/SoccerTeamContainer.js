import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index'
import SoccerTeam from './SoccerTeam'

function SoccerTeamContainer() {

    const [soccerTeams, setSoccerTeams] = useState([])

    useEffect(() => {
        fetch(BASE_URL + 'soccer_teams')
        .then(res => res.json())
        .then(setSoccerTeams)
    }, [])

    function populateSoccerTeams() {
        return soccerTeams.map(soccer_team => <SoccerTeam soccer_team={soccer_team} deleteSoccerTeam={deleteSoccerTeam} key={soccer_team.id}/> )
    }

    function deleteSoccerTeam(soccer_team){
        fetch(BASE_URL + 'soccer_teams/' + soccer_team.id, {
            method: "DELETE"
        })
        const newSoccerTeams= soccerTeams.filter(st => st.id!== soccer_team.id)
        setSoccerTeams(newSoccerTeams)
    }

    return (
        <div>
            {soccerTeams && populateSoccerTeams()}
        </div>
    )

}

export default SoccerTeamContainer