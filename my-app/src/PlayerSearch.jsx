import React, {useEffect, useState, useRef} from 'react';
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { PieChart } from 'react-minimal-pie-chart';

//Styled
const Container = styled.div`
    position: relative;
    top: 150px;
    width: 80%;
    padding-bottom: 40px;
`;
const SearchWrapper = styled.div`
    position: relative;
    min-height: 100px;
    left: 10%;
    padding: 20px;
    background-color: transparent;
    border: 2px solid #000;
    display: flex;
    align-items: flex-start;
`;
const SelectorWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;

    > select {
        font-size: 18px;
        margin-left: 10px;
    }
`;
const KeywordWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600; 
    margin-left: 40px; 

    > input {
        font-size: 16px;
        margin-left: 10px;
    }
`;
const SubmitWrapper = styled.div`
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const SubmitBtn = styled.button`
    background-color: transparent;
    border: 2px solid #000;
    font-size: 24px;
    cursor: pointer;  
    transition: all 0.1s ease-out;
    user-select: none;
    
    &:hover {
        background-color: #8FB9F7;
    }
`;
const TableWrapper = styled.div`
    position: relative;
    top: 20px;
    left: 10%;
    border: 2px solid #333;
    > table {
        width: 100%;
        border-collapse: collapse;
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
        position: relative;
        border-left: 2px solid #000;
        &:first-child {
            border-left: none;
        }
        text-align: center;
        padding: 5px;
    }
    td {
        span {
            font-size: 24px;
            cursor: pointer;
            color: #000;
        }
    }
    th {
        user-select: none;
        span {
            position: absolute;
            top: 3px;
            right: 0;
            color: #000;
            cursor: pointer;
        }
    }
`;
const PaginationWrapper = styled.div`
    position: relative;
    top: 30px;
    left: 10%;
    display: flex;
    justify-content: flex-end;  
`;
const PaginationBtn = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center; 
    background-color: ${props => props.active ? '#8FB9F7' : 'trasparent'};
    border: 2px solid #000; 
    border-radius: 10px;
    margin: 0 5px;
    font-weight: 700;
    cursor: pointer;
`;
const OrderTypeBtn = styled.button`
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`;
const TypeSwitch = styled.th`
    background-color: ${props => props.active ? '#8FB9F7' : 'trasparent'};
`;
const Dot = styled.div``;
const PieChartBtn = styled.div`
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    width: 125px;
    height: 40px;
    border: 2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 700;
    background-color: transparent;
    cursor: pointer;
    user-select: none;
    transition: all 0.1s ease-out;
    
    &:hover {
        background-color: #8FB9F7;
    }
`;
const PieChartWrapper = styled.div`
    position: absolute;
    top: 20px;
    left: 62.5%;
    transform: translateX(-50%);
    width: 700px;
    height: 700px;
    padding: 20px;
    background-color: #fff;
    border: 2px solid #000;
    z-index: 2;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
`;

