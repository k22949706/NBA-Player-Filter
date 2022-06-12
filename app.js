const express = require('express');
const app = express();
const port = process.env.PORT || 9999;
// const bodyParser = require('body-parser');
app.use(express.json());

const mysql      = require("mysql");
const connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "123456",
    database : "nba",
    port     : "3301"
});

// const jsonParser = bodyParser.json();

app.get('/', (req, res) => res.send('Hello World!'));

//拿所有資料
app.get('/players', (req, res) => {
    const query = "SELECT * FROM players";
    connection.query(query, function(err,data) {
        if(err) throw err;
        res.json(data);
    });
 })

//拿所有隊伍名稱
app.get('/all_teams', (req, res) => {
    const query = "SELECT team_name FROM players GROUP BY team_name ORDER BY team_name";
    connection.query(query, function(err,data) {
        if(err) throw err;
        res.json(data);
    });
})

//拿隊伍orKeyword相關資料
app.post('/select_team/:team/:keyword?/:page/:order_type/:desc_or_asc', (req, res) => {
    const team_name = req.params.team;
    const order_type = req.params.order_type;
    const current_page = req.params.page;
    const desc_or_asc = req.params.desc_or_asc;
    const keyword = req.params.keyword;
    // console.log(team_name,keyword)
    const querySingle = `SELECT id,team_name,name,games_played,points_per_game,rebounds_per_game,assists_per_game,steals_per_game,blocks_per_game FROM players WHERE team_name = "${team_name}" ORDER BY ${order_type} ${desc_or_asc} LIMIT ${(current_page-1)*15},15`;
    const queryAll = `SELECT id,team_name,name,games_played,points_per_game,rebounds_per_game,assists_per_game,steals_per_game,blocks_per_game FROM players ORDER BY ${order_type} ${desc_or_asc} LIMIT ${(current_page-1)*15},15`;
    const query = team_name === 'All' ? queryAll : querySingle;
    const ForKeywordUseQuery = team_name === 'All' ? `SELECT * FROM players` : `SELECT * FROM players WHERE team_name = "${team_name}"`;
    const keywordQuery = `SELECT id,team_name,name,games_played,points_per_game,rebounds_per_game,assists_per_game,steals_per_game,blocks_per_game FROM (${ForKeywordUseQuery}) AS FirstQuery WHERE name LIKE "%${keyword}%" ORDER BY ${order_type} ${desc_or_asc} LIMIT ${(current_page-1)*15},15`;
    connection.query(!keyword ? query : keywordQuery, function(err,data) {
        if(err) throw err;
        // console.log(data)
        res.json(data);
    });
})

//拿資料筆數
app.post('/check_data_num/:team/:keyword?', (req, res) => {
    const team_name = req.params.team;
    const keyword = req.params.keyword;
    const querySingleNum = `SELECT COUNT(id) FROM players WHERE team_name = "${team_name}"`;
    const queryAllNum = `SELECT COUNT(id) FROM players`;
    const queryNum = team_name === 'All' ? queryAllNum : querySingleNum;
    const ForKeywordUseQuery = team_name === 'All' ?  `SELECT * FROM players` : `SELECT * FROM players WHERE team_name = "${team_name}"`;
    const keywordQueryNum = `SELECT COUNT(id) FROM (${ForKeywordUseQuery}) AS FirstQuery WHERE name LIKE "%${keyword}%"`;
    connection.query(!keyword ? queryNum : keywordQueryNum, function(err,data) {
        if(err) throw err;
        // console.log(data)
        res.json(data);
    });
})

//拿單一球員資料
app.get('/get_single_player_data/:id', (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM players WHERE id = "${id}"`;
    connection.query(query, function(err,data) {
        if(err) throw err;
        res.json(data);
    });
})

//拿15人以下球隊人數
app.get('/get_player_for_piechart', (req, res) => {
    const subQuery = `SELECT team_acronym, COUNT(*) AS count_player FROM players GROUP BY team_acronym`;
    const query = `SELECT team_acronym, count_player FROM (${subQuery}) AS FirstQuery WHERE count_player <= 15`;
    connection.query(query, function(err,data) {
        if(err) throw err;
        res.json(data);
    });
})

app.listen(port, () => console.log(`http://localhost:${port}`));