import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index'
import SoccerTeam from './SoccerTeam'

export default function SoccerTeamContainer() {

    const [soccerTeams, setSoccerTeams] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'soccer_teams')
        .then(res => res.json())
        .then(setSoccerTeams)
    }, [])

    useEffect(() => {
        console.log("Soccer Teams: ")
        console.log(soccerTeams)
    }, [soccerTeams])

    function populateSoccerTeams() {
        return soccerTeams.map(soccer_team => <SoccerTeam soccer_team={soccer_team} /> )
    }

    return (
        <div>
            {soccerTeams && populateSoccerTeams()}
        </div>
    )
}