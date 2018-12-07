import React from 'react';
import classes from './standingRow.module.scss'

const StandingRow = (props) => {
    const teamLogo = props.club.team.crestUrl ? <img className={classes.TeamLogo} src= {props.club.team.crestUrl }  alt={ props.club.team.name } /> : null;
    const teamName = props.position ? `${props.club.position}. ${props.club.team.name}` : props.club.team.name;

    return (
        <tr>
            <th scope='row'>{ props.position || props.club.position } {props.order}</th>
            <td className={classes.TeamNameCell}>
                { teamLogo }
                { teamName }
            </td>
            <td>{ props.club.playedGames }</td>
            <td>{ props.club.won }</td>
            <td>{ props.club.draw }</td>
            <td>{ props.club.lost }</td>
            <td>{ props.club.goalsFor }:{ props.club.goalsAgainst }({ props.club.goalDifference })</td>
            <td>{ props.club.points }</td>
        </tr>
    )
}

export default StandingRow;