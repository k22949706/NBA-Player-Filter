import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const TeamSelector = (props) => {
    const [teams, setTeams] = useState([]);
    
    useEffect(() => {
        fetch("/all_teams")
            .then((response) => response.json())
            .then((data) => setTeams(data));
    },[])

    return (
        <select name='team'>
            <option selected>All</option>
            {teams.map((team, index) => {
                return <option value={team.team_name}>{team.team_name}</option>;
            })}
        </select>
    )
}

export default TeamSelector;