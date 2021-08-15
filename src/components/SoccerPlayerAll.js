import React from 'react';
import "../styles/SoccerPlayerAll.css"


function SoccerPlayerAll({soccer_player}) {
    return (
        <div>
            <table className="all-soccer-player-bottom">
                <tbody>
                 <tr>
                    <td>{soccer_player.name}</td>
                    <td>{soccer_player.age}</td>
                    <td>{soccer_player.matches}</td>
                    <td>{soccer_player.goals}</td>
                    <td>{soccer_player.assists}</td>
                    <td>{soccer_player.yellow_cards}</td>
                    <td>{soccer_player.red_cards}</td>
                    <td>{soccer_player.position}</td>
                    <td>{soccer_player.country}</td>
                 </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SoccerPlayerAll;