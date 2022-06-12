const mysql      = require("mysql");
const connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "123456",
    port     : "3301",  //type your mysql port
    multipleStatements: true
});
 
connection.connect();
// const runQuery = (query) => {
//     if (query) {
//         connection.query(query, function(err,data) {
//             if(err) throw err;
//             console.log(data);
//         });
//     }
// }
const createDatabase = `CREATE DATABASE IF NOT EXISTS nba;`;
const useDatabase = `USE nba;`;
const createTable = `
    CREATE TABLE IF NOT EXISTS players (  # 新增產品資料表
        id INT NOT NULL AUTO_INCREMENT, # ID
        name varchar(50) NOT NULL,  # 球員名稱
        team_acronym varchar(50) NOT NULL,  # 隊名縮寫
        team_name varchar(50) NOT NULL,  # 隊名
        games_played INT NOT NULL,  # 打過的比賽次數
        minutes_per_game varchar(50) NOT NULL,  # 每場比賽出場分鐘數
        field_goals_attempted_per_game INT NOT NULL,  # 平均每場比賽的出手次數
        field_goals_made_per_game INT NOT NULL,  # 平均每場比賽的進球次數
        field_goal_percentage INT NOT NULL,  # 投籃命中率
        free_throw_percentage INT NOT NULL,  # 罰球命中率
        three_point_attempted_per_game INT NOT NULL,  # 平均每場比賽的三分球出手次數
        three_point_made_per_game INT NOT NULL,  # 平均每場比賽的三分球進球次數
        three_point_percentage INT NOT NULL,  # 三分球命中率
        points_per_game INT NOT NULL,  # 平均每場的得分數
        offensive_rebounds_per_game INT NOT NULL,  # 平均每場的進攻籃板球次數
        defensive_rebounds_per_game INT NOT NULL,  # 平均每場的防守籃板球次數
        rebounds_per_game INT NOT NULL,  # 平均每場的籃板球次數
        assists_per_game INT NOT NULL,  # 平均每場的助攻次數
        steals_per_game INT NOT NULL,  # 平均每場的抄截次數
        blocks_per_game INT NOT NULL,  # 平均每場的火鍋次數
        turnovers_per_game INT NOT NULL,  # 平均每場的失誤次數
        player_efficiency_rating INT NOT NULL,  # 球員效率值
        PRIMARY KEY (id)
    );
`;

// runQuery(createDatabase);
// runQuery(useDatabase);
// runQuery(createTable);
connection.query(createDatabase + useDatabase + createTable, function(err,data) {
    if(err) throw err;
    console.log(data);
});
 
const fs = require("fs");
let data = fs.readFileSync("./players.json");

data = JSON.parse(data);
console.log(data)

data.forEach((item, index) => {
    const id = 0;
    const name = item["name"];
    const team_acronym = item["team_acronym"];
    const team_name = item["team_name"];
    const games_played = item["games_played"];
    const minutes_per_game = item["minutes_per_game"];
    const field_goals_attempted_per_game = item["field_goals_attempted_per_game"];
    const field_goals_made_per_game = item["field_goals_made_per_game"];
    const field_goal_percentage = item["field_goal_percentage"];
    const free_throw_percentage = item["free_throw_percentage"];
    const three_point_attempted_per_game = item["three_point_attempted_per_game"];
    const three_point_made_per_game = item["three_point_made_per_game"];
    const three_point_percentage = item["three_point_percentage"];
    const points_per_game = item["points_per_game"];
    const offensive_rebounds_per_game = item["offensive_rebounds_per_game"];
    const defensive_rebounds_per_game = item["defensive_rebounds_per_game"];
    const rebounds_per_game = item["rebounds_per_game"];
    const assists_per_game = item["assists_per_game"];
    const steals_per_game = item["steals_per_game"];
    const blocks_per_game = item["blocks_per_game"];
    const turnovers_per_game = item["turnovers_per_game"];
    const player_efficiency_rating = item["player_efficiency_rating"];
    
    const insertData = `insert into players values ("${id}","${name}","${team_acronym}","${team_name}","${games_played}","${minutes_per_game}","${field_goals_attempted_per_game}","${field_goals_made_per_game}","${field_goal_percentage}","${free_throw_percentage}","${three_point_attempted_per_game}","${three_point_made_per_game}","${three_point_percentage}","${points_per_game}","${offensive_rebounds_per_game}","${defensive_rebounds_per_game}","${rebounds_per_game}","${assists_per_game}","${steals_per_game}","${blocks_per_game}","${turnovers_per_game}","${player_efficiency_rating}")`
    // runQuery(insertData);
    connection.query(insertData, function(err,data) {
        if(err) throw err;
        console.log(data);
    });
});

connection.end();

require('child_process').fork('dumpData.js');