// Main Component
const PlayerSearch = (props) => {
    const [teams, setTeams] = useState([]);
    const [chart, setChart] = useState([]);

    useEffect(() => {
        fetch("/all_teams")
            .then((response) => response.json())
            .then((data) => setTeams(data));
        fetch("/get_player_for_piechart")
            .then((response) => response.json())
            .then((data) => setChart(data));
    },[])
    const { handleSubmit } = useForm();  
    const [items, setItems] = useState([]);
    // console.log(items)
    const [itemNum, setItemNum] = useState([]);
    // console.log(itemNum[0]["COUNT(id)"])
    const [orderType, setOrderType] = useState('points_per_game');
    const [isDesc, setIsDesc] = useState(true);
    const DescOrAsc = () => {
        if (isDesc) {
            return ('DESC')
        } else {
            return ('ASC')
        }
    }

    const onSubmit = (data, e) => {
        fetch(`/select_team/${selectorValue}/${keywordValue}/${currentPage}/${orderType}/${DescOrAsc()}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
        .then((data) => setItems(data));

        fetch(`/check_data_num/${selectorValue}/${keywordValue}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
        .then((data) => setItemNum(data));
    }
    const onError = (errors, e) => console.log(errors, e);

    const [pageList, setPageList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        const perpage = 15;
        const pageTotal = Math.ceil(itemNum[0] && itemNum[0]["COUNT(id)"] / perpage);
        let lists = [];
        setPageList(lists);
        for (let i=0; i<=pageTotal-1; i++) {
            lists.push(`${i+1}`);
            setPageList(lists);
        }
    },[itemNum])
    // console.log(pageList)

    // window.onload = function() {
    //     document.forms['nba'].submit();
    // }
    const [keywordValue, setKeywordValue] = useState('');
    const [selectorValue, setSelectorValue] = useState('');
    const keywordRef = useRef('');
    const selectorRef= useRef('');
    const submitForm = () => {
        keywordRef.current && setKeywordValue(keywordRef.current.value);
        selectorRef.current && setSelectorValue(selectorRef.current.value);
        setCurrentPage(1);
        // console.log(keywordValue, selectorValue)
    }
    const changeDescAndOrderType = (type) => {
        setOrderType(type);
        setIsDesc(!isDesc);
    }
    const [showChart, setShowChart] = useState(false);

    let data = [];

    chart.forEach((obj) => {
        const randomColor = "#000000".replace(/0/g, () => {
            return (~~(Math.random() * 16)).toString(16);
        });

        let insert = {
            color: randomColor,
            title: obj.team_acronym.toUpperCase(),
            value: obj.count_player,
            total: obj.team_acronym.toUpperCase() + '\n' + obj.count_player
        };

        data.push(insert);
    });

    return (
        <Container>
            {showChart && 
                <PieChartWrapper>
                    Teams with 15 or less players
                    <PieChart
                        data={data}
                        animate
                        animationDuration={500}
                        animationEasing="ease-out"
                        label={(data) => data.dataEntry.total}
                        labelPosition={65}
                        labelStyle={{
                            fontSize: "5px",
                            fontColor: "FFFFFA",
                            fontWeight: "800",
                        }}
                        center={[60, 60]}
                        viewBoxSize={[120, 120]}
                    />
                </PieChartWrapper>
            }
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <SearchWrapper>
                    <SelectorWrapper>
                        Teams:
                        <select ref={selectorRef}>
                            <option>All</option>
                            {teams.map((team, index) => {
                                return (
                                    <option key={index}>{team.team_name}</option>
                                )
                            })}
                        </select>
                    </SelectorWrapper>
                    <KeywordWrapper>
                        Keywords:
                        <input ref={keywordRef}/>
                    </KeywordWrapper>
                    <SubmitWrapper>
                        {/* <SubmitBtn type="submit" value="search" /> */}
                        <SubmitBtn onClick={submitForm} type='submit' >search</SubmitBtn>
                    </SubmitWrapper>
                    <PieChartBtn onClick={() => setShowChart(!showChart)}>{showChart ? 'Hide Chart' : 'Show Chart'}</PieChartBtn>
                </SearchWrapper>
                <TableWrapper>
                    <table>
                        <colgroup></colgroup>
                        <thead>
                            <tr>
                                <th>
                                    TeamName
                                </th>
                                <th>
                                    Name
                                </th>
                                <TypeSwitch active={orderType==='games_played'}>
                                    <OrderTypeBtn onClick={() => setOrderType('games_played')} type="submit">
                                        Games
                                    </OrderTypeBtn>
                                    <OrderTypeBtn onClick={() => changeDescAndOrderType('games_played')} type="submit">
                                        <span className="material-icons">unfold_more</span>
                                    </OrderTypeBtn>
                                </TypeSwitch>
                                <TypeSwitch active={orderType==='points_per_game'}>
                                    <OrderTypeBtn onClick={() => setOrderType('points_per_game')} type="submit">
                                        Points
                                    </OrderTypeBtn>
                                    <OrderTypeBtn onClick={() => changeDescAndOrderType('points_per_game')} type="submit">
                                        <span className="material-icons">unfold_more</span>
                                    </OrderTypeBtn>
                                </TypeSwitch>
                                <TypeSwitch active={orderType==='rebounds_per_game'}>
                                    <OrderTypeBtn onClick={() => setOrderType('rebounds_per_game')} type="submit">
                                        Rebounds
                                    </OrderTypeBtn>
                                    <OrderTypeBtn onClick={() => changeDescAndOrderType('rebounds_per_game')} type="submit">
                                        <span className="material-icons">unfold_more</span>
                                    </OrderTypeBtn>
                                </TypeSwitch>
                                <TypeSwitch active={orderType==='assists_per_game'}>
                                    <OrderTypeBtn onClick={() => setOrderType('assists_per_game')} type="submit">
                                        Assists
                                    </OrderTypeBtn>
                                    <OrderTypeBtn onClick={() =>  changeDescAndOrderType('assists_per_game')} type="submit">
                                        <span className="material-icons">unfold_more</span>
                                    </OrderTypeBtn>
                                </TypeSwitch>
                                <TypeSwitch active={orderType==='steals_per_game'}>
                                    <OrderTypeBtn onClick={() => setOrderType('steals_per_game')} type="submit">
                                        Steals
                                    </OrderTypeBtn>
                                    <OrderTypeBtn onClick={() => changeDescAndOrderType('steals_per_game')} type="submit">
                                        <span className="material-icons">unfold_more</span>
                                    </OrderTypeBtn>
                                </TypeSwitch>
                                <TypeSwitch active={orderType==='blocks_per_game'}>
                                    <OrderTypeBtn onClick={() => setOrderType('blocks_per_game')} type="submit">
                                        Blocks
                                    </OrderTypeBtn>
                                    <OrderTypeBtn onClick={() => changeDescAndOrderType('blocks_per_game')} type="submit">
                                        <span className="material-icons">unfold_more</span>
                                    </OrderTypeBtn>
                                </TypeSwitch>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        {Object.getOwnPropertyNames(item).map((attr, index) => {
                                            if(index===0) return null;
                                            return (
                                                <td key={attr}>
                                                    {item[attr]}
                                                </td>
                                            )
                                        })}
                                        <td>
                                            <Link to={`players/${item.id}`}>
                                                <span className="material-icons">search</span>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </TableWrapper>
                {/* {itemNum[0]["COUNT(id)"] > 15 && itemNum[0]["COUNT(id)"]} */}
                <PaginationWrapper>
                    {pageList && pageList.map((page, index) => {
                        // console.log(Number(page), currentPage)
                        if (Math.abs((index+1)-currentPage)>2 && index!==pageList.length-1 && index!==pageList[0]-1) {
                            return (<Dot key={index}>.</Dot>)
                        }
                        // if (items===[]) return null;
                        return (
                            <PaginationBtn key={index} onClick={() => setCurrentPage(Number(page))} active={Number(page)===currentPage} type="submit">
                                {page}
                            </PaginationBtn>
                        )
                    })}
                </PaginationWrapper>
            </form>
        </Container>
    )
}

export default PlayerSearch;