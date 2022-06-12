import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

//Styled
const Container = styled.div`
    position: relative;
    top: 150px;    
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > h2 {
        text-align: center;
    }
`;
const TableWrapper = styled.div`
    > table {
        border-collapse: collapse;
        border: 2px solid #333;
    }
    colgroup {
        border-right: 1px solid #000;
        
    }
    thead > tr {
        background-color: #EEEEEE;
    }
    tbody > tr {
        &:nth-child(2n) {
            background-color: #EEEEEE;
        }
    }
    td, th {
        border-left: 2px solid #000;
        &:first-child {
            border-left: none;
        }
        text-align: center;
        padding: 5px;
    }
`;
const PrevPageBtn = styled.div`
    position: absolute;
    top: 0;
    left: 20px;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    color: #000;

    > span {
        font-size: 24px;
    }
`;

//Main Component
const SinglePlayer = (props) => {
    let player = useParams();
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch(`/get_single_player_data/${player.id}`)
        .then((response) => response.json())
        .then((data) => setItems(data))
    },[player])

    const name = items && items[0].name;
    const id = items && items[0].id;
    const team_acronym = items && items[0].team_acronym;
    const team_name = items && items[0].team_name;
    const games_played = items && items[0].games_played;
    const minutes_per_game = items && items[0].minutes_per_game;
    const field_goals_attempted_per_game = items && items[0].field_goals_attempted_per_game;
    const field_goals_made_per_game = items && items[0].field_goals_made_per_game;
    const field_goal_percentage = items && items[0].field_goal_percentage;
    const free_throw_percentage = items && items[0].free_throw_percentage;
    const three_point_attempted_per_game = items && items[0].three_point_attempted_per_game;
    const three_point_made_per_game = items && items[0].three_point_made_per_game;
    const three_point_percentage = items && items[0].three_point_percentage;
    const points_per_game = items && items[0].points_per_game;
    const offensive_rebounds_per_game = items && items[0].offensive_rebounds_per_game;
    const defensive_rebounds_per_game = items && items[0].defensive_rebounds_per_game;
    const rebounds_per_game = items && items[0].rebounds_per_game;
    const assists_per_game = items && items[0].assists_per_game;
    const steals_per_game  = items && items[0].steals_per_game ;
    const blocks_per_game = items && items[0].blocks_per_game;
    const turnovers_per_game = items && items[0].turnovers_per_game;
    const player_efficiency_rating = items && items[0].player_efficiency_rating;

    return (
        <Container>
            <Link to='/'>
                <PrevPageBtn>
                    <span className="material-icons">arrow_back_ios</span>
                    <p>上一頁</p>
                </PrevPageBtn>
            </Link>
            <h2>Player details</h2>
            <TableWrapper>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <td>{name}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Player ID</th>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <th>Team</th>
                            <td>{team_acronym}</td>
                        </tr>
                        <tr>
                            <th>TeamName</th>
                            <td>{team_name}</td>
                        </tr>
                        <tr>
                            <th>Games</th>
                            <td>{games_played}</td>
                        </tr>
                        <tr>
                            <th>MPG</th>
                            <td>{minutes_per_game}</td>
                        </tr>
                        <tr>
                            <th>FGA</th>
                            <td>{field_goals_attempted_per_game}</td>
                        </tr>
                        <tr>
                            <th>FGM</th>
                            <td>{field_goals_made_per_game}</td>
                        </tr>
                        <tr>
                            <th>FG%</th>
                            <td>{field_goal_percentage}</td>
                        </tr>
                        <tr>
                            <th>FT%</th>
                            <td>{free_throw_percentage}</td>
                        </tr>
                        <tr>
                            <th>3PA</th>
                            <td>{three_point_attempted_per_game}</td>
                        </tr>
                        <tr>
                            <th>3PM</th>
                            <td>{three_point_made_per_game}</td>
                        </tr>
                        <tr>
                            <th>3PT%</th>
                            <td>{three_point_percentage}</td>
                        </tr>
                        <tr>
                            <th>Points</th>
                            <td>{points_per_game}</td>
                        </tr>
                        <tr>
                            <th>ORebounds</th>
                            <td>{offensive_rebounds_per_game}</td>
                        </tr>
                        <tr>
                            <th>DRebounds</th>
                            <td>{defensive_rebounds_per_game}</td>
                        </tr>
                        <tr>
                            <th>Rebounds</th>
                            <td>{rebounds_per_game}</td>
                        </tr>
                        <tr>
                            <th>Assists</th>
                            <td>{assists_per_game}</td>
                        </tr>
                        <tr>
                            <th>Steals</th>
                            <td>{steals_per_game}</td>
                        </tr>
                        <tr>
                            <th>Blocks</th>
                            <td>{blocks_per_game}</td>
                        </tr>
                        <tr>
                            <th>Turnovers</th>
                            <td>{turnovers_per_game}</td>
                        </tr>
                        <tr>
                            <th>Efficiency</th>
                            <td>{player_efficiency_rating}</td>
                        </tr>
                    </tbody>
                </table>
            </TableWrapper>
        </Container>
    )
}

export default SinglePlayer;